// import { _decorator, color, Component, find, Label, Layout, log, math, Node, Prefab, Tween, tween, v3, Vec3, Animation, Sprite, RichText, sys } from 'cc';
// import { PanelTemplate } from './PanelTemplate';
// import { Tool_Event } from '../../Tool/Tool_Event';
// import { Tool_Animation } from '../../Tool/Tool_Animation';
// import { Tool_UI } from '../../Tool/Tool_UI';
// import { Tool_Other } from '../../Tool/Tool_Other';
// import { Tool_Console } from '../../Tool/Tool_Console';
// import { PlatformApi } from '../../Other/SDK/PlatformApi';
// import { GravityPlatform } from '../../Other/GeSdk/GravityPlatform';
// const { ccclass, property } = _decorator;



// /**数据接口 */
// export interface DataMathMatch {
//     Level: number, Key: string[], Value: number[], Result: number[], Count: number;
// }

// @ccclass('PanelMathMatch')
// export class PanelMathMatch extends PanelTemplate {

//     Interactable: boolean = true;

//     GameTimeAll: number = 180;
//     GameTimeIng: number = 0
//     GameTime: number = 0;

//     /**返回按钮 */
//     BtnBreak: Node = null;
//     PanelFH: Node = null;
//     GameData: DataMathMatch = null;

//     /**有效目标 */
//     KeyTarget: Node[] = [];
//     /**存在状态 */
//     KeyExitState: boolean[] = [];

//     /**存在节点 */
//     KeyExitValue: Node[] = [];


//     /**阴影索引 */
//     KeyShadowIndex: number = -1;


//     //Value节点上一次在Key节点的位置
//     LastKeyIndex: number[] = [];
//     /**有效目标 */
//     ValueTarget: Node[] = [];
//     ValuePos: Vec3[] = [];
//     /**Value有效目标副本 */
//     ValueTargetC: Node[] = [];

//     KeyShadow: Prefab = null;
//     /**有效距离 */
//     OnDistance: number = 50;


//     /**正确动画节点 */
//     AnimCorrectNode: Node[] = [];
//     /**错误动画节点 */
//     AnimWrongNode: Node[] = [];
//     TouchNode: Node = null;

//     TipLabel: Node = null;
//     TipNode: Node = null;


//     Obj_Start = { num: 0 }
//     Time: number = 0;
//     Time_Max: number = 15;//15

//     Obj_StartP = { num: 0 }
//     TimeP: number = 0;
//     Time_MaxP: number = 45;//45

//     async onLoad() {
//         super.onLoad();
//     }

//     async onEnable() {
//         if (!this.IsInit) {
//             await this.LoadPanel();
//         }
//         await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC")
//         await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN")
//         await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE")
//         await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU")
//         this.GameStart();
//         //    this.Resoure_Data.Music_Play("Audio/BgmGame");
//     }

//     start() {

//     }

//     Timing() {
//         this.Obj_Start = { num: 0 };
//         Tool_Animation.instance.Async_Function_Target(this.Time_Max, this.Obj_Start, () => {
//             console.log("无操作播放");
//             Tool_Animation.instance.Anim_Frame_Play_Plus(this.BtnTip.getChildByName("Icon").getComponent(Animation), null, null, null, null, null, 3, 0, () => {
//                 this.Timing();
//             });
//         })
//     }
//     TimStop() {
//         console.log("重置无操作播放计时");
//         Tool_Animation.instance.Tween_Stop_Target(this.Obj_Start);
//         this.Timing();
//     }

//     TimingP() {
//         this.Obj_StartP = { num: 0 };
//         Tool_Animation.instance.Async_Function_Target(this.Time_MaxP, this.Obj_StartP, () => {
//             console.log("误操作播放");
//             Tool_Animation.instance.Anim_Frame_Play_Plus(this.BtnTip.getChildByName("Icon").getComponent(Animation), null, null, null, null, null, 3, 0, () => {
//                 this.TimingP();
//             });
//         })
//     }
//     TimStopP() {
//         console.log("重置误操作播放计时");
//         Tool_Animation.instance.Tween_Stop_Target(this.Obj_StartP);
//         this.TimingP();
//     }


//     /**加载面板 */
//     async LoadPanel(): Promise<void> {
//         return new Promise(async (resolve, reject) => {
//             /**绑定关键节点 */
//             this.BtnSetting = find("BtnSetting", this.node);

//             this.PanelTip = find("PanelTip", this.node);
//             this.BtnTip = find("BtnTip", this.node);
//             this.BtnTipClose = find("BtnTipClose", this.PanelTip);
//             this.BtnTipGet = find("BtnTipGet", this.PanelTip);

//             this.PanelFH = find("PanelFH", this.node);


//             this.PanelVictory = find("PanelVictory", this.node);
//             this.PanelFail = find("PanelFail", this.node);
//             this.BtnNext = find("BtnNext", this.PanelVictory);

//             // this.BtnGet = find("BtnGet", this.PanelTip);
//             this.BtnExit = find("BtnExit", this.node);
//             /**注册按钮事件 */
//             await this.OnBtn(this.Game_Script.AnimSwitch);
//             this.IsInit = true;
//             resolve();
//             this.KeyShadow = await this.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/KeyShadow");
//         });
//     }

//     /**注册按钮 */
//     async OnBtn(AnimSwitch: boolean = false) {

//         /**设置按钮 */
//         const BtnSettingCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             this.Game_Script.UpdatePanelSetting(true);
//         }

//         /**关闭按钮 */
//         const BtnBreakCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             this.node.active = false;
//         }

//         /**重新游戏 */
//         const BtnReStartCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             PlatformApi.instance.shareAppMessage(() => { });
//             this.Game_Script.MathMatchLevel--;
//             this.Game_Script.MathMatchScore -= this.Score;
//             this.Game_Script.DataSet();
//             this.GameStart();
//         }
//         /**下一关按钮 */
//         const BtnNextCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             this.GameStart();
//         }

//         const BtnTipCall = async () => {
//             if (this.ValueTarget.length == 0) {
//                 return;
//             }
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             if (this.Game_Script.PropNum > 0) {
//                 TipCall();
//             } else {
//                 this.PanelTip.active = true;
//             }

//         }
//         const BtnTipCloseCall = async () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             this.PanelTip.active = false;
//         }
//         const BtnTipGetCall = async () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             PlatformApi.instance.showVideoAd(() => {
//                 this.Game_Script.PropNum += 200;
//                 this.Game_Script.DataSet();
//                 this.UpdateProp();
//                 this.PanelTip.active = false;
//             }, () => {

//             })
//         }


//         /**提示 */
//         const TipCall = async () => {

//             // this.Game_Script.OnMessage("没有更多关卡了");
//             if (!this.Interactable) {
//                 return
//             }

//             // if (this.TipLabel != null || this.TipNode != null) {
//             //     return;
//             // }

//             //剩下的数字
//             let ValueNumber: number[] = [];
//             for (let i = 0; i < this.ValueTarget.length; i++) {
//                 ValueNumber.push(Number(this.ValueTarget[i].getChildByName("Label").getComponent(Label).string));
//             }
//             if (ValueNumber == undefined) {
//                 this.TipLabel = null;
//                 this.TipNode = null;
//                 return;
//             }

//             this.Game_Script.PropNum--;
//             this.Game_Script.DataSet();
//             this.UpdateProp();

//             console.log("剩下的数字", ValueNumber);

//             let NullGIndex = Tool_Other.instance.Get_Random_Int(0, ValueNumber.length - 1);

//             //索引
//             console.log("V索引", NullGIndex);
//             //答案
//             console.log("答案", ValueNumber[NullGIndex]);

//             for (let j = 0; j < this.GameData.Result.length; j++) {
//                 //如何是正确答案
//                 if (this.GameData.Result[j] == ValueNumber[NullGIndex]) {
//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(this.KeyTarget[j].worldPosition, this.ValueTargetC);
//                     if (Obj.Distance < this.OnDistance) {
//                         let Num = Number(this.ValueTargetC[Obj.Index].getChildByName("Label").getComponent(Label).string);
//                         console.warn("当前答案", Num);
//                         if (Num == ValueNumber[NullGIndex]) {
//                             continue;
//                         } else {
//                             console.error("K索引", j);
//                             console.error(Obj);
//                             let TipLabel = this.KeyTarget[j].getChildByName("Label");
//                             // this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
//                             // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255));
//                             let TipNode = this.ValueTarget[NullGIndex];
//                             this.TipStart(TipNode, TipLabel);
//                             let TouchNode = this.ValueTargetC[Obj.Index];
//                             Obj = Tool_Animation.instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);
//                             let i = this.ValueTarget.indexOf(TouchNode);
//                             let IsExit: boolean = Tool_UI.instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
//                             let Key = find("Key", this.node);
//                             let Value = find("Value", this.node);
//                             let Temp = find("Temp", this.node);
//                             let ColorOff: math.Color = color(255, 255, 155, 255);
//                             let ColorOn: math.Color = color(155, 255, 155, 255);
//                             Tool_Animation.instance.Tween_Stop_Target(TouchNode);
//                             TouchNode.scale = v3(1, 1, 1);
//                             TouchNode.angle = 0;
//                             Tool_UI.instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                             Tool_UI.instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
//                             Tool_UI.instance.Node_Index_Set(TouchNode, -1);

//                             // 1. 获取原节点（当前占用目标位置的节点）
//                             const OriginalNode = this.KeyExitValue[Obj.Index];
//                             // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
//                             //原上次索引
//                             let OriginalLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, OriginalNode)
//                             //现上次索引
//                             let CurrentLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, TouchNode)
//                             // console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
//                             // console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

//                             // this.TipStart();
//                             // console.log("是否存在", IsExit);
//                             if (!IsExit) {
//                                 Tool_UI.instance.Arr_Increase(this.ValueTarget, TouchNode);
//                                 //题目节点的索引
//                                 let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                                 let KeyNodeValueT: string = "N";
//                                 this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                                 // console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                                 // console.log(this.GameData);
//                                 if (this.LastKeyIndex[i] != null) {
//                                     this.KeyExitState[this.LastKeyIndex[i]] = false;
//                                     this.KeyExitValue[this.LastKeyIndex[i]] = null;
//                                     Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                                 }
//                                 // 重置当前目标位置的状态（如果之前已被占用）
//                                 if (this.KeyExitState[Obj.Index]) {
//                                     this.KeyExitState[Obj.Index] = false;
//                                     this.KeyExitValue[Obj.Index] = null;
//                                     Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                                 }
//                                 this.LastKeyIndex[i] = null;
//                             }
//                             this.UpdateUIValue();
//                             return;
//                         }

//                     } else {
//                         let TipLabel = this.KeyTarget[j].getChildByName("Label");
//                         // this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
//                         // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255));
//                         // console.error("K索引", j);
//                         // console.error(Obj);
//                         let TipNode = this.ValueTarget[NullGIndex];

//                         this.TipStart(TipNode, TipLabel);
//                         return
//                     }

//                 }

//             }

//         }

//         /**设置按钮事件 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnSetting, BtnSettingCall);

//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTip, BtnTipCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTipClose, BtnTipCloseCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTipGet, BtnTipGetCall);


//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnNext, BtnNextCall);

//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnExit, BtnBreakCall);



//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnReStart"), BtnReStartCall);

//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnNext"), BtnNextCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnBreak"), BtnBreakCall);

//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFH.getChildByName("Btn"), () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             PlatformApi.instance.showVideoAd(() => {
//                 this.PanelFH.active = false;
//                 this.GameTime = this.GameTimeAll;
//                 let ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
//                 this.Game_Script.Timer(ComponentLabel, this.GameTime, () => {
//                     this.PanelFH.active = true;
//                     this.Game_Script.TimerStop();
//                 }, "S", () => {
//                     this.GameTimeIng++;
//                 });
//             }, () => {

//             })


//         });
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFH.getChildByName("BtnClose"), () => {
//             this.Resoure_Data.Sound_Play("Audio/BtnClick");
//             if (this.Resoure_Data.Vibration_Switch_Get()) {
//                 PlatformApi.instance.vibrateShort();
//             }
//             this.PanelFH.active = false;
//             this.GameFailed();
//         });

//         /**设置按钮动画 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnSetting, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTipClose, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTipGet, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);

//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnExit, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnNext"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBreak"), AnimSwitch);

//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFH.getChildByName("Btn"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBreak"), AnimSwitch);


//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         for (let i = 0; i < Value.children.length; i++) {
//             this.ValuePos.push(Value.children[i].position.clone());
//         }
//     }


//     /**初始化数据 */
//     async InitData() {

//         this.Game_Script.UpdateScore();

//         console.log("初始化数据");
//         /**注册按钮事件 */
//         // await this.OnBtn(this.Game_Script.AnimSwitch);
//         this.KeyTarget = [];
//         this.KeyExitState = [];
//         this.KeyExitValue = [];

//         this.ValueTarget = [];
//         this.ValueTargetC = [];
//         this.LastKeyIndex = [];

//         this.AnimCorrectNode = [];
//         this.AnimWrongNode = [];

//         this.Interactable = true;




//         this.TouchNode = null;
//         this.TipLabel = null;
//         this.TipNode = null;

//         this.GameTimeIng = 0;


//         // this.Game_Script.MathMatchLevel = 1

//         if (this.Game_Script.MathMatchLevel < 0) {
//             this.Game_Script.MathMatchLevel = 0;
//             this.Game_Script.DataSet();
//         }


//         let F = {
//             "Level": 6,
//             "Key": [
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
//                 "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"
//             ],
//             "Value": [],
//             "Result": [],
//             "Count": 0
//         }


//         const Json = await this.Resoure_Data.Load_Json("Json/mathmatch");
//         const JsonData = Json["Data"];
//         console.log(JsonData);

//         this.GameData = null;
//         if (this.Game_Script.MathMatchLevel >= JsonData.length) {
//             this.Game_Script.OnMessage("没有更多关卡了");
//             this.GameData = this.Resoure_Data.Copy_Deep(JsonData[JsonData.length - 1]);
//         } else {
//             this.GameData = this.Resoure_Data.Copy_Deep(JsonData[this.Game_Script.MathMatchLevel]);
//         }
//         console.log(this.GameData);

//         this.Game_Script.IsHint = false;
//         this.Game_Script.IsContinue = false;
//         this.GameTime = this.GameTimeAll;
//         let ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
//         this.Game_Script.Timer(ComponentLabel, this.GameTimeAll, () => {
//             console.log("失败");
//             this.PanelFH.active = true;
//             this.Game_Script.TimerStop();
//         }, "S", () => {
//             this.GameTimeIng++;
//         });

//     }

//     /**初始化界面 */
//     async InitInterface() {

//         if (this.Game_Script.MathMatchLevel == 0) {
//             find("Hand", this.node).getComponent(Animation).play();
//             this.Game_Script.OnMessage("将需要的数字拖动到空格上");
//         }
//         if (this.Game_Script.MathMatchLevel == 1) {
//             find("ND", this.node).getComponent(Animation).play();
//         }

//         this.PanelVictory.active = false;
//         this.PanelFail.active = false;
//         this.PanelTip.active = false;
//         this.PanelFH.active = false;
//         this.UpdateProp();
//         this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `第${this.Game_Script.MathMatchLevel + 1}关`;
//         find("Temp", this.node).destroyAllChildren();
//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);

//         for (let i = 0; i < Key.children.length; i++) {
//             Key.children[i].active = false;
//             Tool_UI.instance.Set_Color_Sprite(Key.children[i].getChildByName("Bg").getChildByName("Sp"), color(255, 255, 155, 255));
//         }

//         for (let i = 0; i < Value.children.length; i++) {
//             Value.children[i].active = false;
//             Value.children[i].scale = v3(1, 1, 1);
//             Value.children[i].angle = 0;

//             Tool_UI.instance.Set_SpriteFrame(Value.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//             Tool_UI.instance.Set_Color_Label(Value.children[i].getChildByName("Label"), color(0, 155, 0, 255));

//         }

//         if (this.GameData == null) {
//             console.log("配置错误");
//             return;
//         }


//         for (let i = 0; i < Key.children.length; i++) {
//             Key.children[i].active = true;
//             switch (this.GameData.Key[i]) {
//                 case "U":
//                     Key.children[i].active = false;
//                     break;
//                 case "N":
//                     Key.children[i].getChildByName("Label").getComponent(Label).string = "";
//                     this.KeyTarget.push(Key.children[i]);
//                     this.KeyExitState.push(false);
//                     this.KeyExitValue.push(null);
//                     Tool_UI.instance.Set_SpriteFrame(Key.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
//                     break;
//                 default:
//                     let Str: string = "";
//                     switch (this.GameData.Key[i]) {
//                         // case "/":
//                         //     Str = "÷";
//                         // break;
//                         case "X":
//                             Str = "x";
//                             break;
//                         default:
//                             Str = this.GameData.Key[i];
//                             break;
//                     }
//                     Key.children[i].getChildByName("Label").getComponent(Label).string = Str

//                     Tool_UI.instance.Set_SpriteFrame(Key.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
//                     break;
//             }
//         }

//         let Temp = find("Temp", this.node);
//         let ColorOff: math.Color = color(255, 255, 155, 255);
//         let ColorOn: math.Color = color(155, 255, 155, 255);


//         for (let i = 0; i < Value.children.length; i++) {
//             const Shadow = Value.children[i].getChildByName("Shadow");
//             const ComponentLabel1 = Value.children[i].getChildByName("Label").getComponent(Label);
//             Shadow.active = false;
//             Value.children[i].active = i < this.GameData.Value.length ? true : false;
//             if (Value.children[i].active) {
//                 this.ValueTarget.push(Value.children[i]);
//                 this.ValueTargetC.push(Value.children[i]);
//                 this.LastKeyIndex.push(null);
//                 Value.children[i].position = this.ValuePos[i];
//                 ComponentLabel1.string = this.GameData.Value[i] + "";

//                 Tool_Event.instance.Off_Event_TOUCH_All(Value.children[i]);



//                 const TouchNode = Value.children[i];
//                 const Shadow = TouchNode.getChildByName("Shadow");
//                 const ComponentLabel = TouchNode.getChildByName("Label").getComponent(Label);
//                 const Check_Shadow = () => {
//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);
//                     if (Obj.Distance <= this.OnDistance) {
//                         if (this.KeyShadowIndex == Obj.Index) {
//                             return;
//                         }
//                         Temp.destroyAllChildren();
//                         this.KeyShadowIndex = Obj.Index;
//                         Tool_UI.instance.Set_Prefab_Node(this.KeyShadow, Temp, this.KeyTarget[Obj.Index], "")
//                     } else {
//                         Temp.destroyAllChildren();
//                         this.KeyShadowIndex = -1;
//                     }
//                 }


//                 Tool_Event.instance.On_Event_TOUCH_Drag(TouchNode, () => this.Interactable, async (Event, Pos_Touch_Start) => {
//                     if (this.GameData == null) {
//                         this.Interactable = false;
//                         console.log("配置错误");
//                         return;
//                     }
//                     this.TouchNode = TouchNode;
//                     console.log(this.LastKeyIndex, i, this.ValueTargetC.indexOf(TouchNode));
//                     /**触摸开始回调 */
//                     this.Resoure_Data.Sound_Play("Audio/NumClick");
//                     if (this.Resoure_Data.Vibration_Switch_Get()) {
//                         PlatformApi.instance.vibrateShort();
//                     }
//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);
//                     Tool_Animation.instance.Tween_Stop_Target(this.KeyTarget[Obj.Index]);
//                     this.KeyTarget[Obj.Index].scale = v3(1, 1, 1);
//                     this.KeyTarget[Obj.Index].angle = 0;
//                     Tool_Animation.instance.Tween_Stop_Target(TouchNode);
//                     TouchNode.scale = v3(1, 1, 1);
//                     TouchNode.angle = 0;
//                     Tool_UI.instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                     Tool_UI.instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));

//                     Tool_UI.instance.Node_Index_Set(TouchNode, -1);
//                     Shadow.active = true;
//                     Tool_Animation.instance.Animation_Node_Move_Time(TouchNode, Pos_Touch_Start.clone().add(v3(0, 25, 0)), 0.02, null, "smooth");
//                     let IsExit: boolean = Tool_UI.instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
//                     if (!IsExit) {
//                         tween(TouchNode)
//                             .to(0.25, { scale: v3(1, 1, 1) }, { easing: "backOut" })
//                             .start();
//                     }
//                     Check_Shadow();
//                 }, (Event, Pos_Touch_Start) => {
//                     /**触摸移动回调 */
//                     Check_Shadow();
//                 }, async (Event, Pos_Touch_Start, Pos_Touch_End) => {
//                     /**触摸结束回调 */
//                     Shadow.active = false;
//                     let IsExit: boolean = Tool_UI.instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);

//                     // 1. 获取原节点（当前占用目标位置的节点）
//                     const OriginalNode = this.KeyExitValue[Obj.Index];
//                     // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
//                     //原上次索引
//                     let OriginalLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, OriginalNode)
//                     //现上次索引
//                     let CurrentLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, TouchNode)
//                     console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
//                     console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

//                     if (Obj.Distance <= this.OnDistance) {

//                         // this.TipReset();

//                         //目标位置被占用
//                         if (this.KeyExitState[Obj.Index] && this.LastKeyIndex[i] != Obj.Index) {
//                             if (this.LastKeyIndex[i] != null) {
//                                 this.KeyTarget[Obj.Index].active = false;
//                                 this.KeyTarget[this.LastKeyIndex[i]].active = false;
//                                 // 将原节点移动到 LastKeyIndex 的位置
//                                 const OriginalNodePos = Tool_UI.instance.Get_Target_Node_Local_Pos(OriginalNode, this.KeyTarget[this.LastKeyIndex[i]]);
//                                 this.Interactable = false;
//                                 Tool_Animation.instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, async () => {
//                                     this.Interactable = true;
//                                     this.KeyTarget[Obj.Index].active = true;
//                                     this.KeyTarget[this.LastKeyIndex[i]].active = true;
//                                     //交换索引

//                                     console.log(this.LastKeyIndex, 1);
//                                     console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
//                                     console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

//                                     const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
//                                     this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
//                                     this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp;

//                                     //交换节点的索引
//                                     let KeyNodeIndexL = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[OriginalLastKeyIndex]]);
//                                     let KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string;
//                                     //题目节点的索引
//                                     let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                                     let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
//                                     this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
//                                     this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;

//                                     console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
//                                     console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
//                                     console.log(this.GameData);

//                                     this.FindAllEquationIndices_(this.GameData.Key);



//                                     Tool_Animation.instance.Tween_Stop_Target(OriginalNode);
//                                     OriginalNode.scale = v3(0.9, 0.9, 1);
//                                     OriginalNode.angle = 0;
//                                     Tool_UI.instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                                     Tool_UI.instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255));

//                                     // console.error(OriginalNode, TouchNode);

//                                     await Tool_Animation.instance.Async_Wait(0.05);
//                                     this.TouchNode = OriginalNode;
//                                     this.FindAllEquationIndices_(this.GameData.Key);

//                                 }, "smooth");
//                                 // 更新原节点的状态为占用 LastKeyIndex
//                                 this.KeyExitState[this.LastKeyIndex[i]] = true;
//                                 this.KeyExitValue[this.LastKeyIndex[i]] = OriginalNode;
//                             } else {
//                                 // 如果 LastKeyIndex 为 null，将原节点放回 ValueTarget 池
//                                 Tool_UI.instance.Arr_Increase(this.ValueTarget, OriginalNode);

//                                 Tool_UI.instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                                 Tool_UI.instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255));

//                                 //交换索引
//                                 console.log(this.LastKeyIndex, 2);
//                                 console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
//                                 console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);


//                                 const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
//                                 this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
//                                 this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp;

//                                 //题目节点的索引
//                                 let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                                 let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                                 this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                                 console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                                 console.log(this.GameData);


//                                 this.FindAllEquationIndices_(this.GameData.Key, 0.2);
//                             }
//                             // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）
//                             this.KeyExitState[Obj.Index] = true;
//                             this.KeyExitValue[Obj.Index] = TouchNode;
//                             // 4. 更新颜色和临时状态
//                             Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                             if (this.LastKeyIndex[i] != null) {
//                                 Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                             }
//                             //放置成功 移除节点
//                             Tool_UI.instance.Arr_Delete(this.ValueTarget, TouchNode);
//                             Temp.destroyAllChildren();
//                             this.KeyShadowIndex = -1;
//                             // 6. 更新 UI
//                             this.UpdateUIValue();
//                             let Pos = Tool_UI.instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
//                             await Tool_Animation.instance.Animation_Node_Move_Time(TouchNode, Pos, 0.2, null, "smooth");
//                             tween(TouchNode)
//                                 .to(0.25, { scale: v3(0.9, 0.9, 1) }, { easing: "backOut" })
//                                 .start();
//                             return;
//                         }

//                         if (IsExit) {
//                             //放置成功 移除节点
//                             Tool_UI.instance.Arr_Delete(this.ValueTarget, TouchNode);
//                             //题目节点的索引
//                             let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                             let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                             this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                             console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                             console.log(this.GameData);
//                             this.UpdateUIValue();
//                         } else {


//                             let KeyNodeIndexL: number = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                             if (KeyNodeIndexL == -1) {
//                                 console.log(CurrentLastKeyIndex);//有值
//                                 console.log(this.LastKeyIndex[CurrentLastKeyIndex]);
//                                 console.log(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                             }

//                             let KeyNodeValueL: string = "N";
//                             this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;

//                             //题目节点的索引
//                             let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                             let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                             this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;

//                             console.log("赋值的索引", KeyNodeIndexL, "赋值的数据", KeyNodeValueL);
//                             console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                             console.log(this.GameData);

//                         }
//                         this.KeyExitState[Obj.Index] = true;
//                         this.KeyExitValue[Obj.Index] = TouchNode;
//                         if (this.LastKeyIndex[i] != null && this.LastKeyIndex[i] != Obj.Index) {
//                             this.KeyExitState[this.LastKeyIndex[i]] = false;
//                             this.KeyExitValue[this.LastKeyIndex[i]] = null;
//                         }
//                         //改变Key背景颜色
//                         this.LastKeyIndex[i] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                         this.LastKeyIndex[i] = Obj.Index;

//                         // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                         // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;

//                         console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

//                         Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                         Temp.destroyAllChildren();
//                         this.KeyShadowIndex = -1;
//                         let Pos = Tool_UI.instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
//                         await Tool_Animation.instance.Animation_Node_Move_Time(TouchNode, Pos, 0, null, "smooth");
//                         tween(TouchNode)
//                             .to(0.25, { scale: v3(0.9, 0.9, 1) }, { easing: "backOut" })
//                             .start();
//                     } else {
//                         // this.TipStart();
//                         if (!IsExit) {
//                             Tool_UI.instance.Arr_Increase(this.ValueTarget, TouchNode);

//                             //题目节点的索引
//                             let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                             let KeyNodeValueT: string = "N";
//                             this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                             console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                             console.log(this.GameData);

//                             if (this.LastKeyIndex[i] != null) {
//                                 this.KeyExitState[this.LastKeyIndex[i]] = false;
//                                 this.KeyExitValue[this.LastKeyIndex[i]] = null;
//                                 Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                             }
//                             // 重置当前目标位置的状态（如果之前已被占用）
//                             if (this.KeyExitState[Obj.Index]) {
//                                 this.KeyExitState[Obj.Index] = false;
//                                 this.KeyExitValue[Obj.Index] = null;
//                                 Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                             }


//                             this.LastKeyIndex[i] = null;
//                         }
//                         this.UpdateUIValue();

//                     }
//                     console.log("this.KeyExitState", this.KeyExitState);
//                     console.log("this.KeyExitValue", this.KeyExitValue);
//                     console.log("this.ValueTarget", this.ValueTarget);

//                     this.FindAllEquationIndices_(this.GameData.Key);


//                 });



//             }



//         }

//         this.UpdateUIValue();

//     }

//     /**刷新排序 */
//     UpdateUIValue() {

//         this.ValueTarget.sort((a, b) => {
//             const valueA = parseFloat(a.getChildByName("Label").getComponent(Label).string);
//             const valueB = parseFloat(b.getChildByName("Label").getComponent(Label).string);
//             return valueA - valueB;
//         });
//         for (let i = 0; i < this.ValueTarget.length; i++) {
//             this.ValueTarget[i].scale = v3(1, 1, 1);
//             this.ValueTarget[i].angle = 0;
//             Tool_Animation.instance.Animation_Node_Move_Time(this.ValueTarget[i], this.ValuePos[i], 0.2, null, "smooth");
//         }
//     }

//     async GameStart() {

//         if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
//             try {
//                 window.ge.onLevelStart({ "$user_level": this.Game_Script.MathMatchLevel });
//             } catch (error) {
//                 console.log(error);

//             }
//         }

//         this.TipReset();
//         this.Timing();
//         await this.InitData();
//         await this.InitInterface();
//         this.BtnTip.getComponent(Sprite).grayscale = this.ValueTarget.length == 0;
//     }

//     async GameVictory() {
//         if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
//             try {
//                 window.ge.onLevelSuccess({ "$user_level": this.Game_Script.MathMatchLevel });
//             } catch (error) {
//                 console.log(error);

//             }
//         }

//         this.Resoure_Data.Sound_Play("Audio/Victory");
//         this.Game_Script.TimerStop();
//         this.PanelVictory.active = true;
//         this.Game_Script.MathMatchLevel++;


//         let T = this.GameTimeIng / this.GameTimeAll;
//         this.Score = 0;
//         if (T < 0.45) {
//             this.Score = 3;
//             this.Resoure_Data.Sound_Play("Audio/Start3");
//         } else if (T < 0.7) {
//             this.Score = 2;
//             this.Resoure_Data.Sound_Play("Audio/Start2");
//         } else if (T < 1) {
//             this.Score = 1;
//             this.Resoure_Data.Sound_Play("Audio/Start1");
//         } else {
//             this.Score = 0;
//         }

//         let Stars = find("WinBanner/Stars", this.PanelVictory)
//         for (let I = 0; I < Stars.children.length; I++) {
//             Stars.children[I].children[0].active = false;
//         }
//         for (let I = 0; I < this.Score; I++) {
//             Stars.children[I].children[0].active = true;
//         }

//         this.Game_Script.MathMatchScore += this.Score;
//         /**保存数据 */
//         this.Game_Script.DataSet();
//         // this.Game_Script.UpdateScene();
//         this.Interactable = false;
//         this.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = `<color=#0000C8>${this.GameTimeAll}/</color><color=#C80000>${this.GameTimeIng}</color>`;


//         if (this.Resoure_Data.Vibration_Switch_Get()) {
//             for (let i = 0; i < 5; i++) {
//                 PlatformApi.instance.vibrateShort();
//                 await Tool_Animation.instance.Async_Wait(0.2);
//             }
//         }
//     }

//     async GameFailed() {
//         if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
//             try {
//                 window.ge.onLevelFail({ "$user_level": this.Game_Script.MathMatchLevel });
//             } catch (error) {
//                 console.log(error);

//             }
//         }

//         this.Resoure_Data.Sound_Play("Audio/Failed");
//         this.PanelFail.active = true;
//         this.Interactable = false;
//         this.PanelFail.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = `<color=#0000C8>${this.GameTimeAll}/</color><color=#C80000>${this.GameTimeIng}</color>`;
//     }

//     GameResult() {


//     }


//     BreakNode(SetNode: Node) {

//     }

//     TipReset() {
//         if (this.TipLabel != null) {
//             this.TipLabel.getComponent(Label).string = "";
//             this.TipLabel.scale = v3(1, 1, 1);
//             Tool_Animation.instance.Tween_Stop_Target(this.TipNode);
//             this.TipLabel = null;
//         }
//         if (this.TipNode != null) {
//             Tool_Animation.instance.Tween_Stop_Target(this.TipNode);
//             this.TipNode = null;
//         }
//     }

//     TipStart(TipNode, TipLabel) {
//         // if (this.TipNode != null && this.TipLabel != null) {
//         // Tool_Animation.instance.Animation_Heartbeat(this.TipLabel);

//         // tween(this.TipLabel)
//         //     .repeatForever(
//         //         tween()
//         //             .to(0.2, { angle: 5 })
//         //             .to(0.2, { angle: -10 })
//         //             .to(0.2, { angle: 10 })
//         //             .to(0.2, { angle: -10 })
//         //             .to(0.2, { angle: 5 })
//         //             .to(0.2, { angle: 0 })
//         //             .delay(1)
//         //     )
//         //     .start()
//         // Tool_Animation.instance.Animation_Tip(this.TipNode);

//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         let Temp = find("Temp", this.node);
//         let ColorOff: math.Color = color(255, 255, 155, 255);
//         let ColorOn: math.Color = color(155, 255, 155, 255);

//         this.Interactable = false;
//         this.scheduleOnce(() => {
//             // this.Interactable = true;
//         }, 1)
//         let Pos = Tool_UI.instance.Get_Target_Node_Local_Pos(TipNode, TipLabel.parent);
//         Tool_Animation.instance.Animation_Node_Move_Time(TipNode, Pos, 0.5, async () => {

//             let TouchNode = TipNode;
//             this.TouchNode = TouchNode;
//             let i = this.ValueTarget.indexOf(TouchNode);

//             const Shadow = Value.children[i].getChildByName("Shadow");

//             // for (let i = 0; i < Value.children.length; i++) {


//             /**触摸结束回调 */
//             Shadow.active = false;
//             let IsExit: boolean = Tool_UI.instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
//             let Obj = Tool_Animation.instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);

//             // 1. 获取原节点（当前占用目标位置的节点）
//             const OriginalNode = this.KeyExitValue[Obj.Index];
//             // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
//             //原上次索引
//             let OriginalLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, OriginalNode)
//             //现上次索引
//             let CurrentLastKeyIndex = Tool_UI.instance.Arr_Check_Index(this.ValueTargetC, TouchNode)
//             console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
//             console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

//             if (Obj.Distance <= this.OnDistance) {
//                 //目标位置被占用
//                 if (this.KeyExitState[Obj.Index] && this.LastKeyIndex[i] != Obj.Index) {
//                     if (this.LastKeyIndex[i] != null) {
//                         this.KeyTarget[Obj.Index].active = false;
//                         this.KeyTarget[this.LastKeyIndex[i]].active = false;
//                         // 将原节点移动到 LastKeyIndex 的位置
//                         const OriginalNodePos = Tool_UI.instance.Get_Target_Node_Local_Pos(OriginalNode, this.KeyTarget[this.LastKeyIndex[i]]);
//                         this.Interactable = false;
//                         Tool_Animation.instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, async () => {
//                             this.Interactable = true;
//                             this.KeyTarget[Obj.Index].active = true;
//                             this.KeyTarget[this.LastKeyIndex[i]].active = true;
//                             //交换索引

//                             console.log(this.LastKeyIndex, 1);
//                             console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
//                             console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

//                             const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
//                             this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
//                             this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp;

//                             //交换节点的索引
//                             let KeyNodeIndexL = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[OriginalLastKeyIndex]]);
//                             let KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string;
//                             //题目节点的索引
//                             let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                             let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
//                             this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
//                             this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;

//                             console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
//                             console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
//                             console.log(this.GameData);

//                             this.FindAllEquationIndices_(this.GameData.Key);



//                             Tool_Animation.instance.Tween_Stop_Target(OriginalNode);
//                             OriginalNode.scale = v3(0.9, 0.9, 1);
//                             OriginalNode.angle = 0;
//                             Tool_UI.instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                             Tool_UI.instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255));

//                             // console.error(OriginalNode, TouchNode);

//                             await Tool_Animation.instance.Async_Wait(0.05);
//                             this.TouchNode = OriginalNode;
//                             this.FindAllEquationIndices_(this.GameData.Key);

//                         }, "smooth");
//                         // 更新原节点的状态为占用 LastKeyIndex
//                         this.KeyExitState[this.LastKeyIndex[i]] = true;
//                         this.KeyExitValue[this.LastKeyIndex[i]] = OriginalNode;
//                     } else {
//                         // 如果 LastKeyIndex 为 null，将原节点放回 ValueTarget 池
//                         Tool_UI.instance.Arr_Increase(this.ValueTarget, OriginalNode);

//                         Tool_UI.instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                         Tool_UI.instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255));

//                         //交换索引
//                         console.log(this.LastKeyIndex, 2);
//                         console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
//                         console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);


//                         const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
//                         this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
//                         this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp;

//                         //题目节点的索引
//                         let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                         let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                         this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                         console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                         console.log(this.GameData);


//                         this.FindAllEquationIndices_(this.GameData.Key, 0.2);
//                     }
//                     // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）
//                     this.KeyExitState[Obj.Index] = true;
//                     this.KeyExitValue[Obj.Index] = TouchNode;
//                     // 4. 更新颜色和临时状态
//                     Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                     if (this.LastKeyIndex[i] != null) {
//                         Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                     }
//                     //放置成功 移除节点
//                     Tool_UI.instance.Arr_Delete(this.ValueTarget, TouchNode);
//                     Temp.destroyAllChildren();
//                     this.KeyShadowIndex = -1;
//                     // 6. 更新 UI
//                     this.UpdateUIValue();
//                     let Pos = Tool_UI.instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
//                     await Tool_Animation.instance.Animation_Node_Move_Time(TouchNode, Pos, 0.2, null, "smooth");
//                     tween(TouchNode)
//                         .to(0.25, { scale: v3(0.9, 0.9, 1) }, { easing: "backOut" })
//                         .start();
//                     return;
//                 }
//                 if (IsExit) {
//                     //放置成功 移除节点
//                     Tool_UI.instance.Arr_Delete(this.ValueTarget, TouchNode);
//                     //题目节点的索引
//                     let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                     let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                     this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                     console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                     console.log(this.GameData);
//                     this.UpdateUIValue();
//                 } else {
//                     let KeyNodeIndexL: number = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                     if (KeyNodeIndexL == -1) {
//                         console.log(CurrentLastKeyIndex);//有值
//                         console.log(this.LastKeyIndex[CurrentLastKeyIndex]);
//                         console.log(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                     }
//                     let KeyNodeValueL: string = "N";
//                     this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
//                     //题目节点的索引
//                     let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[Obj.Index]);
//                     let KeyNodeValueT: string = TouchNode.getChildByName("Label").getComponent(Label).string;
//                     this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                     console.log("赋值的索引", KeyNodeIndexL, "赋值的数据", KeyNodeValueL);
//                     console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                     console.log(this.GameData);
//                 }
//                 this.KeyExitState[Obj.Index] = true;
//                 this.KeyExitValue[Obj.Index] = TouchNode;
//                 if (this.LastKeyIndex[i] != null && this.LastKeyIndex[i] != Obj.Index) {
//                     this.KeyExitState[this.LastKeyIndex[i]] = false;
//                     this.KeyExitValue[this.LastKeyIndex[i]] = null;
//                 }
//                 //改变Key背景颜色
//                 this.LastKeyIndex[i] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                 this.LastKeyIndex[i] = Obj.Index;

//                 // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                 // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;

//                 console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

//                 Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
//                 Temp.destroyAllChildren();
//                 this.KeyShadowIndex = -1;
//                 let Pos = Tool_UI.instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
//                 await Tool_Animation.instance.Animation_Node_Move_Time(TouchNode, Pos, 0, null, "smooth");
//                 tween(TouchNode)
//                     .to(0.25, { scale: v3(0.9, 0.9, 1) }, { easing: "backOut" })
//                     .start();
//             } else {
//                 if (!IsExit) {
//                     Tool_UI.instance.Arr_Increase(this.ValueTarget, TouchNode);
//                     //题目节点的索引
//                     let KeyNodeIndexT: number = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
//                     let KeyNodeValueT: string = "N";
//                     this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
//                     console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
//                     console.log(this.GameData);

//                     if (this.LastKeyIndex[i] != null) {
//                         this.KeyExitState[this.LastKeyIndex[i]] = false;
//                         this.KeyExitValue[this.LastKeyIndex[i]] = null;
//                         Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                     }
//                     // 重置当前目标位置的状态（如果之前已被占用）
//                     if (this.KeyExitState[Obj.Index]) {
//                         this.KeyExitState[Obj.Index] = false;
//                         this.KeyExitValue[Obj.Index] = null;
//                         Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
//                     }


//                     this.LastKeyIndex[i] = null;
//                 }
//                 this.UpdateUIValue();

//             }
//             console.log("this.KeyExitState", this.KeyExitState);
//             console.log("this.KeyExitValue", this.KeyExitValue);
//             console.log("this.ValueTarget", this.ValueTarget);

//             this.FindAllEquationIndices_(this.GameData.Key);

//         });











//         // }
//     }

//     async FindAllEquationIndices_(Key: string[], Time: number = 0, Rows: number = 11, Cols: number = 11): Promise<{ CorrectIndex: number[][]; WrongIndex: number[][]; }> {

//         this.TimStop();

//         this.BtnTip.getComponent(Sprite).grayscale = this.ValueTarget.length == 0;

//         this.Interactable = false;
//         await Tool_Animation.instance.Async_Wait(Time);
//         let Count = 0;
//         const Result = {
//             CorrectIndex: [] as number[][],
//             WrongIndex: [] as number[][]
//         };
//         const ResultAll = {
//             CorrectIndex: [] as number[],
//             WrongIndex: [] as number[]
//         };
//         /**检查题目右边是否存在结果 */
//         function CheckResult(Index: number): number {
//             // return Key[Index] == "N" || Key[Index] == "U" ? null : Number(Key[Index]);
//             return Key[Index] == "N" ? null : Number(Key[Index]);
//         }
//         /**计算题目左边结果 */
//         function GetResult(expression: string[]): number {
//             // 先处理乘除法
//             const processed = [...expression];
//             if (processed.indexOf("N") != -1) {
//                 return null;
//             }
//             // 第一轮处理：乘除法
//             for (let i = 1; i < processed.length; i += 2) {
//                 const op = processed[i];
//                 if (op === "X" || op === "x" || op === "/") {
//                     const left = parseFloat(processed[i - 1]);
//                     const right = parseFloat(processed[i + 1]);
//                     let result: number;
//                     if (op === "/") {
//                         if (right === 0) throw new Error("Division by zero");
//                         result = left / right;
//                     } else {
//                         result = left * right;
//                     }
//                     // 替换这三个元素为计算结果
//                     processed.splice(i - 1, 3, result.toString());
//                     i -= 2; // 因为数组长度减少了，调整索引
//                 }
//             }
//             // 第二轮处理：加减法
//             let result = parseFloat(processed[0]);
//             for (let i = 1; i < processed.length; i += 2) {
//                 const op = processed[i];
//                 const num = parseFloat(processed[i + 1]);
//                 if (op === '+') {
//                     result += num;
//                 } else if (op === '-') {
//                     result -= num;
//                 } else {
//                     throw new Error(`Unknown operator: ${op}`);
//                 }
//             }
//             return result;
//         }
//         let ErrorChar = ["=", "U"];
//         for (let i = 0; i < Key.length; i++) {
//             if (Key[i] == "=") {
//                 // console.log("--------------------------------------");
//                 // console.log("--------------------------------------");
//                 // console.log("--------------------------------------");
//                 let ValueResult: number | null;
//                 //水平方向
//                 // console.log("水平方向");

//                 if (i % Rows != Rows - 1) {
//                     ValueResult = CheckResult(i + 1);//*
//                     if (ValueResult != null && !Number.isNaN(ValueResult)) {
//                         let Index = i;
//                         let Indexs: number[] = [];
//                         let Chars: string[] = [];
//                         while (Index % Rows != 0) {//*
//                             Index -= 1;//*
//                             if (ErrorChar.indexOf(Key[Index]) == -1) {
//                                 Indexs.push(Index);
//                             } else {
//                                 break;
//                             }
//                         }
//                         Tool_Other.instance.Sort_Reverse(Indexs);
//                         for (let j = 0; j < Indexs.length; j++) {
//                             Chars.push(Key[Indexs[j]]);
//                         }
//                         Indexs.push(i);
//                         Indexs.push(i + 1);//*
//                         let KeyResult: number = GetResult(Chars);
//                         let IsEqual: boolean = KeyResult == ValueResult;
//                         // console.log(Indexs);
//                         // console.log(Chars);
//                         // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
//                         // console.log("是否相等", IsEqual);
//                         if (IsEqual) {
//                             Result.CorrectIndex.push(Indexs);
//                             ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
//                             Count++
//                         } else {
//                             if (KeyResult != null) {
//                                 Result.WrongIndex.push(Indexs);
//                                 ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
//                             }
//                         }
//                     }
//                 }

//                 if (Math.floor(i / Rows) != Cols - 1) {
//                     //垂直方向
//                     // console.log("垂直方向");
//                     ValueResult = CheckResult(i + Rows);
//                     if (ValueResult != null && !Number.isNaN(ValueResult)) {
//                         let Index = i;
//                         let Indexs: number[] = [];
//                         let Chars: string[] = [];
//                         while (Math.floor(Index / Rows) != 0) {
//                             Index -= Rows;//*
//                             if (ErrorChar.indexOf(Key[Index]) == -1) {
//                                 Indexs.push(Index);
//                             } else {
//                                 break;
//                             }
//                         }
//                         Tool_Other.instance.Sort_Reverse(Indexs);
//                         for (let j = 0; j < Indexs.length; j++) {
//                             Chars.push(Key[Indexs[j]]);
//                         }
//                         Indexs.push(i);
//                         Indexs.push(i + Rows);
//                         let KeyResult: number = GetResult(Chars);
//                         let IsEqual: boolean = KeyResult == ValueResult;
//                         // console.log(Indexs);
//                         // console.log(Chars);
//                         // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
//                         // console.log("是否相等", IsEqual);
//                         if (IsEqual) {
//                             Result.CorrectIndex.push(Indexs);
//                             ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
//                             Count++
//                         } else {
//                             if (KeyResult != null) {
//                                 Result.WrongIndex.push(Indexs);
//                                 ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
//                             }
//                         }
//                     }
//                 }

//                 if (i % Rows != Rows - 1 && Math.floor(i / Rows) != Cols - 1) {
//                     //主对角线
//                     ValueResult = CheckResult(i + (Rows + 1));
//                     // console.log("主对角线");
//                     if (ValueResult != null && !Number.isNaN(ValueResult)) {
//                         let Index = i;
//                         let Indexs: number[] = [];
//                         let Chars: string[] = [];
//                         while (Index % Rows != 0) {
//                             Index -= (Rows + 1);
//                             if (ErrorChar.indexOf(Key[Index]) == -1) {
//                                 Indexs.push(Index);
//                             } else {
//                                 break;
//                             }
//                         }
//                         Tool_Other.instance.Sort_Reverse(Indexs);
//                         for (let j = 0; j < Indexs.length; j++) {
//                             Chars.push(Key[Indexs[j]]);
//                         }
//                         Indexs.push(i);
//                         Indexs.push(i + (Rows + 1));
//                         let KeyResult: number = GetResult(Chars);
//                         let IsEqual: boolean = KeyResult == ValueResult;
//                         console.log(Indexs);
//                         console.log(Chars);
//                         console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
//                         console.log("是否相等", IsEqual);
//                         if (IsEqual) {
//                             Result.CorrectIndex.push(Indexs);
//                             ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
//                             Count++
//                         } else {
//                             if (KeyResult != null) {
//                                 Result.WrongIndex.push(Indexs);
//                                 ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
//                             }
//                         }
//                     }
//                 }



//                 if (i % Rows != 0 && Math.floor(i / Rows) != Cols - 1) {
//                     //副对角线
//                     // console.log("副对角线");
//                     ValueResult = CheckResult(i + (Rows - 1));
//                     if (ValueResult != null && !Number.isNaN(ValueResult)) {
//                         let Index = i;
//                         let Indexs: number[] = [];
//                         let Chars: string[] = [];
//                         while (Index % Rows != (Rows - 1)) {
//                             Index -= (Rows - 1);
//                             if (ErrorChar.indexOf(Key[Index]) == -1) {
//                                 Indexs.push(Index);
//                             } else {
//                                 break;
//                             }
//                         }
//                         Tool_Other.instance.Sort_Reverse(Indexs);
//                         for (let j = 0; j < Indexs.length; j++) {
//                             Chars.push(Key[Indexs[j]]);
//                         }
//                         Indexs.push(i);
//                         Indexs.push(i + (Rows - 1));
//                         let KeyResult: number = GetResult(Chars);
//                         let IsEqual: boolean = KeyResult == ValueResult;
//                         console.log(Indexs);
//                         console.log(Chars);
//                         console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
//                         console.log("是否相等", IsEqual);
//                         if (IsEqual) {
//                             Result.CorrectIndex.push(Indexs);
//                             ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
//                             Count++
//                         } else {
//                             if (KeyResult != null) {
//                                 Result.WrongIndex.push(Indexs);
//                                 ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
//                             }
//                         }
//                     }

//                 }
//             }
//         }




//         let KeyP = find("Key", this.node);
//         let ValueP = find("Value", this.node);

//         let AnimReset = async () => {
//             for (let i = 0; i < KeyP.children.length; i++) {
//                 if (ResultAll.CorrectIndex.indexOf(i) == -1) {
//                     switch (this.GameData.Key[i]) {
//                         case "N":
//                             Tool_UI.instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
//                             break;
//                         default:
//                             Tool_UI.instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
//                             break;
//                     }
//                 } else {
//                     Tool_UI.instance.Arr_Delete(this.AnimCorrectNode, KeyP.children[i]);
//                 }

//                 if (ResultAll.WrongIndex.indexOf(i) == -1) {
//                     switch (this.GameData.Key[i]) {
//                         case "N":
//                             Tool_UI.instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
//                             break;
//                         default:
//                             Tool_UI.instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
//                             break;
//                     }
//                 } else {
//                     Tool_UI.instance.Arr_Delete(this.AnimWrongNode, KeyP.children[i]);
//                 }

//             }

//             AnimV();
//             AnimF();

//         }

//         let AnimV = async () => {
//             for (let i = 0; i < Result.CorrectIndex.length; i++) {
//                 for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
//                     if (this.AnimCorrectNode.indexOf(KeyP.children[Result.CorrectIndex[i][j]]) == -1) {
//                         this.AnimCorrectNode.push(KeyP.children[Result.CorrectIndex[i][j]]);
//                         Tool_UI.instance.Set_SpriteFrame(KeyP.children[Result.CorrectIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                     }
//                 }
//             }
//             for (let i = 0; i < Result.CorrectIndex.length; i++) {
//                 let ICall = async () => {
//                     //上次触摸的节点在题目中
//                     let IsPlay = false;

//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(this.TouchNode.worldPosition, this.KeyTarget);
//                     if (Obj.Distance <= this.OnDistance) {
//                         for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
//                             if (this.KeyTarget[Obj.Index].name == KeyP.children[Result.CorrectIndex[i][j]].name) {
//                                 IsPlay = true;
//                                 console.log("AnimV");
//                                 break;
//                             }
//                         }
//                     }
//                     if (IsPlay) {
//                         this.Resoure_Data.Sound_Play("Audio/Correct");
//                         for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
//                             //题目的Value占位节点
//                             let Obj = Tool_Animation.instance.Get_Min_Distance_Node(KeyP.children[Result.CorrectIndex[i][j]].worldPosition, this.ValueTargetC);
//                             if (Obj.Distance <= this.OnDistance) {
//                                 Tool_UI.instance.Set_SpriteFrame(this.ValueTargetC[Obj.Index].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
//                                 Tool_UI.instance.Set_Color_Label(this.ValueTargetC[Obj.Index].getChildByName("Label"), color(0, 155, 0, 255));
//                                 // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
//                                 // this.ValueTargetC[Obj.Index].scale = v3(0.9, 0.9, 1);
//                                 tween(this.ValueTargetC[Obj.Index])
//                                     .to(0.1, { scale: v3(0.6, 0.6, 1) })
//                                     .to(0.1, { scale: v3(0.9, 0.9, 1) })
//                                     .start();
//                             }
//                             //题目的Key占位节点
//                             // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.CorrectIndex[i][j]]);
//                             // KeyP.children[Result.CorrectIndex[i][j]].scale = v3(1, 1, 1);
//                             tween(KeyP.children[Result.CorrectIndex[i][j]])
//                                 .to(0.1, { scale: v3(0.6, 0.6, 1) })
//                                 .to(0.1, { scale: v3(1, 1, 1) })
//                                 .start();
//                             await Tool_Animation.instance.Async_Wait(0.05 * Speed);
//                         }
//                     }
//                 }
//                 ICall();
//             }
//         }

//         let AnimF = async () => {
//             // for (let i = 0; i < Result.WrongIndex.length; i++) {
//             //     for (let j = 0; j < Result.WrongIndex[i].length; j++) {
//             //         console.error(this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]));

//             //         if (this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]) == -1) {
//             //             this.AnimWrongNode.push(KeyP.children[Result.WrongIndex[i][j]]);
//             //             Tool_UI.instance.Set_SpriteFrame(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
//             //         }
//             //     }
//             // }
//             for (let i = 0; i < Result.WrongIndex.length; i++) {
//                 let ICall = async () => {
//                     //上次触摸的节点在题目中
//                     let IsPlay = false;
//                     let Obj = Tool_Animation.instance.Get_Min_Distance_Node(this.TouchNode.worldPosition, this.KeyTarget);

//                     if (Obj.Distance <= this.OnDistance) {
//                         for (let j = 0; j < Result.WrongIndex[i].length; j++) {
//                             if (this.KeyTarget[Obj.Index].name == KeyP.children[Result.WrongIndex[i][j]].name) {
//                                 IsPlay = true;
//                                 console.log("AnimF");
//                                 break;
//                             }
//                         }
//                     }
//                     if (IsPlay) {
//                         this.Resoure_Data.Sound_Play("Audio/Wrong");
//                         for (let j = 0; j < Result.WrongIndex[i].length; j++) {
//                             //题目的Value占位节点
//                             if (Number.isNaN(Number(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Label").getComponent(Label).string))) {
//                                 continue;
//                             }
//                             let Obj = Tool_Animation.instance.Get_Min_Distance_Node(KeyP.children[Result.WrongIndex[i][j]].worldPosition, this.ValueTargetC);
//                             if (Obj.Distance <= this.OnDistance) {
//                                 Tool_UI.instance.Set_SpriteFrame(this.ValueTargetC[Obj.Index].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
//                                 Tool_UI.instance.Set_Color_Label(this.ValueTargetC[Obj.Index].getChildByName("Label"), color(155, 0, 0, 255));

//                                 // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
//                                 // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.WrongIndex[i][j]]);

//                                 tween(this.ValueTargetC[Obj.Index])
//                                     .to(0.1, { angle: 10 })
//                                     .to(0.1, { angle: -20 })
//                                     .to(0.1, { angle: 20 })
//                                     .to(0.1, { angle: -20 })
//                                     .to(0.1, { angle: 10 })
//                                     .to(0.1, { angle: 0 })
//                                     .start();
//                                 tween(KeyP.children[Result.WrongIndex[i][j]])
//                                     .to(0.1, { angle: 10 })
//                                     .to(0.1, { angle: -20 })
//                                     .to(0.1, { angle: 20 })
//                                     .to(0.1, { angle: -20 })
//                                     .to(0.1, { angle: 10 })
//                                     .to(0.1, { angle: 0 })
//                                     .start();
//                                 // tween(this.ValueTargetC[Obj.Index])
//                                 //     .by(0.1, { scale: v3(-0.4, -0.4, 1) })
//                                 //     .by(0.1, { scale: v3(0.4, 0.4, 1) })
//                                 //     .start();
//                             }
//                             //题目的Key占位节点
//                             // tween(KeyP.children[Result.WrongIndex[i][j]])
//                             //     .by(0.1 * Speed, { scale: v3(-0.4, - 0.4, 1) })
//                             //     .by(0.1 * Speed, { scale: v3(0.4, 0.4, 1) })
//                             //     .start();
//                             // await Tool_Animation.instance.Async_Wait(0.05 * Speed);
//                         }
//                     }
//                 }
//                 ICall();
//             }
//         }


//         var Speed = 1;
//         await AnimReset();
//         await Tool_Animation.instance.Async_Wait(0.2);
//         this.Interactable = true;

//         if (Count == this.GameData.Count) {
//             console.log("胜利");
//             this.GameVictory();
//         }
//         Tool_Console.instance.Console_Style(Count, {
//             Font_Color: 'rgba(255, 99, 71, 1)',
//             Font_Size: '20px',
//             Font_Weight: 'lighter',
//             Font_Style: 'normal',
//             Font_Family: "'fantasy',cursive",
//             Text_Decoration: 'none',
//             Text_Shadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
//             Background_Color: 'rgba(155, 155, 155, 0.2)',
//             Padding: "10px 20px",
//             Margin: "10px auto",
//             Border: "1px dashed rgba(0, 255, 0, 1)",
//             Border_Radius: "5px",
//         })


//         return Result;
//     }



//     UpdateProp() {

//         this.BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label).string = this.Game_Script.PropNum + "";

//     }

// }


