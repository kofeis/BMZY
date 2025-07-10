// import { _decorator, Component, Node, Vec2, Vec3, tween, v3, Sprite, UITransform, color, Rect, Label, sys, Prefab, SpriteFrame, instantiate, Texture2D, Material, log, Color, view, Animation, sp, Tween, Button, NodeEventType, director, macro, input, Input, Constructor, UIOpacity, __private, AnimationState, assetManager, AudioClip, AudioSource, isValid } from 'cc';
// const { ccclass, property } = _decorator;
// @ccclass('Tool_Script')
// export class Tool_Script extends Component {
//     public static readonly instance = new Tool_Script();
//     /**
//      * 数据区
//      * 事件区
//      * 功能区
//      * 动画区
//      * 其他区
//      */
//     /**
//      *@param 数据保存本地
//      *@Data_Name 待保存数据的名字
//      *@Data_Name 待保存的数据
//      */
//     Set_Data(Data_Name: string, Data) {
//         sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
//     }
//     /**
//      *@param 读取本地数据
//      *@Data_Name 待读取数据的名字
//      */
//     Get_Data(Data_Name: string) {
//         let Data = sys.localStorage.getItem(Data_Name);
//         return JSON.parse(Data);
//     }
//     /**延时等待 */
//     Delay_Time(Time: number): Promise<void> {
//         return new Promise((resolve, reject) => {
//             this.scheduleOnce(() => {
//                 resolve();
//             }, Time);
//         })
//     }
//     /**获取组件 */
//     Get_Component<T extends Component>(Get_Node: Node, Class_Constructor: Constructor<T>): T | null {
//         if (!Get_Node || !Get_Node.isValid) return null;
//         let component = Get_Node.getComponent(Class_Constructor);
//         if (!component)
//             component = Get_Node.addComponent(Class_Constructor);
//         return component;
//     }
//     /**获取Target_Node在Set_Node坐标系下的本地坐标 */
//     Get_Pos_Local(Set_Node: Node, Target_Node: Node) {
//         // 获取Target_Node的世界坐标
//         const Pos_World = Target_Node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
//         // 将Set_Node的世界坐标转换为Target_Node的本地坐标
//         const Pos_Local = Set_Node.parent.getComponent(UITransform).convertToNodeSpaceAR(Pos_World);
//         return Pos_Local;
//     }
//     /**
//      * 设置父节点
//      * @param Set_Node 设置的节点
//      * @param Parent_Node 原父节点
//      * @param Target_Node 新父节点
//      */
//     Set_Parent(Set_Node: Node, Parent_Node: Node, Target_Node: Node) {
//         //设置父节点
//         Set_Node.parent = Target_Node;
//         //获取Set_Node世界坐标
//         const Pos_World = Parent_Node.getComponent(UITransform).convertToWorldSpaceAR(Set_Node.position);
//         //将世界坐标转换本地坐标
//         const Pos_Local = Set_Node.parent.getComponent(UITransform).convertToNodeSpaceAR(Pos_World);
//         console.log(Pos_Local);
//         Set_Node.position = Pos_Local;
//     }
//     /**设置坐标一致 */
//     Set_Pos_Word_Same(Set_Node: Node, Target_Node: Node) {
//         Set_Node.setWorldPosition(this.Get_Pos_Word(Target_Node));
//     }
//     /**设置世界坐标 */
//     Set_Pos_Word(Set_Pos: Vec3, Target_Node: Node) {
//         Target_Node.setWorldPosition(Set_Pos);
//     }
//     /**获取世界坐标 */
//     Get_Pos_Word(Target_Node: Node) {
//         return Target_Node.getWorldPosition(Target_Node.position);
//     }
//     /**监听触摸开始 */
//     On_Btn_TOUCH_START(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.TOUCH_START, Call, Node);
//     }
//     /**监听触摸结束 */
//     On_Btn_TOUCH_END(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.TOUCH_END, Call, Node);
//     }
//     /**监听触摸取消 */
//     On_Btn_TOUCH_CANCEL(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.TOUCH_CANCEL, Call, Node);
//     }
//     /**监听触摸移动 */
//     On_Btn_TOUCH_MOVE(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.TOUCH_MOVE, Call, Node);
//     }
//     /**监听触摸按住
//      * @param Set_Node 监听节点
//      * @param Response_Time 按住时长
//      * @param Id 缓动Id
//      * @param Pressing_Call 按住回调
//      * @param Pressend_Call 松开
//      */
//     On_Btn_TOUCH_Pressing(Set_Node: Node, Response_Time: number, Id: number = 100, Pressing_Call: Function = () => { }, Pressend_Call: Function = () => { }) {
//         Set_Node.on(NodeEventType.TOUCH_START, () => {
//             let startObj = { num: 0 };
//             let endObj = { num: 100 };
//             tween(startObj)
//                 .to(Response_Time, endObj, {
//                     progress: (start: number, end: number, current: number, ratio: number): number => {
//                         return ratio;
//                     }
//                 })
//                 .tag(Id)
//                 .call(() => {
//                     Pressing_Call && Pressing_Call();
//                 })
//                 .start();
//         }, Set_Node);
//         Set_Node.on(NodeEventType.TOUCH_END, () => {
//             this.Stop_Tween_Tag(Id);
//             Pressend_Call && Pressend_Call();
//         }, Node);
//         Set_Node.on(NodeEventType.TOUCH_CANCEL, () => {
//             this.Stop_Tween_Tag(Id);
//             Pressend_Call && Pressend_Call();
//         }, Set_Node);
//         Set_Node.on(NodeEventType.TOUCH_MOVE, (Event) => {
//             // 获取浏览器窗口可见区域尺寸
//             // let Screen_Width = window.innerWidth;
//             // let Screen_Height = window.innerHeight;
//             // let Touch_Pos = v3(Event.getUILocation().x - Screen_Width / 2, Event.getUILocation().y - Screen_Height / 2, Event.getUILocation().z);
//             // console.log(Touch_Pos);
//             this.Stop_Tween_Tag(Id);
//             Pressend_Call && Pressend_Call();
//         }, Node);
//     }
//     /**监听触摸双击
//      * @param Set_Node 监听节点
//      * @param Touch_Count_All 触摸总次数
//      * @param Touch_Interval 触摸间隔
//      * @param Id 缓动Id
//      * @param Double_On_Call 双击回调
//      * @param Double_Off_Call 松开回调
//      */
//     On_Btn_TOUCH_Double(Set_Node: Node, Touch_Count_All: number, Touch_Interval: number = 0.25, Id: number = 101, Double_On_Call: Function = () => { }, Double_Off_Call: Function = () => { }) {
//         let Touch_Count: number = 0;
//         Set_Node.on(NodeEventType.TOUCH_START, () => {
//             this.Stop_Tween_Tag(Id);
//             Touch_Count++;
//             if (Touch_Count == Touch_Count_All) {
//                 Touch_Count = 0;
//                 Double_On_Call && Double_On_Call();
//             }
//             let startObj = { num: 0 };
//             let endObj = { num: 100 };
//             tween(startObj)
//                 .to(Touch_Interval, endObj, {
//                     progress: (start: number, end: number, current: number, ratio: number): number => {
//                         return;
//                     }
//                 })
//                 .tag(Id)
//                 .call(() => {
//                     Touch_Count = 0;
//                 })
//                 .start();
//         }, Set_Node);
//         // Set_Node.on(NodeEventType.TOUCH_END, () => {
//         //     this.Stop_Tween_Tag(101);
//         //     Double_Off_Call && Double_Off_Call();
//         // }, Node);
//         // Set_Node.on(NodeEventType.TOUCH_CANCEL, () => {
//         //     this.Stop_Tween_Tag(101);
//         //     Double_Off_Call && Double_Off_Call();
//         // }, Set_Node);
//     }
//     /**取消触摸监听 */
//     Off_Btn_TOUCH(Node: Node, Call: Function = () => { }) {
//         Node.off(NodeEventType.TOUCH_START, Call, Node);
//         Node.off(NodeEventType.TOUCH_END, Call, Node);
//         Node.off(NodeEventType.TOUCH_CANCEL, Call, Node);
//         Node.off(NodeEventType.TOUCH_MOVE, Call, Node);
//     }
//     /**取消所有触摸监听 */
//     Off_Btn_TOUCH_All(Node: Node) {
//         Node.off(NodeEventType.TOUCH_START);
//         Node.off(NodeEventType.TOUCH_END);
//         Node.off(NodeEventType.TOUCH_CANCEL);
//         Node.off(NodeEventType.TOUCH_MOVE);
//     }
//     /**监听鼠标按下 */
//     On_Btn_MOUSE_DOWN(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_DOWN, Call, Node);
//     }
//     /**监听鼠标松开 */
//     On_Btn_MOUSE_UP(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_UP, Call, Node);
//     }
//     /**监听鼠标移动 */
//     On_Btn_MOUSE_MOVE(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_MOVE, Call, Node);
//     }
//     /**监听鼠标滚动 */
//     On_Btn_MOUSE_WHEEL(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_WHEEL, Call, Node);
//     }
//     /**监听鼠标进入 */
//     On_Btn_MOUSE_ENTER(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_ENTER, Call, Node);
//     }
//     /**监听鼠标移出 */
//     On_Btn_MOUSE_LEAVE(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.MOUSE_LEAVE, Call, Node);
//     }
//     /**监听键盘按下 */
//     On_KEY_DOWN(Call: Function = () => { }) {
//         input.on(Input.EventType.KEY_DOWN, Call(), this);
//     }
//     /**监听键盘按住 */
//     On_KEY_PRESSING(Call: Function = () => { }) {
//         input.on(Input.EventType.KEY_PRESSING, Call(), this);
//     }
//     /**监听键盘松开 */
//     On_KEY_UP(Call: Function = () => { }) {
//         input.on(Input.EventType.KEY_UP, Call(), this);
//     }
//     /**监听重力感应 */
//     On_Sys_DEVICEMOTION(Node: Node, Call: Function = () => { }) {
//         Node.on(Input.EventType.DEVICEMOTION, Call, Node);
//     }
//     /**设置按钮事件
//      * @Set_Node 待设置的节点
//      * @Target_Node 目标节点
//      * @Component 脚本/组件名
//      * @Handler  响应事件函数名
//      */
//     Set_Btn_Event_Add(Set_Node: Node, Target_Node: Node, Scr_Name: string, Fun_Name: string, CustomEventData = null) {
//         let Btn = Set_Node.getComponent(Button);
//         if (!this.Get_Type_Is_Abnormal(Btn)) {
//             Btn = Set_Node.addComponent(Button);
//         }
//         let Opacity = Set_Node.getComponent(UIOpacity);
//         if (!this.Get_Type_Is_Abnormal(Opacity)) {
//             Set_Node.addComponent(UIOpacity);
//         }
//         let Event = new Component.EventHandler();
//         Event.target = Target_Node;
//         Event.component = Scr_Name;
//         Event.handler = Fun_Name;
//         Event.customEventData = CustomEventData;
//         Btn.clickEvents.push(Event);
//         console.info(Btn.clickEvents);
//     }
//     /**设置按钮动画
//      * @Anim_Switch 动画开关 
//      */
//     Set_Btn_Event_Anim(Set_Node: Node, Anim_Switch: boolean = false) {
//         let Btn = Set_Node.getComponent(Button);
//         if (!this.Get_Type_Is_Abnormal(Btn)) {
//             Btn = Set_Node.addComponent(Button);
//         }
//         let Opacity = Set_Node.getComponent(UIOpacity);
//         if (!this.Get_Type_Is_Abnormal(Opacity)) {
//             Set_Node.addComponent(UIOpacity);
//         }
//         if (Anim_Switch) {
//             this.Off_Btn_TOUCH(Set_Node);
//             Btn.transition = 0;
//             let Anim_State = false;
//             Set_Node.off(NodeEventType.TOUCH_START, () => {
//                 if (Anim_State) {
//                     return;
//                 }
//                 Anim_State = true;
//                 Anim_On(Set_Node);
//             }, Set_Node);
//             this.On_Btn_TOUCH_START(Set_Node, () => {
//                 if (Anim_State) {
//                     return;
//                 }
//                 Anim_State = true;
//                 Anim_On(Set_Node);
//             })
//             this.On_Btn_TOUCH_END(Set_Node, () => {
//                 if (!Anim_State) {
//                     return;
//                 }
//                 Anim_State = false;
//                 Anim_Off(Set_Node);
//             })
//             this.On_Btn_TOUCH_CANCEL(Set_Node, () => {
//                 if (!Anim_State) {
//                     return;
//                 }
//                 Anim_State = false;
//                 Anim_Off(Set_Node);
//             })
//             this.On_Btn_TOUCH_MOVE(Set_Node, (Event) => {
//                 // console.log(Event.getUILocation());
//                 // console.log(Event);
//                 let Target_Width = Event.target.getComponent(UITransform).width;
//                 let Target_Height = Event.target.getComponent(UITransform).height;
//                 let Touch_Pos_World = v3(Event.getUILocation().x, Event.getUILocation().y, Event.getUILocation().z);
//                 let Target_Pos_World = Event.target.getWorldPosition();
//                 if (Touch_Pos_World.x < Target_Pos_World.x - Target_Width / 2 || Touch_Pos_World.x > Target_Pos_World.x + Target_Width / 2 || Touch_Pos_World.y < Target_Pos_World.y - Target_Height / 2 || Touch_Pos_World.y > Target_Pos_World.y + Target_Height / 2) {
//                     if (!Anim_State) {
//                         return;
//                     }
//                     Anim_State = false;
//                     Anim_Off(Set_Node);
//                 } else {
//                     if (Anim_State) {
//                         return;
//                     }
//                     Anim_State = true;
//                     Anim_On(Set_Node);
//                 }
//             })
//         } else {
//             Btn.transition = 3;
//             Btn.zoomScale = 0.975;
//             Btn.duration = 0.05;
//         }
//         // function Anim_On(Set_Node) {
//         //     console.log("按下");
//         //     let Time = 0.25;
//         //     tween(Set_Node)
//         //         .to(Time, { scale: v3(0.8, 0.8, 1) })
//         //         .start();
//         //     tween(Set_Node.getComponent(UIOpacity))
//         //         .to(Time, { opacity: 100 })
//         //         .start();
//         // }
//         // function Anim_Off(Set_Node) {
//         //     console.log("松开");
//         //     tween(Set_Node)
//         //         .to(0.17, { scale: v3(1.05, 1.05, 1) })
//         //         .to(0.08, { scale: v3(1, 1, 1) })
//         //         .start();
//         //     tween(Set_Node.getComponent(UIOpacity))
//         //         .to(0.25, { opacity: 255 })
//         //         .start();
//         // }
//         function Anim_On(Set_Node) {
//             console.log("按下");
//             let Time = 0.15;
//             tween(Set_Node)
//                 .to(Time, { scale: v3(0.95, 0.95, 1) })
//                 .start();
//             tween(Set_Node.getComponent(UIOpacity))
//                 .to(Time, { opacity: 200 })
//                 .start();
//         }
//         function Anim_Off(Set_Node) {
//             console.log("松开");
//             tween(Set_Node)
//                 .to(0.1, { scale: v3(1.05, 1.05, 1) })
//                 .to(0.05, { scale: v3(1, 1, 1) })
//                 .start();
//             tween(Set_Node.getComponent(UIOpacity))
//                 .to(0.15, { opacity: 255 })
//                 .start();
//         }
//     }
//     /**重置按钮组件 */
//     Set_Btn_Event_Reset(Node: Node) {
//         let Btn = Node.getComponent(Button);
//         if (!this.Get_Type_Is_Abnormal(Btn)) { return }
//         Btn.resetInEditor();
//     }
//     // /**注册场景监听 */
//     // On_Screen() {
//     //     const CurrentScene = director.getScene();
//     //     CurrentScene.on('window-resize', this.On_Window_Resize, this);
//     //     CurrentScene.on('orientation-change', this.On_Orientation_Change, this);
//     //     CurrentScene.on('fullscreen-change', this.On_Full_ScreenChange, this);
//     // }
//     // /**注销场景监听 */
//     // Off_Screen() {
//     //     const CurrentScene = director.getScene();
//     //     CurrentScene.off('window-resize', this.On_Window_Resize, this);
//     //     CurrentScene.off('orientation-change', this.On_Orientation_Change, this);
//     //     CurrentScene.off('fullscreen-change', this.On_Full_ScreenChange, this);
//     // }
//     // /**监听窗口大小变化
//     //  * @p 支持平台:网页、原生、小游戏
//     //  */
//     // On_Window_Resize(Width: number, Height: number) {
//     //     console.log("Window resized:");
//     //     console.log("Width", Width);
//     //     console.log("Height", Height);
//     // }
//     // /**监听屏幕方向变化
//     //  * @p 支持平台:网页、原生
//     //  */
//     // On_Orientation_Change(orientation: number) {
//     //     if (orientation === macro.ORIENTATION_LANDSCAPE_LEFT || orientation === macro.ORIENTATION_LANDSCAPE_RIGHT) {
//     //         console.log("Orientation changed to landscape:", orientation);//横屏
//     //     } else {
//     //         console.log("Orientation changed to portrait:", orientation);//竖屏
//     //     }
//     // }
//     /**监听全屏变化
//      * @p 支持平台:网页
//      */
//     On_Full_ScreenChange(Width: number, Height: number) {
//         console.log("Fullscreen change:");
//         console.log("Width", Width);
//         console.log("Height", Height);
//     }
//     /**监听激活状态 */
//     On_Node_Active_State(Node: Node, Call: Function = () => { }) {
//         Node.on(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, Call, Node);
//     }
//     //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     /**获取闭区间[Min,Max]内的随机数*/
//     Get_Random_Int(Min: number, Max: number): number {
//         Min = Math.ceil(Min);
//         Max = Math.floor(Max);
//         return Math.floor(Math.random() * (Max - Min + 1)) + Min;
//     }
//     /** 获取闭区间 [Min, Max] 内的数组 Arr 外的随机数，如果不存在返回 -1；
//      * @param Min 最小数
//      * @param Max 最大数
//      * @param Arr 数组
//      * @example Get_Random_Int_Plus(0, 6, [1, 2, 3, 4]); // return 0/5/6
//      */
//     Get_Random_Int_Plus(Min: number, Max: number, Arr: number[]): number {
//         // 将数组 Arr 转换为 Set，以便快速查找
//         const excludedNumbers = new Set(Arr);
//         const availableNumbers: number[] = [];
//         // 收集可用的数字
//         for (let i = Min; i <= Max; i++) {
//             if (!excludedNumbers.has(i)) {
//                 availableNumbers.push(i);
//             }
//         }
//         // 如果没有可用的数字，返回 -1
//         if (availableNumbers.length === 0) {
//             return -1;
//         } else {
//             // 获取随机索引并返回对应的随机数
//             const randomIndex = this.Get_Random_Int(0, availableNumbers.length - 1);
//             return availableNumbers[randomIndex];
//         }
//     }
//     /**
//      *获取一组不重复的数据
//      *@param Min 最小数
//      *@param Max 最大数
//      *@param Lenth 数组长度
//      */
//     Get_Random_Number_Array(Min: number, Max: number, Length: number): number[] {
//         // 确保 Length 不超过可用范围
//         Length = Math.min(Length, (Max - Min) + 1);
//         const result: Set<number> = new Set(); // 使用 Set 来避免重复
//         while (result.size < Length) {
//             const randomNum = this.Get_Random_Int(Min, Max);
//             result.add(randomNum); // Set 会自动处理重复
//         }
//         return Array.from(result); // 将 Set 转换为数组
//     }
//     /**
//      *@param 获取一个预制体
//      *@param Prefab 预制体
//      *@param Parent_Node 父节点
//      *@param Position 坐标
//      *@param SpriteFrame 精灵框架
//      *@param Call 回调
//      *@returns 返回此预制体
//      */
//     Get_Prefab_Plus(Prefab: Prefab, Parent_Node: Node, Position: Vec3, SpriteFrame: SpriteFrame, Call: Function = () => { }) {
//         let Node: Node = instantiate(Prefab);
//         Node.parent = Parent_Node;
//         if (SpriteFrame != null) {
//             Node.getComponent(Sprite).spriteFrame = SpriteFrame;
//         }
//         Node.setPosition(Position);
//         Call && Call();
//         return Node;
//     }
//     //时间--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     /**秒数转时间字符串 */
//     Seconds_To_Time_String(Seconds: number): string {
//         const Hours = Math.floor(Seconds / 3600);
//         const Minutes = Math.floor((Seconds % 3600) / 60);
//         const Secs = Seconds % 60;
//         // 手动格式化为两位数
//         let FormattedHours = (Hours < 10 ? '0' : '') + Hours + ":";
//         if (Hours == 0) {
//             FormattedHours = "";
//         }
//         let FormattedMinutes = (Minutes < 10 ? '0' : '') + Minutes + ":";
//         let FormattedSeconds = (Secs < 10 ? '0' : '') + Secs;
//         return `${FormattedHours}${FormattedMinutes}${FormattedSeconds}`;
//     }
//     //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     /**替换字符串中的所有字符
//      *@将Str0中的Str1替换为Str2
//      */
//     Replace_All_Chars_InString(Str0: string, Str1: string, Str2: string): string {
//         return Str0.replace(new RegExp(Str1, 'g'), Str2);
//     }
//     //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     //动画区
//     /**播放帧动画
//      * @param Name 动画名字
//      * @param Min_Range 播放范围
//      * @param Max_Range 播放范围
//      * @param Speed 播放速率
//      * @param WrapMode 循环方式
//      * @param RepeatCount 重复次数
//      * @param Delay 延时时间
//      * @param Call 回调
//      */
//     Anim_Frame_Play(Anim: Animation, Name: string = null, Speed: number = 1, Min_Range: number = null, Max_Range: number = null, WrapMode: __private._cocos_animation_types__WrapMode = null, RepeatCount: number = null, Delay: number = 0, Call: Function = () => { }) {
//         if (Name == null) {
//             if (Anim.defaultClip) {
//                 Name = Anim.defaultClip.name;
//             } else {
//                 console.error("动画缺失");
//                 return;
//             }
//         }
//         let State: AnimationState = Anim.getState(Name);
//         if (WrapMode != null) {
//             State.wrapMode = WrapMode;
//         }
//         if (RepeatCount != null) {
//             State.repeatCount = RepeatCount;
//         }
//         if (Min_Range != null && Max_Range != null && Min_Range <= Max_Range) {
//             State.playbackRange = {
//                 min: Min_Range,
//                 max: Max_Range
//             }
//         }
//         State.delay = Delay;
//         State.speed = Speed;
//         Anim.play(Name);
//         Anim.once(Animation.EventType.FINISHED, () => {
//             Call && Call();
//             // Anim.off(Animation.EventType.FINISHED);
//         });
//     }
//     /**切换帧动画 */
//     Anim_Frame_CrossFade(Anim: Animation, Name: string = null, Duration: number = 0, Call: Function = () => { }) {
//         Anim.crossFade(Name, Duration);
//         Anim.once(Animation.EventType.FINISHED, () => {
//             Call && Call();
//         });
//     }
//     /**恢复帧动画 */
//     Anim_Frame_Resume(Anim: Animation, Name: string = null, Speed: number = 1, Min_Range: number = null, Max_Range: number = null, WrapMode: __private._cocos_animation_types__WrapMode = null, RepeatCount: number = null, Delay: number = 0, Call: Function = () => { }) {
//         if (Name == null) {
//             if (Anim.defaultClip) {
//                 Name = Anim.defaultClip.name;
//             } else {
//                 console.error("动画缺失");
//                 return;
//             }
//         }
//         let State: AnimationState = Anim.getState(Name);
//         // console.log("是否已被暂停或停止:", State.isMotionless);
//         // console.log("是否已被暂停:", State.isPaused);
//         // console.log(" 是否正在播放状态", State.isPlaying);
//         if (WrapMode != null) {
//             State.wrapMode = WrapMode;
//         }
//         if (RepeatCount != null) {
//             State.repeatCount = RepeatCount;
//         }
//         if (Min_Range != null && Max_Range != null && Min_Range <= Max_Range) {
//             State.playbackRange = {
//                 min: Min_Range,
//                 max: Max_Range
//             }
//         }
//         State.delay = Delay;
//         State.speed = Speed;
//         if (State.isPlaying) {
//             if (State.isPaused) {
//                 Anim.resume();
//                 Anim.once(Animation.EventType.FINISHED, () => {
//                     Call && Call();
//                 });
//             } else {
//                 this.Anim_Frame_Pause(Anim);
//             }
//         } else {
//             this.Anim_Frame_Play(Anim, Name, Speed, Min_Range, Max_Range, WrapMode, RepeatCount, Delay, Call);
//         }
//     }
//     /**暂停帧动画 */
//     Anim_Frame_Pause(Anim: Animation, Call: Function = () => { }) {
//         Anim.pause();
//         Anim.off(Animation.EventType.FINISHED);
//         Call && Call();
//     }
//     /**停止帧动画 */
//     Anim_Frame_Stop(Anim: Animation, Call: Function = () => { }) {
//         Anim.stop();
//         Anim.off(Animation.EventType.FINISHED);
//         Call && Call();
//     }
//     /**播放骨骼动画 */
//     Anim_Skeleton_Play(Skeleton: sp.Skeleton, Skin: string, Track_Index: number, Anim_Name: string, Loop: boolean, Call: Function = () => { }) {
//         if (Skin == "") {
//             Skin = "default"
//         }
//         Skeleton.setSkin(Skin);
//         //@ts-ignore
//         Skeleton._updateSkeletonData();
//         Skeleton.setAnimation(Track_Index, Anim_Name, Loop);
//         Skeleton.setCompleteListener(() => {
//             Skeleton.setCompleteListener(null);
//             Call && Call();
//         })
//     }
//     /**溶解动画 */
//     async Anim_Dissolve(Set_Node: Node, Time: number = 1, Call: Function = () => { }) {
//         this.Bundles = await this.Load_Bundle("Load");
//         let Set_Material = await this.Load_Material("Effect/dissolve");
//         return new Promise<void>(res => {
//             const Sp = Set_Node.getComponent(Sprite);
//             if (!Sp.customMaterial) Sp.customMaterial = Set_Material;
//             Sp.customMaterial.copy(Set_Material);
//             Sp.customMaterial.setProperty('dissolveThreshold', 0);
//             let startObj = { num: 0 };
//             let endObj = { num: 100 };
//             tween(startObj)
//                 .to(Time, endObj, {
//                     progress: (start: number, end: number, current: number, ratio: number): number => {
//                         const Current_Num = 1 * ratio;//0.3 + 0.7
//                         Sp.customMaterial.setProperty('dissolveThreshold', Current_Num);
//                         return Current_Num;
//                     }
//                 })
//                 .call(() => {
//                     res();
//                     Call && Call();
//                 })
//                 .start();
//         })
//     }
//     /**停止缓动标签 */
//     Stop_Tween_Tag(Id: number, Call = () => { }) {
//         Tween.stopAllByTag(Id);
//         Call && Call();
//     }
//     Delay_Schedule(Delay: number, Id: number, Call = () => { }): void {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(Delay, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     return ratio;
//                 }
//             })
//             .tag(Id)
//             .call(() => {
//                 Call && Call();
//             })
//             .start();
//     }
//     /**数字跳动 */
//     Num_Jump(Label: Label, Value: number, Time: number, Id: number, Call = () => { }) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         Value = Value / 100;
//         tween(startObj)
//             .to(Time, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     Label.string = (Number(ratio) * Value).toFixed(2);
//                     return;
//                 }
//             })
//             .tag(Id)
//             .call(() => {
//                 Call && Call();
//             })
//             .start();
//     }
//     /**动画_节点_移动
//          *@Node 节点
//          *@Position 位置
//          *@Time 速度
//          *@Call 回调函数
//          */
//     Animation_Node_Move(Node: Node, Position: Vec3, Speed: number = 520, Call: Function = () => { }) {
//         let Move_Time: number = this.Get_Move_Time(Speed, Node.position, Position);
//         tween(Node)
//             .to(Move_Time, { position: Position })
//             .call(() => {
//                 Call && Call();
//             })
//             .start();
//     }
//     Animation_Num_Move(Node: Node, Position: Vec3, Time: number = 1, Call: Function = () => { }) {
//         tween(Node)
//             .to(Time, { position: Position })
//             .call(() => {
//                 Call && Call();
//             })
//             .start();
//         // tween(Node)
//         //     .to(Time, { scale: v3(0.4, 0.4, 1) })
//         //     .start();
//     }
//     /**获得移动时间 */
//     Get_Move_Time(Speed: number, Start_Pos: Vec3, Finish_Position: Vec3) {
//         let Dis = this.Get_Distance(Start_Pos, Finish_Position);
//         let Time = Number((Dis / Speed).toFixed(2));
//         return Time;
//     }
//     /**动画_加载效果 
//     *@mask 遮罩
//     *@Bar 进度条
//     *@Schedule 进度
//     *@Time 时间
//     */
//     Animation_Loading(Mask: Node, Bar: Node, Schedule: Label, Time: number = 1, Call = () => { }) {
//         let width = Bar.getComponent(UITransform).width;
//         Bar.position = v3(width, Bar.position.y, Bar.position.z);
//         Mask.position = v3(-width, Mask.position.y, Mask.position.z);
//         tween(Mask)
//             .to(Time, { position: v3(0, Mask.position.y, Mask.position.z) })
//             .start();
//         tween(Bar)
//             .to(Time, { position: v3(0, Bar.position.y, Bar.position.z) })
//             .start();
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(Time, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let Value = (100 * ratio).toFixed(0);
//                     Schedule.string = Value + "%"
//                     return;
//                 }
//             })
//             .call(() => {
//                 Call && Call();
//             })
//             .start();
//     }
//     //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     /**深拷贝 */
//     Copy_Obj = (Obj = {}) => {
//         let New_Obj = null;
//         //判断是否需要继续进行递归
//         if (typeof (Obj) == 'object' && Obj !== null) {
//             New_Obj = Obj instanceof Array ? [] : {};//进行下一层递归克隆
//             for (var i in Obj) {
//                 New_Obj[i] = this.Copy_Obj(Obj[i]) //如果不是对象直接赋值
//             }
//         } else {
//             New_Obj = Obj
//         };
//         return New_Obj;
//     }
//     /**深拷贝 */
//     Copy_Deep<T>(Obj: T): T {
//         if (typeof Obj !== 'object' || Obj === null) {
//             return Obj;
//         }
//         if (Array.isArray(Obj)) {
//             return Obj.map(Item => this.Copy_Deep(Item)) as any;
//         }
//         const Copied_Obj: Partial<T> = {};
//         for (const Key in Obj) {
//             if (Object.prototype.hasOwnProperty.call(Obj, Key)) {
//                 Copied_Obj[Key] = this.Copy_Deep(Obj[Key]);
//             }
//         }
//         return Copied_Obj as T;
//     }
//     /**浅拷贝 */
//     Shallow_Copy<T>(Obj: T): T {
//         if (typeof Obj !== 'object' || Obj === null) {
//             return Obj;
//         }
//         if (Array.isArray(Obj)) {
//             return Obj.slice() as any;
//         }
//         const Copied_Obj = { ...Obj };
//         return Copied_Obj;
//     }
//     /**传入一个网址，浏览器这个网址跳转(相对路径) */
//     Jump_Url(url: string): void {
//         sys.openURL(url);
//     }
//     /**
//      *
//      *@param Url 网址路径
//      *@param Way 打开方式
//      *@param "_blank": 表示在新的标签页中打开链接
//      *@param "_parent"：在父级框架中打开链接。
//      *@param "_top"：在顶级框架中打开链接。
//      */
//     Open_Url(Url: string, Way?): void {
//         if (this.Get_Type_Is_Abnormal(Way)) {
//             window.open(Url, "_blank");
//         } else {
//             window.open(Url, Way);
//         }
//     }
//     /**获取类型是否异常
//      *@true 正常
//      *@false 异常
//      */
//     Get_Type_Is_Abnormal(Value: any): boolean {
//         return Value === null ? false : Value === undefined ? false : true;
//     }
//     /**获取分割后的精灵数组 */
//     Get_Split_SpriteFrame_Array(spriteFrame: SpriteFrame, rows: number, cols: number): SpriteFrame[] {
//         const spriteFrames: SpriteFrame[] = [];
//         const tex = spriteFrame.texture as Texture2D;
//         const texWidth = tex.width;
//         const texHeight = tex.height;
//         const frameWidth = texWidth / cols;
//         const frameHeight = texHeight / rows;
//         for (let row = 0; row < rows; row++) {
//             for (let col = 0; col < cols; col++) {
//                 const rect = new Rect(col * frameWidth, row * frameHeight, frameWidth, frameHeight);
//                 const newSpriteFrame = new SpriteFrame();
//                 newSpriteFrame.texture = tex;
//                 newSpriteFrame.rect = rect;
//                 spriteFrames.push(newSpriteFrame);
//             }
//         }
//         return spriteFrames;
//     }
//     /**获取输入类型是否为Number
//      *@用户输入文本时，如果输入的文本只包含数字字符（0-9），则返回 true；如果包含其他字符，则返回 false
//      */
//     Get_Input_Is_Number(String: string) {
//         return /^\d*$/.test(String);
//     }
//     /**获取分割后的小数
//      *@integerPart为小数点前的数字，decimalPart为小数点后的数字
//      */
//     Get_split_Decimal(Number: number): [number, number] {
//         const integerPart = Math.floor(Number);
//         const decimalPart = Math.abs(Number - integerPart) * Math.pow(10, Number.toString().split('.')[1].length);
//         return [integerPart, decimalPart];
//     }
//     //--------------------------------------------------
//     /*数组区*/
//     /**传入一个数组打乱顺序并返回 */
//     Get_Array_Shuffle<T>(Arr: T[]): T[] {
//         for (let i = Arr.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [Arr[i], Arr[j]] = [Arr[j], Arr[i]];
//         }
//         return Arr;
//     }
//     /**
//      *检查节点是否在节点数组中
//      *@param Node_Array 需要检查的节点数组
//      *@param Target_Node 需要查找的目标节点
//      *@returns 如果目标节点在数组中,返回true,否则返回false
//      */
//     Check_Node_In_Array(Target_Node: Node | null | undefined, Node_Array: Node[] | null | undefined): boolean {
//         if (!this.Get_Type_Is_Abnormal(Target_Node) || !this.Get_Type_Is_Abnormal(Node_Array)) {
//             return false;
//         }
//         if (!Node_Array || !Target_Node) {
//             return false;
//         }
//         return Node_Array.some(Node => Node === Target_Node);
//     }
//     /**获取数组中最小的数字 */
//     Get_Min_Value(Numbers: number[]): number {
//         let Min = Numbers[0];
//         for (let i = 1; i < Numbers.length; i++) {
//             if (Numbers[i] < Min) {
//                 Min = Numbers[i];
//             }
//         }
//         return Min;
//     }
//     /**传入一个一维数字数组，返回每个数字出现的次数 */
//     Get_Number_Appear_Count_Array(Arr: number[]): { [Key: number]: number } {
//         const occurrences: { [Key: number]: number } = {};
//         for (let i = 0; i < Arr.length; i++) {
//             const num = Arr[i];
//             if (occurrences.hasOwnProperty(num)) {
//                 occurrences[num]++;
//             } else {
//                 occurrences[num] = 1;
//             }
//         }
//         return occurrences;
//     }
//     /**传入一个数组，返回为空的下标数组 */
//     Get_Null_Index_Array(Arr): Array<any> {
//         let Srr = []
//         for (let i = 0; i < Arr.length; i++) {
//             if (Arr[i] == null) {
//                 Srr.push(i);
//             }
//         }
//         return Srr;
//     }
//     /**判断数字Number是否存在数组Number[]并返回*/
//     Get_Number_Exist_Array(Number: number, Number_Arr: number[]): boolean {
//         return Number_Arr.indexOf(Number) !== -1;
//     }
//     /**传入一个数组去重后返回 */
//     Get_Array_Deduplication<T>(Arr: T[]): T[] {
//         return Array.from(new Set(Arr));
//     }
//     /**传入两个数组返回是否相等 */
//     Get_Arrays_Equal(Arr_key: any[], Arr_value: any[]): boolean {
//         // 检查数组长度是否相等
//         if (Arr_key.length !== Arr_value.length) {
//             return false;
//         }
//         // 逐个比较数组元素
//         for (let i = 0; i < Arr_key.length; i++) {
//             if (Arr_key[i] !== Arr_value[i]) {
//                 return false;
//             }
//         }
//         // 所有元素都相等
//         return true;
//     }
//     /**传入一个布尔数组，如果全部为true返回true,否则返回false */
//     Get_Check_All_True(Boolean_Arr: boolean[]): boolean {
//         return Boolean_Arr.every((value) => value === true);
//     }
//     /**传入一个布尔数组，如果全部为false返回true,否则返回false */
//     Get_Check_All_False(Boolean_Arr: boolean[]): boolean {
//         return Boolean_Arr.every((value) => value === false);
//     }
//     /**获取数组的子区间
//     *@param Target_Arr 数组
//     *@param Lenth 子区间的长度
//     */
//     Get_Arr_Extracted_Elements<T>(Target_Arr: T[], Lenth: number): T[] | undefined {
//         if (Lenth > Target_Arr.length) {
//             Lenth = Target_Arr.length;
//         }
//         let Target_Arr_ = [...Target_Arr];
//         Target_Arr_ = this.Get_Array_Shuffle(Target_Arr_);
//         //子区间数组
//         const Subinterval_Arr = Array.from(new Set(Target_Arr_)).slice(0, Lenth);
//         return Subinterval_Arr;
//     }
//     /**获取概率
//      *@Probability概率
//      */
//     Get_Probability(Probability: number): boolean {
//         let Probability_ = this.Get_Random_Int(0, Math.round((100 - Probability) / Probability));
//         if (Probability_ == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     /**
//      *获取随机数_双闭区间
//      *@param Min 最小数
//      *@param Max 最大数
//      */
//     /**
//      *位置限制
//      *@param Target_Position 目标坐标
//      *@param Min_Position 最小坐标
//      *@param Max_Position 最大坐标
//      */
//     Position_Restricted(Target_Position: Vec3, Min_Position: Vec3, Max_Position: Vec3, Ortho_Height_Multiple: number) {
//         /**设计分辨率 */
//         let Design_Width = view.getDesignResolutionSize().width / 2 * Ortho_Height_Multiple;
//         let Design_Height = view.getDesignResolutionSize().height / 2 * Ortho_Height_Multiple;
//         Min_Position = v3(Min_Position.x + Design_Width, Min_Position.y + Design_Height, 0);
//         Max_Position = v3(Max_Position.x - Design_Width, Max_Position.y - Design_Height, 0);
//         if (Target_Position.x < Min_Position.x) {
//             Target_Position = v3(Min_Position.x, Target_Position.y, 0);
//         } else if (Target_Position.x > Max_Position.x) {
//             Target_Position = v3(Max_Position.x, Target_Position.y, 0);
//         }
//         if (Target_Position.y < Min_Position.y) {
//             Target_Position = v3(Target_Position.x, Min_Position.y, 0);
//         } else if (Target_Position.y > Max_Position.y) {
//             Target_Position = v3(Target_Position.x, Max_Position.y, 0);
//         }
//         return Target_Position;
//     }
//     /**获取两点角度
//      *@param Start_Position 起点坐标
//      *@param Finish_Positionition 终点坐标
//      */
//     Get_Angle(Start_Position: Vec3, Finish_Positionition: Vec3): number {
//         const Delta_X = Finish_Positionition.x - Start_Position.x;
//         const Delta_Y = Finish_Positionition.y - Start_Position.y;
//         const AngleIn_Degrees = Math.atan2(Delta_Y, Delta_X) * (180 / Math.PI);
//         return AngleIn_Degrees;
//     }
//     /**获取两点距离
//      *@param Start_Position 起点坐标
//      *@param Finish_Positionition 终点坐标
//      */
//     Get_Distance(Start_Position: Vec3, Finish_Positionition: Vec3) {
//         if (!this.Get_Type_Is_Abnormal(Start_Position) || !this.Get_Type_Is_Abnormal(Finish_Positionition)) {
//             console.warn("类型异常");
//             return;
//         }
//         return Number(Vec2.distance(Start_Position, Finish_Positionition).toFixed(2));
//     }
//     /**获取一个节点与一群子节点中相距最小的节点的下标和距离
//      *@param Node 节点
//      *@param Target_Node 目标父节点
//      */
//     Get_Min_Distance_Node(Node: Node, Target_Parent_Node: Node): object {
//         if (!this.Get_Type_Is_Abnormal(Node) || !this.Get_Type_Is_Abnormal(Target_Parent_Node)) {
//             console.warn("类型异常");
//             return;
//         }
//         if (Target_Parent_Node.children.length < 1) {
//             return;
//         }
//         let Min_Index = 0;
//         let Min_Distance = 999//this.Get_Distance(Node.getWorldPosition(), Target_Parent_Node.children[0].getWorldPosition());
//         for (let i = 0; i < Target_Parent_Node.children.length; i++) {
//             if (Node.parent === Target_Parent_Node) {
//                 if (Node.getSiblingIndex() === i) {
//                     continue;
//                 }
//             }
//             let Distance = this.Get_Distance(Node.getWorldPosition(), Target_Parent_Node.children[i].getWorldPosition());
//             if (Distance < Min_Distance) {
//                 Min_Distance = Distance;
//                 Min_Index = i;
//             }
//         }
//         return [Min_Index, Min_Distance];
//     }
//     /**获取一个坐标与一群子节点中相距最小的节点的下标和距离
//      *@param Node 节点
//      *@param Target_Node 目标父节点
//      */
//     Get_Min_Distance_Position(Position: Vec3, Target_Parent_Node: Node): object {
//         if (!this.Get_Type_Is_Abnormal(Position) || !this.Get_Type_Is_Abnormal(Target_Parent_Node)) {
//             console.warn("类型异常");
//             return;
//         }
//         if (Target_Parent_Node.children.length < 1) {
//             return;
//         }
//         let Min_Index = 0;
//         let Min_Distance = 999;
//         for (let i = 0; i < Target_Parent_Node.children.length; i++) {
//             let Distance = this.Get_Distance(Position, Target_Parent_Node.children[i].position);
//             // console.log(Distance,Target_Parent_Node.children[i].position,position);
//             if (Distance < Min_Distance) {
//                 Min_Distance = Distance;
//                 Min_Index = i;
//             }
//         }
//         return [Min_Index, Min_Distance];
//     }
//     /**获取一个角色与一群角色中相距最小的角色的下标和距离
//     *@param Role 角色坐标
//     *@param Target_Role_Arr 目标角色数组
//     */
//     Get_Min_Distance_Role(Role: Node, Target_Role_Arr: Node[]): object {
//         if (!this.Get_Type_Is_Abnormal(Role) || !this.Get_Type_Is_Abnormal(Target_Role_Arr)) {
//             console.warn("异常");
//             return;
//         }
//         if (Target_Role_Arr.length < 1) {
//             return;
//         }
//         let Min_Index = 0;
//         let Min_Distance = 999;
//         for (let i = 0; i < Target_Role_Arr.length; i++) {
//             if (Role == Target_Role_Arr[i]) {
//                 continue;
//             }
//             let Distance = this.Get_Distance(Role.position.clone(), Target_Role_Arr[i].position.clone());
//             if (Distance < Min_Distance) {
//                 Min_Distance = Distance;
//                 Min_Index = i;
//             }
//         }
//         return [Min_Index, Min_Distance];
//     }
//     Get_Min_Distance_Pos_Arr(Pos: Vec3, Target_Pos_Arr: Vec3[]): object {
//         if (!this.Get_Type_Is_Abnormal(Pos) || !this.Get_Type_Is_Abnormal(Target_Pos_Arr)) {
//             console.warn("异常");
//             return;
//         }
//         if (Target_Pos_Arr.length < 1) {
//             return;
//         }
//         let Min_Index = 0;
//         let Min_Distance = 999;
//         for (let i = 0; i < Target_Pos_Arr.length; i++) {
//             let Distance = this.Get_Distance(Pos, Target_Pos_Arr[i]);
//             if (Distance < Min_Distance) {
//                 Min_Distance = Distance;
//                 Min_Index = i;
//             }
//         }
//         return [Min_Index, Min_Distance];
//     }
//     Get_All_Positions_Sorted(position: Vec3, Target_Parent_Node: Node): object {
//         if (Target_Parent_Node.children.length < 1) {
//             return;
//         }
//         let Min_Index_0 = 0;
//         let Min_Distance_0 = 999;
//         let Min_Index_1 = 0;
//         let Min_Distance_1 = 999;
//         let Min_Index_2 = 0;
//         let Min_Distance_2 = 999;
//         for (let i = 0; i < Target_Parent_Node.children.length; i++) {
//             let Distance = this.Get_Distance(position, Target_Parent_Node.children[i].position);
//             // console.log(Distance,Target_Parent_Node.children[i].position,position);
//             if (Distance < Min_Distance_0) {
//                 Min_Distance_0 = Distance;
//                 Min_Index_0 = i;
//             } else if (Distance < Min_Distance_1) {
//                 Min_Distance_1 = Distance;
//                 Min_Index_1 = i;
//             } else if (Distance < Min_Distance_2) {
//                 Min_Distance_2 = Distance;
//                 Min_Index_2 = i;
//             }
//         }
//         return [
//             [Min_Index_0, Min_Distance_0],
//             [Min_Index_1, Min_Distance_1],
//             [Min_Index_2, Min_Distance_2]
//         ];
//     }
//     /**获取一个节点的父节点个数
//     *@param Node 节点
//     */
//     Get_Parent_Count(Node: Node): number {
//         let Parent_Count: number = 0;
//         while (Node.parent) {
//             Parent_Count++;
//             Node = Node.parent;
//         }
//         return Parent_Count;
//     }
//     /**生成一副扑克 */
//     Get_Poker(): object {
//         type Card = [number, number]; // 数组每个元素是两个数字，分别表示花色和点数
//         const deck: Card[] = [];
//         for (let suit = 1; suit <= 5; suit++) {
//             for (let rank = 1; rank <= 13; rank++) {
//                 if (suit !== 5) {
//                     deck.push([suit, rank]); // 添加普通扑克牌
//                 } else {
//                     if (rank <= 2) {
//                         deck.push([suit, rank]); // 添加小王、大王
//                     }
//                 }
//             }
//         }
//         this.Get_Array_Shuffle(deck);
//         return deck;
//     }
//     /**
//      *
//      *@param 传入一组数据进行排序 
//      *@example
//      *function sortByBalance(a: any[]): any[] {
//             return a.sort((role1, role2) => role2.Role_Balance - role1.Role_Balance);
//         }
//         // 示例用法
//         let a = [
//         {
//             "Role_Ranking": 0,
//             "Role_Avatar": null,
//             "Role_Name": "",
//             "Role_Balance": 100
//         },
//         {
//             "Role_Ranking": 0,
//             "Role_Avatar": null,
//             "Role_Name": "",
//             "Role_Balance": 50
//         },
//         {
//             "Role_Ranking": 0,
//             "Role_Avatar": null,
//             "Role_Name": "",
//             "Role_Balance": 200
//         }
//         ];
//         const sortedArray = sortByBalance(a);
//         console.log(sortedArray); 
//     */
//     sort_Ranking_Data(Ranking_Data: any[]): any[] {
//         return Ranking_Data.sort((Data_1, Data_2) => Data_2.Role_Balance - Data_1.Role_Balance);
//     }
//     // Sort_Ordinate_Data(Node_: Node) {
//     //     if (Node_ instanceof Node) {
//     //         Node_.children.sort((Node_1, Node_2) => Node_1.position.y - Node_2.position.y);
//     //         Node_.children.forEach((child) => this.Sort_Ordinate_Data(child));
//     //     }
//     //     return [...Node_.children];
//     // }
//     /**排序_纵坐标_数据 */
//     Sort_Ordinate_Data(Node_: Node) {
//         if (Node_ instanceof Node) {
//             Node_.children.sort((Node_1, Node_2) => Node_2.position.y - Node_1.position.y);
//             // for (let i = 0; i < Node_.children.length; i++) {
//             //     this.Sort_Ordinate_Data(Node_.children[i]);
//             // }
//         }
//         return [...Node_.children];
//     }
//     /**使该节点的显示层覆盖其父节点的其他子节点 */
//     Set_Seat(Node_: Node) {
//         if (Node_.parent) {
//             const Sibling_ = Node_.parent.children;
//             const Index_ = Sibling_.indexOf(Node_);
//             if (Index_ !== -1 && Index_ !== Sibling_.length - 1) {
//                 Node_.setSiblingIndex(Sibling_.length - 1);
//             }
//         }
//     }
//     // 判断两个节点是否相交
//     isNodeInNode(nodeA: Node, nodeB: Node): Boolean {
//         // 获取B节点的包围盒
//         let widthB = nodeB.getComponent(UITransform).width;
//         let heighB = nodeB.getComponent(UITransform).height;
//         // 获取A节点的包围盒
//         let widthA = nodeA.getComponent(UITransform).width;
//         let heightA = nodeA.getComponent(UITransform).height;
//         //判断A节点是否处于B包围盒中
//         let rectB = new Rect(nodeB.worldPosition.x, nodeB.worldPosition.y, widthB, heighB);
//         let rectA = new Rect(nodeA.worldPosition.x, nodeA.worldPosition.y, widthA, heightA);
//         return rectB.intersects(rectA);
//     }
//     /**判断位置是否在指定位置范围 */
//     Is_Specify_Range(Position_Target: Vec3, Position: Vec3, Range: number): Boolean {
//         let Distance = this.Get_Distance(Position_Target, Position);
//         if (Distance <= Range) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     /**
//      *检查并修正坐标,使其与坐标数组中的点的距离大于等于指定距离
//      *@param Target_Pos 目标坐标
//      *@param Target_Node 目标节点
//      *@param Dis 指定的距离
//      *@returns 修正后的坐标
//      */
//     Check_And_Fix_Position(Target_Pos: Vec3, Target_Node: Node, Dis: number): Vec3 {
//         // 克隆一个新的坐标对象
//         let Target_Pos_ = Target_Pos.clone();
//         let Pos_Arr: Vec3[] = [];
//         for (let i = 0; i < Target_Node.children.length; i++) {
//             Pos_Arr[i] = Target_Node.children[i].position;
//         }
//         // 循环检查坐标数组中的每个坐标
//         for (let i = 0; i < Pos_Arr.length; i++) {
//             const Pos = Pos_Arr[i].clone();
//             // 计算两点之间的距离
//             const Distance = this.Get_Distance(Target_Pos_.clone(), Pos.clone());
//             // 如果距离小于指定距离,则修正坐标
//             if (Distance < Dis) {
//                 // 计算修正后的新坐标
//                 const direction = Target_Pos_.clone().subtract(Pos.clone()).normalize();
//                 Target_Pos_ = Pos.clone().add(direction.multiplyScalar(Dis));
//             }
//         }
//         return Target_Pos_;
//     }
//     /**
//      *根据两点坐标和距离,计算距离开始位置Dis的坐标
//      *@param p1 起始点坐标
//      *@param p2 目标点坐标
//      *@param dis 距离起始点的距离
//      *@returns 中间位置坐标
//      */
//     Get_Distance_Position(Start_Position: Vec3, Finish_Position: Vec3, Dis: number): Vec3 {
//         // 计算两点之间的距离
//         const Distance = this.Get_Distance(Start_Position.clone(), Finish_Position.clone());
//         // 如果两点之间的距离小于或等于目标距离,则返回目标点坐标
//         if (Distance <= Dis) {
//             return Finish_Position.clone();
//         }
//         // 计算方向向量
//         const Direction = Finish_Position.clone().subtract(Start_Position.clone()).normalize();
//         // 计算中间位置坐标
//         const Intermediate_Position = Start_Position.clone().add(Direction.multiplyScalar(Dis));
//         return Intermediate_Position;
//     }
//     /**动画_节点_避让
//      *@Node 节点
//      *@Position 位置
//      *@Time 时间
//      *@Call 回调函数
//      */
//     Animation_Node_Avoid(Node: Node, Position: Vec3, Time?: number, Call: Function = () => { }) {
//     }
//     /**动画_预制体_展示 */
//     Animation_Prefab_Show(Node: Node, Time: number, Call: Function = () => { }) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(Time, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let curScale = Number(ratio.toFixed(2));
//                     Node.scale = v3(curScale, curScale, curScale);
//                     // node.angle = 360 *(1 - Number(ratio.toFixed(2)));
//                     return;
//                 }
//             })
//             .call(() => {
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     this.scheduleOnce(() => {
//                         Call && Call();
//                     })
//                 }
//             })
//             .start();
//     }
//     /**动画_心跳效果 */
//     Animation_Heartbeat(node: Node) {
//         tween(node).repeatForever(
//             tween()
//                 .to(0.5, { scale: v3(0.8, 0.8, 1) })
//                 .to(0.3, { scale: v3(0.9, 0.9, 1) })
//                 .to(0.45, { scale: v3(0.75, 0.75, 1) })
//                 .to(0.3, { scale: v3(1, 1, 1) })
//         )
//             .start()
//     }
//     /**动画_受击效果
//      *@pNode 节点
//      *@Hit_time 受击时间
//      *@Original_Color 初始颜色
//      */
//     Animation_Hit(Node: Node, Hit_time: number, Original_Color: Color, Call: Function = () => { }) {
//         tween(Node.getComponent(Sprite))
//             .to(Hit_time, { color: color(255, 0, 0, 255) })
//             .call(() => {
//                 Node.getComponent(Sprite).color = Original_Color;
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     Call && Call();
//                 }
//             })
//             .start()
//     }
//     /**动画_死亡效果
//      *@Node 节点
//      *@Hit_time 受击时间
//      *@Original_Color 初始颜色
//      */
//     Animation_Die(Node: Node, Hit_time: number, Original_Color: Color, Call: Function = () => { }) {
//     }
//     /**动画_消失效果 */
//     Animation_Disappear(node: Node, disappear_time: number, Call: Function = () => { }) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(disappear_time, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let curScale = (1 - Number(ratio.toFixed(2)));
//                     node.scale = v3(curScale, curScale, curScale);
//                     // node.angle = 360 *Number(ratio.toFixed(2));
//                     return;
//                 }
//             })
//             .call(() => {
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     this.scheduleOnce(() => {
//                         Call && Call();
//                     })
//                 }
//             })
//             .start();
//     }
//     /**动画_消失效果_反转 */
//     Animation_Disappear_Reverse(node: Node, disappear_time: number, Call: Function = () => { }) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(disappear_time, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let curScale = Number(ratio.toFixed(2));
//                     node.scale = v3(curScale, curScale, curScale);
//                     // node.angle = 360 *(1 - Number(ratio.toFixed(2)));
//                     return;
//                 }
//             })
//             .call(() => {
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     this.scheduleOnce(() => {
//                         Call && Call();
//                     })
//                 }
//             })
//             .start();
//     }
//     /**动画_闪光效果 */
//     Animation_Flash(Node: Node, Call: Function = () => { }) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(0.7, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let color_value = 255 - (100 * (1 - Number(ratio.toFixed(2))));//255 - (100 *Number(ratio.toFixed(2)));
//                     Node.getComponent(Sprite).color = color(color_value, color_value, color_value, color_value);
//                     return;
//                 }
//             })
//             .call(() => {
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     this.scheduleOnce(() => {
//                         Call && Call();
//                     })
//                 }
//             })
//             .start();
//     }
//     /**动画_颜色_循环 */
//     Animation_Color_repeatedly(Tag) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(0.7, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let color_value = 255 - (100 * Number(ratio.toFixed(2)));
//                     this.node.getComponent(Sprite).color = color(color_value, color_value, color_value, 255);
//                     return;
//                 }
//             })
//             .tag(Tag)
//             .call(() => {
//                 startObj = { num: 0 };
//                 endObj = { num: 100 };
//                 tween(startObj)
//                     .to(0.7, endObj, {
//                         progress: (start: number, end: number, current: number, ratio: number): number => {
//                             let color_value = 255 - (100 * (1 - Number(ratio.toFixed(2))));
//                             this.node.getComponent(Sprite).color = color(color_value, color_value, color_value, 255);
//                             return;
//                         }
//                     })
//                     .tag(Tag)
//                     .call(() => {
//                         this.Animation_Color_repeatedly(Tag);
//                     })
//                     .start();
//             })
//             .start();
//     }
//     /**动画_金币收集
//      *@node 要移动的节点
//      *@node_target 要移动的目标节点
//      *@collect_time 移动的时间
//      *@Call 回调函数
//      *@example
//      *let node_target: Node = find("Canvas/Main/Balance");
//      *let collect_time = Vec2.distance(this.node.position, node_target.position) / 1000;
//      *Tool_Script.instance.Gold_Collect_Animation(this.node, node_target, collect_time, () => {
//      *     find("Resoure_Data").getComponent(Resoure_Data_Script).Balance++;
//      *     find("Resoure_Data").getComponent(Resoure_Data_Script).Re_Balance();
//      *})
//      */
//     Animation_Gold_Collect(node: Node, node_target: Node, collect_time: number, Call: Function = () => { }) {
//         tween(node)
//             .to(collect_time, { position: v3(node_target.position.x, node_target.position.y, 0), scale: v3(0.2, 0.2, 0) })
//             .call(() => {
//                 if (this.Get_Type_Is_Abnormal(Call)) {
//                     this.scheduleOnce(() => {
//                         Call && Call();
//                     })
//                 }
//                 node.destroy();
//             })
//             .start()
//     }
//     /**
//      *
//      *@param
//      *@example
//      * let startObj = { num: 255 };
//             let endObj = { num: 0 };
//             tween(startObj)
//                 .to(0.7, endObj, {
//                     progress: (start: number, end: number, current: number, ratio: number): number => {
//                         let curScale = (1 - Number(ratio.toFixed(2)));
//                         this.node.scale = v3(curScale, curScale, curScale);
//                         this.node.getComponent(Sprite).color = color(255, 255, 255, Math.floor(255 *(1 - ratio)));
//                         return;
//                     }
//                 })
//                 .start(); 
//      */
//     Animation(Node: Node) {
//         let startObj = { num: 0 };
//         let endObj = { num: 100 };
//         tween(startObj)
//             .to(0.7, endObj, {
//                 progress: (start: number, end: number, current: number, ratio: number): number => {
//                     let curScale = Number(ratio.toFixed(2));
//                     Node.scale = v3(curScale, curScale, curScale);
//                     Node.angle = curScale;
//                     Node.getComponent(Sprite).color = color(255, 255, 255, Math.floor(255 * ratio));
//                     return;
//                 }
//             })
//             .start();
//     }
//     /**获取在线玩家 */
//     Get_Online_Players(Label: Label, OnlinePlayers: number) {
//         let UpDataTime: number = this.Get_Random_Int(0, 10);
//         let Change_Number: number = this.Get_Random_Int(-50, 50);
//         OnlinePlayers += Change_Number;
//         if (OnlinePlayers <= 0) {
//             OnlinePlayers = 0;
//         }
//         Label.string = OnlinePlayers + "";
//         this.scheduleOnce(() => {
//             this.Get_Online_Players(Label, OnlinePlayers);
//         }, UpDataTime)
//     }
//     /**随机生成名字 */
//     Get_Random_Name(): string {
//         const vowels = ['a', 'e', 'i', 'o', 'u'];
//         const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
//         const nameLength = Math.floor(Math.random() * 8) + 5; // 随机生成名字的长度，范围为 1 到 10
//         let name = '';
//         let isVowel = Math.random() < 0.5; // 随机选择首字母是元音还是辅音
//         for (let i = 0; i < nameLength; i++) {
//             if (isVowel) {
//                 name += vowels[Math.floor(Math.random() * vowels.length)];
//             } else {
//                 name += consonants[Math.floor(Math.random() * consonants.length)];
//             }
//             isVowel = !isVowel; // 每次循环切换元音和辅音
//         }
//         return name;
//     }
//     /**获取数独 */
//     Get_Sudoku(): number[][] {
//         // 检查同一行是否有相同的数字
//         function checkRow(Arr: number[][], row: number, num: number): boolean {
//             for (let i = 0; i < 9; i++) {
//                 if (Arr[row][i] === num) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         // 检查同一列是否有相同的数字
//         function checkColumn(Arr: number[][], col: number, num: number): boolean {
//             for (let i = 0; i < 9; i++) {
//                 if (Arr[i][col] === num) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         // 检查同一个3x3九宫格是否有相同的数字
//         function checkGrid(Arr: number[][], startRow: number, startCol: number, num: number): boolean {
//             for (let i = startRow; i < startRow + 3; i++) {
//                 for (let j = startCol; j < startCol + 3; j++) {
//                     if (Arr[i][j] === num) {
//                         return false;
//                     }
//                 }
//             }
//             return true;
//         }
//         const Arr: number[][] = [];
//         const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//         // 随机打乱数字顺序
//         for (let i = nums.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//         // 初始化二维数组
//         for (let i = 0; i < 9; i++) {
//             Arr[i] = [];
//             for (let j = 0; j < 9; j++) {
//                 Arr[i][j] = nums[(i * 3 + Math.floor(i / 3) + j) % 9];
//             }
//         }
//         // 随机交换行和列
//         for (let i = 0; i < 3; i++) {
//             const r1 = Math.floor(Math.random() * 3) + i * 3;
//             let r2 = r1;
//             while (r2 === r1) {
//                 r2 = Math.floor(Math.random() * 3) + i * 3;
//             }
//             for (let j = 0; j < 9; j++) {
//                 [Arr[r1][j], Arr[r2][j]] = [Arr[r2][j], Arr[r1][j]];
//             }
//             const c1 = Math.floor(Math.random() * 3) + i * 3;
//             let c2 = c1;
//             while (c2 === c1) {
//                 c2 = Math.floor(Math.random() * 3) + i * 3;
//             }
//             for (let j = 0; j < 9; j++) {
//                 [Arr[j][c1], Arr[j][c2]] = [Arr[j][c2], Arr[j][c1]];
//             }
//         }
//         // 确保每一行、每一列和每一个3x3九宫格都没有相同的数字
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 9; j++) {
//                 const num = Arr[i][j];
//                 Arr[i][j] = 0; // 先将当前位置的数字设置为0
//                 // 检查当前位置是否与同行、同列或同九宫格中的其他位置有相同的数字
//                 if (
//                     checkRow(Arr, i, num) &&
//                     checkColumn(Arr, j, num) &&
//                     checkGrid(Arr, i - (i % 3), j - (j % 3), num)
//                 ) {
//                     Arr[i][j] = num; // 如果没有相同的数字，则将当前位置设置为该数字
//                 } else {
//                     j--; // 如果有相同的数字，则重新尝试下一个数字
//                 }
//             }
//         }
//         return Arr;
//     }
//     //交换两个节点的索引
//     Swap_SiblingIndex(Node_1: Node, Node_2: Node): void {
//         const Index_1 = Node_1.getSiblingIndex();
//         const Index_2 = Node_2.getSiblingIndex();
//         Node_1.setSiblingIndex(Index_1);
//         Node_2.setSiblingIndex(Index_2);
//     }
// }
// /**暴露函数 */
// function Fun(parameter: number): number {
//     return parameter;
// }
// export { Fun };
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fdbc9ZbEdHhqlHYr8V3C9t", "Tool_Script", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d208fb1cadb9a0eefbbe2246b7d4e7b50782044.js.map