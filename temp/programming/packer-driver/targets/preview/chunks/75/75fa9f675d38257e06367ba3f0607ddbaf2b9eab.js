System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, tween, v3, Animation, Sprite, RichText, sys, sp, PanelTemplate, Tool_Event, Tool_Animation, Tool_UI, Tool_Other, Tool_Console, PlatformApi, GravityPlatform, _dec, _class, _crd, ccclass, property, PanelMathMatch;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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

            _this2.GameStart(); //    this.Resoure_Data.Music_Play("Audio/BgmGame");

          })();
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


        LoadPanel() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              /**绑定关键节点 */
              _this3.BtnSetting = find("BtnSetting", _this3.node);
              _this3.PanelTip = find("PanelTip", _this3.node);
              _this3.BtnTip = find("BtnTip", _this3.node);
              _this3.BtnTipClose = find("BtnTipClose", _this3.PanelTip);
              _this3.BtnTipGet = find("BtnTipGet", _this3.PanelTip);
              _this3.PanelFH = find("PanelFH", _this3.node);
              _this3.PanelVictory = find("PanelVictory", _this3.node);
              _this3.PanelFail = find("PanelFail", _this3.node);
              _this3.BtnNext = find("BtnNext", _this3.PanelVictory); // this.BtnGet = find("BtnGet", this.PanelTip);

              _this3.BtnExit = find("BtnExit", _this3.node);
              /**注册按钮事件 */

              yield _this3.OnBtn(_this3.Game_Script.AnimSwitch);
              _this3.IsInit = true;
              resolve();
              _this3.KeyShadow = yield _this3.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/KeyShadow");
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

            /**设置按钮 */
            var BtnContinue = () => {
              _this4.TimerIng();
            };

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.Game_Script.PanelSetting.getChildByName("BtnLayout").getChildByName("BtnContinue"), BtnContinue);
            /**设置按钮 */

            var BtnSettingCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this4.Game_Script.UpdatePanelSetting(true);

              _this4.TimerPause();
            };
            /**关闭按钮 */


            var BtnBreakCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this4.node.active = false;
            };

            var IsShare = false;
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Event_On("WXOnShow", () => {
              if (!IsShare) {
                return;
              }

              IsShare = false;
              _this4.Game_Script.MathMatchLevel--;
              _this4.Game_Script.MathMatchScore -= _this4.Score;

              _this4.Game_Script.DataSet();

              _this4.GameStart();

              _this4.Resoure_Data.Music_Resume();
            }, _this4);
            /**重新游戏 */

            var BtnReStartCall = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
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

                  console.log(_this4.Game_Script.MathMatchLevel);
                  _this4.Game_Script.MathMatchLevel--;
                  console.log(_this4.Game_Script.MathMatchLevel);
                  _this4.Game_Script.MathMatchScore -= _this4.Score;

                  _this4.Game_Script.DataSet();

                  _this4.GameStart();
                }
              });

              return function BtnReStartCall() {
                return _ref2.apply(this, arguments);
              };
            }();
            /**下一关按钮 */


            var BtnNextCall = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                _this4.Game_Script.BlockInputEvents.active = true;
                var StarsData = {
                  Pos: [v3(-175, 150, 0), v3(0, 180, 0), v3(175, 150, 0)],
                  Angle: [50, 25, 0]
                };
                var Stars = find("WinBanner/Stars", _this4.PanelVictory);

                var AddScoreAnim = /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator(function* () {
                    for (var I = 0; I < _this4.Score; I++) {
                      var Star = Stars.children[I].children[0].parent;
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

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.3);

                    for (var _I = 0; _I < _this4.Score; _I++) {
                      var _Star = Stars.children[_I].children[0].parent;
                      console.log(_this4.Game_Script.ScoreLabel2.node.parent.getChildByName("Icon"));
                      var TPos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(_Star, _this4.Game_Script.ScoreLabel1.node.parent.getChildByName("Icon"));
                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(_Star, TPos, 0.25);
                      tween(_Star).to(0.25, {
                        scale: v3(0.25, 0.25, 1)
                      }).call(() => {
                        tween(_this4.Game_Script.ScoreLabel1.node.parent.getChildByName("Icon")).by(0.1, {
                          scale: v3(-0.2, -0.2, 0)
                        }).by(0.1, {
                          scale: v3(0.2, 0.2, 0)
                        }).start();
                        _this4.Game_Script.ScoreLabel1.string = Number(_this4.Game_Script.ScoreLabel1.string) + 1 + "";

                        _this4.Resoure_Data.Sound_Play("Audio/AddScore");
                      }).start();
                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.15);
                    }
                  });

                  return function AddScoreAnim() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                yield AddScoreAnim();
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.6);

                _this4.GameStart();
              });

              return function BtnNextCall() {
                return _ref3.apply(this, arguments);
              };
            }();

            var BtnTipCall = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(function* () {
                if (_this4.BtnTip.getComponent(Sprite).grayscale) {
                  //this.ValueTarget.length 
                  return;
                }

                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                if (_this4.Game_Script.PropNum > 0) {
                  TipCall();
                } else {
                  _this4.PanelTip.active = true;
                }
              });

              return function BtnTipCall() {
                return _ref5.apply(this, arguments);
              };
            }();

            var BtnTipCloseCall = /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                _this4.PanelTip.active = false;
              });

              return function BtnTipCloseCall() {
                return _ref6.apply(this, arguments);
              };
            }();

            var BtnTipGetCall = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                _this4.TimerPause();

                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                  _this4.Resoure_Data.Music_Resume();

                  _this4.TimerIng();

                  _this4.PanelTip.active = false;
                  var P = yield _this4.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/Icon");
                  var N = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(P, _this4.node, v3(0, 0, 0)); // N.scale = v3(0, 0, 1);

                  _this4.Game_Script.PropNum += 2;

                  _this4.Game_Script.DataSet();

                  _this4.Resoure_Data.Sound_Play("Audio/PropA"); //console.log("播放道具抖动音效");


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
                    var Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(N, _this4.BtnTip).add(v3(10, 40, 0));
                    var a = v3(Pos.x + 250, 1000, 0);
                    var b = v3(N.position.x, -200, 0);
                    (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Bezier_Time(N, Pos, 1, a, b, 0.5, () => {
                      _this4.Resoure_Data.Sound_Play("Audio/PropGet"); //console.log("播放道具获取音效");


                      _this4.UpdateProp();

                      N.destroy();
                    });
                  }).start();
                }), () => {
                  _this4.Resoure_Data.Music_Resume();

                  _this4.TimerInit();
                });
              });

              return function BtnTipGetCall() {
                return _ref7.apply(this, arguments);
              };
            }();
            /**提示 */


            var TipCall = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(function* () {
                // this.Game_Script.OnMessage("没有更多关卡了");
                //console.error(this.ValueTarget);
                if (_this4.TipLabel != null || _this4.TipNode != null) {
                  return;
                } //剩下的数字


                var ValueNumber = [];

                for (var i = 0; i < _this4.ValueTarget.length; i++) {
                  ValueNumber.push(Number(_this4.ValueTarget[i].getChildByName("Label").getComponent(Label).string));
                }

                if (ValueNumber == undefined) {
                  // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 0, 0, 255));
                  // this.TipLabel.getComponent(Label).string = "";
                  // this.TipLabel.scale = v3(1, 1, 1);
                  // Tool_Animation.instance.Tween_Stop_Target(this.TipLabel);
                  _this4.TipLabel = null;
                  _this4.TipNode = null;
                  return;
                }

                _this4.Game_Script.PropNum--;

                _this4.Game_Script.DataSet();

                _this4.UpdateProp(); //console.log("剩下的数字", ValueNumber);


                var NullGIndex = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(0, ValueNumber.length - 1); //索引
                //console.log("V索引", NullGIndex);
                //答案
                //console.log("答案", ValueNumber[NullGIndex]);

                for (var j = 0; j < _this4.GameData.Result.length; j++) {
                  //如何是正确答案
                  if (_this4.GameData.Result[j] == ValueNumber[NullGIndex]) {
                    var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_this4.KeyTarget[j].worldPosition, _this4.ValueTargetC);

                    if (Obj.Distance < _this4.OnDistance) {
                      var Num = Number(_this4.ValueTargetC[Obj.Index].getChildByName("Label").getComponent(Label).string);
                      console.warn("当前答案", Num);

                      if (Num == ValueNumber[NullGIndex]) {
                        continue;
                      } else {
                        _this4.TipLabel = _this4.KeyTarget[j].getChildByName("Label");
                        _this4.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this4.TipLabel, color(0, 155, 0, 255)); //console.error("K索引", j);
                        //console.error(Obj);

                        _this4.TipNode = _this4.ValueTarget[NullGIndex];
                        var TouchNode = _this4.ValueTargetC[Obj.Index];
                        Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this4.KeyTarget);

                        var _i = _this4.ValueTargetC.indexOf(TouchNode);

                        console.log("i------", _i);
                        var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this4.ValueTarget, TouchNode) == -1 ? false : true;

                        var _Key = find("Key", _this4.node);

                        var _Value = find("Value", _this4.node);

                        var Temp = find("Temp", _this4.node);
                        var ColorOff = color(255, 255, 155, 255);
                        var ColorOn = color(155, 255, 155, 255);
                        (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(TouchNode);
                        TouchNode.scale = v3(1, 1, 1);
                        TouchNode.angle = 0;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), yield _this4.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Node_Index_Set(TouchNode, -1); // 1. 获取原节点（当前占用目标位置的节点）

                        var OriginalNode = _this4.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
                        //原上次索引

                        var OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this4.ValueTargetC, OriginalNode); //现上次索引

                        var CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this4.ValueTargetC, TouchNode); // //console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                        // //console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

                        _this4.TipStart(); // //console.log("是否存在", IsExit);


                        if (!IsExit) {
                          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                            error: Error()
                          }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this4.ValueTarget, TouchNode); //题目节点的索引

                          var KeyNodeIndexT = _Key.children.indexOf(_this4.KeyTarget[_this4.LastKeyIndex[CurrentLastKeyIndex]]);

                          var KeyNodeValueT = "N";
                          _this4.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                          console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT); // //console.log(this.GameData);

                          if (_this4.LastKeyIndex[_i] != null) {
                            _this4.KeyExitState[_this4.LastKeyIndex[_i]] = false;
                            _this4.KeyExitValue[_this4.LastKeyIndex[_i]] = null;
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this4.KeyTarget[_this4.LastKeyIndex[_i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                          } // 重置当前目标位置的状态（如果之前已被占用）


                          if (_this4.KeyExitState[Obj.Index]) {
                            _this4.KeyExitState[Obj.Index] = false; //console.error(this.KeyExitState[Obj.Index], "1---------------------", Obj.Index);

                            _this4.KeyExitValue[Obj.Index] = null;
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this4.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                          }

                          _this4.LastKeyIndex[_i] = null;
                          console.log(_this4.LastKeyIndex, _i);
                        }

                        _this4.UpdateUIValue();

                        return;
                      }
                    } else {
                      _this4.TipLabel = _this4.KeyTarget[j].getChildByName("Label");
                      _this4.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this4.TipLabel, color(0, 155, 0, 255)); // //console.error("K索引", j);
                      // //console.error(Obj);

                      _this4.TipNode = _this4.ValueTarget[NullGIndex];

                      _this4.TipStart();

                      return;
                    }
                  }
                }
              });

              return function TipCall() {
                return _ref9.apply(this, arguments);
              };
            }();
            /**设置按钮事件 */


            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnSetting, BtnSettingCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnTip, BtnTipCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnTipClose, BtnTipCloseCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnTipGet, BtnTipGetCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnNext, BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnExit, BtnBreakCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelVictory.getChildByName("BtnReStart"), BtnReStartCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnNext"), () => {
              _this4.GameStart();
            });
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnBreak"), BtnBreakCall); //复活

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFH.getChildByName("Btn"), () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
                _this4.Resoure_Data.Music_Resume();

                _this4.PanelFH.active = false;

                _this4.TimerInit();
              }, () => {
                _this4.Resoure_Data.Music_Resume();
              });
            });
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFH.getChildByName("BtnClose"), () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this4.PanelFH.active = false;

              _this4.GameFailed();
            });
            /**设置按钮动画 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnSetting, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnTip, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnTipClose, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnTipGet, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnNext, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnExit, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnNext"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnBreak"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFH.getChildByName("Btn"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnBreak"), AnimSwitch);
            var Key = find("Key", _this4.node);
            var Value = find("Value", _this4.node);

            for (var i = 0; i < Value.children.length; i++) {
              _this4.ValuePos.push(Value.children[i].position.clone());
            }
          })();
        }

        TimerInit() {
          this.GameTime = this.GameTimeAll;
          this.TimerIng();
        }

        TimerIng() {
          var ComponentLabel = find("Title/Bgg/Timer", this.node).getComponent(Label);
          ComponentLabel.string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Seconds_To_Time_String(this.GameTime).substring(1);
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Function_Id(1, 0, () => {
            this.GameTimeIng++;
            this.GameTime--;
            ComponentLabel.string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Seconds_To_Time_String(this.GameTime).substring(1);

            if (this.GameTime <= this.JGTime && !find("JG", this.node).active) {
              find("JG", this.node).active = true;
              find("JG", this.node).getComponent(Animation).play();
            }

            if (this.GameTime <= 0) {
              this.PanelFH.active = true;
              this.Resoure_Data.Sound_Play("Audio/FH");
              find("JG", this.node).active = false;
            } else {
              this.TimerIng();
            }
          });
        }

        TimerPause() {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Tag(0);
        }

        TimerResume() {
          this.TimerIng();
        }

        TimerStop() {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Tag(0);
        }
        /**初始化数据 */


        InitData() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.Game_Script.UpdateScore(); //console.log("初始化数据");

            /**注册按钮事件 */
            // await this.OnBtn(this.Game_Script.AnimSwitch);


            _this5.KeyTarget = [];
            _this5.KeyExitState = [];
            _this5.KeyExitValue = [];
            _this5.ValueTarget = [];
            _this5.ValueTargetC = [];
            _this5.LastKeyIndex = [];
            _this5.AnimCorrectNode = [];
            _this5.AnimWrongNode = [];
            _this5.Interactable = true;
            _this5.TouchNode = null;
            _this5.TipLabel = null;
            _this5.TipNode = null;
            _this5.GameTimeIng = 0; // this.Game_Script.MathMatchLevel = 7;

            var F = {
              "Level": 6,
              "Key": ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
              "Value": [],
              "Result": [],
              "Count": 0
            };
            var Json = yield _this5.Resoure_Data.Load_Json("Json/mathmatch");
            var JsonData = Json["Data"];
            console.log("\u7248\u672C\u53F7:" + Json["Version"]);
            console.log("\u5F53\u524D\u5173\u5361:" + (_this5.Game_Script.MathMatchLevel + 1));
            _this5.GameData = null;

            if (_this5.Game_Script.MathMatchLevel < 0) {
              _this5.Game_Script.MathMatchLevel = 0; //console.log("关卡为负");

              _this5.Game_Script.DataSet();
            }

            if (_this5.Game_Script.MathMatchLevel >= JsonData.length) {
              _this5.Game_Script.OnMessage("恭喜全部通关，后续敬请期待");

              _this5.Game_Script.MathMatchLevel = JsonData.length; // let Ran = Tool_Other.instance.Get_Random_Int(20, 35);
              // if (Ran < JsonData.length - 1) {
              //     this.GameData = this.Resoure_Data.Copy_Deep(JsonData[Ran]);
              // } else {

              _this5.GameData = _this5.Resoure_Data.Copy_Deep(JsonData[JsonData.length - 1]); // }
            } else {
              _this5.GameData = _this5.Resoure_Data.Copy_Deep(JsonData[_this5.Game_Script.MathMatchLevel]);
            }

            console.log("\u5F53\u524D\u5173\u5361\u9898\u76EE\u914D\u7F6E");
            var a = [];

            for (var i = 0; i < 11; i++) {
              a[i] = [];

              for (var j = 0; j < 11; j++) {
                a[i].push(_this5.GameData.Key[i * 11 + j]);
              }
            }

            console.log(a);
            console.log("\u5F53\u524D\u5173\u5361\u7B54\u9898\u914D\u7F6E");
            console.log(_this5.GameData.Value);
            console.log("\u5F53\u524D\u5173\u5361\u7B54\u6848\u914D\u7F6E");
            console.log(_this5.GameData.Result); //console.log(this.GameData);

            _this5.Game_Script.IsHint = false;
            _this5.Game_Script.IsContinue = false;

            _this5.TimerInit();
          })();
        }
        /**初始化界面 */


        InitInterface() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            _this6.PanelVictory.active = false;
            _this6.PanelFail.active = false;
            _this6.PanelTip.active = false;
            _this6.PanelFH.active = false;
            var Hand = find("Hand", _this6.node);
            Hand.active = false;
            find("ND", _this6.node).active = false;
            find("JG", _this6.node).active = false;

            if (_this6.Game_Script.MathMatchLevel == 1) {
              find("ND", _this6.node).active = true;
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play(find("ND", _this6.node).getComponent(Animation), null, null, () => {
                find("ND", _this6.node).active = false;
              });
            }

            _this6.UpdateProp();

            if (_this6.Game_Script.MathMatchLevel >= 200) {
              _this6.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u7B2C" + _this6.Game_Script.MathMatchLevel + "\u5173";
            } else {
              _this6.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u7B2C" + (_this6.Game_Script.MathMatchLevel + 1) + "\u5173";
            }

            find("Temp", _this6.node).destroyAllChildren();
            var Key = find("Key", _this6.node);
            var Value = find("Value", _this6.node);

            for (var i = 0; i < Key.children.length; i++) {
              Key.children[i].active = false;
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(Key.children[i].getChildByName("Bg").getChildByName("Sp"), color(255, 255, 155, 255));
            }

            for (var _i2 = 0; _i2 < Value.children.length; _i2++) {
              Value.children[_i2].active = false;
              Value.children[_i2].scale = v3(1, 1, 1);
              Value.children[_i2].angle = 0;
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Value.children[_i2].getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Label(Value.children[_i2].getChildByName("Label"), color(0, 155, 0, 255));
            }

            if (_this6.GameData == null) {
              //console.log("配置错误");
              return;
            }

            for (var _i3 = 0; _i3 < Key.children.length; _i3++) {
              Key.children[_i3].active = true;

              switch (_this6.GameData.Key[_i3]) {
                case "U":
                  Key.children[_i3].active = false;
                  break;

                case "N":
                  Key.children[_i3].getChildByName("Label").getComponent(Label).string = "";

                  _this6.KeyTarget.push(Key.children[_i3]);

                  _this6.KeyExitState.push(false);

                  _this6.KeyExitValue.push(null);

                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Key.children[_i3].getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                  break;

                default:
                  var Str = "";

                  switch (_this6.GameData.Key[_i3]) {
                    // case "/":
                    //     Str = "÷";
                    // break;
                    case "X":
                      Str = "x";
                      break;

                    default:
                      Str = _this6.GameData.Key[_i3];
                      break;
                  }

                  Key.children[_i3].getChildByName("Label").getComponent(Label).string = Str;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(Key.children[_i3].getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                  break;
              }
            }

            var Temp = find("Temp", _this6.node);
            var ColorOff = color(255, 255, 155, 255);
            var ColorOn = color(155, 255, 155, 255);

            var _loop = function* _loop(_i4) {
              var Shadow = Value.children[_i4].getChildByName("Shadow");

              var ComponentLabel1 = Value.children[_i4].getChildByName("Label").getComponent(Label);

              Shadow.active = false; // Value.children[i].active = i < this.GameData.Value.length ? true : false;

              if (_i4 < _this6.GameData.Value.length ? true : false) {
                _this6.ValueTarget.push(Value.children[_i4]);

                _this6.ValueTargetC.push(Value.children[_i4]);

                _this6.LastKeyIndex.push(null);

                Value.children[_i4].position = _this6.ValuePos[_i4];
                ComponentLabel1.string = _this6.GameData.Value[_i4] + "";
                (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                  error: Error()
                }), Tool_Event) : Tool_Event).instance.Off_Event_TOUCH_All(Value.children[_i4]);
                var _TouchNode = Value.children[_i4];

                var _Shadow = _TouchNode.getChildByName("Shadow");

                var ComponentLabel = _TouchNode.getChildByName("Label").getComponent(Label);

                var Check_Shadow = () => {
                  var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_TouchNode.worldPosition, _this6.KeyTarget);

                  if (Obj.Distance <= _this6.OnDistance) {
                    if (_this6.KeyShadowIndex == Obj.Index) {
                      return;
                    }

                    Temp.destroyAllChildren();
                    _this6.KeyShadowIndex = Obj.Index;
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(_this6.KeyShadow, Temp, _this6.KeyTarget[Obj.Index], "");
                  } else {
                    Temp.destroyAllChildren();
                    _this6.KeyShadowIndex = -1;
                  }
                };

                (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                  error: Error()
                }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_START(_TouchNode, () => {
                  //console.log(this.Game_Script.MathMatchLevel, this.Step, TouchNode.getChildByName("Label").getComponent(Label).string);
                  if (_this6.Game_Script.MathMatchLevel == 0) {
                    if (_this6.Step == 0) {
                      if (_TouchNode.getChildByName("Label").getComponent(Label).string != "1") {
                        _this6.Interactable = false;
                        return;
                      } else {
                        _this6.Interactable = true;
                      }
                    }

                    if (_this6.Step == 1) {
                      if (_TouchNode.getChildByName("Label").getComponent(Label).string != _this6.KeyExitValue[2].getChildByName("Label").getComponent(Label).string) {
                        _this6.Interactable = false;
                        return;
                      } else {
                        _this6.Interactable = true;
                      }
                    }
                  }
                });
                (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                  error: Error()
                }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Drag(_TouchNode, () => _this6.Interactable, /*#__PURE__*/_asyncToGenerator(function* (Event, Pos_Touch_Start) {
                  /**触摸开始回调 */
                  if (_this6.GameData == null) {
                    _this6.Interactable = false; //console.log("配置错误");

                    return;
                  }

                  _this6.TouchNode = _TouchNode; //console.log(this.LastKeyIndex, i, this.ValueTargetC.indexOf(TouchNode));

                  _this6.Resoure_Data.Sound_Play("Audio/NumClick");

                  if (_this6.Resoure_Data.Vibration_Switch_Get()) {
                    (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                      error: Error()
                    }), PlatformApi) : PlatformApi).instance.vibrateShort();
                  }

                  var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_TouchNode.worldPosition, _this6.KeyTarget);
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(_this6.KeyTarget[Obj.Index]);
                  _this6.KeyTarget[Obj.Index].scale = v3(1, 1, 1);
                  _this6.KeyTarget[Obj.Index].angle = 0;
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(_TouchNode);
                  _TouchNode.scale = v3(1, 1, 1);
                  _TouchNode.angle = 0;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_TouchNode.getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Node_Index_Set(_TouchNode, -1);
                  _Shadow.active = true;
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(_TouchNode, Pos_Touch_Start.clone().add(v3(0, 25, 0)), 0.02, null, "smooth");
                  var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTarget, _TouchNode) == -1 ? false : true;

                  if (!IsExit) {
                    tween(_TouchNode).to(0.25, {
                      scale: v3(1, 1, 1)
                    }, {
                      easing: "backOut"
                    }).start();
                  }

                  Check_Shadow(); //console.error(this.TouchNode == this.TipNode);

                  if (_this6.TouchNode == _this6.TipNode) {
                    for (var _i9 = 0; _i9 < _this6.TipAnim.length; _i9++) {
                      _this6.TipAnim[_i9].destroy();
                    }

                    _this6.TipAnim = [];
                  }
                }), (Event, Pos_Touch_Start) => {
                  /**触摸移动回调 */
                  Check_Shadow();
                }, /*#__PURE__*/_asyncToGenerator(function* (Event, Pos_Touch_Start, Pos_Touch_End) {
                  /**触摸结束回调 */
                  _Shadow.active = false;
                  var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTarget, _TouchNode) == -1 ? false : true;
                  var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_TouchNode.worldPosition, _this6.KeyTarget); // 1. 获取原节点（当前占用目标位置的节点）

                  var OriginalNode = _this6.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
                  //原上次索引

                  var OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTargetC, OriginalNode); //现上次索引

                  var CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTargetC, _TouchNode); //console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                  //console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);

                  if (_this6.Game_Script.MathMatchLevel == 0) {
                    _this6.Step++;

                    if (_this6.Step == 1) {
                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Hand);
                      var _MoveNode = _this6.KeyExitValue[2];

                      _this6.Game_Script.OnMessage("可以把数字拖动放在另一个格子");

                      var _PosStart = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, _MoveNode).add(v3(30, -50));

                      var _PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, _this6.KeyTarget[3]).add(v3(30, -50));

                      var _AnimA = () => {
                        Hand.position = _PosStart;
                        (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, _PosEnd, 1, () => {
                          if (_this6.Step == 1) {
                            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                              error: Error()
                            }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, _PosStart, 0.5, () => {
                              if (_this6.Step == 1) {
                                _AnimA();
                              }
                            });
                          }
                        });
                      };

                      _AnimA();
                    } else {
                      Hand.active = false;
                    }
                  }

                  if (Obj.Distance <= _this6.OnDistance) {
                    _this6.TipReset(); //目标位置被占用
                    //console.error(this.KeyExitState[Obj.Index], this.LastKeyIndex[i], Obj.Index);


                    if (_this6.KeyExitState[Obj.Index] && _this6.LastKeyIndex[_i4] != Obj.Index) {
                      //
                      if (_this6.LastKeyIndex[_i4] != null) {
                        _this6.KeyTarget[Obj.Index].active = false;
                        _this6.KeyTarget[_this6.LastKeyIndex[_i4]].active = false; // 将原节点移动到 LastKeyIndex 的位置

                        var OriginalNodePos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(OriginalNode, _this6.KeyTarget[_this6.LastKeyIndex[_i4]]); // this.Interactable = false;

                        (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, /*#__PURE__*/_asyncToGenerator(function* () {
                          // this.Interactable = true;
                          _this6.KeyTarget[Obj.Index].active = true;
                          _this6.KeyTarget[_this6.LastKeyIndex[_i4]].active = true; //交换索引
                          //console.log(this.LastKeyIndex, 1);
                          //console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
                          //console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

                          var LastKeyIndexTemp = _this6.LastKeyIndex[OriginalLastKeyIndex];
                          _this6.LastKeyIndex[OriginalLastKeyIndex] = _this6.LastKeyIndex[CurrentLastKeyIndex];
                          _this6.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //交换节点的索引

                          var KeyNodeIndexL = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[OriginalLastKeyIndex]]);
                          var KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string; //题目节点的索引

                          var KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                          var KeyNodeValueT = _TouchNode.getChildByName("Label").getComponent(Label).string;

                          _this6.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
                          _this6.GameData.Key[KeyNodeIndexT] = KeyNodeValueT; // console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
                          // console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
                          // console.log(this.GameData);

                          _this6.FindAllEquationIndices_(_this6.GameData.Key);

                          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(OriginalNode);
                          OriginalNode.scale = v3(0.9, 0.9, 1);
                          OriginalNode.angle = 0;
                          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                            error: Error()
                          }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                            error: Error()
                          }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); // //console.error(OriginalNode, TouchNode);

                          yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
                          _this6.TouchNode = OriginalNode;

                          _this6.FindAllEquationIndices_(_this6.GameData.Key);
                        }), "smooth"); // 更新原节点的状态为占用 LastKeyIndex

                        _this6.KeyExitState[_this6.LastKeyIndex[_i4]] = true;
                        _this6.KeyExitValue[_this6.LastKeyIndex[_i4]] = OriginalNode;
                      } else {
                        // 如果 LastKeyIndex 为 null，将原节点放回 ValueTarget 池
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this6.ValueTarget, OriginalNode);
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); //交换索引
                        //console.log(this.LastKeyIndex, 2);
                        //console.error(OriginalLastKeyIndex, this.LastKeyIndex[OriginalLastKeyIndex]);
                        //console.error(CurrentLastKeyIndex, this.LastKeyIndex[CurrentLastKeyIndex]);

                        var LastKeyIndexTemp = _this6.LastKeyIndex[OriginalLastKeyIndex];
                        _this6.LastKeyIndex[OriginalLastKeyIndex] = _this6.LastKeyIndex[CurrentLastKeyIndex];
                        _this6.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //题目节点的索引

                        var _KeyNodeIndexT2 = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                        var _KeyNodeValueT2 = _TouchNode.getChildByName("Label").getComponent(Label).string;

                        _this6.GameData.Key[_KeyNodeIndexT2] = _KeyNodeValueT2;
                        console.log("赋值的索引", _KeyNodeIndexT2, "赋值的数据", _KeyNodeValueT2); //console.log(this.GameData);

                        _this6.FindAllEquationIndices_(_this6.GameData.Key, 0.2);
                      } // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）


                      _this6.KeyExitState[Obj.Index] = true;
                      _this6.KeyExitValue[Obj.Index] = _TouchNode; // 4. 更新颜色和临时状态

                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);

                      if (_this6.LastKeyIndex[_i4] != null) {
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i4]].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                      } //放置成功 移除节点


                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this6.ValueTarget, _TouchNode);
                      Temp.destroyAllChildren();
                      _this6.KeyShadowIndex = -1;

                      for (var _i10 = 0; _i10 < _this6.TipAnim.length; _i10++) {
                        _this6.TipAnim[_i10].destroy();
                      } // 6. 更新 UI


                      _this6.UpdateUIValue();

                      var _Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(_TouchNode, _this6.KeyTarget[Obj.Index]);

                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(_TouchNode, _Pos, 0.2, null, "smooth");
                      tween(_TouchNode).to(0.25, {
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
                      }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this6.ValueTarget, _TouchNode); //题目节点的索引

                      var _KeyNodeIndexT3 = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                      var _KeyNodeValueT3 = _TouchNode.getChildByName("Label").getComponent(Label).string;

                      _this6.GameData.Key[_KeyNodeIndexT3] = _KeyNodeValueT3;
                      console.log("赋值的索引", _KeyNodeIndexT3, "赋值的数据", _KeyNodeValueT3); //console.log(this.GameData);

                      _this6.UpdateUIValue();
                    } else {
                      var _KeyNodeIndexL = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);

                      if (_KeyNodeIndexL == -1) {//console.log(CurrentLastKeyIndex);//有值
                        //console.log(this.LastKeyIndex[CurrentLastKeyIndex]);
                        //console.log(this.KeyTarget[this.LastKeyIndex[CurrentLastKeyIndex]]);
                      }

                      var _KeyNodeValueL = "N";
                      _this6.GameData.Key[_KeyNodeIndexL] = _KeyNodeValueL; //题目节点的索引

                      var _KeyNodeIndexT4 = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                      var _KeyNodeValueT4 = _TouchNode.getChildByName("Label").getComponent(Label).string;

                      _this6.GameData.Key[_KeyNodeIndexT4] = _KeyNodeValueT4;
                      console.log("赋值的索引", _KeyNodeIndexL, "赋值的数据", _KeyNodeValueL);
                      console.log("赋值的索引", _KeyNodeIndexT4, "赋值的数据", _KeyNodeValueT4); //console.log(this.GameData);
                    }

                    _this6.KeyExitState[Obj.Index] = true;
                    _this6.KeyExitValue[Obj.Index] = _TouchNode; //console.error(this.LastKeyIndex[i], this.LastKeyIndex[i], this.KeyExitState[this.LastKeyIndex[i]]);

                    if (_this6.LastKeyIndex[_i4] != null && _this6.LastKeyIndex[_i4] != Obj.Index) {
                      console.error(_this6.KeyExitState[_this6.LastKeyIndex[_i4]], "2---------------------", Obj.Index);
                      _this6.KeyExitState[_this6.LastKeyIndex[_i4]] = false;
                      _this6.KeyExitValue[_this6.LastKeyIndex[_i4]] = null;
                    } //改变Key背景颜色


                    _this6.LastKeyIndex[_i4] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i4]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    _this6.LastKeyIndex[_i4] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;
                    //console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                    Temp.destroyAllChildren();

                    for (var _i11 = 0; _i11 < _this6.TipAnim.length; _i11++) {
                      _this6.TipAnim[_i11].destroy();
                    }

                    _this6.KeyShadowIndex = -1;

                    var _Pos2 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(_TouchNode, _this6.KeyTarget[Obj.Index]);

                    _this6.UpdateUIValue();

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(_TouchNode, _Pos2, 0, null, "smooth");
                    tween(_TouchNode).to(0.25, {
                      scale: v3(0.9, 0.9, 1)
                    }, {
                      easing: "backOut"
                    }).start();
                  } else {
                    if (!IsExit) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this6.ValueTarget, _TouchNode); //题目节点的索引

                      var _KeyNodeIndexT5 = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);

                      var _KeyNodeValueT5 = "N";
                      _this6.GameData.Key[_KeyNodeIndexT5] = _KeyNodeValueT5;
                      console.log("赋值的索引", _KeyNodeIndexT5, "赋值的数据", _KeyNodeValueT5); //console.log(this.GameData);

                      if (_this6.LastKeyIndex[_i4] != null && _this6.LastKeyIndex[_i4] != Obj.Index) {
                        _this6.KeyExitState[_this6.LastKeyIndex[_i4]] = false;
                        _this6.KeyExitValue[_this6.LastKeyIndex[_i4]] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i4]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      } // 重置当前目标位置的状态（如果之前已被占用）


                      if (_this6.KeyExitState[Obj.Index]) {
                        _this6.KeyExitState[Obj.Index] = false; //console.error(this.KeyExitState[Obj.Index], "3---------------------", Obj.Index);

                        _this6.KeyExitValue[Obj.Index] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      }

                      _this6.LastKeyIndex[_i4] = null;
                    } // await Tool_Animation.instance.Async_Wait(0.05);


                    _this6.UpdateUIValue();

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.25);

                    _this6.TipStart();
                  } //console.log("this.KeyExitState", this.KeyExitState);
                  //console.log("this.KeyExitValue", this.KeyExitValue);
                  //console.log("this.ValueTarget", this.ValueTarget);


                  _this6.FindAllEquationIndices_(_this6.GameData.Key);
                }));
              }
            };

            for (var _i4 = 0; _i4 < Value.children.length; _i4++) {
              yield* _loop(_i4);
            } // this.UpdateUIValue(0);
            // await Tool_Animation.instance.Async_Wait(0.1);


            for (var _i5 = 0; _i5 < _this6.ValueTarget.length; _i5++) {
              _this6.ValueTarget[_i5].active = false;
            }

            for (var _i6 = 0; _i6 < _this6.ValueTarget.length; _i6++) {
              _this6.ValueTarget[_i6].active = true;
              _this6.ValueTarget[_i6].position = _this6.ValueTarget[_i6].position.clone().add(v3(1000, 0, 0));
            }

            var Time = 0;
            var Wait = 0;
            var Len = _this6.GameData.Value.length;
            Time = 1.2 / Len;
            Wait = Time / 2;

            if (_this6.Game_Script.MathMatchLevel == 0) {
              _this6.Game_Script.BlockInputEvents.active = true;
              _this6.Step = 0;
              var N = _this6.ValueTarget[2];
              N.active = true;
              N.scale = v3(0.9, 0.9, 1);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Pos_Word_Same(N, _this6.KeyTarget[2]);
              var TouchNode = _this6.ValueTarget[2];

              var _i7 = _this6.ValueTargetC.indexOf(TouchNode); // Shadow.active = false;


              var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTarget, TouchNode) == -1 ? false : true;
              var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this6.KeyTarget); // 1. 获取原节点（当前占用目标位置的节点）

              var OriginalNode = _this6.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
              //原上次索引

              var OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTargetC, OriginalNode); //现上次索引

              var CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTargetC, TouchNode);

              if (Obj.Distance <= _this6.OnDistance) {
                _this6.TipReset(); //目标位置被占用


                if (IsExit) {
                  //放置成功 移除节点
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this6.ValueTarget, TouchNode); //题目节点的索引

                  var KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);
                  var KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                  _this6.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                } else {
                  var KeyNodeIndexL = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);

                  if (KeyNodeIndexL == -1) {}

                  var KeyNodeValueL = "N";
                  _this6.GameData.Key[KeyNodeIndexL] = KeyNodeValueL; //题目节点的索引

                  var _KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                  var _KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                  _this6.GameData.Key[_KeyNodeIndexT] = _KeyNodeValueT;
                }

                _this6.KeyExitState[Obj.Index] = true;
                _this6.KeyExitValue[Obj.Index] = TouchNode;

                if (_this6.LastKeyIndex[_i7] != null && _this6.LastKeyIndex[_i7] != Obj.Index) {
                  _this6.KeyExitState[_this6.LastKeyIndex[_i7]] = false;
                  _this6.KeyExitValue[_this6.LastKeyIndex[_i7]] = null;
                } //改变Key背景颜色


                _this6.LastKeyIndex[_i7] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i7]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                _this6.LastKeyIndex[_i7] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;
                //console.error(Obj.Index, this.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                Temp.destroyAllChildren();

                for (var _i8 = 0; _i8 < _this6.TipAnim.length; _i8++) {
                  _this6.TipAnim[_i8].destroy();
                }

                _this6.KeyShadowIndex = -1;
                var Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, _this6.KeyTarget[Obj.Index]);
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos, 0, null, "smooth");
                tween(TouchNode).to(0.25, {
                  scale: v3(0.9, 0.9, 1)
                }, {
                  easing: "backOut"
                }).start();
              }

              _this6.UpdateUIValue(Time, Wait, true);

              yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(1);
              _this6.Game_Script.BlockInputEvents.active = false;
              Hand.active = true;
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Hand);
              var MoveNode = _this6.ValueTarget[0];

              _this6.Game_Script.OnMessage("将需要的数字拖动到空格上");

              var PosStart = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, MoveNode).add(v3(30, -50));
              var PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Hand, _this6.KeyTarget[0]).add(v3(30, -50));

              var AnimA = () => {
                Hand.position = PosStart;
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosEnd, 1, () => {
                  if (MoveNode == _this6.ValueTarget[0]) {
                    (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Hand, PosStart, 0.5, () => {
                      if (MoveNode == _this6.ValueTarget[0]) {
                        AnimA();
                      }
                    });
                  }
                });
              };

              AnimA();
            } else {
              _this6.UpdateUIValue(Time, Wait, true); //1.2

            }
          })();
        }
        /**刷新排序 */


        UpdateUIValue(Time, Wait, IsAudio) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (Time === void 0) {
              Time = 0.2;
            }

            if (Wait === void 0) {
              Wait = 0;
            }

            if (IsAudio === void 0) {
              IsAudio = false;
            }

            if (IsAudio) {
              _this7.Resoure_Data.Sound_Play("Audio/BoxStart");
            } //console.log("刷新排序");
            // this.Interactable = false;


            _this7.ValueTarget.sort((a, b) => {
              var valueA = parseFloat(a.getChildByName("Label").getComponent(Label).string);
              var valueB = parseFloat(b.getChildByName("Label").getComponent(Label).string);
              return valueA - valueB;
            });

            for (var i = 0; i < _this7.ValueTarget.length; i++) {
              _this7.ValueTarget[i].scale = v3(1, 1, 1);
              _this7.ValueTarget[i].angle = 0;
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(_this7.ValueTarget[i], _this7.ValuePos[i], Time, null, "smooth"); // if (Wait != 0) {

              yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Wait); // }
            }

            if (IsAudio) {
              _this7.Resoure_Data.Sound_Play("Audio/BoxEnd");
            }

            if (_this7.Game_Script.MathMatchLevel <= 0 && _this7.Step <= 1) {
              _this7.BtnTip.getComponent(Sprite).grayscale = true;
            } else {
              _this7.BtnTip.getComponent(Sprite).grayscale = _this7.ValueTarget.length == 0;
            }

            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Time); // this.Interactable = true;
          })();
        }

        GameStart() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            _this8.BtnTip.getComponent(Sprite).grayscale = true;
            _this8.Game_Script.BlockInputEvents.active = false;

            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                // window.ge.onLevelStart({ "$user_level": this.Game_Script.MathMatchLevel });
                (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                  error: Error()
                }), GravityPlatform) : GravityPlatform).instance.onLevelStart({
                  "$user_level": _this8.Game_Script.MathMatchLevel
                });
              } catch (error) {//console.log(error);
              }
            }

            _this8.TipReset();

            _this8.Timing();

            yield _this8.InitData();
            yield _this8.InitInterface();
          })();
        }

        GameVictory() {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (_this9.PanelVictory.active) {
              return;
            }

            _this9.Resoure_Data.Sound_Play("Audio/Victory");

            _this9.PanelVictory.active = true;
            _this9.Interactable = false;

            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                  error: Error()
                }), GravityPlatform) : GravityPlatform).instance.onLevelSuccess({
                  "$user_level": _this9.Game_Script.MathMatchLevel
                }); // window.ge.onLevelSuccess({ "$user_level": this.Game_Script.MathMatchLevel });
              } catch (error) {
                console.log(error);
              }
            }

            _this9.TimerPause();

            find("JG", _this9.node).active = false;
            var T = _this9.GameTimeIng / _this9.GameTimeAll;
            _this9.Score = 0;

            if (T < 0.45) {
              _this9.Score = 3;

              _this9.Resoure_Data.Sound_Play("Audio/Start3");
            } else if (T < 0.7) {
              _this9.Score = 2;

              _this9.Resoure_Data.Sound_Play("Audio/Start2");
            } else if (T < 1) {
              _this9.Score = 1;

              _this9.Resoure_Data.Sound_Play("Audio/Start1");
            } else {
              _this9.Score = 0;
            }

            _this9.Game_Script.MathMatchLevel++;
            _this9.Game_Script.MathMatchScore += _this9.Score;
            /**保存数据 */

            _this9.Game_Script.DataSet(); // this.Game_Script.UpdateScene();


            if (_this9.Score == 0) {
              _this9.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = "<color=#17a6fc>" + _this9.GameTimeAll + "/</color><color=#FF0000>" + _this9.GameTimeIng + "</color>";
            } else {
              _this9.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = "<color=#17a6fc>" + _this9.GameTimeAll + "/</color><color=#00FF00>" + _this9.GameTimeIng + "</color>";
            }

            _this9.Game_Script.BlockInputEvents.active = true;
            var StarsData = {
              Pos: [v3(-175, 150, 0), v3(0, 180, 0), v3(175, 150, 0)],
              Angle: [50, 25, 0]
            };
            var Stars = find("WinBanner/Stars", _this9.PanelVictory);

            for (var I = 0; I < Stars.children.length; I++) {
              var Star = Stars.children[I].children[0];
              Star.active = false;
              Star.scale = v3(1, 1, 1);
              Star.parent.position = StarsData.Pos[I];
              Star.parent.angle = StarsData.Angle[I];
              Star.parent.scale = v3(1, 1, 1);
            }

            var StarsAnim = /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator(function* () {
                for (var _I2 = 0; _I2 < _this9.Score; _I2++) {
                  var _Star2 = Stars.children[_I2].children[0];
                  _Star2.scale = v3(4, 4, 1);
                  _Star2.active = true;
                  tween(_Star2).to(0.05, {
                    scale: v3(5, 5, 1)
                  }).to(0.4, {
                    scale: v3(1, 1, 1)
                  }).start();
                  yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.4);
                }

                _this9.Game_Script.BlockInputEvents.active = false;
              });

              return function StarsAnim() {
                return _ref13.apply(this, arguments);
              };
            }();

            StarsAnim();

            var CD = /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator(function* () {
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(find("C1", _this9.PanelVictory).getComponent(sp.Skeleton), "default", 0, "caidai", false);
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.1);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(find("C2", _this9.PanelVictory).getComponent(sp.Skeleton), "default", 0, "caidai", false, () => {//console.log("结束");
                });
              });

              return function CD() {
                return _ref14.apply(this, arguments);
              };
            }();

            CD();

            if (_this9.Resoure_Data.Vibration_Switch_Get()) {
              for (var i = 0; i < 5; i++) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
              }
            }
          })();
        }

        GameFailed() {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                // window.ge.onLevelFail({ "$user_level": this.Game_Script.MathMatchLevel });
                (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                  error: Error()
                }), GravityPlatform) : GravityPlatform).instance.onLevelStart({
                  "$user_level": _this10.Game_Script.MathMatchLevel
                });
              } catch (error) {//console.log(error);
              }
            }

            _this10.Resoure_Data.Sound_Play("Audio/Failed");

            _this10.PanelFail.active = true;
            _this10.Interactable = false;
            _this10.PanelFail.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = "<color=#17a6fc>" + _this10.GameTimeAll + "/</color><color=#FF0000>" + _this10.GameTimeIng + "</color>";
          })();
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

          for (var i = 0; i < this.TipAnim.length; i++) {
            this.TipAnim[i].destroy();
          }

          this.TipAnim = [];
        }

        TipStart() {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            //console.log(this.TipAnim);
            if (_this11.TipAnim.length != 0) {
              return;
            }

            if (_this11.TipNode != null && _this11.TipLabel != null) {
              // Tool_Animation.instance.Animation_Heartbeat(this.TipLabel);
              for (var i = 0; i < _this11.TipAnim.length; i++) {
                _this11.TipAnim[i].destroy();
              }

              var Spine = yield _this11.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/Spine");
              var SpineNode1 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(Spine, _this11.node.getChildByName("TempV"), _this11.ValuePos[_this11.ValueTarget.indexOf(_this11.TipNode)].clone().add(v3(0, -250, 0)));
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(SpineNode1.getComponent(sp.Skeleton), "default", 0, "animation2", true);
              var SpineNode2 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(Spine, _this11.node.getChildByName("TempV"), _this11.TipLabel);
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Anim_Skeleton_Play(SpineNode2.getComponent(sp.Skeleton), "default", 0, "animation1", true);

              _this11.TipAnim.push(SpineNode1);

              _this11.TipAnim.push(SpineNode2);

              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(_this11.TipLabel);
              _this11.TipLabel.angle = 0; // Tool_Animation.instance.Tween_Stop_Target(this.TipNode);
              // this.TipNode.angle = 0;

              tween(_this11.TipLabel).repeatForever(tween().to(0.2, {
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
          })();
        }

        FindAllEquationIndices_(Key, Time, Rows, Cols) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            if (Time === void 0) {
              Time = 0;
            }

            if (Rows === void 0) {
              Rows = 11;
            }

            if (Cols === void 0) {
              Cols = 11;
            }

            _this12.Interactable = false;

            _this12.TimStop();

            if (_this12.Game_Script.MathMatchLevel <= 0 && _this12.Step <= 1) {
              _this12.BtnTip.getComponent(Sprite).grayscale = true;
            } else {
              _this12.BtnTip.getComponent(Sprite).grayscale = _this12.ValueTarget.length == 0;
            } // this.Interactable = false;


            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(Time);
            var Count = 0;
            var Result = {
              CorrectIndex: [],
              WrongIndex: []
            };
            var ResultAll = {
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
              var processed = [...expression];

              if (processed.indexOf("N") != -1) {
                return null;
              } // 第一轮处理：乘除法


              for (var i = 1; i < processed.length; i += 2) {
                var op = processed[i];

                if (op === "X" || op === "x" || op === "/") {
                  var left = parseFloat(processed[i - 1]);
                  var right = parseFloat(processed[i + 1]);

                  var _result = void 0;

                  if (op === "/") {
                    if (right === 0) throw new Error("Division by zero");
                    _result = left / right;
                  } else {
                    _result = left * right;
                  } // 替换这三个元素为计算结果


                  processed.splice(i - 1, 3, _result.toString());
                  i -= 2; // 因为数组长度减少了，调整索引
                }
              } // 第二轮处理：加减法


              var result = parseFloat(processed[0]);

              for (var _i12 = 1; _i12 < processed.length; _i12 += 2) {
                var _op = processed[_i12];
                var num = parseFloat(processed[_i12 + 1]);

                if (_op === '+') {
                  result += num;
                } else if (_op === '-') {
                  result -= num;
                } else {
                  console.log(processed + " ");
                  console.log(_i12);
                  throw new Error("Unknown operator: " + _op);
                }
              }

              return result;
            }

            var ErrorChar = ["=", "U"];

            for (var i = 0; i < Key.length; i++) {
              if (Key[i] == "=") {
                // //console.log("--------------------------------------");
                // //console.log("--------------------------------------");
                // //console.log("--------------------------------------");
                var ValueResult = void 0; //水平方向
                // //console.log("水平方向");

                if (i % Rows != Rows - 1) {
                  ValueResult = CheckResult(i + 1); //*

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var Index = i;
                    var Indexs = [];
                    var Chars = [];

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

                    for (var j = 0; j < Indexs.length; j++) {
                      Chars.push(Key[Indexs[j]]);
                    }

                    Indexs.push(i);
                    Indexs.push(i + 1); //*

                    var KeyResult = GetResult(Chars);
                    var IsEqual = KeyResult == ValueResult; // console.log(Indexs);
                    // console.log(Chars);
                    // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                    // console.log("是否相等", IsEqual);

                    if (Indexs.length >= 5) {
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

                if (Math.floor(i / Rows) != Cols - 1) {
                  //垂直方向
                  // //console.log("垂直方向");
                  ValueResult = CheckResult(i + Rows);

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var _Index = i;
                    var _Indexs = [];
                    var _Chars = [];

                    while (Math.floor(_Index / Rows) != 0) {
                      _Index -= Rows; //*

                      if (ErrorChar.indexOf(Key[_Index]) == -1) {
                        _Indexs.push(_Index);
                      } else {
                        break;
                      }
                    }

                    (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                      error: Error()
                    }), Tool_Other) : Tool_Other).instance.Sort_Reverse(_Indexs);

                    for (var _j = 0; _j < _Indexs.length; _j++) {
                      _Chars.push(Key[_Indexs[_j]]);
                    }

                    _Indexs.push(i);

                    _Indexs.push(i + Rows);

                    var _KeyResult = GetResult(_Chars);

                    var _IsEqual = _KeyResult == ValueResult; // console.log(Indexs);
                    // console.log(Chars);
                    // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                    // console.log("是否相等", IsEqual);


                    if (_Indexs.length >= 5) {
                      if (_IsEqual) {
                        Result.CorrectIndex.push(_Indexs);
                        ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ..._Indexs];
                        Count++;
                      } else {
                        if (_KeyResult != null) {
                          Result.WrongIndex.push(_Indexs);
                          ResultAll.WrongIndex = [...ResultAll.WrongIndex, ..._Indexs];
                        }
                      }
                    }
                  }
                }

                if (i % Rows != Rows - 1 && Math.floor(i / Rows) != Cols - 1) {
                  //主对角线
                  ValueResult = CheckResult(i + (Rows + 1));

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var _Index2 = i;
                    var _Indexs2 = [];
                    var _Chars2 = [];

                    while (_Index2 % Rows != 0 && Math.floor(_Index2 / Rows) != 0) {
                      _Index2 -= Rows + 1;

                      if (ErrorChar.indexOf(Key[_Index2]) == -1) {
                        _Indexs2.push(_Index2);
                      } else {
                        break;
                      }
                    }

                    (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                      error: Error()
                    }), Tool_Other) : Tool_Other).instance.Sort_Reverse(_Indexs2);

                    for (var _j2 = 0; _j2 < _Indexs2.length; _j2++) {
                      _Chars2.push(Key[_Indexs2[_j2]]);
                    }

                    _Indexs2.push(i);

                    _Indexs2.push(i + (Rows + 1));

                    console.log(_Chars2);

                    var _KeyResult2 = GetResult(_Chars2);

                    var _IsEqual2 = _KeyResult2 == ValueResult; // console.log("主对角线");
                    // console.log(Indexs);
                    // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                    // console.log("是否相等", IsEqual);


                    if (_Indexs2.length >= 5) {
                      if (_IsEqual2) {
                        Result.CorrectIndex.push(_Indexs2);
                        ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ..._Indexs2];
                        Count++;
                      } else {
                        if (_KeyResult2 != null) {
                          Result.WrongIndex.push(_Indexs2);
                          ResultAll.WrongIndex = [...ResultAll.WrongIndex, ..._Indexs2];
                        }
                      }
                    }
                  }
                }

                if (i % Rows != 0 && Math.floor(i / Rows) != Cols - 1) {
                  //副对角线
                  // //console.log("副对角线");
                  ValueResult = CheckResult(i + (Rows - 1));

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var _Index3 = i;
                    var _Indexs3 = [];
                    var _Chars3 = [];

                    while (_Index3 % Rows != Rows - 1 && Math.floor(_Index3 / Rows) != 0) {
                      console.log(_Index3 % Rows, Math.floor(_Index3 / Rows));
                      _Index3 -= Rows - 1;

                      if (ErrorChar.indexOf(Key[_Index3]) == -1) {
                        _Indexs3.push(_Index3);
                      } else {
                        break;
                      }
                    }

                    (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                      error: Error()
                    }), Tool_Other) : Tool_Other).instance.Sort_Reverse(_Indexs3);

                    for (var _j3 = 0; _j3 < _Indexs3.length; _j3++) {
                      _Chars3.push(Key[_Indexs3[_j3]]);
                    }

                    _Indexs3.push(i);

                    _Indexs3.push(i + (Rows - 1));

                    var _KeyResult3 = GetResult(_Chars3);

                    var _IsEqual3 = _KeyResult3 == ValueResult; // console.log(Indexs);
                    // console.log(Chars);
                    // console.log("ValueResult", ValueResult, "KeyResult", KeyResult);
                    // console.log("是否相等", IsEqual);


                    if (_Indexs3.length >= 5) {
                      if (_IsEqual3) {
                        Result.CorrectIndex.push(_Indexs3);
                        ResultAll.CorrectIndex = [...ResultAll.CorrectIndex, ..._Indexs3];
                        Count++;
                      } else {
                        if (_KeyResult3 != null) {
                          Result.WrongIndex.push(_Indexs3);
                          ResultAll.WrongIndex = [...ResultAll.WrongIndex, ..._Indexs3];
                        }
                      }
                    }
                  }
                }
              }
            }

            var KeyP = find("Key", _this12.node);
            var ValueP = find("Value", _this12.node); // console.error(Result.CorrectIndex);
            // console.error(Result.WrongIndex);

            var AnimReset = /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator(function* () {
                for (var _i13 = 0; _i13 < KeyP.children.length; _i13++) {
                  if (ResultAll.CorrectIndex.indexOf(_i13) == -1) {
                    switch (_this12.GameData.Key[_i13]) {
                      case "N":
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i13].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                        break;

                      default:
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i13].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                        break;
                    }
                  } else {
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this12.AnimCorrectNode, KeyP.children[_i13]);
                  }

                  if (ResultAll.WrongIndex.indexOf(_i13) == -1) {
                    switch (_this12.GameData.Key[_i13]) {
                      case "N":
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i13].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                        break;

                      default:
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i13].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                        break;
                    }
                  } else {
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this12.AnimWrongNode, KeyP.children[_i13]);
                  }
                }

                yield AnimV();
                AnimF();
              });

              return function AnimReset() {
                return _ref15.apply(this, arguments);
              };
            }();

            var AnimV = /*#__PURE__*/function () {
              var _ref16 = _asyncToGenerator(function* () {
                for (var _i14 = 0; _i14 < Result.CorrectIndex.length; _i14++) {
                  for (var _j4 = 0; _j4 < Result.CorrectIndex[_i14].length; _j4++) {
                    if (_this12.AnimCorrectNode.indexOf(KeyP.children[Result.CorrectIndex[_i14][_j4]]) == -1) {
                      _this12.AnimCorrectNode.push(KeyP.children[Result.CorrectIndex[_i14][_j4]]);

                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[Result.CorrectIndex[_i14][_j4]].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                    }
                  }
                }

                var _loop2 = function* _loop2(_i15) {
                  var ICall = /*#__PURE__*/function () {
                    var _ref17 = _asyncToGenerator(function* () {
                      //上次触摸的节点在题目中
                      var IsPlay = false;
                      var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_this12.TouchNode.worldPosition, _this12.KeyTarget);

                      if (Obj.Distance <= _this12.OnDistance) {
                        for (var _j5 = 0; _j5 < Result.CorrectIndex[_i15].length; _j5++) {
                          if (_this12.KeyTarget[Obj.Index].name == KeyP.children[Result.CorrectIndex[_i15][_j5]].name) {
                            IsPlay = true; //console.log("AnimV");

                            break;
                          }
                        }
                      }

                      if (IsPlay) {
                        _this12.Resoure_Data.Sound_Play("Audio/Correct");

                        for (var _j6 = 0; _j6 < Result.CorrectIndex[_i15].length; _j6++) {
                          //题目的Value占位节点
                          var _Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.CorrectIndex[_i15][_j6]].worldPosition, _this12.ValueTargetC);

                          if (_Obj.Distance <= _this12.OnDistance) {
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_this12.ValueTargetC[_Obj.Index].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this12.ValueTargetC[_Obj.Index].getChildByName("Label"), color(0, 155, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                            // this.ValueTargetC[Obj.Index].scale = v3(0.9, 0.9, 1);

                            tween(_this12.ValueTargetC[_Obj.Index]).to(0.1, {
                              scale: v3(0.6, 0.6, 1)
                            }).to(0.1, {
                              scale: v3(0.9, 0.9, 1)
                            }).start();
                          } //题目的Key占位节点
                          // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.CorrectIndex[i][j]]);
                          // KeyP.children[Result.CorrectIndex[i][j]].scale = v3(1, 1, 1);


                          tween(KeyP.children[Result.CorrectIndex[_i15][_j6]]).to(0.1, {
                            scale: v3(0.6, 0.6, 1)
                          }).to(0.1, {
                            scale: v3(1, 1, 1)
                          }).start();
                          yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05 * Speed);
                        }
                      }
                    });

                    return function ICall() {
                      return _ref17.apply(this, arguments);
                    };
                  }();

                  ICall();
                };

                for (var _i15 = 0; _i15 < Result.CorrectIndex.length; _i15++) {
                  yield* _loop2(_i15);
                }
              });

              return function AnimV() {
                return _ref16.apply(this, arguments);
              };
            }();

            var AnimF = /*#__PURE__*/function () {
              var _ref18 = _asyncToGenerator(function* () {
                var _loop3 = function* _loop3(_i16) {
                  var ICall = /*#__PURE__*/function () {
                    var _ref19 = _asyncToGenerator(function* () {
                      //上次触摸的节点在题目中
                      var IsPlay = false;
                      var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_this12.TouchNode.worldPosition, _this12.KeyTarget);

                      if (Obj.Distance <= _this12.OnDistance) {
                        for (var _j7 = 0; _j7 < Result.WrongIndex[_i16].length; _j7++) {
                          if (_this12.KeyTarget[Obj.Index].name == KeyP.children[Result.WrongIndex[_i16][_j7]].name) {
                            IsPlay = true; //console.log("AnimF");

                            break;
                          }
                        }
                      }

                      if (IsPlay) {
                        _this12.Resoure_Data.Sound_Play("Audio/Wrong");

                        for (var _j8 = 0; _j8 < Result.WrongIndex[_i16].length; _j8++) {
                          //题目的Value占位节点
                          if (Number.isNaN(Number(KeyP.children[Result.WrongIndex[_i16][_j8]].getChildByName("Label").getComponent(Label).string))) {
                            continue;
                          }

                          var _Obj2 = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.WrongIndex[_i16][_j8]].worldPosition, _this12.ValueTargetC);

                          if (_Obj2.Distance <= _this12.OnDistance) {
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_this12.ValueTargetC[_Obj2.Index].getChildByName("Bg"), yield _this12.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this12.ValueTargetC[_Obj2.Index].getChildByName("Label"), color(155, 0, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                            // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.WrongIndex[i][j]]);

                            tween(_this12.ValueTargetC[_Obj2.Index]).to(0.1, {
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
                            tween(KeyP.children[Result.WrongIndex[_i16][_j8]]).to(0.1, {
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
                    });

                    return function ICall() {
                      return _ref19.apply(this, arguments);
                    };
                  }();

                  ICall();
                };

                // for (let i = 0; i < Result.WrongIndex.length; i++) {
                //     for (let j = 0; j < Result.WrongIndex[i].length; j++) {
                //         //console.error(this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]));
                //         if (this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]) == -1) {
                //             this.AnimWrongNode.push(KeyP.children[Result.WrongIndex[i][j]]);
                //             Tool_UI.instance.Set_SpriteFrame(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
                //         }
                //     }
                // }
                for (var _i16 = 0; _i16 < Result.WrongIndex.length; _i16++) {
                  yield* _loop3(_i16);
                }
              });

              return function AnimF() {
                return _ref18.apply(this, arguments);
              };
            }();

            var Speed = 1;
            yield AnimReset();
            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
            _this12.Interactable = true;

            if (Count == _this12.GameData.Count) {
              //console.log("胜利");
              yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);

              _this12.GameVictory();
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
            }); // console.log(this.KeyExitState);

            return Result;
          })();
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
//# sourceMappingURL=75fa9f675d38257e06367ba3f0607ddbaf2b9eab.js.map