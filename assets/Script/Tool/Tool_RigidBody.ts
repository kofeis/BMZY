import { _decorator, BoxCollider2D, Component, Node, RigidBody, RigidBody2D, v2, Vec2 } from 'cc';
import { Tool_Other } from './Tool_Other';
import { Tool_Event } from './Tool_Event';
const { ccclass, property } = _decorator;

@ccclass('Tool_RigidBody')
export class Tool_RigidBody extends Component {

    public static readonly instance = new Tool_RigidBody();

    /**设置线性速度 */
    Set_Linear_Velocity(Node_Set: Node, X: number = 0, Y: number = 0) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.linearVelocity = v2(X, Y);
    }
    /**设置线性速度 */
    Set_Linear_Velocity_X(Node_Set: Node, X: number = 0,) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.linearVelocity = v2(X, Component_RigidBody.linearVelocity.y);
    }
    /**设置线性速度 */
    Set_Linear_Velocity_Y(Node_Set: Node, Y: number = 0) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.linearVelocity = v2(Component_RigidBody.linearVelocity.x, Y);
    }

    /**销毁刚体(动态) */
    Collider_Destroy(Node_Set: Node) {
        Tool_Event.instance.Off_Collider(Node_Set);
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.linearVelocity = v2(0, 0);
        this.scheduleOnce(() => {
            Node_Set.destroy();
        })
    }

    /**刚体隐藏 */
    Collider_Hide(Node_Set: Node) {
        // Tool_Event.instance.Off_Collider(Node_Set);
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.linearVelocity = v2(0, 0);
        this.scheduleOnce(() => {
            Node_Set.active = false;
        })
    }

    /**刚体显示 */
    Collider_Show(Node_Set: Node) {
        Tool_Event.instance.Off_Collider(Node_Set);
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.enabled = false
        Component_RigidBody.linearVelocity = v2(0, 0);
        Node_Set.active = true;
        this.scheduleOnce(() => {
            Component_RigidBody.enabled = true
        })
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
        }

        // 检查节点是否有刚体组件
        const rigidBody = node.getComponent(RigidBody2D);
        if (!rigidBody) {
            console.error("节点没有刚体组件:", node);
            return;
        }

        // 设置节点的 active 状态
        try {
            node.active = isActive;
            console.log(`节点 ${node.name} 的 active 状态已设置为 ${isActive}`);
        } catch (error) {
            console.error("设置 active 状态时发生错误：", error);
        }
    }



    /**刚体停止 */
    Collider_Stop(Node_Set: Node) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.gravityScale = 0;
        Component_RigidBody.linearVelocity = v2(0, 0);
    }

    /**刚体恢复 */
    Collider_Recover(Node_Set: Node, Gravity_Scale: number = 1) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.gravityScale = Gravity_Scale;
    }

    /**施加力 */
    Collider_ApplyForce(Node_Set: Node, Force: Vec2) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);

        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.applyForce(Force, v2(0, 0), true);
    }
    Collider_Sleep(Node_Set: Node) {
        let Component_RigidBody = Node_Set.getComponent(RigidBody2D);
        if (!Tool_Other.instance.Get_Type_Is_Abnormal(Component_RigidBody)) {
            return;
        }
        Component_RigidBody.sleep()
    }


}


