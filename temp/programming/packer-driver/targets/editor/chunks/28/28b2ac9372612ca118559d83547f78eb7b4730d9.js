System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, v3, Tool_Event, Tool_UI, _dec, _class, _crd, ccclass, property, Adaptation;

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../Tool/Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../Tool/Tool_UI", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Tool_Event = _unresolved_2.Tool_Event;
    }, function (_unresolved_3) {
      Tool_UI = _unresolved_3.Tool_UI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c4f471x5JCCbdIXkHy34sc", "ScreenArea", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'find', 'Node', 'sys', 'UITransform', 'v3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Adaptation", Adaptation = (_dec = ccclass('Adaptation'), _dec(_class = class Adaptation extends Component {
        start() {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Event_On("Screen_Update", this.Screen_Change, this);
        }

        Screen_Change(Event_Name, Screen_Mode) {
          this.scheduleOnce(() => {
            if (Screen_Mode == "Horizontal") {
              this.Screen_Update_Horizontal();
            } else {
              this.Screen_Update_Vertical();
            }
          });
        }
        /**横屏游戏背景适配 */


        Screen_Update_Horizontal() {
          /**游戏画布高度 */
          let Height_Canvas = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Height_Visible();
          /**游戏设计高度 */

          let Height_Design = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Height_Design();
          let Size = Height_Canvas / Height_Design;
          this.node.scale = v3(Size, Size, 1);
          console.debug("横屏游戏背景适配");
          console.debug("%c这是带样式的文本", "color: #00CCFF; font-size: 20px;");
          console.log("%c这是带样式的文本", "color: red; font-size: 20px;");
        }
        /**竖屏游戏背景适配 */


        Screen_Update_Vertical() {
          /**游戏画布高度 */
          let Width_Canvas = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Width_Visible();
          /**游戏设计高度 */

          let Width_Design = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Width_Design();
          let Size = Width_Canvas / Width_Design;
          this.node.scale = v3(Size, Size, 1);
          console.log("竖屏游戏背景适配");
        }

        onDestroy() {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Event_Off("Screen_Update", this.Screen_Change, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28b2ac9372612ca118559d83547f78eb7b4730d9.js.map