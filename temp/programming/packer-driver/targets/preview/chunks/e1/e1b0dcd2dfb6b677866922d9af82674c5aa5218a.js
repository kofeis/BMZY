System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, tween, v3, Animation, Sprite, RichText, sys, PanelTemplate, Tool_Event, Tool_Animation, Tool_UI, Tool_Other, Tool_Console, PlatformApi, _dec, _class, _crd, ccclass, property, PanelMathMatch;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e9e4+Y7sJFhostQxxSOyyu", "PanelMathMatch-001", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'Label', 'Layout', 'log', 'math', 'Node', 'Prefab', 'Tween', 'tween', 'v3', 'Vec3', 'Animation', 'Sprite', 'RichText', 'sys']);

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
          this.GameTimeAll = 180;
          this.GameTimeIng = 0;
          this.GameTime = 0;

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
          this.Obj_Start = {
            num: 0
          };
          this.Time = 0;
          this.Time_Max = 15;
          //15
          this.Obj_StartP = {
            num: 0
          };
          this.TimeP = 0;
          this.Time_MaxP = 45;
        }

        //45
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
            console.log("无操作播放");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play_Plus(this.BtnTip.getChildByName("Icon").getComponent(Animation), null, null, null, null, null, 5, 0, () => {
              this.Timing();
            });
          });
        }

        TimStop() {
          console.log("重置无操作播放计时");
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.Obj_Start);
          this.Timing();
        }

        TimingP() {
          this.Obj_StartP = {
            num: 0
          };
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Function_Target(this.Time_MaxP, this.Obj_StartP, () => {
            console.log("误操作播放");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play_Plus(this.BtnTip.getChildByName("Icon").getComponent(Animation), null, null, null, null, null, 5, 0, () => {
              this.TimingP();
            });
          });
        }

        TimStopP() {
          console.log("重置误操作播放计时");
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.Obj_StartP);
          this.TimingP();
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
            var BtnSettingCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this4.Game_Script.UpdatePanelSetting(true);
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
            /**重新游戏 */


            var BtnReStartCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {});
              _this4.Game_Script.MathMatchLevel--;
              _this4.Game_Script.MathMatchScore -= _this4.Score;

              _this4.Game_Script.DataSet();

              _this4.GameStart();
            };
            /**下一关按钮 */


            var BtnNextCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this4.GameStart();
            };

            var BtnTipCall = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(function* () {
                if (_this4.ValueTarget.length == 0) {
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
                return _ref2.apply(this, arguments);
              };
            }();

            var BtnTipCloseCall = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                _this4.PanelTip.active = false;
              });

              return function BtnTipCloseCall() {
                return _ref3.apply(this, arguments);
              };
            }();

            var BtnTipGetCall = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/BtnClick");

                if (_this4.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
                  _this4.Game_Script.PropNum += 200;

                  _this4.Game_Script.DataSet();

                  _this4.UpdateProp();

                  _this4.PanelTip.active = false;
                }, () => {});
              });

              return function BtnTipGetCall() {
                return _ref4.apply(this, arguments);
              };
            }();
            /**提示 */


            var TipCall = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(function* () {
                // this.Game_Script.OnMessage("没有更多关卡了");
                if (!_this4.Interactable) {
                  return;
                } // if (this.TipLabel != null || this.TipNode != null) {
                //     return;
                // }
                //剩下的数字


                var ValueNumber = [];

                for (var i = 0; i < _this4.ValueTarget.length; i++) {
                  ValueNumber.push(Number(_this4.ValueTarget[i].getChildByName("Label").getComponent(Label).string));
                }

                if (ValueNumber == undefined) {
                  _this4.TipLabel = null;
                  _this4.TipNode = null;
                  return;
                }

                _this4.Game_Script.PropNum--;

                _this4.Game_Script.DataSet();

                _this4.UpdateProp();

                console.log("剩下的数字", ValueNumber);
                var NullGIndex = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(0, ValueNumber.length - 1); //索引

                console.log("V索引", NullGIndex); //答案

                console.log("答案", ValueNumber[NullGIndex]);

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
                        console.error("K索引", j);
                        console.error(Obj);

                        var TipLabel = _this4.KeyTarget[j].getChildByName("Label"); // this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                        // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255));


                        var TipNode = _this4.ValueTarget[NullGIndex];

                        _this4.TipStart(TipNode, TipLabel);

                        var TouchNode = _this4.ValueTargetC[Obj.Index];
                        Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this4.KeyTarget);

                        var _i = _this4.ValueTarget.indexOf(TouchNode);

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
                        }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this4.ValueTargetC, TouchNode); // console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                        // console.log("原上次索引", this.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", this.LastKeyIndex[CurrentLastKeyIndex]);
                        // this.TipStart();
                        // console.log("是否存在", IsExit);

                        if (!IsExit) {
                          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                            error: Error()
                          }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this4.ValueTarget, TouchNode); //题目节点的索引

                          var KeyNodeIndexT = _Key.children.indexOf(_this4.KeyTarget[_this4.LastKeyIndex[CurrentLastKeyIndex]]);

                          var KeyNodeValueT = "N";
                          _this4.GameData.Key[KeyNodeIndexT] = KeyNodeValueT; // console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
                          // console.log(this.GameData);

                          if (_this4.LastKeyIndex[_i] != null) {
                            _this4.KeyExitState[_this4.LastKeyIndex[_i]] = false;
                            _this4.KeyExitValue[_this4.LastKeyIndex[_i]] = null;
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this4.KeyTarget[_this4.LastKeyIndex[_i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                          } // 重置当前目标位置的状态（如果之前已被占用）


                          if (_this4.KeyExitState[Obj.Index]) {
                            _this4.KeyExitState[Obj.Index] = false;
                            _this4.KeyExitValue[Obj.Index] = null;
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this4.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                          }

                          _this4.LastKeyIndex[_i] = null;
                        }

                        _this4.UpdateUIValue();

                        return;
                      }
                    } else {
                      var _TipLabel = _this4.KeyTarget[j].getChildByName("Label"); // this.TipLabel.getComponent(Label).string = ValueNumber[NullGIndex] + "";
                      // Tool_UI.instance.Set_Color_Label(this.TipLabel, color(0, 155, 0, 255));
                      // console.error("K索引", j);
                      // console.error(Obj);


                      var _TipNode = _this4.ValueTarget[NullGIndex];

                      _this4.TipStart(_TipNode, _TipLabel);

                      return;
                    }
                  }
                }
              });

              return function TipCall() {
                return _ref5.apply(this, arguments);
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
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnNext"), BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnBreak"), BtnBreakCall);
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
                _this4.PanelFH.active = false;
                _this4.GameTime = _this4.GameTimeAll;
                var ComponentLabel = find("Title/Bgg/Timer", _this4.node).getComponent(Label);

                _this4.Game_Script.Timer(ComponentLabel, _this4.GameTime, () => {
                  _this4.PanelFH.active = true;

                  _this4.Game_Script.TimerStop();
                }, "S", () => {
                  _this4.GameTimeIng++;
                });
              }, () => {});
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
        /**初始化数据 */


        InitData() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5.Game_Script.UpdateScore();

            console.log("初始化数据");
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
            _this5.GameTimeIng = 0; // this.Game_Script.MathMatchLevel = 1

            var F = {
              "Level": 6,
              "Key": ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
              "Value": [],
              "Result": [],
              "Count": 0
            };
            var Json = yield _this5.Resoure_Data.Load_Json("Json/mathmatch");
            var JsonData = Json["Data"];
            console.log(JsonData);
            _this5.GameData = null;

            if (_this5.Game_Script.MathMatchLevel >= JsonData.length) {
              _this5.Game_Script.OnMessage("没有更多关卡了");

              _this5.GameData = _this5.Resoure_Data.Copy_Deep(JsonData[JsonData.length - 1]);
            } else {
              _this5.GameData = _this5.Resoure_Data.Copy_Deep(JsonData[_this5.Game_Script.MathMatchLevel]);
            }

            console.log(_this5.GameData);
            _this5.Game_Script.IsHint = false;
            _this5.Game_Script.IsContinue = false;
            _this5.GameTime = _this5.GameTimeAll;
            var ComponentLabel = find("Title/Bgg/Timer", _this5.node).getComponent(Label);

            _this5.Game_Script.Timer(ComponentLabel, _this5.GameTimeAll, () => {
              console.log("失败");
              _this5.PanelFH.active = true;

              _this5.Game_Script.TimerStop();
            }, "S", () => {
              _this5.GameTimeIng++;
            });
          })();
        }
        /**初始化界面 */


        InitInterface() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (_this6.Game_Script.MathMatchLevel == 0) {
              find("Hand", _this6.node).getComponent(Animation).play();

              _this6.Game_Script.OnMessage("将需要的数字拖动到空格上");
            }

            if (_this6.Game_Script.MathMatchLevel == 1) {
              find("ND", _this6.node).getComponent(Animation).play();
            }

            _this6.PanelVictory.active = false;
            _this6.PanelFail.active = false;
            _this6.PanelTip.active = false;
            _this6.PanelFH.active = false;

            _this6.UpdateProp();

            _this6.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u7B2C" + (_this6.Game_Script.MathMatchLevel + 1) + "\u5173";
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
              console.log("配置错误");
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

              Shadow.active = false;
              Value.children[_i4].active = _i4 < _this6.GameData.Value.length ? true : false;

              if (Value.children[_i4].active) {
                _this6.ValueTarget.push(Value.children[_i4]);

                _this6.ValueTargetC.push(Value.children[_i4]);

                _this6.LastKeyIndex.push(null);

                Value.children[_i4].position = _this6.ValuePos[_i4];
                ComponentLabel1.string = _this6.GameData.Value[_i4] + "";
                (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                  error: Error()
                }), Tool_Event) : Tool_Event).instance.Off_Event_TOUCH_All(Value.children[_i4]);
                var TouchNode = Value.children[_i4];

                var _Shadow = TouchNode.getChildByName("Shadow");

                var ComponentLabel = TouchNode.getChildByName("Label").getComponent(Label);

                var Check_Shadow = () => {
                  var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this6.KeyTarget);

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
                }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_Drag(TouchNode, () => _this6.Interactable, /*#__PURE__*/_asyncToGenerator(function* (Event, Pos_Touch_Start) {
                  if (_this6.GameData == null) {
                    _this6.Interactable = false;
                    console.log("配置错误");
                    return;
                  }

                  _this6.TouchNode = TouchNode;
                  console.log(_this6.LastKeyIndex, _i4, _this6.ValueTargetC.indexOf(TouchNode));
                  /**触摸开始回调 */

                  _this6.Resoure_Data.Sound_Play("Audio/NumClick");

                  if (_this6.Resoure_Data.Vibration_Switch_Get()) {
                    (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                      error: Error()
                    }), PlatformApi) : PlatformApi).instance.vibrateShort();
                  }

                  var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this6.KeyTarget);
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(_this6.KeyTarget[Obj.Index]);
                  _this6.KeyTarget[Obj.Index].scale = v3(1, 1, 1);
                  _this6.KeyTarget[Obj.Index].angle = 0;
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(TouchNode);
                  TouchNode.scale = v3(1, 1, 1);
                  TouchNode.angle = 0;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(TouchNode.getChildByName("Bg"), yield _this6.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Label(TouchNode.getChildByName("Label"), color(0, 155, 0, 255));
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Node_Index_Set(TouchNode, -1);
                  _Shadow.active = true;
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, Pos_Touch_Start.clone().add(v3(0, 25, 0)), 0.02, null, "smooth");
                  var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this6.ValueTarget, TouchNode) == -1 ? false : true;

                  if (!IsExit) {
                    tween(TouchNode).to(0.25, {
                      scale: v3(1, 1, 1)
                    }, {
                      easing: "backOut"
                    }).start();
                  }

                  Check_Shadow();
                }), (Event, Pos_Touch_Start) => {
                  /**触摸移动回调 */
                  Check_Shadow();
                }, /*#__PURE__*/_asyncToGenerator(function* (Event, Pos_Touch_Start, Pos_Touch_End) {
                  /**触摸结束回调 */
                  _Shadow.active = false;
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
                  console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
                  console.log("原上次索引", _this6.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", _this6.LastKeyIndex[CurrentLastKeyIndex]);

                  if (Obj.Distance <= _this6.OnDistance) {
                    // this.TipReset();
                    //目标位置被占用
                    if (_this6.KeyExitState[Obj.Index] && _this6.LastKeyIndex[_i4] != Obj.Index) {
                      if (_this6.LastKeyIndex[_i4] != null) {
                        _this6.KeyTarget[Obj.Index].active = false;
                        _this6.KeyTarget[_this6.LastKeyIndex[_i4]].active = false; // 将原节点移动到 LastKeyIndex 的位置

                        var OriginalNodePos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(OriginalNode, _this6.KeyTarget[_this6.LastKeyIndex[_i4]]);
                        _this6.Interactable = false;
                        (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, /*#__PURE__*/_asyncToGenerator(function* () {
                          _this6.Interactable = true;
                          _this6.KeyTarget[Obj.Index].active = true;
                          _this6.KeyTarget[_this6.LastKeyIndex[_i4]].active = true; //交换索引

                          console.log(_this6.LastKeyIndex, 1);
                          console.error(OriginalLastKeyIndex, _this6.LastKeyIndex[OriginalLastKeyIndex]);
                          console.error(CurrentLastKeyIndex, _this6.LastKeyIndex[CurrentLastKeyIndex]);
                          var LastKeyIndexTemp = _this6.LastKeyIndex[OriginalLastKeyIndex];
                          _this6.LastKeyIndex[OriginalLastKeyIndex] = _this6.LastKeyIndex[CurrentLastKeyIndex];
                          _this6.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //交换节点的索引

                          var KeyNodeIndexL = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[OriginalLastKeyIndex]]);
                          var KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string; //题目节点的索引

                          var KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);
                          var KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                          _this6.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
                          _this6.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                          console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
                          console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
                          console.log(_this6.GameData);

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
                          }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); // console.error(OriginalNode, TouchNode);

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

                        console.log(_this6.LastKeyIndex, 2);
                        console.error(OriginalLastKeyIndex, _this6.LastKeyIndex[OriginalLastKeyIndex]);
                        console.error(CurrentLastKeyIndex, _this6.LastKeyIndex[CurrentLastKeyIndex]);
                        var LastKeyIndexTemp = _this6.LastKeyIndex[OriginalLastKeyIndex];
                        _this6.LastKeyIndex[OriginalLastKeyIndex] = _this6.LastKeyIndex[CurrentLastKeyIndex];
                        _this6.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //题目节点的索引

                        var KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);
                        var KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                        _this6.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                        console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
                        console.log(_this6.GameData);

                        _this6.FindAllEquationIndices_(_this6.GameData.Key, 0.2);
                      } // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）


                      _this6.KeyExitState[Obj.Index] = true;
                      _this6.KeyExitValue[Obj.Index] = TouchNode; // 4. 更新颜色和临时状态

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
                      }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this6.ValueTarget, TouchNode);
                      Temp.destroyAllChildren();
                      _this6.KeyShadowIndex = -1; // 6. 更新 UI

                      _this6.UpdateUIValue();

                      var _Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, _this6.KeyTarget[Obj.Index]);

                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, _Pos, 0.2, null, "smooth");
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
                      }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this6.ValueTarget, TouchNode); //题目节点的索引

                      var _KeyNodeIndexT = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                      var _KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                      _this6.GameData.Key[_KeyNodeIndexT] = _KeyNodeValueT;
                      console.log("赋值的索引", _KeyNodeIndexT, "赋值的数据", _KeyNodeValueT);
                      console.log(_this6.GameData);

                      _this6.UpdateUIValue();
                    } else {
                      var KeyNodeIndexL = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);

                      if (KeyNodeIndexL == -1) {
                        console.log(CurrentLastKeyIndex); //有值

                        console.log(_this6.LastKeyIndex[CurrentLastKeyIndex]);
                        console.log(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);
                      }

                      var KeyNodeValueL = "N";
                      _this6.GameData.Key[KeyNodeIndexL] = KeyNodeValueL; //题目节点的索引

                      var _KeyNodeIndexT2 = Key.children.indexOf(_this6.KeyTarget[Obj.Index]);

                      var _KeyNodeValueT2 = TouchNode.getChildByName("Label").getComponent(Label).string;
                      _this6.GameData.Key[_KeyNodeIndexT2] = _KeyNodeValueT2;
                      console.log("赋值的索引", KeyNodeIndexL, "赋值的数据", KeyNodeValueL);
                      console.log("赋值的索引", _KeyNodeIndexT2, "赋值的数据", _KeyNodeValueT2);
                      console.log(_this6.GameData);
                    }

                    _this6.KeyExitState[Obj.Index] = true;
                    _this6.KeyExitValue[Obj.Index] = TouchNode;

                    if (_this6.LastKeyIndex[_i4] != null && _this6.LastKeyIndex[_i4] != Obj.Index) {
                      _this6.KeyExitState[_this6.LastKeyIndex[_i4]] = false;
                      _this6.KeyExitValue[_this6.LastKeyIndex[_i4]] = null;
                    } //改变Key背景颜色


                    _this6.LastKeyIndex[_i4] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i4]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    _this6.LastKeyIndex[_i4] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                    // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;

                    console.error(Obj.Index, _this6.LastKeyIndex[_i4], _i4, Value.children.indexOf(TouchNode));
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                    Temp.destroyAllChildren();
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
                  } else {
                    // this.TipStart();
                    if (!IsExit) {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this6.ValueTarget, TouchNode); //题目节点的索引

                      var _KeyNodeIndexT3 = Key.children.indexOf(_this6.KeyTarget[_this6.LastKeyIndex[CurrentLastKeyIndex]]);

                      var _KeyNodeValueT3 = "N";
                      _this6.GameData.Key[_KeyNodeIndexT3] = _KeyNodeValueT3;
                      console.log("赋值的索引", _KeyNodeIndexT3, "赋值的数据", _KeyNodeValueT3);
                      console.log(_this6.GameData);

                      if (_this6.LastKeyIndex[_i4] != null) {
                        _this6.KeyExitState[_this6.LastKeyIndex[_i4]] = false;
                        _this6.KeyExitValue[_this6.LastKeyIndex[_i4]] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[_this6.LastKeyIndex[_i4]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      } // 重置当前目标位置的状态（如果之前已被占用）


                      if (_this6.KeyExitState[Obj.Index]) {
                        _this6.KeyExitState[Obj.Index] = false;
                        _this6.KeyExitValue[Obj.Index] = null;
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this6.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                      }

                      _this6.LastKeyIndex[_i4] = null;
                    }

                    _this6.UpdateUIValue();
                  }

                  console.log("this.KeyExitState", _this6.KeyExitState);
                  console.log("this.KeyExitValue", _this6.KeyExitValue);
                  console.log("this.ValueTarget", _this6.ValueTarget);

                  _this6.FindAllEquationIndices_(_this6.GameData.Key);
                }));
              }
            };

            for (var _i4 = 0; _i4 < Value.children.length; _i4++) {
              yield* _loop(_i4);
            }

            _this6.UpdateUIValue();
          })();
        }
        /**刷新排序 */


        UpdateUIValue() {
          this.ValueTarget.sort((a, b) => {
            var valueA = parseFloat(a.getChildByName("Label").getComponent(Label).string);
            var valueB = parseFloat(b.getChildByName("Label").getComponent(Label).string);
            return valueA - valueB;
          });

          for (var i = 0; i < this.ValueTarget.length; i++) {
            this.ValueTarget[i].scale = v3(1, 1, 1);
            this.ValueTarget[i].angle = 0;
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.ValueTarget[i], this.ValuePos[i], 0.2, null, "smooth");
          }
        }

        GameStart() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                window.ge.onLevelStart({
                  "$user_level": _this7.Game_Script.MathMatchLevel
                });
              } catch (error) {
                console.log(error);
              }
            }

            _this7.TipReset();

            _this7.Timing();

            yield _this7.InitData();
            yield _this7.InitInterface();
            _this7.BtnTip.getComponent(Sprite).grayscale = _this7.ValueTarget.length == 0;
          })();
        }

        GameVictory() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                window.ge.onLevelSuccess({
                  "$user_level": _this8.Game_Script.MathMatchLevel
                });
              } catch (error) {
                console.log(error);
              }
            }

            _this8.Resoure_Data.Sound_Play("Audio/Victory");

            _this8.Game_Script.TimerStop();

            _this8.PanelVictory.active = true;
            _this8.Game_Script.MathMatchLevel++;
            var T = _this8.GameTimeIng / _this8.GameTimeAll;
            _this8.Score = 0;

            if (T < 0.45) {
              _this8.Score = 3;

              _this8.Resoure_Data.Sound_Play("Audio/Start3");
            } else if (T < 0.7) {
              _this8.Score = 2;

              _this8.Resoure_Data.Sound_Play("Audio/Start2");
            } else if (T < 1) {
              _this8.Score = 1;

              _this8.Resoure_Data.Sound_Play("Audio/Start1");
            } else {
              _this8.Score = 0;
            }

            var Stars = find("WinBanner/Stars", _this8.PanelVictory);

            for (var I = 0; I < Stars.children.length; I++) {
              Stars.children[I].children[0].active = false;
            }

            for (var _I = 0; _I < _this8.Score; _I++) {
              Stars.children[_I].children[0].active = true;
            }

            _this8.Game_Script.MathMatchScore += _this8.Score;
            /**保存数据 */

            _this8.Game_Script.DataSet(); // this.Game_Script.UpdateScene();


            _this8.Interactable = false;
            _this8.PanelVictory.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = "<color=#0000C8>" + _this8.GameTimeAll + "/</color><color=#C80000>" + _this8.GameTimeIng + "</color>";

            if (_this8.Resoure_Data.Vibration_Switch_Get()) {
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
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                window.ge.onLevelFail({
                  "$user_level": _this9.Game_Script.MathMatchLevel
                });
              } catch (error) {
                console.log(error);
              }
            }

            _this9.Resoure_Data.Sound_Play("Audio/Failed");

            _this9.PanelFail.active = true;
            _this9.Interactable = false;
            _this9.PanelFail.getChildByName("WinBanner").getChildByName("Label").getComponent(RichText).string = "<color=#0000C8>" + _this9.GameTimeAll + "/</color><color=#C80000>" + _this9.GameTimeIng + "</color>";
          })();
        }

        GameResult() {}

        BreakNode(SetNode) {}

        TipReset() {
          if (this.TipLabel != null) {
            this.TipLabel.getComponent(Label).string = "";
            this.TipLabel.scale = v3(1, 1, 1);
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.TipNode);
            this.TipLabel = null;
          }

          if (this.TipNode != null) {
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.TipNode);
            this.TipNode = null;
          }
        }

        TipStart(TipNode, TipLabel) {
          var _this10 = this;

          // if (this.TipNode != null && this.TipLabel != null) {
          // Tool_Animation.instance.Animation_Heartbeat(this.TipLabel);
          // tween(this.TipLabel)
          //     .repeatForever(
          //         tween()
          //             .to(0.2, { angle: 5 })
          //             .to(0.2, { angle: -10 })
          //             .to(0.2, { angle: 10 })
          //             .to(0.2, { angle: -10 })
          //             .to(0.2, { angle: 5 })
          //             .to(0.2, { angle: 0 })
          //             .delay(1)
          //     )
          //     .start()
          // Tool_Animation.instance.Animation_Tip(this.TipNode);
          var Key = find("Key", this.node);
          var Value = find("Value", this.node);
          var Temp = find("Temp", this.node);
          var ColorOff = color(255, 255, 155, 255);
          var ColorOn = color(155, 255, 155, 255);
          this.Interactable = false;
          this.scheduleOnce(() => {// this.Interactable = true;
          }, 1);
          var Pos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TipNode, TipLabel.parent);
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TipNode, Pos, 0.5, /*#__PURE__*/_asyncToGenerator(function* () {
            var TouchNode = TipNode;
            _this10.TouchNode = TouchNode;

            var i = _this10.ValueTarget.indexOf(TouchNode);

            var Shadow = Value.children[i].getChildByName("Shadow"); // for (let i = 0; i < Value.children.length; i++) {

            /**触摸结束回调 */

            Shadow.active = false;
            var IsExit = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this10.ValueTarget, TouchNode) == -1 ? false : true;
            var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(TouchNode.worldPosition, _this10.KeyTarget); // 1. 获取原节点（当前占用目标位置的节点）

            var OriginalNode = _this10.KeyExitValue[Obj.Index]; // 2. 将原节点移回默认位置（或 LastKeyIndex 的位置）
            //原上次索引

            var OriginalLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this10.ValueTargetC, OriginalNode); //现上次索引

            var CurrentLastKeyIndex = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Arr_Check_Index(_this10.ValueTargetC, TouchNode);
            console.log(OriginalLastKeyIndex, CurrentLastKeyIndex);
            console.log("原上次索引", _this10.LastKeyIndex[OriginalLastKeyIndex], "现上次索引", _this10.LastKeyIndex[CurrentLastKeyIndex]);

            if (Obj.Distance <= _this10.OnDistance) {
              //目标位置被占用
              if (_this10.KeyExitState[Obj.Index] && _this10.LastKeyIndex[i] != Obj.Index) {
                if (_this10.LastKeyIndex[i] != null) {
                  _this10.KeyTarget[Obj.Index].active = false;
                  _this10.KeyTarget[_this10.LastKeyIndex[i]].active = false; // 将原节点移动到 LastKeyIndex 的位置

                  var OriginalNodePos = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(OriginalNode, _this10.KeyTarget[_this10.LastKeyIndex[i]]);
                  _this10.Interactable = false;
                  (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(OriginalNode, OriginalNodePos, 0.25, /*#__PURE__*/_asyncToGenerator(function* () {
                    _this10.Interactable = true;
                    _this10.KeyTarget[Obj.Index].active = true;
                    _this10.KeyTarget[_this10.LastKeyIndex[i]].active = true; //交换索引

                    console.log(_this10.LastKeyIndex, 1);
                    console.error(OriginalLastKeyIndex, _this10.LastKeyIndex[OriginalLastKeyIndex]);
                    console.error(CurrentLastKeyIndex, _this10.LastKeyIndex[CurrentLastKeyIndex]);
                    var LastKeyIndexTemp = _this10.LastKeyIndex[OriginalLastKeyIndex];
                    _this10.LastKeyIndex[OriginalLastKeyIndex] = _this10.LastKeyIndex[CurrentLastKeyIndex];
                    _this10.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //交换节点的索引

                    var KeyNodeIndexL = Key.children.indexOf(_this10.KeyTarget[_this10.LastKeyIndex[OriginalLastKeyIndex]]);
                    var KeyNodeValueL = OriginalNode.getChildByName("Label").getComponent(Label).string; //题目节点的索引

                    var KeyNodeIndexT = Key.children.indexOf(_this10.KeyTarget[Obj.Index]);
                    var KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                    _this10.GameData.Key[KeyNodeIndexL] = KeyNodeValueL;
                    _this10.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                    console.log("交换节点的索引", KeyNodeIndexL, "交换节点的数值", KeyNodeValueL);
                    console.log("触摸节点的索引", KeyNodeIndexT, "触摸节点的数值", KeyNodeValueT);
                    console.log(_this10.GameData);

                    _this10.FindAllEquationIndices_(_this10.GameData.Key);

                    (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(OriginalNode);
                    OriginalNode.scale = v3(0.9, 0.9, 1);
                    OriginalNode.angle = 0;
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), yield _this10.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); // console.error(OriginalNode, TouchNode);

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
                    _this10.TouchNode = OriginalNode;

                    _this10.FindAllEquationIndices_(_this10.GameData.Key);
                  }), "smooth"); // 更新原节点的状态为占用 LastKeyIndex

                  _this10.KeyExitState[_this10.LastKeyIndex[i]] = true;
                  _this10.KeyExitValue[_this10.LastKeyIndex[i]] = OriginalNode;
                } else {
                  // 如果 LastKeyIndex 为 null，将原节点放回 ValueTarget 池
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this10.ValueTarget, OriginalNode);
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(OriginalNode.getChildByName("Bg"), yield _this10.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Label(OriginalNode.getChildByName("Label"), color(0, 155, 0, 255)); //交换索引

                  console.log(_this10.LastKeyIndex, 2);
                  console.error(OriginalLastKeyIndex, _this10.LastKeyIndex[OriginalLastKeyIndex]);
                  console.error(CurrentLastKeyIndex, _this10.LastKeyIndex[CurrentLastKeyIndex]);
                  var LastKeyIndexTemp = _this10.LastKeyIndex[OriginalLastKeyIndex];
                  _this10.LastKeyIndex[OriginalLastKeyIndex] = _this10.LastKeyIndex[CurrentLastKeyIndex];
                  _this10.LastKeyIndex[CurrentLastKeyIndex] = LastKeyIndexTemp; //题目节点的索引

                  var KeyNodeIndexT = Key.children.indexOf(_this10.KeyTarget[Obj.Index]);
                  var KeyNodeValueT = TouchNode.getChildByName("Label").getComponent(Label).string;
                  _this10.GameData.Key[KeyNodeIndexT] = KeyNodeValueT;
                  console.log("赋值的索引", KeyNodeIndexT, "赋值的数据", KeyNodeValueT);
                  console.log(_this10.GameData);

                  _this10.FindAllEquationIndices_(_this10.GameData.Key, 0.2);
                } // 3. 将新节点(TouchNode)放置到目标位置（Obj.Index）


                _this10.KeyExitState[Obj.Index] = true;
                _this10.KeyExitValue[Obj.Index] = TouchNode; // 4. 更新颜色和临时状态

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);

                if (_this10.LastKeyIndex[i] != null) {
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[_this10.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOn);
                } //放置成功 移除节点


                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this10.ValueTarget, TouchNode);
                Temp.destroyAllChildren();
                _this10.KeyShadowIndex = -1; // 6. 更新 UI

                _this10.UpdateUIValue();

                var _Pos2 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, _this10.KeyTarget[Obj.Index]);

                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, _Pos2, 0.2, null, "smooth");
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
                }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this10.ValueTarget, TouchNode); //题目节点的索引

                var _KeyNodeIndexT4 = Key.children.indexOf(_this10.KeyTarget[Obj.Index]);

                var _KeyNodeValueT4 = TouchNode.getChildByName("Label").getComponent(Label).string;
                _this10.GameData.Key[_KeyNodeIndexT4] = _KeyNodeValueT4;
                console.log("赋值的索引", _KeyNodeIndexT4, "赋值的数据", _KeyNodeValueT4);
                console.log(_this10.GameData);

                _this10.UpdateUIValue();
              } else {
                var KeyNodeIndexL = Key.children.indexOf(_this10.KeyTarget[_this10.LastKeyIndex[CurrentLastKeyIndex]]);

                if (KeyNodeIndexL == -1) {
                  console.log(CurrentLastKeyIndex); //有值

                  console.log(_this10.LastKeyIndex[CurrentLastKeyIndex]);
                  console.log(_this10.KeyTarget[_this10.LastKeyIndex[CurrentLastKeyIndex]]);
                }

                var KeyNodeValueL = "N";
                _this10.GameData.Key[KeyNodeIndexL] = KeyNodeValueL; //题目节点的索引

                var _KeyNodeIndexT5 = Key.children.indexOf(_this10.KeyTarget[Obj.Index]);

                var _KeyNodeValueT5 = TouchNode.getChildByName("Label").getComponent(Label).string;
                _this10.GameData.Key[_KeyNodeIndexT5] = _KeyNodeValueT5;
                console.log("赋值的索引", KeyNodeIndexL, "赋值的数据", KeyNodeValueL);
                console.log("赋值的索引", _KeyNodeIndexT5, "赋值的数据", _KeyNodeValueT5);
                console.log(_this10.GameData);
              }

              _this10.KeyExitState[Obj.Index] = true;
              _this10.KeyExitValue[Obj.Index] = TouchNode;

              if (_this10.LastKeyIndex[i] != null && _this10.LastKeyIndex[i] != Obj.Index) {
                _this10.KeyExitState[_this10.LastKeyIndex[i]] = false;
                _this10.KeyExitValue[_this10.LastKeyIndex[i]] = null;
              } //改变Key背景颜色


              _this10.LastKeyIndex[i] != null && (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[_this10.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
              _this10.LastKeyIndex[i] = Obj.Index; // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] != null && Tool_UI.instance.Set_Color_Sprite(this.KeyTarget[this.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
              // this.LastKeyIndex[this.ValueTargetC.indexOf(TouchNode)] = Obj.Index;

              console.error(Obj.Index, _this10.LastKeyIndex[i], i, Value.children.indexOf(TouchNode));
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOn);
              Temp.destroyAllChildren();
              _this10.KeyShadowIndex = -1;

              var _Pos3 = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, _this10.KeyTarget[Obj.Index]);

              yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, _Pos3, 0, null, "smooth");
              tween(TouchNode).to(0.25, {
                scale: v3(0.9, 0.9, 1)
              }, {
                easing: "backOut"
              }).start();
            } else {
              if (!IsExit) {
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Arr_Increase(_this10.ValueTarget, TouchNode); //题目节点的索引

                var _KeyNodeIndexT6 = Key.children.indexOf(_this10.KeyTarget[_this10.LastKeyIndex[CurrentLastKeyIndex]]);

                var _KeyNodeValueT6 = "N";
                _this10.GameData.Key[_KeyNodeIndexT6] = _KeyNodeValueT6;
                console.log("赋值的索引", _KeyNodeIndexT6, "赋值的数据", _KeyNodeValueT6);
                console.log(_this10.GameData);

                if (_this10.LastKeyIndex[i] != null) {
                  _this10.KeyExitState[_this10.LastKeyIndex[i]] = false;
                  _this10.KeyExitValue[_this10.LastKeyIndex[i]] = null;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[_this10.LastKeyIndex[i]].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                } // 重置当前目标位置的状态（如果之前已被占用）


                if (_this10.KeyExitState[Obj.Index]) {
                  _this10.KeyExitState[Obj.Index] = false;
                  _this10.KeyExitValue[Obj.Index] = null;
                  (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                    error: Error()
                  }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(_this10.KeyTarget[Obj.Index].getChildByName("Bg").getChildByName("Sp"), ColorOff);
                }

                _this10.LastKeyIndex[i] = null;
              }

              _this10.UpdateUIValue();
            }

            console.log("this.KeyExitState", _this10.KeyExitState);
            console.log("this.KeyExitValue", _this10.KeyExitValue);
            console.log("this.ValueTarget", _this10.ValueTarget);

            _this10.FindAllEquationIndices_(_this10.GameData.Key);
          })); // }
        }

        FindAllEquationIndices_(Key, Time, Rows, Cols) {
          var _this11 = this;

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

            _this11.TimStop();

            _this11.BtnTip.getComponent(Sprite).grayscale = _this11.ValueTarget.length == 0;
            _this11.Interactable = false;
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

              for (var _i5 = 1; _i5 < processed.length; _i5 += 2) {
                var _op = processed[_i5];
                var num = parseFloat(processed[_i5 + 1]);

                if (_op === '+') {
                  result += num;
                } else if (_op === '-') {
                  result -= num;
                } else {
                  throw new Error("Unknown operator: " + _op);
                }
              }

              return result;
            }

            var ErrorChar = ["=", "U"];

            for (var i = 0; i < Key.length; i++) {
              if (Key[i] == "=") {
                // console.log("--------------------------------------");
                // console.log("--------------------------------------");
                // console.log("--------------------------------------");
                var ValueResult = void 0; //水平方向
                // console.log("水平方向");

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
                  // console.log("垂直方向");
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

                if (i % Rows != Rows - 1 && Math.floor(i / Rows) != Cols - 1) {
                  //主对角线
                  ValueResult = CheckResult(i + (Rows + 1)); // console.log("主对角线");

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var _Index2 = i;
                    var _Indexs2 = [];
                    var _Chars2 = [];

                    while (_Index2 % Rows != 0) {
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

                    var _KeyResult2 = GetResult(_Chars2);

                    var _IsEqual2 = _KeyResult2 == ValueResult;

                    console.log(_Indexs2);
                    console.log(_Chars2);
                    console.log("ValueResult", ValueResult, "KeyResult", _KeyResult2);
                    console.log("是否相等", _IsEqual2);

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

                if (i % Rows != 0 && Math.floor(i / Rows) != Cols - 1) {
                  //副对角线
                  // console.log("副对角线");
                  ValueResult = CheckResult(i + (Rows - 1));

                  if (ValueResult != null && !Number.isNaN(ValueResult)) {
                    var _Index3 = i;
                    var _Indexs3 = [];
                    var _Chars3 = [];

                    while (_Index3 % Rows != Rows - 1) {
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

                    var _IsEqual3 = _KeyResult3 == ValueResult;

                    console.log(_Indexs3);
                    console.log(_Chars3);
                    console.log("ValueResult", ValueResult, "KeyResult", _KeyResult3);
                    console.log("是否相等", _IsEqual3);

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

            var KeyP = find("Key", _this11.node);
            var ValueP = find("Value", _this11.node);

            var AnimReset = /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator(function* () {
                for (var _i6 = 0; _i6 < KeyP.children.length; _i6++) {
                  if (ResultAll.CorrectIndex.indexOf(_i6) == -1) {
                    switch (_this11.GameData.Key[_i6]) {
                      case "N":
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i6].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                        break;

                      default:
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i6].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                        break;
                    }
                  } else {
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this11.AnimCorrectNode, KeyP.children[_i6]);
                  }

                  if (ResultAll.WrongIndex.indexOf(_i6) == -1) {
                    switch (_this11.GameData.Key[_i6]) {
                      case "N":
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i6].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN"));
                        break;

                      default:
                        (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                          error: Error()
                        }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[_i6].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU"));
                        break;
                    }
                  } else {
                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Arr_Delete(_this11.AnimWrongNode, KeyP.children[_i6]);
                  }
                }

                AnimV();
                AnimF();
              });

              return function AnimReset() {
                return _ref11.apply(this, arguments);
              };
            }();

            var AnimV = /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator(function* () {
                for (var _i7 = 0; _i7 < Result.CorrectIndex.length; _i7++) {
                  for (var _j4 = 0; _j4 < Result.CorrectIndex[_i7].length; _j4++) {
                    if (_this11.AnimCorrectNode.indexOf(KeyP.children[Result.CorrectIndex[_i7][_j4]]) == -1) {
                      _this11.AnimCorrectNode.push(KeyP.children[Result.CorrectIndex[_i7][_j4]]);

                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(KeyP.children[Result.CorrectIndex[_i7][_j4]].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                    }
                  }
                }

                var _loop2 = function* _loop2(_i8) {
                  var ICall = /*#__PURE__*/function () {
                    var _ref13 = _asyncToGenerator(function* () {
                      //上次触摸的节点在题目中
                      var IsPlay = false;
                      var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_this11.TouchNode.worldPosition, _this11.KeyTarget);

                      if (Obj.Distance <= _this11.OnDistance) {
                        for (var _j5 = 0; _j5 < Result.CorrectIndex[_i8].length; _j5++) {
                          if (_this11.KeyTarget[Obj.Index].name == KeyP.children[Result.CorrectIndex[_i8][_j5]].name) {
                            IsPlay = true;
                            console.log("AnimV");
                            break;
                          }
                        }
                      }

                      if (IsPlay) {
                        _this11.Resoure_Data.Sound_Play("Audio/Correct");

                        for (var _j6 = 0; _j6 < Result.CorrectIndex[_i8].length; _j6++) {
                          //题目的Value占位节点
                          var _Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.CorrectIndex[_i8][_j6]].worldPosition, _this11.ValueTargetC);

                          if (_Obj.Distance <= _this11.OnDistance) {
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_this11.ValueTargetC[_Obj.Index].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC"));
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this11.ValueTargetC[_Obj.Index].getChildByName("Label"), color(0, 155, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                            // this.ValueTargetC[Obj.Index].scale = v3(0.9, 0.9, 1);

                            tween(_this11.ValueTargetC[_Obj.Index]).to(0.1, {
                              scale: v3(0.6, 0.6, 1)
                            }).to(0.1, {
                              scale: v3(0.9, 0.9, 1)
                            }).start();
                          } //题目的Key占位节点
                          // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.CorrectIndex[i][j]]);
                          // KeyP.children[Result.CorrectIndex[i][j]].scale = v3(1, 1, 1);


                          tween(KeyP.children[Result.CorrectIndex[_i8][_j6]]).to(0.1, {
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
                      return _ref13.apply(this, arguments);
                    };
                  }();

                  ICall();
                };

                for (var _i8 = 0; _i8 < Result.CorrectIndex.length; _i8++) {
                  yield* _loop2(_i8);
                }
              });

              return function AnimV() {
                return _ref12.apply(this, arguments);
              };
            }();

            var AnimF = /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator(function* () {
                var _loop3 = function* _loop3(_i9) {
                  var ICall = /*#__PURE__*/function () {
                    var _ref15 = _asyncToGenerator(function* () {
                      //上次触摸的节点在题目中
                      var IsPlay = false;
                      var Obj = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(_this11.TouchNode.worldPosition, _this11.KeyTarget);

                      if (Obj.Distance <= _this11.OnDistance) {
                        for (var _j7 = 0; _j7 < Result.WrongIndex[_i9].length; _j7++) {
                          if (_this11.KeyTarget[Obj.Index].name == KeyP.children[Result.WrongIndex[_i9][_j7]].name) {
                            IsPlay = true;
                            console.log("AnimF");
                            break;
                          }
                        }
                      }

                      if (IsPlay) {
                        _this11.Resoure_Data.Sound_Play("Audio/Wrong");

                        for (var _j8 = 0; _j8 < Result.WrongIndex[_i9].length; _j8++) {
                          //题目的Value占位节点
                          if (Number.isNaN(Number(KeyP.children[Result.WrongIndex[_i9][_j8]].getChildByName("Label").getComponent(Label).string))) {
                            continue;
                          }

                          var _Obj2 = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                            error: Error()
                          }), Tool_Animation) : Tool_Animation).instance.Get_Min_Distance_Node(KeyP.children[Result.WrongIndex[_i9][_j8]].worldPosition, _this11.ValueTargetC);

                          if (_Obj2.Distance <= _this11.OnDistance) {
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_this11.ValueTargetC[_Obj2.Index].getChildByName("Bg"), yield _this11.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
                            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                              error: Error()
                            }), Tool_UI) : Tool_UI).instance.Set_Color_Label(_this11.ValueTargetC[_Obj2.Index].getChildByName("Label"), color(155, 0, 0, 255)); // Tool_Animation.instance.Tween_Stop_Target(this.ValueTargetC[Obj.Index]);
                            // Tool_Animation.instance.Tween_Stop_Target(KeyP.children[Result.WrongIndex[i][j]]);

                            tween(_this11.ValueTargetC[_Obj2.Index]).to(0.1, {
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
                            tween(KeyP.children[Result.WrongIndex[_i9][_j8]]).to(0.1, {
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
                      return _ref15.apply(this, arguments);
                    };
                  }();

                  ICall();
                };

                // for (let i = 0; i < Result.WrongIndex.length; i++) {
                //     for (let j = 0; j < Result.WrongIndex[i].length; j++) {
                //         console.error(this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]));
                //         if (this.AnimWrongNode.indexOf(KeyP.children[Result.WrongIndex[i][j]]) == -1) {
                //             this.AnimWrongNode.push(KeyP.children[Result.WrongIndex[i][j]]);
                //             Tool_UI.instance.Set_SpriteFrame(KeyP.children[Result.WrongIndex[i][j]].getChildByName("Bg"), await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE"));
                //         }
                //     }
                // }
                for (var _i9 = 0; _i9 < Result.WrongIndex.length; _i9++) {
                  yield* _loop3(_i9);
                }
              });

              return function AnimF() {
                return _ref14.apply(this, arguments);
              };
            }();

            var Speed = 1;
            yield AnimReset();
            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
            _this11.Interactable = true;

            if (Count == _this11.GameData.Count) {
              console.log("胜利");

              _this11.GameVictory();
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
            console.log(Result);
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
//# sourceMappingURL=e1b0dcd2dfb6b677866922d9af82674c5aa5218a.js.map