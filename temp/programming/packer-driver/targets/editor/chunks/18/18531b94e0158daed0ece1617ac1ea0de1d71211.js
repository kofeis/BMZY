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
        !function (e, t) {
          "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).gravityengine = t();
        }(this, function () {
          "use strict";

          function j(t, e) {
            var n,
                i = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), i.push.apply(i, n)), i;
          }

          function L(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2 ? j(Object(n), !0).forEach(function (e) {
                U(t, e, n[e]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
            }

            return t;
          }

          function I() {
            I = function () {
              return a;
            };

            var a = {},
                e = Object.prototype,
                c = e.hasOwnProperty,
                u = Object.defineProperty || function (e, t, n) {
              e[t] = n.value;
            },
                t = "function" == typeof Symbol ? Symbol : {},
                i = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function o(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }

            try {
              o({}, "");
            } catch (e) {
              o = function (e, t, n) {
                return e[t] = n;
              };
            }

            function s(e, t, n, i) {
              var r,
                  o,
                  a,
                  s,
                  t = t && t.prototype instanceof f ? t : f,
                  t = Object.create(t.prototype),
                  i = new b(i || []);
              return u(t, "_invoke", {
                value: (r = e, o = n, a = i, s = "suspendedStart", function (e, t) {
                  if ("executing" === s) throw new Error("Generator is already running");

                  if ("completed" === s) {
                    if ("throw" === e) throw t;
                    return {
                      value: void 0,
                      done: !0
                    };
                  }

                  for (a.method = e, a.arg = t;;) {
                    var n = a.delegate;

                    if (n) {
                      n = function e(t, n) {
                        var i = n.method,
                            r = t.iterator[i];
                        if (void 0 === r) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = void 0, e(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), p;
                        i = l(r, t.iterator, n.arg);
                        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;
                        r = i.arg;
                        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, p) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p);
                      }(n, a);

                      if (n) {
                        if (n === p) continue;
                        return n;
                      }
                    }

                    if ("next" === a.method) a.sent = a._sent = a.arg;else if ("throw" === a.method) {
                      if ("suspendedStart" === s) throw s = "completed", a.arg;
                      a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    s = "executing";
                    n = l(r, o, a);

                    if ("normal" === n.type) {
                      if (s = a.done ? "completed" : "suspendedYield", n.arg === p) continue;
                      return {
                        value: n.arg,
                        done: a.done
                      };
                    }

                    "throw" === n.type && (s = "completed", a.method = "throw", a.arg = n.arg);
                  }
                })
              }), t;
            }

            function l(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }

            a.wrap = s;
            var p = {};

            function f() {}

            function d() {}

            function h() {}

            var t = {},
                g = (o(t, i, function () {
              return this;
            }), Object.getPrototypeOf),
                g = g && g(g(S([]))),
                v = (g && g !== e && c.call(g, i) && (t = g), h.prototype = f.prototype = Object.create(t));

            function y(e) {
              ["next", "throw", "return"].forEach(function (t) {
                o(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }

            function m(a, s) {
              var t;
              u(this, "_invoke", {
                value: function (n, i) {
                  function e() {
                    return new s(function (e, t) {
                      !function t(e, n, i, r) {
                        var o,
                            e = l(a[e], a, n);
                        if ("throw" !== e.type) return (n = (o = e.arg).value) && "object" == typeof n && c.call(n, "__await") ? s.resolve(n.__await).then(function (e) {
                          t("next", e, i, r);
                        }, function (e) {
                          t("throw", e, i, r);
                        }) : s.resolve(n).then(function (e) {
                          o.value = e, i(o);
                        }, function (e) {
                          return t("throw", e, i, r);
                        });
                        r(e.arg);
                      }(n, i, e, t);
                    });
                  }

                  return t = t ? t.then(e, e) : e();
                }
              });
            }

            function _(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }

            function k(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }

            function b(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(_, this), this.reset(!0);
            }

            function S(t) {
              if (t || "" === t) {
                var n,
                    e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) return n = -1, (e = function e() {
                  for (; ++n < t.length;) if (c.call(t, n)) return e.value = t[n], e.done = !1, e;

                  return e.value = void 0, e.done = !0, e;
                }).next = e;
              }

              throw new TypeError(typeof t + " is not iterable");
            }

            return u(v, "constructor", {
              value: d.prototype = h,
              configurable: !0
            }), u(h, "constructor", {
              value: d,
              configurable: !0
            }), d.displayName = o(h, r, "GeneratorFunction"), a.isGeneratorFunction = function (e) {
              e = "function" == typeof e && e.constructor;
              return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name));
            }, a.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, o(e, r, "GeneratorFunction")), e.prototype = Object.create(v), e;
            }, a.awrap = function (e) {
              return {
                __await: e
              };
            }, y(m.prototype), o(m.prototype, n, function () {
              return this;
            }), a.AsyncIterator = m, a.async = function (e, t, n, i, r) {
              void 0 === r && (r = Promise);
              var o = new m(s(e, t, n, i), r);
              return a.isGeneratorFunction(t) ? o : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
            }, y(v), o(v, r, "Generator"), o(v, i, function () {
              return this;
            }), o(v, "toString", function () {
              return "[object Generator]";
            }), a.keys = function (e) {
              var t,
                  n = Object(e),
                  i = [];

              for (t in n) i.push(t);

              return i.reverse(), function e() {
                for (; i.length;) {
                  var t = i.pop();
                  if (t in n) return e.value = t, e.done = !1, e;
                }

                return e.done = !0, e;
              };
            }, a.values = S, b.prototype = {
              constructor: b,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e) for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (n) {
                if (this.done) throw n;
                var i = this;

                function e(e, t) {
                  return o.type = "throw", o.arg = n, i.next = e, t && (i.method = "next", i.arg = void 0), !!t;
                }

                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var r = this.tryEntries[t],
                      o = r.completion;
                  if ("root" === r.tryLoc) return e("end");

                  if (r.tryLoc <= this.prev) {
                    var a = c.call(r, "catchLoc"),
                        s = c.call(r, "finallyLoc");

                    if (a && s) {
                      if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                      if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                    } else if (a) {
                      if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                    } else {
                      if (!s) throw new Error("try statement without catch or finally");
                      if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                  var i = this.tryEntries[n];

                  if (i.tryLoc <= this.prev && c.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var r = i;
                    break;
                  }
                }

                var o = (r = r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc ? null : r) ? r.completion : {};
                return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(o);
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p;
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var n,
                      i,
                      r = this.tryEntries[t];
                  if (r.tryLoc === e) return "throw" === (n = r.completion).type && (i = n.arg, k(r)), i;
                }

                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return this.delegate = {
                  iterator: S(e),
                  resultName: t,
                  nextLoc: n
                }, "next" === this.method && (this.arg = void 0), p;
              }
            }, a;
          }

          function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
          }

          function q(e, t, n, i, r, o, a) {
            try {
              var s = e[o](a),
                  c = s.value;
            } catch (e) {
              return void n(e);
            }

            s.done ? t(c) : Promise.resolve(c).then(i, r);
          }

          function u(s) {
            return function () {
              var e = this,
                  a = arguments;
              return new Promise(function (t, n) {
                var i = s.apply(e, a);

                function r(e) {
                  q(i, t, n, r, o, "next", e);
                }

                function o(e) {
                  q(i, t, n, r, o, "throw", e);
                }

                r(void 0);
              });
            };
          }

          function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }

          function G(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, H(i.key), i);
            }
          }

          function p(e, t, n) {
            return t && G(e.prototype, t), n && G(e, n), Object.defineProperty(e, "prototype", {
              writable: !1
            }), e;
          }

          function U(e, t, n) {
            return (t = H(t)) in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }

          function F(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e;
            }(e) || function (e, t) {
              var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

              if (null != n) {
                var i,
                    r,
                    o,
                    a,
                    s = [],
                    c = !0,
                    u = !1;

                try {
                  if (o = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (i = o.call(n)).done) && (s.push(i.value), s.length !== t); c = !0);
                } catch (e) {
                  u = !0, r = e;
                } finally {
                  try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                  } finally {
                    if (u) throw r;
                  }
                }

                return s;
              }
            }(e, t) || $(e, t) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }

          function $(e, t) {
            var n;
            if (e) return "string" == typeof e ? J(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0;
          }

          function J(e, t) {
            (null == t || t > e.length) && (t = e.length);

            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

            return i;
          }

          function V(e, t) {
            var n,
                i,
                r,
                o,
                a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (a) return i = !(n = !0), {
              s: function () {
                a = a.call(e);
              },
              n: function () {
                var e = a.next();
                return n = e.done, e;
              },
              e: function (e) {
                i = !0, r = e;
              },
              f: function () {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw r;
                }
              }
            };
            if (Array.isArray(e) || (a = $(e)) || t && e && "number" == typeof e.length) return a && (e = a), o = 0, {
              s: t = function () {},
              n: function () {
                return o >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[o++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: t
            };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          function H(e) {
            e = function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 === n) return ("string" === t ? String : Number)(e);
              if ("object" != typeof (n = n.call(e, t || "default"))) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }(e, "string");

            return "symbol" == typeof e ? e : String(e);
          }

          var B = "4.8.33",
              W = "MG",
              K = "cocoscreator",
              Q = "https://backend.gravity-engine.com/event_center/api/v1",
              z = function () {
            function e() {
              l(this, e), this.config = {
                persistenceName: "GravityEngine",
                persistenceNameOld: "GravityEngine_web"
              };
            }

            return p(e, [{
              key: "getConfig",
              value: function () {
                return this.config;
              }
            }, {
              key: "getStorage",
              value: function (e, t, n) {
                e = localStorage.getItem(e);
                if (!t) return b.isJSONString(e) ? JSON.parse(e) : {};
                b.isJSONString(e) ? n(JSON.parse(e)) : n({});
              }
            }, {
              key: "setStorage",
              value: function (e, t) {
                localStorage.setItem(e, t);
              }
            }, {
              key: "_setSystemProxy",
              value: function (e) {
                this._sysCallback = e;
              }
            }, {
              key: "getSystemInfo",
              value: function (e) {
                var t = this._getOs(),
                    t = {
                  mp_platform: "web",
                  system: t,
                  platform: t,
                  screenWidth: window.screen.width,
                  screenHeight: window.screen.height,
                  systemLanguage: navigator.language
                };

                this._sysCallback && (t = b.extend(t, this._sysCallback(e))), e.success(t), e.complete();
              }
            }, {
              key: "_getOs",
              value: function () {
                var e = navigator.userAgent;
                return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "MacOS" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "ChromeOS" : "";
              }
            }, {
              key: "getNetworkType",
              value: function (e) {
                e.complete();
              }
            }, {
              key: "onNetworkStatusChange",
              value: function () {}
            }, {
              key: "request",
              value: function (e) {
                var t = {},
                    n = new XMLHttpRequest();
                if (n.open(e.method, e.url), e.header) for (var i in e.header) n.setRequestHeader(i, e.header[i]);
                return n.onreadystatechange = function () {
                  4 === n.readyState && 200 === n.status ? (t.statusCode = 200, b.isJSONString(n.responseText) && (t.data = JSON.parse(n.responseText)), e.success(t)) : 200 !== n.status && (t.errMsg = "network error", e.fail(t));
                }, n.ontimeout = function () {
                  t.errMsg = "timeout", e.fail(t);
                }, n.send(e.data), n;
              }
            }, {
              key: "initAutoTrackInstance",
              value: function (e, t) {
                this.instance = e, this.autoTrack = t.autoTrack;
                var n = this;
                "onpagehide" in window ? window.onpagehide = function () {
                  n.onPageHide(!0);
                } : window.onbeforeunload = function () {
                  n.onPageHide(!0);
                }, n.onPageShow(), n.autoTrack.appHide && n.instance.timeEvent("ta_page_hide"), "onvisibilitychange" in document && (document.onvisibilitychange = function () {
                  document.hidden ? n.onPageHide(!1) : (n.onPageShow(), n.autoTrack.appHide && n.instance.timeEvent("ta_page_hide"));
                });
              }
            }, {
              key: "setGlobal",
              value: function (e, t) {
                window[t] = e;
              }
            }, {
              key: "getAppOptions",
              value: function () {}
            }, {
              key: "showToast",
              value: function () {}
            }, {
              key: "onPageShow",
              value: function () {
                var e;
                this.autoTrack.appShow && (b.extend(e = {}, this.autoTrack.properties), b.isFunction(this.autoTrack.callback) && b.extend(e, this.autoTrack.callback("appShow")), this.instance._internalTrack("$WebPageView", e));
              }
            }, {
              key: "onPageHide",
              value: function (e) {
                var t;
                this.autoTrack.appHide && (b.extend(t = {}, this.autoTrack.properties), b.isFunction(this.autoTrack.callback) && b.extend(t, this.autoTrack.callback("appHide")), this.instance._internalTrack("$WebPageHide", t, new Date(), null, e));
              }
            }], [{
              key: "createInstance",
              value: function () {
                return new e();
              }
            }]), e;
          }(),
              Y = function () {
            function n(e, t) {
              l(this, n), this.taInstance = e, this.config = t || {}, this.referrer = "Directly open", this.config.isPlugin ? (e.App = function () {
                App.apply(this, arguments);
              }, inension(e.Page)) : (t = App, App = this._initAppExtention(t), e = Page, Page = this._initPageExtension(e));
            }

            return p(n, [{
              key: "_initPageExtension",
              value: function (o) {
                var a = this;
                return function (e) {
                  var t = e.onLoad,
                      n = e.onShow,
                      i = e.onShareAppMessage,
                      r = {};
                  return e.onLoad = function (e) {
                    r = e || {}, "function" == typeof t && t.call(this, e);
                  }, e.onShow = function (e) {
                    a.onPageShow(r), "function" == typeof n && n.call(this, e);
                  }, "function" == typeof i && (e.onShareAppMessage = function (e) {
                    e = i.call(this, e);
                    return a.onPageShare(e);
                  }), o(e);
                };
              }
            }, {
              key: "_initAppExtention",
              value: function (r) {
                var o = this;
                return function (e) {
                  var t = e.onLaunch,
                      n = e.onShow,
                      i = e.onHide;
                  return e.onLaunch = function (e) {
                    o.onAppLaunch(e, this), "function" == typeof t && t.call(this, e);
                  }, e.onShow = function (e) {
                    o.onAppShow(e), "function" == typeof n && n.call(this, e);
                  }, e.onHide = function () {
                    o.onAppHide(), "function" == typeof i && i.call(this);
                  }, r(e);
                };
              }
            }, {
              key: "onAppLaunch",
              value: function (e, t) {
                this._setAutoTrackProperties(e), b.isUndefined(t) || (t[this.taInstance.name] = this.taInstance), this.config.appLaunch && (t = {}, e && e.path && (t.$url_query = b.setQuery(e.query), t.$scene = String(e.scene || e.from)), this.taInstance._internalTrack("$MPLaunch", t));
              }
            }, {
              key: "onAppShow",
              value: function (e) {
                var t;
                this.config.appHide && this.taInstance.timeEvent("$MPHide"), this._setAutoTrackProperties(e), this.config.appShow && (t = {}, e && e.path && (t.$url_path = this._getPath(e.path), t.$url_query = b.setQuery(e.query), t.$scene = String(e.scene || e.from)), b.extend(t, this.config.properties), b.isFunction(this.config.callback) && b.extend(t, this.config.callback("appShow")), this.taInstance._internalTrack("$MPShow", t));
              }
            }, {
              key: "onAppHide",
              value: function () {
                var e;
                this.config.appHide && (b.extend(e = {}, this.config.properties), b.isFunction(this.config.callback) && b.extend(e, this.config.callback("appHide")), this.taInstance._internalTrack("$MPHide", e));
              }
            }, {
              key: "_getCurrentPath",
              value: function () {
                var e = "Not to get";

                try {
                  var t = getCurrentPages(),
                      e = t[t.length - 1].route;
                } catch (e) {
                  f.info(e);
                }

                return e;
              }
            }, {
              key: "_setAutoTrackProperties",
              value: function (e) {
                this.taInstance._setAutoTrackProperties({});
              }
            }, {
              key: "_getPath",
              value: function (e) {
                return "string" == typeof e ? e.replace(/^\//, "") : "Abnormal values";
              }
            }, {
              key: "onPageShare",
              value: function (e) {
                if (this.config.pageShare) {
                  var t = 1;

                  try {
                    t = getCurrentPages().length;
                  } catch (e) {
                    t = 1;
                  }

                  this.taInstance._internalTrack("$MPShare", {
                    $share_method: "转发消息卡片",
                    $share_depth: t,
                    $url_path: this._getCurrentPath()
                  });
                }

                return b.isObject(e) ? e : {};
              }
            }, {
              key: "onPageShow",
              value: function (e) {
                var t;
                this.config.pageShow && (t = this._getCurrentPath(), b.setQuery(e), this.referrer = t);
              }
            }]), n;
          }(),
              X = function () {
            function r(t, e, n) {
              var i = this,
                  t = (l(this, r), this.taInstance = t, this.config = e || {}, {});

              try {
                t = n.getLaunchOptionsSync();
              } catch (e) {
                t = {};
              }

              this._onShow(t), this.startTracked = !0, n.onShow(function (e) {
                i._onShow(e);
              }), n.onHide(function () {
                var e;
                i.startTracked = !1, i.config.appHide && (b.extend(e = {}, i.config.properties), b.isFunction(i.config.callback) && b.extend(e, i.config.callback("appHide")), i.taInstance._internalTrack("$MPHide", e));
              }), n.onShareAppMessage && n.onShareAppMessage(function () {
                i.taInstance.track("$MPShare", {
                  $share_depth: 1,
                  $share_method: "转发消息卡片",
                  $share_target: "APP_MESSAGE"
                }), i.taInstance.sdk && i.taInstance.sdk.track("SHARE", {
                  target: "APP_MESSAGE",
                  trackBy: "GravityEngine"
                });
              }), n.onShareTimeline && n.onShareTimeline(function () {
                i.taInstance.track("$MPShare", {
                  $share_depth: 1,
                  $share_method: "转发消息卡片",
                  $share_target: "TIME_LINE"
                }), i.taInstance.sdk && i.taInstance.sdk.track("SHARE", {
                  target: "TIME_LINE",
                  trackBy: "GravityEngine"
                });
              }), n.onAddToFavorites && n.onAddToFavorites(function () {
                i.taInstance.track("$MPAddFavorites", {
                  $url_path: ""
                }), i.taInstance.sdk && i.taInstance.sdk.track("ADD_TO_WISHLIST", {
                  type: "default",
                  trackBy: "GravityEngine"
                });
              });
            }

            return p(r, [{
              key: "_onShow",
              value: function (e) {
                var t;
                b.isObject(e) || (e = {}), this.startTracked || (this.config.appHide && this.taInstance.timeEvent("$MPHide"), this.config.appShow && (b.extend(t = {}, this.config.properties), b.isFunction(this.config.callback) && b.extend(t, this.config.callback("appShow")), this.taInstance._internalTrack("$MPShow", L(L({}, t), {}, {
                  $scene: String((null == (t = e) ? void 0 : t.scene) || (null == (t = e) ? void 0 : t.from)),
                  $url_query: b.setQuery((null == (e = k.getAppOptions()) ? void 0 : e.query) || {})
                }))));
              }
            }]), r;
          }();

          var Z = function () {
            function i(e, t, n) {
              l(this, i), this.api = e, this.config = t, this._config = n;
            }

            return p(i, [{
              key: "getConfig",
              value: function () {
                return this.config;
              }
            }, {
              key: "getStorage",
              value: function (e, t, n) {
                if (!t) return "dd_mp" === this._config.platform ? (t = this.api.getStorageSync({
                  key: e
                }), b.isJSONString(t.data) ? JSON.parse(t.data) : {}) : (t = this.api.getStorageSync(e), b.isJSONString(t) ? JSON.parse(t) : {});
                this.api.getStorage({
                  key: e,
                  success: function (e) {
                    e = b.isJSONString(e.data) ? JSON.parse(e.data) : {};
                    n(e);
                  },
                  fail: function () {
                    f.warn("getStorage faild"), n({});
                  }
                });
              }
            }, {
              key: "setStorage",
              value: function (e, t) {
                this.api.setStorage({
                  key: e,
                  data: t
                });
              }
            }, {
              key: "_getPlatform",
              value: function () {
                return "";
              }
            }, {
              key: "getSystemInfo",
              value: function (t) {
                var n = this._config.mpPlatform;
                this.api.getSystemInfo({
                  success: function (e) {
                    b.isFunction(n) ? e.mp_platform = n(e) : e.mp_platform = n, t.success(e), "wechat" === n && t.complete();
                  },
                  complete: function () {
                    t.complete();
                  }
                });
              }
            }, {
              key: "getNetworkType",
              value: function (t) {
                b.isFunction(this.api.getNetworkType) ? this.api.getNetworkType({
                  success: function (e) {
                    t.success(e);
                  },
                  complete: function () {
                    t.complete();
                  }
                }) : (t.success({}), t.complete());
              }
            }, {
              key: "onNetworkStatusChange",
              value: function (e) {
                b.isFunction(this.api.onNetworkStatusChange) ? this.api.onNetworkStatusChange(e) : e({});
              }
            }, {
              key: "request",
              value: function (t) {
                var e;
                if ("ali_mp" === this._config.platform || "dd_mp" === this._config.platform) return (e = b.extend({}, t)).headers = t.header, e.success = function (e) {
                  e.statusCode = e.status, t.success(e);
                }, e.fail = function (e) {
                  e.errMsg = e.errorMessage, t.fail(e);
                }, "dd_mp" === this._config.platform ? this.api.httpRequest(e) : this.api.request(e);

                try {
                  if ("taobao_mg" !== this._config.platform) return this.api.request(t);
                  var n = t,
                      i = {},
                      r = new XMLHttpRequest();
                  if (r.open(n.method, n.url), n.header) for (var o in n.header) r.setRequestHeader(o, n.header[o]);
                  return r.onreadystatechange = function () {
                    4 === r.readyState && 200 === r.status ? (i.statusCode = 200, b.isJSONString(r.responseText) && (i.data = JSON.parse(r.responseText)), n.success(i)) : 200 !== r.status && (i.errMsg = "network error", n.fail(i));
                  }, r.ontimeout = function () {
                    i.errMsg = "timeout", n.fail(i);
                  }, r.send(JSON.parse(n.data)), r;
                } catch (e) {}
              }
            }, {
              key: "initAutoTrackInstance",
              value: function (e, t) {
                return b.isObject(t.autoTrack) && (t.autoTrack.isPlugin = t.is_plugin), new (this._config.mp ? Y : X)(e, t.autoTrack, this.api);
              }
            }, {
              key: "setGlobal",
              value: function (e, t) {
                if (this._config.mp) f.warn("GravityAnalytics: we do not set global name for GE instance when you do not enable auto track.");else if ("ali_mg" !== this._config.platform) try {
                  GameGlobal[t] = e;
                } catch (e) {}
              }
            }, {
              key: "getAppOptions",
              value: function (e) {
                var t = {};

                try {
                  t = this.api.getLaunchOptionsSync();
                } catch (e) {
                  t = {};
                }

                if (b.isFunction(e)) try {
                  this._config.mp ? this.api.onAppShow(e) : this.api.onShow(e);
                } catch (e) {
                  f.warn("Cannot register onShow callback.");
                }
                return t;
              }
            }, {
              key: "showToast",
              value: function (e) {
                var t;
                b.isFunction(this.api.showToast) && (t = {
                  title: e
                }, "dd_mp" !== this._config.platform && "ali_mp" !== this._config.platform || (t.content = e), this.api.showToast(t));
              }
            }], [{
              key: "createInstance",
              value: function () {
                return this._createInstance("R_CURRENT_PLATFORM");
              }
            }, {
              key: "_createInstance",
              value: function (e) {
                switch (e) {
                  case "wechat_mp":
                    return new i(wx, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_wechat"
                    }, {
                      mpPlatform: "wechat",
                      mp: !0,
                      platform: e
                    });

                  case "wechat_mg":
                    return new i(wx, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_wechat_game"
                    }, {
                      mpPlatform: "wechat",
                      platform: e
                    });

                  case "qq_mp":
                    return new i(qq, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_qq"
                    }, {
                      mpPlatform: "qq",
                      mp: !0,
                      platform: e
                    });

                  case "qq_mg":
                    return new i(qq, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_qq_game"
                    }, {
                      mpPlatform: "qq",
                      platform: e
                    });

                  case "baidu_mp":
                    return new i(swan, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_swan"
                    }, {
                      mpPlatform: function (e) {
                        return e.host;
                      },
                      mp: !0,
                      platform: e
                    });

                  case "baidu_mg":
                    return new i(swan, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_swan_game"
                    }, {
                      mpPlatform: function (e) {
                        return e.host;
                      },
                      platform: e
                    });

                  case "taobao_mg":
                    return new i(my, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_taobao_game"
                    }, {
                      mpPlatform: "taobao",
                      platform: e
                    });

                  case "tt_mg":
                    return new i(tt, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_tt_game"
                    }, {
                      mpPlatform: function (e) {
                        return e.appName;
                      },
                      platform: e
                    });

                  case "tt_mp":
                    return new i(tt, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_tt"
                    }, {
                      mpPlatform: function (e) {
                        return e.appName;
                      },
                      mp: !0,
                      platform: e
                    });

                  case "ali_mp":
                    return new i(my, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_ali"
                    }, {
                      mpPlatform: function (e) {
                        return e.app;
                      },
                      mp: !0,
                      platform: e
                    });

                  case "ali_mg":
                    return new i(my, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_ali_game"
                    }, {
                      mpPlatform: function (e) {
                        return e.app;
                      },
                      platform: e
                    });

                  case "dd_mp":
                    return new i(dd, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_dd"
                    }, {
                      mpPlatform: "dingding",
                      mp: !0,
                      platform: e
                    });

                  case "bl_mg":
                    return new i(bl, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_bl_game"
                    }, {
                      mpPlatform: "bilibili",
                      platform: e
                    });

                  case "kuaishou_mp":
                    return new i(ks, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_kuaishou_program"
                    }, {
                      mpPlatform: "kuaishou",
                      mp: !0,
                      platform: e
                    });

                  case "kuaishou_mg":
                    return new i(ks, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_kuaishou_game"
                    }, {
                      mpPlatform: "kuaishou_game",
                      platform: e
                    });

                  case "qh360_mg":
                    return new i(qh, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_qh360"
                    }, {
                      mpPlatform: "qh360",
                      platform: e
                    });

                  case "tb_mp":
                    return new i(my, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_tb"
                    }, {
                      mpPlatform: "tb",
                      mp: !0,
                      platform: e
                    });

                  case "jd_mp":
                    return new i(jd, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_jd"
                    }, {
                      mpPlatform: "jd",
                      mp: !0,
                      platform: e
                    });

                  case "qh360_mp":
                    return new i(qh, {
                      persistenceName: "GravityEngine",
                      persistenceNameOld: "GravityEngine_qh360"
                    }, {
                      mpPlatform: "qh360",
                      mp: !0,
                      platform: e
                    });

                  case "WEB":
                    return new z.createInstance();
                }
              }
            }]), i;
          }(),
              ee = p(function e(t, n) {
            var i = this;
            l(this, e), this.taInstance = t, this.config = n || {}, this.config.appShow && this.taInstance._internalTrack("$MPShow"), this.config.appHide && this.taInstance.timeEvent("$MPHide"), qg.onShow(function () {
              var e;
              i.config.appHide && i.taInstance.timeEvent("$MPHide"), i.config.appShow && (b.extend(e = {}, i.config.properties), b.isFunction(i.config.callback) && b.extend(e, i.config.callback("appShow")), i.taInstance._internalTrack("$MPShow"));
            }), qg.onHide(function () {
              var e;
              i.config.appHide && (b.extend(e = {}, i.config.properties), b.isFunction(i.config.callback) && b.extend(e, i.config.callback("appHide")), i.taInstance._internalTrack("$MPHide"));
            });
          }),
              te = function () {
            function e() {
              l(this, e), this.config = {
                persistenceName: "gravityengine",
                persistenceNameOld: "gravityengine_qg_vivo_game",
                asyncPersistence: !0
              };
            }

            return p(e, [{
              key: "getConfig",
              value: function () {
                return this.config || {};
              }
            }, {
              key: "getStorage",
              value: function (e, t, n) {
                if (!t) return t = qg.getStorageSync({
                  key: e
                }), b.isJSONString(t) ? JSON.parse(t) : {};
                qg.getStorage({
                  key: e,
                  success: function (e) {
                    e = b.isJSONString(e) ? JSON.parse(e) : {};
                    n(e);
                  },
                  fail: function () {
                    n({});
                  }
                });
              }
            }, {
              key: "setStorage",
              value: function (e, t) {
                qg.setStorage({
                  key: e,
                  value: t
                });
              }
            }, {
              key: "getSystemInfo",
              value: function (i) {
                qg.getSystemInfo({
                  success: function (e) {
                    var t = e,
                        n = [e.osType, e.osVersionName].join(" ");
                    t.brand = e.manufacturer, t.system = n, t.mp_platform = "vivo_qg", i.success(t);
                  },
                  complete: function () {
                    i.complete();
                  }
                });
              }
            }, {
              key: "getQuickDevice",
              value: function (n) {
                var i = {
                  os_name: "android",
                  android_id: "",
                  imei: "",
                  oaid: "",
                  mac: "",
                  android_version: "",
                  api_version: 0,
                  rom: {
                    gravityengine_qg_huawei_game: "EMUI",
                    gravityengine_qg: "MIUI",
                    gravityengine_qg_oppo_game: "ColorOS",
                    gravityengine_qg_vivo_game: "FuntouchOS",
                    gravityengine_qg_mz_game: "Flyme"
                  }[n.platform],
                  rom_version: "",
                  phone_brand: "",
                  phone_model: ""
                };
                qg.getSystemInfo({
                  success: function (e) {
                    var t;
                    i.android_version = e.system, i.api_version = e.platformVersionCode, i.rom_version = e.COREVersion, i.phone_brand = e.brand, i.phone_model = e.model, qg.getOAID && (e = null != (t = null == (t = (e = qg).getOAID) ? void 0 : t.call(e).oaid) ? t : "", i.android_id = e, i.imei = e, i.oaid = e), n.success(i);
                  }
                });
              }
            }, {
              key: "getNetworkType",
              value: function (n) {
                qg.getNetworkType({
                  success: function (e) {
                    var t = e;
                    t.networkType = e.type, n.success(t);
                  },
                  complete: function () {
                    n.complete();
                  }
                });
              }
            }, {
              key: "onNetworkStatusChange",
              value: function (n) {
                qg.subscribeNetworkStatus({
                  callback: function (e) {
                    var t = e;
                    t.networkType = e.type, n(t);
                  }
                });
              }
            }, {
              key: "request",
              value: function (t) {
                return qg.request({
                  url: t.url,
                  data: t.data,
                  method: t.method,
                  header: t.header,
                  success: function (e) {
                    t.success(e);
                  },
                  fail: function (e) {
                    t.fail(e);
                  }
                });
              }
            }, {
              key: "initAutoTrackInstance",
              value: function (e, t) {
                return new ee(e, t.autoTrack);
              }
            }, {
              key: "setGlobal",
              value: function (e, t) {
                globalThis[t] = e;
              }
            }, {
              key: "getAppOptions",
              value: function () {
                try {
                  if (!qg.getLaunchOptionsSync) return {};
                  var e = qg.getLaunchOptionsSync(),
                      t = e.referrerInfo.extraData,
                      n = e.query.internal,
                      i = n && n.channel ? n.channel : "";
                  if (t) return {
                    query: t,
                    scene: ""
                  };
                  if ("deeplink" !== i) return {};
                  var r,
                      o = n.custom_params,
                      a = JSON.parse(o).cus_origin_uri,
                      s = new URLSearchParams(a.split("?")[1]),
                      c = {},
                      u = V(s);

                  try {
                    for (u.s(); !(r = u.n()).done;) {
                      var l = F(r.value, 2),
                          p = l[0],
                          f = l[1];
                      c[p] = f;
                    }
                  } catch (e) {
                    u.e(e);
                  } finally {
                    u.f();
                  }

                  return {
                    query: c,
                    scene: ""
                  };
                } catch (e) {
                  return {};
                }
              }
            }, {
              key: "showToast",
              value: function (e) {
                qg.showToast({
                  message: e,
                  duration: 0
                });
              }
            }], [{
              key: "createInstance",
              value: function () {
                return new e();
              }
            }]), e;
          }(),
              ne = p(function e(t, n, i) {
            var r = this;
            l(this, e), this.taInstance = t, this.config = n || {}, this.config.appShow && (b.extend(t = {}, this.config.properties), b.isFunction(this.config.callback) && b.extend(t, this.config.callback("appShow")), this.taInstance._internalTrack("$MPShow", t)), this.config.appHide && this.taInstance.timeEvent("$MPHide"), i.onShow(function () {
              var e;
              r.config.appHide && r.taInstance.timeEvent("$MPHide"), r.config.appShow && (b.extend(e = {}, r.config.properties), b.isFunction(r.config.callback) && b.extend(e, r.config.callback("appShow")), r.taInstance._internalTrack("$MPShow", e));
            }), i.onHide(function () {
              var e;
              r.config.appHide && (b.extend(e = {}, r.config.properties), b.isFunction(r.config.callback) && b.extend(e, r.config.callback("appHide")), r.taInstance._internalTrack("$MPHide", e));
            });
          }),
              ie = function () {
            function i(e, t, n) {
              l(this, i), this.api = e, this.config = t, this._config = n;
            }

            return p(i, [{
              key: "getConfig",
              value: function () {
                return this.config || {};
              }
            }, {
              key: "getStorage",
              value: function (e, t, n) {
                e = localStorage.getItem(e);
                if (!t) return b.isJSONString(e) ? JSON.parse(e) : {};
                b.isJSONString(e) ? n(JSON.parse(e)) : n({});
              }
            }, {
              key: "setStorage",
              value: function (e, t) {
                localStorage.setItem(e, t);
              }
            }, {
              key: "getSystemInfo",
              value: function (t) {
                var n = this._config.mpPlatform;
                this.api.getSystemInfo({
                  success: function (e) {
                    e.mp_platform = n, t.success(e);
                  },
                  complete: function () {
                    t.complete();
                  }
                });
              }
            }, {
              key: "getQuickDevice",
              value: function (n) {
                var i = {
                  os_name: "android",
                  android_id: "",
                  imei: "",
                  oaid: "",
                  mac: "",
                  android_version: "",
                  api_version: 0,
                  rom: {
                    gravityengine_qg_huawei_game: "EMUI",
                    gravityengine_qg: "MIUI",
                    gravityengine_qg_oppo_game: "ColorOS",
                    gravityengine_qg_vivo_game: "FuntouchOS",
                    gravityengine_qg_mz_game: "Flyme"
                  }[n.platform],
                  rom_version: "",
                  phone_brand: "",
                  phone_model: ""
                },
                    r = this;
                this.api.getSystemInfo({
                  success: function (e) {
                    function t() {
                      n.success(i);
                    }

                    i.android_version = e.system, i.api_version = e.platformVersionCode, i.rom_version = e.COREVersion, i.phone_brand = e.brand, i.phone_model = e.model, r.api.getDeviceId ? r.api.getDeviceId({
                      success: function (e) {
                        i.android_id = e.deviceId, i.imei = e.deviceId, i.oaid = e.deviceId, t();
                      }
                    }) : r.api.getOAID ? r.api.getOAID({
                      success: function (e) {
                        i.android_id = e.oaid, i.imei = e.oaid, i.oaid = e.oaid, t();
                      }
                    }) : t();
                  }
                });
              }
            }, {
              key: "getNetworkType",
              value: function (t) {
                this.api.getNetworkType({
                  success: function (e) {
                    t.success(e);
                  },
                  complete: function () {
                    t.complete();
                  }
                });
              }
            }, {
              key: "onNetworkStatusChange",
              value: function (t) {
                this.api.onNetworkStatusChange({
                  callback: function (e) {
                    t(e);
                  }
                });
              }
            }, {
              key: "request",
              value: function (e) {
                var t = {},
                    n = new XMLHttpRequest();
                if (n.open(e.method, e.url), e.header) for (var i in e.header) n.setRequestHeader(i, e.header[i]);
                return n.onreadystatechange = function () {
                  4 === n.readyState && 200 === n.status ? (t.statusCode = 200, b.isJSONString(n.responseText) && (t.data = JSON.parse(n.responseText)), e.success(t)) : 200 !== n.status && (t.errMsg = "network error", e.fail(t));
                }, n.ontimeout = function () {
                  t.errMsg = "timeout", e.fail(t);
                }, n.send(e.data), n;
              }
            }, {
              key: "initAutoTrackInstance",
              value: function (e, t) {
                return new ne(e, t.autoTrack, this.api);
              }
            }, {
              key: "setGlobal",
              value: function (e, t) {
                globalThis[t] = e;
              }
            }, {
              key: "getAppOptions",
              value: function () {
                return "oppo_qg" === this._config.mpPlatform ? this.api.getEnterOptionsSync() : this.api.getLaunchOptionsSync();
              }
            }, {
              key: "showToast",
              value: function (e) {
                this.api.showToast({
                  title: e,
                  icon: "none",
                  duration: 2e3
                });
              }
            }], [{
              key: "createInstance",
              value: function () {
                return this._createInstance("R_CURRENT_PLATFORM");
              }
            }, {
              key: "_createInstance",
              value: function (e) {
                switch (e) {
                  case "oppo":
                    return new i(qg, {
                      persistenceName: "gravityengine",
                      persistenceNameOld: "gravityengine_qg_oppo_game"
                    }, {
                      mpPlatform: "oppo_qg"
                    });

                  case "huawei":
                    return new i(hbs, {
                      persistenceName: "gravityengine",
                      persistenceNameOld: "gravityengine_qg_huawei_game"
                    }, {
                      mpPlatform: "huawei_qg"
                    });

                  case "mz":
                    return new i(qg, {
                      persistenceName: "gravityengine",
                      persistenceNameOld: "gravityengine_qg_mz_game"
                    }, {
                      mpPlatform: "mz"
                    });

                  case "xiaomi":
                    return new i(qg, {
                      persistenceName: "gravityengine",
                      persistenceNameOld: "gravityengine_qg"
                    }, {
                      mpPlatform: "xiaomi"
                    });
                }
              }
            }]), i;
          }(),
              re = function () {
            function e() {
              l(this, e);
            }

            return p(e, null, [{
              key: "createInstance",
              value: function () {
                var n,
                    e = Object.freeze({
                  WECHAT_GAME: 104,
                  QQ_PLAY: 105,
                  BAIDU_GAME: 107,
                  VIVO_GAME: 108,
                  OPPO_GAME: 109,
                  HUAWEI_GAME: 110,
                  XIAOMI_GAME: 111,
                  BYTEDANCE_GAME: 117,
                  QTT_GAME: 116,
                  LINKSURE: 119,
                  ALIPAY_GAME: 113,
                  TAOBAO_MINIGAME: 121,
                  TAOBAO_MINI_GAME: "TAOBAO_MINI_GAME",
                  WECHAT_MINI_GAME: "WECHAT_GAME",
                  BAIDU_MINI_GAME: "BAIDU_MINI_GAME",
                  XIAOMI_QUICK_GAME: "XIAOMI_QUICK_GAME",
                  OPPO_MINI_GAME: "OPPO_MINI_GAME",
                  VIVO_MINI_GAME: "VIVO_MINI_GAME",
                  HUAWEI_QUICK_GAME: "HUAWEI_QUICK_GAME",
                  BYTEDANCE_MINI_GAME: "BYTEDANCE_MINI_GAME",
                  QTT_MINI_GAME: "QTT_MINI_GAME",
                  LINKSURE_MINI_GAME: "LINKSURE_MINI_GAME",
                  ALIPAY_MINI_GAME: "ALIPAY_MINI_GAME"
                });
                return cc.sys.platform === e.WECHAT_GAME || cc.sys.platform === e.WECHAT_MINI_GAME ? Z._createInstance("wechat_mg") : cc.sys.platform === e.BAIDU_GAME || cc.sys.platform === e.BAIDU_MIN_GAME ? Z._createInstance("baidu_mg") : cc.sys.platform === e.TAOBAO_MINI_GAME || cc.sys.platform === e.TAOBAO_MINIGAME ? Z._createInstance("taobao_mg") : cc.sys.platform === e.VIVO_GAME || cc.sys.platform === e.VIVO_MINI_GAME ? te.createInstance() : cc.sys.platform === e.QQ_PLAY ? Z._createInstance("qq_mg") : cc.sys.platform === e.OPPO_GAME || cc.sys.platform === e.OPPO_MINI_GAME ? ie._createInstance("oppo") : cc.sys.platform === e.HUAWEI_GAME || cc.sys.platform === e.HUAWEI_QUICK_GAME ? ie._createInstance("huawei") : cc.sys.platform === e.XIAOMI_GAME || cc.sys.platform === e.XIAOMI_QUICK_GAME ? ie._createInstance("xiaomi") : cc.sys.platform === e.ALIPAY_GAME || cc.sys.platform === e.ALIPAY_MINI_GAME ? Z._createInstance("ali_mg") : cc.sys.platform === e.BYTEDANCE_GAME || cc.sys.platform === e.BYTEDANCE_MINI_GAME ? Z._createInstance("tt_mg") : ((n = z.createInstance())._sysCallback = function () {
                  return {
                    system: cc.sys.os.replace(" ", "") + " " + cc.sys.osVersion
                  };
                }, n.getNetworkType = function (e) {
                  var t = {};

                  switch (cc.sys.getNetworkType()) {
                    case cc.sys.NetworkType.LAN:
                      t.networkType = "WIFI";
                      break;

                    case cc.sys.NetworkType.WWAN:
                      t.networkType = "WWAN";
                      break;

                    default:
                      t.networkType = "NONE";
                  }

                  e.success(t), e.complete();
                }, n.getSystemInfo = function (e) {
                  var t = {
                    mp_platform: cc.sys.platform.toString(),
                    system: n._getOs(),
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height
                  };
                  n._sysCallback && (t = b.extend(t, n._sysCallback(e))), e.success(t), e.complete();
                }, n);
              }
            }]), e;
          }(),
              k = function () {
            function e() {
              l(this, e);
            }

            return p(e, null, [{
              key: "_getCurrentPlatform",
              value: function () {
                return this.currentPlatform || (this.currentPlatform = re.createInstance());
              }
            }, {
              key: "getConfig",
              value: function () {
                return this._getCurrentPlatform().getConfig();
              }
            }, {
              key: "getStorage",
              value: function (e, t, n) {
                return this._getCurrentPlatform().getStorage(e, t, n);
              }
            }, {
              key: "setStorage",
              value: function (e, t) {
                return this._getCurrentPlatform().setStorage(e, t);
              }
            }, {
              key: "getSystemInfo",
              value: function (e) {
                return this._getCurrentPlatform().getSystemInfo(e);
              }
            }, {
              key: "getNetworkType",
              value: function (e) {
                return this._getCurrentPlatform().getNetworkType(e);
              }
            }, {
              key: "getQuickDevice",
              value: function (e) {
                return this._getCurrentPlatform().getQuickDevice(e);
              }
            }, {
              key: "onNetworkStatusChange",
              value: function (e) {
                this._getCurrentPlatform().onNetworkStatusChange(e);
              }
            }, {
              key: "request",
              value: function (e) {
                return this._getCurrentPlatform().request(e);
              }
            }, {
              key: "initAutoTrackInstance",
              value: function (e, t) {
                return this._getCurrentPlatform().initAutoTrackInstance(e, t);
              }
            }, {
              key: "setGlobal",
              value: function (e, t) {
                e && t && this._getCurrentPlatform().setGlobal(e, t);
              }
            }, {
              key: "getAppOptions",
              value: function (e) {
                return this._getCurrentPlatform().getAppOptions(e);
              }
            }, {
              key: "showDebugToast",
              value: function (e) {
                this._getCurrentPlatform().showToast(e);
              }
            }]), e;
          }(),
              b = {},
              e = Array.prototype,
              t = Object.prototype,
              oe = e.slice,
              ae = t.toString,
              se = Object.prototype.hasOwnProperty,
              ce = e.forEach,
              t = Array.isArray,
              ue = {};

          function le() {
            return new RegExp(/(.*?)\.?([^.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
          }

          function pe(e, t) {
            var n = e.charAt(0),
                t = t.split(n);
            return n === e ? t : t[(e = parseInt(e.substring(1), 10)) < 0 ? t.length + e : e - 1];
          }

          function fe(e, t) {
            for (var n, i = e.charAt(0), r = t.split("&"), o = [], a = {}, s = e.substring(1), c = 0, u = r.length; c < u; c++) if ("" !== (o = (o = r[c].match(/(.*?)=(.*)/)) || [r[c], r[c], ""])[1].replace(/\s/g, "")) {
              if (o[2] = (n = o[2] || "", b.decodeURIComponent(n.replace(/\+/g, " "))), s === o[1]) return o[2];
              (n = o[1].match(/(.*)\[([0-9]+)\]/)) ? (a[n[1]] = a[n[1]] || [], a[n[1]][n[2]] = o[2]) : a[o[1]] = o[2];
            }

            return i === e ? a : a[s];
          }

          b.isNumber = function (e) {
            return "number" == typeof e ? 0 == e - e : "string" == typeof e && "" !== e.trim() && (Number.isFinite ? Number.isFinite(+e) : isFinite(+e));
          }, b.each = function (e, t, n) {
            if (null == e) return !1;
            if (ce && e.forEach === ce) e.forEach(t, n);else if (e.length === +e.length) {
              for (var i = 0, r = e.length; i < r; i++) if (i in e && t.call(n, e[i], i, e) === ue) return !1;
            } else for (var o in e) if (se.call(e, o) && t.call(n, e[o], o, e) === ue) return !1;
          }, b.sleep = function (t) {
            return new Promise(function (e) {
              return setTimeout(e, t);
            });
          }, b.extend = function (n) {
            return b.each(oe.call(arguments, 1), function (e) {
              for (var t in e) void 0 !== e[t] && (n[t] = e[t]);
            }), n;
          }, b.extend2Layers = function (n) {
            return b.each(oe.call(arguments, 1), function (e) {
              for (var t in e) void 0 !== e[t] && (b.isObject(e[t]) && b.isObject(n[t]) ? b.extend(n[t], e[t]) : n[t] = e[t]);
            }), n;
          }, b.isArray = t || function (e) {
            return "[object Array]" === ae.call(e);
          }, b.isFunction = function (e) {
            try {
              return "function" == typeof e;
            } catch (e) {
              return !1;
            }
          }, b.isPromise = function (e) {
            return "[object Promise]" === ae.call(e) && null != e;
          }, b.isObject = function (e) {
            return "[object Object]" === ae.call(e) && null != e;
          }, b.isEmptyObject = function (e) {
            if (b.isObject(e)) {
              for (var t in e) if (se.call(e, t)) return !1;

              return !0;
            }

            return !1;
          }, b.isUndefined = function (e) {
            return void 0 === e;
          }, b.isString = function (e) {
            return "[object String]" === ae.call(e);
          }, b.isDate = function (e) {
            return "[object Date]" === ae.call(e);
          }, b.isBoolean = function (e) {
            return "[object Boolean]" === ae.call(e);
          }, b.isNumber = function (e) {
            return "[object Number]" === ae.call(e) && /[\d\.]+/.test(String(e));
          }, b.isJSONString = function (e) {
            try {
              JSON.parse(e);
            } catch (e) {
              return !1;
            }

            return !0;
          }, b.decodeURIComponent = function (t) {
            var n = "";

            try {
              n = decodeURIComponent(t);
            } catch (e) {
              n = t;
            }

            return n;
          }, b.encodeURIComponent = function (t) {
            var n = "";

            try {
              n = encodeURIComponent(t);
            } catch (e) {
              n = t;
            }

            return n;
          }, b.utf8Encode = function (e) {
            for (var t, n = "", i = t = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < r; o++) {
              var a = e.charCodeAt(o),
                  s = null;
              a < 128 ? t++ : s = 127 < a && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), null !== s && (i < t && (n += e.substring(i, t)), n += s, i = t = o + 1);
            }

            return i < t && (n += e.substring(i, e.length)), n;
          }, b.base64Encode = function (e) {
            var t,
                n,
                i,
                r,
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                a = 0,
                s = 0,
                c = "",
                u = [];
            if (!e) return e;

            for (e = b.utf8Encode(e); t = (r = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 12 & 63, n = r >> 6 & 63, i = 63 & r, u[s++] = o.charAt(r >> 18 & 63) + o.charAt(t) + o.charAt(n) + o.charAt(i), a < e.length;);

            switch (c = u.join(""), e.length % 3) {
              case 1:
                c = c.slice(0, -2) + "==";
                break;

              case 2:
                c = c.slice(0, -1) + "=";
            }

            return c;
          }, b.encodeDates = function (i) {
            return b.each(i, function (e, t) {
              if (b.isDate(e)) i[t] = b.formatDate(e);else if (b.isObject(e)) i[t] = b.encodeDates(e);else if (b.isArray(e)) for (var n = 0; n < e.length; n++) b.isDate(e[n]) && (i[t][n] = b.formatDate(e[n]));
            }), i;
          }, b.formatDate = function (e) {
            function t(e) {
              return e < 10 ? "0" + e : e;
            }

            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + ((e = e.getMilliseconds()) < 100 && 9 < e ? "0" + e : e < 10 ? "00" + e : e);
          }, b.searchObjDate = function (n) {
            try {
              (b.isObject(n) || b.isArray(n)) && b.each(n, function (e, t) {
                b.isObject(e) || b.isArray(e) ? b.searchObjDate(n[t]) : b.isDate(e) && (n[t] = b.formatDate(e));
              });
            } catch (e) {
              f.warn(e);
            }
          }, b.UUID = function () {
            var e = new Date().getTime();
            return String(Math.random()).replace(".", "").slice(1, 11) + "-" + e;
          }, b.UUIDv4 = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
              var t = 16 * Math.random() | 0;
              return ("x" === e ? t : 3 & t | 8).toString(16);
            });
          }, b.setMpPlatform = function (e) {
            b.mpPlatform = e;
          }, b.getMpPlatform = function () {
            return b.mpPlatform;
          }, b.createExtraHeaders = function () {
            return {
              "GE-Integration-Type": W,
              "GE-Integration-Version": B,
              "GE-Integration-Count": "1",
              "GE-Integration-Extra": b.getMpPlatform()
            };
          }, b.checkAppId = function (e) {
            if ("number" == typeof e) e = String(e);else if ("string" != typeof e) return "";
            return e = e.replace(/\s*/g, "");
          }, b.checkUrl = function (e) {
            return e = e.replace(/\s*/g, ""), e = b.url("basic", e);
          }, b.url = function (e, t) {
            var n,
                i = {};
            if ("tld?" === e) return le();
            if (t = t || window.location.toString(), !e) return t;
            if (e = e.toString(), t.match(/^mailto:([^/].+)/)) n = t.match(/^mailto:([^/].+)/), i.protocol = "mailto", i.email = n[1];else {
              if ((t = t.match(/(.*?)\/#!(.*)/) ? (n = t.match(/(.*?)\/#!(.*)/))[1] + n[2] : t).match(/(.*?)#(.*)/) && (n = t.match(/(.*?)#(.*)/), i.hash = n[2], t = n[1]), i.hash && e.match(/^#/)) return fe(e, i.hash);
              if (t.match(/(.*?)\?(.*)/) && (n = t.match(/(.*?)\?(.*)/), i.query = n[2], t = n[1]), i.query && e.match(/^\?/)) return fe(e, i.query);
              if (t.match(/(.*?):?\/\/(.*)/) && (n = t.match(/(.*?):?\/\/(.*)/), i.protocol = n[1].toLowerCase(), t = n[2]), t.match(/(.*?)(\/.*)/) && (n = t.match(/(.*?)(\/.*)/), i.path = n[2], t = n[1]), i.path = (i.path || "").replace(/^([^/])/, "/$1").replace(/\/$/, ""), (e = e.match(/^[-0-9]+$/) ? e.replace(/^([^/])/, "/$1") : e).match(/^\//)) return pe(e, i.path.substring(1));
              if ((n = (n = pe("/-1", i.path.substring(1))) && n.match(/(.*?)\.(.*)/)) && (i.file = n[0], i.filename = n[1], i.fileext = n[2]), t.match(/(.*):([0-9]+)$/) && (n = t.match(/(.*):([0-9]+)$/), i.port = n[2], t = n[1]), t.match(/(.*?)@(.*)/) && (n = t.match(/(.*?)@(.*)/), i.auth = n[1], t = n[2]), i.auth && (n = i.auth.match(/(.*):(.*)/), i.user = n ? n[1] : i.auth, i.pass = n ? n[2] : void 0), i.hostname = t.toLowerCase(), "." === e.charAt(0)) return pe(e, i.hostname);
              le() && (n = i.hostname.match(le())) && (i.tld = n[3], i.domain = n[2] ? n[2] + "." + n[3] : void 0, i.sub = n[1] || void 0);
              t = i.port ? ":" + i.port : "";
              i.protocol = i.protocol || window.location.protocol.replace(":", ""), i.port = i.port || ("https" === i.protocol ? "443" : "80"), i.protocol = i.protocol || ("443" === i.port ? "https" : "http"), i.basic = i.protocol + "://" + i.hostname + t;
            }
            return e in i ? i[e] : "{}" === e ? i : "";
          }, b.createString = function (e) {
            for (var t = e, n = Math.random().toString(36).substr(2); n.length < t;) n += Math.random().toString(36).substr(2);

            return n = n.substr(0, e);
          }, b.createAesKey = function () {
            return b.createString(16);
          }, b.setQuery = function (e) {
            try {
              if (!b.isObject(e)) return "";
              var t,
                  n = k.getConfig().persistenceNameOld.includes("GravityEngine_ali"),
                  i = [];

              for (t in e) (n || e.hasOwnProperty(t)) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));

              return i.join("&");
            } catch (e) {
              return "";
            }
          }, b.generateEncryptyData = function (e, t) {
            if (void 0 !== t) {
              var n = t.publicKey,
                  t = t.version;

              if (void 0 !== n && void 0 !== t && "undefined" != typeof CryptoJS && "undefined" != typeof JSEncrypt) {
                var i = b.createAesKey();

                try {
                  var r = CryptoJS.enc.Utf8.parse(i),
                      o = CryptoJS.enc.Utf8.parse(JSON.stringify(e)),
                      a = b.isUndefined(CryptoJS.pad.Pkcs7) ? CryptoJS.pad.PKCS7 : CryptoJS.pad.Pkcs7,
                      s = CryptoJS.AES.encrypt(o, r, {
                    mode: CryptoJS.mode.ECB,
                    padding: a
                  }).toString(),
                      c = new JSEncrypt(),
                      u = (c.setPublicKey(n), c.encrypt(i));
                  return !1 === u ? (f.warn("私钥加密失败，返回原数据"), e) : {
                    pkv: t,
                    ekey: u,
                    payload: s
                  };
                } catch (e) {
                  f.warn("数据加密失败，返回原数据: " + e);
                }
              }
            }

            return e;
          };

          var f = "object" === r(f) ? f : {},
              de = (f.info = function () {
            if ("object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && f.enabled) try {
              return console.log.apply(console, arguments);
            } catch (e) {
              console.log(arguments[0]);
            }
          }, f.warn = function () {
            if ("object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && f.enabled) try {
              return console.warn.apply(console, arguments);
            } catch (e) {
              console.warn(arguments[0]);
            }
          }, /^\$?[a-zA-Z][a-zA-Z0-9_]{0,49}$/),
              d = function () {
            function e() {
              l(this, e);
            }

            return p(e, null, [{
              key: "stripProperties",
              value: function (e) {
                return b.isObject(e) && b.each(e, function (e, t) {
                  b.isString(e) || b.isNumber(e) || b.isDate(e) || b.isBoolean(e) || b.isArray(e) || b.isObject(e) || f.warn("Your data -", t, e, "- format does not meet requirements and may not be stored correctly. Attribute values only support String, Number, Date, Boolean, Array, Object");
                }), e;
              }
            }, {
              key: "_checkPropertiesKey",
              value: function (e) {
                var n = !0;
                return b.each(e, function (e, t) {
                  de.test(t) || (f.warn("Invalid KEY: " + t), n = !1);
                }), n;
              }
            }, {
              key: "event",
              value: function (e) {
                return !(!b.isString(e) || !de.test(e)) || (f.warn("Check the parameter format. The eventName must start with an English letter and contain no more than 50 characters including letters, digits, and underscores: " + e), !1);
              }
            }, {
              key: "propertyName",
              value: function (e) {
                return !(!b.isString(e) || !de.test(e)) || (f.warn("Check the parameter format. PropertyName must start with a letter and contain letters, digits, and underscores (_). The value is a string of no more than 50 characters: " + e), !1);
              }
            }, {
              key: "properties",
              value: function (e) {
                return this.stripProperties(e), !(e && (b.isObject(e) ? !this._checkPropertiesKey(e) && (f.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"), 1) : (f.warn("properties can be none, but it must be an object"), 1)));
              }
            }, {
              key: "propertiesMust",
              value: function (e) {
                return this.stripProperties(e), void 0 === e || !b.isObject(e) || b.isEmptyObject(e) ? (f.warn("properties must be an object with a value"), !1) : !!this._checkPropertiesKey(e) || (f.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"), !1);
              }
            }, {
              key: "userId",
              value: function (e) {
                return !(!b.isString(e) || !/^.{1,64}$/.test(e)) || (f.warn("The user ID must be a string of less than 64 characters and cannot be null"), !1);
              }
            }, {
              key: "userAddProperties",
              value: function (e) {
                if (!this.propertiesMust(e)) return !1;

                for (var t in e) if (!b.isNumber(e[t])) return f.warn("The attributes of userAdd need to be Number"), !1;

                return !0;
              }
            }, {
              key: "userAppendProperties",
              value: function (e) {
                if (!this.propertiesMust(e)) return !1;

                for (var t in e) if (!b.isArray(e[t])) return f.warn("The attribute of userAppend must be Array"), !1;

                return !0;
              }
            }]), e;
          }();

          function he(e, t, n) {
            return (t = we(t)) in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e;
          }

          function ge(e) {
            return function (e) {
              if (Array.isArray(e)) return ye(e);
            }(e) || function () {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }() || ve(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }

          function ve(e, t) {
            var n;
            if (e) return "string" == typeof e ? ye(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ye(e, t) : void 0;
          }

          function ye(e, t) {
            (null == t || t > e.length) && (t = e.length);

            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

            return i;
          }

          function me(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && _e(e, t);
          }

          function _e(e, t) {
            return (_e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
              return e.__proto__ = t, e;
            })(e, t);
          }

          function ke(n) {
            var i = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;

              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (e) {
                return !1;
              }
            }();

            return function () {
              var e,
                  t = Ie(n);
              return be(this, i ? (e = Ie(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
            };
          }

          function be(e, t) {
            if (t && ("object" === h(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return Se(e);
          }

          function Se(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }

          function Ie(e) {
            return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
          }

          function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function (e) {
              return r(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e);
            })(e);
          }

          function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }

          function Ae(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, we(i.key), i);
            }
          }

          function n(e, t, n) {
            t && Ae(e.prototype, t), n && Ae(e, n), Object.defineProperty(e, "prototype", {
              writable: !1
            });
          }

          function we(e) {
            e = function (e) {
              if ("object" !== h(e) || null === e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 === t) return String(e);
              t = t.call(e, "string");
              if ("object" !== h(t)) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }(e);

            return "symbol" === h(e) ? e : String(e);
          }

          var Ee,
              Oe,
              Pe,
              Ne,
              Te,
              Ce,
              Re,
              xe,
              De = "LOCAL_ID",
              Me = "CLICK_ID",
              je = "QUEUE_LOST_MAP",
              Le = "REMOTE_CONFIG",
              qe = "REMOTE_COMMON_CONFIG",
              Ge = "OPENID",
              i = {
            init: "init",
            reporting: "reporting",
            fail: "fail"
          },
              g = {
            maxSdkInstance: 4,
            maxQueueLength: 500,
            actionParamMaxLength: 1e4,
            autoTrack: !0,
            reportThreshold: 5,
            reportDelay: 1,
            inspectDelay: 30,
            cgiBatchSize: 50,
            requestConcurrency: 4,
            requestTimeout: 1e4,
            signVersion: "1.0",
            realTimeActionList: ["START_APP", "REGISTER", "PURCHASE"]
          },
              v = {
            JS_RUN_ERROR: "JS_RUN_ERROR",
            REQUEST_ERROR: "REQUEST_ERROR",
            REQUEST_CONFIG_ERROR: "REQUEST_CONFIG_ERROR",
            JS_QUEUE_LOG: "JS_QUEUE_LOG",
            PROXY_ERROR: "PROXY_ERROR",
            PROXY_POLYFILL: "PROXY_POLYFILL",
            QUEUE_LOST_NUM: "QUEUE_LOST_NUM",
            REQ_TOTAL: "REQ_TOTAL",
            SIGN_ERROR: "SIGN_ERROR"
          },
              Ue = "UNKNOWN",
              Fe = "TRUE",
              $e = "FALSE",
              Je = "TICKET_INTERVAL_CHANGE",
              a = (Oe = function (e) {
            return "".concat("@dn-sdk/minigame", "_").concat("production", "_").concat(e);
          }, {
            getSync: function (e) {
              var t;

              try {
                t = wx.getStorageSync(Oe(e));
              } catch (e) {
                console.error("storage get error", e);
              }

              return t;
            },
            setSync: function (e, t) {
              try {
                wx.setStorageSync(Oe(e), t);
              } catch (e) {
                return console.error("storage set error", e), !1;
              }

              return !0;
            }
          }),
              Ve = function () {
            var e, t, n;
            return Ne || (t = (e = function () {
              if (Ee) return Ee;

              try {
                return Ee = wx.getSystemInfoSync();
              } catch (e) {
                return {};
              }
            }()).system, t = (null == (t = void 0 === t ? "" : t) ? void 0 : t.split(" ")) || [], n = (n = t[0]) ? -1 < (n = (null == n ? void 0 : n.toUpperCase()) || "").indexOf("ANDROID") ? "ANDROID" : -1 < n.indexOf("IOS") ? "IOS" : -1 < n.indexOf("MAC") ? "OSX" : -1 < n.indexOf("WINDOWS") ? "WINDOWS" : Ue : Ue, t = !(t = t) || t.length <= 0 ? "" : 2 === t.length ? t[1] : 3 === t.length && "Windows" === t[0] ? "".concat(t[1], " ").concat(t[2]) : t[t.length - 1], Ne = {
              benchmark_level: e.benchmarkLevel,
              device_brand: e.brand,
              screen_height: Math.floor(e.screenHeight),
              screen_width: Math.floor(e.screenWidth),
              wx_lib_version: e.SDKVersion,
              wx_version: e.version,
              wx_platform: e.platform,
              device_model: e.model,
              os: n,
              os_version: t
            }), Ne;
          },
              He = function () {
            try {
              if (Pe) return Pe;
              (Pe = Pe || a.getSync(De) || "") || (Pe = at(), a.setSync(De, Pe));
            } catch (e) {}

            return Pe;
          },
              Be = (Ce = !(Te = "unknown"), function () {
            if (!Ce) try {
              wx.getNetworkType({
                success: function (e) {
                  Te = e.networkType;
                },
                fail: function () {
                  Te = "unknown";
                }
              }), wx.onNetworkStatusChange(function (e) {
                Te = e.networkType;
              }), Ce = !0;
            } catch (e) {}
            return Te;
          }),
              We = (Be(), xe = "", function () {
            return xe = xe || a.getSync(Ge) || "";
          }),
              Ke = function () {
            if (Re) return Re;

            try {
              var e = wx.getAccountInfoSync();
              return m(e.miniProgram) ? Re = e.miniProgram : {};
            } catch (e) {
              return {};
            }
          };

          function Qe(e, t) {
            try {
              var n = Ve(),
                  i = {
                sdk_version: "1.5.4",
                sdk_name: "@dn-sdk/minigame",
                device_brand: null == n ? void 0 : n.device_brand,
                device_model: null == n ? void 0 : n.device_model,
                wx_version: null == n ? void 0 : n.wx_version,
                wx_lib_version: null == n ? void 0 : n.wx_lib_version,
                wx_platform: null == n ? void 0 : n.wx_platform,
                os: null == n ? void 0 : n.os,
                os_version: null == n ? void 0 : n.os_version,
                local_id: He()
              },
                  r = Object.assign(i, e);
              wx.request({
                url: "https://api.datanexus.qq.com/data-nexus-trace/log",
                data: r,
                method: "POST",
                timeout: g.requestTimeout,
                success: function (e) {
                  "function" == typeof t && 200 === (null == e ? void 0 : e.statusCode) && t();
                }
              });
            } catch (n) {
              _.error(n);
            }
          }

          n(Ye, null, [{
            key: "revise",
            value: function (e) {
              0 < e && !this.isRevised && (this.offsetTime = e - Date.now(), this.isRevised = !0);
            }
          }, {
            key: "getRevisedcurrentTimeMillis",
            value: function () {
              return this.isRevised ? Date.now() + this.offsetTime : -1;
            }
          }]);
          var ze = Ye;

          function Ye() {
            c(this, Ye);
          }

          function Xe(e) {
            return new Promise(function (t, n) {
              wx.request({
                method: "POST",
                url: "https://api.datanexus.qq.com/data-nexus-config/v1/sdk/config/get",
                data: e,
                timeout: g.requestTimeout,
                success: function (e) {
                  Ze(e, t, "config/get", n), nt(e);
                },
                fail: function (e) {
                  et(e, "config/get", n);
                }
              });
            });
          }

          function Ze(e, t, n, i) {
            var r,
                o = null == e ? void 0 : e.statusCode,
                a = null == (a = null == e ? void 0 : e.data) ? void 0 : a.code;
            200 !== o || 0 !== a ? (r = 200 !== o ? "number" == typeof o ? -1 * o : -888 : a, Qe({
              log_type: v.REQUEST_CONFIG_ERROR,
              message: "cgiName: ".concat(n, ", statusCode: ").concat(o, ", code: ").concat(a, ", traceid: ").concat(null == (n = null == e ? void 0 : e.data) ? void 0 : n.trace_id),
              code: r
            }), null != i && i(null == (o = null == e ? void 0 : e.data) ? void 0 : o.data)) : t(null == (a = e.data) ? void 0 : a.data);
          }

          function et(e, t, n) {
            Qe({
              log_type: v.REQUEST_CONFIG_ERROR,
              message: "cgiName: ".concat(t, " , message: ").concat(null == e ? void 0 : e.errMsg, " "),
              code: "number" == typeof (null == e ? void 0 : e.errno) ? -1 * e.errno : -999
            }), null != n && n(e);
          }

          function nt(e) {
            e = +(null == (e = null == e ? void 0 : e.header) ? void 0 : e["Server-Time"]);
            17266752e5 < e && ze.revise(e);
          }

          ze.offsetTime = 0, ze.isRevised = !1;

          function y(e) {
            return "[object Array]" === rt.call(e);
          }

          function it(e) {
            return "[object Function]" === rt.call(e);
          }

          var rt = Object.prototype.toString,
              m = function (e) {
            return "[object Object]" === rt.call(e);
          },
              ot = new Date().getTime();

          function at() {
            var n = new Date().getTime(),
                i = Math.abs(1e3 * (n - ot));
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
              var t = 16 * Math.random();
              return 0 < n ? (t = (n + t) % 16 | 0, n = Math.floor(n / 16)) : (t = (i + t) % 16 | 0, i = Math.floor(i / 16)), ("x" === e ? t : 3 & t | 8).toString(16).replace(/-/g, "");
            });
          }

          function st(e, t) {
            [e, t].forEach(ut);

            for (var n = pt(e), i = pt(t), r = 0; r < Math.max(n.length - 1, i.length - 1); r++) {
              var o = parseInt(n[r] || "0", 10),
                  a = parseInt(i[r] || "0", 10);
              if (a < o) return 1;
              if (o < a) return -1;
            }

            if (e = n[n.length - 1], t = i[i.length - 1], e && t) for (var s = e.split(".").map(lt), c = t.split(".").map(lt), u = 0; u < Math.max(s.length, c.length); u++) {
              if (void 0 === s[u] || "string" == typeof c[u] && "number" == typeof s[u]) return -1;
              if (void 0 === c[u] || "string" == typeof s[u] && "number" == typeof c[u] || s[u] > c[u]) return 1;
              if (c[u] > s[u]) return -1;
            } else if (e || t) return e ? -1 : 1;
            return 0;
          }

          var ct = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
              ut = function (e) {
            if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
            if (!ct.test(e)) throw new Error("Invalid argument not valid semver ('".concat(e, "' received)"));
          },
              lt = function (e) {
            return isNaN(Number(e)) ? e : Number(e);
          },
              pt = function (e) {
            var e = e.replace(/^v/, "").replace(/\+.*$/, ""),
                t = -1 === (t = e).indexOf("-") ? t.length : t.indexOf("-"),
                n = e.substring(0, t).split(".");
            return n.push(e.substring(t + 1)), n;
          };

          function ft(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }

          n(dt, null, [{
            key: "error",
            value: function (e) {
              for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];

              (t = console).error.apply(t, ["".concat("[@dn-sdk/minigame v1.5.4]", ": ").concat(e)].concat(i));
            }
          }, {
            key: "info",
            value: function (e) {
              for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];

              dt.debug && (t = console).info.apply(t, ["".concat("[@dn-sdk/minigame v1.5.4]", ": ").concat(e)].concat(i));
            }
          }, {
            key: "log",
            value: function (e) {
              for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];

              dt.debug && (t = console).log.apply(t, ["".concat("[@dn-sdk/minigame v1.5.4]", ": ").concat(e)].concat(i));
            }
          }, {
            key: "warn",
            value: function (e) {
              for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];

              (t = console).warn.apply(t, ["".concat("[@dn-sdk/minigame v1.5.4]", ": ").concat(e)].concat(i));
            }
          }, {
            key: "devLog",
            value: function (e) {
              for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];

              dt.isDev && (t = console).log.apply(t, ["".concat("[@dn-sdk/minigame v1.5.4]", ": ").concat(e)].concat(i));
            }
          }]);
          var _ = dt;

          function dt() {
            c(this, dt);
          }

          _.debug = !1, _.isDev = !1;

          var ht,
              gt = function () {
            if (!ht) try {
              var e = wx.getLaunchOptionsSync(),
                  t = e.query.gdt_vid || "",
                  n = (t ? a.setSync(Me, t) : t = a.getSync(Me) || "", JSON.stringify(e));
              1e4 < n.length && (n = JSON.stringify({
                cut: 1,
                scene: e.scene
              })), ht = {
                source_scene: e.scene,
                pkg_channel_id: e.query.wxgamepro || "",
                ad_trace_id: t,
                launch_options: n,
                channel: (o = null == (i = e) ? void 0 : i.query, m(o) ? (r = "", o.gdt_vid || -1 < [1045, 1046, 1084].indexOf(null == i ? void 0 : i.scene) ? r = "TENCENT" : o.clue_token || o.clickid && o.item_id ? r = "BYTEDANCE" : o.callback && "kuaishou" === o.ksChannel ? r = "KUAISHOU" : o.bd_vid || o.ai && o.d && o.q && o.c ? r = "BAIDU" : o.uctrackid ? r = "ALIBABA" : (o.trackid || o.imp || -1 < [1065, 1069, 1194].indexOf(null == i ? void 0 : i.scene) && (o.callback || o.u)) && (r = "OTHERS"), r) : "")
              };
            } catch (e) {
              ht = {}, _.log("获取场景值和渠道号失败", e);
            }
            var i, r, o;
            return ht;
          };

          function o(r, o, e) {
            var a = e.value;
            return e.value = function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

              try {
                return a.apply(this, t);
              } catch (e) {
                try {
                  _.error.apply(_, ["calling ".concat(r.constructor.name, ".").concat(o, " error with arguments")].concat(t)), _.error(e);
                  var i = {
                    log_type: v.JS_RUN_ERROR,
                    message: "[safeExcutable] ".concat(r.constructor.name, ".").concat(o, ": ").concat(null == e ? void 0 : e.message),
                    err_stack: null == e ? void 0 : e.stack
                  };
                  it(this.reportLog) ? this.reportLog(i) : Qe(i);
                } catch (i) {}
              }
            }, e;
          }

          function vt(e, t, n) {
            var i = n.value;
            return n.value = function () {
              if (this.inited) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

                return i.apply(this, t);
              }

              _.error("上报失败，请先完成初始化");
            }, n;
          }

          function s(e, t, n, i) {
            for (var r, o = 1 < i ? void 0 : i ? mt(t, n) : t, a = e.length - 1; 0 <= a; a--) (r = e[a]) && (o = (i ? r(t, n, o) : r(o)) || o);

            i && o && yt(t, n, o);
          }

          var yt = Object.defineProperty,
              mt = Object.getOwnPropertyDescriptor,
              e = (n(_t, [{
            key: "getItems",
            value: function () {
              return this.stack;
            }
          }, {
            key: "getStorage",
            value: function () {
              var e = (null == a ? void 0 : a.getSync(this.localStorageKey)) || "[]";
              return JSON.parse(e);
            }
          }, {
            key: "reportLostNum",
            value: function () {
              var e,
                  r = this,
                  t = Object.assign({}, this.lostActionMaps),
                  n = [];

              for (e in t) {
                var i = null == e ? void 0 : e.split("_");
                n.push({
                  queue_lost_session_id: i[0],
                  queue_lost_timestamp: i[1],
                  queue_lost_num: t[e]
                });
              }

              n.length && (this.setTimeStamp(), n.forEach(function (e) {
                var t = Object.assign({}, {
                  user_action_set_id: r.userActionSetId,
                  log_type: v.QUEUE_LOST_NUM
                }, e),
                    n = null == e ? void 0 : e.queue_lost_session_id,
                    e = null == e ? void 0 : e.queue_lost_timestamp,
                    i = "".concat(n, "_").concat(e);
                Qe(t, function () {
                  ft(r.lostActionMaps, i) && (delete r.lostActionMaps[i], a.setSync(je, JSON.stringify(r.lostActionMaps)));
                });
              }));
            }
          }, {
            key: "getLostMaps",
            value: function () {
              return this.lostActionMaps;
            }
          }, {
            key: "init",
            value: function () {
              var e = this,
                  t = this.getStorage(),
                  t = null == t ? void 0 : t.map(function (e) {
                return e.inner_status === (null == i ? void 0 : i.reporting) ? Object.assign({}, e, {
                  inner_status: null == i ? void 0 : i.fail,
                  is_retry: !0,
                  retry_count: e.retry_count + 1
                }) : e;
              });
              this.stack = t, this.lostActionMaps = JSON.parse(a.getSync(je) || "{}"), setTimeout(function () {
                e.reportLostNum();
              }, 1e3);
            }
          }, {
            key: "addItem",
            value: function (e) {
              var t;
              null != (t = null == this ? void 0 : this.stack) && t.push(e);
            }
          }, {
            key: "removeItems",
            value: function (t) {
              var e = null == (e = null == this ? void 0 : this.stack) ? void 0 : e.filter(function (e) {
                return !(null != t && t.includes(null == e ? void 0 : e.action_id));
              });
              this.stack = e;
            }
          }, {
            key: "updateForReportFail",
            value: function (t) {
              var e;
              this.stack = null == (e = this.stack) ? void 0 : e.map(function (e) {
                return null != t && t.includes(null == e ? void 0 : e.action_id) ? Object.assign({}, e, {
                  inner_status: null == i ? void 0 : i.fail,
                  retry_count: e.retry_count + 1,
                  is_retry: !0
                }) : e;
              });
            }
          }, {
            key: "updateForReporting",
            value: function (t) {
              var e;
              this.stack = null == (e = this.stack) ? void 0 : e.map(function (e) {
                return null != t && t.includes(null == e ? void 0 : e.action_id) ? Object.assign({}, e, {
                  inner_status: null == i ? void 0 : i.reporting
                }) : e;
              });
            }
          }, {
            key: "updateAllStack",
            value: function (e) {
              this.stack = e;
            }
          }, {
            key: "updateToStorage",
            value: function () {
              a.setSync(this.localStorageKey, JSON.stringify(this.stack));
            }
          }, {
            key: "updateLostAction",
            value: function (e) {
              var t;
              e && (e = "".concat(e, "_").concat(this.timeStamp), t = this.lostActionMaps[e] || 0, this.lostActionMaps[e] = t + 1, a.setSync(je, JSON.stringify(this.lostActionMaps)));
            }
          }, {
            key: "setTimeStamp",
            value: function () {
              this.timeStamp = Date.now().toString();
            }
          }]), _t);

          function _t(e) {
            var t = e.userActionSetId,
                e = e.maxLength,
                e = void 0 === e ? 500 : e;
            c(this, _t), this.lostActionMaps = {}, this.stack = [], this.localStorageKey = "", this.localStorageKey = "".concat("QUEUE_ACTIONS", "_").concat(null == t ? void 0 : t.toString()), this.maxLength = e, this.userActionSetId = t, this.setTimeStamp(), this.init();
          }

          s([o], e.prototype, "getItems", 1), s([o], e.prototype, "getStorage", 1), s([o], e.prototype, "reportLostNum", 1), s([o], e.prototype, "getLostMaps", 1), s([o], e.prototype, "init", 1), s([o], e.prototype, "addItem", 1), s([o], e.prototype, "removeItems", 1), s([o], e.prototype, "updateForReportFail", 1), s([o], e.prototype, "updateForReporting", 1), s([o], e.prototype, "updateAllStack", 1), s([o], e.prototype, "updateToStorage", 1), s([o], e.prototype, "updateLostAction", 1);

          function S(e, t, n, i) {
            for (var r, o = 1 < i ? void 0 : i ? St(t, n) : t, a = e.length - 1; 0 <= a; a--) (r = e[a]) && (o = (i ? r(t, n, o) : r(o)) || o);

            i && o && bt(t, n, o);
          }

          var kt,
              bt = Object.defineProperty,
              St = Object.getOwnPropertyDescriptor,
              A = (me(It, e), kt = ke(It), n(It, [{
            key: "getReportableActions",
            value: function () {
              var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100,
                  e = this.getItems(),
                  n = [];
              return null != e && e.forEach(function (e) {
                (null == n ? void 0 : n.length) < t && (null == e ? void 0 : e.inner_status) !== (null == i ? void 0 : i.reporting) && null != n && n.push(e);
              }), n;
            }
          }, {
            key: "addAction",
            value: function (e) {
              var t,
                  n = this.getItems();
              (null == n ? void 0 : n.length) >= this.maxLength ? (t = "队列长度超过最大限制".concat(this.maxLength, "条，SDK将按照行为优先级排序，丢弃优先级最低的行为事件"), _.warn(t), Qe({
                user_action_set_id: this.userActionSetId,
                log_type: v.JS_QUEUE_LOG,
                message: t
              }), t = this.sortQueue(e, n), _.debug && _.info("超过".concat(this.maxLength, "条按优先级排序的队列："), t.concat([])), n = t.pop(), this.updateAllStack(t), this.updateLostAction((null == n ? void 0 : n.session_id) || "")) : this.addItem(e), this.updateToStorage();
            }
          }, {
            key: "removeActions",
            value: function (e) {
              this.removeItems(e), this.updateToStorage();
            }
          }, {
            key: "updateActionsForReportFail",
            value: function (e) {
              this.updateForReportFail(e), this.updateToStorage();
            }
          }, {
            key: "updateActionsForReporting",
            value: function (e) {
              this.updateForReporting(e), this.updateToStorage();
            }
          }, {
            key: "getReportableActionsLength",
            value: function () {
              var e = this.getItems().filter(function (e) {
                return (null == e ? void 0 : e.inner_status) !== (null == i ? void 0 : i.reporting);
              });
              return null == e ? void 0 : e.length;
            }
          }, {
            key: "sortQueue",
            value: function (e, t) {
              function n(e) {
                return r[e.action_id] || (r[e.action_id] = i.caculateWeight(o, e)), r[e.action_id];
              }

              var i = this,
                  r = {},
                  o = null == e ? void 0 : e.action_time,
                  t = t.concat([e]);
              return t.sort(function (e, t) {
                return n(t) - n(e);
              });
            }
          }, {
            key: "caculateWeight",
            value: function (e, t) {
              var n = 0,
                  i = this.formatWeight(e, null == t ? void 0 : t.action_time),
                  r = i.ogWeight,
                  o = i.sdkWeight,
                  i = i.userWeight,
                  a = (null != (a = this.ogEvents) && a.includes(null == t ? void 0 : t.action_type) && (n += r), null != t && t.is_sdk_auto_track ? n += o : n += i, e - (null == t ? void 0 : t.action_time) + 1);
              return 0 < a ? n + 1 / a : n;
            }
          }, {
            key: "formatWeight",
            value: function (e, t) {
              var n = 1e3,
                  i = 10,
                  r = 100;
              return 2592e6 < e - t && (n /= 100, i /= 100, r /= 100), {
                ogWeight: n,
                sdkWeight: i,
                userWeight: r
              };
            }
          }]), It);

          function It(e) {
            var t = e.userActionSetId,
                n = e.maxLength,
                n = void 0 === n ? 500 : n,
                e = e.ogEvents,
                e = void 0 === e ? [] : e;
            return c(this, It), (t = kt.call(this, {
              userActionSetId: t,
              maxLength: n
            })).ogEvents = e, t;
          }

          S([o], A.prototype, "getReportableActions", 1), S([o], A.prototype, "addAction", 1), S([o], A.prototype, "removeActions", 1), S([o], A.prototype, "updateActionsForReportFail", 1), S([o], A.prototype, "updateActionsForReporting", 1), S([o], A.prototype, "getReportableActionsLength", 1), S([o], A.prototype, "sortQueue", 1), S([o], A.prototype, "caculateWeight", 1), S([o], A.prototype, "formatWeight", 1), n(At, [{
            key: "subscribe",
            value: function (e, t) {
              At.checkCallback(t), y(this.events[e]) ? this.events[e].push(t) : this.events[e] = [t];
            }
          }, {
            key: "once",
            value: function (e, t) {
              At.checkCallback(t), this.subscribe(this.onceEventName(e), t);
            }
          }, {
            key: "unsubscribe",
            value: function (e, t) {
              At.checkCallback(t), y(this.events[e]) && (this.events[e] = this.events[e].filter(function (e) {
                return e !== t;
              })), y(this.events[this.onceEventName(e)]) && (this.events[this.onceEventName(e)] = this.events[this.onceEventName(e)].filter(function (e) {
                return e !== t;
              }));
            }
          }, {
            key: "publish",
            value: function (e) {
              for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

              var r = Date.now();
              y(this.events[e]) && this.events[e].forEach(function (e) {
                return e.apply(void 0, [r].concat(n));
              }), y(this.events[this.onceEventName(e)]) && (this.events[this.onceEventName(e)].forEach(function (e) {
                return e.apply(void 0, [r].concat(n));
              }), this.events[this.onceEventName(e)] = []);
            }
          }, {
            key: "onceEventName",
            value: function (e) {
              return "once_event_prefix_".concat(e);
            }
          }], [{
            key: "checkCallback",
            value: function (e) {
              it(e) || _.error(At.ERROR_CALLBACK_IS_NOT_A_FUNCTION);
            }
          }]);
          t = At;

          function At() {
            c(this, At), this.events = {};
          }

          t.ERROR_CALLBACK_IS_NOT_A_FUNCTION = "callback 不是函数";
          var w = new t(),
              wt = ["REGISTER", "VIEW_CONTENT", "ADD_TO_CART", "PURCHASE", "COMPLETE_ORDER", "ADD_TO_WISHLIST", "START_APP", "CREATE_ROLE", "AUTHORIZE", "TUTORIAL_FINISH", "START_PAY", "FINISH_PAY"],
              e = "FINISH_PAY",
              t = "START_PAY",
              Et = ["REGISTER", "START_APP", "RE_ACTIVE"],
              Ot = ["TICKET", "ENTER_FOREGROUND", "ENTER_BACKGROUND"];
          n(Lt, [{
            key: "getChannelClaimActionList",
            value: function () {
              return this.channelClaimActionList;
            }
          }, {
            key: "getNoClaimActionList",
            value: function () {
              return this.noClaimActionList;
            }
          }, {
            key: "getRealTimeActionList",
            value: function () {
              return this.realTimeActionList;
            }
          }, {
            key: "getTicketInterval",
            value: function () {
              return this.ticketInterval;
            }
          }, {
            key: "getRequestTimeout",
            value: function () {
              return this.requestTimeout;
            }
          }, {
            key: "loadConfig",
            value: function () {
              var e,
                  t = this;

              try {
                "undefined" != typeof wx && ((e = a.getSync(qe)) && this.updateConfig(e), Xe({
                  conf_name: "mini_game_sdk_common",
                  conf_key: "config"
                }).then(function (e) {
                  e && m(e) && (t.updateConfig(e), a.setSync(qe, e));
                }));
              } catch (e) {
                console.error(e);
              }
            }
          }, {
            key: "updateConfig",
            value: function (e) {
              e.channelClaimActionList && y(e.channelClaimActionList) && (this.channelClaimActionList = e.channelClaimActionList), e.noClaimActionList && y(e.noClaimActionList) && (this.noClaimActionList = e.noClaimActionList), e.realTimeActionList && y(e.realTimeActionList) && (this.realTimeActionList = e.realTimeActionList), e.ticketInterval && "number" == typeof e.ticketInterval && 1 < e.ticketInterval && e.ticketInterval !== this.ticketInterval && (this.ticketInterval = e.ticketInterval, w.publish(Je)), e.requestTimeout && "number" == typeof e.requestTimeout && 5e3 < e.requestTimeout && (this.requestTimeout = e.requestTimeout);
            }
          }]);
          var Pt,
              Nt,
              Tt,
              Ct,
              Rt,
              xt,
              Dt = new Lt(),
              Mt = (xt = !(Rt = Ct = Tt = !(Nt = Pt = !1)), function () {
            var e, t, n;
            xt || (xt = !0, (null == (e = a.getSync(Le)) ? void 0 : e.bg) === Fe ? Pt = !0 : (null == e ? void 0 : e.bg) === $e && (Pt = !1), (null == e ? void 0 : e.fg) === Fe ? Nt = !0 : (null == e ? void 0 : e.fg) === $e && (Nt = !1), (null == e ? void 0 : e.st) === Fe ? Tt = !0 : (null == e ? void 0 : e.st) === $e && (Tt = !1), (null == e ? void 0 : e.ti) === Fe ? Ct = !0 : (null == e ? void 0 : e.ti) === $e && (Ct = !1), _.devLog("当前缓存开关 bgOn，fgOn，stOn，tiOn：", Pt, Nt, Tt, Ct), Tt && w.publish("START_APP"), Ct && (t = function () {
              Rt && w.publish("TICKET");
            }, n = setInterval(t, 1e3 * Dt.getTicketInterval()), w.subscribe(Je, function () {
              n && clearInterval(n), n = setInterval(t, 1e3 * Dt.getTicketInterval());
            })), wx.onShow(function (e) {
              if (Rt = !0, Nt) {
                var t = "";

                try {
                  1e4 < (t = JSON.stringify(e)).length && (t = JSON.stringify({
                    cut: 1,
                    scene: e.scene
                  }));
                } catch (e) {}

                w.publish("ENTER_FOREGROUND", {
                  enter_options: t
                });
              }
            }), wx.onHide(function () {
              Rt = !1, Pt && w.publish("ENTER_BACKGROUND");
            }));
          }),
              jt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

          function Lt() {
            c(this, Lt), this.channelClaimActionList = Et, this.noClaimActionList = Ot, this.realTimeActionList = g.realTimeActionList, this.ticketInterval = 60, this.requestTimeout = g.requestTimeout, this.loadConfig();
          }

          function qt(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
          }

          var E,
              Gt = qt(function () {
            var g = null;

            function v(e) {
              return e && ("object" == h(e) || "function" == typeof e);
            }

            function y(e) {
              if (null !== e && !v(e)) throw new TypeError("Object prototype may only be an Object or null: " + e);
            }

            function m() {
              return null;
            }

            var _,
                k = Object,
                b = !(!k.create && {
              __proto__: null
            } instanceof k),
                S = k.create || (b ? function (e) {
              return y(e), {
                __proto__: e
              };
            } : function (e) {
              if (y(e), null === e) throw new SyntaxError("Native Object.create is required to create objects with null prototype");

              function t() {}

              return t.prototype = e, new t();
            }),
                I = k.getPrototypeOf || ([].__proto__ === Array.prototype ? function (e) {
              e = e.__proto__;
              return v(e) ? e : null;
            } : m);

            return (_ = function (n, i) {
              if (void 0 === (this && this instanceof _ ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
              if (!v(n) || !v(i)) throw new TypeError("Cannot create proxy with a non-object as target or handler");

              var e,
                  r = function () {},
                  t = (g = function () {
                n = null, r = function (e) {
                  throw new TypeError("Cannot perform '".concat(e, "' on a proxy that has been revoked"));
                };
              }, setTimeout(function () {
                g = null;
              }, 0), i);

              for (e in i = {
                get: null,
                set: null,
                apply: null,
                construct: null
              }, t) {
                if (!(e in i)) throw new TypeError("Proxy polyfill does not support trap '".concat(e, "'"));
                i[e] = t[e];
              }

              "function" == typeof t && (i.apply = t.apply.bind(t));
              var o,
                  a,
                  s = I(n),
                  c = !1,
                  u = !1,
                  l = ("function" == typeof n ? (o = function () {
                var e = this && this.constructor === o,
                    t = Array.prototype.slice.call(arguments);
                return r(e ? "construct" : "apply"), e && i.construct ? i.construct.call(this, n, t) : !e && i.apply ? i.apply(n, this, t) : e ? (t.unshift(n), new (n.bind.apply(n, t))()) : n.apply(this, t);
              }, c = !0) : n instanceof Array ? (o = [], u = !0) : o = b || null !== s ? S(s) : {}, i.get ? function (e) {
                return r("get"), i.get(this, e, o);
              } : function (e) {
                return r("get"), this[e];
              }),
                  p = i.set ? function (e, t) {
                r("set"), i.set(this, e, t, o);
              } : function (e, t) {
                r("set"), this[e] = t;
              },
                  f = k.getOwnPropertyNames(n),
                  d = {},
                  f = (f.forEach(function (e) {
                var t;
                (c || u) && e in o || (t = {
                  enumerable: !!k.getOwnPropertyDescriptor(n, e).enumerable,
                  get: l.bind(n, e),
                  set: p.bind(n, e)
                }, k.defineProperty(o, e, t), d[e] = !0);
              }), !0);
              if ((c || u) && (a = k.setPrototypeOf || ([].__proto__ === Array.prototype ? function (e, t) {
                return y(t), e.__proto__ = t, e;
              } : m), s && a(o, s) || (f = !1)), i.get || !f) for (var h in n) d[h] || k.defineProperty(o, h, {
                get: l.bind(n, h)
              });
              return k.seal(n), k.seal(o), o;
            }).revocable = function (e, t) {
              return {
                proxy: new _(e, t),
                revoke: g
              };
            }, _;
          }),
              Ut = {};

          try {
            E = E || Gt();
          } catch (Ee) {
            Ht(Ee);
          }

          function Ft(e, t, o, i) {
            try {
              E && null != e && e[t] && (e[t] = new E(e[t], {
                apply: function (e, t, r) {
                  i && Vt(function () {
                    i.apply(void 0, ge(r));
                  });
                  var n = !!(null != (n = r[0]) && n.success || null != (n = r[0]) && n.fail),
                      e = (n && ["success", "fail"].forEach(function (i) {
                    if (r[0][i]) try {
                      r[0][i] = new E(r[0][i], {
                        apply: function (e, t, n) {
                          return Vt(function () {
                            o.apply(void 0, [i, r[0]].concat(ge(n)));
                          }), e.apply(t, n);
                        }
                      });
                    } catch (i) {
                      Ht(i);
                    }
                  }), e.apply(t, r));
                  return !n && e && "[object Promise]" === Object.prototype.toString.call(e) ? e.then(function (e) {
                    return Vt(function () {
                      o("success", r[0], e);
                    }), e;
                  }).catch(function (e) {
                    throw Vt(function () {
                      o("fail", r[0], e);
                    }), e;
                  }) : e;
                }
              }));
            } catch (e) {
              Ht(e);
            }
          }

          function $t(e, t, o) {
            try {
              E && null != e && e[t] && (e[t] = new E(e[t], {
                apply: function (e, t, n) {
                  var i = "function" == typeof n[0];
                  if (i) try {
                    n[0] = new E(n[0], {
                      apply: function (e, t, n) {
                        var i = e.call.apply(e, [t].concat(ge(n)));
                        return Vt(function () {
                          o(i);
                        }), i;
                      }
                    });
                  } catch (e) {
                    Ht(e);
                  }
                  var r = e.call.apply(e, [t].concat(ge(n)));
                  return i || Vt(function () {
                    o(r);
                  }), r;
                }
              }));
            } catch (e) {
              Ht(e);
            }
          }

          function Jt(e, t, n, i, r) {
            var o = 1 < arguments.length && void 0 !== t ? t : "",
                a = 2 < arguments.length ? n : void 0,
                s = 3 < arguments.length && void 0 !== i ? i : [],
                c = 4 < arguments.length ? r : void 0;

            try {
              E && null != e && e[o] && (e[o] = new E(e[o], {
                apply: function (e, t, n) {
                  var i = e.call.apply(e, [t].concat(ge(n)));
                  return a && Ut[o] || (Vt(function () {
                    null != c && c(i);
                  }), s.forEach(function (e) {
                    var t = e.eventName,
                        n = e.isAsync,
                        e = e.proxyEvent;
                    (n ? Ft : $t)(i, t, e);
                  })), a && (Ut[o] = !0), i;
                }
              }));
            } catch (e) {
              Ht(e);
            }
          }

          function Vt(e) {
            try {
              e();
            } catch (e) {
              Ht(e);
            }
          }

          function Ht(e) {
            Qe({
              log_type: v.PROXY_ERROR,
              message: null == e ? void 0 : e.message,
              err_stack: null == e ? void 0 : e.stack
            });
          }

          var Bt = "SHARE",
              Wt = t,
              Kt = e,
              Qt = (Zt = !1, function () {
            Zt || (Zt = !0, Ft(wx, "login", function (e) {
              "success" === e && w.publish("LOGIN");
            }), $t(wx, "onAddToFavorites", function () {
              w.publish("ADD_TO_WISHLIST");
            }), $t(wx, "onShareTimeline", function () {
              w.publish(Bt, {
                target: "TIME_LINE",
                trigger: "MENU"
              });
            }), $t(wx, "onShareAppMessage", function () {
              w.publish(Bt, {
                target: "APP_MESSAGE",
                trigger: "MENU"
              });
            }), $t(wx, "shareAppMessage", function () {
              w.publish(Bt, {
                target: "APP_MESSAGE",
                trigger: "BUTTON"
              });
            }), Jt(wx, "createGameClubButton", !1, [{
              isAsync: !1,
              eventName: "onTap",
              proxyEvent: function () {
                w.publish("TAP_GAME_CLUB");
              }
            }], function () {
              w.publish("CREATE_GAME_CLUB");
            }), Jt(wx, "getGameServerManager", !0, [{
              isAsync: !0,
              eventName: "createRoom",
              proxyEvent: function (e) {
                "success" === e && w.publish("CREATE_GAME_ROOM");
              }
            }, {
              isAsync: !0,
              eventName: "joinRoom",
              proxyEvent: function (e) {
                "success" === e && w.publish("JOIN_GAME_ROOM");
              }
            }]), Ft(wx, "requestMidasPayment", function (e, t) {
              w.publish(Kt, {
                status: "success" === e ? "SUCCESS" : "FAIL",
                quantity: (null == t ? void 0 : t.buyQuantity) || 0,
                mode: (null == t ? void 0 : t.mode) || "",
                platform: (null == t ? void 0 : t.platform) || "",
                no: (null == t ? void 0 : t.outTradeNo) || "",
                payType: "Midas"
              });
            }, function (e) {
              w.publish(Wt, {
                quantity: (null == e ? void 0 : e.buyQuantity) || 0,
                mode: (null == e ? void 0 : e.mode) || "",
                platform: (null == e ? void 0 : e.platform) || "",
                no: (null == e ? void 0 : e.outTradeNo) || "",
                payType: "Midas"
              });
            }), Ft(wx, "requestMidasPaymentGameItem", function (e, t) {
              t = (t || {}).signData;
              w.publish(Kt, {
                status: "success" === e ? "SUCCESS" : "FAIL",
                quantity: (null == t ? void 0 : t.buyQuantity) || 0,
                mode: (null == t ? void 0 : t.mode) || "",
                platform: (null == t ? void 0 : t.platform) || "",
                no: (null == t ? void 0 : t.outTradeNo) || "",
                p: (null == t ? void 0 : t.goodsPrice) || 0,
                productId: (null == t ? void 0 : t.productId) || "",
                payType: "MidasGameItem"
              });
            }, function (e) {
              e = (e || {}).signData;
              w.publish(Wt, {
                quantity: (null == e ? void 0 : e.buyQuantity) || 0,
                mode: (null == e ? void 0 : e.mode) || "",
                platform: (null == e ? void 0 : e.platform) || "",
                no: (null == e ? void 0 : e.outTradeNo) || "",
                p: (null == e ? void 0 : e.goodsPrice) || 0,
                productId: (null == e ? void 0 : e.productId) || "",
                payType: "MidasGameItem"
              });
            }));
          }),
              zt = (n(en, null, [{
            key: "isEmpty",
            value: function (e) {
              return !e || "" === e.trim();
            }
          }, {
            key: "format",
            value: function (e) {
              for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

              return e.replace(/\${(\d+)}/g, function (e, t) {
                return n[t];
              });
            }
          }, {
            key: "customStringify",
            value: function (e) {
              var n = [];

              try {
                return JSON.stringify(e, function (e, t) {
                  if (void 0 === t) return "undefined";

                  if ("object" == h(t) && null !== t) {
                    if (-1 !== n.indexOf(t)) return "[Circular]";
                    n.push(t);
                  }

                  return "bigint" == typeof t ? t.toString() : t;
                });
              } catch (e) {
                return "[Param Error]";
              }
            }
          }]), en),
              Yt = /^([a-zA-Z][a-zA-Z\d_]{0,63})$/i,
              Xt = /^ams_reserved_(.*)/i;
          n(P, null, [{
            key: "validateActionType",
            value: function (e) {
              return zt.isEmpty(e) ? (_.error(P.ERROR_ACTION_TYPE_NULL), !1) : !!Yt.test(e) || (_.error(P.ERROR_ACTION_TYPE_INVALID), !1);
            }
          }, {
            key: "validateActionParam",
            value: function (e) {
              if (e) {
                if (!m(e)) return _.error(P.ERROR_ACTION_PARAM_IS_NOT_OBJECT), !1;

                for (var t in e) {
                  if (zt.isEmpty(t)) return _.error(P.ERROR_ACTION_PARAM_KEY_NULL), !1;
                  if (!Yt.test(t)) return _.error(P.ERROR_ACTION_PARAM_KEY_INVALID), !1;
                  Xt.test(t) && _.warn(P.WARN_ACTION_PARAM_KEY_RESERVED);
                  var n = e[t];
                  if (!P.isValidValue(n)) return _.error(zt.format(P.ERROR_ACTION_PARAM_VALUE_INVALID, t, n)), !1;

                  if (y(n)) {
                    if (!P.isValidArrayValue(n)) {
                      for (var i = 0; i < n.length; i++) _.error(zt.format(P.ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID, t, zt.customStringify(n), i, n[i]));

                      return !1;
                    }

                    if (!P.checkArrayElementTypes(n)) return _.error(P.ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE), !1;
                  }
                }
              }

              return !0;
            }
          }, {
            key: "isValidValue",
            value: function (e) {
              return null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e || y(e);
            }
          }, {
            key: "isValidArrayValue",
            value: function (e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if ("string" != typeof n && "number" != typeof n && "boolean" != typeof n) return !1;
              }

              return !0;
            }
          }, {
            key: "checkArrayElementTypes",
            value: function (e) {
              if (e && !(e.length <= 1)) for (var t = h(e[0]), n = 1; n < e.length; n++) if (h(e[n]) !== t) return !1;
              return !0;
            }
          }]);
          var Zt,
              O = P;

          function P() {
            c(this, P);
          }

          function en() {
            c(this, en);
          }

          O.ERROR_ACTION_TYPE_NULL = "在track方法中，action_type参数不能为空！", O.ERROR_ACTION_TYPE_INVALID = "在track方法中，action_type参数只能包含字母、数字和下划线，且只能以字母开头，长度不能超过64个字符！", O.ERROR_ACTION_PARAM_KEY_NULL = "在track方法中，action_param参数的key不能为空！", O.ERROR_ACTION_PARAM_KEY_INVALID = "在track方法中，action_param参数的key只能包含字母、数字和下划线，且不能以数字开头，长度不能超过64个字符！", O.WARN_ACTION_PARAM_KEY_RESERVED = "SDK内部预留参数的key均以'ams_reserved_'开头，该参数的值会被SDK内部覆盖，请不要使用！", O.ERROR_ACTION_PARAM_VALUE_INVALID = "在track方法中，action_param参数的value必须是String/Number/Boolean/Array中的一种！[key=${0}, value=${1}]", O.ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID = "在track方法中，如果action_param参数中的某个元素的value是Array，那么这个Array中的每个元素必须是String/Number/Boolean中的一种！[key=${0}, value=${1}, 数组的第${2}个元素为${3}]", O.ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE = "在track方法中，如果action_param参数中的某个元素的value是Array，那么这个Array中所有元素的类型必须是同一种！", O.ERROR_ACTION_PARAM_IS_NOT_OBJECT = "action_param 参数不是Object";
          Gt = {
            exports: {}
          };

          function tn(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
          }

          function nn(e, t, n, i, r, o) {
            return tn((t = tn(tn(t, e), tn(i, o))) << r | t >>> 32 - r, n);
          }

          function N(e, t, n, i, r, o, a) {
            return nn(t & n | ~t & i, e, t, r, o, a);
          }

          function T(e, t, n, i, r, o, a) {
            return nn(t & i | n & ~i, e, t, r, o, a);
          }

          function C(e, t, n, i, r, o, a) {
            return nn(t ^ n ^ i, e, t, r, o, a);
          }

          function R(e, t, n, i, r, o, a) {
            return nn(n ^ (t | ~i), e, t, r, o, a);
          }

          function rn(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;

            for (var n, i, r, o, a = 1732584193, s = -271733879, c = -1732584194, u = 271733878, l = 0; l < e.length; l += 16) a = N(n = a, i = s, r = c, o = u, e[l], 7, -680876936), u = N(u, a, s, c, e[l + 1], 12, -389564586), c = N(c, u, a, s, e[l + 2], 17, 606105819), s = N(s, c, u, a, e[l + 3], 22, -1044525330), a = N(a, s, c, u, e[l + 4], 7, -176418897), u = N(u, a, s, c, e[l + 5], 12, 1200080426), c = N(c, u, a, s, e[l + 6], 17, -1473231341), s = N(s, c, u, a, e[l + 7], 22, -45705983), a = N(a, s, c, u, e[l + 8], 7, 1770035416), u = N(u, a, s, c, e[l + 9], 12, -1958414417), c = N(c, u, a, s, e[l + 10], 17, -42063), s = N(s, c, u, a, e[l + 11], 22, -1990404162), a = N(a, s, c, u, e[l + 12], 7, 1804603682), u = N(u, a, s, c, e[l + 13], 12, -40341101), c = N(c, u, a, s, e[l + 14], 17, -1502002290), a = T(a, s = N(s, c, u, a, e[l + 15], 22, 1236535329), c, u, e[l + 1], 5, -165796510), u = T(u, a, s, c, e[l + 6], 9, -1069501632), c = T(c, u, a, s, e[l + 11], 14, 643717713), s = T(s, c, u, a, e[l], 20, -373897302), a = T(a, s, c, u, e[l + 5], 5, -701558691), u = T(u, a, s, c, e[l + 10], 9, 38016083), c = T(c, u, a, s, e[l + 15], 14, -660478335), s = T(s, c, u, a, e[l + 4], 20, -405537848), a = T(a, s, c, u, e[l + 9], 5, 568446438), u = T(u, a, s, c, e[l + 14], 9, -1019803690), c = T(c, u, a, s, e[l + 3], 14, -187363961), s = T(s, c, u, a, e[l + 8], 20, 1163531501), a = T(a, s, c, u, e[l + 13], 5, -1444681467), u = T(u, a, s, c, e[l + 2], 9, -51403784), c = T(c, u, a, s, e[l + 7], 14, 1735328473), a = C(a, s = T(s, c, u, a, e[l + 12], 20, -1926607734), c, u, e[l + 5], 4, -378558), u = C(u, a, s, c, e[l + 8], 11, -2022574463), c = C(c, u, a, s, e[l + 11], 16, 1839030562), s = C(s, c, u, a, e[l + 14], 23, -35309556), a = C(a, s, c, u, e[l + 1], 4, -1530992060), u = C(u, a, s, c, e[l + 4], 11, 1272893353), c = C(c, u, a, s, e[l + 7], 16, -155497632), s = C(s, c, u, a, e[l + 10], 23, -1094730640), a = C(a, s, c, u, e[l + 13], 4, 681279174), u = C(u, a, s, c, e[l], 11, -358537222), c = C(c, u, a, s, e[l + 3], 16, -722521979), s = C(s, c, u, a, e[l + 6], 23, 76029189), a = C(a, s, c, u, e[l + 9], 4, -640364487), u = C(u, a, s, c, e[l + 12], 11, -421815835), c = C(c, u, a, s, e[l + 15], 16, 530742520), a = R(a, s = C(s, c, u, a, e[l + 2], 23, -995338651), c, u, e[l], 6, -198630844), u = R(u, a, s, c, e[l + 7], 10, 1126891415), c = R(c, u, a, s, e[l + 14], 15, -1416354905), s = R(s, c, u, a, e[l + 5], 21, -57434055), a = R(a, s, c, u, e[l + 12], 6, 1700485571), u = R(u, a, s, c, e[l + 3], 10, -1894986606), c = R(c, u, a, s, e[l + 10], 15, -1051523), s = R(s, c, u, a, e[l + 1], 21, -2054922799), a = R(a, s, c, u, e[l + 8], 6, 1873313359), u = R(u, a, s, c, e[l + 15], 10, -30611744), c = R(c, u, a, s, e[l + 6], 15, -1560198380), s = R(s, c, u, a, e[l + 13], 21, 1309151649), a = R(a, s, c, u, e[l + 4], 6, -145523070), u = R(u, a, s, c, e[l + 11], 10, -1120210379), c = R(c, u, a, s, e[l + 2], 15, 718787259), s = R(s, c, u, a, e[l + 9], 21, -343485551), a = tn(a, n), s = tn(s, i), c = tn(c, r), u = tn(u, o);

            return [a, s, c, u];
          }

          function on(e) {
            for (var t = "", n = 32 * e.length, i = 0; i < n; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);

            return t;
          }

          function an(e) {
            var t = [];

            for (t[(e.length >> 2) - 1] = void 0, i = 0; i < t.length; i += 1) t[i] = 0;

            for (var n = 8 * e.length, i = 0; i < n; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;

            return t;
          }

          function sn(e) {
            for (var t, n = "0123456789abcdef", i = "", r = 0; r < e.length; r += 1) t = e.charCodeAt(r), i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);

            return i;
          }

          function cn(e) {
            return unescape(encodeURIComponent(e));
          }

          function un(e) {
            return on(rn(an(e = cn(e)), 8 * e.length));
          }

          function ln(e, t) {
            var n,
                e = cn(e),
                t = cn(t),
                i = an(e),
                r = [],
                o = [];

            for (r[15] = o[15] = void 0, 16 < i.length && (i = rn(i, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ i[n], o[n] = 1549556828 ^ i[n];

            return e = rn(r.concat(an(t)), 512 + 8 * t.length), on(rn(o.concat(e), 640));
          }

          function pn(e, t, n) {
            return t ? n ? ln(t, e) : sn(ln(t, e)) : n ? un(e) : sn(un(e));
          }

          t = jt, (e = Gt).exports ? e.exports = pn : t.md5 = pn;
          var fn = qt(Gt.exports),
              jt = "function" == typeof btoa,
              e = "function" == typeof Buffer;
          "function" == typeof TextDecoder && new TextDecoder();

          function dn(e) {
            var t;
            return e.length < 2 ? (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? x(192 | t >>> 6) + x(128 | 63 & t) : x(224 | t >>> 12 & 15) + x(128 | t >>> 6 & 63) + x(128 | 63 & t) : (t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320), x(240 | t >>> 18 & 7) + x(128 | t >>> 12 & 63) + x(128 | t >>> 6 & 63) + x(128 | 63 & t));
          }

          function hn(e, t, n, i) {
            for (var r, o = 1 < i ? void 0 : i ? Sn(t, n) : t, a = e.length - 1; 0 <= a; a--) (r = e[a]) && (o = (i ? r(t, n, o) : r(o)) || o);

            i && o && bn(t, n, o);
          }

          var gn = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
              vn = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
              x = (vn.forEach(function (e, t) {
            return e, t;
          }), String.fromCharCode.bind(String)),
              yn = ("function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array), jt ? function (e) {
            return btoa(e);
          } : e ? function (e) {
            return Buffer.from(e, "binary").toString("base64");
          } : function (e) {
            for (var t, n, i, r = "", o = e.length % 3, a = 0; a < e.length;) {
              if (255 < (t = e.charCodeAt(a++)) || 255 < (n = e.charCodeAt(a++)) || 255 < (i = e.charCodeAt(a++))) throw new TypeError("invalid character found");
              r += vn[(t = t << 16 | n << 8 | i) >> 18 & 63] + vn[t >> 12 & 63] + vn[t >> 6 & 63] + vn[63 & t];
            }

            return o ? r.slice(0, o - 3) + "===".substring(o) : r;
          }),
              mn = e ? function (e) {
            return Buffer.from(e).toString("base64");
          } : function (e) {
            for (var t = [], n = 0, i = e.length; n < i; n += 4096) t.push(x.apply(null, e.subarray(n, n + 4096)));

            return yn(t.join(""));
          },
              _n = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
              kn = e ? function (e) {
            return Buffer.from(e, "utf8").toString("base64");
          } : gn ? function (e) {
            return mn(gn.encode(e));
          } : function (e) {
            return yn(e.replace(_n, dn));
          },
              bn = Object.defineProperty,
              Sn = Object.getOwnPropertyDescriptor;
          n(D, [{
            key: "batchSend",
            value: function () {
              var e,
                  t,
                  n = this.queueManager.getReportableActions(this.reportThreshold);
              n.length >= this.reportThreshold || (t = (null == (e = this.configManager) ? void 0 : e.getRealTimeActionList()) || g.realTimeActionList, n.some(function (e) {
                return -1 < t.indexOf(e.action_type) && !e.is_retry;
              })) ? this.executeSend() : this.triggerExecuteSend(), this.startInspectTimer();
            }
          }, {
            key: "flushSend",
            value: function () {
              this.executeSend();
            }
          }, {
            key: "executeSend",
            value: function () {
              var t = this;
              if (D.requestConcurrency <= D.currentRequestCount) this.isNeedContinueSend = !0;else {
                this.isNeedContinueSend = !1;
                var e = (D.requestConcurrency - D.currentRequestCount) * this.cgiBatchSize,
                    n = this.queueManager.getReportableActions(e),
                    i = this.getBaseInfo();

                if (i.openid || i.unionid || (_.warn("请尽快调用 setOpenId 或 setUnionId 方法设置用户ID！"), n = n.filter(function (e) {
                  return null == e ? void 0 : e.ad_trace_id;
                })), !(n.length <= 0)) {
                  e < this.queueManager.getReportableActionsLength() && (this.isNeedContinueSend = !0), D.currentRequestCount += Math.ceil(n.length / this.cgiBatchSize);

                  for (var r = [], o = 0; o < n.length; o += this.cgiBatchSize) {
                    var a = this.generateActionReportParams(n.slice(o, o + this.cgiBatchSize));
                    r.push(this.report(a));
                  }

                  Promise.all(r).then(function (e) {
                    e = e.some(function (e) {
                      return 0 <= e;
                    });
                    t.isNeedContinueSend && e && t.executeSend();
                  }).catch(function (e) {
                    _.error(e), t.reportLog({
                      message: "executeSend catch: ".concat(e.message),
                      log_type: v.JS_RUN_ERROR,
                      err_stack: e.stack
                    });
                  });
                }
              }
            }
          }, {
            key: "generateActionReportParams",
            value: function (e) {
              var t = [],
                  n = [],
                  i = this.getBaseInfo();
              return e.forEach(function (e) {
                n.push(e.action_id);
                e = Object.assign({}, e);
                delete e.inner_status, t.push(e);
              }), {
                data: {
                  info: i,
                  actions: t
                },
                actionIdList: n
              };
            }
          }, {
            key: "dealSuccessData",
            value: function (e, t) {
              -1 < [51001, 51003].indexOf(null == e ? void 0 : e.code) ? this.queueManager.updateActionsForReportFail(t) : this.queueManager.removeActions(t), 0 !== (null == e ? void 0 : e.code) && (this.reportLog({
                log_type: v.REQUEST_ERROR,
                code: null == e ? void 0 : e.code,
                message: "trace_id: ".concat(null == e ? void 0 : e.trace_id, "，msg: ").concat(null == e ? void 0 : e.message)
              }), _.error("上报失败：", e));
            }
          }, {
            key: "dealFailData",
            value: function (e, t) {
              this.queueManager.updateActionsForReportFail(t), this.reportLog({
                log_type: v.REQUEST_ERROR,
                code: e.code,
                message: e.message
              }), _.error("上报失败：", e);
            }
          }, {
            key: "report",
            value: function (e) {
              var p = this,
                  f = e.data,
                  d = e.actionIdList;
              return this.queueManager.updateActionsForReporting(d), _.debug && (_.info("上报行为类型: ", "【".concat(f.actions.map(function (e) {
                return e.action_type;
              }).join("、"), "】")), _.info("上报请求参数: ", f)), new Promise(function (n) {
                var e,
                    t,
                    i,
                    r,
                    o,
                    a = Date.now();

                try {
                  var s = function (e) {
                    var t = "",
                        n = null == e ? void 0 : e.appid,
                        i = null == e ? void 0 : e.secret_key,
                        r = null == e ? void 0 : e.sdk_version,
                        e = null == e ? void 0 : e.timestamp;
                    if (n && i && r && e && 32 === i.length) for (var o = fn(r + n + e), a = 0; a < 32; a++) t += (a % 2 == 0 ? i : o)[a];
                    return t;
                  }({
                    appid: null == (o = null == f ? void 0 : f.info) ? void 0 : o.appid,
                    secret_key: null == (e = null == f ? void 0 : f.info) ? void 0 : e.secret_key,
                    sdk_version: null == (t = null == f ? void 0 : f.info) ? void 0 : t.sdk_version,
                    timestamp: a
                  }),
                      c = function (e, t) {
                    return 1 < arguments.length && void 0 !== t && t ? kn(e).replace(/=/g, "").replace(/[+\/]/g, function (e) {
                      return "+" == e ? "-" : "_";
                    }) : kn(e);
                  }(JSON.stringify(f)),
                      u = {
                    "Client-Time": a,
                    "Sign-Value": fn(c + (null == (i = null == f ? void 0 : f.info) ? void 0 : i.user_action_set_id) + (null == (r = null == f ? void 0 : f.info) ? void 0 : r.secret_key) + s),
                    "Sign-Version": g.signVersion,
                    "content-type": "text/plain;charset=UTF-8"
                  },
                      l = c;
                } catch (s) {
                  u = {
                    "Client-Time": a
                  }, l = f, p.reportLog({
                    log_type: v.SIGN_ERROR,
                    message: "sign error msg: ".concat(null == s ? void 0 : s.message),
                    err_stack: null == s ? void 0 : s.stack
                  }), _.error(s);
                }

                wx.request({
                  url: "https://api.datanexus.qq.com/data-nexus-cgi/miniprogram",
                  method: "POST",
                  timeout: (null == (o = p.configManager) ? void 0 : o.getRequestTimeout()) || g.requestTimeout,
                  header: u,
                  data: l,
                  success: function (e) {
                    _.devLog("上报接口返回码:", null == (t = null == e ? void 0 : e.data) ? void 0 : t.code);

                    var t = (null == (t = null == e ? void 0 : e.header) ? void 0 : t["Server-Time"]) || -1;
                    if (ze.revise(t), --D.currentRequestCount, 200 === (null == e ? void 0 : e.statusCode)) p.dealSuccessData(null == e ? void 0 : e.data, d), n((null == e ? void 0 : e.data).code);else {
                      t = "";

                      try {
                        t = "object" == h(null == e ? void 0 : e.data) ? JSON.stringify(null == e ? void 0 : e.data) : null == e ? void 0 : e.data;
                      } catch (e) {
                        _.error(e);
                      }

                      e = {
                        code: "number" == typeof (null == e ? void 0 : e.statusCode) ? -1 * e.statusCode : -888,
                        message: "statusCode: ".concat(null == e ? void 0 : e.statusCode, ", data: ").concat(t)
                      };
                      p.dealFailData(e, d), n(e.code);
                    }
                  },
                  fail: function (e) {
                    _.devLog("上报失败:", e), --D.currentRequestCount;
                    e = {
                      code: "number" == typeof (null == e ? void 0 : e.errno) ? -1 * e.errno : -999,
                      message: null == e ? void 0 : e.errMsg
                    };
                    p.dealFailData(e, d), n(e.code);
                  }
                });
              });
            }
          }, {
            key: "startInspectTimer",
            value: function () {
              var e = this;
              clearTimeout(this.inspectTimer), this.inspectTimer = setTimeout(function () {
                D.requestConcurrency <= D.currentRequestCount && (D.currentRequestCount = D.requestConcurrency - 1), e.executeSend(), e.startInspectTimer();
              }, 1e3 * this.inspectDelay);
            }
          }], [{
            key: "setRequestConcurrency",
            value: function (e) {
              "number" == typeof e ? e < 1 ? _.error("网络请求最大并发量不能小于1") : 10 < e ? _.error("网络请求最大并发量不能大于10") : D.requestConcurrency = e : _.error("网络请求最大并发量需设置为数字");
            }
          }]);
          var In = D;

          function D(e) {
            var t = this;
            c(this, D), this.cgiBatchSize = g.cgiBatchSize, this.reportThreshold = g.reportThreshold, this.reportDelay = g.reportDelay, this.triggerExecuteSend = function (i, e) {
              var r,
                  o = 1 < arguments.length && void 0 !== e ? e : 0,
                  a = [];
              return function () {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

                return clearTimeout(r), r = setTimeout(function () {
                  var t = i.apply(void 0, n);
                  a.forEach(function (e) {
                    return e(t);
                  }), a = [];
                }, o), new Promise(function (e) {
                  return a.push(e);
                });
              };
            }(function () {
              t.executeSend();
            }, 1e3 * this.reportDelay), this.inspectDelay = g.inspectDelay, this.inspectTimer = void 0, this.isNeedContinueSend = !1, this.getBaseInfo = e.getBaseInfo, this.reportLog = e.reportLog, this.queueManager = e.queueManager, this.configManager = e.configManager, this.flushSend(), this.startInspectTimer();
          }

          In.currentRequestCount = 0, In.requestConcurrency = g.requestConcurrency, hn([o], In.prototype, "batchSend", 1), hn([o], In.prototype, "flushSend", 1), hn([o], In.prototype, "executeSend", 1);
          n(Cn, [{
            key: "install",
            value: function (i, e) {
              function t(e) {
                w.subscribe(e, function (t, e) {
                  var n = 1 < arguments.length && void 0 !== e ? e : {};
                  return function (e) {
                    i.track(t, Object.assign(n || {}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, he(he({}, qn, !0), Gn, e)));
                  };
                }(e));
              }

              t("TICKET"), t("START_APP"), t("ENTER_FOREGROUND"), t("ENTER_BACKGROUND"), "all" === e && (t("LOGIN"), t("ADD_TO_WISHLIST"), t("SHARE"), t("CREATE_GAME_CLUB"), t("TAP_GAME_CLUB"), t("CREATE_GAME_ROOM"), t("JOIN_GAME_ROOM"), t("START_PAY"), t("FINISH_PAY"));
            }
          }]);
          var An = Cn;
          n(Tn, [{
            key: "onPurchase",
            value: function (e) {
              "number" != typeof e && _.warn("付费金额需要为数字"), e <= 0 && _.warn("付费金额需要大于0"), this.wrapTrack("PURCHASE", {
                value: e
              });
            }
          }, {
            key: "onEnterForeground",
            value: function () {
              this.wrapTrack("ENTER_FOREGROUND");
            }
          }, {
            key: "onEnterBackground",
            value: function () {
              this.wrapTrack("ENTER_BACKGROUND");
            }
          }, {
            key: "onAppStart",
            value: function () {
              this.wrapTrack("START_APP");
            }
          }, {
            key: "onAppQuit",
            value: function () {
              this.wrapTrack("APP_QUIT");
            }
          }, {
            key: "onAddToWishlist",
            value: function () {
              this.wrapTrack("ADD_TO_WISHLIST");
            }
          }, {
            key: "wrapTrack",
            value: function (e, t) {
              this.track(e, Object.assign(t || {}, he({}, this.special_method_symbol, 1)));
            }
          }]);
          me(Nn, Tn), En = ke(Nn), n(Nn, [{
            key: "onRegister",
            value: function () {
              this.wrapTrack("REGISTER");
            }
          }, {
            key: "onCreateRole",
            value: function (e) {
              e && "string" != typeof e && _.warn("角色名称需要为字符串"), this.wrapTrack("CREATE_ROLE", e ? {
                name: e
              } : {});
            }
          }, {
            key: "onTutorialFinish",
            value: function () {
              this.wrapTrack("TUTORIAL_FINISH");
            }
          }]);
          var wn,
              En,
              t = Nn,
              On = "（如果确认无误，请忽略该提示）",
              Pn = (wn = [], {
            requestActionList: function () {
              try {
                Xe({
                  conf_name: "data_nexus_common",
                  conf_key: "action_types"
                }).then(function (e) {
                  y(e) && (wn = e);
                });
              } catch (e) {
                _.error(e);
              }
            },
            getActionList: function () {
              return wn;
            }
          });

          function Nn() {
            return c(this, Nn), En.apply(this, arguments);
          }

          function Tn() {
            c(this, Tn), this.special_method_symbol = Symbol("special_method_symbol");
          }

          function Cn() {
            c(this, Cn);
          }

          function Rn(e, t) {
            try {
              if (!e.is_sdk_auto_track) {
                var n = e.action_type;

                try {
                  var i = Pn.getActionList();

                  if (!i.includes(n)) {
                    var r,
                        o = function (e) {
                      var t,
                          n,
                          i,
                          r,
                          o,
                          a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                      if (a) return i = !(n = !0), {
                        s: function () {
                          a = a.call(e);
                        },
                        n: function () {
                          var e = a.next();
                          return n = e.done, e;
                        },
                        e: function (e) {
                          i = !0, t = e;
                        },
                        f: function () {
                          try {
                            n || null == a.return || a.return();
                          } finally {
                            if (i) throw t;
                          }
                        }
                      };
                      if (Array.isArray(e) || (a = ve(e))) return a && (e = a), r = 0, {
                        s: o = function () {},
                        n: function () {
                          return r >= e.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: e[r++]
                          };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: o
                      };
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }(i);

                    try {
                      for (o.s(); !(r = o.n()).done;) {
                        var a = r.value;

                        if (function (e, t) {
                          try {
                            if (0 === e.length) return t.length;
                            if (0 === t.length) return e.length;

                            for (var n = [], i = 0; i <= t.length; i++) n[i] = [i];

                            for (var r = 0; r <= e.length; r++) n[0][r] = r;

                            for (var o = 1; o <= t.length; o++) for (var a = 1; a <= e.length; a++) t.charAt(o - 1) === e.charAt(a - 1) ? n[o][a] = n[o - 1][a - 1] : n[o][a] = Math.min(n[o - 1][a - 1] + 1, n[o][a - 1] + 1, n[o - 1][a] + 1);

                            return n[t.length][e.length];
                          } catch (n) {
                            _.error(n);
                          }
                        }(a, n) <= parseInt((.3 * a.length).toString())) {
                          _.warn("通过SDK上报的".concat(n, "行为名称可能有误，请检查该行为类型是否为腾讯广告提供的标准行为！").concat(On));

                          break;
                        }
                      }
                    } catch (n) {
                      o.e(n);
                    } finally {
                      o.f();
                    }
                  }
                } catch (i) {
                  _.error(i);
                }

                if ("minigame" === t) {
                  var s,
                      c,
                      u,
                      l = e,
                      p = t;

                  try {
                    ["PURCHASE", "ADD_TO_CART"].includes(l.action_type) && l.action_param && ft(l.action_param, "value") && ("number" != typeof (null == (s = l.action_param) ? void 0 : s.value) ? _.warn("通过SDK上报的".concat(l.action_type, "行为携带的金额参数需要为数字！")) : (null == (c = l.action_param) ? void 0 : c.value) <= 0 ? _.warn("通过SDK上报的".concat(l.action_type, "行为携带的金额参数需要大于0！")) : "minigame" === p && (null == (u = l.action_param) ? void 0 : u.value) < 100 && _.warn("通过SDK上报的".concat(l.action_type, "行为携带的金额参数可能有误，金额的单位为‘分’，请检查金额是否正确！").concat(On)));
                  } catch (l) {
                    _.error(l);
                  }
                } else if ("miniprogram" === t) {
                  var f = e;

                  try {
                    var d = null == f ? void 0 : f.action_type,
                        h = (null == f ? void 0 : f.action_param) || {};
                    "PURCHASE" === d && ft(h, "value") && ("number" != typeof (null == h ? void 0 : h.value) ? _.warn("通过SDK上报的".concat(d, "行为携带的金额参数需要为数字！")) : (null == h ? void 0 : h.value) <= 0 && _.warn("通过SDK上报的".concat(d, "行为携带的金额参数需要大于0！")));
                  } catch (d) {
                    _.error(d);
                  }
                }
              }
            } catch (e) {
              _.error(e);
            }
          }

          function xn(e) {
            try {
              e && !/^[a-zA-Z0-9_\-]+$/.test(e) && _.warn("通过SDK上报的openid：".concat(e, "可能有误，请检查openid是否正确！").concat(On));
            } catch (e) {
              _.error(e);
            }
          }

          function Dn(e, t, n, i) {
            for (var r, o = 1 < i ? void 0 : i ? jn(t, n) : t, a = e.length - 1; 0 <= a; a--) (r = e[a]) && (o = (i ? r(t, n, o) : r(o)) || o);

            i && o && Mn(t, n, o);
          }

          var Mn = Object.defineProperty,
              jn = Object.getOwnPropertyDescriptor,
              Ln = Symbol("initializedInstance"),
              qn = Symbol("autoTrack"),
              Gn = Symbol("actionTime");
          me(Fn, t), Un = ke(Fn), n(Fn, [{
            key: "track",
            value: function (e, t) {
              var n = O.validateActionType(e),
                  i = O.validateActionParam(t);
              n && i && (this.openid || this.unionid || _.warn("缺少 openid 或 unionid"), n = g.actionParamMaxLength, JSON.stringify(t || {}).length > n ? _.error("监测到超过".concat(n, "的上报日志：").concat(e, " ").concat(t)) : (i = !(null == t || !t[qn]), n = this.createAction(e, t || {}, i), "release" !== (null == (e = Ke()) ? void 0 : e.envVersion) && Rn(n, "minigame"), null != (t = this.queueManage) && t.addAction(n), null != (i = this.actionReporter) && i.batchSend()));
            }
          }, {
            key: "flush",
            value: function () {
              var e;
              null != (e = this.actionReporter) && e.flushSend();
            }
          }, {
            key: "setOpenId",
            value: function (e) {
              var t;
              e && "string" == typeof e ? (this.openid = e, this.gameInfo.ad_trace_id && !a.getSync(Ge) && w.publish("START_APP"), this.flush(), this.saveValidOpenidToStorage(), "release" !== (null == (t = Ke()) ? void 0 : t.envVersion) && xn(e)) : _.error("openid 格式错误");
            }
          }, {
            key: "setUnionId",
            value: function (e) {
              e && "string" == typeof e ? (this.unionid = e, this.flush()) : _.error("unionid 格式错误");
            }
          }, {
            key: "setUserUniqueId",
            value: function (e) {
              e && "string" == typeof e ? this.user_unique_id = e : _.error("user_unique_id 格式错误");
            }
          }, {
            key: "doReportOnEnterBackground",
            value: function () {
              var t = this;
              wx.onHide(function () {
                var e;
                null != (e = t.actionReporter) && e.flushSend(), null != (e = t.queueManage) && e.reportLostNum();
              });
            }
          }, {
            key: "getTrackBaseInfo",
            value: function () {
              var t,
                  n,
                  e = Ke();
              return Object.assign({}, this.deviceInfo, (t = this.config, n = {}, ["user_action_set_id", "appid", "openid", "secret_key", "user_unique_id", "unionid"].forEach(function (e) {
                ft(t, e) && (n[e] = t[e]);
              }), n), {
                local_id: He(),
                sdk_name: this.sdk_name,
                sdk_version: this.sdk_version,
                openid: this.openid || We(),
                unionid: this.unionid,
                user_unique_id: this.user_unique_id,
                inner_param: {
                  app_env_version: e.envVersion,
                  app_version: e.version
                }
              });
            }
          }, {
            key: "createAction",
            value: function (e, t) {
              var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                  i = (null != t && t[qn] && delete t[qn], Date.now()),
                  i = (null != t && t[Gn] && (i = null == t ? void 0 : t[Gn], delete t[Gn]), {
                action_id: at(),
                action_param: t,
                action_time: i,
                action_type: e,
                is_retry: !1,
                is_sdk_auto_track: n,
                retry_count: 0,
                revised_action_time: ze.getRevisedcurrentTimeMillis(),
                log_id: ++this.log_id,
                session_id: this.session_id,
                pkg_channel_id: this.gameInfo.pkg_channel_id,
                source_scene: this.gameInfo.source_scene,
                network_type: Be(),
                ad_trace_id: this.gameInfo.ad_trace_id,
                channel: this.getChannelByActionType(e)
              });
              return null != t && t[this.special_method_symbol] && (this.addActionInnerParam(i, "is_special_method", !0), delete t[this.special_method_symbol]), -1 < Dt.getChannelClaimActionList().indexOf(e) && this.gameInfo.launch_options && this.addActionInnerParam(i, "launch_options", this.gameInfo.launch_options), i;
            }
          }, {
            key: "addActionInnerParam",
            value: function (e, t, n) {
              e.inner_param && m(e.inner_param) ? e.inner_param[t] = n : e.inner_param = he({}, t, n);
            }
          }, {
            key: "getChannelByActionType",
            value: function (e) {
              var t = "";
              return -1 < Dt.getChannelClaimActionList().indexOf(e) ? t = this.gameInfo.channel || "" : -1 < Dt.getNoClaimActionList().indexOf(e) && (t = "UNKNOWN"), t;
            }
          }, {
            key: "reportLog",
            value: function (e) {
              var t = {
                user_action_set_id: null == (t = this.config) ? void 0 : t.user_action_set_id,
                appid: null == (t = this.config) ? void 0 : t.appid,
                session_id: this.session_id
              };
              Qe(Object.assign(t, e));
            }
          }, {
            key: "useAutoTrack",
            value: function () {
              var e, t;
              null != (e = this.config) && e.auto_track && (e = !0, (null == (t = a.getSync(Le)) ? void 0 : t.ap) === Fe ? e = !0 : (null == t ? void 0 : t.ap) === $e && (e = !1), "devtools" === Ve().wx_platform && (e = !0), new An().install(this, e ? "all" : "lifecycle"), Mt(), e && Qt(), this.getAutoProxyRemoteConfig());
            }
          }, {
            key: "getAutoProxyRemoteConfig",
            value: function () {
              var e,
                  n,
                  t = Ve();
              t.os && t.os_version && null != (e = this.config) && e.user_action_set_id && (n = {
                conf_name: "MG",
                conf_param: {
                  user_action_set_id: null == (e = this.config) ? void 0 : e.user_action_set_id,
                  sdk_version: this.sdk_version,
                  os_type: (null == t ? void 0 : t.os) || "",
                  os_version: function (t) {
                    try {
                      return t && "string" == typeof t ? -1 === (t = t.replace(/\s/g, "")).indexOf(".") ? t : t.split(".").slice(0, 2).join(".") : "";
                    } catch (e) {
                      return t;
                    }
                  }(t.os_version),
                  device_brand: (null == t ? void 0 : t.device_brand) || "",
                  weixin_lib_version: (null == t ? void 0 : t.wx_lib_version) || "",
                  weixin_version: (null == t ? void 0 : t.wx_version) || ""
                }
              }, new Promise(function (t) {
                wx.request({
                  method: "POST",
                  url: "https://api.datanexus.qq.com/data-nexus-config/v1/sdk/minigame/get",
                  data: n,
                  timeout: g.requestTimeout,
                  success: function (e) {
                    Ze(e, t, "minigame/get"), nt(e);
                  },
                  fail: function (e) {
                    et(e, "minigame/get");
                  }
                });
              }).then(function (e) {
                m(e) && a.setSync(Le, e);
              }));
            }
          }, {
            key: "saveValidOpenidToStorage",
            value: function () {
              this.openid && /^[a-zA-Z0-9_-]{28,30}$/.test(this.openid) && a.setSync(Ge, this.openid);
            }
          }], [{
            key: "setRequestConcurrency",
            value: function (e) {
              In.setRequestConcurrency(e);
            }
          }, {
            key: "setDebug",
            value: function (e) {
              _.debug = e;
            }
          }]);
          var Un,
              M = Fn;

          function Fn(e) {
            var t, n, i, r, o, a, s;
            return (c(this, Fn), (t = Un.call(this)).env = "production", t.sdk_version = "1.5.4", t.sdk_name = "@dn-sdk/minigame", t.deviceInfo = {}, t.gameInfo = {}, t.session_id = "", t.log_id = 0, t.inited = !1, null != wx && wx.createCanvas) ? (r = g, Fn[Ln].length >= r.maxSdkInstance ? _.error("初始化超过上限") : (i = function (e) {
              {
                if (m(e)) {
                  var t,
                      n = ["user_action_set_id", "secret_key", "appid", "openid", "unionid", "user_unique_id", "auto_track", "auto_attr"];

                  for (t in e) n.includes(t) || _.warn("Invalid property '".concat(t, "' found in config"));

                  return "number" != typeof e.user_action_set_id ? "user_action_set_id 参数需为 number 类型" : e.user_action_set_id <= 0 ? "user_action_set_id 参数需大于 0" : "string" != typeof e.secret_key ? "secret_key 参数需为 string 类型" : "" === e.secret_key.trim() ? "缺少 secret_key 参数" : 32 !== e.secret_key.length ? "secret_key 参数需为 32 位字符串" : "string" != typeof e.appid ? "appid 参数需为 string 类型" : "" !== e.appid.trim() || "缺少 appid";
                }

                return "初始化参数需为 object 类型";
              }
            }(e), n = Ke(), !0 !== i ? _.error(i) : (i = null == n ? void 0 : n.appId) && i !== e.appid ? _.error("初始化失败，传入的appid与当前小游戏appid不一致") : (ft(t.config = e, "auto_track") || (t.config.auto_track = g.autoTrack), t.openid = e.openid, t.unionid = e.unionid, t.user_unique_id = e.user_unique_id, t.saveValidOpenidToStorage(), i = e.user_action_set_id, Fn[Ln].includes(i) ? _.error("请勿重复初始化SDK") : (t.reportLog = t.reportLog.bind(Se(t)), t.getTrackBaseInfo = t.getTrackBaseInfo.bind(Se(t)), t.deviceInfo = Ve(), t.gameInfo = gt(), t.session_id = at(), t.queueManage = new A({
              userActionSetId: i,
              maxLength: r.maxQueueLength,
              ogEvents: wt
            }), t.actionReporter = new In({
              getBaseInfo: t.getTrackBaseInfo,
              reportLog: t.reportLog,
              queueManager: t.queueManage,
              configManager: Dt
            }), t.inited = !0, Fn[Ln].push(i), t.useAutoTrack(), t.doReportOnEnterBackground(), "release" === (null == n ? void 0 : n.envVersion) ? _.info("初始化成功") : (r = {
              conf_name: "mini_game_sdk_common",
              conf_key: "version",
              sdk_version: t.sdk_version,
              default_download_url: "https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/dn-sdk-minigame/dn-sdk-minigame.zip",
              fail_handler: function () {
                t.inited = !1;
              }
            }, o = r.sdk_version, a = r.default_download_url, s = r.fail_handler, Xe({
              conf_name: r.conf_name,
              conf_key: r.conf_key
            }).then(function (e) {
              var t, n, i, r;
              if (m(e)) return t = null == e ? void 0 : e.blackVersions, n = null == e ? void 0 : e.minVersion, i = null == e ? void 0 : e.bestVersion, e = null == e ? void 0 : e.downloadUrl, r = a, e && /^https/.test(e) && (r = e), y(t) && -1 < (null == t ? void 0 : t.indexOf(o)) ? (null != s && s(), void _.error("初始化失败！当前SDK版本存在兼容问题，请尽快升级至最新版！下载地址：".concat(r))) : n && st(o, n) < 0 ? (null != s && s(), void _.error("初始化失败！当前SDK版本过低，请尽快升级至最新版！下载地址：".concat(r))) : (i && st(o, i) < 0 && _.warn("新版本SDK已上线，强烈建议您升级至最新版，尽早享受新特性！下载地址：".concat(r)), void _.info("初始化成功"));

              _.info("初始化成功");
            }).catch(function () {
              _.info("初始化成功");
            }), Pn.requestActionList(), xn(e.openid)))))) : _.error("SDK只可以用在微信小游戏中使用"), be(t);
          }

          M[Ln] = [], Dn([o, vt], M.prototype, "track", 1), Dn([o, vt], M.prototype, "flush", 1), Dn([o], M.prototype, "setOpenId", 1), Dn([o], M.prototype, "setUnionId", 1), Dn([o], M.prototype, "setUserUniqueId", 1), Dn([o], M.prototype, "doReportOnEnterBackground", 1), Dn([o], M.prototype, "getTrackBaseInfo", 1), Dn([o], M.prototype, "useAutoTrack", 1);

          var $n = function () {
            function s(e, t, n, i, r, o, a) {
              l(this, s), this.data = e, this.serverUrl = t, this.callback = a, this.debugMode = r, this.platFormName = o, this.tryCount = b.isNumber(n) ? n : 1, this.permissionTryCount = 6, this.timeout = b.isNumber(i) ? i : 3e3, this.taClassName = "HttpTask";
            }

            return p(s, [{
              key: "run",
              value: function () {
                var e,
                    n = this,
                    t = b.createExtraHeaders(),
                    i = (t["content-type"] = "application/json", "debug" === this.debugMode && (t["Turbo-Debug-Mode"] = 1), "GravityEngine_ali_game" === this.platFormName ? "headers" : "header"),
                    r = k.request((U(e = {
                  url: this.serverUrl,
                  method: "POST",
                  data: this.data
                }, i, t), U(e, "success", function (e) {
                  var t;
                  0 === (null == e || null == (t = e.data) ? void 0 : t.code) ? n.onSuccess(e) : n.onFailed(e);
                }), U(e, "fail", function (e) {
                  n.onFailed(e);
                }), e));
                setTimeout(function () {
                  if ((b.isObject(r) || b.isPromise(r)) && b.isFunction(r.abort)) try {
                    r.abort();
                  } catch (e) {}
                }, this.timeout);
              }
            }, {
              key: "onSuccess",
              value: function (e) {
                var t, n;
                200 === e.statusCode ? (n = "Data Verified", null != e && null != (t = e.data) && null != (t = t.extra) && null != (t = t.errors) && t.length && (n = e.data.extra.errors), this.callback({
                  code: null == e || null == (t = e.data) ? void 0 : t.code,
                  msg: n
                })) : this.callback({
                  code: (null == e ? void 0 : e.statusCode) || -3,
                  msg: e.statusCode
                });
              }
            }, {
              key: "onFailed",
              value: function (e) {
                var t,
                    n = this;
                0 < --this.tryCount ? setTimeout(function () {
                  n.run();
                }, 1e3) : this.callback({
                  code: -3,
                  msg: "".concat(null == e || null == (t = e.data) ? void 0 : t.msg, "：").concat(null == e || null == (t = e.data) || null == (t = t.extra) ? void 0 : t.error)
                });
              }
            }]), s;
          }(),
              Jn = new (function () {
            function e() {
              l(this, e), this.items = [], this.isRunning = !1, this.showDebug = !1;
            }

            return p(e, [{
              key: "enqueue",
              value: function (e, t, n) {
                var i = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                    r = "debug" === n.debugMode,
                    o = this,
                    e = new $n(JSON.stringify(e), t, n.maxRetries, n.sendTimeout, n.debugMode, n.platFormName, function (e) {
                  o.isRunning = !1, b.isFunction(n.callback) && n.callback(e), o._runNext(r), r && f.info("code ".concat(e.code, " and msg is,"), e.msg);
                });
                !0 === i ? (this.items.push(e), this._runNext(r)) : e.run();
              }
            }, {
              key: "_dequeue",
              value: function () {
                return this.items.shift();
              }
            }, {
              key: "_runNext",
              value: function (e) {
                if (0 < this.items.length && !this.isRunning) if (this.isRunning = !0, e) this._dequeue().run();else {
                  for (var t = this.items.splice(0, this.items.length), e = t[0], n = JSON.parse(e.data), i = 1; i < t.length; i++) {
                    var r = t[i],
                        r = JSON.parse(r.data);
                    n.event_list = n.event_list.concat(r.event_list);
                  }

                  var o = new Date().getTime();
                  n.$flush_time = o, new $n(JSON.stringify(n), e.serverUrl, e.tryCount, e.timeout, null == e ? void 0 : e.debugMode, e.platFormName, e.callback).run();
                }
              }
            }]), e;
          }())(),
              Vn = {
            name: "GravityEngine",
            is_plugin: !1,
            maxRetries: 3,
            sendTimeout: 5e3,
            enablePersistence: !0,
            asyncPersistence: !1,
            strict: !1,
            debugMode: "none"
          },
              Hn = {
            properties: {
              $lib_version: B,
              $lib: K,
              $scene: "",
              $today_first_scene: ""
            },
            getSystemInfo: function (e) {
              var n = this;
              k.onNetworkStatusChange(function (e) {
                n.properties.$network_type = e.networkType;
              }), k.getNetworkType({
                success: function (e) {
                  n.properties.$network_type = e.networkType;
                },
                complete: function () {
                  k.getSystemInfo({
                    success: function (e) {
                      f.info(JSON.stringify(e, null, 4));
                      var t = {
                        $manufacturer: e.brand,
                        $brand: e.brand,
                        $model: e.model,
                        $screen_width: Number(e.screenWidth),
                        $screen_height: Number(e.screenHeight),
                        $system_language: e.language,
                        $os: e.platform,
                        $os_version: e.system
                      };
                      b.extend(n.properties, t), b.setMpPlatform(e.mp_platform);
                    },
                    complete: function () {
                      e();
                    }
                  });
                }
              });
            }
          },
              Bn = function () {
            function e(t, n) {
              var i = this;
              l(this, e), this.enabled = t.enablePersistence, this.enabled ? (t.isChildInstance ? (this.name = t.persistenceName + "_" + t.name, this.nameOld = t.persistenceNameOld + "_" + t.name) : (this.name = t.persistenceName, this.nameOld = t.persistenceNameOld), t.asyncPersistence ? (this._state = {}, k.getStorage(this.name, !0, function (e) {
                b.isEmptyObject(e) ? k.getStorage(i.nameOld, !0, function (e) {
                  i._state = b.extend2Layers({}, e, i._state), i._init(t, n), i._save();
                }) : (i._state = b.extend2Layers({}, e, i._state), i._init(t, n), i._save());
              })) : (this._state = k.getStorage(this.name) || {}, b.isEmptyObject(this._state) && (this._state = k.getStorage(this.nameOld) || {}), this._init(t, n))) : (this._state = {}, this._init(t, n));
            }

            return p(e, [{
              key: "_init",
              value: function (e, t) {
                this.getDistinctId() || this.setDistinctId(b.UUID()), e.isChildInstance || this.getDeviceId() || this._setDeviceId(b.UUID()), this.initComplete = !0, "function" == typeof t && t();
                var e = k.getStorage(this.name),
                    t = null == e ? void 0 : e.current_first_scene_date,
                    n = null == e ? void 0 : e.current_first_scene,
                    i = new Date().toLocaleDateString();
                n && t && t === i ? Hn.properties.$today_first_scene = String(null == e ? void 0 : e.current_first_scene) : (e = String((null == (n = k.getAppOptions()) ? void 0 : n.scene) || (null == (t = k.getAppOptions()) ? void 0 : t.from)), Hn.properties.$today_first_scene = e, this._state.current_first_scene = e, this._state.current_first_scene_date = i), this._save();
              }
            }, {
              key: "_save",
              value: function () {
                this.enabled && this.initComplete && k.setStorage(this.name, JSON.stringify(this._state));
              }
            }, {
              key: "_set",
              value: function (e, t) {
                var n,
                    i = this;
                "string" == typeof e ? (n = {})[e] = t : "object" === r(e) && (n = e), b.each(n, function (e, t) {
                  i._state[t] = e;
                }), this._save();
              }
            }, {
              key: "_get",
              value: function (e) {
                return this._state[e];
              }
            }, {
              key: "setEventTimer",
              value: function (e, t) {
                var n = this._state.event_timers || {};
                n[e] = t, this._set("event_timers", n);
              }
            }, {
              key: "removeEventTimer",
              value: function (e) {
                var t = (this._state.event_timers || {})[e];
                return b.isUndefined(t) || (delete this._state.event_timers[e], this._save()), t;
              }
            }, {
              key: "getDeviceId",
              value: function () {
                return this._state.device_id;
              }
            }, {
              key: "_setDeviceId",
              value: function (e) {
                this.getDeviceId() ? f.warn("cannot modify the device id.") : this._set("device_id", e);
              }
            }, {
              key: "getDistinctId",
              value: function () {
                return this._state.distinct_id;
              }
            }, {
              key: "setDistinctId",
              value: function (e) {
                this._set("distinct_id", e);
              }
            }, {
              key: "getAccountId",
              value: function () {
                return this._state.account_id;
              }
            }, {
              key: "setAccountId",
              value: function (e) {
                this._set("account_id", e);
              }
            }, {
              key: "getSuperProperties",
              value: function () {
                return this._state.props || {};
              }
            }, {
              key: "setSuperProperties",
              value: function (e, t) {
                t = t ? e : b.extend(this.getSuperProperties(), e);

                this._set("props", t);
              }
            }]), e;
          }();

          function Wn() {
            return k.getConfig().persistenceNameOld;
          }

          var Kn = function () {
            function n(e) {
              l(this, n), e.appId = b.checkAppId((null == e ? void 0 : e.clientId) || ""), e.accessToken = e.accessToken, e.accessToken || console.warn("GravityAnalytics: accessToken must be required"), e.autoTrack = {
                appLaunch: !0,
                appShow: !0,
                appHide: !0,
                pageShare: !0
              }, e.serverUrl = "".concat(Q, "/event/collect/?access_token=").concat(e.accessToken);
              var t = b.extend({}, Vn, k.getConfig());
              b.isObject(e) ? this.config = b.extend(t, e) : this.config = t, this._init(this.config);
            }

            var t, e, i, r, o, a, s, c;
            return p(n, [{
              key: "_init",
              value: function (e) {
                var t = this,
                    n = (this.name = e.name, this.appId = e.clientId, this.accessToken = e.accessToken, this.platFormName = Wn(), e.tencentSdkData && "GravityEngine_wechat_game" === this.platFormName && (this.sdk = new M({
                  user_action_set_id: e.tencentSdkData.user_action_set_id,
                  secret_key: e.tencentSdkData.secret_key,
                  appid: e.tencentSdkData.appid
                }), null != (n = e.tencentSdkData)) && n.enableDebug && this.sdk.setDebug(!0), e.serverUrl || e.server_url),
                    n = (this.serverUrl = n, this.serverDebugUrl = n, this.configUrl = n + "/config", this.autoTrackProperties = {}, this._queue = [], this.config.syncBatchSize = 100, this.config.syncInterval = 60, e.isChildInstance ? this._state = {} : (f.enabled = "debug" === e.debugMode, this.instances = [], this._state = {
                  getSystemInfo: !1,
                  initComplete: !1
                }, Hn.getSystemInfo(function () {
                  t._updateState({
                    getSystemInfo: !0
                  });
                }), k.setGlobal(this, this.name)), Hn.properties.$scene = String((null == (n = k.getAppOptions()) ? void 0 : n.scene) || (null == (n = k.getAppOptions()) ? void 0 : n.from)), this.store = new Bn(e, function () {
                  t.config.asyncPersistence && b.isFunction(t.config.persistenceComplete) && t.config.persistenceComplete(t), t._updateState();
                }), this.enabled = !b.isBoolean(this.store._get("ge_enabled")) || this.store._get("ge_enabled"), this.isOptOut = !!b.isBoolean(this.store._get("ge_isOptOut")) && this.store._get("ge_isOptOut"), Wn()),
                    i = "GravityEngine_quick_mp" === n;
                (i || "GravityEngine_wechat_game" === n || "GravityEngine_taobao_game" === n || "GravityEngine_tt_game" === n || "GravityEngine_ali_game" === n || n.includes("gravityengine_qg")) && this.track(i ? "$AppStart" : "$MPLaunch", {
                  $url_query: b.setQuery(this.getQuery())
                }), e.isChildInstance || (this.autoTrack = k.initAutoTrackInstance(this, e));
              }
            }, {
              key: "updateConfig",
              value: function (e, t) {}
            }, {
              key: "initInstance",
              value: function (e, t) {
                if (!this.config.isChildInstance) return b.isString(e) && e !== this.name && b.isUndefined(this[e]) ? (t = new n(b.extend({}, this.config, {
                  enablePersistence: !1,
                  isChildInstance: !0,
                  name: e
                }, t)), this[e] = t, this.instances.push(e), this[e]._state = this._state, t) : void f.warn("initInstance() failed due to the name is invalid: " + e);
                f.warn("initInstance() cannot be called on child instance");
              }
            }, {
              key: "lightInstance",
              value: function (e) {
                return this[e];
              }
            }, {
              key: "_setAutoTrackProperties",
              value: function (e) {
                b.extend(this.autoTrackProperties, e);
              }
            }, {
              key: "setupAndStart",
              value: function (e) {
                var t = this;
                if (null != e && e.clientId && (this.config.appId = e.clientId, this.appId = e.clientId), this.sdk && (this.sdk.setOpenId(this.appId), this.sdk.onAppStart(), this.setDryRunValue(0).then(function () {
                  t.config.tencentSdkData.isDryRun ? t.tryDryRun() : t.tencentSDKRegisterTrack();
                })), this._state.initComplete) return !1;

                this._updateState({
                  initComplete: !0
                });
              }
            }, {
              key: "_isReady",
              value: function () {
                return this._state.getSystemInfo && this._state.initComplete && this.store.initComplete && this.config.appId && this.config.accessToken;
              }
            }, {
              key: "_updateState",
              value: function (e) {
                var t = this;
                b.isObject(e) && b.extend(this._state, e), this._onStateChange(), b.each(this.instances, function (e) {
                  t[e]._onStateChange();
                });
              }
            }, {
              key: "_onStateChange",
              value: function () {
                var t = this;
                this._isReady() && this._queue && 0 < this._queue.length && (b.each(this._queue, function (e) {
                  t[e[0]].apply(t, oe.call(e[1]));
                }), this._queue = []);
              }
            }, {
              key: "_hasDisabled",
              value: function () {
                var e = !this.enabled || this.isOptOut;
                return e && f.info("GravityEngine is Pause or Stop!"), e;
              }
            }, {
              key: "_sendRequest",
              value: function (e, t, n) {
                if (!this._hasDisabled()) if (!b.isUndefined(this.config.disableEventList) && this.config.disableEventList.includes(e.eventName)) f.info("disabled Event : " + e.eventName);else {
                  t = b.isDate(t) ? t : new Date();
                  var t = {
                    event_list: [{
                      type: e.type,
                      time: new Date(t).getTime()
                    }]
                  },
                      i = (t.event_list[0].event = e.eventName, "track" === e.type ? (t.event_list[0].properties = this.getSendProperties(), i = this.store.removeEventTimer(e.eventName), b.isUndefined(i) || (i = new Date().getTime() - i, 86400 < (i = parseFloat((i / 1e3).toFixed(3))) ? i = 86400 : i < 0 && (i = 0), t.event_list[0].properties.$event_duration = i)) : t.event_list[0].properties = {}, b.isObject(e.properties) && !b.isEmptyObject(e.properties) && b.extend(t.event_list[0].properties, e.properties), b.searchObjDate(t.event_list[0]), t.client_id = this.appId, f.info(JSON.stringify(t, null, 4)), this.serverUrl);

                  if (b.isBoolean(this.config.enableEncrypt) && 1 == this.config.enableEncrypt && (t.event_list[0] = b.generateEncryptyData(t.event_list[0], void 0)), n) {
                    var r,
                        n = new FormData();
                    "debug" === this.config.debugMode ? (n.append("source", "client"), n.append("appid", this.appId), n.append("deviceId", this.getDeviceId()), n.append("data", JSON.stringify(t.event_list[0]))) : (r = b.base64Encode(JSON.stringify(t)), n.append("data", r));

                    try {
                      navigator.sendBeacon(i, n);
                    } catch (e) {}

                    b.isFunction(e.onComplete) && e.onComplete({
                      statusCode: 200
                    });
                  } else Jn.enqueue(t, i, {
                    maxRetries: this.config.maxRetries,
                    sendTimeout: this.config.sendTimeout,
                    callback: e.onComplete,
                    debugMode: this.config.debugMode,
                    platFormName: this.platFormName
                  });
                }
              }
            }, {
              key: "_isObjectParams",
              value: function (e) {
                return b.isObject(e) && b.isFunction(e.onComplete);
              }
            }, {
              key: "track",
              value: function (e, t, n, i) {
                var r;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (r = e).eventName, t = r.properties, n = r.time, i = r.onComplete), null != (r = t) && r.$trace_id || (t.$trace_id = b.UUID()), d.event(e) && d.properties(t) || !this.config.strict ? this._internalTrack(e, t, n, i) : b.isFunction(i) && i({
                  code: -1,
                  msg: "invalid parameters"
                }));
              }
            }, {
              key: "_internalTrack",
              value: function (e, t, n, i, r) {
                this._hasDisabled() || (n = b.isDate(n) ? n : new Date(), this._isReady() ? this._sendRequest({
                  type: "track",
                  eventName: e,
                  properties: t,
                  onComplete: i
                }, n, r) : this._queue.push(["_internalTrack", [e, t, n, i]]));
              }
            }, {
              key: "userSet",
              value: function (e, t, n) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_set",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userSet", [e, t, n]])) : (f.warn("calling userSet failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userSetOnce",
              value: function (e, t, n) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_set_once",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userSetOnce", [e, t, n]])) : (f.warn("calling userSetOnce failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userAdd",
              value: function (e, t, n) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_increment",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userAdd", [e, t, n]])) : (f.warn("calling userAdd failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userNumberMax",
              value: function (e, t, n) {
                if (!this._hasDisabled()) {
                  var i, r, o;

                  for (r in this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), e) if ("number" != typeof e[r]) return o = "The key ".concat(r, " must be type of number"), console.warn(o), void (b.isFunction(n) && n({
                    code: -1,
                    msg: o
                  }));

                  d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                    type: "profile",
                    eventName: "profile_number_max",
                    properties: e,
                    onComplete: n
                  }, t) : this._queue.push(["userNumberMax", [e, t, n]])) : (f.warn("calling userNumberMax failed due to invalid arguments"), b.isFunction(n) && n({
                    code: -1,
                    msg: "invalid parameters"
                  }));
                }
              }
            }, {
              key: "userNumberMin",
              value: function (e, t, n) {
                if (!this._hasDisabled()) {
                  var i, r, o;

                  for (r in this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), e) if ("number" != typeof e[r]) return o = "The key ".concat(r, " must be type of number"), console.warn(o), void (b.isFunction(n) && n({
                    code: -1,
                    msg: o
                  }));

                  d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                    type: "profile",
                    eventName: "profile_number_min",
                    properties: e,
                    onComplete: n
                  }, t) : this._queue.push(["userNumberMin", [e, t, n]])) : (f.warn("calling userNumberMin failed due to invalid arguments"), b.isFunction(n) && n({
                    code: -1,
                    msg: "invalid parameters"
                  }));
                }
              }
            }, {
              key: "userDel",
              value: function (e, t) {
                var n,
                    i = {};
                this._hasDisabled() || (this._isObjectParams(i) && (i = (n = i).properties, e = n.time, t = n.onComplete), d.propertiesMust(i) || !this.config.strict ? (e = b.isDate(e) ? e : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_delete",
                  properties: i,
                  onComplete: t
                }, e) : this._queue.push(["userDel", [i, e, t]])) : (f.warn("calling userDel failed due to invalid arguments"), b.isFunction(t) && t({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userAppend",
              value: function (e, t, n) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_append",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userAppend", [e, t, n]])) : (f.warn("calling userAppend failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userUniqAppend",
              value: function (e, t, n) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.userAppendProperties(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_uniq_append",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userUniqAppend", [e, t, n]])) : (f.warn("calling userAppend failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "userUnset",
              value: function (e, t, n) {
                var i,
                    e = U({}, e, null);
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).properties, t = i.time, n = i.onComplete), d.propertiesMust(e) || !this.config.strict ? (t = b.isDate(t) ? t : new Date(), this._isReady() ? this._sendRequest({
                  type: "profile",
                  eventName: "profile_unset",
                  properties: e,
                  onComplete: n
                }, t) : this._queue.push(["userUnset", [e, t, n]])) : (f.warn("calling userUnset failed due to invalid arguments"), b.isFunction(n) && n({
                  code: -1,
                  msg: "invalid parameters"
                })));
              }
            }, {
              key: "getQuickAppInfo",
              value: function () {
                return new Promise(function (i, e) {
                  var t;
                  k.getQuickDevice({
                    success: (t = u(I().mark(function e(t) {
                      var n;
                      return I().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = {
                              os_name: "android",
                              android_id: t.user,
                              imei: t.device,
                              oaid: t.oaid,
                              mac: t.mac,
                              android_version: t.system,
                              api_version: t.osVersionCode,
                              rom: t.vendorOsName,
                              rom_version: t.vendorOsVersion,
                              phone_brand: t.manufacturer,
                              phone_model: t.model
                            }, e.abrupt("return", i(n));

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })), function (e) {
                      return t.apply(this, arguments);
                    })
                  });
                });
              }
            }, {
              key: "getQuickGameInfo",
              value: function () {
                return new Promise(function (t) {
                  var e = Wn();
                  k.getQuickDevice({
                    platform: e,
                    success: function (e) {
                      return t(e);
                    }
                  });
                });
              }
            }, {
              key: "uploadQuickAppDeviceInfo",
              value: function () {
                var a = this;
                return new Promise(function (r, o) {
                  var t;
                  k.getQuickDevice({
                    success: (t = u(I().mark(function e(t) {
                      var n, i;
                      return I().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = {
                              os_name: "android",
                              android_id: t.user,
                              imei: t.device,
                              oaid: t.oaid,
                              mac: t.mac,
                              android_version: t.system,
                              api_version: t.osVersionCode,
                              rom: t.vendorOsName,
                              rom_version: t.vendorOsVersion,
                              phone_brand: t.manufacturer,
                              phone_model: t.model
                            }, i = "".concat(Q, "/user/device_info/?access_token=").concat(a.accessToken, "&client_id=").concat(a.appId), e.next = 4, a.sendNetWork(i, {
                              data: n
                            });

                          case 4:
                            return i = e.sent, e.abrupt("return", (0 === i.code ? r : o)(i));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })), function (e) {
                      return t.apply(this, arguments);
                    })
                  });
                });
              }
            }, {
              key: "uploadQuickGameDeviceInfo",
              value: function () {
                var a = this;
                return new Promise(function (r, o) {
                  var t,
                      e = Wn();
                  k.getQuickDevice({
                    platform: e,
                    success: (t = u(I().mark(function e(t) {
                      var n, i;
                      return I().wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = t, i = "".concat(Q, "/user/device_info/?access_token=").concat(a.accessToken, "&client_id=").concat(a.appId), e.next = 4, a.sendNetWork(i, {
                              data: n
                            });

                          case 4:
                            return i = e.sent, e.abrupt("return", (0 === i.code ? r : o)(i));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })), function (e) {
                      return t.apply(this, arguments);
                    })
                  });
                });
              }
            }, {
              key: "logoutEvent",
              value: function () {
                this.track("$MPLogout", {});
              }
            }, {
              key: "loginEvent",
              value: function () {
                this.track("$MPLogin", {});
              }
            }, {
              key: "registerEvent",
              value: function () {
                "GravityEngine_quick_mp" === Wn() ? this.track("$AppRegister", {}) : this.track("$MPRegister", {});
              }
            }, {
              key: "payEvent",
              value: function (n, i, r, o, a) {
                var s = this;
                if ("number" != typeof n) throw new Error("pay_amount must be a number");
                if ("string" != typeof i) throw new Error("pay_type must be a string");
                if ("string" != typeof r) throw new Error("order_id must be a string");
                if ("string" != typeof o) throw new Error("pay_reason must be a string");
                if ("string" != typeof a) throw new Error("pay_method must be a string");
                return new Promise(function (e, t) {
                  s.track("$PayEvent", {
                    $pay_amount: n,
                    $pay_type: i,
                    $order_id: r,
                    $pay_reason: o,
                    $pay_method: a
                  }, null, function () {
                    e();
                  });
                });
              }
            }, {
              key: "bindTAThirdPlatform",
              value: function (e, t) {
                if (!e && !t) throw new Error("taAccountId or taDistinctId must be required");
                if (e && "string" != typeof e) throw new Error("taAccountId must be a string");
                if (t && "string" != typeof t) throw new Error("taDistinctId must be a string");
                this.track("$BindThirdPlatform", {
                  $third_platform_type: "ta",
                  $ta_account_id: e,
                  $ta_distinct_id: t
                });
              }
            }, {
              key: "adShowEvent",
              value: function (e, t, n) {
                var i = Wn();

                if ("GravityEngine_wechat" === i || "GravityEngine_wechat_game" === i || "GravityEngine_ali_game" === i || "gravityengine_qg_oppo_game" === i) {
                  i = "GravityEngine_ali_game" === i ? "alipay" : "wechat";
                  if ("string" != typeof e) throw new Error("ad_type must be a string");
                  if ("string" != typeof t) throw new Error("ad_unit_id must be a string");
                  if ("wechat" == i && !t.startsWith("adunit-")) throw new Error("您传入的ad_unit_id格式不正确，请检查");
                  e = {
                    $ad_type: e,
                    $ad_unit_id: t,
                    $adn_type: i
                  };
                  "[object Object]" === Object.prototype.toString.call(n) && Object.assign(e, n), this.track("$AdShow", e);
                }
              }
            }, {
              key: "getQuery",
              value: function () {
                try {
                  var e;
                  return null != k && k.getAppOptions && null != (e = k.getAppOptions()) && e.query ? k.getAppOptions().query || {} : {};
                } catch (e) {
                  return {};
                }
              }
            }, {
              key: "sendNetWork",
              value: function (e, i) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "POST";
                return new Promise(function (t, n) {
                  k.request({
                    url: e,
                    method: r,
                    data: "string" == typeof i ? i : JSON.stringify(i),
                    header: {
                      "content-type": "application/json"
                    },
                    success: function (e) {
                      200 === e.statusCode || 200 === e.status ? t(e.data) : n(e);
                    },
                    fail: function (e) {
                      n(e);
                    }
                  });
                });
              }
            }, {
              key: "_errorPromise",
              value: function (e) {
                return Promise.reject(new Error(e));
              }
            }, {
              key: "initializeWithHistoryUserInfo",
              value: (c = u(I().mark(function e() {
                var t,
                    n,
                    i = arguments;
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t = 0 < i.length && void 0 !== i[0] ? i[0] : {}, n = 1 < i.length ? i[1] : void 0, e.abrupt("return", this.initialize(t, n));

                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function () {
                return c.apply(this, arguments);
              })
            }, {
              key: "initialize",
              value: (s = u(I().mark(function e() {
                var y,
                    m,
                    _ = this,
                    t = arguments;

                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return y = 0 < t.length && void 0 !== t[0] ? t[0] : {}, m = 1 < t.length ? t[1] : void 0, e.abrupt("return", new Promise(function () {
                        var n = u(I().mark(function e(g, v) {
                          return I().wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                try {
                                  k.getStorage("is_ge_registered", !0, function () {
                                    var t = u(I().mark(function e(t) {
                                      var n, i, r, o, a, s, c, u, l, p, f, d, h;
                                      return I().wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (i = "", _._state.initComplete ? null != y && y.name ? null != y && y.version || 0 === (null == y ? void 0 : y.version) ? b.isNumber(null == y ? void 0 : y.version) && "number" == typeof (null == y ? void 0 : y.version) ? void 0 !== m && ("[object Object]" !== Object.prototype.toString.call(m) ? i = "history_info must be type: Object" : null != m && m.company ? "string" != typeof m.company ? i = "history_info.company must be type: String" : null != m && m.create_time || 0 === m.create_time ? b.isNumber(m.create_time) && "number" == typeof m.create_time || (i = "history_info.create_time must be type: Number") : i = "history_info.create_time must be required" : i = "history_info.company must be required") : i = "version must be type: Number" : i = "version must be required" : i = "name must be required" : i = "initialize must be called after setupAndStart", i) return e.abrupt("return", v(i));
                                            e.next = 4;
                                            break;

                                          case 4:
                                            if (n = _.getQuery(), i = Wn(), o = i.includes("GravityEngine_ali"), r = (null == y ? void 0 : y.channel) || "base_channel", a = (null == y ? void 0 : y.enable_sync_attribution) || !1, o = {
                                              client_id: _.appId,
                                              name: y.name,
                                              channel: o && null != n && n.channel ? n.channel : r,
                                              version: y.version,
                                              wx_openid: (null == y ? void 0 : y.openid) || (null == y ? void 0 : y.wx_openid) || _.appId || "",
                                              wx_unionid: (null == y ? void 0 : y.wx_unionid) || "",
                                              promoted_object_id: (null == y ? void 0 : y.promoted_object_id) || "",
                                              need_return_attribution: a,
                                              ad_data: n
                                            }, m && (o.history_info = m), "GravityEngine_quick_mp" === (a = Wn())) return e.next = 15, _.getQuickAppInfo();
                                            e.next = 16;
                                            break;

                                          case 15:
                                            o.device_info = e.sent;

                                          case 16:
                                            if (a.includes("gravityengine_qg")) return e.next = 19, _.getQuickGameInfo();
                                            e.next = 20;
                                            break;

                                          case 19:
                                            o.device_info = e.sent;

                                          case 20:
                                            return c = "".concat(Q, "/user/initialize/?access_token=").concat(_.accessToken, "&client_id=").concat(_.appId), e.next = 23, _.sendNetWork(c, o);

                                          case 23:
                                            if (0 !== (s = e.sent).code) return e.abrupt("return", v(s));
                                            e.next = 26;
                                            break;

                                          case 26:
                                            return c = Hn.properties, u = new Date(), l = u.getFullYear(), p = ("0" + (u.getMonth() + 1)).slice(-2), f = ("0" + u.getDate()).slice(-2), d = ("0" + u.getHours()).slice(-2), h = ("0" + u.getMinutes()).slice(-2), u = ("0" + u.getSeconds()).slice(-2), l = "".concat(l, "-").concat(p, "-").concat(f, " ").concat(d, ":").concat(h, ":").concat(u), "Y" !== t && (_.userSetOnce({
                                              $channel: r,
                                              $manufacturer: c.$manufacturer,
                                              $model: c.$model,
                                              $brand: c.$brand,
                                              $os: c.$os,
                                              $first_visit_time: l,
                                              $first_scene: String(null == (p = k.getAppOptions()) ? void 0 : p.scene),
                                              $gravity_referee_openid: (null == n ? void 0 : n.gravity_referee_openid) || void 0
                                            }), f = b.setQuery(_.getQuery()), d = "GravityEngine_quick_mp" === a ? "$AppStart" : "$MPLaunch", h = {
                                              $url_query: f
                                            }, _.track(d, h), _.track("$MPShow", h), _.tencentSDKRegisterTrack()), k.setStorage("is_ge_registered", JSON.stringify("Y")), e.abrupt("return", g(s));

                                          case 38:
                                          case "end":
                                            return e.stop();
                                        }
                                      }, e);
                                    }));
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  }());
                                } catch (e) {
                                  v(e);
                                }

                              case 1:
                              case "end":
                                return e.stop();
                            }
                          }, e);
                        }));
                        return function (e, t) {
                          return n.apply(this, arguments);
                        };
                      }()));

                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              })), function () {
                return s.apply(this, arguments);
              })
            }, {
              key: "authorizeOpenID",
              value: function (e) {
                this.identify(e);
              }
            }, {
              key: "identify",
              value: function (e) {
                if (!this._hasDisabled()) {
                  if ("number" == typeof e) e = String(e);else if ("string" != typeof e) return !1;
                  this.store.setDistinctId(e);
                }
              }
            }, {
              key: "getDistinctId",
              value: function () {
                return this.store.getDistinctId();
              }
            }, {
              key: "login",
              value: function (e) {
                if (!this._hasDisabled()) {
                  if ("number" == typeof e) e = String(e);else if ("string" != typeof e) return !1;
                  this.store.setAccountId(e);
                }
              }
            }, {
              key: "getAccountId",
              value: function () {
                return this.store.getAccountId();
              }
            }, {
              key: "logout",
              value: function () {
                this._hasDisabled() || this.store.setAccountId(null);
              }
            }, {
              key: "setSuperProperties",
              value: function (e) {
                this._hasDisabled() || (d.propertiesMust(e) || !this.config.strict ? this.store.setSuperProperties(e) : f.warn("setSuperProperties parameter must be a valid property value"));
              }
            }, {
              key: "clearSuperProperties",
              value: function () {
                this._hasDisabled() || this.store.setSuperProperties({}, !0);
              }
            }, {
              key: "unsetSuperProperty",
              value: function (e) {
                var t;
                this._hasDisabled() || b.isString(e) && (delete (t = this.getSuperProperties())[e], this.store.setSuperProperties(t, !0));
              }
            }, {
              key: "getSuperProperties",
              value: function () {
                return this.store.getSuperProperties();
              }
            }, {
              key: "getSendProperties",
              value: function () {
                try {
                  var e,
                      t = b.extend({}, Hn.properties, this.autoTrackProperties, this.store.getSuperProperties(), this.dynamicProperties ? this.dynamicProperties() : {});

                  for (e in t) "string" == typeof t[e] && (t[e] = t[e].substring(0, 8192));

                  return t;
                } catch (e) {
                  return {};
                }
              }
            }, {
              key: "getPresetProperties",
              value: function () {
                var e = Hn.properties,
                    t = {},
                    n = e.$system_language,
                    n = (t.system_language = b.isUndefined(n) ? "" : n, e.$os),
                    n = (t.os = b.isUndefined(n) ? "" : n, e.$screen_width),
                    n = (t.screenWidth = b.isUndefined(n) ? 0 : n, e.$screen_height),
                    n = (t.screenHeight = b.isUndefined(n) ? 0 : n, e.$network_type),
                    n = (t.networkType = b.isUndefined(n) ? "" : n, e.$model),
                    n = (t.deviceModel = b.isUndefined(n) ? "" : n, e.$os_version),
                    n = (t.osVersion = b.isUndefined(n) ? "" : n, t.deviceId = this.getDeviceId(), 0 - new Date().getTimezoneOffset() / 60),
                    n = (t.zoneOffset = n, e.$manufacturer),
                    n = (t.manufacturer = b.isUndefined(n) ? "" : n, e.$manufacturer);
                return t.brand = b.isUndefined(n) ? "" : n, t.toEventPresetProperties = function () {
                  var e;
                  return {
                    $app_id: this.appId,
                    $model: t.deviceModel,
                    $screen_width: t.screenWidth,
                    $screen_height: t.screenHeight,
                    $system_language: t.system_language,
                    $os: t.os,
                    $os_version: t.osVersion,
                    $network_type: t.networkType,
                    $manufacturer: t.manufacturer,
                    $brand: t.manufacturer,
                    $scene: String((null == (e = k.getAppOptions()) ? void 0 : e.scene) || (null == (e = k.getAppOptions()) ? void 0 : e.from))
                  };
                }, t;
              }
            }, {
              key: "setDynamicSuperProperties",
              value: function (e) {
                this._hasDisabled() || ("function" == typeof e ? d.properties(e()) || !this.config.strict ? this.dynamicProperties = e : f.warn("A dynamic public property must return a valid property value") : f.warn("setDynamicSuperProperties parameter must be a function type"));
              }
            }, {
              key: "timeEvent",
              value: function (e, t) {
                this._hasDisabled() || (t = b.isDate(t) ? t : new Date(), this._isReady() ? d.event(e) || !this.config.strict ? this.store.setEventTimer(e, t.getTime()) : f.warn("calling timeEvent failed due to invalid eventName: " + e) : this._queue.push(["timeEvent", [e, t]]));
              }
            }, {
              key: "getDeviceId",
              value: function () {
                return Hn.properties.$device_id;
              }
            }, {
              key: "enableTracking",
              value: function (e) {
                this.enabled = e, this.store._set("ta_enabled", e);
              }
            }, {
              key: "optOutTracking",
              value: function () {
                this.store.setSuperProperties({}, !0), this.store.setDistinctId(b.UUID()), this.store.setAccountId(null), this._queue.splice(0, this._queue.length), this.isOptOut = !0, this.store._set("ge_isOptOut", !0);
              }
            }, {
              key: "optOutTrackingAndDeleteUser",
              value: function () {
                var e = new Date();
                this._sendRequest({
                  type: "user_del"
                }, e), this.optOutTracking();
              }
            }, {
              key: "optInTracking",
              value: function () {
                this.isOptOut = !1, this.store._set("ge_isOptOut", !1);
              }
            }, {
              key: "setTrackStatus",
              value: function (e) {
                switch (e) {
                  case "PAUSE":
                    this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!1);
                    break;

                  case "STOP":
                    this.eventSaveOnly = !1, this.optOutTracking(!0);
                    break;

                  default:
                    this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!0);
                }
              }
            }, {
              key: "getCommonOpenId",
              value: function (o, a) {
                var s = this;
                return new Promise(function () {
                  var n = u(I().mark(function e(t, n) {
                    var i, r;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (e.prev = 0, o) {
                            e.next = 3;
                            break;
                          }

                          return e.abrupt("return", n("code is required"));

                        case 3:
                          return r = "https://backend.gravity-engine.com/event_center/api/v1/base/".concat(a, "/code2Session/?access_token=").concat(s.accessToken), e.next = 6, s.sendNetWork(r, {
                            code: o
                          });

                        case 6:
                          return r = e.sent, e.abrupt("return", 0 === r.code && null != r && null != (i = r.data) && i.resp ? t(r.data.resp) : n(r));

                        case 10:
                          return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", n(e.t0));

                        case 13:
                        case "end":
                          return e.stop();
                      }
                    }, e, null, [[0, 10]]);
                  }));
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "getWechatOpenId",
              value: function (e) {
                return this.getCommonOpenId(e, "wx");
              }
            }, {
              key: "getKuaishouOpenId",
              value: function (e) {
                return this.getCommonOpenId(e, "ks");
              }
            }, {
              key: "getDouyinOpenId",
              value: function (e) {
                return this.getCommonOpenId(e, "dy");
              }
            }, {
              key: "tencentSDKRegisterTrack",
              value: function () {
                var t = this;
                this.sdk && this.appId && this.checkUserInfo().then(function (e) {
                  var e = (null == e || null == (e = e.data) ? void 0 : e.action) || "";
                  "register" === e ? (t.sdk.onRegister(), t.setupUserInfo("register")) : "re_active" === e && "number" == typeof (null == (e = t.config) || null == (e = e.tencentSdkData) ? void 0 : e.silentPeriod) && (t.sdk.track("RE_ACTIVE", {
                    backFlowDay: t.config.tencentSdkData.silentPeriod
                  }), t.setupUserInfo("re_active"));
                });
              }
            }, {
              key: "checkUserInfo",
              value: function () {
                var e,
                    r = this,
                    o = (null == (e = this.config) || null == (e = e.tencentSdkData) ? void 0 : e.silentPeriod) || 7;
                return new Promise(function () {
                  var n = u(I().mark(function e(t, n) {
                    var i;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return i = "https://backend.gravity-engine.com/event_center/api/v1/event/tencent_sdk/?access_token=".concat(r.accessToken, "&client_id=").concat(r.appId, "&backFlowDay=").concat(o), e.next = 3, r.sendNetWork(i, {}, "get");

                        case 3:
                          return i = e.sent, e.abrupt("return", (0 === i.code ? t : n)(i));

                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "setupUserInfo",
              value: function (r) {
                var o = this;
                return new Promise(function () {
                  var n = u(I().mark(function e(t, n) {
                    var i;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (r) {
                            e.next = 2;
                            break;
                          }

                          return e.abrupt("return", n("action is required"));

                        case 2:
                          return i = "https://backend.gravity-engine.com/event_center/api/v1/event/tencent_sdk/?access_token=".concat(o.accessToken, "&client_id=").concat(o.appId), e.next = 5, o.sendNetWork(i, {
                            postback_list: [{
                              action: r
                            }]
                          }, "post");

                        case 5:
                          return i = e.sent, e.abrupt("return", (0 === i.code ? t : n)(i));

                        case 7:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "queryDryRunInfo",
              value: function (r) {
                var o = this;
                return new Promise(function () {
                  var n = u(I().mark(function e(t, n) {
                    var i;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return i = "".concat(r ? "&trace_id=".concat(r) : ""), i = "https://backend.gravity-engine.com/event_center/api/v1/event/postback_info/?access_token=".concat(o.accessToken, "&client_id=").concat(o.appId).concat(i), e.next = 4, o.sendNetWork(i, {}, "get");

                        case 4:
                          return i = e.sent, e.abrupt("return", (0 === i.code ? t : n)(i));

                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "sendDryRunResult",
              value: function (r, o) {
                var a = this;
                return new Promise(function () {
                  var n = u(I().mark(function e(t, n) {
                    var i;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (r) {
                            e.next = 2;
                            break;
                          }

                          return e.abrupt("return", n("traceId is required"));

                        case 2:
                          if (o) {
                            e.next = 4;
                            break;
                          }

                          return e.abrupt("return", n("action is required"));

                        case 4:
                          return i = "https://backend.gravity-engine.com/event_center/api/v1/event/postback_info/?access_token=".concat(a.accessToken, "&client_id=").concat(a.appId), e.next = 7, a.sendNetWork(i, {
                            postback_list: [{
                              trace_id: r,
                              action: o
                            }]
                          }, "post");

                        case 7:
                          return i = e.sent, e.abrupt("return", (0 === i.code ? t : n)(i));

                        case 9:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "payEventToTencent",
              value: function (e) {
                this.sdk && this.sdk.onPurchase(e);
              }
            }, {
              key: "getDryRunPostBackInfo",
              value: (a = u(I().mark(function e(t) {
                var n, i, r;
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return n = {
                        click_company: "",
                        postback_list: [],
                        retry: 0
                      }, e.prev = 1, e.next = 4, this.queryDryRunInfo(t);

                    case 4:
                      if (i = e.sent, i = (null == i ? void 0 : i.data) || {}, Reflect.has(i, postback_list)) return r = Number(null === i ? void 0 : i.retry) || n.retry, e.abrupt("return", {
                        postback_list: i.postback_list,
                        click_company: (null === i ? void 0 : i.click_company) || n.click_company,
                        retry: 0 <= r ? r : n.retry
                      });
                      e.next = 9;
                      break;

                    case 9:
                      return e.abrupt("return", n);

                    case 12:
                      return e.prev = 12, e.t0 = e.catch(1), e.abrupt("return", n);

                    case 15:
                    case "end":
                      return e.stop();
                  }
                }, e, this, [[1, 12]]);
              })), function (e) {
                return a.apply(this, arguments);
              })
            }, {
              key: "getIsDryRun",
              value: function () {
                var r = this;
                return new Promise(function () {
                  var t = u(I().mark(function e(t) {
                    var n, i;
                    return I().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return n = "https://backend.gravity-engine.com/event_center/api/v1/base/appconf/?access_token=".concat(r.accessToken, "&conf_type=dryrun_mode"), e.prev = 1, e.next = 4, r.sendNetWork(n, {}, "get");

                        case 4:
                          n = e.sent, i = 0 < (null == n || null == (i = n.data) || null == (i = i.dryrun_mode) ? void 0 : i.tencent), t(0 === n.code && i), e.next = 12;
                          break;

                        case 9:
                          e.prev = 9, e.t0 = e.catch(1), t(!1);

                        case 12:
                        case "end":
                          return e.stop();
                      }
                    }, e, null, [[1, 9]]);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                }());
              }
            }, {
              key: "setDryRunValue",
              value: (o = u(I().mark(function e(t) {
                var n;
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (this.config.tencentSdkData) {
                        e.next = 2;
                        break;
                      }

                      return e.abrupt("return");

                    case 2:
                      if (Reflect.has(this.config.tencentSdkData, "isDryRun")) return e.abrupt("return");
                      e.next = 4;
                      break;

                    case 4:
                      return e.next = 6, b.sleep(t);

                    case 6:
                      if (Reflect.has(this.config.tencentSdkData, "isDryRun")) return e.abrupt("return");
                      e.next = 8;
                      break;

                    case 8:
                      return e.next = 10, this.getIsDryRun();

                    case 10:
                      n = e.sent, this.config.tencentSdkData.isDryRun = n;

                    case 12:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function (e) {
                return o.apply(this, arguments);
              })
            }, {
              key: "tryDryRun",
              value: (r = u(I().mark(function e() {
                var t, n, i, r, o, a, s, c, u;
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, b.sleep(1e3);

                    case 2:
                      return e.next = 4, this.getDryRunPostBackInfo("");

                    case 4:
                      i = e.sent, t = i.postback_list, n = i.retry, i = i.click_company, r = 0;

                    case 9:
                      if (0 === t.length && r < n) return o = 1e3 * r + 2e3, e.next = 13, b.sleep(o);
                      e.next = 21;
                      break;

                    case 13:
                      return e.next = 15, this.getDryRunPostBackInfo("");

                    case 15:
                      o = e.sent, t = o.postback_list, i = o.click_company, r++, e.next = 9;
                      break;

                    case 21:
                      if ("tencent" === i && t.length) {
                        e.next = 23;
                        break;
                      }

                      return e.abrupt("return");

                    case 23:
                      a = V(t);

                      try {
                        for (a.s(); !(s = a.n()).done;) "pay" === (c = s.value).action ? this.sdk && this.sdk.onPurchase(c.postback_value) : "tutorial_finish" === c.action ? this.onTutorialFinishEvent() : "create_role" === c.action ? this.onCreateRoleEvent(c.role_name) : "re_active" === c.action ? this.sdk.track("RE_ACTIVE", {
                          backFlowDay: c.re_active_day
                        }) : "register" === c.action && this.sdk.onRegister();
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }

                      u = "https://backend.gravity-engine.com/event_center/api/v1/event/postback_info/?access_token=".concat(this.accessToken, "&client_id=").concat(this.appId), this.sendNetWork(u, {
                        postback_list: t.map(function (e) {
                          return {
                            trace_id: e.trace_id,
                            action: e.action
                          };
                        })
                      }, "post");

                    case 27:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function () {
                return r.apply(this, arguments);
              })
            }, {
              key: "tryPayEventDryRun",
              value: (i = u(I().mark(function e(t) {
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (this.config.tencentSdkData) {
                        e.next = 2;
                        break;
                      }

                      return e.abrupt("return");

                    case 2:
                      return e.next = 4, this.setDryRunValue(200);

                    case 4:
                      this.config.tencentSdkData.isDryRun ? this.tryDryRun() : this.sdk && this.sdk.onPurchase(t);

                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function (e) {
                return i.apply(this, arguments);
              })
            }, {
              key: "tryTutorialFinishEventDryRun",
              value: (e = u(I().mark(function e() {
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (this.config.tencentSdkData) {
                        e.next = 2;
                        break;
                      }

                      return e.abrupt("return");

                    case 2:
                      return e.next = 4, this.setDryRunValue(200);

                    case 4:
                      this.config.tencentSdkData.isDryRun ? this.tryDryRun() : this.onTutorialFinishEvent();

                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function () {
                return e.apply(this, arguments);
              })
            }, {
              key: "tryCreateRoleEventDryRun",
              value: (t = u(I().mark(function e(t) {
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (this.config.tencentSdkData) {
                        e.next = 2;
                        break;
                      }

                      return e.abrupt("return");

                    case 2:
                      return e.next = 4, this.setDryRunValue(200);

                    case 4:
                      this.config.tencentSdkData.isDryRun ? this.tryDryRun() : this.onCreateRoleEvent(t);

                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function (e) {
                return t.apply(this, arguments);
              })
            }, {
              key: "onUpdateLevelEvent",
              value: function (e) {
                this.sdk && this.sdk.track("UPDATE_LEVEL", {
                  level: e
                }), this.track("$UpdateLevel", {
                  $user_level: e
                });
              }
            }, {
              key: "onRegisterEvent",
              value: function () {
                this.sdk && this.sdk.onRegister(), this.registerEvent();
              }
            }, {
              key: "onCreateRoleEvent",
              value: function (e) {
                this.sdk && this.sdk.onCreateRole(e), this.track("$CreateRole", {
                  $role_name: e
                });
              }
            }, {
              key: "onTutorialFinishEvent",
              value: function () {
                this.sdk && this.sdk.onTutorialFinish(), this.track("$TutorialFinish", {});
              }
            }, {
              key: "onViewMallContentEvent",
              value: function () {
                this.sdk && this.sdk.track("VIEW_CONTENT", {
                  item: "Mall"
                }), this.track("$ViewMallContent", {});
              }
            }, {
              key: "onViewActivityContentEvent",
              value: function () {
                this.sdk && this.sdk.track("VIEW_CONTENT", {
                  item: "Activity"
                }), this.track("$ViewActivityContent", {});
              }
            }, {
              key: "onAddToWishListEvent",
              value: function () {
                this.sdk && this.sdk.track("ADD_TO_WISHLIST", {
                  type: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default"
                }), this.track("$MPAddFavorites", {
                  $url_path: ""
                });
              }
            }, {
              key: "onShareEvent",
              value: function (e) {
                this.sdk && this.sdk.track("SHARE", {
                  target: e
                }), this.track("$MPShare", {
                  $share_depth: 1,
                  $share_method: "转发消息卡片",
                  $share_target: e
                });
              }
            }]), n;
          }(),
              Qn = {
            name: "GravityEngine",
            enableLog: !0,
            enableNative: !1
          },
              Gt = function () {
            function n(e) {
              l(this, n), e.appId = b.checkAppId(e.clientId), e.accessToken = e.accessToken, e.appId ? e.accessToken || console.warn("GravityAnalytics: accessToken must be required") : console.warn("GravityAnalytics: clientId must be required"), e.serverUrl = "".concat(Q, "/event/collect/?access_token=").concat(e.accessToken);
              var t = b.extend({}, Qn, k.getConfig());
              b.isObject(e) ? this.config = b.extend(t, e) : this.config = t, this._init(this.config);
            }

            var e;
            return p(n, [{
              key: "_isNativePlatform",
              value: function () {
                return !(!this._isIOS() && !this._isAndroid() || !this.config.enableNative);
              }
            }, {
              key: "_isIOS",
              value: function () {
                return !(!cc.sys.isNative || "iOS" !== cc.sys.os);
              }
            }, {
              key: "_isAndroid",
              value: function () {
                return !(!cc.sys.isNative || "Android" !== cc.sys.os);
              }
            }, {
              key: "_init",
              value: function (t) {
                this.name = t.name, this.appId = t.clientId, this.accessToken = t.accessToken;
                var e = t.serverUrl || t.server_url;
                if (this.serverUrl = e, this._isNativePlatform()) this.initInstanceForNative();else try {
                  this.geJs = new GravityAnalyticsAPIForJS(t);
                } catch (e) {
                  this.geJs = new Kn(t);
                }
              }
            }, {
              key: "setupAndStart",
              value: function (e) {
                var t, n;
                this._isNativePlatform() ? (t = window, n = this, t.__autoTrackCallback = function (e) {
                  return b.isFunction(n.config.autoTrack.callback) ? (e = n.config.autoTrack.callback(e), JSON.stringify(e)) : "{}";
                }, this.setupAndStartForNative()) : this.geJs.setupAndStart(e);
              }
            }, {
              key: "track",
              value: function (e, t, n, i) {
                this._isNativePlatform() ? this.trackForNative(e, t, n) : this.geJs.track(e, t, n, i);
              }
            }, {
              key: "initializeWithHistoryUserInfo",
              value: (e = u(I().mark(function e() {
                var t,
                    n,
                    i = arguments;
                return I().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (t = 0 < i.length && void 0 !== i[0] ? i[0] : {}, n = 1 < i.length ? i[1] : void 0, this._isNativePlatform()) return e.abrupt("return", new Promise(function (e, t) {
                        t("方法暂时不支持原生");
                      }));
                      e.next = 4;
                      break;

                    case 4:
                      return e.abrupt("return", this.geJs.initializeWithHistoryUserInfo(t, n));

                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e, this);
              })), function () {
                return e.apply(this, arguments);
              })
            }, {
              key: "initialize",
              value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0;
                if (!this._isNativePlatform()) return this.geJs.initialize(e, t);
                this.initializeForNative(e);
              }
            }, {
              key: "registerEvent",
              value: function () {
                if (!this._isNativePlatform()) return this.geJs.registerEvent();
                this.trackForNative("$AppRegister", {});
              }
            }, {
              key: "loginEvent",
              value: function () {
                if (!this._isNativePlatform()) return this.geJs.loginEvent();
              }
            }, {
              key: "logoutEvent",
              value: function () {
                if (!this._isNativePlatform()) return this.geJs.logoutEvent();
              }
            }, {
              key: "payEvent",
              value: function (e, t, n, i, r) {
                if (!this._isNativePlatform()) return this.geJs.payEvent(e, t, n, i, r);
                if ("number" != typeof e) throw new Error("pay_amount must be a number");
                if ("string" != typeof t) throw new Error("pay_type must be a string");
                if ("string" != typeof n) throw new Error("order_id must be a string");
                if ("string" != typeof i) throw new Error("pay_reason must be a string");
                if ("string" != typeof r) throw new Error("pay_method must be a string");
                this.trackForNative("$PayEvent", {
                  $pay_amount: e,
                  $pay_type: t,
                  $order_id: n,
                  $pay_reason: i,
                  $pay_method: r
                });
              }
            }, {
              key: "bindTAThirdPlatform",
              value: function (e, t) {
                if (!this._isNativePlatform()) return this.geJs.bindTAThirdPlatform(e, t);
                if (!e && !t) throw new Error("taAccountId or taDistinctId must be required");
                if (e && "string" != typeof e) throw new Error("taAccountId must be a string");
                if (t && "string" != typeof t) throw new Error("taDistinctId must be a string");
                this.trackForNative("$BindThirdPlatform", {
                  $third_platform_type: "ta",
                  $ta_account_id: e,
                  $ta_distinct_id: t
                });
              }
            }, {
              key: "adShowEvent",
              value: function (e, t, n) {
                if (!this._isNativePlatform()) return this.geJs.adShowEvent(e, t, n);
                if ("string" != typeof e) throw new Error("ad_type must be a string");
                if ("string" != typeof t) throw new Error("ad_unit_id must be a string");
                e = {
                  $ad_type: e,
                  $ad_unit_id: t
                };
                "[object Object]" === Object.prototype.toString.call(n) && Object.assign(e, n), this.trackForNative("$AdShow", e);
              }
            }, {
              key: "userSet",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userSetForNative(e, t) : this.geJs.userSet(e, t, n);
              }
            }, {
              key: "userSetOnce",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userSetOnceForNative(e, t) : this.geJs.userSetOnce(e, t, n);
              }
            }, {
              key: "userUnset",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userUnsetForNative(e, t) : this.geJs.userUnset(e, t, n);
              }
            }, {
              key: "userDel",
              value: function (e, t) {
                this._isNativePlatform() ? this.userDelForNative(e) : this.geJs.userDel(e, t);
              }
            }, {
              key: "userAdd",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userAddForNative(e, t) : this.geJs.userAdd(e, t, n);
              }
            }, {
              key: "userNumberMax",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userNumberMaxForNative(e, t) : this.geJs.userNumberMax(e, t, n);
              }
            }, {
              key: "userNumberMin",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userNumberMinForNative(e, t) : this.geJs.userNumberMin(e, t, n);
              }
            }, {
              key: "userAppend",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userAppendForNative(e, t) : this.geJs.userAppend(e, t, n);
              }
            }, {
              key: "userUniqAppend",
              value: function (e, t, n) {
                this._isNativePlatform() ? this.userUniqAppendForNative(e, t) : this.geJs.userUniqAppend(e, t, n);
              }
            }, {
              key: "authorizeOpenID",
              value: function (e) {
                this.identify(e);
              }
            }, {
              key: "identify",
              value: function (e) {
                this._isNativePlatform() ? this.identifyForNative(e) : this.geJs.identify(e);
              }
            }, {
              key: "getDistinctId",
              value: function () {
                if (this._isNativePlatform()) throw new Error("not support this method");
                return this.geJs.getDistinctId();
              }
            }, {
              key: "login",
              value: function (e) {
                this._isNativePlatform() || this.geJs.login(e);
              }
            }, {
              key: "getAccountId",
              value: function () {
                if (this._isNativePlatform()) throw new Error("not support this method");
                return this.geJs.getAccountId();
              }
            }, {
              key: "logout",
              value: function () {
                if (this._isNativePlatform()) throw new Error("not support this method");
                this.geJs.logout();
              }
            }, {
              key: "setSuperProperties",
              value: function (e) {
                this._isNativePlatform() ? this.setSuperPropertiesForNative(e) : this.geJs.setSuperProperties(e);
              }
            }, {
              key: "clearSuperProperties",
              value: function () {
                this._isNativePlatform() ? this.clearSuperPropertiesForNative() : this.geJs.clearSuperProperties();
              }
            }, {
              key: "unsetSuperProperty",
              value: function (e) {
                this._isNativePlatform() ? this.unsetSuperPropertyForNative(e) : this.geJs.unsetSuperProperty(e);
              }
            }, {
              key: "getSuperProperties",
              value: function () {
                return this._isNativePlatform() ? this.getSuperPropertiesForNative() : this.geJs.getSuperProperties();
              }
            }, {
              key: "getPresetProperties",
              value: function () {
                var e, t, n, i;
                return this._isNativePlatform() ? (e = this.getPresetPropertiesForNative(), t = {}, i = e.$system_language, t.system_language = b.isUndefined(i) ? "" : i, i = e.$os, t.os = b.isUndefined(i) ? "" : i, i = e.$screen_width, t.screenWidth = b.isUndefined(i) ? 0 : i, i = e.$screen_height, t.screenHeight = b.isUndefined(i) ? 0 : i, i = e.$network_type, t.networkType = b.isUndefined(i) ? "" : i, i = e.$device_model, t.deviceModel = b.isUndefined(i) ? "" : i, i = e.$os_version, t.osVersion = b.isUndefined(i) ? "" : i, t.deviceId = this.getDeviceId(), n = 0 - new Date().getTimezoneOffset() / 60, t.zoneOffset = n, i = e.$manufacturer, t.manufacturer = b.isUndefined(i) ? "" : i, i = e.$manufacturer, t.brand = b.isUndefined(i) ? "" : i, t.toEventPresetProperties = function () {
                  return {
                    $device_model: t.deviceModel,
                    $device_id: t.deviceId,
                    $screen_width: t.screenWidth,
                    $screen_height: t.screenHeight,
                    $system_language: t.system_language,
                    $os: t.os,
                    $os_version: t.osVersion,
                    $network_type: t.networkType,
                    $zone_offset: n,
                    $manufacturer: t.manufacturer,
                    $brand: t.manufacturer
                  };
                }, t) : this.geJs.getPresetProperties();
              }
            }, {
              key: "setDynamicSuperProperties",
              value: function (t) {
                this._isNativePlatform() ? "function" == typeof t ? (this.dynamicProperties = t, window.__dynamicPropertiesForNative = function (e) {
                  console.log("__dynamicPropertiesForNative: native msg: ", e);
                  e = t(), e = b.encodeDates(e);
                  return JSON.stringify(e);
                }, this.setDynamicSuperPropertiesForNative("__dynamicPropertiesForNative")) : logger.warn("setDynamicSuperProperties parameter must be a function type") : this.geJs.setDynamicSuperProperties(t);
              }
            }, {
              key: "timeEvent",
              value: function (e, t) {
                return this._isNativePlatform() ? this.timeEventForNative(e) : this.geJs.timeEvent(e, t);
              }
            }, {
              key: "getDeviceId",
              value: function () {
                return this._isNativePlatform() ? this.getDeviceIdForNative() : this.geJs.getDeviceId();
              }
            }, {
              key: "setTrackStatus",
              value: function (e) {
                this._isNativePlatform() ? this.setTrackStatusForNative(e) : this.geJs.setTrackStatus(e);
              }
            }, {
              key: "trackForNative",
              value: function (e, t, n) {
                n = b.isDate(n) ? n.getTime() : "", b.isUndefined(t) && (t = {}), t = b.extend(t, this.dynamicProperties ? this.dynamicProperties() : {}), n = {
                  eventName: e,
                  properties: t = b.encodeDates(t),
                  time: n
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "track", "(Ljava/lang/String;)V", JSON.stringify(n)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "track:properties:time:appId:", e, JSON.stringify(t), formatTime, appId);
              }
            }, {
              key: "timeEventForNative",
              value: function (e) {
                var t = {
                  eventName: e
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "timeEvent", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "timeEvent:appId:", e, appId);
              }
            }, {
              key: "loginForNative",
              value: function (e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "login", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "login:appId:", e, t);
              }
            }, {
              key: "logoutForNative",
              value: function (e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "logout", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "logout:", e);
              }
            }, {
              key: "setSuperPropertiesForNative",
              value: function (e) {
                var t = {
                  properties: e = b.encodeDates(e)
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "setSuperProperties", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "setSuperProperties:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "getSuperPropertiesForNative",
              value: function () {
                var e = "{}";
                return this._isAndroid() ? e = jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "getSuperProperties", "(Ljava/lang/String;)V", "") : this._isIOS() && (e = jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "getSuperProperties:", appId)), JSON.parse(e);
              }
            }, {
              key: "unsetSuperPropertyForNative",
              value: function (e) {
                var t = {
                  property: e
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "unsetSuperProperty", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "unsetSuperProperty:appId:", e, appId);
              }
            }, {
              key: "clearSuperPropertiesForNative",
              value: function () {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "clearSuperProperties", "(Ljava/lang/String;)V", "appId") : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "clearSuperProperties:", appId);
              }
            }, {
              key: "userSetForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userSet", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userSet:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userSetOnceForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userSetOnce", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userSetOnce:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userAppendForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userAppend", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userAppend:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userUniqAppendForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userUniqAppend", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userUniqAppend:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userAddForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userAdd", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userAdd:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userNumberMaxForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userNumberMax", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userNumberMax:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userNumberMinForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", t = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userNumberMin", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userNumberMin:appId:", JSON.stringify(e), appId);
              }
            }, {
              key: "userUnsetForNative",
              value: function (e, t) {
                t = b.isDate(t) ? t.getTime() : "", e = {
                  properties: e = b.encodeDates(e),
                  time: t
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userUnset", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userUnset:appId:", property, appId);
              }
            }, {
              key: "userDelForNative",
              value: function (e) {
                e = {
                  time: b.isDate(e) ? e.getTime() : ""
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "userDel", "(Ljava/lang/String;)V", JSON.stringify(e)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "userDel:", appId);
              }
            }, {
              key: "authorizeOpenIDForNative",
              value: function (e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "authorizeOpenID", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "authorizeOpenID:appId:", e, t);
              }
            }, {
              key: "identifyForNative",
              value: function (e) {
                var t = {
                  distinctId: e
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "identify", "(Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "identify:appId:", e, appId);
              }
            }, {
              key: "initInstanceForNative",
              value: function () {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "setCustomerLibInfo", "(Ljava/lang/String;Ljava/lang/String;)V", W, B) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "setCustomerLibInfoWithLibName:libVersion:", W, B);
              }
            }, {
              key: "setupAndStartForNative",
              value: function () {
                var e = 0,
                    t = ("debug" === this.config.debugMode && (e = 1), {}),
                    e = (b.isObject(this.config.secretKey) && (t.publicKey = this.config.secretKey.publicKey, t.version = this.config.secretKey.version, t.symmetricEncryption = "AES", t.asymmetricEncryption = "RSA"), {
                  accessToken: this.config.accessToken,
                  mode: e,
                  enableEncrypt: this.config.enableEncrypt,
                  secretKey: t,
                  timeZone: this.config.timeZone
                });
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "setupAndStart", "(Ljava/lang/String;)V", JSON.stringify(e)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "startGravityAnalytics:", JSON.stringify(e));
              }
            }, {
              key: "initializeForNative",
              value: function (e) {
                var t = this.config.accessToken,
                    n = (null == e ? void 0 : e.channel) || "",
                    e = (null == e ? void 0 : e.enable_sync_attribution) || !1;
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "initialize", "(Ljava/lang/String;Ljava/lang/String;Z)V", t, n, e) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "setCustomerLibInfoWithLibName:libVersion:", W, B);
              }
            }, {
              key: "setDynamicSuperPropertiesForNative",
              value: function (e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "setDynamicSuperProperties", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "setDynamicSuperProperties:appId:", e, t);
              }
            }, {
              key: "getDeviceIdForNative",
              value: function () {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "getDeviceId", "(Ljava/lang/String;)Ljava/lang/String;", "") : this._isIOS() ? jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "getDeviceId:", appId) : void 0;
              }
            }, {
              key: "getDistinctIdForNative",
              value: function (e) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "getDistinctId", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() ? jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "getDistinctId:", e) : void 0;
              }
            }, {
              key: "getAccountIdForNative",
              value: function (e) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "getAccountId", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() ? jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "getAccountId:", e) : void 0;
              }
            }, {
              key: "getPresetPropertiesForNative",
              value: function () {
                var e = "{}";
                return this._isAndroid() ? e = jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "getPresetProperties", "(Ljava/lang/String;)Ljava/lang/String;", "") : this._isIOS() && (e = jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "getPresetProperties:", appId)), JSON.parse(e);
              }
            }, {
              key: "setTrackStatusForNative",
              value: function (e) {
                var t = {
                  status: e
                };
                this._isAndroid() ? jsb.reflection.callStaticMethod("cn/gravity/engine/GravityEngineCocosCreatorAPI", "setTrackStatus", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t)) : this._isIOS() && jsb.reflection.callStaticMethod("GravityEngineCocosCreatorAPI", "setTrackStatus:appId:", e, appId);
              }
            }, {
              key: "getWechatOpenId",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.getWechatOpenId(e);
              }
            }, {
              key: "getKuaishouOpenId",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.getKuaishouOpenId(e);
              }
            }, {
              key: "getDouyinOpenId",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.getDouyinOpenId(e);
              }
            }, {
              key: "tencentSDKRegisterTrack",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.tencentSDKRegisterTrack();
              }
            }, {
              key: "checkUserInfo",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.checkUserInfo();
              }
            }, {
              key: "setupUserInfo",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.setupUserInfo(e);
              }
            }, {
              key: "queryDryRunInfo",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.queryDryRunInfo(e);
              }
            }, {
              key: "sendDryRunResult",
              value: function (e, t) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.sendDryRunResult(e, t);
              }
            }, {
              key: "payEventToTencent",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.payEventToTencent(e);
              }
            }, {
              key: "tryPayEventDryRun",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.tryPayEventDryRun(e);
              }
            }, {
              key: "tryTutorialFinishEventDryRun",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.tryTutorialFinishEventDryRun();
              }
            }, {
              key: "tryCreateRoleEventDryRun",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.tryCreateRoleEventDryRun(e);
              }
            }, {
              key: "onUpdateLevelEvent",
              value: function (e, t) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onUpdateLevelEvent(e, t);
              }
            }, {
              key: "onRegisterEvent",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onRegisterEvent();
              }
            }, {
              key: "onCreateRoleEvent",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onCreateRoleEvent(e);
              }
            }, {
              key: "onTutorialFinishEvent",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onTutorialFinishEvent();
              }
            }, {
              key: "onViewMallContentEvent",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onViewMallContentEvent();
              }
            }, {
              key: "onViewActivityContentEvent",
              value: function () {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onViewActivityContentEvent();
              }
            }, {
              key: "onAddToWishListEvent",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onAddToWishListEvent(e);
              }
            }, {
              key: "onShareEvent",
              value: function (e) {
                return this._isNativePlatform() ? new Promise(function (e, t) {
                  t("方法暂时不支持原生");
                }) : this.geJs.onShareEvent(e);
              }
            }]), n;
          }();

          return window.GravityAnalyticsAPI = Gt, window.GravityAnalyticsAPIForJS = Kn, Gt;
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=18531b94e0158daed0ece1617ac1ea0de1d71211.js.map