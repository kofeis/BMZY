System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Resoure_Data, _dec, _class, _crd, ccclass, property, Resoure_Data_Template;

  function _reportPossibleCrUseOfResoure_Data(extras) {
    _reporterNs.report("Resoure_Data", "../Tool/Resoure_Data", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Resoure_Data = _unresolved_2.Resoure_Data;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63342PUQM9KZq+dRd6FV4U2", "Resoure_Data_Template", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'EventMouse', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Resoure_Data_Template", Resoure_Data_Template = (_dec = ccclass('Resoure_Data_Template'), _dec(_class = class Resoure_Data_Template extends Component {
        constructor() {
          super();
          this.Resoure_Data = null;
        }

        onLoad() {
          this.Resoure_Data = find("Resoure_Data").getComponent(_crd && Resoure_Data === void 0 ? (_reportPossibleCrUseOfResoure_Data({
            error: Error()
          }), Resoure_Data) : Resoure_Data);
        }

        start() {}

        onEnable() {}

        onDisable() {}

        onDestroy() {}

        update(deltaTime) {}

        lateUpdate(dt) {}
        /**在编辑器中选择该节点时 */


        onFocusInEditor() {
          console.log(this.node.name);
        }
        /**在编辑器中取消选择该节点时 */


        onLostFocusInEditor() {
          console.log(this.node.name);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67be7bd227ca7a5cff7c6403c6a44bdb08a3c28e.js.map