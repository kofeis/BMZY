System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, color, CCFloat, Label, LabelOutline, tween, Layout, v3, Font, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Jump_String_Script;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      color = _cc.color;
      CCFloat = _cc.CCFloat;
      Label = _cc.Label;
      LabelOutline = _cc.LabelOutline;
      tween = _cc.tween;
      Layout = _cc.Layout;
      v3 = _cc.v3;
      Font = _cc.Font;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd3512beRBHTJLTqu6wYBH6", "Jump_String_Script", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'color', 'Color', 'CCFloat', 'Label', 'LabelOutline', 'tween', 'Layout', 'v3', 'Font', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Jump_String_Script", Jump_String_Script = (_dec = ccclass('Jump_String_Script'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        tooltip: "需要跳动的字符串"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "字符大小"
      }), _dec5 = property({
        type: CCFloat,
        tooltip: "单个字符跳动时间"
      }), _dec6 = property({
        tooltip: "描边颜色"
      }), _dec7 = property({
        type: CCFloat,
        tooltip: "描边宽度"
      }), _dec8 = property({
        tooltip: "是否打开描边"
      }), _dec9 = property({
        type: Font,
        tooltip: "单个字符跳动时间"
      }), _dec(_class = (_class2 = class Jump_String_Script extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Prefab", _descriptor, this);

          _initializerDefineProperty(this, "str", _descriptor2, this);

          _initializerDefineProperty(this, "fontSize", _descriptor3, this);

          _initializerDefineProperty(this, "aniTime", _descriptor4, this);

          _initializerDefineProperty(this, "oulineColor", _descriptor5, this);

          _initializerDefineProperty(this, "oulineWidth", _descriptor6, this);

          _initializerDefineProperty(this, "isOulin", _descriptor7, this);

          _initializerDefineProperty(this, "font", _descriptor8, this);
        }

        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        start() {
          this.node.addComponent(Layout);
          this.node.getComponent(Layout).type = Layout.Type.HORIZONTAL;
          this.node.getComponent(Layout).resizeMode = Layout.ResizeMode.CONTAINER;

          for (var i = 0; i < this.str.length; i++) {
            var str = this.str[i];
            var labelNode = instantiate(this.Prefab);
            var label = labelNode.getComponent(Label);

            if (this.isOulin) {
              var labelOutLine = labelNode.addComponent(LabelOutline);
              labelOutLine.color = this.oulineColor;
              labelOutLine.width = this.oulineWidth;
            }

            label.font = this.font;
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
          }

          this.scheduleOnce(() => {
            this.playStrJump();
            this.schedule(() => {
              this.playStrJump();
            }, this.aniTime * this.str.length / 2 + 0.2);
          });
        }

        playStrJump() {
          var jumpTime = this.aniTime / 2;
          var strIndex = 0;

          var jumpStr = labelNode => {
            tween(labelNode).sequence(tween().to(jumpTime, {
              position: v3(labelNode.position.x, this.fontSize / 2)
            }), tween().to(jumpTime / 4 * 3, {
              position: v3(labelNode.position.x, -this.fontSize / 3)
            }), tween().to(jumpTime / 4, {
              position: v3(labelNode.position.x, 0)
            })) // .repeatForever()
            .start();

            if (strIndex < this.node.children.length - 1) {
              //未到最后一个字符
              strIndex++;
              this.scheduleOnce(() => {
                jumpStr(this.node.children[strIndex]);
              }, jumpTime / 2);
            }
          };

          jumpStr(this.node.children[strIndex]);
        } // update (dt) {}


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "str", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fontSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "oulineColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 255, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "oulineWidth", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isOulin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec9], {
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
//# sourceMappingURL=846da50defdd2376beefa678e16a56f76bef8ce1.js.map