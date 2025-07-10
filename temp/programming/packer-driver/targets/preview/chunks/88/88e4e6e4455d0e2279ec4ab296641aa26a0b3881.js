System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, WechatManager, _crd, ccclass, property;

  _export("WechatManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a21cFVdSxOWJ4u2dxo/71s", "WechatManager", undefined); // wxAPI: https://developers.weixin.qq.com/minigame/dev/api/


      __checkObsolete__(['_decorator', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WechatManager", WechatManager = class WechatManager {
        constructor() {
          // 用户信息: 昵称，头像,语言等
          this._userInfo = void 0;
          // 头像回调
          this._avatarCallBack = null;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new WechatManager();
          return this._instance;
        } // 获取标记权限


        initAutoSetting(callBack) {
          this._avatarCallBack = callBack; // 避开ts语法检测

          var wx = window['wx']; // 获取请求过的权限标记

          var object = {
            // 成功回调         
            success: res => {
              // 是否授权用户信息
              var autoSetting = res.authSetting;

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
        } // 创建用户授权按钮(仅用于登录页面, 如果用户拒绝授权，则一直显示)


        creatUserInfoButton(isFull) {
          if (isFull === void 0) {
            isFull = false;
          }

          var wx = window['wx'];
          var object = {
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
          var button = wx.createUserInfoButton(object); // 监听用户信息按钮点击事件

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
          var wx = window['wx'];
          var object = {
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
        }

      });

      WechatManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88e4e6e4455d0e2279ec4ab296641aa26a0b3881.js.map