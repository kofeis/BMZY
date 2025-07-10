System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Layout, Sprite, tween, UIOpacity, v3, Animation, PlatformApi, Tool_Event, Tool_UI, PanelTemplate, Tool_Animation, Tool_Other, _dec, _class, _crd, ccclass, property, PanelFilm;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

          /**返回按钮 */
          this.BtnBreak = null;

          /**获取答案按钮 */
          this.BtnGet = null;

          /**答案状态 */
          this.GetState = false;

          /**删除按钮 */
          this.BtnDelete = null;
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
              _this3.BtnDelete = find("Key/BtnDelete", _this3.node);
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


            var BtnCloseCall = () => {
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
                for (var i = 0; i < Grid.children.length; i++) {
                  Grid.children[i].getChildByName("Lock").active = false;
                  Grid.children[i].getChildByName("Label").active = !Grid.children[i].getChildByName("Lock").active;
                }
              }), () => {});
            };
            /**删除按钮 */


            var BtnDeleteCall = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              if (_this4.ValueIndex > 0) {
                var _Key = find("Key", _this4.node);

                _Key.children[_this4.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = "";
                _this4.ValueStr = _this4.ValueStr.substring(0, _this4.ValueStr.length - 1);
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(Btns[_this4.ValueIndex - 1], 255);
                _this4.ValueIndex--;
              }
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
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnBreak, BtnCloseCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnGet, BtnGetCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnDelete, BtnDeleteCall);
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
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnDelete, AnimSwitch);
            var Key = find("Key", _this4.node);
            var Value = find("Value", _this4.node);
            var Btns = [];

            var _loop = function* _loop(i) {
              var Component_UIOpacity = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Component_Get(Value.children[i], UIOpacity);
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Value.children[i], () => {
                if (Component_UIOpacity.opacity == 255) {
                  if (_this4.ValueMoveing) {
                    return;
                  }

                  if (_this4.KeyData == null || _this4.KeyData == undefined) {
                    return;
                  }

                  _this4.Resoure_Data.Sound_Play("Audio/Sound/Click");

                  _this4.ValueMoveing = true;
                  Component_UIOpacity.opacity = 155;
                  Btns[_this4.ValueIndex] = Value.children[i];
                  var Char = Value.children[i].getChildByName("Label").getComponent(Label).string;

                  var Result = _this4.GetResult(Char);

                  if (Result.isValid) {
                    if (_this4.ValueIndex == 1) {
                      /**首字正确 */
                      _this4.Resoure_Data.Sound_Play("Audio/Sound/FirstCorrect");
                    }

                    Key.children[_this4.ValueIndex - 1].getChildByName("Label").getComponent(Label).string = Char;

                    if (Result.isComplete) {
                      _this4.GameVictory();
                    } else {
                      _this4.ValueMoveing = false;
                    }
                  } else {
                    /**错误 */
                    _this4.Resoure_Data.Sound_Play("Audio/Sound/Error");

                    Key.children[_this4.ValueIndex].getChildByName("Label").getComponent(Label).string = Char;

                    var KeyLabel = Key.children[_this4.ValueIndex].getChildByName("Label");

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

                    _this4.scheduleOnce(() => {
                      KeyLabel.getComponent(Label).string = "";
                      KeyLabel.getComponent(Label).color = color(0, 0, 0, 255);
                      Component_UIOpacity.opacity = 255;
                      _this4.ValueMoveing = false;
                    }, 0.5);
                  }
                }
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
            if (_this5.Game_Script == null) {
              return;
            }
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

            _this5.node.getChildByName("Title").getChildByName("Leves").getComponent(Label).string = "\u5F71\u89C6\u5927\u5496\xB7\u7B2C" + (_this5.Game_Script.FilmLevel + 1) + "\u5173";
            var Text = [];

            for (var i = 0; i < _this5.KeyData.Correct.length; i++) {
              Text.push(_this5.KeyData.Correct.substring(i, i + 1));
            }

            for (var j = 0; j < _this5.KeyData.Wrong.length; j++) {
              Text.push(_this5.KeyData.Wrong.substring(j, j + 1));
            }
            /**初始化提示界面 */


            var Grid = find("Window/Grid", _this5.PanelTip);

            for (var _i = 0; _i < Grid.children.length; _i++) {
              Grid.children[_i].getChildByName("Label").getComponent(Label).string = _this5.KeyData.Hints.substring(_i, _i + 1);
              Grid.children[_i].getChildByName("Lock").active = true;
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

            for (var _i2 = 0; _i2 < Key.children.length - 1; _i2++) {
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(Key.children[_i2]);
              Key.children[_i2].getChildByName("Label").getComponent(Label).string = "";
              Key.children[_i2].scale = v3(1, 1, 1);
              Key.children[_i2].active = _i2 < _this5.KeyData.Correct.length ? true : false;
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
              }), Tool_UI) : Tool_UI).instance.Set_Color_Sprite(Value.children[_i3].getChildByName("Bg"), color(255, 227, 167, 255));
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
              } // PosEnd[Value.children.length - 1] = v3(55, 0, 0);
              // PosEnd[Value.children.length - 2] = v3(-55, 0, 0);


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
            _this6.Game_Script.FilmLevel++;
            _this6.Game_Script.FilmScore += _this6.Game_Script.IsHint ? 1 : 2;
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
          var FilmData = [// === 简单===
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
            this.KeyData = FilmData[FilmData.length - 1];
          } else {
            this.KeyData = FilmData[this.Game_Script.FilmLevel];
          }
        }
        /**获取结果 */


        GetResult(Char) {
          var _this$KeyData$Correct, _this$KeyData$Correct2;

          // 拼接新字符形成候选字符串
          var Candidate = this.ValueStr + Char; // 检查是否是完整成语

          var isComplete = Candidate === this.KeyData.Correct; // 检查是否有成语以这个候选字符串开头

          var isValid = (_this$KeyData$Correct = (_this$KeyData$Correct2 = this.KeyData.Correct) == null ? void 0 : _this$KeyData$Correct2.startsWith(Candidate)) != null ? _this$KeyData$Correct : false;

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
//# sourceMappingURL=d8215f69b85f4c810f44e4ed6ca0a1056108703e.js.map