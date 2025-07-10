System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Graphics, Node, macro, tween, view, v3, BaseLayer, _dec, _class, _crd, ccclass, property, TransLayer;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      Node = _cc.Node;
      macro = _cc.macro;
      tween = _cc.tween;
      view = _cc.view;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8305eEVq3ZArZsE8k1RrPoU", "TransLayer", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Graphics', 'Node', 'macro', 'tween', 'view', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TransLayer", TransLayer = (_dec = ccclass('TransLayer'), _dec(_class = class TransLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          // 生成六边形颜色列表
          this._colorArr = ["#fce6e6", "#bbd7f", "#ceb5e5"];
          this._colorIndex = 0;
          this._uiNode = void 0;
          // 六边形半径
          this._radius = 50;
        }

        onLoad() {
          super.onLoad();
          this._uiNode = this.getNodeByPath("UI");
        }

        initUI() {
          ;
          this.showLoadingAnimation();
          this.schedule(this.showLoadingAnimation, 0.4, macro.REPEAT_FOREVER, 0);
        }

        onDestroy() {
          super.onDestroy();
        }

        showLoadingAnimation() {
          console.log("showLoadingAnimation");
          var size = view.getVisibleSize(); // let pos1 = v3(0, size.height * 0.5, 0);

          var pos = v3(0, 0, 0);
          var height = this._radius * 1.5;
          var scale = v3(size.height / height, size.height / height, 1);
          var hexagon = this.createHexagonNode();

          this._uiNode.addChild(hexagon);

          hexagon.setPosition(pos);
          tween(hexagon).to(0.5, {
            scale: scale
          }).delay(1).call(function () {
            hexagon.removeFromParent();
          }).start();
        }

        getNextColor() {
          if (this._colorIndex >= this._colorArr.length) {
            this._colorIndex = 0;
          }

          return this._colorArr[this._colorIndex++];
        }

        createHexagonNode() {
          var node = new Node();
          var graphics = node.addComponent(Graphics);
          graphics.fillColor = new Color(this.getNextColor()); // 画六边形

          for (var i = 0; i <= 6; ++i) {
            var x = this._radius * Math.cos(i * Math.PI / 3);
            var y = this._radius * Math.sin(i * Math.PI / 3);

            if (i == 0) {
              graphics.moveTo(x, y);
            } else {
              graphics.lineTo(x, y);
            }
          }

          graphics.fill();
          return node;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c8b9eb4aa9b7c81601140fafe35ef2ba936a299.js.map