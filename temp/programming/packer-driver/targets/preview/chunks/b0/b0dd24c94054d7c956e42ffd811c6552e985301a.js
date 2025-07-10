System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, GravityAnalyticsAPI, GravityPlatform, _class, _crd;

  function _reportPossibleCrUseOfGravityAnalyticsAPI(extras) {
    _reporterNs.report("GravityAnalyticsAPI", "./gravityengine.mg.cocoscreator.min.js", _context.meta, extras);
  }

  _export("GravityPlatform", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GravityAnalyticsAPI = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df6ef33rDRGjbxFCuHa1TiN", "GravityPlatform", undefined);

      __checkObsolete__(['sys']);

      // import { Resoure_Data } from "../../Tool/Resoure_Data";
      _export("GravityPlatform", GravityPlatform = class GravityPlatform {
        constructor() {
          this.geInstance = null;
        }

        Data_Get(Data_Name, Default_Value) {
          if (Default_Value === void 0) {
            Default_Value = null;
          }

          try {
            var Data_Value;
            var Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null; // 返回数据或默认值

            return Data_Value !== undefined ? Data_Value : Default_Value;
          } catch (e) {
            console.error("[Storage] \u8BFB\u53D6 " + Data_Name + " \u5931\u8D25:", e);
            return Default_Value;
          }
        }

        Data_Set(Data_Name, Data) {
          try {
            sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
          } catch (e) {
            console.error("[Storage] \u4FDD\u5B58 " + Data_Name + " \u5931\u8D25:", e);
          }
        } // 初始化


        initGeSdk(clientId) {
          console.log("初始化initGeSdk");
          var config = {
            clientId: clientId,
            name: "ge",
            debugMode: "none",
            // "debug";
            autoTrack: {
              appLaunch: true,
              appShow: true,
              appHide: true
            },
            accessToken: "Jlfx3rqA6jew02Ywtx7iq8HG1QfmpOCZ" // 微信

          };
          this.geInstance = new (_crd && GravityAnalyticsAPI === void 0 ? (_reportPossibleCrUseOfGravityAnalyticsAPI({
            error: Error()
          }), GravityAnalyticsAPI) : GravityAnalyticsAPI)(config);
          this.geInstance.setupAndStart();

          if (this.Data_Get("IsGaInitialize") != false) {
            this.geInstance.initialize({
              name: clientId,
              version: 1,
              openid: clientId,
              enable_sync_attribution: false
            }).then(res => {
              console.log("GravityAnalyticsAPI initialize success", res);
              this.Data_Set("IsGaInitialize", true);
            }).catch(err => {
              console.error("GravityAnalyticsAPI initialize failed", err);
            });
          }
        }
        /**
         * 上报关卡开始事件
         * @param properties { "$user_level": 1 }
         */


        onLevelStart(properties) {
          this.geInstance.track("LevelStart", properties);
          console.log("上报关卡开始事件");
        }
        /**
         * 上报通关事件
         * @param properties { "$user_level": 1 }
         */


        onLevelSuccess(properties) {
          this.geInstance.track("LevelSuccess", properties);
          console.log("上报通关事件");
        }
        /**
         * 上报关卡失败事件
         * @param properties { "$user_level": 1 }
         */


        onLevelFail(properties) {
          this.geInstance.track("LevelFail", properties);
          console.log("上报关卡失败事件");
        }
        /**
         * 上报放弃关卡事件
         * @param properties { "$user_level": 1 }
         */


        onLevelGiveUp(properties) {
          this.geInstance.track("LevelGiveUp", properties);
          console.log("上报放弃关卡事件");
        }

        onAdRequest(properties) {}

        onAdCancel(properties) {}

        onAdFinish() {
          // 只有微信小游戏需要上报，抖音小游戏引力引擎会自动拉取
          if (sys.platform == sys.Platform.WECHAT_GAME) {
            console.log("微信上报广告结束事件");
            var videoAdId = "adunit-c6a790cad3e75438";
            this.geInstance.adShowEvent("reward", videoAdId, {
              custom_param: "激励视频"
            });
          }
        }

      });

      _class = GravityPlatform;
      GravityPlatform.instance = new _class();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0dd24c94054d7c956e42ffd811c6552e985301a.js.map