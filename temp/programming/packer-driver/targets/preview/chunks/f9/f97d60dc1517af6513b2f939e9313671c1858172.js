// import { _decorator, color, Component, find, Label, Layout, Node, RichText, Sprite, tween, UIOpacity, v3, Animation } from 'cc';
// import { PanelTemplate } from './PanelTemplate';
// import { PlatformApi } from '../../Other/SDK/PlatformApi';
// import { Tool_Animation } from '../../Tool/Tool_Animation';
// import { Tool_Event } from '../../Tool/Tool_Event';
// import { Tool_Other } from '../../Tool/Tool_Other';
// import { Tool_UI } from '../../Tool/Tool_UI';
// import { Game_Mode } from '../../Tool/Resoure_Data';
// const { ccclass, property } = _decorator;
// @ccclass('PanelDish')
// export class PanelDish extends PanelTemplate {
//     /**主要面板 */
//     PanelPlay: Node = null;
//     /**地区文本 */
//     LabelRegion: Label = null;
//     /**目标文本 */
//     LabelTarget: Label = null;
//     /**分数文本 */
//     LabelScore: RichText = null;
//     /**菜品图片 */
//     ImgDish: Node = null;
//     /**正确图片 */
//     ImgCorrect: Node = null;
//     /**错误图片 */
//     ImgWrong: Node = null;
//     /**选项A */
//     OptionA: Node = null;
//     /**选项A文本 */
//     LabelOptionA: Label = null;
//     /**选项B */
//     OptionB: Node = null;
//     /**选项B文本 */
//     LabelOptionB: Label = null;
//     /**选项C */
//     OptionC: Node = null;
//     /**选项C文本 */
//     LabelOptionC: Label = null;
//     /**提示按钮 */
//     BtnTip: Node = null;
//     /**设置按钮 */
//     BtnSetting: Node = null;
//     /**结算面板 */
//     PanelSettle: Node = null;
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
//             this.BtnSetting = find("PanelUI/BtnSetting", this.node);
//             this.BtnTip = find("PanelUI/BtnTip", this.node);
//             this.PanelPlay = find("PanelPlay", this.node);
//             this.OptionA = find("OptionA", this.PanelPlay);
//             this.LabelOptionA = find("OptionA/Label", this.PanelPlay).getComponent(Label);
//             this.OptionB = find("OptionB", this.PanelPlay);
//             this.LabelOptionB = find("OptionB/Label", this.PanelPlay).getComponent(Label);
//             this.OptionC = find("OptionC", this.PanelPlay);
//             this.LabelOptionC = find("OptionC/Label", this.PanelPlay).getComponent(Label);
//             this.LabelRegion = find("Title/LabelRegion", this.node).getComponent(Label);
//             this.LabelTarget = find("Layout/LabelTarget", this.PanelPlay).getComponent(Label);
//             this.LabelScore = find("Layout/LabelScore", this.PanelPlay).getComponent(RichText);
//             this.ImgDish = find("ImgDish", this.PanelPlay);
//             this.ImgCorrect = find("ImgCorrect", this.PanelPlay);
//             this.ImgWrong = find("ImgWrong", this.PanelPlay);
//             this.PanelVictory = find("PanelVictory", this.node);
//             this.PanelFail = find("PanelFail", this.node);
//             this.PanelSettle = find("PanelSettle", this.node);
//             /**注册按钮事件 */
//             await this.OnBtn(this.Game_Script.AnimSwitch);
//             this.IsInit = true;
//             resolve();
//         });
//     }
//     /**注册按钮 */
//     async OnBtn(AnimSwitch: boolean = false) {
//         /**设置按钮 */
//         const FunPGBtnSetting = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.Game_Script.UpdatePanelSetting(true);
//         }
//         /**选项A按钮  */
//         const FunPGOptionA = () => {
//             if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
//                 return;
//             }
//             if (this.LabelOptionA.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                 this.GameVictory();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionA, color(0, 255, 0, 255));
//             } else {
//                 this.GameFailed();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionA, color(255, 0, 0, 255));
//             }
//         }
//         /**选项B按钮  */
//         const FunPGOptionB = () => {
//             if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
//                 return;
//             }
//             if (this.LabelOptionB.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                 this.GameVictory();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionB, color(0, 255, 0, 255));
//             } else {
//                 this.GameFailed();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionB, color(255, 0, 0, 255));
//             }
//         }
//         /**选项C按钮  */
//         const FunPGOptionC = () => {
//             if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
//                 return;
//             }
//             if (this.LabelOptionC.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                 this.GameVictory();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionC, color(0, 255, 0, 255));
//             } else {
//                 this.GameFailed();
//                 Tool_UI.instance.Set_Color_Sprite(this.OptionC, color(255, 0, 0, 255));
//             }
//         }
//         /**提示按钮 */
//         const FunPGBtnTip = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             if (this.Game_Script.PropNum > 0) {
//                 if (this.OptionA.active && this.OptionB.active && this.OptionC.active) {
//                     if (this.Resoure_Data.Game_Mode == Game_Mode.Endless) {
//                         if (this.Game_Script.PropNumUse == this.Game_Script.PropNumUseMax) {
//                             this.Game_Script.OnMessage("道具使用上限");
//                             return;
//                         } else {
//                             this.Game_Script.PropNumUse++;
//                         }
//                     }
//                     this.Game_Script.IsHint = true;
//                     this.Game_Script.PropNum--;
//                     this.BtnTip.active = false;
//                     this.Game_Script.DataSet();
//                     this.UpdatePropUI();
//                     if (this.LabelOptionA.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                         this.OptionA.active = true;
//                     } else {
//                         this.OptionA.active = false;
//                     }
//                     if (this.LabelOptionB.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                         this.OptionB.active = true;
//                     } else {
//                         this.OptionB.active = false;
//                     }
//                     if (this.LabelOptionC.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
//                         this.OptionC.active = true;
//                     } else {
//                         this.OptionC.active = false;
//                     }
//                 }
//             } else {
//                 PlatformApi.instance.showVideoAd(() => {
//                     this.Game_Script.PropNum += 3;
//                     this.UpdatePropUI();
//                     this.Game_Script.DataSet();
//                 }, () => {
//                     this.Game_Script.PropNum += 0;
//                     this.UpdatePropUI();
//                     this.Game_Script.DataSet();
//                 });
//             }
//         }
//         /**分享按钮 */
//         const FunPGShare = async () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             // if (this.ShareTime == -1) {
//             this.Game_Script.ShareTime = this.Resoure_Data.Get_Timestamp();
//             var e = new Date().getTime();
//             console.log("当前邀请时间", this.Game_Script.ShareTime, "当前时间", e);
//             console.log("剩余有效时间", this.Game_Script.ShareTime + 2592e5 - e);
//             this.Game_Script.DataSet();
//             // } else {
//             // }
//             PlatformApi.instance.shareAppMessage(() => {
//                 this.Game_Script.GetProp(1, "分享成功");
//                 console.log("分享成功");
//             }, () => {
//                 console.log("分享失败");
//             });
//         }
//         /**再生广告按钮 */
//         const FunPGResurAd = () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             PlatformApi.instance.showVideoAd(async () => {
//                 console.log("复活成功");
//                 this.Game_Script.IsContinue = true;
//                 Tool_Other.instance.Sort_Random(this.Game_Script.TopicData);
//                 if (this.Resoure_Data.Game_Mode == Game_Mode.Endless) {
//                     this.Game_Script.PropNumUse++;
//                     console.log("复活次数", this.Game_Script.PropNumUse);
//                 }
//                 await this.GameStart();
//             }, () => {
//                 console.log("复活失败");
//                 return;
//             });
//         }
//         /**返回按钮 */
//         const FunBack = async () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.Game_Script.PanelGameHide();
//             this.Game_Script.ViewHide();
//             switch (this.Resoure_Data.Game_Mode) {
//                 case Game_Mode.Endless:
//                     this.Game_Script.ViewNormal.active = false;
//                     this.Game_Script.ViewMain.active = true;
//                     if (this.Game_Script.TopicIndex >= 1) {//this.TopicIndexMin
//                         let Index = this.Game_Script.PlaceBarId - 1;
//                         console.log(`参与盖楼,地区是${this.Game_Script.ConfigRegionDish[Index].City}`);
//                         let DataRegionalRanking = await this.Resoure_Data.Fetch_Data(this.Game_Script.UrlRegionRanking);
//                         console.log(DataRegionalRanking.RegionalRanking);
//                         console.log("修改前的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
//                         DataRegionalRanking.RegionalRanking[Index].Score += this.Game_Script.TopicIndex;
//                         console.log("修改后的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
//                         await this.Resoure_Data.Update_Data(this.Game_Script.UrlRegionRanking, DataRegionalRanking);
//                     }
//                     break;
//                 case Game_Mode.Normal:
//                     this.Game_Script.ViewMain.active = false;
//                     this.Game_Script.ViewNormal.active = true;
//                     break;
//                 default:
//                     break;
//             }
//         }
//         /**继续游戏按钮回调 */
//         const BtnNextCall = async () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.Game_Script.PanelGameHide();
//             this.Game_Script.ViewHide();
//             this.Game_Script.ViewMain.active = false;
//             this.Game_Script.ViewNormal.active = true;
//         }
//         /**返回首页按钮回调 */
//         const BtnBreakCall = async () => {
//             this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//             this.Game_Script.PanelGameHide();
//             this.Game_Script.ViewHide();
//             this.Game_Script.ViewNormal.active = false;
//             this.Game_Script.ViewMain.active = true;
//             this.Resoure_Data.Game_Mode = Game_Mode.Tutorial;
//         }
//         /**设置按钮 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnSetting.getChildByName("Icon"), FunPGBtnSetting);
//         /**提示按钮 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTip, FunPGBtnTip);
//         /**选项按钮 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.OptionA, FunPGOptionA);
//         Tool_Event.instance.On_Event_TOUCH_END(this.OptionB, FunPGOptionB);
//         Tool_Event.instance.On_Event_TOUCH_END(this.OptionC, FunPGOptionC);
//         /**胜利界面按钮 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnBreak"), BtnBreakCall);
//         /**失败界面按钮 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnShare"), FunPGShare);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnResurAd"), FunPGResurAd);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnBack"), FunBack);
//         /**结算面板 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnResurAd"), FunPGResurAd);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnBack"), FunBack);
//         Tool_Event.instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnClose"), FunBack);
//         /**设置按钮动画 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.OptionA, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.OptionB, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.OptionC, AnimSwitch);
//         /**提示按钮 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnSetting.getChildByName("Icon"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnShare"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnResurAd"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBack"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnResurAd"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnBack"), AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnClose"), AnimSwitch);
//     }
//     /**游戏开始 */
//     async GameStart() {
//         if (this.Game_Script == null) {
//             return;
//         }
//         this.ImgCorrect.active = false;
//         this.ImgWrong.active = false;
//         this.PanelVictory.active = false;
//         this.PanelFail.active = false;
//         this.PanelSettle.active = false;
//         this.PanelPlay.active = true;
//         this.BtnTip.active = true;
//         this.OptionA.active = true;
//         this.OptionB.active = true;
//         this.OptionC.active = true;
//         Tool_UI.instance.Set_Color_Sprite(this.OptionA);
//         Tool_UI.instance.Set_Color_Sprite(this.OptionB);
//         Tool_UI.instance.Set_Color_Sprite(this.OptionC);
//         this.UpdatePropUI();
//         /**更新提示 */
//         switch (this.Resoure_Data.Game_Mode) {
//             case Game_Mode.Endless:
//                 this.LabelRegion.string = "做个好菜·无尽模式";
//                 this.PanelPlay.getChildByName("Endless").active = true;
//                 /**最高记录 */
//                 this.LabelTarget.string = `历史最高记录 `;
//                 this.LabelScore.string = `第<size=60>${this.Game_Script.TopicIndex + 1}</size><size=50>/</size><size=60>${this.Game_Script.HighestRecordLast}</size>道`;
//                 break;
//             case Game_Mode.Normal:
//                 let City = this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].City;
//                 this.LabelRegion.string = `做个好菜·${City}省`;
//                 this.PanelPlay.getChildByName("Endless").active = false;
//                 this.PanelPlay.getChildByName("Title").getChildByName("Label").getComponent(Label).string = `食在${City}`
//                 this.LabelTarget.string = `猜出${this.Game_Script.TopicCount}道美食名称·`;
//                 this.LabelScore.string = `第${(this.Game_Script.TopicIndex + 1)}道`;
//                 break;
//             case Game_Mode.Tutorial:
//                 this.LabelRegion.string = "猜一猜";
//                 this.LabelTarget.string = `猜出${this.Game_Script.TopicCount}道美食名称·`;
//                 break;
//             default:
//                 break;
//         }
//         /**图片赋值 */
//         let SpriteFrame = await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Dish/" + this.Game_Script.TopicData[this.Game_Script.TopicIndex].Id);
//         Tool_UI.instance.Set_SpriteFrame(this.ImgDish, SpriteFrame);
//         /**文本赋值 */
//         let Result = [];
//         Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName)
//         Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].WrongName)
//         Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].WrongName)
//         Tool_Other.instance.Sort_Random(Result);
//         this.LabelOptionA.string = Result[0];
//         this.LabelOptionB.string = Result[1];
//         this.LabelOptionC.string = Result[2];
//     }
//     /**初始数据 */
//     async InitData() {
//     }
//     /**游戏胜利 */
//     async GameVictory() {
//         this.Resoure_Data.Sound_Play("Audio/SoundCorrect");
//         this.ImgCorrect.active = true;
//         this.Game_Script.DishDataTemp.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex]);
//         this.Game_Script.BlockInputEvents.active = true;
//         await Tool_Animation.instance.Async_Wait(0.5);
//         this.Game_Script.BlockInputEvents.active = false;
//         this.Game_Script.TopicIndex++;
//         /**游戏胜利 */
//         if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
//             /**胜利音效 */
//             this.Resoure_Data.Sound_Play("Audio/Sound/Victory");
//             switch (this.Resoure_Data.Game_Mode) {
//                 case Game_Mode.Endless:
//                     /**最高记录 */
//                     this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
//                     /**无尽星星数 */
//                     this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);
//                 case Game_Mode.Normal:
//                     this.PanelPlay.active = false;
//                     // let LineHint = find("Settle/Line2", this.PanelVictory);
//                     // let LineContinue = find("Settle/Line3", this.PanelVictory);
//                     // LineHint.getChildByName("Win").active = !this.Game_Script.IsHint;
//                     // LineHint.getChildByName("Lose").active = this.Game_Script.IsHint;
//                     // LineContinue.getChildByName("Win").active = !this.Game_Script.IsContinue;
//                     // LineContinue.getChildByName("Lose").active = this.Game_Script.IsContinue;
//                     // this.Resoure_Data.Sound_Play("Audio/SoundWin");
//                     this.PanelVictory.active = true;
//                     this.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1")
//                     this.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1")
//                     find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint
//                     find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
//                     find("WinBanner/Condition2/Correct", this.PanelVictory).active = !this.Game_Script.IsContinue
//                     find("WinBanner/Condition2/Wrong", this.PanelVictory).active = this.Game_Script.IsContinue;
//                     find("WinBanner/Stars/StarC", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
//                     find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsContinue;
//                     find("Light", this.PanelVictory).getComponent(Animation).play();
//                     //星星数
//                     let StarsLevel: number = 1;
//                     StarsLevel += this.Game_Script.IsHint ? 0 : 1;
//                     StarsLevel += this.Game_Script.IsContinue ? 0 : 1;
//                     this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].IsSuccess = true;
//                     this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].StarsLevel = StarsLevel;
//                     //完美通关
//                     if (!this.Game_Script.IsContinue && !this.Game_Script.IsHint) {//&& !this.IsHint
//                         const KeyId = this.Game_Script.TopicDataId - 1;
//                         const KeyDataV = `DishData${this.Game_Script.ConfigRegionDish[KeyId].NamePinYin}Victory`;
//                         this[KeyDataV] = [...this[KeyDataV], ... this.Game_Script.DishDataTemp];
//                         this.Game_Script.SetDishData();
//                     }
//                     /**保存数据 */
//                     this.Game_Script.DataSet();
//                     /**刷新场景 */
//                     this.Game_Script.UpdateScene();
//                     break;
//                 case Game_Mode.Tutorial:
//                     this.Game_Script.PanelGameHide();
//                     this.Game_Script.ViewNormal.active = false;
//                     this.Game_Script.ViewMain.active = true;
//                     this.Resoure_Data.Data_Set("First_Start", false);
//                     break;
//                 default:
//                     break;
//             }
//         } else {
//             switch (this.Resoure_Data.Game_Mode) {
//                 case Game_Mode.Endless:
//                     /**最高记录 */
//                     this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
//                     /**无尽星星数 */
//                     this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);
//                     /**保存数据 */
//                     this.Game_Script.DataSet();
//                     break;
//                 case Game_Mode.Normal:
//                     break;
//                 case Game_Mode.Tutorial:
//                     break;
//                 default:
//                     break;
//             }
//             await this.GameStart();
//         }
//     }
//     /**游戏失败 */
//     async GameFailed() {
//         this.Resoure_Data.Sound_Play("Audio/SoundWrong");
//         if (this.Resoure_Data.Vibration_Switch_Get()) {
//             PlatformApi.instance.vibrateShort();
//         }
//         this.ImgWrong.active = true;
//         this.Game_Script.BlockInputEvents.active = true;
//         await Tool_Animation.instance.Async_Wait(0.5);
//         this.Game_Script.BlockInputEvents.active = false;
//         this.BtnTip.active = false;
//         this.OptionA.active = false;
//         this.OptionB.active = false;
//         this.OptionC.active = false;
//         this.PanelFail.active = true;
//         switch (this.Resoure_Data.Game_Mode) {
//             case Game_Mode.Endless:
//                 /**最高记录 */
//                 this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
//                 /**无尽星星数 */
//                 this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);
//                 this.PanelSettle.active = true;
//                 this.PanelFail.active = false;
//                 this.PanelSettle.getChildByName("Window").getChildByName("Title").getComponent(Label).string = this.Game_Script.TopicIndexMin - this.Game_Script.TopicIndex <= 0 ? `进入首页房屋,答对题目${this.Game_Script.TopicIndex}` : `还需答对${this.Game_Script.TopicIndexMin - this.Game_Script.TopicIndex}题即可进入首页房屋`;
//                 this.PanelSettle.getChildByName("Window").getChildByName("Number").getComponent(Label).string = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse + ""
//                 this.PanelSettle.getChildByName("BtnResurAd").active = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse == 0 ? false : true;
//                 this.PanelSettle.getChildByName("BtnBack").active = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse == 0 ? true : false;
//                 if (this.Game_Script.PropNumUse == this.Game_Script.PropNumUseMax) {
//                     console.log(`闯关失败,答对题目${this.Game_Script.TopicIndex}`);
//                 }
//             case Game_Mode.Normal:
//                 /**保存数据 */
//                 this.Game_Script.DataSet();
//                 /**刷新场景 */
//                 this.Game_Script.UpdateScene();
//                 break;
//             case Game_Mode.Tutorial:
//                 break;
//             default:
//                 break;
//         }
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

      _cclegacy._RF.push({}, "f4cadY/+CFLcJQF7PnsyN8G", "PanelDish", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f97d60dc1517af6513b2f939e9313671c1858172.js.map