System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, GravityPlatform, Tool_Event, _dec, _class, _crd, ccclass, property, WxApi;

  function _reportPossibleCrUseOfGravityPlatform(extras) {
    _reporterNs.report("GravityPlatform", "../GeSdk/GravityPlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../../Tool/Tool_Event", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GravityPlatform = _unresolved_2.GravityPlatform;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2fb86irMRBHY3QI4UbDz/d", "WxApi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WxApi", WxApi = (_dec = ccclass('WxApi'), _dec(_class = class WxApi extends Component {
        constructor() {
          super();
          this.CustomAd = [];
          this.customadIndex = 0;
          this.customadTop = true;
          this.customadBottom = false;
          this.setTimer = -1;
          this.isNewUser = false;
          this.times = 0;
          this.videoAd = void 0;
          this.videoPath = void 0;
          this.InterstitialAd = void 0;
          this.callback = void 0;
          this.close_callback = void 0;
          this.openId = null;
          this._userInfo = void 0;
          // 头像回调
          this._avatarCallBack = null;
          this.isInterstitialLoading = false;
          this.interstitialRetryCount = 0;
          this.MAX_RETRY_COUNT = 3;
        }

        Data_Get(Data_Name, Default_Value = null) {
          try {
            let Data_Value;
            const Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null; // 返回数据或默认值

            return Data_Value !== undefined ? Data_Value : Default_Value;
          } catch (e) {
            console.error(`[Storage] 读取 ${Data_Name} 失败:`, e);
            return Default_Value;
          }
        }

        Data_Set(Data_Name, Data) {
          try {
            sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
          } catch (e) {
            console.error(`[Storage] 保存 ${Data_Name} 失败:`, e);
          }
        }
        /**授权 */


        authorize() {}
        /**
         * 初始化微信平台
         */


        onLoad() {
          console.log("微信平台初始化"); //加载激励视频

          this.loadVideoAd("adunit-c6a790cad3e75438"); //加载插屏广告

          this.loadInterstitialAd("adunit-74880b34ad4aa7f7"); // 监听游戏显示事件

          wx.onShow(res => {
            console.log("wx.onShow:", res.scene);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Event_Dispatch("WXOnShow");
          });
          this.login(); // this.getUserProfile();
          // this.initAutoSetting();
        }
        /**登录 */


        login() {
          wx.login({
            timeout: 5000,
            //超时时间
            success: res => {
              if (res.code) {
                console.log('获取code成功:', res.code);
                let openId = this.Data_Get("openId");

                if (openId == null || openId == undefined) {
                  this.sendCodeToServer(res.code);
                } else {
                  this.openId = openId;
                  console.log("初始化引力引擎", this.openId);
                  (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                    error: Error()
                  }), GravityPlatform) : GravityPlatform).instance.initGeSdk(this.openId);
                }
              } else {
                console.error('获取code失败:', res.errMsg);
              }
            },
            fail: err => {
              console.error('wx.login调用失败:', err);
            },
            complete: () => {
              console.log('wx.login调用完成');
            }
          });
        } // 将code发送到开发者服务器


        sendCodeToServer(code) {
          wx.request({
            url: 'https://yx.megoo.top/zhishanggoubudao/user/getWxOpenId',
            method: 'POST',
            data: {
              code: code
            },
            success: res => {
              console.log('服务器响应:', res.data);
              console.log('openId:', res.data.openId);
              this.openId = res.data.openId;
              this.Data_Set("openId", this.openId);
              (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                error: Error()
              }), GravityPlatform) : GravityPlatform).instance.initGeSdk(this.openId);
            }
          });
        }
        /**获取用户信息 */


        getUserProfile() {
          wx.getUserProfile({
            desc: '用于完善会员资料',
            success: res => {
              console.log('用户信息:', res.userInfo); //获取到头像URL

              const avatarUrl = res.userInfo.avatarUrl;
              console.log(avatarUrl); // this.saveUserAvatar(avatarUrl, openId);
            },
            fail: err => {
              console.error('获取用户信息失败:', err);
            }
          });
        } // 获取标记权限


        initAutoSetting() {
          // 获取请求过的权限标记
          let object = {
            // 成功回调         
            success: res => {
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

          };
          wx.getSetting(object);
        }

        // 创建用户授权按钮(仅用于登录页面, 如果用户拒绝授权，则一直显示)
        creatUserInfoButton(isFull = false) {
          const wx = window['wx'];
          let object = {
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
              fontSize: 20
            }
          };
          const button = wx.createUserInfoButton(object); // 监听用户信息按钮点击事件

          button.onTap(res => {
            if (res && res.userInfo) {
              console.log("用户同意授权");
              this._userInfo = res.userInfo;

              if (this._avatarCallBack) {
                this._avatarCallBack(this._userInfo.avatarUrl);
              } // 授权成功后，才销毁按钮


              button.destroy();
            } else {
              console.log("用户拒绝授权");
            }
          });
        } // 获取用户信息，需要获取scope.userInfo的授权，也就是getSettings的接口调用


        getUserInfo() {
          const wx = window['wx'];
          let object = {
            success: res => {
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
            complete: () => {}
          };
          wx.getUserInfo(object);
        } //-----------------------------------

        /**
         * 设置游戏帧率
         * @param frameRate 目标帧率（建议30/60）
         */


        setFrameRate(frameRate) {
          wx.setPreferredFramesPerSecond(frameRate);
        }

        addShortcut() {}

        openAwemeUserProfile() {}
        /**
         * 检查是否在微信平台
         */


        isPlatform() {
          return !!window.wx;
          return sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM;
        }
        /**
         * 检查是否有录制的视频
         */


        isRecordVideo() {
          return !!this.videoPath;
        }
        /**
         * 显示Toast提示
         * @param title 提示内容
         * @param icon 图标类型 ("success"/"loading"/"none")
         * @param duration 显示时长(ms)，默认2000
         */


        showToast(title, icon = "none", duration = 2000) {
          wx.showToast({
            title,
            icon,
            duration
          });
        }

        startRecordVideo(t) {
          undefined === t && (t = 90);
        }

        stopRecordVideo() {}

        loadRecordVideo() {}
        /**加载激励视频广告 */


        loadVideoAd(adUnitId) {
          this.videoAd = wx.createRewardedVideoAd({
            adUnitId: adUnitId
          }); // 广告关闭回调

          this.videoAd.onClose(res => {
            if (res.isEnded) {
              this.callback && this.callback(); // 完整观看回调
            } else {
              this.close_callback && this.close_callback(); // 中途关闭回调
            }

            this.callback = null;
            this.close_callback = null;
          }); // 广告错误回调

          this.videoAd.onError(err => {
            console.log("onError" + err);
            this.showToast("视频加载错误", "fail");
          });
        }
        /**
         * 展示激励视频广告
         * @param successCallback 观看完成的回调
         * @param closeCallback 中途关闭的回调
         */


        showVideoAd(successCallback, closeCallback) {
          console.log("展示激励广告");

          if (!this.videoAd) {
            console.warn("激励广告未初始化");
            return;
          }

          this.callback = successCallback;
          this.close_callback = closeCallback || null;
          this.videoAd.show().then(() => {
            console.log("激励广告展示成功");
            (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
              error: Error()
            }), GravityPlatform) : GravityPlatform).instance.onAdFinish();
          }).catch(err => {
            console.error("激励广告展示失败:", err);
            this.reLoadVideo();
          });
        }
        /**
         * 重新加载激励视频广告
         */


        reLoadVideo() {
          var _this$videoAd;

          (_this$videoAd = this.videoAd) == null || _this$videoAd.load().then(() => {
            console.log("激励广告重载成功");
            this.videoAd.show();
          }).catch(() => {
            console.error("激励广告重载失败");
            this.showToast("视频显示失败, 稍后重试", "fail");
          });
        }

        createInterstitialAd() {}

        /** 加载插屏广告（仅在广告未初始化或需要更换广告ID时调用） */
        loadInterstitialAd(adUnitId) {
          // 如果广告已存在且未更换广告ID，无需重新创建
          if (this.InterstitialAd && this.InterstitialAd.adUnitId === adUnitId) {
            console.log("广告已存在，无需重新加载");
            return;
          } // 销毁旧广告（如果有）


          if (this.InterstitialAd) {
            this.InterstitialAd.destroy();
            this.InterstitialAd = null;
          } // 创建新广告


          this.InterstitialAd = wx.createInterstitialAd({
            adUnitId: adUnitId
          });
          this.isInterstitialLoading = true; // 监听广告加载成功

          this.InterstitialAd.onLoad(() => {
            console.log("插屏广告加载成功");
            this.isInterstitialLoading = false;
            this.interstitialRetryCount = 0; // 重置重试次数
          }); // 监听广告关闭

          this.InterstitialAd.onClose(() => {
            console.log("插屏广告已关闭"); // 广告关闭后可以尝试重新加载

            this.loadInterstitialAd(adUnitId);
          }); // 监听广告错误

          this.InterstitialAd.onError(err => {
            console.log("插屏广告加载失败:", err);
            this.isInterstitialLoading = false; // 特定错误码处理

            if (err.errCode === 1004) {
              console.log("广告已过期，尝试重新加载");
              this.reLoadInterstitial(adUnitId);
            } else {// this.showToast("广告加载失败，请稍后再试", "fail");
            }
          }); // 主动加载广告

          this.InterstitialAd.load().catch(err => {
            console.log("主动加载失败:", err);
            this.isInterstitialLoading = false;
          });
        }
        /** 展示插屏广告 */


        showInterstitialAd() {
          if (!this.InterstitialAd) {
            console.warn("广告未初始化，尝试加载");
            this.loadInterstitialAd("adunit-583b7c2c8548161c");
            return;
          } // 如果广告正在加载，延迟展示


          if (this.isInterstitialLoading) {
            console.log("广告正在加载，延迟展示");
            setTimeout(() => this.showInterstitialAd(), 1000);
            return;
          }

          this.InterstitialAd.show().then(() => {
            console.log("插屏广告展示成功");
          }).catch(err => {
            console.log("插屏广告展示失败:", err); // 如果是未加载完成（2004），延迟重试

            if (err.errCode === 2004) {
              console.log("广告未加载完成，1秒后重试");
              setTimeout(() => this.showInterstitialAd(), 1000);
            } else {// this.showToast("广告展示失败", "fail");
            }
          });
        }
        /** 重新加载插屏广告（带重试限制） */


        reLoadInterstitial(adUnitId) {
          if (this.interstitialRetryCount >= this.MAX_RETRY_COUNT) {
            console.log("已达到最大重试次数，停止加载");
            return;
          }

          this.interstitialRetryCount++;
          console.log(`第 ${this.interstitialRetryCount} 次重试加载广告`); // 延迟1秒后重试，避免频繁请求

          this.scheduleOnce(() => {
            this.loadInterstitialAd(adUnitId);
          }, 1);
        }
        /**显示分享菜单 */


        showShareMenu() {
          const shareUrl = "https://zhishanggoubudao-1328679667.cos.ap-shanghai.myqcloud.com/share/0.webp"; // 替换为实际分享图片URL

          wx.showShareMenu({
            title: "别笑，你试了也过不了第三关",
            imageUrl: shareUrl,
            query: this.openId,
            menus: ['shareAppMessage', 'shareTimeline']
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


        shareAppMessage(successCallback, failCallback) {
          console.log("主动分享");
          var o;
          var n = this;
          o = ["https://zhishanggoubudao-1328679667.cos.ap-shanghai.myqcloud.com/share/0.webp"]; // $z1PublicMager.default.get().config.share_url;

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
        }

        share_show() {}

        onShareAppVideo(t, e) {
          undefined === e && (e = true);
          this.shareAppMessage(t, e);
        }

        reportAnalytics(t, e) {
          undefined === e && (e = {}); // wx.reportAnalytics(t, e);
        }

        setImRankDataScore() {}

        setImRankDataDuanWei() {}

        createCustomAd() {}

        updateCustomAd() {
          this.hideCustomAd(true, true);
          this.customadIndex = (this.customadIndex + 4) % this.CustomAd.length;
          this.showCustomAdSelf(this.customadTop, this.customadBottom);
        }

        showCustomAd(showTop, showBottom) {
          clearInterval(this.setTimer);
          this.setTimer = window.setInterval(() => this.updateCustomAd(), 10000);
          this.customadTop = showTop;
          this.customadBottom = showBottom;
          this.showCustomAdSelf(showTop, showBottom);
        }

        showCustomAdSelf(showTop, showBottom) {
          for (let i = 0; i < 4; i++) {
            const ad = this.CustomAd[this.customadIndex + i];
            if (!ad) continue;
            const shouldShow = i < 2 && showTop || i >= 2 && showBottom;
            shouldShow && (ad.isShow() || ad.show());
          }
        }

        hideCustomAd(hideTop, hideBottom) {
          this.CustomAd.forEach((ad, index) => {
            const position = index % 4;

            if (ad != null && ad.isShow() && (hideTop && position < 2 || hideBottom && position >= 2)) {
              ad.hide();
            }
          });
        }

        requestSubscribeMessage() {}

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


        vibrateShort(Type = 'heavy', Callbacks) {
          wx.vibrateShort({
            Type,
            ...Callbacks
          });
        }

        shareMessageToFriend() {
          wx.shareMessageToFriend({
            // 必填参数
            openId: '好友的openid',
            // 要分享的好友openid
            // 分享内容配置（三选一）
            title: '分享标题',
            // 文本分享
            imageUrl: '图片路径',
            // 图片分享
            path: '页面路径',
            // 小程序页面分享
            // 可选参数
            templateId: '模板ID',
            // 使用服务消息模板
            imageFileId: '媒体ID',

            // 使用已上传的媒体文件
            // 回调函数
            success(res) {
              console.log('分享成功', res);
            },

            fail(err) {
              console.error('分享失败', err);
            },

            complete() {
              console.log('分享完成');
            }

          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5d2e928c5ebfbb2dd034881c4dc34d2290b7b86.js.map