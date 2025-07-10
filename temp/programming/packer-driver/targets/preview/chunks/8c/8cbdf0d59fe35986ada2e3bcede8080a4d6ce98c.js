System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, WxApi, _dec, _class, _class2, _crd, ccclass, property, PlatformApi;

  function _reportPossibleCrUseOfWxApi(extras) {
    _reporterNs.report("WxApi", "./WxApi", _context.meta, extras);
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
      WxApi = _unresolved_2.WxApi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff551WlXgREQYon934Yryc7", "PlatformApi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator); // 定义平台接口

      _export("PlatformApi", PlatformApi = (_dec = ccclass('PlatformApi'), _dec(_class = (_class2 = class PlatformApi extends Component {
        constructor() {
          super(...arguments);
          this.PlatformCurrent = null;

          this.shareAppMessage = function (successCallback, failCallback) {
            if (this.PlatformCurrent) {
              var _this$PlatformCurrent;

              (_this$PlatformCurrent = this.PlatformCurrent) == null || _this$PlatformCurrent.shareAppMessage(successCallback, failCallback);
            } else {
              successCallback();
            }
          };
        }

        /**
         * 初始化平台适配器
         */
        onLoad() {
          console.log("平台", sys.platform);

          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            console.info("初始化", sys.platform);
            this.PlatformCurrent = new (_crd && WxApi === void 0 ? (_reportPossibleCrUseOfWxApi({
              error: Error()
            }), WxApi) : WxApi)();
          }

          if (this.PlatformCurrent) {
            this.PlatformCurrent.onLoad();
            this.PlatformCurrent.showShareMenu();
          }
        }

        showToast(title, icon, duration) {
          var _this$PlatformCurrent2;

          if (icon === void 0) {
            icon = "none";
          }

          if (duration === void 0) {
            duration = 2000;
          }

          (_this$PlatformCurrent2 = this.PlatformCurrent) == null || _this$PlatformCurrent2.showToast(title, icon, duration);
        }

        startRecordVideo(t) {
          var _this$PlatformCurrent3;

          undefined === t && (t = 90);
          (_this$PlatformCurrent3 = this.PlatformCurrent) == null || _this$PlatformCurrent3.startRecordVideo(t);
        }

        stopRecordVideo() {
          var _this$PlatformCurrent4;

          (_this$PlatformCurrent4 = this.PlatformCurrent) == null || _this$PlatformCurrent4.stopRecordVideo();
        }
        /**
         * 显示激励广告
         * @param success 观看完成的回调
         * @param fail 观看失败的回调
         */


        showVideoAd(success, fail) {
          if (this.PlatformCurrent) {
            var _this$PlatformCurrent5;

            (_this$PlatformCurrent5 = this.PlatformCurrent) == null || _this$PlatformCurrent5.showVideoAd(success, fail);
          } else {
            success();
          }
        }
        /**
         * 加载激励广告
         */


        loadVideoAd(adUnitId) {
          var _this$PlatformCurrent6;

          console.log("加载激励视频");
          (_this$PlatformCurrent6 = this.PlatformCurrent) == null || _this$PlatformCurrent6.loadVideoAd(adUnitId);
        }
        /**
         * 重新加载激励广告
         */


        reLoadVideo() {
          var _this$PlatformCurrent7;

          (_this$PlatformCurrent7 = this.PlatformCurrent) == null || _this$PlatformCurrent7.reLoadVideo();
        }

        createInterstitialAd() {
          var _this$PlatformCurrent8;

          (_this$PlatformCurrent8 = this.PlatformCurrent) == null || _this$PlatformCurrent8.createInterstitialAd();
        }

        /**
         * 显示插屏广告
         */
        showInterstitialAd() {
          if (this.PlatformCurrent) {
            var _this$PlatformCurrent9;

            (_this$PlatformCurrent9 = this.PlatformCurrent) == null || _this$PlatformCurrent9.showInterstitialAd();
          }
        }

        showShareMenu() {
          var _this$PlatformCurrent10;

          (_this$PlatformCurrent10 = this.PlatformCurrent) == null || _this$PlatformCurrent10.showShareMenu();
        }

        onShareAppVideo(t, e) {
          undefined === e && (e = true);

          if (sys.isBrowser) {
            t && t();
          } else {
            var _this$PlatformCurrent11;

            (_this$PlatformCurrent11 = this.PlatformCurrent) == null || _this$PlatformCurrent11.onShareAppVideo(t, e);
          }
        }

        openAwemeUserProfile(t) {
          if (sys.isBrowser) {
            t && t();
          } else {
            var _this$PlatformCurrent12;

            (_this$PlatformCurrent12 = this.PlatformCurrent) == null || _this$PlatformCurrent12.openAwemeUserProfile(t);
          }
        }

        isRecordVideo() {
          return !!this.PlatformCurrent && (this.PlatformCurrent.isRecordVideo(), true);
        }

        isPlatform() {
          if (this.PlatformCurrent) {
            return this.PlatformCurrent.isPlatform();
          }
        }

        setFrameRate(t) {
          var _this$PlatformCurrent13;

          (_this$PlatformCurrent13 = this.PlatformCurrent) == null || _this$PlatformCurrent13.setFrameRate(t);
        }

        loadRecordVideo(t) {
          var _this$PlatformCurrent14;

          (_this$PlatformCurrent14 = this.PlatformCurrent) == null || _this$PlatformCurrent14.loadRecordVideo(t);
        }

        reportAnalytics(t, e) {
          var _this$PlatformCurrent15;

          undefined === e && (e = {});
          (_this$PlatformCurrent15 = this.PlatformCurrent) == null || _this$PlatformCurrent15.reportAnalytics(t, e);
        }

        requestSubscribeMessage(t) {
          var _this$PlatformCurrent16;

          (_this$PlatformCurrent16 = this.PlatformCurrent) == null || _this$PlatformCurrent16.requestSubscribeMessage(t);
        }

        onShow(t) {
          var _this$PlatformCurrent17;

          (_this$PlatformCurrent17 = this.PlatformCurrent) == null || _this$PlatformCurrent17.onShow(t);
        }

        offShow(t) {
          var _this$PlatformCurrent18;

          (_this$PlatformCurrent18 = this.PlatformCurrent) == null || _this$PlatformCurrent18.offShow(t);
        }

        onHide(t) {
          var _this$PlatformCurrent19;

          (_this$PlatformCurrent19 = this.PlatformCurrent) == null || _this$PlatformCurrent19.onHide(t);
        }

        offHide(t) {
          var _this$PlatformCurrent20;

          (_this$PlatformCurrent20 = this.PlatformCurrent) == null || _this$PlatformCurrent20.offHide(t);
        }

        getLaunchOptionsSync() {
          var _this$PlatformCurrent21;

          return (_this$PlatformCurrent21 = this.PlatformCurrent) == null ? void 0 : _this$PlatformCurrent21.getLaunchOptionsSync();
        }

        vibrateShort() {
          var _this$PlatformCurrent22;

          (_this$PlatformCurrent22 = this.PlatformCurrent) == null || _this$PlatformCurrent22.vibrateShort();
        }

        shareMessageToFriend() {
          var _this$PlatformCurrent23;

          (_this$PlatformCurrent23 = this.PlatformCurrent) == null || _this$PlatformCurrent23.shareMessageToFriend();
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cbdf0d59fe35986ada2e3bcede8080a4d6ce98c.js.map