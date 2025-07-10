// import { _decorator, color, Component, find, Label, Layout, Node, Sprite, tween, Animation, v3, Vec3 } from 'cc';
// import { PanelTemplate } from './PanelTemplate';
// import { PlatformApi } from '../../Other/SDK/PlatformApi';
// import { Tool_Animation } from '../../Tool/Tool_Animation';
// import { Tool_Event } from '../../Tool/Tool_Event';
// import { Tool_Other } from '../../Tool/Tool_Other';
// import { Tool_UI } from '../../Tool/Tool_UI';
// const { ccclass, property } = _decorator;
// @ccclass('PanelIdiom')
// export class PanelIdiom extends PanelTemplate {
//     /**Key数据 */
//     KeyData = null;
//     /**Value字符串 */
//     ValueStr: string = "";
//     /**Value索引 */
//     ValueIndex: number = 0;
//     /**是否移动 */
//     ValueMoveing: boolean = false;
//     /**提示状态 */
//     TipState: boolean = false;
//     /**胜利界面 */
//     PanelVictory: Node = null;
//     /**返回按钮 */
//     BtnBreak: Node = null;
//     /**获取答案按钮 */
//     BtnGet: Node = null;
//     /**答案状态 */
//     GetState: boolean = false;
//     async onLoad() {
//         super.onLoad();
//     }
//     async onEnable() {
//         if (!this.IsInit) {
//             await this.LoadPanel();
//         }
//         this.GameStart();
//         this.Resoure_Data.Music_Play("Audio/BGMGame");
//     }
//     async start() {
//     }
//     /**加载面板 */
//     async LoadPanel(): Promise<void> {
//         return new Promise(async (resolve, reject) => {
//             /**绑定关键节点 */
//             this.BtnSetting = find("BtnSetting", this.node);
//             this.BtnTip = find("BtnTip", this.node);
//             this.PanelTip = find("PanelTip", this.node);
//             this.BtnTipClose = find("BtnTipClose", this.PanelTip);
//             this.PanelVictory = find("PanelVictory", this.node);
//             this.BtnNext = find("BtnNext", this.PanelVictory);
//             this.BtnBreak = find("BtnBreak", this.PanelVictory);
//             this.BtnGet = find("BtnGet", this.PanelTip);
//             /**注册按钮事件 */
//             await this.OnBtn(this.Game_Script.AnimSwitch);
//             this.IsInit = true;
//             resolve();
//         });
//     }
//     /**注册按钮 */
//     async OnBtn(AnimSwitch: boolean = false) {
//         /**设置按钮 */
//         const BtnSettingCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.Game_Script.UpdatePanelSetting(true);
//         }
//         /**提示按钮 */
//         const BtnTipCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             if (this.TipState) {
//                 this.PanelTip.active = true;
//             } else {
//                 const Call = () => {
//                     this.TipState = true;
//                     this.Game_Script.IsHint = true;
//                     this.PanelTip.active = true;
//                 }
//                 if (this.Game_Script.PropNum > 0) {
//                     this.Game_Script.PropNum--;
//                     this.Game_Script.DataSet();
//                     this.UpdatePropUI();
//                     Call();
//                 } else {
//                     PlatformApi.instance.showVideoAd(async () => {
//                         Call();
//                     }, () => {
//                     });
//                 }
//             }
//         }
//         /**关闭提示界面 */
//         const BtnTipCloseCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.PanelTip.active = false;
//         }
//         /**下一关按钮 */
//         const BtnNextCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.GameStart();
//         }
//         /**关闭按钮 */
//         const BtnBreakCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.node.active = false;
//         }
//         /**获取答案 */
//         const BtnGetCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             if (this.GetState) {
//                 return;
//             }
//             this.GetState = true;
//             let Grid = find("Window/Grid", this.PanelTip);
//             PlatformApi.instance.showVideoAd(async () => {
//                 for (let i = 8; i < Grid.children.length; i++) {
//                     Grid.children[i].getChildByName("Lock").active = false;
//                     Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
//                 }
//             }, () => {
//             });
//         }
//         /**设置按钮事件 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnSetting, BtnSettingCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTip, BtnTipCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTipClose, BtnTipCloseCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnNext, BtnNextCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnBreak, BtnBreakCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnGet, BtnGetCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelTip.getChildByName("Bg"), () => {
//             this.PanelTip.active = false;
//         });
//         /**设置按钮动画 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnSetting, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTipClose, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnBreak, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnGet, AnimSwitch);
//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         for (let i = 0; i < Value.children.length; i++) {
//             Tool_Event.instance.On_Event_TOUCH_END(Value.children[i], () => {
//                 if (this.ValueMoveing) {
//                     return;
//                 }
//                 if (this.KeyData == null || this.KeyData == undefined) {
//                     return;
//                 }
//                 if (Key.children[this.ValueIndex] == undefined) {
//                     return;
//                 }
//                 this.Resoure_Data.Sound_Play("Audio/Sound/Click");
//                 this.ValueMoveing = true;
//                 let PosStart = Value.children[i].position.clone();
//                 // console.error(Value.children[i], Key.children[this.ValueIndex], this.ValueIndex, Key);
//                 let PosEnd = Tool_UI.instance.Get_Target_Node_Local_Pos(Value.children[i], Key.children[this.ValueIndex]);
//                 Tool_Animation.instance.Animation_Node_Move_Time(Value.children[i], PosEnd, 0.25, async () => {
//                     let Char = Value.children[i].getChildByName("Label").getComponent(Label).string;
//                     let Result = this.GetResult(Char);
//                     if (Result.isValid) {
//                         if (this.ValueIndex % 4 == 1) {
//                             /**首字正确 */
//                             this.Resoure_Data.Sound_Play("Audio/Sound/FirstCorrect");
//                         }
//                         Key.children[this.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;
//                         Value.children[i].active = false;
//                         if (Result.isComplete) {
//                             /**一组词音效 */
//                             this.Resoure_Data.Sound_Play("Audio/Sound/YiZuCi");
//                             for (let j = 4; j > 0; j--) {
//                                 tween(Key.children[this.ValueIndex - j])
//                                     .by(0.25, { scale: v3(0.5, 0.5, 0) }, { easing: "quadOut" })
//                                     .by(0.25, { scale: v3(-0.5, -0.5, 0) }, { easing: "quadOut" })
//                                     .start();
//                                 await Tool_Animation.instance.Async_Wait(0.05);
//                             }
//                         } else {
//                             this.ValueMoveing = false;
//                         }
//                         await Tool_Animation.instance.Async_Wait(0.2);
//                         this.ValueMoveing = false;
//                         if (this.ValueIndex == Key.children.length) {
//                             console.log("成语胜利");
//                             this.GameVictory();
//                         }
//                     } else {
//                         /**错误 */
//                         this.Resoure_Data.Sound_Play("Audio/Sound/Error");
//                         Tool_UI.instance.Set_Color_Sprite(Value.children[i].getChildByName("Bg"), color(255, 0, 0, 255));
//                         tween(Value.children[i])
//                             .by(0.05, { position: v3(-25, 0, 0) }, { easing: "quadOut" })
//                             .by(0.1, { position: v3(50, 0, 0) }, { easing: "quadOut" })
//                             .by(0.05, { position: v3(-25, 0, 0) }, { easing: "quadOut" })
//                             .call(() => {
//                                 Tool_UI.instance.Set_Color_Sprite(Value.children[i].getChildByName("Bg"), color(255, 227, 167, 255));
//                                 Tool_Animation.instance.Animation_Node_Move_Time(Value.children[i], PosStart, 0.25, () => {
//                                     this.ValueMoveing = false;
//                                 });
//                                 tween(Value.children[i])
//                                     .to(0.25, { scale: v3(1, 1, 1) }, { easing: "quadOut" })
//                                     .start();
//                             })
//                             .start();
//                     }
//                 });
//                 tween(Value.children[i])
//                     .to(0.25, { scale: v3(0.8, 0.8, 1) }, { easing: "quadOut" })
//                     .start();
//             });
//         }
//     }
//     /**游戏开始 */
//     async GameStart() {
//         /**初始化数据 */
//         await this.InitData();
//         this.Game_Script.IsHint = false;
//         this.Game_Script.IsContinue = false;
//         this.PanelVictory.active = false;
//         this.PanelTip.active = false;
//         this.TipState = false;
//         this.GetState = false;
//         this.UpdatePropUI();
//         if (this.KeyData == null || this.KeyData == undefined) {
//             this.Game_Script.OnMessage("暂时没有新题目了");
//             return;
//         }
//         this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `成语大王·第${this.Game_Script.IdiomLevel + 1}关`;
//         let Text: string[] = [];
//         for (let i = 0; i < this.KeyData.length; i++) {
//             for (let j = 0; j < this.KeyData[i].length; j++) {
//                 Text.push(this.KeyData[i].substring(j, j + 1));
//             }
//         }
//         /**初始化提示界面 */
//         let Grid = find("Window/Grid", this.PanelTip);
//         for (let i = 0; i < Grid.children.length; i++) {
//             Grid.children[i].getChildByName("Label").getComponent(Label).string = Text[i];
//             Grid.children[i].getChildByName("Lock").active = i >= 8 ? true : false;
//             Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
//         }
//         Tool_Other.instance.Sort_Random(Text);
//         console.log(Text);
//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         Tool_UI.instance.Component_On(Value, Layout);
//         Value.getComponent(Layout).updateLayout();
//         for (let i = 0; i < Key.children.length; i++) {
//             Tool_Animation.instance.Tween_Stop_Target(Key.children[i]);
//             Key.children[i].getChildByName("Label").getComponent(Label).string = "";
//             Key.children[i].scale = v3(1, 1, 1);
//         }
//         for (let i = 0; i < Value.children.length; i++) {
//             Tool_Animation.instance.Tween_Stop_Target(Value.children[i]);
//             Value.children[i].getChildByName("Label").getComponent(Label).string = Text[i];
//             Tool_UI.instance.Set_UIOpacity(Value.children[i], 255);
//             Tool_UI.instance.Set_Color_Sprite(Value.children[i].getChildByName("Bg"), color(255, 227, 167, 255));
//             Value.children[i].scale = v3(1, 1, 1);
//             Value.children[i].active = true;
//             Tool_UI.instance.Set_UIOpacity(Value.children[i], 0);
//         }
//         /**入场节点 */
//         let EntryNodes: Node[] = [];
//         let PosEnd: Vec3[] = [];
//         this.scheduleOnce(async () => {
//             for (let i = 0; i < Value.children.length; i++) {
//                 PosEnd.push(Value.children[i].position.clone());
//                 EntryNodes.push(Value.children[i]);
//             }
//             Tool_UI.instance.Component_Off(Value, Layout);
//             for (let i = 0; i < EntryNodes.length; i++) {
//                 Tool_UI.instance.Set_Pos_X(EntryNodes[i], -640);
//                 Tool_UI.instance.Set_UIOpacity(EntryNodes[i], 255);
//                 // Tool_UI.instance.Node_Index_Set(EntryNodes[i], 0);
//                 Tool_Animation.instance.Animation_Node_Move_Time(EntryNodes[i], PosEnd[i], 0.25);
//                 await Tool_Animation.instance.Async_Wait(0.05);
//             }
//         });
//     }
//     /**游戏胜利 */
//     async GameVictory() {
//         /**胜利音效 */
//         this.Resoure_Data.Sound_Play("Audio/Sound/Victory");
//         PlatformApi.instance.showInterstitialAd();
//         this.Game_Script.IdiomLevel++;
//         this.Game_Script.IdiomScore += this.Game_Script.IsHint ? 1 : 2;
//         /**保存数据 */
//         this.Game_Script.DataSet();
//         this.Game_Script.UpdateScene();
//         find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint
//         find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
//         find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
//         find("Light", this.PanelVictory).getComponent(Animation).play();
//         this.PanelVictory.active = true;
//     }
//     /**刷新道具UI */
//     UpdatePropUI() {
//         const BtnTipLabel = this.BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label);
//         const BtnTipNull = this.BtnTip.getChildByName("PropNum").getChildByName("PropNumNull");
//         BtnTipLabel.string = `${this.Game_Script.PropNum}`;
//         if (this.Game_Script.PropNum > 0) {
//             BtnTipNull.active = false;
//         } else {
//             BtnTipNull.active = true;
//         }
//     }
//     /**初始数据 */
//     async InitData() {
//         await this.GetData();
//         this.ValueStr = "";
//         this.ValueIndex = 0;
//         this.ValueMoveing = false;
//     }
//     /**获取数据 */
//     async GetData() {
//         const Json = await this.Resoure_Data.Load_Json("Json/dioms");
//         const JsonData = Json["Data"];
//         if (this.Game_Script.IdiomLevel >= JsonData.length) {
//             this.KeyData = JsonData[JsonData.length - 1];
//         } else {
//             this.KeyData = JsonData[this.Game_Script.IdiomLevel];
//         }
//     }
//     /**获取结果 */
//     GetResult(Char: string): { isValid: boolean, isComplete: boolean } {
//         // 拼接新字符形成候选字符串
//         const Candidate = this.ValueStr + Char;
//         // 检查是否是完整成语
//         const isComplete = this.KeyData.indexOf(Candidate);
//         // 检查是否有成语以这个候选字符串开头
//         const isValid = this.KeyData.some(Idiom => Idiom.startsWith(Candidate));
//         if (isValid) {
//             this.ValueIndex++;
//         }
//         if (isComplete !== -1) {
//             // 如果是完整成语，重置当前拼接状态
//             this.ValueStr = "";
//             return { isValid: true, isComplete: true };
//         } else if (isValid) {
//             // 如果是有效部分，更新当前拼接状态
//             this.ValueStr = Candidate;
//             return { isValid: true, isComplete: false };
//         } else {
//             // 无效输入，重置当前拼接状态
//             return { isValid: false, isComplete: false };
//         }
//     }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89e92ULVRZNHobGb/1bvvte", "PanelIdiom", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b7a76916f8b5397fd7bbf6d7ff1cb1f40c67cb2.js.map