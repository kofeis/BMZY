System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, RichText, Sprite, Animation, PanelTemplate, PlatformApi, Tool_Animation, Tool_Event, Tool_Other, Tool_UI, Game_Mode, _dec, _class, _crd, ccclass, property, PanelDish;

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
        constructor(...args) {
          super(...args);

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
            this.BtnSetting = find("PanelUI/BtnSetting", this.node);
            this.BtnTip = find("PanelUI/BtnTip", this.node);
            this.PanelPlay = find("PanelPlay", this.node);
            this.OptionA = find("OptionA", this.PanelPlay);
            this.LabelOptionA = find("OptionA/Label", this.PanelPlay).getComponent(Label);
            this.OptionB = find("OptionB", this.PanelPlay);
            this.LabelOptionB = find("OptionB/Label", this.PanelPlay).getComponent(Label);
            this.OptionC = find("OptionC", this.PanelPlay);
            this.LabelOptionC = find("OptionC/Label", this.PanelPlay).getComponent(Label);
            this.LabelRegion = find("Title/LabelRegion", this.node).getComponent(Label);
            this.LabelTarget = find("Layout/LabelTarget", this.PanelPlay).getComponent(Label);
            this.LabelScore = find("Layout/LabelScore", this.PanelPlay).getComponent(RichText);
            this.ImgDish = find("ImgDish", this.PanelPlay);
            this.ImgCorrect = find("ImgCorrect", this.PanelPlay);
            this.ImgWrong = find("ImgWrong", this.PanelPlay);
            this.PanelVictory = find("PanelVictory", this.node);
            this.PanelFail = find("PanelFail", this.node);
            this.PanelSettle = find("PanelSettle", this.node);
            /**注册按钮事件 */

            await this.OnBtn(this.Game_Script.AnimSwitch);
            this.IsInit = true;
            resolve();
          });
        }
        /**注册按钮 */


        async OnBtn(AnimSwitch = false) {
          /**设置按钮 */
          const FunPGBtnSetting = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Game_Script.UpdatePanelSetting(true);
          };
          /**选项A按钮  */


          const FunPGOptionA = () => {
            if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
              return;
            }

            if (this.LabelOptionA.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
              this.GameVictory();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionA, color(0, 255, 0, 255));
            } else {
              this.GameFailed();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionA, color(255, 0, 0, 255));
            }
          };
          /**选项B按钮  */


          const FunPGOptionB = () => {
            if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
              return;
            }

            if (this.LabelOptionB.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
              this.GameVictory();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionB, color(0, 255, 0, 255));
            } else {
              this.GameFailed();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionB, color(255, 0, 0, 255));
            }
          };
          /**选项C按钮  */


          const FunPGOptionC = () => {
            if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
              return;
            }

            if (this.LabelOptionC.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
              this.GameVictory();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionC, color(0, 255, 0, 255));
            } else {
              this.GameFailed();
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionC, color(255, 0, 0, 255));
            }
          };
          /**提示按钮 */


          const FunPGBtnTip = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.Game_Script.PropNum > 0) {
              if (this.OptionA.active && this.OptionB.active && this.OptionC.active) {
                if (this.Resoure_Data.Game_Mode == (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                  error: Error()
                }), Game_Mode) : Game_Mode).Endless) {
                  if (this.Game_Script.PropNumUse == this.Game_Script.PropNumUseMax) {
                    this.Game_Script.OnMessage("道具使用上限");
                    return;
                  } else {
                    this.Game_Script.PropNumUse++;
                  }
                }

                this.Game_Script.IsHint = true;
                this.Game_Script.PropNum--;
                this.BtnTip.active = false;
                this.Game_Script.DataSet();
                this.UpdatePropUI();

                if (this.LabelOptionA.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
                  this.OptionA.active = true;
                } else {
                  this.OptionA.active = false;
                }

                if (this.LabelOptionB.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
                  this.OptionB.active = true;
                } else {
                  this.OptionB.active = false;
                }

                if (this.LabelOptionC.string == this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName) {
                  this.OptionC.active = true;
                } else {
                  this.OptionC.active = false;
                }
              }
            } else {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
                this.Game_Script.PropNum += 3;
                this.UpdatePropUI();
                this.Game_Script.DataSet();
              }, () => {
                this.Game_Script.PropNum += 0;
                this.UpdatePropUI();
                this.Game_Script.DataSet();
              });
            }
          };
          /**分享按钮 */


          const FunPGShare = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn"); // if (this.ShareTime == -1) {

            this.Game_Script.ShareTime = this.Resoure_Data.Get_Timestamp();
            var e = new Date().getTime();
            console.log("当前邀请时间", this.Game_Script.ShareTime, "当前时间", e);
            console.log("剩余有效时间", this.Game_Script.ShareTime + 2592e5 - e);
            this.Game_Script.DataSet(); // } else {
            // }

            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {
              this.Game_Script.GetProp(1, "分享成功");
              console.log("分享成功");
            }, () => {
              console.log("分享失败");
            });
          };
          /**再生广告按钮 */


          const FunPGResurAd = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showVideoAd(async () => {
              console.log("复活成功");
              this.Game_Script.IsContinue = true;
              (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                error: Error()
              }), Tool_Other) : Tool_Other).instance.Sort_Random(this.Game_Script.TopicData);

              if (this.Resoure_Data.Game_Mode == (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless) {
                this.Game_Script.PropNumUse++;
                console.log("复活次数", this.Game_Script.PropNumUse);
              }

              await this.GameStart();
            }, () => {
              console.log("复活失败");
              return;
            });
          };
          /**返回按钮 */


          const FunBack = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Game_Script.PanelGameHide();
            this.Game_Script.ViewHide();

            switch (this.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
                this.Game_Script.ViewNormal.active = false;
                this.Game_Script.ViewMain.active = true;

                if (this.Game_Script.TopicIndex >= 1) {
                  //this.TopicIndexMin
                  let Index = this.Game_Script.PlaceBarId - 1;
                  console.log(`参与盖楼,地区是${this.Game_Script.ConfigRegionDish[Index].City}`);
                  let DataRegionalRanking = await this.Resoure_Data.Fetch_Data(this.Game_Script.UrlRegionRanking);
                  console.log(DataRegionalRanking.RegionalRanking);
                  console.log("修改前的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
                  DataRegionalRanking.RegionalRanking[Index].Score += this.Game_Script.TopicIndex;
                  console.log("修改后的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
                  await this.Resoure_Data.Update_Data(this.Game_Script.UrlRegionRanking, DataRegionalRanking);
                }

                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Normal:
                this.Game_Script.ViewMain.active = false;
                this.Game_Script.ViewNormal.active = true;
                break;

              default:
                break;
            }
          };
          /**继续游戏按钮回调 */


          const BtnNextCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Game_Script.PanelGameHide();
            this.Game_Script.ViewHide();
            this.Game_Script.ViewMain.active = false;
            this.Game_Script.ViewNormal.active = true;
          };
          /**返回首页按钮回调 */


          const BtnBreakCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Game_Script.PanelGameHide();
            this.Game_Script.ViewHide();
            this.Game_Script.ViewNormal.active = false;
            this.Game_Script.ViewMain.active = true;
            this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Tutorial;
          };
          /**设置按钮 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnSetting.getChildByName("Icon"), FunPGBtnSetting);
          /**提示按钮 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.BtnTip, FunPGBtnTip);
          /**选项按钮 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.OptionA, FunPGOptionA);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.OptionB, FunPGOptionB);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.OptionC, FunPGOptionC);
          /**胜利界面按钮 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnNext"), BtnNextCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelVictory.getChildByName("BtnBreak"), BtnBreakCall);
          /**失败界面按钮 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnShare"), FunPGShare);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnResurAd"), FunPGResurAd);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelFail.getChildByName("BtnBack"), FunBack);
          /**结算面板 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnResurAd"), FunPGResurAd);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnBack"), FunBack);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PanelSettle.getChildByName("BtnClose"), FunBack);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.OptionA, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.OptionB, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.OptionC, AnimSwitch);
          /**提示按钮 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnTip, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.BtnSetting.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnShare"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnResurAd"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelFail.getChildByName("BtnBack"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnResurAd"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnBack"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PanelSettle.getChildByName("BtnClose"), AnimSwitch);
        }
        /**游戏开始 */


        async GameStart() {
          if (this.Game_Script == null) {
            return;
          }

          this.ImgCorrect.active = false;
          this.ImgWrong.active = false;
          this.PanelVictory.active = false;
          this.PanelFail.active = false;
          this.PanelSettle.active = false;
          this.PanelPlay.active = true;
          this.BtnTip.active = true;
          this.OptionA.active = true;
          this.OptionB.active = true;
          this.OptionC.active = true;
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionA);
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionB);
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Set_Color(this.OptionC);
          this.UpdatePropUI();
          /**更新提示 */

          switch (this.Resoure_Data.Game_Mode) {
            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Endless:
              this.LabelRegion.string = "做个好菜·无尽模式";
              this.PanelPlay.getChildByName("Endless").active = true;
              /**最高记录 */

              this.LabelTarget.string = `历史最高记录 `;
              this.LabelScore.string = `第<size=60>${this.Game_Script.TopicIndex + 1}</size><size=50>/</size><size=60>${this.Game_Script.HighestRecordLast}</size>道`;
              break;

            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Normal:
              let City = this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].City;
              this.LabelRegion.string = `做个好菜·${City}省`;
              this.PanelPlay.getChildByName("Endless").active = false;
              this.PanelPlay.getChildByName("Title").getChildByName("Label").getComponent(Label).string = `食在${City}`;
              this.LabelTarget.string = `猜出${this.Game_Script.TopicCount}道美食名称·`;
              this.LabelScore.string = `第${this.Game_Script.TopicIndex + 1}道`;
              break;

            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Tutorial:
              this.LabelRegion.string = "猜一猜";
              this.LabelTarget.string = `猜出${this.Game_Script.TopicCount}道美食名称·`;
              break;

            default:
              break;
          }
          /**图片赋值 */


          let SpriteFrame = await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Dish/" + this.Game_Script.TopicData[this.Game_Script.TopicIndex].Id);
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Set_SpriteFrame(this.ImgDish, SpriteFrame);
          /**文本赋值 */

          let Result = [];
          Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].CorrectName);
          Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].WrongName);
          Result.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex].WrongName);
          (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Sort_Random(Result);
          this.LabelOptionA.string = Result[0];
          this.LabelOptionB.string = Result[1];
          this.LabelOptionC.string = Result[2];
        }
        /**初始数据 */


        async InitData() {}
        /**游戏胜利 */


        async GameVictory() {
          this.Resoure_Data.Sound_Play("Audio/SoundCorrect");
          this.ImgCorrect.active = true;
          this.Game_Script.DishDataTemp.push(this.Game_Script.TopicData[this.Game_Script.TopicIndex]);
          this.Game_Script.BlockInputEvents.active = true;
          await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);
          this.Game_Script.BlockInputEvents.active = false;
          this.Game_Script.TopicIndex++;
          /**游戏胜利 */

          if (this.Game_Script.TopicIndex == this.Game_Script.TopicCount) {
            /**胜利音效 */
            this.Resoure_Data.Sound_Play("Audio/Sound/Victory");

            switch (this.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
                /**最高记录 */
                this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
                /**无尽星星数 */

                this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Normal:
                this.PanelPlay.active = false; // let LineHint = find("Settle/Line2", this.PanelVictory);
                // let LineContinue = find("Settle/Line3", this.PanelVictory);
                // LineHint.getChildByName("Win").active = !this.Game_Script.IsHint;
                // LineHint.getChildByName("Lose").active = this.Game_Script.IsHint;
                // LineContinue.getChildByName("Win").active = !this.Game_Script.IsContinue;
                // LineContinue.getChildByName("Lose").active = this.Game_Script.IsContinue;
                // this.Resoure_Data.Sound_Play("Audio/SoundWin");

                this.PanelVictory.active = true;
                this.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1");
                this.PanelVictory.getChildByName("WinBanner").getChildByName("Condition1");
                find("WinBanner/Condition1/Correct", this.PanelVictory).active = !this.Game_Script.IsHint;
                find("WinBanner/Condition1/Wrong", this.PanelVictory).active = this.Game_Script.IsHint;
                find("WinBanner/Condition2/Correct", this.PanelVictory).active = !this.Game_Script.IsContinue;
                find("WinBanner/Condition2/Wrong", this.PanelVictory).active = this.Game_Script.IsContinue;
                find("WinBanner/Stars/StarC", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsHint;
                find("WinBanner/Stars/StarR", this.PanelVictory).getComponent(Sprite).grayscale = this.Game_Script.IsContinue;
                find("Light", this.PanelVictory).getComponent(Animation).play(); //星星数

                let StarsLevel = 1;
                StarsLevel += this.Game_Script.IsHint ? 0 : 1;
                StarsLevel += this.Game_Script.IsContinue ? 0 : 1;
                this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].IsSuccess = true;
                this.Game_Script.ConfigRegionDish[this.Game_Script.TopicDataId - 1].StarsLevel = StarsLevel; //完美通关

                if (!this.Game_Script.IsContinue && !this.Game_Script.IsHint) {
                  //&& !this.IsHint
                  const KeyId = this.Game_Script.TopicDataId - 1;
                  const KeyDataV = `DishData${this.Game_Script.ConfigRegionDish[KeyId].NamePinYin}Victory`;
                  this[KeyDataV] = [...this[KeyDataV], ...this.Game_Script.DishDataTemp];
                  this.Game_Script.SetDishData();
                }
                /**保存数据 */


                this.Game_Script.DataSet();
                /**刷新场景 */

                this.Game_Script.UpdateScene();
                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Tutorial:
                this.Game_Script.PanelGameHide();
                this.Game_Script.ViewNormal.active = false;
                this.Game_Script.ViewMain.active = true;
                this.Resoure_Data.Data_Set("First_Start", false);
                break;

              default:
                break;
            }
          } else {
            switch (this.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
                /**最高记录 */
                this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
                /**无尽星星数 */

                this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);
                /**保存数据 */

                this.Game_Script.DataSet();
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

            await this.GameStart();
          }
        }
        /**游戏失败 */


        async GameFailed() {
          this.Resoure_Data.Sound_Play("Audio/SoundWrong");

          if (this.Resoure_Data.Vibration_Switch_Get()) {
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.vibrateShort();
          }

          this.ImgWrong.active = true;
          this.Game_Script.BlockInputEvents.active = true;
          await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.5);
          this.Game_Script.BlockInputEvents.active = false;
          this.BtnTip.active = false;
          this.OptionA.active = false;
          this.OptionB.active = false;
          this.OptionC.active = false;
          this.PanelFail.active = true;

          switch (this.Resoure_Data.Game_Mode) {
            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Endless:
              /**最高记录 */
              this.Game_Script.HighestRecord = Math.max(this.Game_Script.TopicIndex, this.Game_Script.HighestRecord);
              /**无尽星星数 */

              this.Game_Script.DishScoreEndless = Math.max(Math.floor(this.Game_Script.TopicIndex / 10), this.Game_Script.DishScoreEndless);
              this.PanelSettle.active = true;
              this.PanelFail.active = false;
              this.PanelSettle.getChildByName("Window").getChildByName("Title").getComponent(Label).string = this.Game_Script.TopicIndexMin - this.Game_Script.TopicIndex <= 0 ? `进入首页房屋,答对题目${this.Game_Script.TopicIndex}` : `还需答对${this.Game_Script.TopicIndexMin - this.Game_Script.TopicIndex}题即可进入首页房屋`;
              this.PanelSettle.getChildByName("Window").getChildByName("Number").getComponent(Label).string = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse + "";
              this.PanelSettle.getChildByName("BtnResurAd").active = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse == 0 ? false : true;
              this.PanelSettle.getChildByName("BtnBack").active = this.Game_Script.PropNumUseMax - this.Game_Script.PropNumUse == 0 ? true : false;

              if (this.Game_Script.PropNumUse == this.Game_Script.PropNumUseMax) {
                console.log(`闯关失败,答对题目${this.Game_Script.TopicIndex}`);
              }

            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Normal:
              /**保存数据 */
              this.Game_Script.DataSet();
              /**刷新场景 */

              this.Game_Script.UpdateScene();
              break;

            case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Tutorial:
              break;

            default:
              break;
          }
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=021da69e1b8503430a3981a180a24f2dcc3e323e.js.map