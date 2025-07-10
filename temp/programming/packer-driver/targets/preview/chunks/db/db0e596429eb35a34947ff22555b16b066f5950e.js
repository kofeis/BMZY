System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, Label, Node, Sprite, SpriteFrame, Texture2D, WechatManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoginLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWechatManager(extras) {
    _reporterNs.report("WechatManager", "./WechatManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      WechatManager = _unresolved_2.WechatManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3791BMEeBIhKNpFINX8Iv7", "LoginLayer", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'ImageAsset', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginLayer", LoginLayer = (_dec = ccclass('LoginLayer'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class LoginLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "avatar", _descriptor, this);

          // 头像
          _initializerDefineProperty(this, "nameLabel", _descriptor2, this);
        }

        // 昵称
        start() {
          (_crd && WechatManager === void 0 ? (_reportPossibleCrUseOfWechatManager({
            error: Error()
          }), WechatManager) : WechatManager).instance.initAutoSetting(url => {
            this.setAvatar(url);
          });
        }

        clickShareEvent() {// WechatManager.instance.showShareMenu();
        } //设置头像


        setAvatar(url) {
          var spire = this.avatar.getComponent(Sprite);
          assetManager.loadRemote(url + "?aaa=aa.jpg", {
            ext: '.jpg'
          }, (err, imageAsset) => {
            if (err) {
              return console.error(err.message);
            }

            var sp = new SpriteFrame();
            var texture = new Texture2D();
            texture.image = imageAsset;
            sp.texture = texture;
            spire.spriteFrame = sp;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
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
//# sourceMappingURL=db0e596429eb35a34947ff22555b16b066f5950e.js.map