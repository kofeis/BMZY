System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Node, Label, Enum, Resoure_Data, Scene_Change_Type, ScreenMode, Tool_Event, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Script_Scene_Change;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResoure_Data(extras) {
    _reporterNs.report("Resoure_Data", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScene_Change_Type(extras) {
    _reporterNs.report("Scene_Change_Type", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenMode(extras) {
    _reporterNs.report("ScreenMode", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../Tool/Tool_Event", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      Resoure_Data = _unresolved_2.Resoure_Data;
      Scene_Change_Type = _unresolved_2.Scene_Change_Type;
      ScreenMode = _unresolved_2.ScreenMode;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56400FGAQlKCad240TaY1TS", "Scene_Change_Script", undefined);

      __checkObsolete__(['_decorator', 'Component', 'v3', 'tween', 'Prefab', 'Input', 'director', 'find', 'Animation', 'game', 'CCBoolean', 'CCInteger', 'Node', 'UITransform', 'Tween', 'Label', 'ProgressBar', 'Enum', 'log', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Script_Scene_Change = (_dec = ccclass('Script_Scene_Change'), _dec2 = property({
        tooltip: "路径"
      }), _dec3 = property({
        type: Enum(_crd && ScreenMode === void 0 ? (_reportPossibleCrUseOfScreenMode({
          error: Error()
        }), ScreenMode) : ScreenMode),
        tooltip: "横屏 竖屏"
      }), _dec4 = property({
        type: Enum(_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
          error: Error()
        }), Scene_Change_Type) : Scene_Change_Type),
        tooltip: "自动跳转 手动跳转 结束游戏"
      }), _dec5 = property({
        type: Node,
        tooltip: "进度遮罩"
      }), _dec6 = property({
        type: Node,
        tooltip: "进度条"
      }), _dec7 = property({
        type: Label,
        tooltip: "进度值"
      }), _dec(_class = (_class2 = class Script_Scene_Change extends Component {
        constructor(...args) {
          super(...args);
          this.Resoure_Data = null;

          _initializerDefineProperty(this, "Path", _descriptor, this);

          /**屏幕模式 */
          _initializerDefineProperty(this, "ScreenMode", _descriptor2, this);

          /**场景改变类型 */
          _initializerDefineProperty(this, "Scene_Change_Type", _descriptor3, this);

          /**进度遮罩 */
          _initializerDefineProperty(this, "Progress_Mask", _descriptor4, this);

          /**进度条 */
          _initializerDefineProperty(this, "Progress_Bar", _descriptor5, this);

          /**进度值 */
          _initializerDefineProperty(this, "Value", _descriptor6, this);
        }

        async onLoad() {
          this.Resoure_Data = find("Resoure_Data").getComponent(_crd && Resoure_Data === void 0 ? (_reportPossibleCrUseOfResoure_Data({
            error: Error()
          }), Resoure_Data) : Resoure_Data);
        }

        start() {
          if (this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Automatic) {
            this.Scene_Jump_Automatic();
          } else {
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.node, this.Scene_Jump_Manual, this);
          }
        }
        /**自动跳转 */


        async Scene_Jump_Automatic() {
          this.Resoure_Data.Scene_Name_Next = this.Path;
          let SceneGame = await this.Resoure_Data.Load_Scene(this.Resoure_Data.Scene_Name_Next, this.Progress_Mask, this.Progress_Bar, this.Value, this.ScreenMode);
          this.Resoure_Data.Director_Run(SceneGame);
        }
        /**手动跳转 */


        async Scene_Jump_Manual() {
          if (this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Finish) {
            this.Resoure_Data.Game_End();
          } else if (this.Scene_Change_Type == (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Manual) {
            this.Resoure_Data.Scene_Name_Next = this.Path;
            let SceneGame = await this.Resoure_Data.Load_Scene(this.Resoure_Data.Scene_Name_Next);
            this.Resoure_Data.Director_Run(SceneGame);
            return;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Path", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ScreenMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && ScreenMode === void 0 ? (_reportPossibleCrUseOfScreenMode({
            error: Error()
          }), ScreenMode) : ScreenMode).Horizontal;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Scene_Change_Type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && Scene_Change_Type === void 0 ? (_reportPossibleCrUseOfScene_Change_Type({
            error: Error()
          }), Scene_Change_Type) : Scene_Change_Type).Automatic;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Progress_Mask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Progress_Bar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Value", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27aa77e39a0262a6ac9b0a4e95ef6b4a5f8832f4.js.map