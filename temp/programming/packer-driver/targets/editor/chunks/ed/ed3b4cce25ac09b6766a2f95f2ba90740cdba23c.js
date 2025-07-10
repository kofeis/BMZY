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
        // var _n26;
        // var cc__extends = __extends;
        // Object.defineProperty(exports, "__esModule", {
        //   value: true
        // });
        // var $z1PlayerDataMager = require("PlayerDataMager");
        // var $z1SingleBase = require("SingleBase");
        // var $z1PublicMager = require("PublicMager");
        // var def_WxApi = function (t) {
        //   function _ctor() {
        //     var e = null !== t && t.apply(this, arguments) || this;
        //     e.enabled = false;
        //     e.InterstitialAd = undefined;
        //     e.CustomAd = [];
        //     e.customadIndex = 0;
        //     e.customadTop = true;
        //     e.customadBottom = false;
        //     e.setTimer = -1;
        //     e.isNewUser = false;
        //     e.times = 0;
        //     return e;
        //   }
        //   cc__extends(_ctor, t);
        //   _ctor.prototype.authorize = function () {};
        //   _ctor.prototype.getUserInfo = function () {};
        //   _ctor.prototype.onLoad = function () {
        //     console.log("微信平台初始化");
        //     this.enabled = true;
        //     this.loadVideoAd();
        //     wx.onShow(function(t) {
        //       console.log("wx.onShow:", t.scene);
        //     });
        //   };
        //   _ctor.prototype.setFrameRate = function (t) {
        //     wx.setPreferredFramesPerSecond(t);
        //   };
        //   _ctor.prototype.addShortcut = function () {};
        //   _ctor.prototype.openAwemeUserProfile = function () {};
        //   _ctor.prototype.isPlatform = function () {
        //     return !!window.wx;
        //   };
        //   _ctor.prototype.isRecordVideo = function () {
        //     return !!this.videoPath;
        //   };
        //   _ctor.prototype.showToast = function (t, e, o) {
        //     undefined === e && (e = "none");
        //     undefined === o && (o = 2e3);
        //     wx.showToast({
        //       title: t,
        //       duration: o,
        //       icon: e
        //     });
        //   };
        //   _ctor.prototype.startRecordVideo = function (t) {
        //     undefined === t && (t = 90);
        //   };
        //   _ctor.prototype.stopRecordVideo = function () {};
        //   _ctor.prototype.loadRecordVideo = function () {};
        //   _ctor.prototype.loadVideoAd = function () {
        //     var t = this;
        //     this.videoAd = wx.createRewardedVideoAd({
        //       adUnitId: "adunit-8f22a6474a97b725"
        //     });
        //     this.videoAd.onClose(function (e) {
        //       if (e.isEnded) {
        //         t.callback && t.callback();
        //       } else {
        //         t.close_callback && t.close_callback();
        //       }
        //       t.callback = null;
        //       t.close_callback = null;
        //     });
        //     this.videoAd.onError(function (e) {
        //       console.log("onError" + e);
        //       t.showToast("视频加载错误", "fail");
        //     });
        //   };
        //   _ctor.prototype.showVideoAd = function (t, e) {
        //     var o = this;
        //     this.callback = t;
        //     this.close_callback = e;
        //     this.videoAd.show().then(function () {
        //       console.log("video success");
        //     }).catch(function () {
        //       console.error("video fail");
        //       o.reLoadVideo();
        //     });
        //   };
        //   _ctor.prototype.reLoadVideo = function () {
        //     var t = this;
        //     this.videoAd.load().then(function () {
        //       t.videoAd.show();
        //       console.log("video success");
        //     }).catch(function () {
        //       t.showToast("视频显示失败, 稍后重试", "fail");
        //       console.error("video fail");
        //     });
        //   };
        //   _ctor.prototype.showShareMenu = function () {
        //     var t;
        //     t = $z1PublicMager.default.get().config.share_url;
        //     var e = Math.floor(Math.random() * t.length);
        //     wx.showShareMenu({
        //       title: "试过了，这款小游戏真的好玩！",
        //       desc: "试过了，这款小游戏真的好玩！",
        //       imageUrl: t[e],
        //       success() {
        //         console.log("showShareMenu 调用成功");
        //       },
        //       fail(t) {
        //         console.log("showShareMenu 调用失败", t.errMsg);
        //       },
        //       complete() {
        //         console.log("showShareMenu 调用完成");
        //       }
        //     });
        //     wx.onShareAppMessage(function () {
        //       return {
        //         title: "试过了，这款小游戏真的好玩！",
        //         imageUrl: t[e],
        //         query: "openId=" + $z1PlayerDataMager._p_data._data.openId.toString()
        //       };
        //     });
        //   };
        //   _ctor.prototype.onShareAppMessage = function (t, e) {
        //     undefined === e && (e = true);
        //     var o;
        //     var n = this;
        //     o = $z1PublicMager.default.get().config.share_url;
        //     var a = Math.floor(Math.random() * o.length);
        //     wx.shareAppMessage({
        //       title: "试过了，这款小游戏真的好玩！",
        //       imageUrl: o[a],
        //       query: "openId=" + $z1PlayerDataMager._p_data._data.openId.toString(),
        //       success() {
        //         console.log("分享视频成功");
        //       },
        //       fail() {
        //         e && n.showToast("需要分享游戏给好友才能获得奖励哟！");
        //       }
        //     });
        //   };
        //   _ctor.prototype.share_show = function () {};
        //   _ctor.prototype.onShareAppVideo = function (t, e) {
        //     undefined === e && (e = true);
        //     this.onShareAppMessage(t, e);
        //   };
        //   _ctor.prototype.reportAnalytics = function (t, e) {
        //     undefined === e && (e = {});
        //     wx.reportAnalytics(t, e);
        //   };
        //   _ctor.prototype.createInterstitialAd = function () {};
        //   _ctor.prototype.showInterstitialAd = function () {};
        //   _ctor.prototype.setImRankDataScore = function () {};
        //   _ctor.prototype.setImRankDataDuanWei = function () {};
        //   _ctor.prototype.createCustomAd = function () {};
        //   _ctor.prototype.updateCustomAd = function () {
        //     this.hideCustomAd(true, true);
        //     this.customadIndex += 4;
        //     this.customadIndex >= this.CustomAd.length && (this.customadIndex = 0);
        //     this.showCustomAdSelf(this.customadTop, this.customadBottom);
        //   };
        //   _ctor.prototype.showCustomAd = function (t, e) {
        //     clearInterval(this.setTimer);
        //     this.setTimer = setInterval(this.updateCustomAd.bind(this), 1e4);
        //     this.customadBottom = e;
        //     this.customadTop = t;
        //     this.showCustomAdSelf(t, e);
        //   };
        //   _ctor.prototype.showCustomAdSelf = function (t, e) {
        //     if (t) {
        //       this.CustomAd[this.customadIndex] && (this.CustomAd[this.customadIndex].isShow() || this.CustomAd[this.customadIndex].show());
        //       this.CustomAd[this.customadIndex + 1] && (this.CustomAd[this.customadIndex + 1].isShow() || this.CustomAd[this.customadIndex + 1].show());
        //     }
        //     if (e) {
        //       this.CustomAd[this.customadIndex + 2] && (this.CustomAd[this.customadIndex + 2].isShow() || this.CustomAd[this.customadIndex + 2].show());
        //       this.CustomAd[this.customadIndex + 3] && (this.CustomAd[this.customadIndex + 3].isShow() || this.CustomAd[this.customadIndex + 3].show());
        //     }
        //   };
        //   _ctor.prototype.hideCustomAd = function (t, e) {
        //     for (var o = 0; o < this.CustomAd.length; o++) {
        //       var n = o % 4;
        //       t && n < 2 && this.CustomAd[o] && this.CustomAd[o].isShow() && this.CustomAd[o].hide();
        //       e && n >= 2 && this.CustomAd[o] && this.CustomAd[o].isShow() && this.CustomAd[o].hide();
        //     }
        //   };
        //   _ctor.prototype.requestSubscribeMessage = function () {};
        //   _ctor.prototype.onShow = function (t) {
        //     wx.onShow(t);
        //   };
        //   _ctor.prototype.offShow = function (t) {
        //     wx.offShow(t);
        //   };
        //   _ctor.prototype.onHide = function (t) {
        //     wx.onHide(t);
        //   };
        //   _ctor.prototype.offHide = function (t) {
        //     wx.offHide(t);
        //   };
        //   _ctor.prototype.getLaunchOptionsSync = function () {
        //     return wx.getLaunchOptionsSync();
        //   };
        //   _ctor.prototype.vibrateShort = function () {
        //     wx.vibrateShort({
        //       fail(t) {
        //         console.log("震动失败", t);
        //       },
        //       success() {
        //       }
        //     });
        //   };
        //   return _ctor;
        // }($z1SingleBase.default);
        // exports.default = def_WxApi;
        // #endregion ORIGINAL CODE
        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=ed3b4cce25ac09b6766a2f95f2ba90740cdba23c.js.map