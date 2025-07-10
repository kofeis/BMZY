System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, EditBox, sp, Tool_NetWork, Tool_UI, Resoure_Data_Template, Tool_Animation, _dec, _class, _crd, ccclass, property, Login;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTool_NetWork(extras) {
    _reporterNs.report("Tool_NetWork", "../Tool/Tool_NetWork", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../Tool/Tool_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResoure_Data_Template(extras) {
    _reporterNs.report("Resoure_Data_Template", "./Resoure_Data_Template", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "../Tool/Tool_Animation", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      EditBox = _cc.EditBox;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Tool_NetWork = _unresolved_2.Tool_NetWork;
    }, function (_unresolved_3) {
      Tool_UI = _unresolved_3.Tool_UI;
    }, function (_unresolved_4) {
      Resoure_Data_Template = _unresolved_4.Resoure_Data_Template;
    }, function (_unresolved_5) {
      Tool_Animation = _unresolved_5.Tool_Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "911cbPIfG1NHqjjBKSC2lcx", "Login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'EditBox', 'log', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Login", Login = (_dec = ccclass('Login'), _dec(_class = class Login extends (_crd && Resoure_Data_Template === void 0 ? (_reportPossibleCrUseOfResoure_Data_Template({
        error: Error()
      }), Resoure_Data_Template) : Resoure_Data_Template) {
        onLoad() {
          super.onLoad();
        }

        start() {}
        /**游客登录 */


        Btn_Visitors() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var Save = _this.Resoure_Data.Save_Get();

            Save.Account = "Visitors";
            Save.Password = "666666";

            _this.Resoure_Data.Save_Set();

            yield (_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.Request_Add("" + (_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.UrlRequest, Save); // Save.Password = "223";
            // console.log(a, 55555);

            var a = yield (_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.Request_Check((_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.UrlRequest + "/" + 1);
            console.log(a); // Tool_NetWork.instance.Request_Modify(Tool_NetWork.instance.UrlRequest, Save, { Account: Save.Account });
          })();
        }
        /**注册登录 */


        Btn_Login() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var Account = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Get(find("Canvas/Layer/Window/Account"), EditBox).string;
            var Password = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Get(find("Canvas/Layer/Window/Password"), EditBox).string;

            var Save = _this2.Resoure_Data.Save_Get();

            Save.Account = Account;
            Save.Password = Password;

            _this2.Resoure_Data.Save_Set(); // Tool_NetWork.instance.Request_Delete(Tool_NetWork.instance.UrlRequest+"/1");
            // Tool_NetWork.instance.Request_Delete(`${Tool_NetWork.instance.UrlRequest}/${2}`);


            (_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.Request_Delete("" + (_crd && Tool_NetWork === void 0 ? (_reportPossibleCrUseOfTool_NetWork({
              error: Error()
            }), Tool_NetWork) : Tool_NetWork).instance.UrlRequest, {
              Account: "None"
            });
          })();
        }

        p() {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(this.node.getChildByName("Node").getComponent(sp.Skeleton), "advanced", 1, "success_B", false);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c66b5ffc56ba3ed12b4aa07e33e1a14c89e6e5be.js.map