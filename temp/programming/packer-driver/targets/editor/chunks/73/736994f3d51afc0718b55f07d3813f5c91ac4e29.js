System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, Tool_Event, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _dec5, _class4, _class5, _descriptor3, _descriptor4, _crd, ccclass, property, Click_Events, Btn_Script;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      EventHandler = _cc.EventHandler;
    }, function (_unresolved_2) {
      Tool_Event = _unresolved_2.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a1d7vdTVJOXpmxacHtDNJJ", "Btn_Script", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'CCString', 'Component', 'EventHandler', 'find', 'Node', 'Tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Click_Events", Click_Events = (_dec = ccclass('Click_Events'), _dec2 = property({
        type: [EventHandler]
      }), _dec(_class = (_class2 = class Click_Events {
        constructor() {
          _initializerDefineProperty(this, "Event_Handler", _descriptor, this);

          _initializerDefineProperty(this, "Anim_Switch", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Event_Handler", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Anim_Switch", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _export("Btn_Script", Btn_Script = (_dec3 = ccclass('Btn_Script'), _dec4 = property({
        type: Click_Events
      }), _dec5 = property({
        type: Click_Events
      }), _dec3(_class4 = (_class5 = class Btn_Script extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Events_TOUCH_START", _descriptor3, this);

          _initializerDefineProperty(this, "Click_Events", _descriptor4, this);
        }

        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        // @property({ type: Click_Events })
        // Click_Events: Click_Events = new Click_Events;
        onLoad() {}

        start() {
          console.log(this.Click_Events.Event_Handler.length);

          for (let i = 0; i < this.Click_Events.Event_Handler.length; i++) {
            let Event = this.Click_Events.Event_Handler[i];
            let Target_Node = Event.target;
            let Scr_Name = Event._componentName;
            let Fun_Name = Event.handler;
            let Custom_EventData = Event.customEventData;
            console.log(Target_Node, Scr_Name, Fun_Name);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Add(this.node, Target_Node, Scr_Name, Fun_Name, Custom_EventData);
          }

          if (this.Click_Events.Anim_Switch) {
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.node, this.Click_Events.Anim_Switch);
          }

          return;
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_START(this.node, Event => {
            this.On_Touch_Start(Event);
          });
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.node, Event => {
            this.On_Touch_End(Event);
          });
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_CANCEL(this.node, Event => {
            this.On_Touch_Cancel(Event);
          });
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_MOVE(this.node, Event => {
            this.On_Touch_Move(Event);
          });
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Pressing(this.node, 0.25, () => {
            this.On_Touch_Pressing();
          }, () => {});
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Presslong(this.node, 0.25, () => {
            this.On_Touch_Presslong();
          }, () => {});
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Double(this.node, 2, 0.25, () => {
            this.On_Touch_Double();
          });
        }

        On_Touch_Start(Event) {
          console.error("aaaaaaaaaaaaaaaaa");
        }

        On_Touch_End(Event) {}

        On_Touch_Cancel(Event) {
          this.On_Touch_End(Event);
        }

        On_Touch_Move(Event) {}

        On_Touch_Pressing() {}

        On_Touch_Presslong() {}

        On_Touch_Double() {}

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "Events_TOUCH_START", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Click_Events();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "Click_Events", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Click_Events();
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=736994f3d51afc0718b55f07d3813f5c91ac4e29.js.map