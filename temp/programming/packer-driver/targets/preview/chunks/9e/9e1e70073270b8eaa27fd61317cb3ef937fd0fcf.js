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
        // Object.defineProperty(exports, "__esModule", {
        //     value: true
        //   });
        //   exports.HttpRequest = undefined;
        //   var $z1PlayerDataMager = require("PlayerDataMager");
        //   (function (t) {
        //     function e(t, e, o) {
        //       var n = new Image();
        //       function a() {
        //         n.removeEventListener("load", a);
        //         n.removeEventListener("error", i);
        //         o && o(null, n);
        //       }
        //       function i() {
        //         n.removeEventListener("load", a);
        //         n.removeEventListener("error", i);
        //         o && o(new Error(t));
        //       }
        //       "file:" !== window.location.protocol && (n.crossOrigin = "anonymous");
        //       n.addEventListener("load", a);
        //       n.addEventListener("error", i);
        //       n.src = t;
        //       return n;
        //     }
        //     t.getOpenId = function (t) {
        //       var o = this;
        //       if (window.tt || window.wx) {
        //         wx.login({
        //           success(a) {
        //             console.log("登录成功", a.code);
        //             var i = {
        //               code: a.code,
        //             };
        //             o.request("zdydc/user/login", i, function (e) {
        //               if (e.openId) {
        //                 $z1PlayerDataMager._p_data._data.openId = e.openId;
        //                 // o.checkOpenId($z1PlayerDataMager._p_data._data.openId);
        //                 console.log("获取openid成功", e);
        //               } else {
        //                 console.log("获取openid失败：", e);
        //               }
        //               t && t(e);
        //             }, function (e) {
        //               console.log("login 调用失败", e);
        //               t && t(null);
        //             });
        //           }
        //         });
        //       } else {
        //         cc.sys.isNative || t && t();
        //       }
        //     };
        //     t.request = function (t, e, o, n, a, i) {
        //       undefined === i && (i = "POST");
        //       var r = "https://yx.megoo.top/" + t;
        //       console.log("url", r, "reqData", e);
        //       a && (r = t);
        //       var c = JSON.stringify(e);
        //       var s = new XMLHttpRequest();
        //       s.onreadystatechange = function () {
        //         if (4 == s.readyState && 200 == s.status) {
        //           var t = null;
        //           "" != s.responseText && (t = JSON.parse(s.responseText));
        //           o && o(t);
        //         } else if (4 == s.readyState && 200 != s.status) {
        //           var e = {
        //             url: r,
        //             readyState: s.readyState,
        //             status: s.status,
        //             data: c
        //           };
        //           t = null;
        //           n && n(e);
        //         }
        //       };
        //       s.open(i, r, true);
        //       if ("Get" != i) {
        //         s.setRequestHeader("Content-type", "application/json; charset=utf-8");
        //         s.send(c);
        //       } else {
        //         s.send();
        //       }
        //     };
        //     // t.updateHttpSprite = function (e, o) {
        //     //   if (-1 != e.indexOf("http")) {
        //     //     try {
        //     //       cc.assetManager.loadRemote(e, {
        //     //         ext: t.headImgExt
        //     //       }, function (t, e) {
        //     //         var n = new cc.SpriteFrame(e);
        //     //         o && (o.spriteFrame = n);
        //     //       });
        //     //     } catch (n) {
        //     //       console.log("拉取图片失败!", n);
        //     //     }
        //     //   } else {
        //     //     o.spriteFrame = undefined;
        //     //   }
        //     // };
        //     // t.loadRemoteFile = function (t, e) {
        //     //   cc.assetManager.loadRemote(t, function (t, o) {
        //     //     if (t) {
        //     //       e && e();
        //     //     } else {
        //     //       e && e(o);
        //     //     }
        //     //   });
        //     // };
        //     // t.checkOpenIdInGm = function () {};
        //     // t.checkOpenId = function (t) {
        //     //   var e = this;
        //     //   var o = {
        //     //     openId: t,
        //     //     platform: "zijie_zhebushitiaozhan"
        //     //   };
        //     //   e.request("check_openid_forall/", o, function (o) {
        //     //     0 == o.errno && e.getplayerData(t);
        //     //   }, function (t) {
        //     //     console.log("checkOpenId 调用失败", t);
        //     //   });
        //     // };
        //     // t.savePlayerData = function () {};
        //     // t.getplayerData = function (t) {
        //     //   this.request("ot/gqsxz/savedata", {
        //     //     openId: t
        //     //   }, function (t) {
        //     //     console.log("-----------getplayerData:", t);
        //     //     if (0 == t.errno) {
        //     //       t.data;
        //     //     } else {
        //     //       console.log("-----------获取用户数据:", t);
        //     //     }
        //     //   }, function (t) {
        //     //     console.log("getplayerData 调用失败", t);
        //     //   });
        //     // };
        //     // t.collectchallengedata = function (t, e, o) {
        //     //   undefined === o && (o = "challenge");
        //     //   var n = {
        //     //     platform: "zijie_zhebushitiaozhan",
        //     //     date: t,
        //     //     guanqia: e + "",
        //     //     behavior: o
        //     //   };
        //     //   console.log("-----------getplayerData  dataStr:", n);
        //     //   this.request("zbstz/collectchallengedata", n, function (t) {
        //     //     console.log("-----------collectchallengedata:调用成功", t);
        //     //   }, function (t) {
        //     //     console.log("collectchallengedata 调用失败", t);
        //     //   });
        //     // };
        //     // t.getchallenge = function (t, e) {
        //     //   undefined === t && (t = 5);
        //     //   this.request("zbstz/getchallenge?platform=zijie_zhebushitiaozhan&days=" + t, undefined, function (t) {
        //     //     console.log("-----------getchallenge:调用成功", t);
        //     //     e && e(t);
        //     //   }, function (t) {
        //     //     console.log("getchallenge 调用失败", t);
        //     //   }, false, "GET");
        //     // };
        //     // t.getrank = function (t) {
        //     //   this.request("zbstz/getrank?platform=zijie_zhebushitiaozhan", undefined, function (e) {
        //     //     console.log("-----------getrank:调用成功", e);
        //     //     t && t(e);
        //     //   }, function (t) {
        //     //     console.log("getrank 调用失败", t);
        //     //   }, false, "GET");
        //     // };
        //     // t.headImgExt = ".head";
        //     // t.registerHeadImgLoader = function () {
        //     //   cc.assetManager.downloader.register(t.headImgExt, function (t, e, o) {
        //     //     o(null, t);
        //     //   });
        //     //   cc.assetManager.parser.register(t.headImgExt, e);
        //     //   cc.assetManager.factory.register(t.headImgExt, function (t, e, o, n) {
        //     //     var a = null;
        //     //     var i = null;
        //     //     try {
        //     //       (a = new cc.Texture2D())._uuid = t;
        //     //       a._nativeUrl = t;
        //     //       a._nativeAsset = e;
        //     //     } catch (r) {
        //     //       i = r;
        //     //     }
        //     //     n && n(i, a);
        //     //   });
        //     // };
        //   })(exports.HttpRequest || (exports.HttpRequest = {}));
        // #endregion ORIGINAL CODE
        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=9e1e70073270b8eaa27fd61317cb3ef937fd0fcf.js.map