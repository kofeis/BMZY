System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Sprite, tween, UITransform, v3, Animation, PanelTemplate, Tool_Other, Tool_UI, Tool_Event, _dec, _class, _crd, ccclass, property, PanelFindWolf;

  function _reportPossibleCrUseOfPanelTemplate(extras) {
    _reporterNs.report("PanelTemplate", "./PanelTemplate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../../Tool/Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../../Tool/Tool_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../../Tool/Tool_Event", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      PanelTemplate = _unresolved_2.PanelTemplate;
    }, function (_unresolved_3) {
      Tool_Other = _unresolved_3.Tool_Other;
    }, function (_unresolved_4) {
      Tool_UI = _unresolved_4.Tool_UI;
    }, function (_unresolved_5) {
      Tool_Event = _unresolved_5.Tool_Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15591ZNKZtGxofJg5In3MDT", "PanelFindWolf", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'resources', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'v2', 'v3', 'Vec2', 'Animation', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelFindWolf", PanelFindWolf = (_dec = ccclass('PanelFindWolf'), _dec(_class = class PanelFindWolf extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor(...args) {
          super(...args);

          /**关卡等级 */
          this.FindWolfLevel = null;

          /**关卡背景 */
          this.LevelBg = null;

          /**狼节点 */
          this.Wolfs = null;
          this.Min_X = null;
          this.Max_X = null;
          this.Min_Y = null;
          this.Max_Y = null;

          /**缩放配置 */
          this.ScaleArr = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        }

        async start() {
          super.start();
          this.DataGet();
          this.DataSet();
          this.LevelBg = find("Window/LevelBg", this.node);
          this.Wolfs = find("Window/Wolfs", this.node);
          this.BtnTip = find("Panel/PanelBtn/BtnTip", this.node);
          this.BtnSetting = find("Panel/PanelBtn/BtnSetting", this.node);
          this.PanelVictory = find("Panel/PanelVictory", this.node);
          this.PanelVictory.active = false;
          this.BtnNext = find("BtnNext", this.PanelVictory);
          this.Max_X = this.Wolfs.getComponent(UITransform).width / 2;
          this.Min_X = -this.Max_X;
          this.Max_Y = this.Wolfs.getComponent(UITransform).height / 2;
          this.Min_Y = -this.Max_Y;
          this.OnBtn();
          this.GameStart();
        }
        /**注册按钮 */


        OnBtn() {
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnTip, this.BtnTipCall, this);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnNext, this.BtnNextCall, this);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnSetting, this.BtnSettingCall, this);
        }
        /**初始数据 */


        InitData() {
          this.Score = 0;
          this.ScoreTarget = 10;
        }
        /**游戏开始 */


        async GameStart() {
          this.InitData();
          this.PanelVictory.active = false;
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance;
          let PosArr = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Random_Pos_Arr(10, this.Min_X, this.Max_X, this.Min_Y, this.Max_Y);

          if (this.Wolfs.children.length == 0) {
            let PrefabWolf = await this.Resoure_Data.Load_Prefab("Prefab/PanelFindWolf/Wolf");

            for (let i = 0; i < PosArr.length; i++) {
              let Wolf = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabWolf, this.Wolfs, v3(0, 0, 0), "");
              Wolf.position = PosArr[i];
              Wolf.getChildByName("Sp").scale = v3(this.ScaleArr[i], this.ScaleArr[i], 1);
              Wolf.getChildByName("Sp").getComponent(Animation).play();
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Wolf, () => {
                if (Wolf.getChildByName("Select").active) {
                  return;
                }

                this.ShowSelect(Wolf);
                this.Score++;

                if (this.Score == this.ScoreTarget) {
                  this.GameVictory();
                }
              });
              Wolf.getChildByName("Tip").active = false;
              Wolf.getChildByName("Select").active = false;
            }
          } else {
            for (let i = 0; i < this.Wolfs.children.length; i++) {
              this.Wolfs.children[i].position = PosArr[i];
              this.Wolfs.children[i].getChildByName("Sp").scale = v3(this.ScaleArr[i], this.ScaleArr[i], 1);
              this.Wolfs.children[i].getChildByName("Sp").getComponent(Animation).play();
              this.Wolfs.children[i].getChildByName("Tip").active = false;
              this.Wolfs.children[i].getChildByName("Select").active = false;
            }
          }
        }
        /**选中 */


        ShowSelect(Wolf) {
          Wolf.getChildByName("Tip").active = false;
          Wolf.getChildByName("Select").active = true;
          tween(Wolf.getChildByName("Select").getComponent(Sprite)).set({
            fillRange: 0
          }).to(0.2, {
            fillRange: 1
          }).start();
        }

        /**游戏胜利 */
        GameVictory() {
          console.log("游戏胜利");
          this.FindWolfLevel++;
          this.DataSet();
          this.PanelVictory.active = true;
        }
        /**提示按钮回调 */


        BtnTipCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          let NodeTip = null;
          this.Wolfs.children.forEach(element => {
            if (!element.getChildByName("Select").active && !element.getChildByName("Tip").active) {
              NodeTip = element.getChildByName("Tip");
              return;
            }
          });

          if (NodeTip == null) {
            console.log("没有可以提示的了");
          } else {
            NodeTip.active = true;
          }
        }
        /**下一关 */


        BtnNextCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          this.GameStart();
        }
        /**设置界面 */


        BtnSettingCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Node_Index_Set(this.Game_Script.PanelSetting, -1);
          this.Game_Script.PS_BtnMain.active = true;
          this.Game_Script.PanelSetting.active = true;
        }
        /**设置数据 */


        DataGet() {
          /**openId */
          let FindWolfLevel = this.Resoure_Data.Data_Get("FindWolfLevel");

          if (FindWolfLevel == null || FindWolfLevel == undefined) {
            this.FindWolfLevel = 0;
            this.Resoure_Data.Data_Set("FindWolfLevel", this.FindWolfLevel);
            FindWolfLevel = this.Resoure_Data.Data_Get("FindWolfLevel");
          }

          this.FindWolfLevel = FindWolfLevel;
        }
        /**保存数据 */


        DataSet() {
          this.Resoure_Data.Data_Set("FindWolfLevel", this.FindWolfLevel);
        } //     startGame() {
        //         this.winNode.active = false;
        //         this.defeatNode.active = false;
        //         this.clearWolves();
        //         this.setupBackground();
        //         this.spawnWolves();
        //         this.isGaming = true;
        //         this.wolvesFound = 0;
        //         this.remainingTime = 60;
        //     }
        //     clearWolves() {
        //         this.wolvesContainer.removeAllChildren();
        //     }
        //     setupBackground() {
        //         const bgIndex = (this.currentLevel - 1) % this.levelBackgrounds.length;
        //         this.background.spriteFrame = new SpriteFrame(resources.get(this.levelBackgrounds[bgIndex]));
        //     }
        //     spawnWolves() {
        //         const positions = this.generatePositions(10, -300, -410, 300, 410);
        //         positions.forEach((pos, index) => {
        //             const wolf = instantiate(this.wolfPrefab);
        //             wolf.setPosition(pos);
        //             this.wolvesContainer.addChild(wolf);
        //             const scale = index < 10 - this.smallWolvesCount ? 
        //                 Math.random() * 0.9 + 0.1 : 
        //                 Math.random() * 0.05 + 0.025;
        //             wolf.setScale(scale);
        //             wolf.on(Node.EventType.TOUCH_END, () => this.onWolfFound(wolf), this);
        //         });
        //     }
        //     generatePositions(count: number, minX: number, minY: number, maxX: number, maxY: number): Vec2[] {
        //         const positions: Vec2[] = [];
        //         const positionSet = new Set<string>();
        //         while (positions.length < count) {
        //             const x = Math.random() * (maxX - minX) + minX;
        //             const y = Math.random() * (maxY - minY) + minY;
        //             const pos = v2(x, y);
        //             const posKey = `${x},${y}`;
        //             if (!positionSet.has(posKey) && !this.isOverlapping(pos, positions, 150)) {
        //                 positions.push(pos);
        //                 positionSet.add(posKey);
        //             }
        //         }
        //         return positions;
        //     }
        //     isOverlapping(newPos: Vec2, existingPositions: Vec2[], minDistance: number): boolean {
        //         return existingPositions.some(pos => {
        //             return newPos.sub(pos).mag() < minDistance;
        //         });
        //     }
        //     onWolfFound(wolf: Node) {
        //         if (!this.isGaming) return;
        //         const wolfController = wolf.getComponent("WolfController"); // 假设有WolfController组件
        //         if (!wolfController.isFound) {
        //             this.wolvesFound++;
        //             wolfController.markAsFound();
        //             if (this.wolvesFound >= 10) {
        //                 this.winGame();
        //             }
        //         }
        //     }
        //     onBackgroundTap(event: Event.EventTouch) {
        //         if (!this.isGaming) return;
        //         const touchPos = this.background.node.convertToNodeSpaceAR(event.getLocation());
        //         this.showErrorEffect(touchPos);
        //         this.remainingTime -= 5;
        //     }
        //     showErrorEffect(position: Vec2) {
        //         const effect = instantiate(this.errorEffectPrefab);
        //         effect.setPosition(position);
        //         this.background.node.addChild(effect);
        //         tween(effect)
        //             .to(0.2, { scale: 1.1 })
        //             .to(0.2, { opacity: 0 })
        //             .call(() => effect.destroy())
        //             .start();
        //     }
        //     update(dt: number) {
        //         if (!this.isGaming) return;
        //         this.remainingTime -= dt;
        //         this.timeLabel.string = Math.ceil(this.remainingTime).toString();
        //         if (this.remainingTime <= 0) {
        //             this.defeat();
        //         }
        //     }
        //     winGame() {
        //         this.isGaming = false;
        //         this.winNode.active = true;
        //         this.winNode.opacity = 0;
        //         tween(this.winNode)
        //             .to(0.2, { opacity: 255 })
        //             .start();
        //     }
        //     defeat() {
        //         this.isGaming = false;
        //         this.defeatNode.active = true;
        //         this.defeatNode.opacity = 0;
        //         tween(this.defeatNode)
        //             .to(0.2, { opacity: 255 })
        //             .start();
        //     }
        //     restartGame() {
        //         this.startGame();
        //     }
        //     nextLevel() {
        //         this.currentLevel++;
        //         this.smallWolvesCount = this.calculateSmallWolvesCount();
        //         this.startGame();
        //     }
        //     calculateSmallWolvesCount(): number {
        //         if (this.currentLevel < 3) return 2;
        //         if (this.currentLevel < 6) return 4;
        //         return 6;
        //     }
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f744e1e9c4ab141837f94710e2e88387b0680ee.js.map