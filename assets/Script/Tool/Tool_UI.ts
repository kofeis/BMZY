import { _decorator, Component, Constructor, find, isValid, Node, sys, UITransform, v3, Vec3, view, Widget, Prefab, instantiate, Sprite, SpriteFrame, Color, color, UIOpacity, Layers, Label, Texture2D, Rect } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tool_UI')
export class Tool_UI extends Component {

    public static readonly instance = new Tool_UI();

    /**获取组件 */
    Component_Get<T extends Component>(Node_Set: Node, Class_Constructor: Constructor<T>): T | null {
        if (!Node_Set || !isValid(Node_Set, true)) {
            return null;
        }
        let Component = Node_Set.getComponent(Class_Constructor);
        if (!Component) {
            Component = Node_Set.addComponent(Class_Constructor);
        }
        return Component;
    }

    /**检查组件 */
    Component_Check<T extends Component>(Node_Set: Node, Class_Constructor: Constructor<T>): boolean {
        if (!Node_Set || !isValid(Node_Set, true)) {
            return false;
        }
        let Component = Node_Set.getComponent(Class_Constructor);
        if (!Component) {
            return false;
        }
        return true;
    }

    /**启用组件 */
    Component_On<T extends Component>(Node_Set: Node, Class_Constructor: Constructor<T>) {
        let Component = this.Component_Get(Node_Set, Class_Constructor);
        Component.enabled = true;
    }

    /**禁用组件 */
    Component_Off<T extends Component>(Node_Set: Node, Class_Constructor: Constructor<T>) {
        let Component = this.Component_Get(Node_Set, Class_Constructor);
        Component.enabled = false;
    }

    /**获取 运行 平台 */
    Get_Platform() {
        return sys.platform;
        switch (sys.platform) {
            case sys.Platform.UNKNOWN:
                console.log("[Platform] 未知平台");
                return "UNKNOWN";
            case sys.Platform.EDITOR_PAGE:
                console.log("[Platform] Cocos编辑器网页预览模式");
                return "EDITOR_PAGE";
            case sys.Platform.EDITOR_CORE:
                console.log("[Platform] Cocos编辑器核心模式");
                return "EDITOR_CORE";
            case sys.Platform.MOBILE_BROWSER:
                console.log("[Platform] 移动端浏览器");
                return "MOBILE_BROWSER";
            case sys.Platform.DESKTOP_BROWSER:
                console.log("[Platform] PC浏览器");
                return "DESKTOP_BROWSER";
            case sys.Platform.WIN32:
                console.log("[Platform] Windows系统");
                return "WIN32";
            case sys.Platform.ANDROID:
                console.log("[Platform] Android设备");
                return "ANDROID";
            case sys.Platform.IOS:
                console.log("[Platform] iOS设备");
                return "IOS";
            case sys.Platform.MACOS:
                console.log("[Platform] macOS系统");
                return "MACOS";
            case sys.Platform.OHOS:
                console.log("[Platform] 鸿蒙系统(旧版)");
                return "OHOS";
            case sys.Platform.OPENHARMONY:
                console.log("[Platform] OpenHarmony系统");
                return "OPENHARMONY";
            case sys.Platform.WECHAT_GAME:
                console.log("[Platform] 微信小游戏");
                return "WECHAT_GAME";
            case sys.Platform.WECHAT_MINI_PROGRAM:
                console.log("[Platform] 微信小程序");
                return "WECHAT_MINI_PROGRAM";
            case sys.Platform.XIAOMI_QUICK_GAME:
                console.log("[Platform] 小米快游戏");
                return "XIAOMI_QUICK_GAME";
            case sys.Platform.ALIPAY_MINI_GAME:
                console.log("[Platform] 支付宝小游戏");
                return "ALIPAY_MINI_GAME";
            case sys.Platform.BYTEDANCE_MINI_GAME:
                console.log("[Platform] 字节跳动小游戏");
                return "BYTEDANCE_MINI_GAME";
            case sys.Platform.OPPO_MINI_GAME:
                console.log("[Platform] OPPO小游戏");
                return "OPPO_MINI_GAME";
            case sys.Platform.VIVO_MINI_GAME:
                console.log("[Platform] vivo小游戏");
                return "VIVO_MINI_GAME";
            case sys.Platform.HUAWEI_QUICK_GAME:
                console.log("[Platform] 华为快游戏");
                return "HUAWEI_QUICK_GAME";
            case sys.Platform.MIGU_MINI_GAME:
                console.log("[Platform] 咪咕快游");
                return "MIGU_MINI_GAME";
            case sys.Platform.HONOR_MINI_GAME:
                console.log("[Platform] 荣耀小游戏");
                return "HONOR_MINI_GAME";
            default:
                console.warn("[Platform] 未识别的平台:", sys.platform);
                return "UNRECOGNIZED";
        }
    }
    /**
    * 检查是否是微信平台（小游戏或小程序）
    */
    public isWechatPlatform(): boolean {
        return sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM;
    }
    /**
     * 检查是否是移动端
     */
    public isMobile(): boolean {
        return [
            sys.Platform.MOBILE_BROWSER,
            sys.Platform.ANDROID,
            sys.Platform.IOS,
            sys.Platform.OHOS,
            sys.Platform.OPENHARMONY
        ].indexOf(sys.platform) !== -1;
    }
    /**
     * 检查是否是原生平台
     */
    public isNative(): boolean {
        return [
            sys.Platform.ANDROID,
            sys.Platform.IOS,
            sys.Platform.WIN32,
            sys.Platform.MACOS,
            sys.Platform.OHOS,
            sys.Platform.OPENHARMONY
        ].indexOf(sys.platform) !== -1;
    }

    /**获取 设计 高度 */
    Get_Height_Design() {
        return view.getDesignResolutionSize().height;
    }
    /**获取 设计 宽度 */
    Get_Width_Design() {
        return view.getDesignResolutionSize().width;
    }
    /**获取 可见 高度 */
    Get_Height_Visible() {
        return view.getVisibleSize().height;
        return find("Canvas").getComponent(UITransform).height;
    }
    /**获取 可见 宽度 */
    Get_Width_Visible() {
        return view.getVisibleSize().width;
        return find("Canvas").getComponent(UITransform).width;
    }

    /**获取 节点 是否 有效 */
    Get_Node_Is_Valid(Node_Set: Node, Strict_Mode?: boolean) {
        return isValid(Node_Set);
    }

    /**获取触摸坐标 */
    Get_Touch_Position(Event: any): Vec3 {
        // 设计分辨率
        const HalfScreenWidth = this.Get_Width_Design() / 2;
        const HalfScreenHeight = this.Get_Height_Design() / 2;
        // 工具函数：计算触摸位置相对于屏幕中心的位置
        return v3(
            Event.getUILocation().x - HalfScreenWidth,
            Event.getUILocation().y - HalfScreenHeight,
            0
        );
    }

    /**设置精灵帧 */
    Set_SpriteFrame(Node_Set: Node, Sprite_Frame: SpriteFrame | null) {
        let Component_Sprite = this.Component_Get(Node_Set, Sprite);
        Component_Sprite.spriteFrame = Sprite_Frame;
    }

    /**设置精灵颜色 */
    Set_Color_Sprite(Node_Set: Node, Sprite_Color: Color = color(255, 255, 255, 255)) {
        let Component_Sprite = this.Component_Get(Node_Set, Sprite);
        Component_Sprite.color = Sprite_Color;
    }

    Set_Color_Label(Node_Set: Node, Sprite_Color: Color = color(255, 255, 255, 255)) {
        let Component_Label = this.Component_Get(Node_Set, Label);
        Component_Label.color = Sprite_Color;
    }

    /**设置不透明度 */
    Set_UIOpacity(Node_Set: Node, Opacity: number = 255) {
        let Component_UIOpacity = this.Component_Get(Node_Set, UIOpacity);
        Component_UIOpacity.opacity = Opacity;
    }

    /**设置节点坐标 */
    Set_Pos(Node_Set: Node, Pos: Vec3) {
        Node_Set.setPosition(Pos);
        Node_Set.updateWorldTransform();
    }
    /**设置节点 X 坐标 */
    Set_Pos_X(Node_Set: Node, X: number) {
        Node_Set.setPosition(v3(X, Node_Set.position.y, Node_Set.position.z));
        Node_Set.updateWorldTransform();
    }
    /**设置节点 Y 坐标 */
    Set_Pos_Y(Node_Set: Node, Y: number) {
        Node_Set.setPosition(v3(Node_Set.position.x, Y, Node_Set.position.z));
        Node_Set.updateWorldTransform();
    }
    /**设置节点 Z 坐标 */
    Set_Pos_Z(Node_Set: Node, Z: number) {
        Node_Set.setPosition(v3(Node_Set.position.x, Node_Set.position.y, Z));
        Node_Set.updateWorldTransform();
    }

    /**设置坐标一致 */
    Set_Pos_Word_Same(Node_Set: Node, Target_Node: Node) {
        Node_Set.position = this.Get_Target_Node_Local_Pos(Node_Set, Target_Node);
        Node_Set.updateWorldTransform();
    }

    /**
     * 获取 Target_Node 相对于 Node_Set 的局部坐标
     * @param Node_Set 参考节点（局部坐标系的参考点）
     * @param Target_Node 目标节点（需要获取其局部坐标的节点）
     * @returns 返回 Target_Node 相对于 Node_Set 的局部坐标（Vec3）
     */
    Get_Target_Node_Local_Pos(Node_Set: Node, Target_Node: Node): Vec3 {
        // 获取 Target_Node 的世界坐标
        const Target_World_Pos = Target_Node.worldPosition;
        // 将世界坐标转换为 Node_Set 的局部坐标
        const Local_Pos = Node_Set.parent ? Node_Set.parent.getComponent(UITransform).convertToNodeSpaceAR(Target_World_Pos) : Target_World_Pos;
        return Local_Pos;
    }


    /**获取分割后的精灵数组 */
    Get_Split_SpriteFrame_Array(spriteFrame: SpriteFrame, rows: number, cols: number): SpriteFrame[] {
        const spriteFrames: SpriteFrame[] = [];
        const tex = spriteFrame.texture as Texture2D;
        const texWidth = tex.width;
        const texHeight = tex.height;
        const frameWidth = texWidth / cols;
        const frameHeight = texHeight / rows;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const rect = new Rect(col * frameWidth, row * frameHeight, frameWidth, frameHeight);
                const newSpriteFrame = new SpriteFrame();
                newSpriteFrame.texture = tex;
                newSpriteFrame.rect = rect;
                spriteFrames.push(newSpriteFrame);
            }
        }
        return spriteFrames;
    }

    /**添加 */
    Pool_Put(Node_Set: Node) {
        this.Set_UIOpacity(Node_Set, 0);
        if (this.Component_Check(Node_Set, Widget)) {
            this.Component_Off(Node_Set, Widget);
        }
        this.Set_Pos(Node_Set, v3(99999, 99999, 99999));
    }

    /**获取 */
    Pool_Get(Node_Set: Node) {
        this.Set_UIOpacity(Node_Set, 255);
        if (this.Component_Check(Node_Set, Widget)) {
            this.Component_On(Node_Set, Widget);
        }
        this.Set_Pos(Node_Set, v3(0, 0, 0));
    }

    /**
     * 判断两个三维坐标是否一致（考虑浮点数精度）
     * @param Pos 第一个坐标（Vec3 类型）
     * @param Pos_Target 第二个坐标（Vec3 类型）
     * @param precision 精度范围，默认为 0.0001
     * @returns 如果两个坐标在精度范围内一致，返回 true；否则返回 false
     */
    Get_Pos_Is_Equal(Pos: Vec3, Pos_Target: Vec3, precision: number = 0.0001): boolean {
        return (
            this.FloatIs_Equal(Pos.x, Pos_Target.x, precision) &&
            this.FloatIs_Equal(Pos.y, Pos_Target.y, precision) &&
            this.FloatIs_Equal(Pos.z, Pos_Target.z, precision)
        );
    }

    /**
     * 判断两个浮点数是否在精度范围内相等
     * @param a 第一个数
     * @param b 第二个数
     * @param precision 精度范围，默认为 0.0001
     * @returns 如果两个数在精度范围内相等，返回 true；否则返回 false
     */
    FloatIs_Equal(A: number, B: number, Precision: number = 0.0001): boolean {
        return Math.abs(A - B) < Precision;
    }


    /**节点 索引 设置 */
    Node_Index_Set(Node_Set: Node, Index: number) {
        let Lenth = Node_Set.parent.children.length - 1;
        Index = Math.min(Lenth, Index);;
        if (Index >= 0) {
            Node_Set.setSiblingIndex(Index);
        } else {
            Node_Set.setSiblingIndex(Lenth);
        }
    }
    /**节点 索引 交换 */
    Node_Index_Swap(Node_1: Node, Node_2: Node): void {
        // 检查两个节点是否有相同的父节点
        if (Node_1.parent !== Node_2.parent) {
            return;
        }
        // 获取两个节点的当前层级索引
        const Index_1 = Node_1.getSiblingIndex();
        const Index_2 = Node_2.getSiblingIndex();
        // 索引相同，无需交换
        if (Index_1 === Index_2) {
            return;
        }
        // 交换两个节点的层级索引
        Node_1.setSiblingIndex(Index_2);
        Node_2.setSiblingIndex(Index_1);
    }




    /** 数组 元素 增加 */
    Arr_Increase<T>(Arrays: T[], Element: T) {
        Arrays.push(Element);
    }

    /** 数组 元素 批量增加 */
    Arr_Increase_Multiple<T>(Arrays: T[], Elements: T[]) {
        Arrays.push(...Elements);
    }

    /** 数组 元素 删除 */
    Arr_Delete<T>(Arrays: T[], Element: T) {
        const Index = this.Arr_Check_Index(Arrays, Element);
        if (Index === -1) {
            return;
        }
        Arrays.splice(Index, 1);
    }

    /** 数组 元素 修改 */
    Arr_Revise<T>(Arrays: T[], Element_Old: T, Element_New: T | null) {
        const Index = this.Arr_Check_Index(Arrays, Element_Old);
        if (Index === -1) {
            return;
        }
        Arrays[Index] = Element_New;
    }

    /** 数组 元素 查找 索引 */
    Arr_Check_Index<T>(Arrays: T[], Element: T): number {
        return Arrays.indexOf(Element);
    }

    /** 数组 元素 过滤 */
    Arr_Filter<T>(Arrays: T[], predicate: (Element: T) => boolean): T[] {
        return Arrays.filter(predicate);
    }

    /** 数组 元素 合并 */
    Arr_Merge<T>(Arrays_A: T[], Arrays_B: T[]): T[] {
        return [...Arrays_A, ...Arrays_B];
    }

    /** 数组 元素 交换位置 */
    Arr_Swap<T>(Arrays: T[], Element_A: T, Element_B: T) {
        const Index_A = this.Arr_Check_Index(Arrays, Element_A);
        const Index_B = this.Arr_Check_Index(Arrays, Element_B);
        if (Index_A === -1 || Index_B === -1) {
            return;
        }
        [Arrays[Index_A], Arrays[Index_B]] = [Arrays[Index_B], Arrays[Index_A]];
    }


    /**隐藏节点子节点 */
    Hide_Node_Children(Node_Set: Node) {
        Node_Set.children.forEach(Node_Set => {
            Node_Set.active = false;
        });
    }
    /** 
     * 隐藏节点子节点 
     * @param {Node} Node_Set - 要隐藏的节点 
     * @param {Node[]} Except_Node - 不隐藏的节点 
     */
    Hide_Node_Children_Except(Node_Set: Node, Except_Node: Node[]) {
        Node_Set.children.forEach(element => {
            for (let i = 0; i < Except_Node.length; i++) {
                element.active = Except_Node.indexOf(element) !== -1;
            }
        });
    }



    /**
     *@param 设置预制体节点
     *@param Prefab 预制体
     *@param Parent_Node 父节点
     *@param Position 坐标
     *@param Name 名字
     *@param Call 回调
     *@returns 返回此预制体
     */
    Set_Prefab_Node(Prefab: Prefab, Parent_Node: Node, Position: Vec3 | Node, Name?: string | number, Call: Function = () => { }) {
        const Node_Prefab: Node = instantiate(Prefab);
        Node_Prefab.parent = Parent_Node;
        // 如果 Name 有值，就赋值，否则不做任何操作
        Name && (Node_Prefab.name = Name.toString());
        if (Position instanceof Vec3) {
            this.Set_Pos(Node_Prefab, Position);
        } else {
            this.Set_Pos_Word_Same(Node_Prefab, Position);
        }
        Call?.();
        return Node_Prefab;
    }

    /**设置世界坐标 */
    Set_Pos_Word(Set_Pos: Vec3, Target_Node: Node) {
        Target_Node.setWorldPosition(Set_Pos);
    }
    /**获取世界坐标 */
    Get_Pos_Word(Target_Node: Node) {
        return Target_Node.getWorldPosition(Target_Node.position);
    }












}


