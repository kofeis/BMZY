System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Label, ProgressBar, Resoure_Data, Scene_Change_Type, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Script_Scene_Change;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResoure_Data(extras) {
    _reporterNs.report("Resoure_Data", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScene_Change_Type(extras) {
    _reporterNs.report("Scene_Change_Type", "../Tool/Resoure_Data", _context.meta, extras);
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
      find = _cc.find;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      Resoure_Data = _unresolved_2.Resoure_Data;
      Scene_Change_Type = _unresolved_2.Scene_Change_Type;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56400FGAQlKCad240TaY1TS", "Scene_Change_Script", undefined);

      __checkObsolete__(['_decorator', 'Component', 'v3', 'tween', 'Prefab', 'Input', 'director', 'find', 'Animation', 'game', 'CCBoolean', 'CCInteger', 'Node', 'UITransform', 'Tween', 'Label', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Script_Scene_Change = (_dec = ccclass('Script_Scene_Change'), _dec2 = property({}), _dec3 = property({
        tooltip: "0:自动跳转 1:手动跳转 2:结束游戏"
      }), _dec4 = property({
        type: ProgressBar
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = class Script_Scene_Change extends Component {
        constructor() {
          super(...arguments);
          this.Resoure_Data = null;

          _initializerDefineProperty(this, "Path", _descriptor, this);

          /**@param 0:退出游戏 1:自动跳转 2:手动跳转*/

          /**场景改变类型 */
          _initializerDefineProperty(this, "Scene_Change_Type", _descriptor2, this);

          _initializerDefineProperty(this, "Progress_Bar", _descriptor3, this);

          _initializerDefineProperty(this, "Value", _descriptor4, this);
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.Resoure_Data = find("Resoure_Data").getComponent(_crd && Resoure_Data === void 0 ? (_reportPossibleCrUseOfResoure_Data({
              error: Error()
            }), Resoure_Data) : Resoure_Data);

            if (_this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
              error: Error()
            }), Scene_Change_Type) : Scene_Change_Type).Automatic) {
              _this.Scene_Jump_Automatic();
            }
          })();
        }

        start() {
          // Input.EventType.TOUCH_START= "touch-start";
          this.node.on("touch-end", this.Scene_Jump_Manual, this);
        }
        /**自动跳转 */


        Scene_Jump_Automatic() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.Resoure_Data.Scene_Name_Next = _this2.Path;
            var SceneGame = yield _this2.Resoure_Data.Load_Scene(_this2.Resoure_Data.Scene_Name_Next, _this2.Progress_Bar, _this2.Value);

            _this2.Resoure_Data.Director_Run(SceneGame);
          })();
        }
        /**手动跳转 */


        Scene_Jump_Manual() {
          if (this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Finish) {//退出游戏
          } else if (this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Automatic) {
            return;
          } //加载页

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Path", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Scene_Change_Type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Automatic;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Progress_Bar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Value", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d99ec38cafc359c6f67dff81d882f88a685cc0a.js.map