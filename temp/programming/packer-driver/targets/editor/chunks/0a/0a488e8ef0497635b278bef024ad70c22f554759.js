System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Layout, Sprite, tween, UIOpacity, v3, Animation, PlatformApi, Tool_Event, Tool_UI, PanelTemplate, Tool_Animation, Tool_Other, _dec, _class, _crd, ccclass, property, PanelFilm;

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../../Other/SDK/PlatformApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../../Tool/Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../../Tool/Tool_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelTemplate(extras) {
    _reporterNs.report("PanelTemplate", "./PanelTemplate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "../../Tool/Tool_Animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../../Tool/Tool_Other", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      find = _cc.find;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      PlatformApi = _unresolved_2.PlatformApi;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }, function (_unresolved_4) {
      Tool_UI = _unresolved_4.Tool_UI;
    }, function (_unresolved_5) {
      PanelTemplate = _unresolved_5.PanelTemplate;
    }, function (_unresolved_6) {
      Tool_Animation = _unresolved_6.Tool_Animation;
    }, function (_unresolved_7) {
      Tool_Other = _unresolved_7.Tool_Other;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b36a0U+iW5Oy7t8vfROCwcQ", "PanelFilm", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'Label', 'Layout', 'log', 'Node', 'Sprite', 'tween', 'UIOpacity', 'v3', 'Vec3', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);
      /**影视数据类型 */

      _export("PanelFilm", PanelFilm = (_dec = ccclass('PanelFilm'), _dec(_class = class PanelFilm extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor(...args) {
          super(...args);

          /**Key数据 */
          this.KeyData = null;

          /**Value字符串 */
          this.ValueStr = "";

          /**Value索引 */
          this.ValueIndex = 0;

          /**是否移动 */
          this.ValueMoveing = false;

          /**提示状态 */
          this.TipState = false;

          /**返回按钮 */
          this.BtnBreak = null;

          /**获取答案按钮 */
          this.BtnGet = null;

          /**答案状态 */
          this.GetState = false;

          /**删除按钮 */
          this.BtnDelete = null;
        }

        async onLoad() {
          super.onLoad();
        }

        async onEnable() {
          if (!this.IsInit) {
            await this.LoadPanel();
          }

          this.GameStart();
          this.Resoure_Data.Music_Play("Audio/BGMGame");
        }

        async start() {}
        /**加载面板 */


        async LoadPanel() {
          return new Promise(async (resolve, reject) => {
            /**绑定关键节点 */
            this.BtnSetting = find("BtnSetting", this.node);
            this.BtnTip = find("BtnTip", this.node);
            this.PanelTip = find("PanelTip", this.node);
            this.BtnTipClose = find("BtnTipClose", this.PanelTip);
            this.PanelVictory = find("PanelVictory", this.node);
            this.BtnNext = find("BtnNext", this.PanelVictory);
            this.BtnBreak = find("BtnBreak", this.PanelVictory);
            this.BtnGet = find("BtnGet", this.PanelTip);
            this.BtnDelete = find("Key/BtnDelete", this.node);
            /**注册按钮事件 */

            await this.OnBtn(this.Game_Script.AnimSwitch);
            this.IsInit = true;
            resolve();
          });
        }
        /**注册按钮 */


        async OnBtn(AnimSwitch = false) {
          /**设置按钮 */
          const BtnSettingCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Game_Script.UpdatePanelSetting(true);
          };
          /**提示按钮 */


          const BtnTipCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.TipState) {
              this.PanelTip.active = true;
            } else {
              const Call = () => {
                this.TipState = true;
                this.Game_Script.IsHint = true;
                this.PanelTip.active = true;
              };

              if (this.Game_Script.PropNum > 0) {
                this.Game_Script.PropNum--;
                this.Game_Script.DataSet();
                this.UpdatePropUI();
                Call();
              } else {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.showVideoAd(async () => {
                  Call();
                }, () => {});
              }
            }
          };
          /**关闭提示界面 */


          const BtnTipCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelTip.active = false;
          };
          /**下一关按钮 */


          const BtnNextCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.GameStart();
          };
          /**关闭按钮 */


          const BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.node.active = false;
          };
          /**获取答案 */


          const BtnGetCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.GetState) {
              return;
            }

            this.GetState = true;
            let Grid = find("Window/Grid", this.PanelTip);
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showVideoAd(async () => {
              for (let i = 0; i < Grid.children.length; i++) {
                Grid.children[i].getChildByName("Lock").active = false;
                Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
              }
            }, () => {});
          };
          /**删除按钮 */


          const BtnDeleteCall = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.ValueIndex > 0) {
              let Key = find("Key", this.node);
              Key.children[this.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = "";
              this.ValueStr = this.ValueStr.substring(0, this.ValueStr.length - 1);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Btns[this.ValueIndex - 1], 255);
              this.ValueIndex--;
            }
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnSetting, BtnSettingCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnTip, BtnTipCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnTipClose, BtnTipCloseCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnNext, BtnNextCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnBreak, BtnCloseCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnGet, BtnGetCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnDelete, BtnDeleteCall);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnSetting, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnTipClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnBreak, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnGet, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnDelete, AnimSwitch);
          let Key = find("Key", this.node);
          let Value = find("Value", this.node);
          let Btns = [];

          for (let i = 0; i < Value.children.length; i++) {
            const Component_UIOpacity = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Get(Value.children[i], UIOpacity);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Value.children[i], () => {
              if (Component_UIOpacity.opacity == 255) {
                if (this.ValueMoveing) {
                  return;
                }

                if (this.KeyData == null || this.KeyData == undefined) {
                  return;
                }

                this.Resoure_Data.Sound_Play("Audio/Sound/Click");
                this.ValueMoveing = true;
                Component_UIOpacity.opacity = 155;
                Btns[this.ValueIndex] = Value.children[i];
                let Char = Value.children[i].getChildByName("Label").getComponent(Label).string;
                let Result = this.GetResult(Char);

                if (Result.isValid) {
                  if (this.ValueIndex == 1) {
                    /**首字正确 */
                    this.Resoure_Data.Sound_Play("Audio/Sound/FirstCorrect");
                  }

                  Key.children[this.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;

                  if (Result.isComplete) {
                    this.GameVictory();
                  } else {
                    this.ValueMoveing = false;
                  }
                } else {
                  /**错误 */
                  this.Resoure_Data.Sound_Play("Audio/Sound/Error");
                  Key.children[this.ValueIndex].getChildByName("Label").getComponent(Label).string = Char;
                  let KeyLabel = Key.children[this.ValueIndex].getChildByName("Label");
                  KeyLabel.getComponent(Label).color = color(255, 0, 0, 255);
                  tween(KeyLabel).by(0.05, {
                    position: v3(-25, 0, 0)
                  }, {
                    easing: "quadOut"
                  }).by(0.1, {
                    position: v3(50, 0, 0)
                  }, {
                    easing: "quadOut"
                  }).by(0.05, {
                    position: v3(-25, 0, 0)
                  }, {
                    easing: "quadOut"
                  }).call(() => {}).start();
                  this.scheduleOnce(() => {
                    KeyLabel.getComponent(Label).string = "";
                    KeyLabel.getComponent(Label).color = color(0, 0, 0, 255);
                    Component_UIOpacity.opacity = 255;
                    this.ValueMoveing = false;
                  }, 0.5);
                }
              }
            });
          }
        }
        /**游戏开始 */


        async GameStart() {
          if (this.Game_Script == null) {
            return;
          }
          /**初始化数据 */


          this.InitData();
          this.Game_Script.IsHint = false;
          this.PanelVictory.active = false;
          this.PanelTip.active = false;
          this.TipState = false;
          this.GetState = false;
          this.UpdatePropUI();

          if (this.KeyData == null || this.KeyData == undefined) {
            this.Game_Script.OnMessage("暂时没有新题目了");
            return;
          }

          this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `影视大咖·第${this.Game_Script.FilmLevel + 1}关`;
          let Text = [];

          for (let i = 0; i < this.KeyData.Correct.length; i++) {
            Text.push(this.KeyData.Correct.substring(i, i + 1));
          }

          for (let j = 0; j < this.KeyData.Wrong.length; j++) {
            Text.push(this.KeyData.Wrong.substring(j, j + 1));
          }
          /**初始化提示界面 */


          let Grid = find("Window/Grid", this.PanelTip);

          for (let i = 0; i < Grid.children.length; i++) {
            Grid.children[i].getChildByName("Label").getComponent(Label).string = this.KeyData.Hints.substring(i, i + 1);
            Grid.children[i].getChildByName("Lock").active = true;
            Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
          }

          (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Sort_Random(Text);
          console.log(Text);
          let Key = find("Key", this.node);
          let Value = find("Value", this.node);
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Component_On(Value, Layout);
          Value.getComponent(Layout).updateLayout();

          for (let i = 0; i < Key.children.length - 1; i++) {
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Key.children[i]);
            Key.children[i].getChildByName("Label").getComponent(Label).string = "";
            Key.children[i].scale = v3(1, 1, 1);
            Key.children[i].active = i < this.KeyData.Correct.length ? true : false;
          }

          for (let i = 0; i < Value.children.length; i++) {
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Value.children[i]);
            Value.children[i].getChildByName("Label").getComponent(Label).string = Text[i];
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[i], 255);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(Value.children[i].getChildByName("Bg"), color(255, 227, 167, 255));
            Value.children[i].scale = v3(1, 1, 1);
            Value.children[i].active = true;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[i], 0);
          }
          /**入场节点 */


          let EntryNodes = [];
          let PosEnd = [];
          this.scheduleOnce(async () => {
            for (let i = 0; i < Value.children.length; i++) {
              PosEnd.push(Value.children[i].position.clone());
              EntryNodes.push(Value.children[i]);
            } // PosEnd[Value.children.length - 1] = v3(55, 0, 0);
            // PosEnd[Value.children.length - 2] = v3(-55, 0, 0);


            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Off(Value, Layout);

            for (let i = 0; i < EntryNodes.length; i++) {
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Pos_X(EntryNodes[i], -640);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(EntryNodes[i], 255); // Tool_UI.instance.Node_Index_Set(EntryNodes[i], 0);

              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(EntryNodes[i], PosEnd[i], 0.25);
              await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
            }
          });
        }
        /**游戏胜利 */


        async GameVictory() {
          /**胜利音效 */
          this.Resoure_Data.Sound_Play("Audio/Sound/Victory");
          (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
            error: Error()
          }), PlatformApi) : PlatformApi).instance.showInterstitialAd();
          this.Game_Script.FilmLevel++;
          this.Game_Script.FilmScore += this.Game_Script.IsHint ? 1 : 2;
          /**保存数据 */

          this.Game_Script.DataSet();
          this.Game_Script.UpdateScene();
          find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint;
          find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
          find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
          find("Light", this.PanelVictory).getComponent(Animation).play();
          this.PanelVictory.active = true;
        }
        /**刷新道具UI */


        UpdatePropUI() {
          const BtnTipLabel = this.BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label);
          const BtnTipNull = this.BtnTip.getChildByName("PropNum").getChildByName("PropNumNull");
          BtnTipLabel.string = `${this.Game_Script.PropNum}`;

          if (this.Game_Script.PropNum > 0) {
            BtnTipNull.active = false;
          } else {
            BtnTipNull.active = true;
          }
        }
        /**初始数据 */


        InitData() {
          this.GetData();
          this.ValueStr = "";
          this.ValueIndex = 0;
          this.ValueMoveing = false;
        }
        /**获取数据 */


        GetData() {
          const FilmData = [// === 简单===
          {
            Correct: "测试电影名字1",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影aa",
            Movie: "图片提示(图片的名字)"
          }, {
            Correct: "测试电影名字2",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影ss",
            Movie: "图片提示(图片的名字)"
          }, {
            Correct: "测试电影名字3",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影dd",
            Movie: "图片提示(图片的名字)"
          }, {
            Correct: "测试电影名字4",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影aa",
            Movie: "图片提示(图片的名字)"
          }, {
            Correct: "测试电影名字5",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影ss",
            Movie: "图片提示(图片的名字)"
          }, {
            Correct: "测试电影名字6",
            Wrong: "这段文字是用来凑数的好难编",
            Hints: "测试电影dd",
            Movie: "图片提示(图片的名字)"
          }];

          if (this.Game_Script.FilmLevel >= FilmData.length) {
            this.KeyData = null;
            return;
          }

          this.KeyData = FilmData[this.Game_Script.FilmLevel];
        }
        /**获取结果 */


        GetResult(Char) {
          var _this$KeyData$Correct, _this$KeyData$Correct2;

          // 拼接新字符形成候选字符串
          const Candidate = this.ValueStr + Char; // 检查是否是完整成语

          const isComplete = Candidate === this.KeyData.Correct; // 检查是否有成语以这个候选字符串开头

          const isValid = (_this$KeyData$Correct = (_this$KeyData$Correct2 = this.KeyData.Correct) == null ? void 0 : _this$KeyData$Correct2.startsWith(Candidate)) != null ? _this$KeyData$Correct : false;

          if (isValid) {
            this.ValueIndex++;
          }

          if (isComplete) {
            // 如果是完整成语，重置当前拼接状态
            this.ValueStr = "";
            return {
              isValid: true,
              isComplete: true
            };
          } else if (isValid) {
            // 如果是有效部分，更新当前拼接状态
            this.ValueStr = Candidate;
            return {
              isValid: true,
              isComplete: false
            };
          } else {
            // 无效输入，重置当前拼接状态
            return {
              isValid: false,
              isComplete: false
            };
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a488e8ef0497635b278bef024ad70c22f554759.js.map