import { _decorator, Component, Node, sys } from 'cc';
import { GravityPlatform } from '../GeSdk/GravityPlatform';
import { Tool_Event } from '../../Tool/Tool_Event';
const { ccclass, property } = _decorator;

@ccclass('WxApi')
export class WxApi extends Component {

    private CustomAd: any[] = [];
    private customadIndex: number = 0;
    private customadTop: boolean = true;
    private customadBottom: boolean = false;
    private setTimer: number = -1;
    private isNewUser: boolean = false;
    private times: number = 0;

    private videoAd: any;
    private videoPath?: string;
    private InterstitialAd: any;

    private callback?: () => void;
    private close_callback?: () => void;

    openId: string = null;

    constructor() {
        super();
    }

    Data_Get(Data_Name: string, Default_Value: any = null): any {
        try {
            let Data_Value;
            const Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null;
            // 返回数据或默认值
            return Data_Value !== undefined ? Data_Value : Default_Value;
        } catch (e) {
            console.error(`[Storage] 读取 ${Data_Name} 失败:`, e);
            return Default_Value;
        }
    }

    Data_Set(Data_Name: string, Data: any): void {
        try {
            sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
        } catch (e) {
            console.error(`[Storage] 保存 ${Data_Name} 失败:`, e);
        }
    }

    /**授权 */
    authorize() { }

    /**
     * 初始化微信平台
     */
    onLoad(): void {
        console.log("微信平台初始化");
        //加载激励视频
        this.loadVideoAd("adunit-c6a790cad3e75438");
        //加载插屏广告
        this.loadInterstitialAd("adunit-74880b34ad4aa7f7");

        // 监听游戏显示事件
        wx.onShow((res: { scene: number }) => {
            console.log("wx.onShow:", res.scene);
            Tool_Event.instance.Event_Dispatch("WXOnShow");
        });

        this.login();

        // this.getUserProfile();


        // this.initAutoSetting();


    }


    /**登录 */
    login() {
        wx.login({
            timeout: 5000, //超时时间
            success: (res) => {
                if (res.code) {
                    console.log('获取code成功:', res.code);
                    let openId = this.Data_Get("openId");
                    if (openId == null || openId == undefined) {
                        this.sendCodeToServer(res.code);
                    } else {
                        this.openId = openId;
                        console.log("初始化引力引擎", this.openId);
                        GravityPlatform.instance.initGeSdk(this.openId);
                    }
                } else {
                    console.error('获取code失败:', res.errMsg);
                }
            },
            fail: (err) => {
                console.error('wx.login调用失败:', err);
            },
            complete: () => {
                console.log('wx.login调用完成');
            }
        });
    }
    // 将code发送到开发者服务器
    sendCodeToServer(code) {
        wx.request({
            url: 'https://yx.megoo.top/zhishanggoubudao/user/getWxOpenId',
            method: 'POST',
            data: {
                code: code
            },
            success: (res) => {
                console.log('服务器响应:', res.data);
                console.log('openId:', res.data.openId);
                this.openId = res.data.openId;
                this.Data_Set("openId", this.openId);

                GravityPlatform.instance.initGeSdk(this.openId);
            }
        });
    }

    /**获取用户信息 */
    getUserProfile() {
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: (res) => {
                console.log('用户信息:', res.userInfo);
                //获取到头像URL
                const avatarUrl = res.userInfo.avatarUrl;
                console.log(avatarUrl);
                // this.saveUserAvatar(avatarUrl, openId);
            },
            fail: (err) => {
                console.error('获取用户信息失败:', err);
            }
        });
    }


    // 获取标记权限
    public initAutoSetting() {
        // 获取请求过的权限标记
        let object: any = {
            // 成功回调         
            success: (res) => {
                // 是否授权用户信息
                const autoSetting = res.authSetting;
                if (autoSetting["scope.userInfo"]) {
                    // 已授权
                    this.getUserInfo();
                } else {
                    // 未授权
                    this.creatUserInfoButton();
                }
            },
            // 失败回调
            fail() {
                console.log("wx.getSetting获取用户配置失败");
            },
            // 结束回调(调用成功，失败都会执行)
            complete() {
                console.log("wx.getSetting获取用户配置结束");
            }
        }
        wx.getSetting(object);
    }



    private _userInfo;
    // 头像回调
    private _avatarCallBack = null;

    // 创建用户授权按钮(仅用于登录页面, 如果用户拒绝授权，则一直显示)
    private creatUserInfoButton(isFull: boolean = false) {
        const wx = window['wx'];
        let object: any = {
            // 按钮类型： text可设置背景色和文本 image仅能设置背景贴图
            type: "text",
            // 按钮文本，仅对type为text有效
            text: "授权",
            // 按钮样式
            style: {
                left: 70,
                top: 60,
                width: 100,
                height: 40,
                backgroundColor: "#66CC00",
                color: "#FFFFFF",
                textAlign: 'center',
                lineHeight: 40,
                fontSize: 20,
            },
        };

        const button = wx.createUserInfoButton(object);
        // 监听用户信息按钮点击事件
        button.onTap((res) => {
            if (res && res.userInfo) {
                console.log("用户同意授权");
                this._userInfo = res.userInfo;
                if (this._avatarCallBack) {
                    this._avatarCallBack(this._userInfo.avatarUrl);
                }
                // 授权成功后，才销毁按钮
                button.destroy();
            } else {
                console.log("用户拒绝授权");
            }
        });
    }

    // 获取用户信息，需要获取scope.userInfo的授权，也就是getSettings的接口调用
    public getUserInfo() {
        const wx = window['wx'];
        let object: any = {
            success: (res) => {
                console.log("通过 getUserInfo 获取的数据:", res);
                if (res) {
                    this._userInfo = res.userInfo;
                    if (this._avatarCallBack) {
                        this._avatarCallBack(this._userInfo.avatarUrl);
                    }
                }
            },
            fail: () => {
                console.log("getUserInfo获取信息失败");
            },
            complete: () => { },
        };
        wx.getUserInfo(object);
    }






    //-----------------------------------


    /**
     * 设置游戏帧率
     * @param frameRate 目标帧率（建议30/60）
     */
    setFrameRate(frameRate: number): void {
        wx.setPreferredFramesPerSecond(frameRate);
    }

    addShortcut() { }

    openAwemeUserProfile() { }

    /**
     * 检查是否在微信平台
     */
    isPlatform(): boolean {
        return !!window.wx;
        return (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM);
    }

    /**
     * 检查是否有录制的视频
     */
    isRecordVideo(): boolean {
        return !!this.videoPath;
    }

    /**
     * 显示Toast提示
     * @param title 提示内容
     * @param icon 图标类型 ("success"/"loading"/"none")
     * @param duration 显示时长(ms)，默认2000
     */
    showToast(title: string, icon: string | "success" | "loading" | "none" = "none", duration: number = 2000): void {
        wx.showToast({
            title,
            icon,
            duration
        });
    }


    startRecordVideo(t) {
        undefined === t && (t = 90);
    }

    stopRecordVideo() {

    }

    loadRecordVideo() { }






    /**加载激励视频广告 */
    loadVideoAd(adUnitId: string): void {
        this.videoAd = wx.createRewardedVideoAd({
            adUnitId: adUnitId,
        });
        // 广告关闭回调
        this.videoAd.onClose((res: { isEnded: boolean }) => {
            if (res.isEnded) {
                this.callback && this.callback(); // 完整观看回调
            } else {
                this.close_callback && this.close_callback(); // 中途关闭回调
            }
            this.callback = null;
            this.close_callback = null;
        });
        // 广告错误回调
        this.videoAd.onError((err: any) => {
            console.log("onError" + err);
            this.showToast("视频加载错误", "fail");
        });
    }
    /**
     * 展示激励视频广告
     * @param successCallback 观看完成的回调
     * @param closeCallback 中途关闭的回调
     */
    showVideoAd(successCallback: () => void, closeCallback?: () => void): void {
        console.log("展示激励广告");
        if (!this.videoAd) {
            console.warn("激励广告未初始化");
            return;
        }
        this.callback = successCallback;
        this.close_callback = closeCallback || null;
        this.videoAd.show()
            .then(() => {
                console.log("激励广告展示成功");
                GravityPlatform.instance.onAdFinish();
            })
            .catch((err) => {
                console.error("激励广告展示失败:", err);
                this.reLoadVideo();
            });
    }
    /**
     * 重新加载激励视频广告
     */
    reLoadVideo(): void {
        this.videoAd?.load().then(() => {
            console.log("激励广告重载成功");
            this.videoAd.show();
        }).catch(() => {
            console.error("激励广告重载失败");
            this.showToast("视频显示失败, 稍后重试", "fail");
        });
    }





    createInterstitialAd() { }

    private isInterstitialLoading: boolean = false;
    private interstitialRetryCount: number = 0;
    private readonly MAX_RETRY_COUNT: number = 3;
    /** 加载插屏广告（仅在广告未初始化或需要更换广告ID时调用） */
    loadInterstitialAd(adUnitId: string): void {
        // 如果广告已存在且未更换广告ID，无需重新创建
        if (this.InterstitialAd && this.InterstitialAd.adUnitId === adUnitId) {
            console.log("广告已存在，无需重新加载");
            return;
        }
        // 销毁旧广告（如果有）
        if (this.InterstitialAd) {
            this.InterstitialAd.destroy();
            this.InterstitialAd = null;
        }
        // 创建新广告
        this.InterstitialAd = wx.createInterstitialAd({
            adUnitId: adUnitId,
        });
        this.isInterstitialLoading = true;
        // 监听广告加载成功
        this.InterstitialAd.onLoad(() => {
            console.log("插屏广告加载成功");
            this.isInterstitialLoading = false;
            this.interstitialRetryCount = 0; // 重置重试次数
        });
        // 监听广告关闭
        this.InterstitialAd.onClose(() => {
            console.log("插屏广告已关闭");
            // 广告关闭后可以尝试重新加载
            this.loadInterstitialAd(adUnitId);
        });
        // 监听广告错误
        this.InterstitialAd.onError((err) => {
            console.log("插屏广告加载失败:", err);
            this.isInterstitialLoading = false;
            // 特定错误码处理
            if (err.errCode === 1004) {
                console.log("广告已过期，尝试重新加载");
                this.reLoadInterstitial(adUnitId);
            } else {
                // this.showToast("广告加载失败，请稍后再试", "fail");
            }
        });
        // 主动加载广告
        this.InterstitialAd.load().catch((err) => {
            console.log("主动加载失败:", err);
            this.isInterstitialLoading = false;
        });
    }

    /** 展示插屏广告 */
    showInterstitialAd(): void {
        if (!this.InterstitialAd) {
            console.warn("广告未初始化，尝试加载");
            this.loadInterstitialAd("adunit-583b7c2c8548161c");
            return;
        }
        // 如果广告正在加载，延迟展示
        if (this.isInterstitialLoading) {
            console.log("广告正在加载，延迟展示");
            setTimeout(() => this.showInterstitialAd(), 1000);
            return;
        }
        this.InterstitialAd.show()
            .then(() => {
                console.log("插屏广告展示成功");
            })
            .catch((err) => {
                console.log("插屏广告展示失败:", err);
                // 如果是未加载完成（2004），延迟重试
                if (err.errCode === 2004) {
                    console.log("广告未加载完成，1秒后重试");
                    setTimeout(() => this.showInterstitialAd(), 1000);
                } else {
                    // this.showToast("广告展示失败", "fail");
                }
            });
    }

    /** 重新加载插屏广告（带重试限制） */
    reLoadInterstitial(adUnitId: string): void {
        if (this.interstitialRetryCount >= this.MAX_RETRY_COUNT) {
            console.log("已达到最大重试次数，停止加载");
            return;
        }
        this.interstitialRetryCount++;
        console.log(`第 ${this.interstitialRetryCount} 次重试加载广告`);
        // 延迟1秒后重试，避免频繁请求
        this.scheduleOnce(() => {
            this.loadInterstitialAd(adUnitId);
        }, 1);
    }

    /**显示分享菜单 */
    showShareMenu(): void {
        const shareUrl = "https://zhishanggoubudao-1328679667.cos.ap-shanghai.myqcloud.com/share/0.webp"; // 替换为实际分享图片URL
        wx.showShareMenu({
            title: "别笑，你试了也过不了第三关",
            imageUrl: shareUrl,
            query: this.openId,
            menus: ['shareAppMessage', 'shareTimeline'],
        });

        wx.onShareAppMessage(() => {
            return {
                title: "别笑，你试了也过不了第三关",
                imageUrl: shareUrl,
                query: this.openId
            };
        });
    }

    /**主动分享 */
    shareAppMessage(successCallback: () => void, failCallback?: () => void) {
        console.log("主动分享");
        var o;
        var n = this;
        o = ["https://zhishanggoubudao-1328679667.cos.ap-shanghai.myqcloud.com/share/0.webp"];// $z1PublicMager.default.get().config.share_url;
        var a = Math.floor(Math.random() * o.length);
        wx.shareAppMessage({
            title: "别笑，你试了也过不了第三关",
            imageUrl: o[a],
            query: "openId=" + this.openId,
            success() {
                console.log("分享视频成功");
                successCallback();
            },
            fail() {
                console.log("需要分享游戏给好友才能获得奖励哟！");
                failCallback();
            }
        });
    };



    share_show() { }

    onShareAppVideo(t, e) {
        undefined === e && (e = true);
        this.shareAppMessage(t, e);
    }

    reportAnalytics(t, e) {
        undefined === e && (e = {});
        // wx.reportAnalytics(t, e);
    }



    setImRankDataScore() { }
    setImRankDataDuanWei() { }
    createCustomAd() { }

    updateCustomAd() {
        this.hideCustomAd(true, true);
        this.customadIndex = (this.customadIndex + 4) % this.CustomAd.length;
        this.showCustomAdSelf(this.customadTop, this.customadBottom);
    }


    showCustomAd(showTop: boolean, showBottom: boolean): void {
        clearInterval(this.setTimer);
        this.setTimer = window.setInterval(() => this.updateCustomAd(), 10000);
        this.customadTop = showTop;
        this.customadBottom = showBottom;
        this.showCustomAdSelf(showTop, showBottom);
    }

    showCustomAdSelf(showTop: boolean, showBottom: boolean): void {
        for (let i = 0; i < 4; i++) {
            const ad = this.CustomAd[this.customadIndex + i];
            if (!ad) continue;

            const shouldShow = (i < 2 && showTop) || (i >= 2 && showBottom);
            shouldShow && (ad.isShow() || ad.show());
        }
    }

    hideCustomAd(hideTop: boolean, hideBottom: boolean): void {
        this.CustomAd.forEach((ad, index) => {
            const position = index % 4;
            if (ad?.isShow() && (
                (hideTop && position < 2) ||
                (hideBottom && position >= 2)
            )) {
                ad.hide();
            }
        });
    }

    requestSubscribeMessage() { }

    onShow(Env) {
        wx.onShow(Env);
    }

    offShow(Env) {
        wx.offShow(Env);
    }

    onHide(Env) {
        wx.onHide(Env);
    }

    offHide(Env) {
        wx.offHide(Env);
    }

    getLaunchOptionsSync() {
        return wx.getLaunchOptionsSync();
    }

    /**
     * 微信震动功能
     * @param Type 震动强度类型，可选值为 'heavy' | 'medium' | 'light'，默认为'medium'
     * @param Callbacks 可选的回调函数配置
     * @param Callbacks.success 震动成功的回调函数
     * @param Callbacks.fail 震动失败的回调函数
     * @param Callbacks.complete 震动完成的回调函数（无论成功失败都会执行）
     */
    vibrateShort(
        Type: 'heavy' | 'medium' | 'light' = 'heavy',
        Callbacks?: {
            success?: () => void,
            fail?: (err: { errMsg: string }) => void,
            complete?: () => void
        }
    ): void {
        wx.vibrateShort({ Type, ...Callbacks });
    }

    shareMessageToFriend() {
        wx.shareMessageToFriend({
            // 必填参数
            openId: '好友的openid', // 要分享的好友openid

            // 分享内容配置（三选一）
            title: '分享标题',      // 文本分享
            imageUrl: '图片路径',   // 图片分享
            path: '页面路径',       // 小程序页面分享

            // 可选参数
            templateId: '模板ID',   // 使用服务消息模板
            imageFileId: '媒体ID',  // 使用已上传的媒体文件

            // 回调函数
            success(res) {
                console.log('分享成功', res)
            },
            fail(err) {
                console.error('分享失败', err)
            },
            complete() {
                console.log('分享完成')
            }
        })
    }


}


