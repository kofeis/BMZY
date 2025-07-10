System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Label, Sprite, tween, UITransform, v3, Animation, UIOpacity, PanelTemplate, Tool_Other, Tool_UI, Tool_Event, PlatformApi, _dec, _class, _crd, ccclass, property, PanelFindActor;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../../Other/SDK/PlatformApi", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Animation = _cc.Animation;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      PanelTemplate = _unresolved_2.PanelTemplate;
    }, function (_unresolved_3) {
      Tool_Other = _unresolved_3.Tool_Other;
    }, function (_unresolved_4) {
      Tool_UI = _unresolved_4.Tool_UI;
    }, function (_unresolved_5) {
      Tool_Event = _unresolved_5.Tool_Event;
    }, function (_unresolved_6) {
      PlatformApi = _unresolved_6.PlatformApi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95828eUiMBE7qtWCukJOYf6", "PanelFindActor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'resources', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'v2', 'v3', 'Vec2', 'Animation', 'log', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelFindActor", PanelFindActor = (_dec = ccclass('PanelFindActor'), _dec(_class = class PanelFindActor extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor() {
          super(...arguments);

          /**关卡等级 */
          this.FindActorLevel = null;

          /**关卡背景 */
          this.LevelBg = null;

          /**演员节点 */
          this.Actors = null;
          this.Min_X = null;
          this.Max_X = null;
          this.Min_Y = null;
          this.Max_Y = null;

          /**演员数量 */
          this.ActorNumber = 10;

          /**缩放配置 */
          this.ScaleArr = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        }

        onLoad() {
          var _superprop_getOnLoad = () => super.onLoad,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getOnLoad().call(_this);
          })();
        }

        onEnable() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.IsInit) {
              yield _this2.LoadPanel();
            }

            _this2.GameStart();

            _this2.Resoure_Data.Music_Play("Audio/BGMGame");
          })();
        }

        start() {
          return _asyncToGenerator(function* () {})();
        }
        /**加载面板 */


        LoadPanel() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              /**绑定关键节点 */
              _this3.LevelBg = find("Window/LevelBg", _this3.node);
              _this3.Actors = find("Window/Actors", _this3.node);
              _this3.BtnTip = find("Panel/PanelBtn/BtnTip", _this3.node);
              _this3.BtnSetting = find("Panel/PanelBtn/BtnSetting", _this3.node);
              _this3.PanelVictory = find("Panel/PanelVictory", _this3.node);
              _this3.PanelVictory.active = false;
              _this3.BtnNext = find("BtnNext", _this3.PanelVictory);
              _this3.Max_X = _this3.Actors.getComponent(UITransform).width / 2;
              _this3.Min_X = -_this3.Max_X;
              _this3.Max_Y = _this3.Actors.getComponent(UITransform).height / 2;
              _this3.Min_Y = -_this3.Max_Y;
              /**注册按钮事件 */

              yield _this3.OnBtn(_this3.Game_Script.AnimSwitch);
              _this3.IsInit = true;
              resolve();
            }));
          })();
        }
        /**注册按钮 */


        OnBtn(AnimSwitch) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (AnimSwitch === void 0) {
              AnimSwitch = false;
            }

            /**设置按钮事件 */
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnTip, _this4.BtnTipCall, _this4);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnNext, _this4.BtnNextCall, _this4);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnSetting, _this4.BtnSettingCall, _this4);
            /**设置按钮动画 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnTip, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnNext, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnSetting, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(find("Window/LevelBg", _this4.node), _this4.ChooseWrongCall, _this4);
            var PrefabActor = yield _this4.Resoure_Data.Load_Prefab("Prefab/PanelFindActor/Actor");

            var _loop = function* _loop() {
              var Actor = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabActor, _this4.Actors, v3(0, 0, 0), "");
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Actor, () => {
                if (Actor.getChildByName("Select").active) {
                  return;
                }

                _this4.ChooseCorrectCall(Actor);

                _this4.Score++;

                if (_this4.Score == _this4.ScoreTarget) {
                  _this4.GameVictory();
                }
              });
              Actor.getChildByName("Tip").active = false;
              Actor.getChildByName("Select").active = false;
            };

            for (var i = 0; i < _this4.ActorNumber; i++) {
              yield* _loop();
            }
          })();
        }
        /**游戏初始 */


        GameInit() {
          this.Score = 0;
          this.ScoreTarget = 10;
        }
        /**游戏开始 */


        GameStart() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.GameInit();

            _this5.PanelVictory.active = false;
            _this5.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u627E\u627E\u5C0F\u718A\xB7" + (_this5.Game_Script.FindActorLevel + 1) + "\u5173";
            var PosArr = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Random_Pos_Arr(_this5.Actors.children.length, _this5.Min_X, _this5.Max_X, _this5.Min_Y, _this5.Max_Y, 200);

            for (var i = 0; i < _this5.Actors.children.length; i++) {
              _this5.Actors.children[i].position = PosArr[i];
              _this5.Actors.children[i].getChildByName("Sp").scale = v3(_this5.ScaleArr[i], _this5.ScaleArr[i], 1);

              _this5.Actors.children[i].getChildByName("Sp").getComponent(Animation).play();

              _this5.Actors.children[i].getChildByName("Tip").active = false;
              _this5.Actors.children[i].getChildByName("Select").active = false;
            }
          })();
        }
        /**游戏胜利 */


        GameVictory() {
          /**胜利音效 */
          this.Resoure_Data.Sound_Play("Audio/Sound/Victory");
          (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
            error: Error()
          }), PlatformApi) : PlatformApi).instance.showInterstitialAd();
          this.Game_Script.FindActorLevel++;
          this.Game_Script.FindActorScore += this.Game_Script.IsHint ? 1 : 2;
          /**保存数据 */

          this.Game_Script.DataSet();
          this.Game_Script.UpdateScene();
          find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint;
          find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
          find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
          find("Light", this.PanelVictory).getComponent(Animation).play();
          this.PanelVictory.active = true;
        }
        /**选择正确回调 */


        ChooseCorrectCall(Actor) {
          Actor.getChildByName("Tip").active = false;
          Actor.getChildByName("Select").active = true;
          tween(Actor.getChildByName("Select").getComponent(Sprite)).set({
            fillRange: 0
          }).to(0.2, {
            fillRange: 1
          }).start();
        }

        /**选择错误回调 */
        ChooseWrongCall(Event) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            /**错误 */
            _this6.Resoure_Data.Sound_Play("Audio/Sound/Error");

            var PrefabError = yield _this6.Resoure_Data.Load_Prefab("Prefab/PanelFindActor/Error");
            var Parent = find("Window/LevelBg", _this6.node);
            var Pos_Touch = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Touch_Position(Event);
            var NodeError = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabError, Parent, Pos_Touch, "");
            tween(NodeError).parallel(tween().to(0.5, {
              scale: v3(1.2, 1.2, 1)
            }), tween(NodeError.getComponent(UIOpacity)).to(0.5, {
              opacity: 0
            })).call(() => {
              NodeError.destroy();
            }).start();
          })();
        }
        /**提示按钮回调 */


        BtnTipCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          var NodeTip = null;
          this.Actors.children.forEach(element => {
            if (!element.getChildByName("Select").active && !element.getChildByName("Tip").active) {
              NodeTip = element.getChildByName("Tip");
              return;
            }
          });

          if (NodeTip == null) {
            console.log("没有可以提示的了");
          } else {
            NodeTip.active = true;
            this.Game_Script.IsHint = true;
          }
        }
        /**下一关按钮回调 */


        BtnNextCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          this.GameStart();
        }
        /**设置按钮回调 */


        BtnSettingCall() {
          this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          this.Game_Script.UpdatePanelSetting(true);
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
        //             const Actor = instantiate(this.ActorPrefab);
        //             Actor.setPosition(pos);
        //             this.wolvesContainer.addChild(Actor);
        //             const scale = index < 10 - this.smallWolvesCount ? 
        //                 Math.random() * 0.9 + 0.1 : 
        //                 Math.random() * 0.05 + 0.025;
        //             Actor.setScale(scale);
        //             Actor.on(Node.EventType.TOUCH_END, () => this.onActorFound(Actor), this);
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
        //     onActorFound(Actor: Node) {
        //         if (!this.isGaming) return;
        //         const ActorController = Actor.getComponent("ActorController"); // 假设有ActorController组件
        //         if (!ActorController.isFound) {
        //             this.wolvesFound++;
        //             ActorController.markAsFound();
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
//# sourceMappingURL=0f87872d9997768e7e15695a96f8993837e03638.js.map