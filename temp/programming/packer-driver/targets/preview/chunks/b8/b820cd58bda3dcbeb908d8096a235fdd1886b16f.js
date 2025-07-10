System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, cocosUtil, utilTools, _dec, _class, _crd, ccclass, property, NodePool;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../utils/UtilTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f037dljc35IRoLeG5rkxyXg", "NodePool", undefined);

      __checkObsolete__(['Component', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodePool", NodePool = (_dec = ccclass('NodePool'), _dec(_class = class NodePool extends Component {
        constructor() {
          super(...arguments);
          this.itemNode = void 0;
          this.freeNodeArr = [];
          this.itemNodeArr = [];
        }

        onLoad() {}

        init(itemNode) {
          if (itemNode instanceof Prefab) {
            itemNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(itemNode);
          }

          this.itemNode = itemNode;
        }

        getNode() {
          var node = this.freeNodeArr.shift();

          if (!node) {
            if (!this.itemNode) {
              console.error(this.node);
            }

            node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(this.itemNode);
            node.parent = this.node;
          }

          if (!node.active) {
            node.active = true;
          }

          node.use = true;
          return node;
        }

        recycleNode(node) {
          if (!this.itemNode) {
            this.itemNode = node;
          }

          node.active = false;

          if (this.freeNodeArr.indexOf(node) == -1) {
            this.freeNodeArr.push(node);
          } // @ts-ignore


          node.use = false;
        }

        recycleAllNode() {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, node => {
            this.recycleNode(node);
          });
        }

        forEachUseNode(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, (node, index) => {
            if (!node.use) {
              return;
            }

            cb(node, index);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b820cd58bda3dcbeb908d8096a235fdd1886b16f.js.map