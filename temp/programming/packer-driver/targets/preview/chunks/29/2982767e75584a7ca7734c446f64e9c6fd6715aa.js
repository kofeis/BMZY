// import { _decorator, Component, find, instantiate, Label, Node, Prefab, resources, Sprite, SpriteFrame, tween, UITransform, v2, v3, Vec2, Animation, log, UIOpacity } from 'cc';
// import { PanelTemplate } from './PanelTemplate';
// import { Tool_Other } from '../../Tool/Tool_Other';
// import { Tool_UI } from '../../Tool/Tool_UI';
// import { Tool_Event } from '../../Tool/Tool_Event';
// import { PlatformApi } from '../../Other/SDK/PlatformApi';
// const { ccclass, property } = _decorator;
// @ccclass('PanelFindActor')
// export class PanelFindActor extends PanelTemplate {
//     /**关卡等级 */
//     FindActorLevel: number = null;
//     /**关卡背景 */
//     LevelBg: Node = null;
//     /**演员节点 */
//     Actors: Node = null;
//     Min_X: number = null;
//     Max_X: number = null;
//     Min_Y: number = null;
//     Max_Y: number = null;
//     /**演员数量 */
//     ActorNumber: number = 10;
//     /**缩放配置 */
//     ScaleArr: number[] = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
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
//             this.LevelBg = find("Window/LevelBg", this.node);
//             this.Actors = find("Window/Actors", this.node);
//             this.BtnTip = find("Panel/PanelBtn/BtnTip", this.node);
//             this.BtnSetting = find("Panel/PanelBtn/BtnSetting", this.node);
//             this.PanelVictory = find("Panel/PanelVictory", this.node);
//             this.PanelVictory.active = false;
//             this.BtnNext = find("BtnNext", this.PanelVictory);
//             this.Max_X = this.Actors.getComponent(UITransform).width / 2;
//             this.Min_X = -this.Max_X;
//             this.Max_Y = this.Actors.getComponent(UITransform).height / 2;
//             this.Min_Y = -this.Max_Y;
//             /**注册按钮事件 */
//             await this.OnBtn(this.Game_Script.AnimSwitch);
//             this.IsInit = true;
//             resolve();
//         });
//     }
//     /**注册按钮 */
//     async OnBtn(AnimSwitch: boolean = false) {
//         /**设置按钮事件 */
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnTip, this.BtnTipCall, this);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnNext, this.BtnNextCall, this);
//         Tool_Event.instance.On_Event_TOUCH_END(this.BtnSetting, this.BtnSettingCall, this);
//         /**设置按钮动画 */
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);
//         Tool_Event.instance.Set_Btn_Event_Anim(this.BtnSetting, AnimSwitch);
//         Tool_Event.instance.On_Event_TOUCH_END(find("Window/LevelBg", this.node), this.ChooseWrongCall, this);
//         let PrefabActor = await this.Resoure_Data.Load_Prefab("Prefab/PanelFindActor/Actor");
//         for (let i = 0; i < this.ActorNumber; i++) {
//             let Actor = Tool_UI.instance.Set_Prefab_Node(PrefabActor, this.Actors, v3(0, 0, 0), "");
//             Tool_Event.instance.On_Event_TOUCH_END(Actor, () => {
//                 if (Actor.getChildByName("Select").active) {
//                     return;
//                 }
//                 this.ChooseCorrectCall(Actor);
//                 this.Score++;
//                 if (this.Score == this.ScoreTarget) {
//                     this.GameVictory();
//                 }
//             })
//             Actor.getChildByName("Tip").active = false;
//             Actor.getChildByName("Select").active = false;
//         }
//     }
//     /**游戏初始 */
//     GameInit() {
//         this.Score = 0;
//         this.ScoreTarget = 10;
//     }
//     /**游戏开始 */
//     async GameStart() {
//         this.GameInit();
//         this.PanelVictory.active = false;
//         this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `找找小熊·${this.Game_Script.FindActorLevel + 1}关`;
//         let PosArr = Tool_Other.instance.Get_Random_Pos_Arr(this.Actors.children.length, this.Min_X, this.Max_X, this.Min_Y, this.Max_Y, 200);
//         for (let i = 0; i < this.Actors.children.length; i++) {
//             this.Actors.children[i].position = PosArr[i];
//             this.Actors.children[i].getChildByName("Sp").scale = v3(this.ScaleArr[i], this.ScaleArr[i], 1);
//             this.Actors.children[i].getChildByName("Sp").getComponent(Animation).play();
//             this.Actors.children[i].getChildByName("Tip").active = false;
//             this.Actors.children[i].getChildByName("Select").active = false;
//         }
//     }
//     /**游戏胜利 */
//     GameVictory() {
//         /**胜利音效 */
//         this.Resoure_Data.Sound_Play("Audio/Sound/Victory");
//         PlatformApi.instance.showInterstitialAd();
//         this.Game_Script.FindActorLevel++;
//         this.Game_Script.FindActorScore += this.Game_Script.IsHint ? 1 : 2;
//         /**保存数据 */
//         this.Game_Script.DataSet();
//         this.Game_Script.UpdateScene();
//         find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint
//         find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
//         find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
//         find("Light", this.PanelVictory).getComponent(Animation).play();
//         this.PanelVictory.active = true;
//     }
//     /**选择正确回调 */
//     ChooseCorrectCall(Actor: Node) {
//         Actor.getChildByName("Tip").active = false;
//         Actor.getChildByName("Select").active = true;
//         tween(Actor.getChildByName("Select").getComponent(Sprite))
//             .set({ fillRange: 0 })
//             .to(0.2, { fillRange: 1 })
//             .start();
//     };
//     /**选择错误回调 */
//     async ChooseWrongCall(Event: any) {
//         /**错误 */
//         this.Resoure_Data.Sound_Play("Audio/Sound/Error");
//         let PrefabError = await this.Resoure_Data.Load_Prefab("Prefab/PanelFindActor/Error");
//         let Parent = find("Window/LevelBg", this.node);
//         let Pos_Touch = Tool_UI.instance.Get_Touch_Position(Event);
//         let NodeError = Tool_UI.instance.Set_Prefab_Node(PrefabError, Parent, Pos_Touch, "");
//         tween(NodeError)
//             .parallel(
//                 tween().to(0.5, { scale: v3(1.2, 1.2, 1) }),
//                 tween(NodeError.getComponent(UIOpacity)).to(0.5, { opacity: 0 })
//             )
//             .call(() => {
//                 NodeError.destroy();
//             })
//             .start();
//     }
//     /**提示按钮回调 */
//     BtnTipCall() {
//         this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//         let NodeTip: Node = null;
//         this.Actors.children.forEach((element) => {
//             if (!element.getChildByName("Select").active && !element.getChildByName("Tip").active) {
//                 NodeTip = element.getChildByName("Tip");
//                 return;
//             }
//         });
//         if (NodeTip == null) {
//             console.log("没有可以提示的了");
//         } else {
//             NodeTip.active = true;
//             this.Game_Script.IsHint = true;
//         }
//     }
//     /**下一关按钮回调 */
//     BtnNextCall() {
//         this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//         this.GameStart();
//     }
//     /**设置按钮回调 */
//     BtnSettingCall() {
//         this.Resoure_Data.Sound_Play("Audio/SoundBtn");
//         this.Game_Script.UpdatePanelSetting(true);
//     }
//     //     startGame() {
//     //         this.winNode.active = false;
//     //         this.defeatNode.active = false;
//     //         this.clearWolves();
//     //         this.setupBackground();
//     //         this.spawnWolves();
//     //         this.isGaming = true;
//     //         this.wolvesFound = 0;
//     //         this.remainingTime = 60;
//     //     }
//     //     clearWolves() {
//     //         this.wolvesContainer.removeAllChildren();
//     //     }
//     //     setupBackground() {
//     //         const bgIndex = (this.currentLevel - 1) % this.levelBackgrounds.length;
//     //         this.background.spriteFrame = new SpriteFrame(resources.get(this.levelBackgrounds[bgIndex]));
//     //     }
//     //     spawnWolves() {
//     //         const positions = this.generatePositions(10, -300, -410, 300, 410);
//     //         positions.forEach((pos, index) => {
//     //             const Actor = instantiate(this.ActorPrefab);
//     //             Actor.setPosition(pos);
//     //             this.wolvesContainer.addChild(Actor);
//     //             const scale = index < 10 - this.smallWolvesCount ? 
//     //                 Math.random() * 0.9 + 0.1 : 
//     //                 Math.random() * 0.05 + 0.025;
//     //             Actor.setScale(scale);
//     //             Actor.on(Node.EventType.TOUCH_END, () => this.onActorFound(Actor), this);
//     //         });
//     //     }
//     //     generatePositions(count: number, minX: number, minY: number, maxX: number, maxY: number): Vec2[] {
//     //         const positions: Vec2[] = [];
//     //         const positionSet = new Set<string>();
//     //         while (positions.length < count) {
//     //             const x = Math.random() * (maxX - minX) + minX;
//     //             const y = Math.random() * (maxY - minY) + minY;
//     //             const pos = v2(x, y);
//     //             const posKey = `${x},${y}`;
//     //             if (!positionSet.has(posKey) && !this.isOverlapping(pos, positions, 150)) {
//     //                 positions.push(pos);
//     //                 positionSet.add(posKey);
//     //             }
//     //         }
//     //         return positions;
//     //     }
//     //     isOverlapping(newPos: Vec2, existingPositions: Vec2[], minDistance: number): boolean {
//     //         return existingPositions.some(pos => {
//     //             return newPos.sub(pos).mag() < minDistance;
//     //         });
//     //     }
//     //     onActorFound(Actor: Node) {
//     //         if (!this.isGaming) return;
//     //         const ActorController = Actor.getComponent("ActorController"); // 假设有ActorController组件
//     //         if (!ActorController.isFound) {
//     //             this.wolvesFound++;
//     //             ActorController.markAsFound();
//     //             if (this.wolvesFound >= 10) {
//     //                 this.winGame();
//     //             }
//     //         }
//     //     }
//     //     onBackgroundTap(event: Event.EventTouch) {
//     //         if (!this.isGaming) return;
//     //         const touchPos = this.background.node.convertToNodeSpaceAR(event.getLocation());
//     //         this.showErrorEffect(touchPos);
//     //         this.remainingTime -= 5;
//     //     }
//     //     showErrorEffect(position: Vec2) {
//     //         const effect = instantiate(this.errorEffectPrefab);
//     //         effect.setPosition(position);
//     //         this.background.node.addChild(effect);
//     //         tween(effect)
//     //             .to(0.2, { scale: 1.1 })
//     //             .to(0.2, { opacity: 0 })
//     //             .call(() => effect.destroy())
//     //             .start();
//     //     }
//     //     update(dt: number) {
//     //         if (!this.isGaming) return;
//     //         this.remainingTime -= dt;
//     //         this.timeLabel.string = Math.ceil(this.remainingTime).toString();
//     //         if (this.remainingTime <= 0) {
//     //             this.defeat();
//     //         }
//     //     }
//     //     winGame() {
//     //         this.isGaming = false;
//     //         this.winNode.active = true;
//     //         this.winNode.opacity = 0;
//     //         tween(this.winNode)
//     //             .to(0.2, { opacity: 255 })
//     //             .start();
//     //     }
//     //     defeat() {
//     //         this.isGaming = false;
//     //         this.defeatNode.active = true;
//     //         this.defeatNode.opacity = 0;
//     //         tween(this.defeatNode)
//     //             .to(0.2, { opacity: 255 })
//     //             .start();
//     //     }
//     //     restartGame() {
//     //         this.startGame();
//     //     }
//     //     nextLevel() {
//     //         this.currentLevel++;
//     //         this.smallWolvesCount = this.calculateSmallWolvesCount();
//     //         this.startGame();
//     //     }
//     //     calculateSmallWolvesCount(): number {
//     //         if (this.currentLevel < 3) return 2;
//     //         if (this.currentLevel < 6) return 4;
//     //         return 6;
//     //     }
//     // }
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

      _cclegacy._RF.push({}, "95828eUiMBE7qtWCukJOYf6", "PanelFindActor", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2982767e75584a7ca7734c446f64e9c6fd6715aa.js.map