System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, RichText, Sprite, Animation, PanelTemplate, PlatformApi, Tool_Animation, Tool_Event, Tool_Other, Tool_UI, Game_Mode, _dec, _class, _crd, ccclass, property, PanelDish;

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

  function _reportPossibleCrUseOfGame_Mode(extras) {
    _reporterNs.report("Game_Mode", "../../Tool/Resoure_Data", _context.meta, extras);
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
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
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
    }, function (_unresolved_8) {
      Game_Mode = _unresolved_8.Game_Mode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4cadY/+CFLcJQF7PnsyN8G", "PanelDish", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'Label', 'Layout', 'Node', 'RichText', 'Sprite', 'tween', 'UIOpacity', 'v3', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelDish", PanelDish = (_dec = ccclass('PanelDish'), _dec(_class = class PanelDish extends (_crd && PanelTemplate === void 0 ? (_reportPossibleCrUseOfPanelTemplate({
        error: Error()
      }), PanelTemplate) : PanelTemplate) {
        constructor() {
          super(...arguments);

          /**主要面板 */
          this.PanelPlay = null;

          /**地区文本 */
          this.LabelRegion = null;

          /**目标文本 */
          this.LabelTarget = null;

          /**分数文本 */
          this.LabelScore = null;

          /**菜品图片 */
          this.ImgDish = null;

          /**正确图片 */
          this.ImgCorrect = null;

          /**错误图片 */
          this.ImgWrong = null;

          /**选项A */
          this.OptionA = null;

          /**选项A文本 */
          this.LabelOptionA = null;

          /**选项B */
          this.OptionB = null;

          /**选项B文本 */
          this.LabelOptionB = null;

          /**选项C */
          this.OptionC = null;

          /**选项C文本 */
          this.LabelOptionC = null;

          /**提示按钮 */
          this.BtnTip = null;

          /**设置按钮 */
          this.BtnSetting = null;

          /**结算面板 */
          this.PanelSettle = null;
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
              _this3.BtnSetting = find("PanelUI/BtnSetting", _this3.node);
              _this3.BtnTip = find("PanelUI/BtnTip", _this3.node);
              _this3.PanelPlay = find("PanelPlay", _this3.node);
              _this3.OptionA = find("OptionA", _this3.PanelPlay);
              _this3.LabelOptionA = find("OptionA/Label", _this3.PanelPlay).getComponent(Label);
              _this3.OptionB = find("OptionB", _this3.PanelPlay);
              _this3.LabelOptionB = find("OptionB/Label", _this3.PanelPlay).getComponent(Label);
              _this3.OptionC = find("OptionC", _this3.PanelPlay);
              _this3.LabelOptionC = find("OptionC/Label", _this3.PanelPlay).getComponent(Label);
              _this3.LabelRegion = find("Title/LabelRegion", _this3.node).getComponent(Label);
              _this3.LabelTarget = find("Layout/LabelTarget", _this3.PanelPlay).getComponent(Label);
              _this3.LabelScore = find("Layout/LabelScore", _this3.PanelPlay).getComponent(RichText);
              _this3.ImgDish = find("ImgDish", _this3.PanelPlay);
              _this3.ImgCorrect = find("ImgCorrect", _this3.PanelPlay);
              _this3.ImgWrong = find("ImgWrong", _this3.PanelPlay);
              _this3.PanelVictory = find("PanelVictory", _this3.node);
              _this3.PanelFail = find("PanelFail", _this3.node);
              _this3.PanelSettle = find("PanelSettle", _this3.node);
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
            var FunPGBtnSetting = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              _this4.Game_Script.UpdatePanelSetting(true);
            };
            /**选项A按钮  */


            var FunPGOptionA = () => {
              if (_this4.Game_Script.TopicIndex == _this4.Game_Script.TopicCount) {
                return;
              }

              if (_this4.LabelOptionA.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                _this4.GameVictory();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionA, color(0, 255, 0, 255));
              } else {
                _this4.GameFailed();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionA, color(255, 0, 0, 255));
              }
            };
            /**选项B按钮  */


            var FunPGOptionB = () => {
              if (_this4.Game_Script.TopicIndex == _this4.Game_Script.TopicCount) {
                return;
              }

              if (_this4.LabelOptionB.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                _this4.GameVictory();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionB, color(0, 255, 0, 255));
              } else {
                _this4.GameFailed();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionB, color(255, 0, 0, 255));
              }
            };
            /**选项C按钮  */


            var FunPGOptionC = () => {
              if (_this4.Game_Script.TopicIndex == _this4.Game_Script.TopicCount) {
                return;
              }

              if (_this4.LabelOptionC.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                _this4.GameVictory();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionC, color(0, 255, 0, 255));
              } else {
                _this4.GameFailed();

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Color(_this4.OptionC, color(255, 0, 0, 255));
              }
            };
            /**提示按钮 */


            var FunPGBtnTip = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              if (_this4.Game_Script.PropNum > 0) {
                if (_this4.OptionA.active && _this4.OptionB.active && _this4.OptionC.active) {
                  if (_this4.Resoure_Data.Game_Mode == (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                    error: Error()
                  }), Game_Mode) : Game_Mode).Endless) {
                    if (_this4.Game_Script.PropNumUse == _this4.Game_Script.PropNumUseMax) {
                      _this4.Game_Script.OnMessage("道具使用上限");

                      return;
                    } else {
                      _this4.Game_Script.PropNumUse++;
                    }
                  }

                  _this4.Game_Script.IsHint = true;
                  _this4.Game_Script.PropNum--;
                  _this4.BtnTip.active = false;

                  _this4.Game_Script.DataSet();

                  _this4.UpdatePropUI();

                  if (_this4.LabelOptionA.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                    _this4.OptionA.active = true;
                  } else {
                    _this4.OptionA.active = false;
                  }

                  if (_this4.LabelOptionB.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                    _this4.OptionB.active = true;
                  } else {
                    _this4.OptionB.active = false;
                  }

                  if (_this4.LabelOptionC.string == _this4.Game_Script.TopicData[_this4.Game_Script.TopicIndex].CorrectName) {
                    _this4.OptionC.active = true;
                  } else {
                    _this4.OptionC.active = false;
                  }
                }
              } else {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
                  _this4.Game_Script.PropNum += 3;

                  _this4.UpdatePropUI();

                  _this4.Game_Script.DataSet();
                }, () => {
                  _this4.Game_Script.PropNum += 0;

                  _this4.UpdatePropUI();

                  _this4.Game_Script.DataSet();
                });
              }
            };
            /**分享按钮 */


            var FunPGShare = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/SoundBtn"); // if (this.ShareTime == -1) {


                _this4.Game_Script.ShareTime = _this4.Resoure_Data.Get_Timestamp();
                var e = new Date().getTime();
                console.log("当前邀请时间", _this4.Game_Script.ShareTime, "当前时间", e);
                console.log("剩余有效时间", _this4.Game_Script.ShareTime + 2592e5 - e);

                _this4.Game_Script.DataSet(); // } else {
                // }


                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {
                  _this4.Game_Script.GetProp(1, "分享成功");

                  console.log("分享成功");
                }, () => {
                  console.log("分享失败");
                });
              });

              return function FunPGShare() {
                return _ref2.apply(this, arguments);
              };
            }();
            /**再生广告按钮 */


            var FunPGResurAd = () => {
              _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.showVideoAd( /*#__PURE__*/_asyncToGenerator(function* () {
                console.log("复活成功");
                _this4.Game_Script.IsContinue = true;
                (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Sort_Random(_this4.Game_Script.TopicData);

                if (_this4.Resoure_Data.Game_Mode == (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Endless) {
                  _this4.Game_Script.PropNumUse++;
                  console.log("复活次数", _this4.Game_Script.PropNumUse);
                }

                yield _this4.GameStart();
              }), () => {
                console.log("复活失败");
                return;
              });
            };
            /**返回按钮 */


            var FunBack = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

                _this4.Game_Script.PanelGameHide();

                _this4.Game_Script.ViewHide();

                switch (_this4.Resoure_Data.Game_Mode) {
                  case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                    error: Error()
                  }), Game_Mode) : Game_Mode).Endless:
                    _this4.Game_Script.ViewNormal.active = false;
                    _this4.Game_Script.ViewMain.active = true;

                    if (_this4.Game_Script.TopicIndex >= 1) {
                      //this.TopicIndexMin
                      var Index = _this4.Game_Script.PlaceBarId - 1;
                      console.log("\u53C2\u4E0E\u76D6\u697C,\u5730\u533A\u662F" + _this4.Game_Script.ConfigRegionDish[Index].City);
                      var DataRegionalRanking = yield _this4.Resoure_Data.Fetch_Data(_this4.Game_Script.UrlRegionRanking);
                      console.log(DataRegionalRanking.RegionalRanking);
                      console.log("修改前的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
                      DataRegionalRanking.RegionalRanking[Index].Score += _this4.Game_Script.TopicIndex;
                      console.log("修改后的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
                      yield _this4.Resoure_Data.Update_Data(_this4.Game_Script.UrlRegionRanking, DataRegionalRanking);
                    }

                    break;

                  case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                    error: Error()
                  }), Game_Mode) : Game_Mode).Normal:
                    _this4.Game_Script.ViewMain.active = false;
                    _this4.Game_Script.ViewNormal.active = true;
                    break;

                  default:
                    break;
                }
              });

              return function FunBack() {
                return _ref4.apply(this, arguments);
              };
            }();
            /**继续游戏按钮回调 */


            var BtnNextCall = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

                _this4.Game_Script.PanelGameHide();

                _this4.Game_Script.ViewHide();

                _this4.Game_Script.ViewMain.active = false;
                _this4.Game_Script.ViewNormal.active = true;
              });

              return function BtnNextCall() {
                return _ref5.apply(this, arguments);
              };
            }();
            /**返回首页按钮回调 */


            var BtnBreakCall = /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator(function* () {
                _this4.Resoure_Data.Sound_Play("Audio/SoundBtn");

                _this4.Game_Script.PanelGameHide();

                _this4.Game_Script.ViewHide();

                _this4.Game_Script.ViewNormal.active = false;
                _this4.Game_Script.ViewMain.active = true;
                _this4.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Tutorial;
              });

              return function BtnBreakCall() {
                return _ref6.apply(this, arguments);
              };
            }();
            /**设置按钮 */


            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnSetting.getChildByName("Icon"), FunPGBtnSetting);
            /**提示按钮 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.BtnTip, FunPGBtnTip);
            /**选项按钮 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.OptionA, FunPGOptionA);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.OptionB, FunPGOptionB);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.OptionC, FunPGOptionC);
            /**胜利界面按钮 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelVictory.getChildByName("BtnBreak"), BtnBreakCall);
            /**失败界面按钮 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnShare"), FunPGShare);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnResurAd"), FunPGResurAd);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelFail.getChildByName("BtnBack"), FunBack);
            /**结算面板 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelSettle.getChildByName("BtnResurAd"), FunPGResurAd);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelSettle.getChildByName("BtnBack"), FunBack);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(_this4.PanelSettle.getChildByName("BtnClose"), FunBack);
            /**设置按钮动画 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.OptionA, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.OptionB, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.OptionC, AnimSwitch);
            /**提示按钮 */

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnTip, AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.BtnSetting.getChildByName("Icon"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnShare"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnResurAd"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelFail.getChildByName("BtnBack"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelSettle.getChildByName("BtnResurAd"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelSettle.getChildByName("BtnBack"), AnimSwitch);
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(_this4.PanelSettle.getChildByName("BtnClose"), AnimSwitch);
          })();
        }
        /**游戏开始 */


        GameStart() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (_this5.Game_Script == null) {
              return;
            }

            _this5.ImgCorrect.active = false;
            _this5.ImgWrong.active = false;
            _this5.PanelVictory.active = false;
            _this5.PanelFail.active = false;
            _this5.PanelSettle.active = false;
            _this5.PanelPlay.active = true;
            _this5.BtnTip.active = true;
            _this5.OptionA.active = true;
            _this5.OptionB.active = true;
            _this5.OptionC.active = true;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(_this5.OptionA);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(_this5.OptionB);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(_this5.OptionC);

            _this5.UpdatePropUI();
            /**更新提示 */


            switch (_this5.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
                _this5.LabelRegion.string = "做个好菜·无尽模式";
                _this5.PanelPlay.getChildByName("Endless").active = true;
                /**最高记录 */

                _this5.LabelTarget.string = "\u5386\u53F2\u6700\u9AD8\u8BB0\u5F55 ";
                _this5.LabelScore.string = "\u7B2C<size=60>" + (_this5.Game_Script.TopicIndex + 1) + "</size><size=50>/</size><size=60>" + _this5.Game_Script.HighestRecordLast + "</size>\u9053";
                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Normal:
                var City = _this5.Game_Script.ConfigRegionDish[_this5.Game_Script.TopicDataId - 1].City;
                _this5.LabelRegion.string = "\u505A\u4E2A\u597D\u83DC\xB7" + City + "\u7701";
                _this5.PanelPlay.getChildByName("Endless").active = false;
                _this5.PanelPlay.getChildByName("Title").getChildByName("Label").getComponent(Label).string = "\u98DF\u5728" + City;
                _this5.LabelTarget.string = "\u731C\u51FA" + _this5.Game_Script.TopicCount + "\u9053\u7F8E\u98DF\u540D\u79F0\xB7";
                _this5.LabelScore.string = "\u7B2C" + (_this5.Game_Script.TopicIndex + 1) + "\u9053";
                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Tutorial:
                _this5.LabelRegion.string = "猜一猜";
                _this5.LabelTarget.string = "\u731C\u51FA" + _this5.Game_Script.TopicCount + "\u9053\u7F8E\u98DF\u540D\u79F0\xB7";
                break;

              default:
                break;
            }
            /**图片赋值 */


            var SpriteFrame = yield _this5.Resoure_Data.Load_SpriteFrame("SpriteFrame/Dish/" + _this5.Game_Script.TopicData[_this5.Game_Script.TopicIndex].Id);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(_this5.ImgDish, SpriteFrame);
            /**文本赋值 */

            var Result = [];
            Result.push(_this5.Game_Script.TopicData[_this5.Game_Script.TopicIndex].CorrectName);
            Result.push(_this5.Game_Script.TopicData[_this5.Game_Script.TopicIndex].WrongName);
            Result.push(_this5.Game_Script.TopicData[_this5.Game_Script.TopicIndex].WrongName);
            (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Sort_Random(Result);
            _this5.LabelOptionA.string = Result[0];
            _this5.LabelOptionB.string = Result[1];
            _this5.LabelOptionC.string = Result[2];
          })();
        }
        /**初始数据 */


        InitData() {
          return _asyncToGenerator(function* () {})();
        }
        /**游戏胜利 */


        GameVictory() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            _this6.Resoure_Data.Sound_Play("Audio/SoundCorrect");

            _this6.ImgCorrect.active = true;

            _this6.Game_Script.DishDataTemp.push(_this6.Game_Script.TopicData[_this6.Game_Script.TopicIndex]);

            _this6.Game_Script.BlockInputEvents.active = true;
            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);
            _this6.Game_Script.BlockInputEvents.active = false;
            _this6.Game_Script.TopicIndex++;
            /**游戏胜利 */

            if (_this6.Game_Script.TopicIndex == _this6.Game_Script.TopicCount) {
              /**胜利音效 */
              _this6.Resoure_Data.Sound_Play("Audio/Sound/Victory");

              switch (_this6.Resoure_Data.Game_Mode) {
                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Endless:
                  /**最高记录 */
                  _this6.Game_Script.HighestRecord = Math.max(_this6.Game_Script.TopicIndex, _this6.Game_Script.HighestRecord);
                  /**无尽星星数 */

                  _this6.Game_Script.DishScoreEndless = Math.max(Math.floor(_this6.Game_Script.TopicIndex / 10), _this6.Game_Script.DishScoreEndless);

                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Normal:
                  _this6.PanelPlay.active = false; // let LineHint = find("Settle/Line2", this.PanelVictory);
                  // let LineContinue = find("Settle/Line3", this.PanelVictory);
                  // LineHint.getChildByName("Win").active = !this.Game_Script.IsHint;
                  // LineHint.getChildByName("Lose").active = this.Game_Script.IsHint;
                  // LineContinue.getChildByName("Win").active = !this.Game_Script.IsContinue;
                  // LineContinue.getChildByName("Lose").active = this.Game_Script.IsContinue;
                  // this.Resoure_Data.Sound_Play("Audio/SoundWin");

                  _this6.PanelVictory.active = true;

                  _this6.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1");

                  _this6.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1");

                  find("WinBanner/Condition1/Correct", _this6.PanelVictory).active = !_this6.Game_Script.IsHint;
                  find("WinBanner/Condition1/Wrong", _this6.PanelVictory).active = _this6.Game_Script.IsHint;
                  find("WinBanner/Condition2/Correct", _this6.PanelVictory).active = !_this6.Game_Script.IsContinue;
                  find("WinBanner/Condition2/Wrong", _this6.PanelVictory).active = _this6.Game_Script.IsContinue;
                  find("WinBanner/Stars/StarC", _this6.PanelVictory).getComponent(Sprite).grayscale = _this6.Game_Script.IsHint;
                  find("WinBanner/Stars/StarR", _this6.PanelVictory).getComponent(Sprite).grayscale = _this6.Game_Script.IsContinue;
                  find("Light", _this6.PanelVictory).getComponent(Animation).play(); //星星数

                  var StarsLevel = 1;
                  StarsLevel += _this6.Game_Script.IsHint ? 0 : 1;
                  StarsLevel += _this6.Game_Script.IsContinue ? 0 : 1;
                  _this6.Game_Script.ConfigRegionDish[_this6.Game_Script.TopicDataId - 1].IsSuccess = true;
                  _this6.Game_Script.ConfigRegionDish[_this6.Game_Script.TopicDataId - 1].StarsLevel = StarsLevel; //完美通关

                  if (!_this6.Game_Script.IsContinue && !_this6.Game_Script.IsHint) {
                    //&& !this.IsHint
                    var KeyId = _this6.Game_Script.TopicDataId - 1;
                    var KeyDataV = "DishData" + _this6.Game_Script.ConfigRegionDish[KeyId].NamePinYin + "Victory";
                    _this6[KeyDataV] = [..._this6[KeyDataV], ..._this6.Game_Script.DishDataTemp];

                    _this6.Game_Script.SetDishData();
                  }
                  /**保存数据 */


                  _this6.Game_Script.DataSet();
                  /**刷新场景 */


                  _this6.Game_Script.UpdateScene();

                  break;

                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Tutorial:
                  _this6.Game_Script.PanelGameHide();

                  _this6.Game_Script.ViewNormal.active = false;
                  _this6.Game_Script.ViewMain.active = true;

                  _this6.Resoure_Data.Data_Set("First_Start", false);

                  break;

                default:
                  break;
              }
            } else {
              switch (_this6.Resoure_Data.Game_Mode) {
                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Endless:
                  /**最高记录 */
                  _this6.Game_Script.HighestRecord = Math.max(_this6.Game_Script.TopicIndex, _this6.Game_Script.HighestRecord);
                  /**无尽星星数 */

                  _this6.Game_Script.DishScoreEndless = Math.max(Math.floor(_this6.Game_Script.TopicIndex / 10), _this6.Game_Script.DishScoreEndless);
                  /**保存数据 */

                  _this6.Game_Script.DataSet();

                  break;

                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Normal:
                  break;

                case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Tutorial:
                  break;

                default:
                  break;
              }

              yield _this6.GameStart();
            }
          })();
        }
        /**游戏失败 */


        GameFailed() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            _this7.Resoure_Data.Sound_Play("Audio/SoundWrong");

            if (_this7.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            _this7.ImgWrong.active = true;
            _this7.Game_Script.BlockInputEvents.active = true;
            yield (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);
            _this7.Game_Script.BlockInputEvents.active = false;
            _this7.BtnTip.active = false;
            _this7.OptionA.active = false;
            _this7.OptionB.active = false;
            _this7.OptionC.active = false;
            _this7.PanelFail.active = true;

            switch (_this7.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
                /**最高记录 */
                _this7.Game_Script.HighestRecord = Math.max(_this7.Game_Script.TopicIndex, _this7.Game_Script.HighestRecord);
                /**无尽星星数 */

                _this7.Game_Script.DishScoreEndless = Math.max(Math.floor(_this7.Game_Script.TopicIndex / 10), _this7.Game_Script.DishScoreEndless);
                _this7.PanelSettle.active = true;
                _this7.PanelFail.active = false;
                _this7.PanelSettle.getChildByName("Window").getChildByName("Title").getComponent(Label).string = _this7.Game_Script.TopicIndexMin - _this7.Game_Script.TopicIndex <= 0 ? "\u8FDB\u5165\u9996\u9875\u623F\u5C4B,\u7B54\u5BF9\u9898\u76EE" + _this7.Game_Script.TopicIndex : "\u8FD8\u9700\u7B54\u5BF9" + (_this7.Game_Script.TopicIndexMin - _this7.Game_Script.TopicIndex) + "\u9898\u5373\u53EF\u8FDB\u5165\u9996\u9875\u623F\u5C4B";
                _this7.PanelSettle.getChildByName("Window").getChildByName("Number").getComponent(Label).string = _this7.Game_Script.PropNumUseMax - _this7.Game_Script.PropNumUse + "";
                _this7.PanelSettle.getChildByName("BtnResurAd").active = _this7.Game_Script.PropNumUseMax - _this7.Game_Script.PropNumUse == 0 ? false : true;
                _this7.PanelSettle.getChildByName("BtnBack").active = _this7.Game_Script.PropNumUseMax - _this7.Game_Script.PropNumUse == 0 ? true : false;

                if (_this7.Game_Script.PropNumUse == _this7.Game_Script.PropNumUseMax) {
                  console.log("\u95EF\u5173\u5931\u8D25,\u7B54\u5BF9\u9898\u76EE" + _this7.Game_Script.TopicIndex);
                }

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Normal:
                /**保存数据 */
                _this7.Game_Script.DataSet();
                /**刷新场景 */


                _this7.Game_Script.UpdateScene();

                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Tutorial:
                break;

              default:
                break;
            }
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=021da69e1b8503430a3981a180a24f2dcc3e323e.js.map