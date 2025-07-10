System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RigidBody2D, v2, Tool_Other, Tool_Event, _dec, _class, _class2, _crd, ccclass, property, Tool_RigidBody;

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "./Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "./Tool_Event", _context.meta, extras);
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
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      Tool_Other = _unresolved_2.Tool_Other;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf6f14kte9OqYXX2WJTWMvb", "Tool_RigidBody", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Component', 'Node', 'RigidBody', 'RigidBody2D', 'v2', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tool_RigidBody", Tool_RigidBody = (_dec = ccclass('Tool_RigidBody'), _dec(_class = (_class2 = class Tool_RigidBody extends Component {
        /**设置线性速度 */
        Set_Linear_Velocity(Node_Set, X = 0, Y = 0) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.linearVelocity = v2(X, Y);
        }
        /**设置线性速度 */


        Set_Linear_Velocity_X(Node_Set, X = 0) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.linearVelocity = v2(X, Component_RigidBody.linearVelocity.y);
        }
        /**设置线性速度 */


        Set_Linear_Velocity_Y(Node_Set, Y = 0) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.linearVelocity = v2(Component_RigidBody.linearVelocity.x, Y);
        }
        /**销毁刚体(动态) */


        Collider_Destroy(Node_Set) {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Off_Collider(Node_Set);
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.linearVelocity = v2(0, 0);
          this.scheduleOnce(() => {
            Node_Set.destroy();
          });
        }
        /**刚体隐藏 */


        Collider_Hide(Node_Set) {
          // Tool_Event.instance.Off_Collider(Node_Set);
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.linearVelocity = v2(0, 0);
          this.scheduleOnce(() => {
            Node_Set.active = false;
          });
        }
        /**刚体显示 */


        Collider_Show(Node_Set) {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Off_Collider(Node_Set);
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.enabled = false;
          Component_RigidBody.linearVelocity = v2(0, 0);
          Node_Set.active = true;
          this.scheduleOnce(() => {
            Component_RigidBody.enabled = true;
          });
        }
        /**
        * 安全地改变刚体的 active 状态
        * @param {cc.Node} node - 需要改变 active 状态的节点
        * @param {boolean} isActive - 要设置的 active 状态
        */


        setRigidBodyActive(node, isActive) {
          // 检查节点是否存在
          if (!node || !node.isValid) {
            console.error("节点不存在或无效:", node);
            return;
          } // 检查节点是否有刚体组件


          const rigidBody = node.getComponent(RigidBody2D);

          if (!rigidBody) {
            console.error("节点没有刚体组件:", node);
            return;
          } // 设置节点的 active 状态


          try {
            node.active = isActive;
            console.log(`节点 ${node.name} 的 active 状态已设置为 ${isActive}`);
          } catch (error) {
            console.error("设置 active 状态时发生错误：", error);
          }
        }
        /**刚体停止 */


        Collider_Stop(Node_Set) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.gravityScale = 0;
          Component_RigidBody.linearVelocity = v2(0, 0);
        }
        /**刚体恢复 */


        Collider_Recover(Node_Set, Gravity_Scale = 1) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.gravityScale = Gravity_Scale;
        }
        /**施加力 */


        Collider_ApplyForce(Node_Set, Force) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.applyForce(Force, v2(0, 0), true);
        }

        Collider_Sleep(Node_Set) {
          let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
          }

          Component_RigidBody.sleep();
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0998c7c651721a2dbf48abb299467b651d1cc9a7.js.map