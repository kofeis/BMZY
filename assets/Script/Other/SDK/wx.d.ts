/** 微信小程序接口定义 */
declare namespace wx {
    var Env: any;


    export function onMemoryWarning(arg: any): any;
    export function login(arg: any): any;
    export function createOpenSettingButton(arg: any): any;
    export function createUserInfoButton(arg: any): any;
    export function getUserInfo(arg: any): any;
    export function getSetting(arg: any): any;
    export function authorize(arg: any): any;
    export function postMessage(arg: any);
    export function request(arg: any);
    export function getShareInfo(arg: any);
    export function shareAppMessage(arg: any);
    export function onShareTimeline(arg: any);
    export function updateShareMenu(arg: any);
    export function onShareAppMessage(arg: any);

    export function loadSubpackage(arg: any);
    export function downloadFile(arg: any);

    export function startRecord();
    export function onNetworkStatusChange(cb: Function);
    export function offNetworkStatusChange(cb?: Function);
    export function getSystemInfo(arg: any);
    export function getSystemInfoSync();



    export function hideKeyboard();



    export function showLoading(arg: any);
    export function hideLoading(arg?: any);
    export function showModal(arg: any);
    export function exitMiniProgram(arg?: any);
    export function createBannerAd(arg: any);
    export function navigateToMiniProgram(arg: any);
    export function createGridAd(arg: any);
    export function setKeepScreenOn(arg: any);
    export function getBatteryInfo(arg: any);
    export function getScreenBrightness(arg: any);
    export function getNetworkType(arg: any);
    export function createCustomAd(arg: any);
    export function saveImageToPhotosAlbum(arg: any);
    export function startRenderDestroy();
    export function requestMidasPayment(arg: any);
    export function openCustomerServiceConversation(arg: any);
    export function getStorageInfoSync();
    export function restartMiniProgram();
    export function getFileSystemManager(): any;




    /**调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台账号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台账号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成 */
    export function login();

    /**获取用户信息。页面产生点击事件（例如 button 上 bindtap 的回调中）后才可调用，每次请求都会弹出授权窗口，用户同意后返回 userInfo。该接口用于替换 wx.getUserInfo */
    export function getUserProfile(arg: any): any;





    /**检查登录态 session_key 是否过期 */
    export function checkSession();



    /**对用户托管数据进行写数据操作。允许同时写多组 KV 数据 */
    export function setUserCloudStorage(arg: any): any;
    /**获取开放数据域 */
    export function getOpenDataContext();



    /**获取全局唯一的版本更新管理器，用于管理小游戏的更新 */
    export function getUpdateManager(): any;
    /**短震动 */
    export function vibrateShort(arg: any): any;

    /**可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。帧率，有效范围 1 - 60 */
    export function setPreferredFramesPerSecond(arg: any): any;


    /**显示消息提示框 */
    export function showToast(arg: any);
    /**隐藏消息提示框 */
    export function hideToast(arg?: any);
    /**设置右上角点开的详情界面中的分享按钮是否可用 */
    export function showShareMenu(arg: any);

    /**给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 wx.modifyFriendInteractiveStorage 传入参数 quiet=true 发起一次无需弹框确认的好友互动。 */
    export function shareMessageToFriend(arg: any);


    /**注册小游戏回到前台的事件的监听函数 */
    export function onShow(arg: any): any;
    /**注销小游戏回到前台的事件的监听函数 */
    export function offShow(arg: any);
    /**注册原生模板广告隐藏事件, 某些模板如矩阵格子模板用户点击关闭时也会触发该事件 */
    export function onHide(arg: any): any;
    /**注销原生模板广告隐藏事件的监听函数 */
    export function offHide(arg: any): any;


    /**创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用） */
    export function createRewardedVideoAd(arg: any);
    /**创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用） */
    export function createInterstitialAd(arg: any);



    /**获取小游戏冷启动时的参数。热启动参数通过 wx.onShow 或 wx.getEnterOptionsSync 接口获取。 */
    export function getLaunchOptionsSync(): any;


    /***********  阿拉丁SDK接口定义 ***********/
    export function aldSendOpenid(openId: string);
    /**
     * 自定义事件
     * wx.aldSendEvent('事件名称',{'参数key' : '参数value'})
     *
     * eg1:
     * wx.aldSendEvent("玩家角色死亡",{
     *     "关卡" : "56关",
     *     "耗时" : startTime -  Date.now()
     *})
     *
     * eg2:
     * wx.aldSendEvent("点击商城")
     */
    export function aldSendEvent(name: string, para?: { key: any; value: any });
    // 替代微信分享
    export function aldShareAppMessage(arg: any);
    // 替代微信分享监听
    export function aldOnShareAppMessage(arg: any);

    export var aldStage: {
        onStart(arg: any): Function;
        onRunning(arg: any): Function;
        onEnd(arg: any): Function;
    };





    /**获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。该接口需要用户授权，且只在开放数据域下可用。 */




    /***********  阿拉丁SDK接口定义 ***********/
}
