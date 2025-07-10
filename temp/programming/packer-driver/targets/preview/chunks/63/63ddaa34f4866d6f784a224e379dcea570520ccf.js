System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Layout, Sprite, tween, Animation, v3, PanelTemplate, PlatformApi, Tool_Animation, Tool_Event, Tool_Other, Tool_UI, _dec, _class, _crd, ccclass, property, PanelIdiom;

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
      Sprite = _cc.Sprite;
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
              _this3.BtnSetting = find("BtnSetting", _this3.node);
              _this3.BtnTip = find("BtnTip", _this3.node);
              _this3.PanelTip = find("PanelTip", _this3.node);
              _this3.BtnTipClose = find("BtnTipClose", _this3.PanelTip);
              _this3.PanelVictory = find("PanelVictory", _this3.node);
              _this3.BtnNext = find("BtnNext", _this3.PanelVictory);
              _this3.BtnBreak = find("BtnBreak", _this3.PanelVictory);
              _this3.BtnGet = find("BtnGet", _this3.PanelTip);
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

            /**设置按钮 */
            var BtnSettingCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              _this4.Game_Script.UpdatePanelSetting(true);
            };
            /**提示按钮 */


            var BtnTipCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              if (_this4.TipState) {
                _this4.PanelTip.active = true;
              } else {
                var Call = () => {
                  _this4.TipState = true;
                  _this4.Game_Script.IsHint = true;
                  _this4.PanelTip.active = true;
                };

                if (_this4.Game_Script.PropNum > 0) {
                  _this4.Game_Script.PropNum--;

                  _this4.Game_Script.DataSet();

                  _this4.UpdatePropUI();

                  Call();
                } else {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                    Call();
                  }), () => {});
                }
              }
            };
            /**关闭提示界面 */


            var BtnTipCloseCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              _this4.PanelTip.active = false;
            };
            /**下一关按钮 */


            var BtnNextCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              _this4.GameStart();
            };
            /**关闭按钮 */


            var BtnBreakCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              _this4.node.active = false;
            };
            /**获取答案 */


            var BtnGetCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              if (_this4.GetState) {
                return;
              }

              _this4.GetState = true;
              var Grid = find("Window/Grid", _this4.PanelTip);
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                for (var i = 8; i < Grid.children.length; i++) {
                  Grid.children[i].getChildByName("Lock").active = false;
                  Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
                }
              }), () => {});
            };
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
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnNext, BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnBreak, BtnBreakCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnGet, BtnGetCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelTip.getChildByName("Bg"), () => {
              _this4.PanelTip.active = false;
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
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnNext, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnBreak, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnGet, AnimSwitch);
            var Key = find("Key", _this4.node);
            var Value = find("Value", _this4.node);

            var _loop = function* _loop(i) {
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Value.children[i], () => {
                if (_this4.ValueMoveing) {
                  return;
                }

                if (_this4.KeyData == null || _this4.KeyData == undefined) {
                  return;
                }

                if (Key.children[_this4.ValueIndex] == undefined) {
                  return;
                }

                _this4.Resoure_Data.Sound_Play("Audio/Sound/Click");

                _this4.ValueMoveing = true;
                var PosStart = Value.children[i].position.clone(); // console.error(Value.children[i], Key.children[this.ValueIndex], this.ValueIndex, Key);

                var PosEnd = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Get_Target_Node_Local_Pos(Value.children[i], Key.children[_this4.ValueIndex]);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Value.children[i], PosEnd, 0.25, /*#__PURE__*/_asyncToGenerator(function* () {
                  var Char = Value.children[i].getChildByName("Label").getComponent(Label).string;

                  var Result = _this4.GetResult(Char);

                  if (Result.isValid) {
                    if (_this4.ValueIndex % 4 == 1) {
                      /**首字正确 */
                      _this4.Resoure_Data.Sound_Play("Audio/Sound/FirstCorrect");
                    }

                    Key.children[_this4.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;
                    Value.children[i].active = false;

                    if (Result.isComplete) {
                      /**一组词音效 */
                      _this4.Resoure_Data.Sound_Play("Audio/Sound/YiZuCi");

                      for (var j = 4; j > 0; j--) {
                        tween(Key.children[_this4.ValueIndex - j]).by(0.25, {
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
                      _this4.ValueMoveing = false;
                    }

                    yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                      error: Error()
                    }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.2);
                    _this4.ValueMoveing = false;

                    if (_this4.ValueIndex == Key.children.length) {
                      console.log("成语胜利");

                      _this4.GameVictory();
                    }
                  } else {
                    /**错误 */
                    _this4.Resoure_Data.Sound_Play("Audio/Sound/Error");

                    (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                      error: Error()
                    }), Tool_UI) : Tool_UI).instance.Set_Color(Value.children[i].getChildByName("Bg"), color(255, 0, 0, 255));
                    tween(Value.children[i]).by(0.05, {
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
                    }).call(() => {
                      (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                        error: Error()
                      }), Tool_UI) : Tool_UI).instance.Set_Color(Value.children[i].getChildByName("Bg"), color(255, 227, 167, 255));
                      (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                        error: Error()
                      }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(Value.children[i], PosStart, 0.25, () => {
                        _this4.ValueMoveing = false;
                      });
                      tween(Value.children[i]).to(0.25, {
                        scale: v3(1, 1, 1)
                      }, {
                        easing: "quadOut"
                      }).start();
                    }).start();
                  }
                }));
                tween(Value.children[i]).to(0.25, {
                  scale: v3(0.8, 0.8, 1)
                }, {
                  easing: "quadOut"
                }).start();
              });
            };

            for (var i = 0; i < Value.children.length; i++) {
              yield* _loop(i);
            }
          })();
        }
        /**游戏开始 */


        GameStart() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            /**初始化数据 */
            _this5.InitData();

            _this5.Game_Script.IsHint = false;
            _this5.PanelVictory.active = false;
            _this5.PanelTip.active = false;
            _this5.TipState = false;
            _this5.GetState = false;

            _this5.UpdatePropUI();

            if (_this5.KeyData == null || _this5.KeyData == undefined) {
              _this5.Game_Script.OnMessage("暂时没有新题目了");

              return;
            }

            _this5.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u6210\u8BED\u5927\u738B\xB7\u7B2C" + (_this5.Game_Script.IdiomLevel + 1) + "\u5173";
            var Text = [];

            for (var i = 0; i < _this5.KeyData.length; i++) {
              for (var j = 0; j < _this5.KeyData[i].length; j++) {
                Text.push(_this5.KeyData[i].substring(j, j + 1));
              }
            }
            /**初始化提示界面 */


            var Grid = find("Window/Grid", _this5.PanelTip);

            for (var _i = 0; _i < Grid.children.length; _i++) {
              Grid.children[_i].getChildByName("Label").getComponent(Label).string = Text[_i];
              Grid.children[_i].getChildByName("Lock").active = _i >= 8 ? true : false;
              Grid.children[_i].getChildByName("Label").active = !Grid.children[_i].getChildByName("Lock").active;
            }

            (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Sort_Random(Text);
            console.log(Text);
            var Key = find("Key", _this5.node);
            var Value = find("Value", _this5.node);
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
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[_i3], 255);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(Value.children[_i3].getChildByName("Bg"), color(255, 227, 167, 255));
              Value.children[_i3].scale = v3(1, 1, 1);
              Value.children[_i3].active = true;
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Value.children[_i3], 0);
            }
            /**入场节点 */


            var EntryNodes = [];
            var PosEnd = [];

            _this5.scheduleOnce( /*#__PURE__*/_asyncToGenerator(function* () {
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
                }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(EntryNodes[_i5], PosEnd[_i5], 0.25);
                yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.05);
              }
            }));
          })();
        }
        /**游戏胜利 */


        GameVictory() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            /**胜利音效 */
            _this6.Resoure_Data.Sound_Play("Audio/Sound/Victory");

            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showInterstitialAd();
            _this6.Game_Script.IdiomLevel++;
            _this6.Game_Script.IdiomScore += _this6.Game_Script.IsHint ? 1 : 2;
            /**保存数据 */

            _this6.Game_Script.DataSet();

            _this6.Game_Script.UpdateScene();

            find("WinBanner/Condition1/Correct", _this6.PanelVictory).active = !_this6.Game_Script.IsHint;
            find("WinBanner/Condition1/Wrong", _this6.PanelVictory).active = _this6.Game_Script.IsHint;
            find("WinBanner/Stars/StarR", _this6.PanelVictory).getComponent(Sprite).grayscale = _this6.Game_Script.IsHint;
            find("Light", _this6.PanelVictory).getComponent(Animation).play();
            _this6.PanelVictory.active = true;
          })();
        }
        /**刷新道具UI */


        UpdatePropUI() {
          var BtnTipLabel = this.BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label);
          var BtnTipNull = this.BtnTip.getChildByName("PropNum").getChildByName("PropNumNull");
          BtnTipLabel.string = "" + this.Game_Script.PropNum;

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
          var KeyData = [["雨过天晴", "雷霆万钧", "两面三刀", "风花雪月", "天衣无缝"], ["有口无心", "天马行空", "入木三分", "心中有数", "一表人才"], ["百里挑一", "弱不禁风", "三心二意", "回眸一笑", "目中无人"], ["一波三折", "死上八下", "一拍即合", "无中生有", "趁人不备"], ["一目十行", "心口不一", "一手遮天", "举一反三", "表里不一"], ["一心一意", "九牛一毛", "网开一面", "一刀两断", "天各一方"], ["颠三倒四", "羊入虎口", "独当一面", "将心比心", "四脚朝天"], ["才高八斗", "石破天惊", "天方夜谭", "目不识丁", "人仰马翻"], ["引人入胜", "美中不足", "日上三竿", "风平浪静", "开门见山"], ["两袖清风", "天下太平", "心直口快", "遁入空门", "群龙无首"], ["风和日丽", "蒸蒸日上", "见风使舵", "风花雪月", "三姑六婆"], ["大惊失色", "人去楼空", "恩重如山", "不翼而飞", "非分之想"], ["半斤八两", "梁上君子", "胆大包天", "旁门左道", "是非不分"], ["七零八落", "苦中作乐", "平分秋色", "左右开弓", "祸从口出"], ["无与伦比", "走马观花", "地广人稀", "待字闺中", "完美无缺"], // === 较难===
          ["稗官野史", "暴虎冯河", "杯水车薪", "筚路蓝缕", "髀肉复生"], ["鞭辟入里", "别出机杼", "并行不悖", "不稂不莠", "不刊之论"], ["不蔓不枝", "不情之请", "不速之客", "不修边幅", "不一而足"], ["不赞一词", "不足为训", "步人后尘", "蚕食鲸吞", "惨淡经营"], ["差强人意", "蟾宫折桂", "长袖善舞", "陈陈相因", "城下之盟"], ["魑魅魍魉", "踌躇满志", "出神入化", "穿凿附会", "吹毛求疵"], ["椿萱并茂", "从善如登", "厝火积薪", "大而无当", "大快朵颐"], ["待价而沽", "箪食瓢饮", "当仁不让", "得鱼忘筌", "登堂入室"], ["等量齐观", "顶礼膜拜", "东窗事发", "动辄得咎", "洞若观火"], ["独辟蹊径", "短小精悍", "对簿公堂", "多事之秋", "尔诈我虞"], ["耳提面命", "发奸擿伏", "繁文缛节", "方枘圆凿", "放浪形骸"], ["分庭抗礼", "焚膏继晷", "粉墨登场", "风雨如晦", "附庸风雅"], ["改弦更张", "甘之如饴", "高山仰止", "革故鼎新", "各行其是"], ["绠短汲深", "功败垂成", "觥筹交错", "狗彘不若", "姑妄听之"], ["故步自封", "管窥蠡测", "光风霁月", "过犹不及", "海晏河清"], ["含英咀华", "沆瀣一气", "涸辙之鲋", "怙恶不悛", "怀瑾握瑜"], ["涣然冰释", "黄钟大吕", "毁家纾难", "讳莫如深", "祸起萧墙"], ["积重难返", "激浊扬清", "吉光片羽", "佶屈聱牙", "既往不咎"], ["间不容发", "见微知著", "胶柱鼓瑟", "矫揉造作", "竭泽而渔"], ["金科玉律", "噤若寒蝉", "泾渭分明", "敬谢不敏", "久假不归"], ["具体而微", "开门见山", "侃侃而谈", "空穴来风", "脍炙人口"], ["困兽犹斗", "来者可追", "滥竽充数", "老骥伏枥", "李代桃僵"], ["力透纸背", "良莠不齐", "临渊羡鱼", "羚羊挂角", "流言蜚语"], // === 最难===
          ["黾勉从事", "鞫为茂草", "鸱目虎吻", "鼯鼠之技", "龂齿弹舌"], ["饕餮之徒", "魍魉魑魅", "醯鸡瓮里", "鳏寡孤独", "黼黻文章"], ["翥凤翔鸾", "鞫为茂草", "鸱目虎吻", "鼯鼠之技", "龂齿弹舌"]];

          if (this.Game_Script.IdiomLevel >= KeyData.length) {
            this.KeyData = null;
            return;
          }

          this.KeyData = KeyData[this.Game_Script.IdiomLevel];
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
//# sourceMappingURL=63ddaa34f4866d6f784a224e379dcea570520ccf.js.map