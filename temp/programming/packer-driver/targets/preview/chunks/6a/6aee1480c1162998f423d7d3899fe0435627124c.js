System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _class2, _crd, ccclass, property, HttpRequest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ebf8DRprpGHbPlMNY0YMXS", "HttpRequest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HttpRequest", HttpRequest = (_dec = ccclass('HttpRequest'), _dec(_class = (_class2 = class HttpRequest extends Component {
        /**
         * 获取微信OpenID
         * @param callback 获取成功后的回调函数
         */
        getOpenId(callback) {
          // 检查是否在微信/头条环境
          if (window.wx) {
            // 调用微信登录接口
            wx.login({
              success: res => {
                console.log("微信登录成功，获取到code:", res.code); // 准备请求参数

                var params = {
                  code: res.code // 微信临时登录凭证

                }; // 向服务器发送请求

                this.request("zdydc/user/login", //zdydc/user/login 登录接口路径 https://yx.megoo.top/wochengyuteniu/user/getWxOpenId
                params, response => {
                  if (response.openId) {
                    console.log("成功获取openid:", response);
                  } else {
                    console.log("获取openid失败:", response);
                  } // 执行回调


                  callback == null || callback(response);
                }, error => {
                  console.error("登录接口调用失败:", error);
                  callback == null || callback(null);
                });
              },
              fail: err => {
                console.error("微信登录失败:", err);
                callback == null || callback(null);
              }
            });
          } else {
            // 非微信环境直接执行回调
            if (callback && !sys.isNative) {
              callback();
            }
          }
        }
        /**
         * 通用HTTP请求方法
         * @param endpoint API端点路径
         * @param data 请求数据
         * @param successCallback 成功回调
         * @param errorCallback 失败回调
         * @param isAbsoluteUrl 是否使用绝对URL
         * @param method HTTP方法，默认POST
         */


        request(endpoint, data, successCallback, errorCallback, isAbsoluteUrl, method) {
          if (isAbsoluteUrl === void 0) {
            isAbsoluteUrl = false;
          }

          if (method === void 0) {
            method = "POST";
          }

          // 构造完整URL
          var url = "https://yx.megoo.top/" + endpoint;
          console.log("请求URL:", url, "请求数据:", data); // 如果已经是绝对URL，则直接使用

          if (isAbsoluteUrl) {
            url = endpoint;
          } // 序列化请求数据


          var requestData = JSON.stringify(data);
          var xhr = new XMLHttpRequest(); // 状态变更回调

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              // 请求完成
              if (xhr.status === 200) {
                // 成功响应
                var _response = null;

                if (xhr.responseText !== "") {
                  try {
                    // 解析响应数据
                    _response = JSON.parse(xhr.responseText);
                  } catch (e) {
                    console.error("响应数据解析失败:", e);
                  }
                }

                successCallback == null || successCallback(_response);
              } else {
                // 构造错误对象
                var _error = {
                  url: url,
                  readyState: xhr.readyState,
                  status: xhr.status,
                  data: requestData
                };
                errorCallback == null || errorCallback(_error);
              }
            }
          }; // 初始化请求


          xhr.open(method, url, true); // 设置请求头（非GET请求）

          if (method.toUpperCase() !== "GET") {
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            xhr.send(requestData);
          } else {
            xhr.send();
          }
        }

        getplayerData(t) {
          this.request("ot/gqsxz/savedata", {
            openId: t
          }, function (t) {
            console.log("-----------getplayerData:", t);

            if (0 == t.errno) {
              t.data;
            } else {
              console.log("-----------获取用户数据:", t);
            }
          }, function (t) {
            console.log("getplayerData 调用失败", t);
          });
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6aee1480c1162998f423d7d3899fe0435627124c.js.map