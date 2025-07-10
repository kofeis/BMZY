System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, UITransform, v3, Tool_Event, _dec, _class, _crd, ccclass, property, Bg;

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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Tool_Event = _unresolved_2.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb001UDL45Br7GL/ZP+ggxZ", "Bg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node', 'UITransform', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bg", Bg = (_dec = ccclass('Bg'), _dec(_class = class Bg extends Component {
        start() {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Event_On("Screen_Update", this.Screen_Change, this);
          this.Screen_Update_Vertical();
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

        Screen_Update_Horizontal() {
          let H_Canvas = find("Canvas").getComponent(UITransform).height;
          let H = 1138; //this.node.getComponent(UITransform).height

          let M = H_Canvas / H;
          this.node.scale = v3(M, M, 1);
          console.log(this.node.scale);
        }

        Screen_Update_Vertical() {
          let H_Canvas = find("Canvas").getComponent(UITransform).height;
          let H = 1138; //this.node.getComponent(UITransform).height

          let M = H_Canvas / H;
          this.node.scale = v3(M, M, 1);
          console.log(this.node.scale); // /**游戏画布高度 */
          // let Width_Canvas = Tool_UI.instance.Get_Width_Canvas();
          // /**游戏设计高度 */
          // let Width_Design = Tool_UI.instance.Get_Width_Design();
          // let Size = Width_Canvas / Width_Design;
          // this.node.scale = v3(Size, Size, 1);
          // console.log("竖屏游戏背景适配",Size);
        } // update(deltaTime: number) {
        //     // let W_Canvas=find("Canvas").getComponent(UITransform).width;
        //     // let W = this.node.getComponent(UITransform).width;
        //     // let M = W_Canvas / W;
        //     let H_Canvas = find("Canvas").getComponent(UITransform).height
        //     let H = 1138//this.node.getComponent(UITransform).height
        //     let M = H_Canvas / H;
        //     this.node.scale = v3(M, M, 1);
        //     console.log(M);
        // }


        onDestroy() {
          console.log("销毁");
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
//# sourceMappingURL=607488c9df6136e21f1fb0118eeffb480fec06c4.js.map