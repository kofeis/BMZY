System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, tween, v3, Animation, Sprite, RichText, sys, sp, PanelTemplate, Tool_Event, Tool_Animation, Tool_UI, Tool_Other, Tool_Console, PlatformApi, GravityPlatform, _dec, _class, _crd, ccclass, property, PanelMathMatch;

  function _reportPossibleCrUseOfPanelTemplate(extras) {
    _reporterNs.report("PanelTemplate", "./PanelTemplate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../../Tool/Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "../../Tool/Tool_Animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../../Tool/Tool_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../../Tool/Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Console(extras) {
    _reporterNs.report("Tool_Console", "../../Tool/Tool_Console", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../../Other/SDK/PlatformApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGravityPlatform(extras) {
    _reporterNs.report("GravityPlatform", "../../Other/GeSdk/GravityPlatform", _context.meta, extras);
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
      tween = _cc.tween;
      v3 = _cc.v3;
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      sys = _cc.sys;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      PanelTemplate = _unresolved_2.PanelTemplate;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }, function (_unresolved_4) {
      Tool_Animation = _unresolved_4.Tool_Animation;
    }, function (_unresolved_5) {
      Tool_UI = _unresolved_5.Tool_UI;
    }, function (_unresolved_6) {
      Tool_Other = _unresolved_6.Tool_Other;
    }, function (_unresolved_7) {
      Tool_Console = _unresolved_7.Tool_Console;
    }, function (_unresolved_8) {
      PlatformApi = _unresolved_8.PlatformApi;
    }, function (_unresolved_9) {
      GravityPlatform = _unresolved_9.GravityPlatform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5fff4TX/nBIxrYf0uEIIsI4", "PanelMathMatch", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'Label', 'Layout', 'log', 'math', 'Node', 'Prefab', 'Tween', 'tween', 'v3', 'Vec3', 'Animation', 'Sprite', 'RichText', 'sys', 'sp', 'easing']);

      ({
        ccclass,
        property
      } = _decorator);
      /**数据接口 */

      _export("PanelMathMatch", PanelMathMatch = (_dec = ccclass('PanelMathMatch'), _dec(_class = class PanelMathMatch extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor(...args) {
          super(...args);
          this.Interactable = true;
          //总时间
          this.GameTimeAll = 180;
          //计时时间
          this.GameTimeIng = 0;
          //剩余时间
          this.GameTime = 0;
          this.JGTime = 30;

          /**返回按钮 */
          this.BtnBreak = null;
          this.PanelFH = null;
          this.GameData = null;

          /**有效目标 */
          this.KeyTarget = [];

          /**存在状态 */
          this.KeyExitState = [];

          /**存在节点 */
          this.KeyExitValue = [];

          /**阴影索引 */
          this.KeyShadowIndex = -1;
          //Value节点上一次在Key节点的位置
          this.LastKeyIndex = [];

          /**有效目标 */
          this.ValueTarget = [];
          this.ValuePos = [];

          /**Value有效目标副本 */
          this.ValueTargetC = [];
          this.KeyShadow = null;

          /**有效距离 */
          this.OnDistance = 50;

          /**正确动画节点 */
          this.AnimCorrectNode = [];

          /**错误动画节点 */
          this.AnimWrongNode = [];
          this.TouchNode = null;
          this.TipLabel = null;
          this.TipNode = null;
          this.TipAnim = [];
          this.Obj_Start = {
            num: 0
          };
          this.Time = 0;
          this.Time_Max = 15;
          //15
          this.Step = -1;
        }

        async onLoad() {
          super.onLoad();
        }

        async onEnable() {
          if (!this.IsInit) {
            await this.LoadPanel();
          }

          this.GameStart(); //    this.Resoure_Data.Music_Play("Audio/BgmGame");
        }

        start() {}

        Timing() {
          this.Obj_Start = {
            num: 0
          };
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Function_Target(this.Time_Max, this.Obj_Start, () => {
            //console.log("无操作播放");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play_Plus(this.BtnTip.getChildByName("Icon").getComponent(Animation), null, null, null, null, null, 3, 0, () => {
              this.Timing();
            });
          });
        }

        TimStop() {
          //console.log("重置无操作播放计时");
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.Obj_Start);
          this.Timing();
        }
        /**加载面板 */


        async LoadPanel() {
          return new Promise(async (resolve, reject) => {
            /**绑定关键节点 */
            this.BtnSetting = find("BtnSetting", this.node);
            this.PanelTip = find("PanelTip", this.node);
            this.BtnTip = find("BtnTip", this.node);
            this.BtnTipClose = find("BtnTipClose", this.PanelTip);
            this.BtnTipGet = find("BtnTipGet", this.PanelTip);
            this.PanelFH = find("PanelFH", this.node);
            this.PanelVictory = find("PanelVictory", this.node);
            this.PanelFail = find("PanelFail", this.node);
            this.BtnNext = find("BtnNext", this.PanelVictory); // this.BtnGet = find("BtnGet", this.PanelTip);

            this.BtnExit = find("BtnExit", this.node);
            /**注册按钮事件 */

            await this.OnBtn(this.Game_Script.AnimSwitch);
            this.IsInit = true;
            resolve();
            this.KeyShadow = await this.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/KeyShadow");
          });
        }
        /**注册按钮 */


        async OnBtn(AnimSwitch = false) {
          /**设置按钮 */
          const BtnSettingCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.Game_Script.UpdatePanelSetting(true);
          };
          /**关闭按钮 */


          const BtnBreakCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.node.active = false;
          };

          let IsShare = false;
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Event_On("WXOnShow", () => {
            if (!IsShare) {
              return;
            }

            IsShare = false;
            this.Game_Script.MathMatchLevel--;
            this.Game_Script.MathMatchScore -= this.Score;
            this.Game_Script.DataSet();
            this.GameStart();
            this.Resoure_Data.Music_Resume();
          }, this);
          /**重新游戏 */

          const BtnReStartCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {});

            if (window.wx) {
              IsShare = true;
              console.log("重新游戏wx");
            } else {
              console.log("重新游戏"); //  await Tool_Animation.instance.Async_Wait(2);

              console.log(this.Game_Script.MathMatchLevel);
              this.Game_Script.MathMatchLevel--;
              console.log(this.Game_Script.MathMatchLevel);
              this.Game_Script.MathMatchScore -= this.Score;
              this.Game_Script.DataSet();
              this.GameStart();
            }
          };
          /**下一关按钮 */


          const BtnNextCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.Game_Script.BlockInputEvents.active = true;
            let StarsData = {
              Pos: [v3(-175, 150, 0), v3(0, 180, 0), v3(175, 150, 0)],
              Angle: [50, 25, 0]
            };
            let Stars = find("WinBanner/Stars", this.PanelVictory);

            const AddScoreAnim = async () => {
              for (let I = 0; I < this.Score; I++) {
                let Star = Stars.children[I].children[0].parent;
                tween(Star).to(0.25, {
                  position: v3(StarsData.Pos[1].x, StarsData.Pos[1].y - 50, 0)
                }).start();
                tween(Star).to(0.25, {
                  angle: StarsData.Angle[1]
                }).start();
                tween(Star).to(0.25, {
                  scale: v3(0.5, 0.5, 1)
                }).start();
              }

              await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.3);

              for (let I = 0; I < this.Score; I++) {
                let Star = Stars.children[I].children[0].parent;
                console.log(this.Game_Script.ScoreLabel2.node.parent.getChildByName("Icon"));
                let TPos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Star, this.Game_Script.ScoreLabel1.node.parent.getChildByName("Icon"));
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Star, TPos, 0.25);
                tween(Star).to(0.25, {
                  scale: v3(0.25, 0.25, 1)
                }).call(() => {
                  tween(this.Game_Script.ScoreLabel1.node.parent.getChildByName("Icon")).by(0.1, {
                    scale: v3(-0.2, -0.2, 0)
                  }).by(0.1, {
                    scale: v3(0.2, 0.2, 0)
                  }).start();
                  this.Game_Script.ScoreLabel1.string = Number(this.Game_Script.ScoreLabel1.string) + 1 + "";
                  this.Resoure_Data.Sound_Play("Audio/AddScore");
                }).start();
                await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.15);
              }
            };

            await AddScoreAnim();
            await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.6);
            this.GameStart();
          };

          const BtnTipCall = async () => {
            if (this.BtnTip.getComponent(Sprite).grayscale) {
              //this.ValueTarget.length 
              return;
            }

            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            if (this.Game_Script.PropNum > 0) {
              TipCall();
            } else {
              this.PanelTip.active = true;
            }
          };

          const BtnTipCloseCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelTip.active = false;
          };

          const BtnTipGetCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.Game_Script.TimerStop();
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showVideoAd(async () => {
              this.Resoure_Data.Music_Resume();
              this.TimeHF();
              this.PanelTip.active = false;
              let P = await this.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/Icon");
              let N = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(P, this.node, v3(0, 0, 0)); // N.scale = v3(0, 0, 1);

              this.Game_Script.PropNum += 2;
              this.Game_Script.DataSet();
              this.Resoure_Data.Sound_Play("Audio/PropA"); //console.log("播放道具抖动音效");

              tween(N).to(0.1, {
                angle: -10
              }, {
                easing: "backInOut"
              }).to(0.1, {
                angle: 10
              }, {
                easing: "backInOut"
              }).to(0.1, {
                angle: -10
              }, {
                easing: "backInOut"
              }).to(0.1, {
                angle: 10
              }, {
                easing: "backInOut"
              }).to(0.1, {
                angle: -10
              }, {
                easing: "backInOut"
              }).call(() => {
                tween(N).to(0.5, {
                  scale: v3(0.5, 0.5, 1)
                }).start();
                let Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(N, this.BtnTip).add(v3(10, 40, 0));
                let a = v3(Pos.x + 250, 1000, 0);
                let b = v3(N.position.x, -200, 0);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Bezier_Time(N, Pos, 1, a, b, 0.5, () => {
                  this.Resoure_Data.Sound_Play("Audio/PropGet"); //console.log("播放道具获取音效");

                  this.UpdateProp();
                  N.destroy();
                });
              }).start();
            }, () => {
              this.Resoure_Data.Music_Resume();
              this.TimeHF();
            });
          };
          /**提示 */


          const TipCall = async () => {
            // this.Game_Script.OnMessage("没有更多关卡了");
            //console.error(this.ValueTarget);
            if (this.TipLabel != null || this.TipNode != null) {
              return;
            } //剩下的数字


            let ValueNumber = [];

            for (let i = 0; i < this.ValueTarget.length; i++) {
              ValueNumber.push(Number(this.ValueTarget[i].getChildByName("Label").getComponent(Label).string));
            }

            if (ValueNumber == undefined) {
              // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 0, 0, 255));
              // this.TipLabel.getComponent(Label).string = "";
              // this.TipLabel.scale = v3(1, 1, 1);
              // Tool_Animation.instance.Tween_Stop_Target(this.TipLabel);
              this.TipLabel = null;
              this.TipNode = null;
              return;
            }

            this.Game_Script.PropNum--;
            this.Game_Script.DataSet();
            this.UpdateProp(); //console.log("剩下的数字", ValueNumber);

            let NullGIndex = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Random_Int(0, ValueNumber.length - 1); //索引
            //console.log("V索引", NullGIndex);
            //答案
            //console.log("答案", ValueNumber[NullGIndex]);

            for (let j = 0; j < this.GameData.Result.length; j++) {
              //如何是正确答案
              if (this.GameData.Result[j] == ValueNumber[NullGIndex]) {
                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(this.KeyTarget[j].worldPosition, this.ValueTargetC);

                if (Obj.Distance < this.OnDistance) {
                  let Num = Number(this.ValueTargetC[Obj.Index].getChildByName("Label").getComponent(Label).string);
                  console.warn("当前答案", Num);

                  if (Num == ValueNumber[NullGIndex]) {
                    continue;
                  } else {
                    this.TipLabel = this.KeyTarget[j].getChildByName("Label");
                    this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255)); //console.error("K索引", j);
                    //console.error(Obj);

                    this.TipNode = this.ValueTarget[NullGIndex];
                    let TouchNode = this.ValueTargetC[Obj.Index];
                    Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);
                    let i = this.ValueTargetC.indexOf(TouchNode);
                    console.log("i------", i);
                    let IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
                    let Key = find("Key", this.node);
                    let Value = find("Value", this.node);
                    let Temp = find("Temp", this.node);
                    let ColorOff = color(255, 255, 155, 255);
                    let ColorOn = color(155, 255, 155, 255);
                    (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(TouchNode);
                    TouchNode.scale = v3(1, 1, 1);
                    TouchNode.angle = 0;
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Node_Index_Set(TouchNode, -1); // 1. 获取原节点（当前占用目标位置的节点）

                    const OriginalNode = this.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
                    //原上次索引

                    let OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, OriginalNode); //现上次索引

                    let CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, TouchNode); // //console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                    // //console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

                    this.TipStart(); // //console.log("是否存在", IsExit);

                    if (!IsExit) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Arr_Increase(this.ValueTarget, TouchNode); //题目节点的索引

                      let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
                      let KeyNodeValueT = "N";
                      this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                      console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); // //console.log(this.GameData);

                      if (this.LastKeyIndex[i] != null) {
                        this.KeyExitState[this.LastKeyIndex[i]] = false;
                        this.KeyExitValue[this.LastKeyIndex[i]] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      } // 重置当前目标位置的状态（如果之前已被占用）


                      if (this.KeyExitState[Obj.Index]) {
                        this.KeyExitState[Obj.Index] = false; //console.error(this.KeyExitState[Obj.Index], "1---------------------", Obj.Index);

                        this.KeyExitValue[Obj.Index] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      }

                      this.LastKeyIndex[i] = null;
                      console.log(this.LastKeyIndex, i);
                    }

                    this.UpdateUIValue();
                    return;
                  }
                } else {
                  this.TipLabel = this.KeyTarget[j].getChildByName("Label");
                  this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255)); // //console.error("K索引", j);
                  // //console.error(Obj);

                  this.TipNode = this.ValueTarget[NullGIndex];
                  this.TipStart();
                  return;
                }
              }
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
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnTipGet, BtnTipGetCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnNext, BtnNextCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnExit, BtnBreakCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnReStart"), BtnReStartCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnNext"), BtnNextCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnBreak"), BtnBreakCall); //复活

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFH.getChildByName("Btn"), () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
              this.Resoure_Data.Music_Resume();
              this.PanelFH.active = false;
              this.GameTime = this.GameTimeAll;
              let ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
              this.Game_Script.Timer(ComponentLabel, this.GameTime, () => {
                this.PanelFH.active = true;
                this.Resoure_Data.Sound_Play("Audio/FH");
                this.Game_Script.TimerStop();
                find("JG", this.node).active = false;
              }, "S", () => {
                this.GameTimeIng++;
                this.GameTime--;

                if (this.GameTime <= this.JGTime && !find("JG", this.node).active) {
                  find("JG", this.node).active = true;
                  find("JG", this.node).getComponent(Animation).play();
                }
              });
            }, () => {
              this.Resoure_Data.Music_Resume();
            });
          });
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFH.getChildByName("BtnClose"), () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelFH.active = false;
            this.GameFailed();
          });
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
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnTipGet, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnNext, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnExit, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnNext"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBreak"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFH.getChildByName("Btn"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBreak"), AnimSwitch);
          let Key = find("Key", this.node);
          let Value = find("Value", this.node);

          for (let i = 0; i < Value.children.length; i++) {
            this.ValuePos.push(Value.children[i].position.clone());
          }
        }

        TimeHF() {
          let ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
          this.Game_Script.Timer(ComponentLabel, this.GameTime, () => {
            this.PanelFH.active = true;
            this.Resoure_Data.Sound_Play("Audio/FH");
            this.Game_Script.TimerStop();
            find("JG", this.node).active = false;
          }, "S", () => {
            this.GameTimeIng++;
            this.GameTime--;

            if (this.GameTime <= this.JGTime && !find("JG", this.node).active) {
              find("JG", this.node).active = true;
              find("JG", this.node).getComponent(Animation).play();
            }
          });
        }
        /**初始化数据 */


        async InitData() {
          this.Game_Script.UpdateScore(); //console.log("初始化数据");

          /**注册按钮事件 */
          // await this.OnBtn(this.Game_Script.AnimSwitch);

          this.KeyTarget = [];
          this.KeyExitState = [];
          this.KeyExitValue = [];
          this.ValueTarget = [];
          this.ValueTargetC = [];
          this.LastKeyIndex = [];
          this.AnimCorrectNode = [];
          this.AnimWrongNode = [];
          this.Interactable = true;
          this.TouchNode = null;
          this.TipLabel = null;
          this.TipNode = null;
          this.GameTimeIng = 0; // this.Game_Script.MathMatchLevel = 60;

          let F = {
            "Level": 6,
            "Key": ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
            "Value": [],
            "Result": [],
            "Count": 0
          };
          const Json = await this.Resoure_Data.Load_Json("Json/mathmatch");
          const JsonData = Json["Data"]; //console.log(JsonData);

          this.GameData = null;

          if (this.Game_Script.MathMatchLevel < 0) {
            this.Game_Script.MathMatchLevel = 0; //console.log("关卡为负");

            this.Game_Script.DataSet();
          }

          if (this.Game_Script.MathMatchLevel >= JsonData.length) {
            // this.Game_Script.OnMessage("没有更多关卡了");
            let Ran = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Random_Int(20, 35);

            if (Ran < JsonData.length - 1) {
              this.GameData = this.Resoure_Data.Copy_Deep(JsonData[Ran]);
            } else {
              this.GameData = this.Resoure_Data.Copy_Deep(JsonData[JsonData.length - 1]);
            }
          } else {
            this.GameData = this.Resoure_Data.Copy_Deep(JsonData[this.Game_Script.MathMatchLevel]);
          } //console.log(this.GameData);


          this.Game_Script.IsHint = false;
          this.Game_Script.IsContinue = false;
          this.GameTime = this.GameTimeAll;
          let ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
          this.Game_Script.Timer(ComponentLabel, this.GameTimeAll, () => {
            //console.log("失败");
            this.PanelFH.active = true;
            this.Resoure_Data.Sound_Play("Audio/FH");
            this.Game_Script.TimerStop();
            find("JG", this.node).active = false;
          }, "S", () => {
            this.GameTimeIng++;
            this.GameTime--;

            if (this.GameTime <= this.JGTime && !find("JG", this.node).active) {
              find("JG", this.node).active = true;
              find("JG", this.node).getComponent(Animation).play();
            }
          });
        }
        /**初始化界面 */


        async InitInterface() {
          this.PanelVictory.active = false;
          this.PanelFail.active = false;
          this.PanelTip.active = false;
          this.PanelFH.active = false;
          let Hand = find("Hand", this.node);
          Hand.active = false;
          find("ND", this.node).active = false;
          find("JG", this.node).active = false;

          if (this.Game_Script.MathMatchLevel == 1) {
            find("ND", this.node).active = true;
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play(find("ND", this.node).getComponent(Animation), null, null, () => {
              find("ND", this.node).active = false;
            });
          }

          this.UpdateProp();
          this.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = `第${this.Game_Script.MathMatchLevel + 1}关`;
          find("Temp", this.node).destroyAllChildren();
          let Key = find("Key", this.node);
          let Value = find("Value", this.node);

          for (let i = 0; i < Key.children.length; i++) {
            Key.children[i].active = false;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(Key.children[i].getChildByName("Bg").getChildByName("Sp"), color(255, 255, 155, 255));
          }

          for (let i = 0; i < Value.children.length; i++) {
            Value.children[i].active = false;
            Value.children[i].scale = v3(1, 1, 1);
            Value.children[i].angle = 0;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Value.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(Value.children[i].getChildByName("Label"), color(0, 155, 0, 255));
          }

          if (this.GameData == null) {
            //console.log("配置错误");
            return;
          }

          for (let i = 0; i < Key.children.length; i++) {
            Key.children[i].active = true;

            switch (this.GameData.Key[i]) {
              case "U":
                Key.children[i].active = false;
                break;

              case "N":
                Key.children[i].getChildByName("Label").getComponent(Label).string = "";
                this.KeyTarget.push(Key.children[i]);
                this.KeyExitState.push(false);
                this.KeyExitValue.push(null);
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Key.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                break;

              default:
                let Str = "";

                switch (this.GameData.Key[i]) {
                  // case "/":
                  //     Str = "÷";
                  // break;
                  case "X":
                    Str = "x";
                    break;

                  default:
                    Str = this.GameData.Key[i];
                    break;
                }

                Key.children[i].getChildByName("Label").getComponent(Label).string = Str;
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Key.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                break;
            }
          }

          let Temp = find("Temp", this.node);
          let ColorOff = color(255, 255, 155, 255);
          let ColorOn = color(155, 255, 155, 255);

          for (let i = 0; i < Value.children.length; i++) {
            const Shadow = Value.children[i].getChildByName("Shadow");
            const ComponentLabel1 = Value.children[i].getChildByName("Label").getComponent(Label);
            Shadow.active = false; // Value.children[i].active = i < this.GameData.Value.length ? true : false;

            if (i < this.GameData.Value.length ? true : false) {
              this.ValueTarget.push(Value.children[i]);
              this.ValueTargetC.push(Value.children[i]);
              this.LastKeyIndex.push(null);
              Value.children[i].position = this.ValuePos[i];
              ComponentLabel1.string = this.GameData.Value[i] + "";
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.Off_Event_TOUCH_All(Value.children[i]);
              const TouchNode = Value.children[i];
              const Shadow = TouchNode.getChildByName("Shadow");
              const ComponentLabel = TouchNode.getChildByName("Label").getComponent(Label);

              const Check_Shadow = () => {
                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);

                if (Obj.Distance <= this.OnDistance) {
                  if (this.KeyShadowIndex == Obj.Index) {
                    return;
                  }

                  Temp.destroyAllChildren();
                  this.KeyShadowIndex = Obj.Index;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(this.KeyShadow, Temp, this.KeyTarget[Obj.Index], "");
                } else {
                  Temp.destroyAllChildren();
                  this.KeyShadowIndex = -1;
                }
              };

              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_START(TouchNode, () => {
                //console.log(this.Game_Script.MathMatchLevel, this.Step, TouchNode.getChildByName("Label").getComponent(Label).string);
                if (this.Game_Script.MathMatchLevel == 0) {
                  if (this.Step == 0) {
                    if (TouchNode.getChildByName("Label").getComponent(Label).string != "1") {
                      this.Interactable = false;
                      return;
                    } else {
                      this.Interactable = true;
                    }
                  }

                  if (this.Step == 1) {
                    if (TouchNode.getChildByName("Label").getComponent(Label).string != this.KeyExitValue[2].getChildByName("Label").getComponent(Label).string) {
                      this.Interactable = false;
                      return;
                    } else {
                      this.Interactable = true;
                    }
                  }
                }
              });
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Drag(TouchNode, () => this.Interactable, async (Event, Pos_Touch_Start) => {
                /**触摸开始回调 */
                if (this.GameData == null) {
                  this.Interactable = false; //console.log("配置错误");

                  return;
                }

                this.TouchNode = TouchNode; //console.log(this.LastKeyIndex, i, this.ValueTargetC.indexOf(TouchNode));

                this.Resoure_Data.Sound_Play("Audio/NumClick");

                if (this.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.KeyTarget[Obj.Index]);
                this.KeyTarget[Obj.Index].scale = v3(1, 1, 1);
                this.KeyTarget[Obj.Index].angle = 0;
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(TouchNode);
                TouchNode.scale = v3(1, 1, 1);
                TouchNode.angle = 0;
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Node_Index_Set(TouchNode, -1);
                Shadow.active = true;
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos_Touch_Start.clone().add(v3(0, 25, 0)), 0.02, null, "smooth");
                let IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;

                if (!IsExit) {
                  tween(TouchNode).to(0.25, {
                    scale: v3(1, 1, 1)
                  }, {
                    easing: "backOut"
                  }).start();
                }

                Check_Shadow(); //console.error(this.TouchNode == this.TipNode);

                if (this.TouchNode == this.TipNode) {
                  for (let i = 0; i < this.TipAnim.length; i++) {
                    this.TipAnim[i].destroy();
                  }

                  this.TipAnim = [];
                }
              }, (Event, Pos_Touch_Start) => {
                /**触摸移动回调 */
                Check_Shadow();
              }, async (Event, Pos_Touch_Start, Pos_Touch_End) => {
                /**触摸结束回调 */
                Shadow.active = false;
                let IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget); // 1. 获取原节点（当前占用目标位置的节点）

                const OriginalNode = this.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
                //原上次索引

                let OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, OriginalNode); //现上次索引

                let CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, TouchNode); //console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                //console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

                if (this.Game_Script.MathMatchLevel == 0) {
                  this.Step++;

                  if (this.Step == 1) {
                    (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Hand);
                    let MoveNode = this.KeyExitValue[2];
                    this.Game_Script.OnMessage("可以把数字拖动放在另一个格子");
                    let PosStart = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, MoveNode).add(v3(30, -50));
                    let PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, this.KeyTarget[3]).add(v3(30, -50));

                    const AnimA = () => {
                      Hand.position = PosStart;
                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosEnd, 1, () => {
                        if (this.Step == 1) {
                          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosStart, 0.5, () => {
                            if (this.Step == 1) {
                              AnimA();
                            }
                          });
                        }
                      });
                    };

                    AnimA();
                  } else {
                    Hand.active = false;
                  }
                }

                if (Obj.Distance <= this.OnDistance) {
                  this.TipReset(); //目标位置被占用
                  //console.error(this.KeyExitState[Obj.Index], this.LastKeyIndex[i], Obj.Index);

                  if (this.KeyExitState[Obj.Index] && this.LastKeyIndex[i] != Obj.Index) {
                    //
                    if (this.LastKeyIndex[i] != null) {
                      this.KeyTarget[Obj.Index].active = false;
                      this.KeyTarget[this.LastKeyIndex[i]].active = false; // 将原节点移动到 LastKeyIndex 的位置

                      const OriginalNodePos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(OriginalNode, this.KeyTarget[this.LastKeyIndex[i]]); // this.Interactable = false;

                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, async () => {
                        // this.Interactable = true;
                        this.KeyTarget[Obj.Index].active = true;
                        this.KeyTarget[this.LastKeyIndex[i]].active = true; //交换索引
                        //console.log(this.LastKeyIndex, 1);
                        //console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
                        //console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

                        const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
                        this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
                        this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //交换节点的索引

                        let KeyNodeIndexL = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[OriginalLastKeyIndex]]);
                        let KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string; //题目节点的索引

                        let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                        let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                        this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
                        this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT; // console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
                        // console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
                        // console.log(this.GameData);

                        this.FindAllEquationIndices_(this.GameData.Key);
                        (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(OriginalNode);
                        OriginalNode.scale = v3(0.9, 0.9, 1);
                        OriginalNode.angle = 0;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); // //console.error(OriginalNode, TouchNode);

                        await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
                        this.TouchNode = OriginalNode;
                        this.FindAllEquationIndices_(this.GameData.Key);
                      }, "smooth"); // 更新原节点的状态为占用 LastKeyIndex

                      this.KeyExitState[this.LastKeyIndex[i]] = true;
                      this.KeyExitValue[this.LastKeyIndex[i]] = OriginalNode;
                    } else {
                      // 如果 LastKeyIndex 为 null，将原节点放回 ValueTarget 池
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Arr_Increase(this.ValueTarget, OriginalNode);
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); //交换索引
                      //console.log(this.LastKeyIndex, 2);
                      //console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
                      //console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

                      const LastKeyIndexTemp = this.LastKeyIndex[OriginalLastKeyIndex];
                      this.LastKeyIndex[OriginalLastKeyIndex] = this.LastKeyIndex[CurrentLastKeyIndex];
                      this.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //题目节点的索引

                      let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                      let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                      this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                      console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); //console.log(this.GameData);

                      this.FindAllEquationIndices_(this.GameData.Key, 0.2);
                    } // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）


                    this.KeyExitState[Obj.Index] = true;
                    this.KeyExitValue[Obj.Index] = TouchNode; // 4. 更新颜色和临时状态

                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);

                    if (this.LastKeyIndex[i] != null) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                    } //放置成功 移除节点


                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(this.ValueTarget, TouchNode);
                    Temp.destroyAllChildren();
                    this.KeyShadowIndex = -1;

                    for (let i = 0; i < this.TipAnim.length; i++) {
                      this.TipAnim[i].destroy();
                    } // 6. 更新 UI


                    this.UpdateUIValue();
                    let Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
                    await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos, 0.2, null, "smooth");
                    tween(TouchNode).to(0.25, {
                      scale: v3(0.9, 0.9, 1)
                    }, {
                      easing: "backOut"
                    }).start();
                    return;
                  }

                  if (IsExit) {
                    //放置成功 移除节点
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(this.ValueTarget, TouchNode); //题目节点的索引

                    let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                    let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                    this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                    console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); //console.log(this.GameData);

                    this.UpdateUIValue();
                  } else {
                    let KeyNodeIndexL = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);

                    if (KeyNodeIndexL == -1) {//console.log(CurrentLastKeyIndex);//有值
                      //console.log(this.LastKeyIndex[CurrentLastKeyIndex]);
                      //console.log(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
                    }

                    let KeyNodeValueL = "N";
                    this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL; //题目节点的索引

                    let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                    let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                    this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                    console.log("赋值的索引", KeyNodeIndexL, "赋值的数据", KeyNodeValueL);
                    console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); //console.log(this.GameData);
                  }

                  this.KeyExitState[Obj.Index] = true;
                  this.KeyExitValue[Obj.Index] = TouchNode; //console.error(this.LastKeyIndex[i], this.LastKeyIndex[i], this.KeyExitState[this.LastKeyIndex[i]]);

                  if (this.LastKeyIndex[i] != null && this.LastKeyIndex[i] != Obj.Index) {
                    console.error(this.KeyExitState[this.LastKeyIndex[i]], "2---------------------", Obj.Index);
                    this.KeyExitState[this.LastKeyIndex[i]] = false;
                    this.KeyExitValue[this.LastKeyIndex[i]] = null;
                  } //改变Key背景颜色


                  this.LastKeyIndex[i] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                  this.LastKeyIndex[i] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                  // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;
                  //console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                  Temp.destroyAllChildren();

                  for (let i = 0; i < this.TipAnim.length; i++) {
                    this.TipAnim[i].destroy();
                  }

                  this.KeyShadowIndex = -1;
                  let Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
                  this.UpdateUIValue();
                  await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos, 0, null, "smooth");
                  tween(TouchNode).to(0.25, {
                    scale: v3(0.9, 0.9, 1)
                  }, {
                    easing: "backOut"
                  }).start();
                } else {
                  if (!IsExit) {
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Increase(this.ValueTarget, TouchNode); //题目节点的索引

                    let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
                    let KeyNodeValueT = "N";
                    this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                    console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); //console.log(this.GameData);

                    if (this.LastKeyIndex[i] != null && this.LastKeyIndex[i] != Obj.Index) {
                      this.KeyExitState[this.LastKeyIndex[i]] = false;
                      this.KeyExitValue[this.LastKeyIndex[i]] = null;
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    } // 重置当前目标位置的状态（如果之前已被占用）


                    if (this.KeyExitState[Obj.Index]) {
                      this.KeyExitState[Obj.Index] = false; //console.error(this.KeyExitState[Obj.Index], "3---------------------", Obj.Index);

                      this.KeyExitValue[Obj.Index] = null;
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    }

                    this.LastKeyIndex[i] = null;
                  } // await Tool_Animation.instance.Async_Wait(0.05);


                  this.UpdateUIValue();
                  await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.25);
                  this.TipStart();
                } //console.log("this.KeyExitState", this.KeyExitState);
                //console.log("this.KeyExitValue", this.KeyExitValue);
                //console.log("this.ValueTarget", this.ValueTarget);


                this.FindAllEquationIndices_(this.GameData.Key);
              });
            }
          } // this.UpdateUIValue(0);
          // await Tool_Animation.instance.Async_Wait(0.1);


          for (let i = 0; i < this.ValueTarget.length; i++) {
            this.ValueTarget[i].active = false;
          }

          for (let i = 0; i < this.ValueTarget.length; i++) {
            this.ValueTarget[i].active = true;
            this.ValueTarget[i].position = this.ValueTarget[i].position.clone().add(v3(1000, 0, 0));
          }

          let Time = 0;
          let Wait = 0;
          let Len = this.GameData.Value.length;
          Time = 1.2 / Len;
          Wait = Time / 2;

          if (this.Game_Script.MathMatchLevel == 0) {
            this.Game_Script.BlockInputEvents.active = true;
            this.Step = 0;
            let N = this.ValueTarget[2];
            N.active = true;
            N.scale = v3(0.9, 0.9, 1);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Pos_Word_Same(N, this.KeyTarget[2]);
            let TouchNode = this.ValueTarget[2];
            let i = this.ValueTargetC.indexOf(TouchNode); // Shadow.active = false;

            let IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTarget, TouchNode) == -1 ? false : true;
            let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, this.KeyTarget); // 1. 获取原节点（当前占用目标位置的节点）

            const OriginalNode = this.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
            //原上次索引

            let OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, OriginalNode); //现上次索引

            let CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(this.ValueTargetC, TouchNode);

            if (Obj.Distance <= this.OnDistance) {
              this.TipReset(); //目标位置被占用

              if (IsExit) {
                //放置成功 移除节点
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Delete(this.ValueTarget, TouchNode); //题目节点的索引

                let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
              } else {
                let KeyNodeIndexL = Key.children.indexOf(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);

                if (KeyNodeIndexL == -1) {}

                let KeyNodeValueL = "N";
                this.GameData.Key[KeyNodeIndexL] = KeyNodeValueL; //题目节点的索引

                let KeyNodeIndexT = Key.children.indexOf(this.KeyTarget[Obj.Index]);
                let KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                this.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
              }

              this.KeyExitState[Obj.Index] = true;
              this.KeyExitValue[Obj.Index] = TouchNode;

              if (this.LastKeyIndex[i] != null && this.LastKeyIndex[i] != Obj.Index) {
                this.KeyExitState[this.LastKeyIndex[i]] = false;
                this.KeyExitValue[this.LastKeyIndex[i]] = null;
              } //改变Key背景颜色


              this.LastKeyIndex[i] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
              this.LastKeyIndex[i] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
              // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;
              //console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(this.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
              Temp.destroyAllChildren();

              for (let i = 0; i < this.TipAnim.length; i++) {
                this.TipAnim[i].destroy();
              }

              this.KeyShadowIndex = -1;
              let Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, this.KeyTarget[Obj.Index]);
              await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos, 0, null, "smooth");
              tween(TouchNode).to(0.25, {
                scale: v3(0.9, 0.9, 1)
              }, {
                easing: "backOut"
              }).start();
            }

            this.UpdateUIValue(Time, Wait, true);
            await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(1);
            this.Game_Script.BlockInputEvents.active = false;
            Hand.active = true;
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Hand);
            let MoveNode = this.ValueTarget[0];
            this.Game_Script.OnMessage("将需要的数字拖动到空格上");
            let PosStart = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, MoveNode).add(v3(30, -50));
            let PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, this.KeyTarget[0]).add(v3(30, -50));

            const AnimA = () => {
              Hand.position = PosStart;
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosEnd, 1, () => {
                if (MoveNode == this.ValueTarget[0]) {
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosStart, 0.5, () => {
                    if (MoveNode == this.ValueTarget[0]) {
                      AnimA();
                    }
                  });
                }
              });
            };

            AnimA();
          } else {
            this.UpdateUIValue(Time, Wait, true); //1.2
          }
        }
        /**刷新排序 */


        async UpdateUIValue(Time = 0.2, Wait = 0, IsAudio = false) {
          if (IsAudio) {
            this.Resoure_Data.Sound_Play("Audio/BoxStart");
          } //console.log("刷新排序");
          // this.Interactable = false;


          this.ValueTarget.sort((a, b) => {
            const valueA = parseFloat(a.getChildByName("Label").getComponent(Label).string);
            const valueB = parseFloat(b.getChildByName("Label").getComponent(Label).string);
            return valueA - valueB;
          });

          for (let i = 0; i < this.ValueTarget.length; i++) {
            this.ValueTarget[i].scale = v3(1, 1, 1);
            this.ValueTarget[i].angle = 0;
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.ValueTarget[i], this.ValuePos[i], Time, null, "smooth"); // if (Wait != 0) {

            await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Wait); // }
          }

          if (IsAudio) {
            this.Resoure_Data.Sound_Play("Audio/BoxEnd");
          }

          if (this.Game_Script.MathMatchLevel <= 0 && this.Step <= 1) {
            this.BtnTip.getComponent(Sprite).grayscale = true;
          } else {
            this.BtnTip.getComponent(Sprite).grayscale = this.ValueTarget.length == 0;
          }

          await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Time); // this.Interactable = true;
        }

        async GameStart() {
          this.BtnTip.getComponent(Sprite).grayscale = true;
          this.Game_Script.BlockInputEvents.active = false;

          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            try {
              // window.ge.onLevelStart({ "$user_level": this.Game_Script.MathMatchLevel });
              (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                error: Error()
              }), GravityPlatform) : GravityPlatform).instance.onLevelStart({
                "$user_level": this.Game_Script.MathMatchLevel
              });
            } catch (error) {//console.log(error);
            }
          }

          this.TipReset();
          this.Timing();
          await this.InitData();
          await this.InitInterface();
        }

        async GameVictory() {
          if (this.PanelVictory.active) {
            return;
          }

          this.Resoure_Data.Sound_Play("Audio/Victory");
          this.PanelVictory.active = true;
          this.Interactable = false;

          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            try {
              (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                error: Error()
              }), GravityPlatform) : GravityPlatform).instance.onLevelSuccess({
                "$user_level": this.Game_Script.MathMatchLevel
              }); // window.ge.onLevelSuccess({ "$user_level": this.Game_Script.MathMatchLevel });
            } catch (error) {
              console.log(error);
            }
          }

          this.Game_Script.TimerStop();
          find("JG", this.node).active = false;
          let T = this.GameTimeIng / this.GameTimeAll;
          this.Score = 0;

          if (T < 0.45) {
            this.Score = 3;
            this.Resoure_Data.Sound_Play("Audio/Start3");
          } else if (T < 0.7) {
            this.Score = 2;
            this.Resoure_Data.Sound_Play("Audio/Start2");
          } else if (T < 1) {
            this.Score = 1;
            this.Resoure_Data.Sound_Play("Audio/Start1");
          } else {
            this.Score = 0;
          }

          this.Game_Script.MathMatchLevel++;
          this.Game_Script.MathMatchScore += this.Score;
          /**保存数据 */

          this.Game_Script.DataSet(); // this.Game_Script.UpdateScene();

          if (this.Score == 0) {
            this.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = `<color=#17a6fc>${this.GameTimeAll}/</color><color=#FF0000>${this.GameTimeIng}</color>`;
          } else {
            this.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = `<color=#17a6fc>${this.GameTimeAll}/</color><color=#00FF00>${this.GameTimeIng}</color>`;
          }

          this.Game_Script.BlockInputEvents.active = true;
          let StarsData = {
            Pos: [v3(-175, 150, 0), v3(0, 180, 0), v3(175, 150, 0)],
            Angle: [50, 25, 0]
          };
          let Stars = find("WinBanner/Stars", this.PanelVictory);

          for (let I = 0; I < Stars.children.length; I++) {
            let Star = Stars.children[I].children[0];
            Star.active = false;
            Star.scale = v3(1, 1, 1);
            Star.parent.position = StarsData.Pos[I];
            Star.parent.angle = StarsData.Angle[I];
            Star.parent.scale = v3(1, 1, 1);
          }

          const StarsAnim = async () => {
            for (let I = 0; I < this.Score; I++) {
              let Star = Stars.children[I].children[0];
              Star.scale = v3(4, 4, 1);
              Star.active = true;
              tween(Star).to(0.05, {
                scale: v3(5, 5, 1)
              }).to(0.4, {
                scale: v3(1, 1, 1)
              }).start();
              await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.4);
            }

            this.Game_Script.BlockInputEvents.active = false;
          };

          StarsAnim();

          const CD = async () => {
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(find("C1", this.PanelVictory).getComponent(sp.Skeleton), "default", 0, "caidai", false);
            await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.1);
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(find("C2", this.PanelVictory).getComponent(sp.Skeleton), "default", 0, "caidai", false, () => {//console.log("结束");
            });
          };

          CD();

          if (this.Resoure_Data.Vibration_Switch_Get()) {
            for (let i = 0; i < 5; i++) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
              await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
            }
          }
        }

        async GameFailed() {
          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            try {
              // window.ge.onLevelFail({ "$user_level": this.Game_Script.MathMatchLevel });
              (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                error: Error()
              }), GravityPlatform) : GravityPlatform).instance.onLevelStart({
                "$user_level": this.Game_Script.MathMatchLevel
              });
            } catch (error) {//console.log(error);
            }
          }

          this.Resoure_Data.Sound_Play("Audio/Failed");
          this.PanelFail.active = true;
          this.Interactable = false;
          this.PanelFail.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = `<color=#17a6fc>${this.GameTimeAll}/</color><color=#FF0000>${this.GameTimeIng}</color>`;
        }

        GameResult() {}

        BreakNode(SetNode) {}

        TipReset() {
          if (this.TipLabel != null) {
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(this.TipLabel, color(0, 0, 0, 255));
            this.TipLabel.getComponent(Label).string = "";
            this.TipLabel.scale = v3(1, 1, 1);
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.TipLabel);
            this.TipLabel = null;
          }

          if (this.TipNode != null) {
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.TipNode);
            this.TipNode = null;
          }

          for (let i = 0; i < this.TipAnim.length; i++) {
            this.TipAnim[i].destroy();
          }

          this.TipAnim = [];
        }

        async TipStart() {
          //console.log(this.TipAnim);
          if (this.TipAnim.length != 0) {
            return;
          }

          if (this.TipNode != null && this.TipLabel != null) {
            // Tool_Animation.instance.Animation_Heartbeat(this.TipLabel);
            for (let i = 0; i < this.TipAnim.length; i++) {
              this.TipAnim[i].destroy();
            }

            let Spine = await this.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/Spine");
            let SpineNode1 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(Spine, this.node.getChildByName("TempV"), this.ValuePos[this.ValueTarget.indexOf(this.TipNode)].clone().add(v3(0, -250, 0)));
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(SpineNode1.getComponent(sp.Skeleton), "default", 0, "animation2", true);
            let SpineNode2 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(Spine, this.node.getChildByName("TempV"), this.TipLabel);
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(SpineNode2.getComponent(sp.Skeleton), "default", 0, "animation1", true);
            this.TipAnim.push(SpineNode1);
            this.TipAnim.push(SpineNode2);
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.TipLabel);
            this.TipLabel.angle = 0; // Tool_Animation.instance.Tween_Stop_Target(this.TipNode);
            // this.TipNode.angle = 0;

            tween(this.TipLabel).repeatForever(tween().to(0.2, {
              angle: 5
            }).to(0.2, {
              angle: -10
            }).to(0.2, {
              angle: 10
            }).to(0.2, {
              angle: -10
            }).to(0.2, {
              angle: 5
            }).to(0.2, {
              angle: 0
            }).delay(1)).start();
          }
        }

        async FindAllEquationIndices_(Key, Time = 0, Rows = 11, Cols = 11) {
          this.Interactable = false;
          this.TimStop();

          if (this.Game_Script.MathMatchLevel <= 0 && this.Step <= 1) {
            this.BtnTip.getComponent(Sprite).grayscale = true;
          } else {
            this.BtnTip.getComponent(Sprite).grayscale = this.ValueTarget.length == 0;
          } // this.Interactable = false;


          await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Time);
          let Count = 0;
          const Result = {
            CorrectIndex: [],
            WrongIndex: []
          };
          const ResultAll = {
            CorrectIndex: [],
            WrongIndex: []
          };
          /**检查题目右边是否存在结果 */

          function CheckResult(Index) {
            // return Key[Index] == "N" || Key[Index] == "U" ? null : Number(Key[Index]);
            return Key[Index] == "N" ? null : Number(Key[Index]);
          }
          /**计算题目左边结果 */


          function GetResult(expression) {
            // 先处理乘除法
            const processed = [...expression];

            if (processed.indexOf("N") != -1) {
              return null;
            } // 第一轮处理：乘除法


            for (let i = 1; i < processed.length; i += 2) {
              const op = processed[i];

              if (op === "X" || op === "x" || op === "/") {
                const left = parseFloat(processed[i - 1]);
                const right = parseFloat(processed[i + 1]);
                let result;

                if (op === "/") {
                  if (right === 0) throw new Error("Division by zero");
                  result = left / right;
                } else {
                  result = left * right;
                } // 替换这三个元素为计算结果


                processed.splice(i - 1, 3, result.toString());
                i -= 2; // 因为数组长度减少了，调整索引
              }
            } // 第二轮处理：加减法


            let result = parseFloat(processed[0]);

            for (let i = 1; i < processed.length; i += 2) {
              const op = processed[i];
              const num = parseFloat(processed[i + 1]);

              if (op === '+') {
                result += num;
              } else if (op === '-') {
                result -= num;
              } else {
                throw new Error(`Unknown operator: ${op}`);
              }
            }

            return result;
          }

          let ErrorChar = ["=", "U"];

          for (let i = 0; i < Key.length; i++) {
            if (Key[i] == "=") {
              // //console.log("--------------------------------------");
              // //console.log("--------------------------------------");
              // //console.log("--------------------------------------");
              let ValueResult; //水平方向
              // //console.log("水平方向");

              if (i % Rows != Rows - 1) {
                ValueResult = CheckResult(i + 1); //*

                if (ValueResult != null && !Number.isNaN(ValueResult)) {
                  let Index = i;
                  let Indexs = [];
                  let Chars = [];

                  while (Index % Rows != 0) {
                    //*
                    Index -= 1; //*

                    if (ErrorChar.indexOf(Key[Index]) == -1) {
                      Indexs.push(Index);
                    } else {
                      break;
                    }
                  }

                  (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                    error: Error()
                  }), Tool_Other) : Tool_Other).instance.Sort_Reverse(Indexs);

                  for (let j = 0; j < Indexs.length; j++) {
                    Chars.push(Key[Indexs[j]]);
                  }

                  Indexs.push(i);
                  Indexs.push(i + 1); //*

                  let KeyResult = GetResult(Chars);
                  let IsEqual = KeyResult == ValueResult; // //console.log(Indexs);
                  // //console.log(Chars);
                  // //console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                  // //console.log("是否相等", IsEqual);

                  if (IsEqual) {
                    Result.CorrectIndex.push(Indexs);
                    ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
                    Count++;
                  } else {
                    if (KeyResult != null) {
                      Result.WrongIndex.push(Indexs);
                      ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
                    }
                  }
                }
              }

              if (Math.floor(i / Rows) != Cols - 1) {
                //垂直方向
                // //console.log("垂直方向");
                ValueResult = CheckResult(i + Rows);

                if (ValueResult != null && !Number.isNaN(ValueResult)) {
                  let Index = i;
                  let Indexs = [];
                  let Chars = [];

                  while (Math.floor(Index / Rows) != 0) {
                    Index -= Rows; //*

                    if (ErrorChar.indexOf(Key[Index]) == -1) {
                      Indexs.push(Index);
                    } else {
                      break;
                    }
                  }

                  (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                    error: Error()
                  }), Tool_Other) : Tool_Other).instance.Sort_Reverse(Indexs);

                  for (let j = 0; j < Indexs.length; j++) {
                    Chars.push(Key[Indexs[j]]);
                  }

                  Indexs.push(i);
                  Indexs.push(i + Rows);
                  let KeyResult = GetResult(Chars);
                  let IsEqual = KeyResult == ValueResult; // //console.log(Indexs);
                  // //console.log(Chars);
                  // //console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                  // //console.log("是否相等", IsEqual);

                  if (IsEqual) {
                    Result.CorrectIndex.push(Indexs);
                    ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
                    Count++;
                  } else {
                    if (KeyResult != null) {
                      Result.WrongIndex.push(Indexs);
                      ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
                    }
                  }
                }
              }

              if (i % Rows != Rows - 1 && Math.floor(i / Rows) != Cols - 1) {
                //主对角线
                ValueResult = CheckResult(i + (Rows + 1)); // //console.log("主对角线");

                if (ValueResult != null && !Number.isNaN(ValueResult)) {
                  let Index = i;
                  let Indexs = [];
                  let Chars = [];

                  while (Index % Rows != 0) {
                    Index -= Rows + 1;

                    if (ErrorChar.indexOf(Key[Index]) == -1) {
                      Indexs.push(Index);
                    } else {
                      break;
                    }
                  }

                  (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                    error: Error()
                  }), Tool_Other) : Tool_Other).instance.Sort_Reverse(Indexs);

                  for (let j = 0; j < Indexs.length; j++) {
                    Chars.push(Key[Indexs[j]]);
                  }

                  Indexs.push(i);
                  Indexs.push(i + (Rows + 1));
                  let KeyResult = GetResult(Chars);
                  let IsEqual = KeyResult == ValueResult; //console.log(Indexs);
                  //console.log(Chars);
                  //console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                  //console.log("是否相等", IsEqual);

                  if (IsEqual) {
                    Result.CorrectIndex.push(Indexs);
                    ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
                    Count++;
                  } else {
                    if (KeyResult != null) {
                      Result.WrongIndex.push(Indexs);
                      ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
                    }
                  }
                }
              }

              if (i % Rows != 0 && Math.floor(i / Rows) != Cols - 1) {
                //副对角线
                // //console.log("副对角线");
                ValueResult = CheckResult(i + (Rows - 1));

                if (ValueResult != null && !Number.isNaN(ValueResult)) {
                  let Index = i;
                  let Indexs = [];
                  let Chars = [];

                  while (Index % Rows != Rows - 1) {
                    Index -= Rows - 1;

                    if (ErrorChar.indexOf(Key[Index]) == -1) {
                      Indexs.push(Index);
                    } else {
                      break;
                    }
                  }

                  (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                    error: Error()
                  }), Tool_Other) : Tool_Other).instance.Sort_Reverse(Indexs);

                  for (let j = 0; j < Indexs.length; j++) {
                    Chars.push(Key[Indexs[j]]);
                  }

                  Indexs.push(i);
                  Indexs.push(i + (Rows - 1));
                  let KeyResult = GetResult(Chars);
                  let IsEqual = KeyResult == ValueResult; //console.log(Indexs);
                  //console.log(Chars);
                  //console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                  //console.log("是否相等", IsEqual);

                  if (IsEqual) {
                    Result.CorrectIndex.push(Indexs);
                    ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ...Indexs];
                    Count++;
                  } else {
                    if (KeyResult != null) {
                      Result.WrongIndex.push(Indexs);
                      ResultAll.WrongIndex = [...ResultAll.WrongIndex, ...Indexs];
                    }
                  }
                }
              }
            }
          }

          let KeyP = find("Key", this.node);
          let ValueP = find("Value", this.node);

          let AnimReset = async () => {
            for (let i = 0; i < KeyP.children.length; i++) {
              if (ResultAll.CorrectIndex.indexOf(i) == -1) {
                switch (this.GameData.Key[i]) {
                  case "N":
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                    break;

                  default:
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                    break;
                }
              } else {
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Delete(this.AnimCorrectNode, KeyP.children[i]);
              }

              if (ResultAll.WrongIndex.indexOf(i) == -1) {
                switch (this.GameData.Key[i]) {
                  case "N":
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                    break;

                  default:
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[i].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                    break;
                }
              } else {
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Delete(this.AnimWrongNode, KeyP.children[i]);
              }
            }

            AnimV();
            AnimF();
          };

          let AnimV = async () => {
            for (let i = 0; i < Result.CorrectIndex.length; i++) {
              for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
                if (this.AnimCorrectNode.indexOf(KeyP.children[Result.CorrectIndex[i][j]]) == -1) {
                  this.AnimCorrectNode.push(KeyP.children[Result.CorrectIndex[i][j]]);
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[Result.CorrectIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                }
              }
            }

            for (let i = 0; i < Result.CorrectIndex.length; i++) {
              let ICall = async () => {
                //上次触摸的节点在题目中
                let IsPlay = false;
                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(this.TouchNode.worldPosition, this.KeyTarget);

                if (Obj.Distance <= this.OnDistance) {
                  for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
                    if (this.KeyTarget[Obj.Index].name == KeyP.children[Result.CorrectIndex[i][j]].name) {
                      IsPlay = true; //console.log("AnimV");

                      break;
                    }
                  }
                }

                if (IsPlay) {
                  this.Resoure_Data.Sound_Play("Audio/Correct");

                  for (let j = 0; j < Result.CorrectIndex[i].length; j++) {
                    //题目的Value占位节点
                    let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.CorrectIndex[i][j]].worldPosition, this.ValueTargetC);

                    if (Obj.Distance <= this.OnDistance) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(this.ValueTargetC[Obj.Index].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Label(this.ValueTargetC[Obj.Index].getChildByName("Label"), color(0, 155, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                      // this.ValueTargetC[Obj.Index].scale = v3(0.9, 0.9, 1);

                      tween(this.ValueTargetC[Obj.Index]).to(0.1, {
                        scale: v3(0.6, 0.6, 1)
                      }).to(0.1, {
                        scale: v3(0.9, 0.9, 1)
                      }).start();
                    } //题目的Key占位节点
                    // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.CorrectIndex[i][j]]);
                    // KeyP.children[Result.CorrectIndex[i][j]].scale = v3(1, 1, 1);


                    tween(KeyP.children[Result.CorrectIndex[i][j]]).to(0.1, {
                      scale: v3(0.6, 0.6, 1)
                    }).to(0.1, {
                      scale: v3(1, 1, 1)
                    }).start();
                    await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05 * Speed);
                  }
                }
              };

              ICall();
            }
          };

          let AnimF = async () => {
            // for (let i = 0; i < Result.WrongIndex.length; i++) {
            //     for (let j = 0; j < Result.WrongIndex[i].length; j++) {
            //         //console.error(this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]));
            //         if (this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]) == -1) {
            //             this.AnimWrongNode.push(KeyP.children[Result.WrongIndex[i][j]]);
            //             Tool_UI.instance.Set_SpriteFrame(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
            //         }
            //     }
            // }
            for (let i = 0; i < Result.WrongIndex.length; i++) {
              let ICall = async () => {
                //上次触摸的节点在题目中
                let IsPlay = false;
                let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(this.TouchNode.worldPosition, this.KeyTarget);

                if (Obj.Distance <= this.OnDistance) {
                  for (let j = 0; j < Result.WrongIndex[i].length; j++) {
                    if (this.KeyTarget[Obj.Index].name == KeyP.children[Result.WrongIndex[i][j]].name) {
                      IsPlay = true; //console.log("AnimF");

                      break;
                    }
                  }
                }

                if (IsPlay) {
                  this.Resoure_Data.Sound_Play("Audio/Wrong");

                  for (let j = 0; j < Result.WrongIndex[i].length; j++) {
                    //题目的Value占位节点
                    if (Number.isNaN(Number(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Label").getComponent(Label).string))) {
                      continue;
                    }

                    let Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.WrongIndex[i][j]].worldPosition, this.ValueTargetC);

                    if (Obj.Distance <= this.OnDistance) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(this.ValueTargetC[Obj.Index].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Label(this.ValueTargetC[Obj.Index].getChildByName("Label"), color(155, 0, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                      // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.WrongIndex[i][j]]);

                      tween(this.ValueTargetC[Obj.Index]).to(0.1, {
                        angle: 10
                      }).to(0.1, {
                        angle: -20
                      }).to(0.1, {
                        angle: 20
                      }).to(0.1, {
                        angle: -20
                      }).to(0.1, {
                        angle: 10
                      }).to(0.1, {
                        angle: 0
                      }).start();
                      tween(KeyP.children[Result.WrongIndex[i][j]]).to(0.1, {
                        angle: 10
                      }).to(0.1, {
                        angle: -20
                      }).to(0.1, {
                        angle: 20
                      }).to(0.1, {
                        angle: -20
                      }).to(0.1, {
                        angle: 10
                      }).to(0.1, {
                        angle: 0
                      }).start(); // tween(this.ValueTargetC[Obj.Index])
                      //     .by(0.1, { scale: v3(-0.4, -0.4, 1) })
                      //     .by(0.1, { scale: v3(0.4, 0.4, 1) })
                      //     .start();
                    } //题目的Key占位节点
                    // tween(KeyP.children[Result.WrongIndex[i][j]])
                    //     .by(0.1 * Speed, { scale: v3(-0.4, - 0.4, 1) })
                    //     .by(0.1 * Speed, { scale: v3(0.4, 0.4, 1) })
                    //     .start();
                    // await Tool_Animation.instance.Async_Wait(0.05 * Speed);

                  }
                }
              };

              ICall();
            }
          };

          var Speed = 1;
          await AnimReset();
          await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
          this.Interactable = true;

          if (Count == this.GameData.Count) {
            //console.log("胜利");
            await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);
            this.GameVictory();
          }

          (_crd && Tool_Console === void 0 ? (_reportPossibleCrUseOfTool_Console({
            error: Error()
          }), Tool_Console) : Tool_Console).instance.Console_Style(Count, {
            Font_Color: 'rgba(255, 99, 71, 1)',
            Font_Size: '20px',
            Font_Weight: 'lighter',
            Font_Style: 'normal',
            Font_Family: "'fantasy',cursive",
            Text_Decoration: 'none',
            Text_Shadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
            Background_Color: 'rgba(155, 155, 155, 0.2)',
            Padding: "10px 20px",
            Margin: "10px auto",
            Border: "1px dashed rgba(0, 255, 0, 1)",
            Border_Radius: "5px"
          });
          console.log(this.KeyExitState);
          return Result;
        }

        UpdateProp() {
          this.BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label).string = this.Game_Script.PropNum + "";
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c41142aad2867bc40e6f87a1c7b90298301724a.js.map