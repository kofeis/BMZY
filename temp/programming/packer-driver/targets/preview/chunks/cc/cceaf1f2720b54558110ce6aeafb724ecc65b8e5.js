System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, ButtonInterceptor;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54943NoEApER62Dr5rQazuT", "NewComponent", undefined); // 在你的按钮组件脚本中


      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonInterceptor", ButtonInterceptor = (_dec = ccclass('ButtonInterceptor'), _dec(_class = class ButtonInterceptor extends Component {
        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          // 阻止事件冒泡，这样滚轮组件不会接收到触摸事件
          event.propagationStopped = true;
        }

        onTouchEnd(event) {
          event.propagationStopped = true;
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cceaf1f2720b54558110ce6aeafb724ecc65b8e5.js.map