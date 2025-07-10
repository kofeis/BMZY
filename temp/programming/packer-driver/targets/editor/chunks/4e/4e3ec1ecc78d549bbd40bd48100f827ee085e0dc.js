System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // var cc__extends = __extends;
        // Object.defineProperty(exports, "__esModule", {
        //   value: true
        // });
        // var i;
        // var $z1PlayerDataMager = require("PlayerDataMager");
        // var $z1SingleBase = require("SingleBase");
        // // var $z1AlipayPlatform = require("AlipayPlatform");
        // // var $z1KwaiApi = require("KwaiApi");
        // var $z1TtApi = require("TtApi");
        // var $z1WxApi = require("WxApi");
        // var $z1PublicMager = require("PublicMager");
        // var $z1UI = require("UI");
        // var def_PlatformApi = function (t) {
        //   function _ctor() {
        //     return null !== t && t.apply(this, arguments) || this;
        //   }
        //   cc__extends(_ctor, t);
        //   _ctor.prototype.onLoad = function () {
        //     // if (window.ks) {
        //     //   i = $z1KwaiApi.default.get();
        //     // } else if (cc.sys.platform == cc.sys.ALIPAY_GAME) {
        //     //   i = $z1AlipayPlatform.default.get();
        //     // } else 
        //     if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        //       i = $z1WxApi.default.get();
        //     } else {
        //       window.tt && (i = $z1TtApi.default.get());
        //     }
        //     if (i) {
        //       i.onLoad();
        //       i.showShareMenu();
        //     }
        //   };
        //   _ctor.prototype.showToast = function (t, e, o) {
        //     undefined === e && (e = "none");
        //     undefined === o && (o = 2e3);
        //     if (i) {
        //       i.showToast(t, e, o);
        //     } else {
        //       console.log("showToast", t);
        //     }
        //   };
        //   _ctor.prototype.startRecordVideo = function (t) {
        //     undefined === t && (t = 90);
        //     i && i.startRecordVideo(t);
        //   };
        //   _ctor.prototype.stopRecordVideo = function () {
        //     i && i.stopRecordVideo();
        //   };
        //   _ctor.prototype.showVideoAd = function (t, e) {
        //     if (cc.sys.isBrowser || cc.sys.platform === cc.sys.BYTEDANCE_GAME && "preview" == tt.env.VERSION) {
        //       t();
        //     } else if (1 != $z1PublicMager.default.get().test) {
        //       i && i.showVideoAd(t, function () {
        //         if (0 == $z1PublicMager.default.get().is_ading) {
        //           $z1PublicMager.default.get().is_ading = true;
        //           console.log("删除了ad_again_ui！！！！！");
        //           // $z1UI.default.get().addLayer($z1Res.Prefab.ad_again_ui).then(function (o) {
        //           //   o.getComponent("ad_again_ui").init(t, e);
        //           // });
        //         }
        //       });
        //     } else {
        //       t();
        //     }
        //   };
        //   _ctor.prototype.loadVideoAd = function () {
        //     i && i.loadVideoAd();
        //   };
        //   _ctor.prototype.reLoadVideo = function () {
        //     i && i.reLoadVideo();
        //   };
        //   _ctor.prototype.showShareMenu = function () {
        //     i && i.showShareMenu();
        //   };
        //   _ctor.prototype.onShareAppMessage = function (t, e) {
        //     undefined === e && (e = true);
        //     if (cc.sys.isBrowser) {
        //       t();
        //     } else {
        //       i && i.onShareAppMessage(t, e);
        //     }
        //   };
        //   _ctor.prototype.onShareAppVideo = function (t, e) {
        //     undefined === e && (e = true);
        //     if (cc.sys.isBrowser) {
        //       t && t();
        //     } else {
        //       i && i.onShareAppVideo(t, e);
        //     }
        //   };
        //   _ctor.prototype.openAwemeUserProfile = function (t) {
        //     if (cc.sys.isBrowser) {
        //       t && t();
        //     } else {
        //       i && i.openAwemeUserProfile(t);
        //     }
        //   };
        //   _ctor.prototype.isRecordVideo = function () {
        //     return !!i && (i.isRecordVideo(), true);
        //   };
        //   _ctor.prototype.isPlatform = function () {
        //     if (i) {
        //       return i.isPlatform();
        //     }
        //   };
        //   _ctor.prototype.setFrameRate = function (t) {
        //     i && i.setFrameRate(t);
        //   };
        //   _ctor.prototype.loadRecordVideo = function (t) {
        //     i.loadRecordVideo(t);
        //   };
        //   _ctor.prototype.reportAnalytics = function (t, e) {
        //     undefined === e && (e = {});
        //     i && i.reportAnalytics(t, e);
        //   };
        //   _ctor.prototype.createInterstitialAd = function () {
        //     window.tt && i.createInterstitialAd();
        //   };
        //   _ctor.prototype.showInterstitialAd = function () {
        //     window.tt && i.showInterstitialAd();
        //   };
        //   _ctor.prototype.requestSubscribeMessage = function (t) {
        //     window.tt && i.requestSubscribeMessage(t);
        //   };
        //   _ctor.prototype.onShow = function (t) {
        //     i && i.onShow(t);
        //   };
        //   _ctor.prototype.offShow = function (t) {
        //     i && i.offShow(t);
        //   };
        //   _ctor.prototype.onHide = function (t) {
        //     i && i.onHide(t);
        //   };
        //   _ctor.prototype.offHide = function (t) {
        //     i && i.offHide(t);
        //   };
        //   _ctor.prototype.getLaunchOptionsSync = function () {
        //     if (i) {
        //       return i.getLaunchOptionsSync();
        //     }
        //   };
        //   _ctor.prototype.vibrateShort = function () {
        //     i && 0 != $z1PlayerDataMager._p_data._data.zhenDongSwitch && i.vibrateShort();
        //   };
        //   return _ctor;
        // }($z1SingleBase.default);
        // exports.default = def_PlatformApi;
        // #endregion ORIGINAL CODE
        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=4e3ec1ecc78d549bbd40bd48100f827ee085e0dc.js.map