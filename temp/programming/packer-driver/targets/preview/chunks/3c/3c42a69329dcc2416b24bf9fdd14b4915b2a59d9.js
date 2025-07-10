System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIRenderer, _decorator, cocosUtil, _dec, _class, _crd, ccclass, property, RenderChildBatch;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../utils/CocosUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UIRenderer = _cc.UIRenderer;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd9a4luGXBE768KaziQVrxB", "RenderChildBatch", undefined);

      __checkObsolete__(['Node', 'UIRenderer', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 合批渲染

      _export("RenderChildBatch", RenderChildBatch = (_dec = ccclass('RenderChildBatch'), _dec(_class = class RenderChildBatch extends UIRenderer {
        constructor() {
          super(...arguments);
          this.pathArr = [];
          this.path2RenderArr = new Map();
          this.rootNodeArr = [];
        }

        // 添加根子节点
        addRootItemNode(node) {
          if (this.rootNodeArr.indexOf(node) == -1) {
            this.pauseRender(node, "");
            this.rootNodeArr.push(node);
          }
        } // 架空节点提交渲染的方法


        pauseRender(node, rootPath) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var path = rootPath + node.name;
          var renderable = node.getComponent(UIRenderer);

          if (renderable) {
            if (this.pathArr.indexOf(path) == -1) {
              this.pathArr.push(path);
            }

            var renderArr = this.path2RenderArr.get(path);

            if (!renderArr) {
              renderArr = [];
              this.path2RenderArr.set(path, renderArr);
            }

            if (renderArr.indexOf(renderable) == -1) {
              if (!renderable._realRender) {
                renderable._realRender = renderable._render;

                renderable._render = function () {};
              }

              renderArr.push(renderable);
            }
          }

          node.children.forEach(child => {
            this.pauseRender(child, path + "/");
          });
        } // 移除根子节点


        removeRootItemNode(node) {
          this.removeRender(node, "");
          var index = this.rootNodeArr.indexOf(node);

          if (index >= 0) {
            this.rootNodeArr.splice(index, 1);
          }
        } // 还原架空的方法


        removeRender(node, rootPath) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var path = rootPath + node.name;
          var arr = this.path2RenderArr.get(path);

          if (arr) {
            var renderable = node.getComponent(UIRenderer);

            if (renderable) {
              if (renderable._realRender) {
                renderable._render = renderable._realRender;
                delete renderable._realRender;
              }

              var index = arr.indexOf(renderable);

              if (index != -1) {
                arr.splice(index, 1);
              }
            }
          }

          node.children.forEach(child => {
            this.removeRender(child, path + "/");
          });
        } // 所有子节点渲染前调用


        updateAssembler(batch) {} // 所有子节点渲染后调用


        postUpdateAssembler(batch) {
          this.pathArr.forEach(path => {
            var arr = this.path2RenderArr.get(path);
            var tmpArr = [];
            arr.forEach(renderable => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(renderable) || !(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(renderable.node)) {
                return;
              }

              tmpArr.push(renderable);

              if (!renderable.node.activeInHierarchy) {
                return;
              }

              if (renderable._renderFlag && renderable._assembler) {
                renderable._realRender(batch);
              }
            });
            this.path2RenderArr.set(path, tmpArr);
          });
        } // 还原现场


        onDestroy() {
          this.pathArr.forEach(path => {
            var arr = this.path2RenderArr.get(path);
            arr.forEach(renderable => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(renderable)) {
                return;
              }

              if (renderable._realRender) {
                renderable._render = renderable._realRender;
                delete renderable._realRender;
              }
            });
          });
          this.path2RenderArr = undefined;
          this.pathArr = undefined;
          this.rootNodeArr = undefined;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c42a69329dcc2416b24bf9fdd14b4915b2a59d9.js.map