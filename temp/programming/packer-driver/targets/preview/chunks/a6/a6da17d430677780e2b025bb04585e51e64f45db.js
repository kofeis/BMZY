System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, tween, v3, Sprite, Label, Tween, BaseLayer, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TargetItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      tween = _cc.tween;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43739xl0hhMD44XrVUd6JDe", "TargetItem", undefined);

      __checkObsolete__(['_decorator', 'find', 'Quat', 'tween', 'v3', 'Sprite', 'Label', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TargetItem", TargetItem = (_dec = ccclass('TargetItem'), _dec2 = property({
        type: Sprite,
        tooltip: "底图"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "食材图标"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "打勾图标"
      }), _dec5 = property({
        type: Label,
        tooltip: "数量"
      }), _dec(_class = (_class2 = class TargetItem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "icon", _descriptor2, this);

          _initializerDefineProperty(this, "tick", _descriptor3, this);

          _initializerDefineProperty(this, "targetNumLabel", _descriptor4, this);

          // 食材id
          this.materialId = void 0;
          // 目标数量
          this.targetNum = void 0;
        }

        init(id, num, bgColor, icon) {
          this.materialId = id;
          this.targetNum = num, this.setSpriteFrame2(this.icon.node, "shicai/" + icon);
          this.setSpriteFrame2(this.bg.node, "target_bg_" + bgColor);
          this.setNumString(find("Num", this.node), this.targetNum);
        }

        decreaseTargetNum() {
          if (this.targetNum > 0) {
            this.targetNum -= 1;
            this.showDecreaseTargetNumAnimation();
          }
        }

        showDecreaseTargetNumAnimation() {
          Tween.stopAllByTarget(this.node);
          var thisObj = this;
          tween(this.node).delay(0.7).call(function () {
            // TODO 消除音效
            this.setNumString(thisObj.targetNumLabel, thisObj.targetNum);
            thisObj.targetNumLabel.node.active = thisObj.targetNum > 0;
            thisObj.tick.node.active = thisObj.targetNum <= 0;
          }).to(0.08, {
            scale: v3(0.85, 0.85, 1)
          }).to(0.08, {
            scale: v3(1, 1, 1)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tick", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetNumLabel", [_dec5], {
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
//# sourceMappingURL=a6da17d430677780e2b025bb04585e51e64f45db.js.map