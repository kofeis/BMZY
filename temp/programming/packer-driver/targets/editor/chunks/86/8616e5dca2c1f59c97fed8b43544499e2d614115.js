// import { _decorator, color, Component, find, Label, Layout, log, Node, Sprite, tween, UIOpacity, v3, Vec3, Animation } from 'cc';
// import { PlatformApi } from '../../Other/SDK/PlatformApi';
// import { Tool_Event } from '../../Tool/Tool_Event';
// import { Tool_UI } from '../../Tool/Tool_UI';
// import { PanelTemplate } from './PanelTemplate';
// import { Tool_Animation } from '../../Tool/Tool_Animation';
// import { Tool_Other } from '../../Tool/Tool_Other';
// const { ccclass, property } = _decorator;
// /**影视数据类型 */
// type TypeData = {
//     Correct: string;
//     Wrong: string;
//     Hints: string,
//     Movie: string,
// }
// @ccclass('PanelFilm')
// export class PanelFilm extends PanelTemplate {
//     /**Key数据 */
//     KeyData: TypeData = null;
//     /**Value字符串 */
//     ValueStr: string = "";
//     /**Value索引 */
//     ValueIndex: number = 0;
//     /**是否移动 */
//     ValueMoveing: boolean = false;
//     /**提示状态 */
//     TipState: boolean = false;
//     /**返回按钮 */
//     BtnBreak: Node = null;
//     /**获取答案按钮 */
//     BtnGet: Node = null;
//     /**答案状态 */
//     GetState: boolean = false;
//     /**删除按钮 */
//     BtnDelete: Node = null;
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
//             this.BtnDelete = find("Key/BtnDelete", this.node);
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
//         const BtnCloseCall = () => {
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
//                 for (let i = 0; i < Grid.children.length; i++) {
//                     Grid.children[i].getChildByName("Lock").active = false;
//                     Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
//                 }
//             }, () => {
//             });
//         }
//         /**删除按钮 */
//         const BtnDeleteCall = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             if (this.ValueIndex > 0) {
//                 let Key = find("Key", this.node);
//                 Key.children[this.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = "";
//                 this.ValueStr = this.ValueStr.substring(0, this.ValueStr.length - 1);
//                 Tool_UI.instance.Set_UIOpacity(Btns[this.ValueIndex - 1], 255);
//                 this.ValueIndex--;
//             }
//         }
//         /**设置按钮事件 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnSetting, BtnSettingCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTip, BtnTipCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTipClose, BtnTipCloseCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnNext, BtnNextCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnBreak, BtnCloseCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnGet, BtnGetCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnDelete, BtnDeleteCall);
//         /**设置按钮动画 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnSetting, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTipClose, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnBreak, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnGet, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnDelete, AnimSwitch);
//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         let Btns: Node[] = [];
//         for (let i = 0; i < Value.children.length; i++) {
//             const Component_UIOpacity = Tool_UI.instance.Component_Get(Value.children[i], UIOpacity);
//             Tool_Event.instance.On_Event_TOUCH_END(Value.children[i], () => {
//                 if (Component_UIOpacity.opacity == 255) {
//                     if (this.ValueMoveing) {
//                         return;
//                     }
//                     if (this.KeyData == null || this.KeyData == undefined) {
//                         return;
//                     }
//                     this.Resoure_Data.Sound_Play("Audio/Sound/Click");
//                     this.ValueMoveing = true;
//                     Component_UIOpacity.opacity = 155;
//                     Btns[this.ValueIndex] = Value.children[i];
//                     let Char = Value.children[i].getChildByName("Label").getComponent(Label).string;
//                     let Result = this.GetResult(Char);
//                     if (Result.isValid) {
//                         if (this.ValueIndex == 1) {
//                             /**首字正确 */
//                             this.Resoure_Data.Sound_Play("Audio/Sound/FirstCorrect");
//                         }
//                         Key.children[this.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;
//                         if (Result.isComplete) {
//                             this.GameVictory();
//                         } else {
//                             this.ValueMoveing = false;
//                         }
//                     } else {
//                         /**错误 */
//                         this.Resoure_Data.Sound_Play("Audio/Sound/Error");
//                         Key.children[this.ValueIndex].getChildByName("Label").getComponent(Label).string = Char;
//                         let KeyLabel = Key.children[this.ValueIndex].getChildByName("Label");
//                         KeyLabel.getComponent(Label).color = color(255, 0, 0, 255);
//                         tween(KeyLabel)
//                             .by(0.05, { position: v3(-25, 0, 0) }, { easing: "quadOut" })
//                             .by(0.1, { position: v3(50, 0, 0) }, { easing: "quadOut" })
//                             .by(0.05, { position: v3(-25, 0, 0) }, { easing: "quadOut" })
//                             .call(() => {
//                             })
//                             .start();
//                         this.scheduleOnce(() => {
//                             KeyLabel.getComponent(Label).string = "";
//                             KeyLabel.getComponent(Label).color = color(0, 0, 0, 255);
//                             Component_UIOpacity.opacity = 255;
//                             this.ValueMoveing = false;
//                         }, 0.5);
//                     }
//                 }
//             });
//         }
//     }
//     /**游戏开始 */
//     async GameStart() {
//         if (this.Game_Script == null) {
//             return;
//         }
//         /**初始化数据 */
//         this.InitData();
//         this.Game_Script.IsHint = false;
//         this.PanelVictory.active = false;
//         this.PanelTip.active = false;
//         this.TipState = false;
//         this.GetState = false;
//         this.UpdatePropUI();
//         if (this.KeyData == null || this.KeyData == undefined) {
//             this.Game_Script.OnMessage("暂时没有新题目了");
//             return;
//         }
//         this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `影视大咖·第${this.Game_Script.FilmLevel + 1}关`;
//         let Text: string[] = [];
//         for (let i = 0; i < this.KeyData.Correct.length; i++) {
//             Text.push(this.KeyData.Correct.substring(i, i + 1));
//         }
//         for (let j = 0; j < this.KeyData.Wrong.length; j++) {
//             Text.push(this.KeyData.Wrong.substring(j, j + 1));
//         }
//         /**初始化提示界面 */
//         let Grid = find("Window/Grid", this.PanelTip);
//         for (let i = 0; i < Grid.children.length; i++) {
//             Grid.children[i].getChildByName("Label").getComponent(Label).string = this.KeyData.Hints.substring(i, i + 1);
//             Grid.children[i].getChildByName("Lock").active = true;
//             Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
//         }
//         Tool_Other.instance.Sort_Random(Text);
//         console.log(Text);
//         let Key = find("Key", this.node);
//         let Value = find("Value", this.node);
//         Tool_UI.instance.Component_On(Value, Layout);
//         Value.getComponent(Layout).updateLayout();
//         for (let i = 0; i < Key.children.length - 1; i++) {
//             Tool_Animation.instance.Tween_Stop_Target(Key.children[i]);
//             Key.children[i].getChildByName("Label").getComponent(Label).string = "";
//             Key.children[i].scale = v3(1, 1, 1);
//             Key.children[i].active = i < this.KeyData.Correct.length ? true : false;
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
//             // PosEnd[Value.children.length - 1] = v3(55, 0, 0);
//             // PosEnd[Value.children.length - 2] = v3(-55, 0, 0);
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
//         this.Game_Script.FilmLevel++;
//         this.Game_Script.FilmScore += this.Game_Script.IsHint ? 1 : 2;
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
//     InitData() {
//         this.GetData();
//         this.ValueStr = "";
//         this.ValueIndex = 0;
//         this.ValueMoveing = false;
//     }
//     /**获取数据 */
//     GetData() {
//         const FilmData: TypeData[] = [
//             // === 简单===
//             { Correct: "测试电影名字1", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影aa", Movie: "图片提示(图片的名字)" },
//             { Correct: "测试电影名字2", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影ss", Movie: "图片提示(图片的名字)" },
//             { Correct: "测试电影名字3", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影dd", Movie: "图片提示(图片的名字)" },
//             { Correct: "测试电影名字4", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影aa", Movie: "图片提示(图片的名字)" },
//             { Correct: "测试电影名字5", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影ss", Movie: "图片提示(图片的名字)" },
//             { Correct: "测试电影名字6", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影dd", Movie: "图片提示(图片的名字)" },
//         ];
//         if (this.Game_Script.FilmLevel >= FilmData.length) {
//             this.KeyData = FilmData[FilmData.length - 1];
//         } else {
//             this.KeyData = FilmData[this.Game_Script.FilmLevel];
//         }
//     }
//     /**获取结果 */
//     GetResult(Char: string): { isValid: boolean, isComplete: boolean } {
//         // 拼接新字符形成候选字符串
//         const Candidate = this.ValueStr + Char;
//         // 检查是否是完整成语
//         const isComplete: boolean = Candidate === this.KeyData.Correct;
//         // 检查是否有成语以这个候选字符串开头
//         const isValid = this.KeyData.Correct?.startsWith(Candidate) ?? false;
//         if (isValid) {
//             this.ValueIndex++;
//         }
//         if (isComplete) {
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

      _cclegacy._RF.push({}, "b36a0U+iW5Oy7t8vfROCwcQ", "PanelFilm", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8616e5dca2c1f59c97fed8b43544499e2d614115.js.map