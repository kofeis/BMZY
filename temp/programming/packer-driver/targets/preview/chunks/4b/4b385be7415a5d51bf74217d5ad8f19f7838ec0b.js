System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Layout, tween, Animation, v3, PanelTemplate, PlatformApi, Tool_Animation, Tool_Event, Tool_Other, Tool_UI, _dec, _class, _crd, ccclass, property, PanelIdiom;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPanelTemplate(extras) {
    _reporterNs.report("PanelTemplate", "./PanelTemplate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../../Other/SDK/PlatformApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "../../Tool/Tool_Animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../../Tool/Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../../Tool/Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../../Tool/Tool_UI", _context.meta, extras);
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
      tween = _cc.tween;
      Animation = _cc.Animation;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      PanelTemplate = _unresolved_2.PanelTemplate;
    }, function (_unresolved_3) {
      PlatformApi = _unresolved_3.PlatformApi;
    }, function (_unresolved_4) {
      Tool_Animation = _unresolved_4.Tool_Animation;
    }, function (_unresolved_5) {
      Tool_Event = _unresolved_5.Tool_Event;
    }, function (_unresolved_6) {
      Tool_Other = _unresolved_6.Tool_Other;
    }, function (_unresolved_7) {
      Tool_UI = _unresolved_7.Tool_UI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89e92ULVRZNHobGb/1bvvte", "PanelIdiom", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'Label', 'Layout', 'Node', 'Sprite', 'tween', 'Animation', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelIdiom", PanelIdiom = (_dec = ccclass('PanelIdiom'), _dec(_class = class PanelIdiom extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor() {
          super(...arguments);

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

          /**胜利界面 */
          this.PanelVictory = null;

          /**返回按钮 */
          this.BtnBreak = null;

          /**获取答案按钮 */
          this.BtnGet = null;

          /**答案状态 */
          this.GetState = false;
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

            _this2.GameStart();
          })();
        }

        start() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showInterstitialAd();

            _this3.Timing();

            _this3.TimingP();
          })();
        }

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
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play_Plus(this.BtnTip.getComponent(Animation), null, null, null, null, null, 3, 0, () => {
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
            }), Tool_Animation) : Tool_Animation).instance.Anim_Frame_Play_Plus(this.BtnTip.getComponent(Animation), null, null, null, null, null, 3, 0, () => {
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
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              /**绑定关键节点 */
              _this4.BtnSetting = find("BtnSetting", _this4.node);
              _this4.BtnTip = find("BtnTip", _this4.node);
              _this4.PanelTip = find("PanelTip", _this4.node);
              _this4.BtnTipClose = find("BtnTipClose", _this4.PanelTip);
              _this4.PanelVictory = find("PanelVictory", _this4.node);
              _this4.BtnNext = find("BtnNext", _this4.PanelVictory);
              _this4.BtnBreak = find("BtnBreak", _this4.PanelVictory);
              _this4.BtnGet = find("BtnGet", _this4.PanelTip);
              /**注册按钮事件 */

              yield _this4.OnBtn(_this4.Game_Script.AnimSwitch);
              _this4.IsInit = true;
              resolve();
            }));
          })();
        }
        /**注册按钮 */


        OnBtn(AnimSwitch) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (AnimSwitch === void 0) {
              AnimSwitch = false;
            }

            /**设置按钮 */
            var BtnSettingCall = () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn");

              _this5.Game_Script.PanelSetting.active = true; // PlatformApi.instance.showInterstitialAd();

              _this5.TimStop();
            };
            /**提示按钮 */


            var BtnTipCall = () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn");

              if (_this5.TipState) {
                _this5.PanelTip.active = true;
              } else {
                var Call = () => {
                  _this5.TipState = true;
                  _this5.Game_Script.IsHint = true;
                  _this5.PanelTip.active = true;
                  _this5.Game_Script.PropNum--;

                  _this5.Game_Script.DataSet(); // this.UpdatePropUI();

                };

                if (_this5.Game_Script.PropNum > 0) {
                  Call();
                } else {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                    _this5.Resoure_Data.Music_Resume();

                    _this5.Game_Script.PropNum += 2;
                    Call();
                  }), () => {
                    _this5.Resoure_Data.Music_Resume();
                  });
                }
              }

              _this5.TimStop();
            };
            /**关闭提示界面 */


            var BtnTipCloseCall = () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn");

              _this5.PanelTip.active = false;

              _this5.UpdatePropUI();

              _this5.TimStop();
            };
            /**下一关按钮 */


            var BtnNextCall = () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn");

              _this5.GameStart();

              _this5.TimStop();
            };
            /**关闭按钮 */


            var BtnBreakCall = () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn"); // this.node.active = false;


              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {
                console.log("分享成功");
              }, () => {
                console.log("分享失败");
              });

              _this5.TimStop();
            };
            /**获取答案 */


            var BtnGetCall = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(function* () {
                if (_this5.ValueMoveing) {
                  return;
                }

                _this5.Resoure_Data.Sound_Play("Audio/Sound/Btn");

                if (_this5.GetState) {
                  return;
                }

                _this5.GetState = true;
                var Grid = find("Window/Grid", _this5.PanelTip);
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                  _this5.Resoure_Data.Music_Resume();

                  for (var i = 8; i < Grid.children.length; i++) {
                    Grid.children[i].getChildByName("Lock").active = false;
                    Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
                  }

                  _this5.BtnTipClose.getChildByName("No").active = false;
                  _this5.BtnTipClose.getChildByName("Ok").active = true;
                }), () => {
                  _this5.Resoure_Data.Music_Resume();
                });

                _this5.TimStop();
              });

              return function BtnGetCall() {
                return _ref3.apply(this, arguments);
              };
            }();
            /**设置按钮事件 */


            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnSetting, BtnSettingCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnTip, BtnTipCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnTipClose, BtnTipCloseCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnNext, BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnBreak, BtnBreakCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.BtnGet, BtnGetCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this5.PanelTip.getChildByName("Bg"), () => {
              if (_this5.ValueMoveing) {
                return;
              }

              _this5.PanelTip.active = false;

              _this5.UpdatePropUI();

              _this5.TimStop();
            });
            /**设置按钮动画 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnSetting, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnTip, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnTipClose, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnNext, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnBreak, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this5.BtnGet, AnimSwitch);
            var Key = find("Key", _this5.node);
            var Value = find("Value", _this5.node);

            var _loop = function* _loop() {
              var TouchNode = Value.children[i];
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(TouchNode, () => {
                if (_this5.ValueMoveing) {
                  return;
                }

                if (_this5.KeyData == null || _this5.KeyData == undefined) {
                  return;
                }

                if (Key.children[_this5.ValueIndex] == undefined) {
                  return;
                }

                if (_this5.Resoure_Data.Vibration_Switch_Get()) {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.vibrateShort();
                }

                _this5.TimStop();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Node_Index_Set(TouchNode, -1);
                /**点击 */

                _this5.Resoure_Data.Sound_Play("Audio/Sound/Click");

                _this5.ValueMoveing = true;
                var PosStart = TouchNode.position.clone();
                var PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(TouchNode, Key.children[_this5.ValueIndex]);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, PosEnd, 0.25, /*#__PURE__*/_asyncToGenerator(function* () {
                  var Char = TouchNode.getChildByName("Label").getComponent(Label).string;

                  var Result = _this5.GetResult(Char);

                  if (Result.isValid) {
                    _this5.TimStopP();
                    /**匹配正确 */


                    _this5.Resoure_Data.Sound_Play("Audio/Sound/Correct");
                    /**首字正确 */
                    // if (this.ValueIndex % 4 == 1) {
                    // }


                    Key.children[_this5.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;
                    TouchNode.active = false;

                    if (Result.isComplete) {
                      /**匹配完成 */
                      _this5.Resoure_Data.Sound_Play("Audio/Sound/isComplete");

                      for (var j = 4; j > 0; j--) {
                        tween(Key.children[_this5.ValueIndex - j]).by(0.25, {
                          scale: v3(0.5, 0.5, 0)
                        }, {
                          easing: "quadOut"
                        }).by(0.25, {
                          scale: v3(-0.5, -0.5, 0)
                        }, {
                          easing: "quadOut"
                        }).start();
                        yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                          error: Error()
                        }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
                      }
                    } else {
                      _this5.ValueMoveing = false;
                    }

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.25);

                    if (_this5.ValueIndex == Key.children.length) {
                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.6);
                      /**胜利音效 */

                      _this5.Resoure_Data.Sound_Play("Audio/Sound/Victory");

                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
                      console.log("成语胜利");

                      _this5.GameVictory();

                      yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Async_Wait(1);
                      _this5.ValueMoveing = false;
                    } else {
                      _this5.ValueMoveing = false;
                    }
                  } else {
                    /**匹配错误 */
                    _this5.Resoure_Data.Sound_Play("Audio/Sound/Wrong");

                    if (_this5.Resoure_Data.Vibration_Switch_Get()) {
                      (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                        error: Error()
                      }), PlatformApi) : PlatformApi).instance.vibrateShort();
                    }

                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color(TouchNode.getChildByName("Bg"), color(255, 0, 0, 255));
                    var ScaleT = 0.6;
                    var ScaleP = 0.7;
                    tween(TouchNode).by(0.05 * ScaleT, {
                      position: v3(-25 * ScaleP, 0, 0)
                    }, {
                      easing: "quadOut"
                    }).by(0.1 * ScaleT, {
                      position: v3(50 * ScaleP, 0, 0)
                    }, {
                      easing: "quadOut"
                    }).by(0.05 * ScaleT, {
                      position: v3(-25 * ScaleP, 0, 0)
                    }, {
                      easing: "quadOut"
                    }).call(() => {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color(TouchNode.getChildByName("Bg"), color(255, 255, 255, 255));
                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(TouchNode, PosStart, 0.25, () => {
                        _this5.ValueMoveing = false;
                      });
                      tween(TouchNode).to(0.25, {
                        scale: v3(1, 1, 1)
                      }, {
                        easing: "quadOut"
                      }).start();
                    }).start();
                  }
                }));
                tween(TouchNode).to(0.25, {
                  scale: v3(0.85, 0.9, 1)
                }, {
                  easing: "quadOut"
                }).start();
              });
            };

            for (var i = 0; i < Value.children.length; i++) {
              yield* _loop();
            }
          })();
        }
        /**游戏开始 */


        GameStart() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            /**初始化数据 */
            yield _this6.InitData();
            _this6.Game_Script.IsHint = false;
            _this6.PanelVictory.active = false;
            _this6.PanelTip.active = false;
            _this6.TipState = false;
            _this6.GetState = false;
            _this6.BtnTipClose.getChildByName("Ok").active = false;
            _this6.BtnTipClose.getChildByName("No").active = true;

            _this6.UpdatePropUI();

            if (_this6.KeyData == null || _this6.KeyData == undefined) {
              _this6.Game_Script.OnMessage("暂时没有新题目了");

              return;
            }

            _this6.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u6211\u6210\u8BED\u7279\u725B\xB7\u7B2C" + (_this6.Game_Script.IdiomLevel + 1) + "\u5173"; //`我成语特牛·第${this.Game_Script.IdiomLevel + 1}关`;

            var Text = [];

            for (var i = 0; i < _this6.KeyData.length; i++) {
              for (var j = 0; j < _this6.KeyData[i].length; j++) {
                Text.push(_this6.KeyData[i].substring(j, j + 1));
              }
            }
            /**初始化提示界面 */


            var Grid = find("Window/Grid", _this6.PanelTip);

            for (var _i = 0; _i < Grid.children.length; _i++) {
              Grid.children[_i].getChildByName("Label").getComponent(Label).string = Text[_i];
              Grid.children[_i].getChildByName("Lock").active = _i >= 8 ? true : false;
              Grid.children[_i].getChildByName("Label").active = !Grid.children[_i].getChildByName("Lock").active;
            }

            (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Sort_Random(Text);
            console.log(Text);
            var Key = find("Key", _this6.node);
            var Value = find("Value", _this6.node);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_On(Value, Layout);
            Value.getComponent(Layout).updateLayout();

            for (var _i2 = 0; _i2 < Key.children.length; _i2++) {
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Key.children[_i2]);
              Key.children[_i2].getChildByName("Label").getComponent(Label).string = "";
              Key.children[_i2].scale = v3(1, 1, 1);
            }

            for (var _i3 = 0; _i3 < Value.children.length; _i3++) {
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Value.children[_i3]);
              Value.children[_i3].getChildByName("Label").getComponent(Label).string = Text[_i3];
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[_i3], 255); // Tool_UI.instance.Set_Color(Value.children[i].getChildByName("Bg"), color(255, 227, 167, 255));

              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(Value.children[_i3].getChildByName("Bg"), color(255, 255, 255, 255));
              Value.children[_i3].scale = v3(1, 1, 1);
              Value.children[_i3].active = true;
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[_i3], 0);
            }
            /**入场节点 */


            var EntryNodes = [];
            var PosEnd = [];

            _this6.scheduleOnce( /*#__PURE__*/_asyncToGenerator(function* () {
              for (var _i4 = 0; _i4 < Value.children.length; _i4++) {
                PosEnd.push(Value.children[_i4].position.clone());
                EntryNodes.push(Value.children[_i4]);
              }

              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Component_Off(Value, Layout);

              for (var _i5 = 0; _i5 < EntryNodes.length; _i5++) {
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Pos_X(EntryNodes[_i5], -640);
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(EntryNodes[_i5], 255); // Tool_UI.instance.Node_Index_Set(EntryNodes[i], 0);

                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(EntryNodes[_i5], PosEnd[_i5], 0.2);
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.02);
              }
            }));

            _this6.Resoure_Data.Sound_Play("Audio/Sound/Show");

            if (_this6.Resoure_Data.Vibration_Switch_Get()) {
              for (var _i6 = 0; _i6 < 7; _i6++) {
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
        /**游戏胜利 */


        GameVictory() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            _this7.scheduleOnce(() => {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.showInterstitialAd();
            }, 0.8);

            _this7.Game_Script.IdiomLevel++;
            _this7.Game_Script.IdiomScore += _this7.Game_Script.IsHint ? 1 : 2;
            /**保存数据 */

            _this7.Game_Script.DataSet(); // find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint
            // find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
            // find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
            // find("Light", this.PanelVictory).getComponent(Animation).play();


            _this7.PanelVictory.active = true;

            if (_this7.Resoure_Data.Vibration_Switch_Get()) {
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
        /**刷新道具UI */


        UpdatePropUI() {
          var PropNum = this.BtnTip.getChildByName("PropNum");
          var BtnTipLabel = PropNum.getChildByName("Label").getComponent(Label);
          var BtnTipNull = this.BtnTip.getChildByName("PropNumNull");
          BtnTipLabel.string = "" + this.Game_Script.PropNum;

          if (this.Game_Script.PropNum > 0) {
            BtnTipNull.active = false;
            PropNum.active = true;
          } else {
            BtnTipNull.active = true;
            PropNum.active = false;
          }
        }
        /**初始数据 */


        InitData() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            yield _this8.GetData();
            _this8.ValueStr = "";
            _this8.ValueIndex = 0;
            _this8.ValueMoveing = false;
          })();
        }
        /**获取数据 */


        GetData() {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var dioms = yield _this9.Resoure_Data.Load_Json("Json/dioms");
            var KeyData = dioms["dioms"];

            if (_this9.Game_Script.IdiomLevel >= KeyData.length) {
              _this9.KeyData = null;
              return;
            }

            _this9.KeyData = KeyData[_this9.Game_Script.IdiomLevel];
          })();
        }
        /**获取结果 */


        GetResult(Char) {
          // 拼接新字符形成候选字符串
          var Candidate = this.ValueStr + Char; // 检查是否是完整成语

          var isComplete = this.KeyData.indexOf(Candidate); // 检查是否有成语以这个候选字符串开头

          var isValid = this.KeyData.some(Idiom => Idiom.startsWith(Candidate));

          if (isValid) {
            this.ValueIndex++;
          }

          if (isComplete !== -1) {
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
//# sourceMappingURL=4b385be7415a5d51bf74217d5ad8f19f7838ec0b.js.map