System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, BaseLayer, utilTools, _dec, _class, _crd, ccclass, property, Hexagon;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../framework/utils/UtilTools", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e671knQbZOt6GSCcu+xN4R", "Hexagon", undefined);

      __checkObsolete__(['_decorator', 'find', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hexagon", Hexagon = (_dec = ccclass('Hexagon'), _dec(_class = class Hexagon extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          // 食材id
          this.recipeId = void 0;
        }

        setView(data) {
          // 记录对应的食材id，六边形颜色下标就是recipe配置表中食材的下标
          this.recipeId = data.id; // this.setString(find("Num", this.node), data.id);

          this.setString(find("Name", this.node), data.row.name);
          this.setSpriteFrame2(find("Icon", this.node), "icon/cooking/" + data.row.icon);
          this.setSpriteFrame2(this.node, data.row.bg);
          this.refreshNumString();
        }

        refreshNumString() {
          var seq = 0;
          var lastRecipeId = 0;
          var thisObj = this;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.parent.children, function (node, index) {
            var nodeRecipeId = node.getComponent(Hexagon).recipeId;

            if (lastRecipeId != nodeRecipeId) {
              seq = 0;
            }

            seq++;
            lastRecipeId = nodeRecipeId;

            if (node.uuid == thisObj.node.uuid) {
              return;
            }

            return false;
          });
          this.setString(find("Num", this.node), seq);
        }

        clearNumString() {
          this.setString(find("Num", this.node), "");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f871365dce44cddc32d9a3961fe4abe8c5d4954b.js.map