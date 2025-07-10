System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Quat, tween, v3, BaseLayer, _dec, _class, _crd, ccclass, property, RecipeItem;

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
      find = _cc.find;
      Quat = _cc.Quat;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6b5azolQNAmrtlSUtjGPJ2", "RecipeItem", undefined);

      __checkObsolete__(['_decorator', 'find', 'Quat', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecipeItem", RecipeItem = (_dec = ccclass('RecipeItem'), _dec(_class = class RecipeItem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          // 食材id
          this.recipeId = void 0;
          // 剩余待消除的食材数量
          this.remainClearNum = void 0;
          // 总共需要消除的食材数量
          this.targetClearNum = void 0;
        }

        setView(data) {
          this.recipeId = data.id;
          this.targetClearNum = data.targetClearNum;
          this.remainClearNum = data.targetClearNum;
          this.setSpriteFrame2(find("Icon", this.node), "icon/cooking/" + data.row.icon);
          this.setNumString(find("Num", this.node), data.targetClearNum);
        }

        refreshView() {
          this.setNumString(find("Num", this.node), this.remainClearNum);
        }

        showClearAnimation() {
          var angle = 10;
          var quat1 = new Quat();
          Quat.fromEuler(quat1, 0, 0, angle);
          var quat2 = new Quat();
          Quat.fromEuler(quat2, 0, 0, -angle);
          var quat3 = new Quat();
          Quat.fromEuler(quat3, 0, 0, 0);
          var thisObj = this;
          tween(this.node).to(0.12, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.08, {
            rotation: quat1
          }).to(0.16, {
            rotation: quat2
          }).to(0.08, {
            rotation: quat3
          }).to(0.08, {
            scale: v3(1, 1, 1)
          }).call(() => {
            thisObj.remainClearNum--;
            thisObj.refreshView();
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e58d51acbd16d11a224bdc0fd3967c4dd79ec7f7.js.map