import { _decorator, BoxCollider2D, Component, Node, RigidBody, RigidBody2D, v2, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tool_RigidBody')
export class Tool_RigidBody extends Component {
    public static readonly instance = new Tool_RigidBody();

    /**
     * 创建刚体组件（如已存在则返回原组件）
     * @param Node_Set 目标节点
     * @param Type 刚体类型 0:Dynamic 1:Static 2:Kinematic，默认0
     * @returns RigidBody2D
     * @example
     * Tool_RigidBody.Create_RigidBody(node, 0)
     */
    public static Create_RigidBody(Node_Set: Node, Type: number = 0): RigidBody2D {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) {
            Component_RigidBody2D = Node_Set.addComponent(RigidBody2D);
        }
        Component_RigidBody2D.type = Type;
        return Component_RigidBody2D;
    }

    /**
     * 销毁刚体组件（延迟到下一帧，避免物理系统引用导致报错）
     * @param Node_Set 目标节点
     * @example
     * Tool_RigidBody.Destroy_RigidBody(node)
     */
    public static Destroy_RigidBody(Node_Set: Node) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (Component_RigidBody2D) {
            // 延迟到下一帧移除，避免物理系统本帧引用导致报错
            if (Node_Set.scheduleOnce) {
                Node_Set.scheduleOnce(() => {
                    if (Component_RigidBody2D.isValid && Node_Set.isValid) {
                        Node_Set.removeComponent(Component_RigidBody2D);
                    }
                }, 0);
            } else {
                // 兼容非组件节点（如 scheduleOnce 不存在时）
                setTimeout(() => {
                    if (Component_RigidBody2D.isValid && Node_Set.isValid) {
                        Node_Set.removeComponent(Component_RigidBody2D);
                    }
                }, 0);
            }
        }
    }

    /**
     * 设置线性速度
     * @param Node_Set 目标节点
     * @param X x轴速度
     * @param Y y轴速度
     * @example
     * Tool_RigidBody.Set_Linear_Velocity(node, 10, 0)
     */
    public static Set_Linear_Velocity(Node_Set: Node, X: number = 0, Y: number = 0) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.linearVelocity = v2(X, Y);
    }

    /**
     * 获取线性速度
     * @param Node_Set 目标节点
     * @returns Vec2
     * @example
     * Tool_RigidBody.Get_Linear_Velocity(node)
     */
    public static Get_Linear_Velocity(Node_Set: Node): Vec2 | null {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return null;
        return Component_RigidBody2D.linearVelocity;
    }

    /**
     * 设置角速度
     * @param Node_Set 目标节点
     * @param AngularVelocity 角速度
     * @example
     * Tool_RigidBody.Set_Angular_Velocity(node, 5)
     */
    public static Set_Angular_Velocity(Node_Set: Node, AngularVelocity: number = 0) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.angularVelocity = AngularVelocity;
    }

    /**
     * 获取角速度
     * @param Node_Set 目标节点
     * @returns number
     * @example
     * Tool_RigidBody.Get_Angular_Velocity(node)
     */
    public static Get_Angular_Velocity(Node_Set: Node): number | null {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return null;
        return Component_RigidBody2D.angularVelocity;
    }

    /**
     * 施加力
     * @param Node_Set 目标节点
     * @param Force 力
     * @param Point 作用点（可选，默认中心）
     * @example
     * Tool_RigidBody.Apply_Force(node, v2(100,0))
     */
    public static Apply_Force(Node_Set: Node, Force: Vec2, Point?: Vec2) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.applyForce(Force, Point || v2(0, 0), true);
    }

    /**
     * 施加线性冲量
     * @param Node_Set 目标节点
     * @param Impulse 冲量
     * @param Point 作用点（可选，默认中心）
     * @example
     * Tool_RigidBody.Apply_Linear_Impulse(node, v2(10,0))
     */
    public static Apply_Linear_Impulse(Node_Set: Node, Impulse: Vec2, Point?: Vec2) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.applyLinearImpulse(Impulse, Point || v2(0, 0), true);
    }

    /**
     * 施加扭矩
     * @param Node_Set 目标节点
     * @param Torque 扭矩
     * @example
     * Tool_RigidBody.Apply_Torque(node, 5)
     */
    public static Apply_Torque(Node_Set: Node, Torque: number) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.applyTorque(Torque, true);
    }

    /**
     * 唤醒刚体
     * @param Node_Set 目标节点
     * @example
     * Tool_RigidBody.Wake_Up(node)
     */
    public static Wake_Up(Node_Set: Node) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.wakeUp();
    }

    /**
     * 休眠刚体
     * @param Node_Set 目标节点
     * @example
     * Tool_RigidBody.Sleep(node)
     */
    public static Sleep(Node_Set: Node) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.sleep();
    }

    /**
     * 判断刚体是否休眠
     * @param Node_Set 目标节点
     * @returns boolean
     * @example
     * Tool_RigidBody.Is_Sleeping(node)
     */
    public static Is_Sleeping(Node_Set: Node): boolean {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return false;
        return Component_RigidBody2D.isAwake() === false;
    }

    /**
     * 重置刚体速度（线性和角速度都归零）
     * @param Node_Set 目标节点
     * @example
     * Tool_RigidBody.Reset_Velocity(node)
     */
    public static Reset_Velocity(Node_Set: Node) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.linearVelocity = v2(0, 0);
        Component_RigidBody2D.angularVelocity = 0;
    }

    /**
     * 设置刚体类型（0:动态 1:静态 2:运动学）
     * @param Node_Set 目标节点
     * @param Type 类型 0:Dynamic 1:Static 2:Kinematic
     * @example
     * Tool_RigidBody.Set_Body_Type(node, 0)
     */
    public static Set_Body_Type(Node_Set: Node, Type: number) {
        let Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);
        if (!Component_RigidBody2D) return;
        Component_RigidBody2D.type = Type;
    }
}


