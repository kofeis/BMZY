System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Node, v3, UIOpacity, tween, sys, ScrollView, ConfigShareState, ConfigSidebarState, Game_Script_Template, Game_Mode, Tool_Event, Tool_Other, Tool_Animation, Tool_UI, PlatformApi, HttpRequest, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Game_Script;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConfigShareState(extras) {
    _reporterNs.report("ConfigShareState", "./Game_Script_Template", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigSidebarState(extras) {
    _reporterNs.report("ConfigSidebarState", "./Game_Script_Template", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame_Script_Template(extras) {
    _reporterNs.report("Game_Script_Template", "./Game_Script_Template", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame_Mode(extras) {
    _reporterNs.report("Game_Mode", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../Tool/Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../Tool/Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "../Tool/Tool_Animation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "../Tool/Tool_UI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../Other/SDK/PlatformApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../Other/SDK/HttpRequest", _context.meta, extras);
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
      Node = _cc.Node;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
      sys = _cc.sys;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ConfigShareState = _unresolved_2.ConfigShareState;
      ConfigSidebarState = _unresolved_2.ConfigSidebarState;
      Game_Script_Template = _unresolved_2.Game_Script_Template;
    }, function (_unresolved_3) {
      Game_Mode = _unresolved_3.Game_Mode;
    }, function (_unresolved_4) {
      Tool_Event = _unresolved_4.Tool_Event;
    }, function (_unresolved_5) {
      Tool_Other = _unresolved_5.Tool_Other;
    }, function (_unresolved_6) {
      Tool_Animation = _unresolved_6.Tool_Animation;
    }, function (_unresolved_7) {
      Tool_UI = _unresolved_7.Tool_UI;
    }, function (_unresolved_8) {
      PlatformApi = _unresolved_8.PlatformApi;
    }, function (_unresolved_9) {
      HttpRequest = _unresolved_9.HttpRequest;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec2d7FHFatK7ZtB4g+qnkNu", "Game_Script", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'v3', 'Animation', 'game', 'director', 'RigidBody2D', 'isValid', 'BoxCollider2D', 'math', 'v2', 'UIOpacity', 'tween', 'animation', 'log', 'Layout', 'sys', 'ScrollView', 'Color', 'BlockInputEvents', 'Button', 'Vec3', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game_Script", Game_Script = (_dec = ccclass('Game_Script'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = class Game_Script extends (_crd && Game_Script_Template === void 0 ? (_reportPossibleCrUseOfGame_Script_Template({
        error: Error()
      }), Game_Script_Template) : Game_Script_Template) {
        constructor() {
          super();
          this.IsMove = false;

          /**省份数 */
          this.NumberOfProvinces = 34;

          /**是否提示 */
          this.IsHint = false;

          /**是否复活 */
          this.IsContinue = false;
          //--------------------------------------------------------------------------------------------

          /**主界面视图 */
          this.ViewMain = null;
          this.VM_Content = null;
          this.VM_Map = null;
          this.GamePlay = null;

          /**成语按钮 */
          this.VM_BtnIdiom = null;

          /**影视按钮 */
          this.VM_BtnFilm = null;

          /**找演员按钮 */
          this.VM_BtnFindActors = null;

          /**无尽按钮 */
          this.VM_BtnInfinite = null;

          /**省份按钮 */
          this.VM_BtnStart = null;

          /**设置按钮 */
          this.VM_BtnSetting = null;

          /**翻页按钮 */
          this.VM_BtnFlip = null;

          /**足迹按钮 */
          this.VM_FootPrints = null;

          /**侧边栏按钮 */
          this.VM_BtnSidebar = null;

          /**排行榜按钮 */
          this.VM_BtnRank = null;

          /**邀请按钮 */
          this.VM_BtnInvite = null;

          /**地区按钮 */
          this.VM_BtnRegion = null;

          /**位置按钮顶部 */
          this.VM_BtnSeatTop = null;

          /**位置按钮当前 */
          this.VM_BtnSeatCurrent = null;

          /**更多按钮 */
          this.VM_BtnMore = null;
          //--------------------------------------------------------------------------------------------

          /**正常模式视图 */
          this.ViewNormal = null;
          this.VN_Content = null;
          this.VN_Map = null;

          /**设置按钮 */
          this.VN_BtnSetting = null;
          //--------------------------------------------------------------------------------------------

          /**更多主题面板 */
          this.PanelMore = null;

          /**设置按钮 */
          this.PM_BtnSetting = null;
          //--------------------------------------------------------------------------------------------

          /**设置面板 */
          this.PanelSetting = null;

          /**音乐开关按钮 */
          this.PS_MusicSwitch = null;

          /**声音开关按钮 */
          this.PS_SoundSwitch = null;

          /**震动开关按钮 */
          this.PS_VibrateSwitch = null;

          /**返回游戏 */
          this.PS_BtnBack = null;

          /**退出游戏 */
          this.PS_BtnExit = null;

          /**关闭按钮 */
          this.PS_BtnClose = null;
          //--------------------------------------------------------------------------------------------

          /**道具面板 */
          this.PanelProp = null;

          /**标题文本 */
          this.PP_LabeTitle = null;

          /**数量文本 */
          this.PP_LabeNumber = null;

          /**关闭按钮 */
          this.PP_BtnClose = null;

          /**确定按钮 */
          this.PP_BtnOk = null;
          //--------------------------------------------------------------------------------------------

          /**地区面板 */
          this.PanelRegionl = null;

          /**地区父节点 */
          this.RegionlParent = null;

          /**关闭按钮 */
          this.PR_BtnClose = null;

          /**确定按钮 */
          this.PR_BtnOk = null;

          /**上一次地区 */
          this.PR_RegionlLast = null;

          /**当前地区 */
          this.PR_Regionl = null;
          //--------------------------------------------------------------------------------------------

          /**游戏面板 */
          this.PanelGame = null;
          // /**主要面板 */
          // PG_PanelPlay: Node = null;
          // /**地区文本 */
          // PG_LabelRegion: Label = null;
          // /**目标文本 */
          // PG_LabelTarget: Label = null;
          // /**分数文本 */
          // PG_LabelScore: RichText = null;
          // /**菜品图片 */
          // PG_ImgDish: Node = null;
          // /**正确图片 */
          // PG_ImgCorrect: Node = null;
          // /**错误图片 */
          // PG_ImgWrong: Node = null;
          // /**选项A */
          // PG_OptionA: Node = null;
          // /**选项A文本 */
          // PG_LabelOptionA: Label = null;
          // /**选项B */
          // PG_OptionB: Node = null;
          // /**选项B文本 */
          // PG_LabelOptionB: Label = null;
          // /**选项C */
          // PG_OptionC: Node = null;
          // /**选项C文本 */
          // PG_LabelOptionC: Label = null;
          // Hand: Node = null;
          // /**提示按钮 */
          // PG_BtnTip: Node = null;
          // // /**道具 */
          // // PG_BtnTool: Node = null;
          // // /**道具文本 */
          // // PG_LabelTool: Label = null;
          // // /**激励道具 */
          // // PG_BtnToolAd: Node = null;
          // // /**激励道具文本 */
          // // PG_LabelToolAd: Label = null;
          // /**设置按钮 */
          // PG_BtnSetting: Node = null;
          // /**胜利面板 */
          // PG_PanelWin: Node = null;
          // /**失败面板 */
          // PG_PanelFail: Node = null;
          // /**结算面板 */
          // PG_PanelSettle: Node = null;
          //--------------------------------------------------------------------------------------------

          /**成语面板 */
          this.PanelIdiom = null;
          //--------------------------------------------------------------------------------------------

          /**影视面板 */
          this.PanelFilm = null;
          //--------------------------------------------------------------------------------------------

          /**找演员面板 */
          this.PanelFindActor = null;
          //--------------------------------------------------------------------------------------------

          /**排行榜面板 */
          this.PanelRank = null;

          /**关闭按钮 */
          this.PRK_BtnClose = null;

          /**好友排行 */
          this.PRK_RankingFriends = null;

          /**世界排行 */
          this.PRK_RankingWorld = null;

          /**好友排行按钮 */
          this.PRK_BtnRankingFriends = null;

          /**世界排行按钮 */
          this.PRK_BtnRankingWorld = null;

          /**好友排行数 */
          this.RankNumberF = 20;

          /**世界排行数 */
          this.RankNumberW = 100;
          //--------------------------------------------------------------------------------------------

          /**足迹面板 */
          this.PanelFootPrints = null;

          /**关闭按钮 */
          this.PFP_BtnClose = null;
          //--------------------------------------------------------------------------------------------

          /**侧边栏面板 */
          this.PanelSidebar = null;

          /**确定按钮 */
          this.PD_BtnOk = null;

          /**关闭按钮 */
          this.PD_BtnClose = null;

          /**获取按钮 */
          this.PD_BtnGet = null;
          //--------------------------------------------------------------------------------------------

          /**邀请面板 */
          this.PanelInvite = null;

          /**关闭按钮 */
          this.PI_BtnClose = null;

          /**邀请按钮 */
          this.PI_BtnInvite = null;

          /**获取按钮 */
          this.PI_BtnGet = null;

          /**刷新按钮 */
          this.PI_BtnUpdate = null;

          //--------------------------------------------------------------------------------------------
          _initializerDefineProperty(this, "Message", _descriptor, this);

          _initializerDefineProperty(this, "MessageLabel", _descriptor2, this);

          /**动画开关 */
          this.AnimSwitch = false;

          /**要显示的区域节点 */
          this.RegionRankingShowNodes = [];

          /**要隐藏的区域节点 */
          this.RegionRankingHideNodes = [];

          /**正在显示的区域节点 */
          this.ShowIngNodes = [];
        }

        onLoad() {
          super.onLoad();
        }

        async start() {
          super.start();
          this.IsNewDay();
          this.BlockInputEvents.active = true;
          await this.SceneLoad();
          this.BlockInputEvents.active = false;
          this.IsSharePlayer();
        }
        /**是否从分享链接进入游戏 */


        IsSharePlayer() {
          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            let LaunchOptionsSync = {
              scene: "1089",
              query: {
                openId: this.openIdTest
              }
            }; //PlatformApi.instance.getLaunchOptionsSync();

            console.log("获取进入场景", LaunchOptionsSync);

            if (LaunchOptionsSync && LaunchOptionsSync.query.openId && "" != LaunchOptionsSync.query.openId) {
              console.log("从分享链接进入");
              let TopenIds = [];

              for (let i = 0; i < 10; i++) {
                TopenIds[i] = "openIdTest" + (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(10000, 99999);
              }

              let TopenId = TopenIds[(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                error: Error()
              }), Tool_Other) : Tool_Other).instance.Get_Random_Int(0, TopenIds.length - 1)];
              console.log(TopenId);
              (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
                error: Error()
              }), HttpRequest) : HttpRequest).instance.request("zdydc/friend/acceptInvitation", {
                openId: LaunchOptionsSync.query.openId,
                //邀请者的openId
                receiveId: TopenId //自己的openId this.openId

              }, function (t) {
                console.log("邀请上报结果", t);
              }, function (e) {
                console.log("失败信息", e);
              });
            } else {
              console.log("不是从分享链接进入");
            }
          }
        }

        /**获取分享礼包 */
        GetShareReward() {
          var e = new Date().getTime();
          console.log("当前邀请时间", this.ShareTime, "当前时间", e);
          console.log("剩余有效时间", this.ShareTime + 2592e5 - e); // if (-1 != $z1PlayerDataMager._p_data._data.share_time && $z1PlayerDataMager._p_data._data.share_time + 2592e5 >= e) {

          (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
            error: Error()
          }), HttpRequest) : HttpRequest).instance.request("zdydc/friend/getInviteCount", {
            openId: this.openIdTest //this.openId

          }, e => {
            console.log("getInviteCount查询结果", e, e.invitedCount, this.ShareRewardCount); //this.shareReward

            this.InvitedCount = e.invitedCount;
            console.log("领取次数", this.ShareRewardCount, "/", this.InvitedCount);
            super.DataSet();

            if (this.ShareRewardCount < this.InvitedCount) {
              console.log("有可领取邀请礼包");
              this.ShareRewardState = (_crd && ConfigShareState === void 0 ? (_reportPossibleCrUseOfConfigShareState({
                error: Error()
              }), ConfigShareState) : ConfigShareState).Get;
            } else {
              console.log("无可领取邀请礼包");
              this.ShareRewardState = (_crd && ConfigShareState === void 0 ? (_reportPossibleCrUseOfConfigShareState({
                error: Error()
              }), ConfigShareState) : ConfigShareState).Share;
            }
            /**刷新邀请面板 */


            this.UpdatePanelInvite();
          }, e => {
            console.log("request失败,无可领取邀请礼包");
            this.ShareRewardState = (_crd && ConfigShareState === void 0 ? (_reportPossibleCrUseOfConfigShareState({
              error: Error()
            }), ConfigShareState) : ConfigShareState).Share;
            /**刷新邀请面板 */

            this.UpdatePanelInvite();
          });
        }

        /**是否是新的一天 */
        IsNewDay() {
          let DateCurrent = this.Resoure_Data.Get_Current_Date();
          console.log(DateCurrent, this.DateLast);
          let GetIsNewDay = DateCurrent !== this.DateLast;

          if (GetIsNewDay) {
            this.DateLast = DateCurrent;
            this.SidebarSwitch = true;
            super.DataSet();
          }

          console.log("是否是新的一天:", GetIsNewDay);
          console.log("是否可以再次领取奖励:", this.SidebarSwitch);

          if (this.SidebarSwitch) {
            this.SidebarState = (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Ok;
            let LaunchOptionsSync = {
              scene: "1089",
              query: {
                openId: "aduyegwauuia"
              }
            }; // PlatformApi.instance.getLaunchOptionsSync();

            console.log("getLaunchOptionsSync: ", LaunchOptionsSync);
            this.CheckSidebarReward(LaunchOptionsSync.scene);
          }
        }
        /**查看侧边栏奖励 */


        CheckSidebarReward(Scene_Value) {
          if (Scene_Value === undefined) {
            console.log("Scene_Value:", Scene_Value);
            return;
          }

          if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
            error: Error()
          }), ConfigSidebarState) : ConfigSidebarState).Ok) {
            // if (window.wx) {
            if ("1089" == Scene_Value || "1271" == Scene_Value || "1273" == Scene_Value) {
              this.SidebarSwitch = false;
              this.SidebarState = (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
                error: Error()
              }), ConfigSidebarState) : ConfigSidebarState).Get;
              super.DataSet();
              console.log("SidebarState:", this.SidebarState); // }
            }
          }
        }
        /**注册主界面 */


        OnViewMain(AnimSwitch = false) {
          /**成语大王 */
          const FunVMIdiom = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelIdiom == null) {
              /**加载成语面板 */
              await this.LoadPanelIdiom();
            }

            this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Idiom;
            this.PanelIdiom.active = true;
          };
          /**影视按钮 */


          const FunVMFilm = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelFilm == null) {
              /**加载影视面板 */
              await this.LoadPanelFilm();
            }

            this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Film;
            this.PanelFilm.active = true;
          };
          /**无尽按钮 */


          const FunVMBtnInfinite = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.showVideoAd(async () => {
              this.Resoure_Data.Sound_Play("Audio/SoundBtn");
              this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless;
              this.ViewMain.active = false;
              this.ViewNormal.active = false;
              this.TopicData = [...this.DishDataAll];
              this.DishDataTemp = [];
              /**打乱顺序 */

              (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                error: Error()
              }), Tool_Other) : Tool_Other).instance.Sort_Random(this.TopicData);
              /**初始数据 */

              this.TopicCount = this.TopicData.length;
              this.TopicIndex = 0;
              this.IsHint = false;
              this.IsContinue = false;
              this.HighestRecordLast = this.HighestRecord;
              this.PropNumUse = 0;
              this.PanelGameShow();
            }, () => {
              return;
            });
          };
          /**开始按钮 */


          const FunVMBtnStart = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.ViewMain.active = false;
            this.ViewNormal.active = true;
          };
          /**找演员按钮 */


          const FunVMFindActors = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelFindActor == null) {
              /**加载找演员面板 */
              await this.LoadPanelFindActor();
            }

            this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Film;
            this.PanelFindActor.active = true; // this.FilmNext();
          };
          /**设置按钮 */


          const FunVMBtnSetting = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.UpdatePanelSetting();
          };

          const Component_Label = this.VM_BtnFlip.getChildByName("Pages").getComponent(Label);
          /**翻页按钮 */

          const FunVMBtnFlipL = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            let Page = Number(Component_Label.string.slice(0, 1));
            let PageAll = Number(Component_Label.string.slice(-1));

            if (Page > 1) {
              Component_Label.string = `${--Page}/${PageAll}`;
              let Pos = v3(-this.GamePlay.children[Page - 1].position.x, 0);
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.GamePlay, Pos, 0.4, null, "backOut");
            }
          };
          /**翻页按钮 */


          const FunVMBtnFlipR = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            let Page = Number(Component_Label.string.slice(0, 1));
            let PageAll = this.GamePlay.children.length;

            if (Page < PageAll) {
              Component_Label.string = `${++Page}/${PageAll}`;
              let Pos = v3(-this.GamePlay.children[Page - 1].position.x, 0);
              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.GamePlay, Pos, 0.4, null, "backOut");
            }
          };
          /**地区按钮 */


          const FunVMBtnRegion = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelRegionl == null) {
              /**加载地区面板 */
              await this.LoadPanelRegionl();
            }
            /**初始化数据 */


            super.DataGet();
            this.PR_Regionl = this.RegionlParent.getChildByName(this.PlaceBarId + "");
            this.PR_Regionl.getChildByName("ChosenImg").active = true;
            /**上一次地区 */

            if (this.PR_RegionlLast != null && this.PR_RegionlLast != this.PR_Regionl) {
              this.PR_RegionlLast.getChildByName("ChosenImg").active = false;
            }

            this.PR_RegionlLast = this.PR_Regionl;
            /**打开地区面板 */

            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Get(this.PanelRegionl);
          };
          /**顶部位置按钮 */


          const FunVMBtnSeatTop = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.VM_BtnSeatTop.active = false;
            this.VM_BtnSeatCurrent.active = true;
            this.VM_Content.parent.parent.getComponent(ScrollView).stopAutoScroll();
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.VM_Content);
            let PosTarget = v3(0, 0, 0);
            let Distance = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Distance(PosTarget, this.VM_Content.position);

            if (Distance > (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Height_Visible()) {
              this.PanelRegionRankingHide();
            }

            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.VM_Content, PosTarget, 0.5, () => {
              if (Distance > (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Height_Visible()) {
                this.PanelRegionRankingShow(1);
              }
            }, "smooth");
          };
          /**当前位置按钮 */


          const FunVMBtnSeatCurrent = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.VM_BtnSeatCurrent.active = false;
            this.VM_BtnSeatTop.active = true;
            this.VM_Content.parent.parent.getComponent(ScrollView).stopAutoScroll();
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Target(this.VM_Content);
            let PosTarget = this.VM_Content.getChildByName(this.PlaceBarId + "").position;
            PosTarget = v3(PosTarget.x, -PosTarget.y - 825, PosTarget.z);
            let Distance = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Distance(PosTarget, this.VM_Content.position);

            if (Distance > (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Height_Visible()) {
              this.PanelRegionRankingHide();
            }

            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Animation_Node_Move_Time(this.VM_Content, PosTarget, 0.5, () => {
              if (Distance > (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Get_Height_Visible()) {
                this.PanelRegionRankingShow(1);
              }
            }, 'smooth');
          };
          /**更多按钮 */


          const FunVMBtnMore = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelMore == null) {
              /**加载更多主题界面 */
              await this.LoadPanelMore();
            }

            this.PanelMore.active = true;
          };
          /**排行榜按钮 */


          const FunVMBtnRank = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelRank == null) {
              /**加载排行榜面板 */
              await this.LoadPanelRank();
            }

            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Get(this.PanelRank);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingWorld, color(155, 155, 155, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingFriends, color(255, 255, 255, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingWorld, 0);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingFriends, 255);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Off(this.PRK_RankingWorld, ScrollView);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_On(this.PRK_RankingFriends, ScrollView);
          };
          /**足迹按钮 */


          const FunVMFootPrints = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelFootPrints.active = true;
          };
          /**侧边栏按钮 */


          const FunVMSidebar = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelSidebar == null) {
              /**加载侧边栏面板 */
              await this.LoadPanelSidebar();
            }
            /**刷新侧边栏面板 */


            this.UpdatePanelSidebar();
            console.log("刷新侧边栏面板");
            this.PanelSidebar.active = true;
            let Window = this.PanelSidebar.getChildByName("Window");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(Window);
          };
          /**邀请按钮 */


          const FunVMInvite = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelInvite == null) {
              /**加载邀请面板 */
              await this.LoadPanelInvite();
            }
            /**获取分享礼包 */


            this.GetShareReward();
            this.PanelInvite.active = true;
            let Window = this.PanelInvite.getChildByName("Window");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(Window);
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnIdiom.getChildByName("Icon"), FunVMIdiom);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnFilm.getChildByName("Icon"), FunVMFilm);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnFindActors.getChildByName("Icon"), FunVMFindActors);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnInfinite.getChildByName("Icon"), FunVMBtnInfinite);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnStart.getChildByName("Icon"), FunVMBtnStart);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnSetting.getChildByName("Icon"), FunVMBtnSetting);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnFlip.getChildByName("Btn_L"), FunVMBtnFlipL);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnFlip.getChildByName("Btn_R"), FunVMBtnFlipR);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_FootPrints.getChildByName("Icon"), FunVMFootPrints);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnRegion.getChildByName("Icon"), FunVMBtnRegion);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnSeatTop, FunVMBtnSeatTop);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnSeatCurrent, FunVMBtnSeatCurrent);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnMore.getChildByName("Icon"), FunVMBtnMore);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnRank.getChildByName("Icon"), FunVMBtnRank);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnSidebar.getChildByName("Icon"), FunVMSidebar);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnInvite.getChildByName("Icon"), FunVMInvite);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnIdiom.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnFilm.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnFindActors.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnInfinite.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnStart.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnSetting.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_FootPrints.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnRegion.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnSeatTop, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnSeatCurrent, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnMore.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnRank.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnSidebar.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnInvite.getChildByName("Icon"), AnimSwitch);

          const FunRegionShow = async () => {
            this.PanelRegionRankingShow(2); // console.log(this.VM_Content.position);
          };

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_Content, FunRegionShow);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_CANCEL(this.VM_Content, FunRegionShow);
        }
        /**注册正常模式界面 */


        OnViewNormal(AnimSwitch = false) {
          /**设置按钮 */
          const FunVNBtnSetting = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.UpdatePanelSetting();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VN_BtnSetting.getChildByName("Icon"), FunVNBtnSetting);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VN_BtnSetting.getChildByName("Icon"), AnimSwitch);
        }
        /**注册更多主题界面 */


        OnPanelMore(AnimSwitch = false) {
          /**设置按钮 */
          const FunPMBtnSetting = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.UpdatePanelSetting(true);
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PM_BtnSetting.getChildByName("Icon"), FunPMBtnSetting);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PM_BtnSetting.getChildByName("Icon"), AnimSwitch);
          let Window = find("Window", this.PanelMore);

          for (let i = 0; i < Window.children.length; i++) {
            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(Window.children[i].getChildByName("Icon"), async () => {
              switch (Window.children[i].name) {
                case "ThemeIdiom":
                  this.Resoure_Data.Sound_Play("Audio/SoundBtn");

                  if (this.PanelIdiom == null) {
                    /**加载成语面板 */
                    await this.LoadPanelIdiom();
                  }

                  this.PanelIdiom.active = true; // this.IdiomNext();

                  break;

                default:
                  break;
              }
            });
          }
        }
        /**注册游戏面板 */


        OnPanelGame(AnimSwitch = false) {// /**选项A按钮  */
          // const FunPGOptionA = () => {
          //     if (this.TopicIndex == this.TopicCount) {
          //         return;
          //     }
          //     if (this.PG_LabelOptionA.string == this.TopicData[this.TopicIndex].CorrectName) {
          //         this.GameVictory();
          //         Tool_UI.instance.Set_Color(this.PG_OptionA, color(0, 255, 0, 255));
          //     } else {
          //         this.GameFailed();
          //         Tool_UI.instance.Set_Color(this.PG_OptionA, color(255, 0, 0, 255));
          //     }
          // }
          // /**选项B按钮  */
          // const FunPGOptionB = () => {
          //     if (this.TopicIndex == this.TopicCount) {
          //         return;
          //     }
          //     if (this.PG_LabelOptionB.string == this.TopicData[this.TopicIndex].CorrectName) {
          //         this.GameVictory();
          //         Tool_UI.instance.Set_Color(this.PG_OptionB, color(0, 255, 0, 255));
          //     } else {
          //         this.GameFailed();
          //         Tool_UI.instance.Set_Color(this.PG_OptionB, color(255, 0, 0, 255));
          //     }
          // }
          // /**选项C按钮  */
          // const FunPGOptionC = () => {
          //     if (this.TopicIndex == this.TopicCount) {
          //         return;
          //     }
          //     if (this.PG_LabelOptionC.string == this.TopicData[this.TopicIndex].CorrectName) {
          //         this.GameVictory();
          //         Tool_UI.instance.Set_Color(this.PG_OptionC, color(0, 255, 0, 255));
          //     } else {
          //         this.GameFailed();
          //         Tool_UI.instance.Set_Color(this.PG_OptionC, color(255, 0, 0, 255));
          //     }
          // }
          // /**提示按钮 */
          // const FunPGBtnTip = () => {
          //     this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          //     if (this.PropNum > 0) {
          //         if (this.PG_OptionA.active && this.PG_OptionB.active && this.PG_OptionC.active) {
          //             if (this.Resoure_Data.Game_Mode == Game_Mode.Endless) {
          //                 if (this.PropNumUse == this.PropNumUseMax) {
          //                     this.OnMessage("道具使用上限");
          //                     return;
          //                 } else {
          //                     this.PropNumUse++;
          //                 }
          //             }
          //             this.IsHint = true;
          //             this.PropNum--;
          //             this.PG_BtnTip.active = false;
          //             super.DataSet();
          //             this.UpdatePropUI();
          //             this.Hand.active = false;
          //             console.log(this.PG_LabelOptionA.string == this.TopicData[this.TopicIndex].CorrectName);
          //             console.log(this.PG_LabelOptionB.string == this.TopicData[this.TopicIndex].CorrectName);
          //             console.log(this.PG_LabelOptionC.string == this.TopicData[this.TopicIndex].CorrectName);
          //             if (this.PG_LabelOptionA.string == this.TopicData[this.TopicIndex].CorrectName) {
          //                 this.PG_OptionA.active = true;
          //             } else {
          //                 this.PG_OptionA.active = false;
          //             }
          //             if (this.PG_LabelOptionB.string == this.TopicData[this.TopicIndex].CorrectName) {
          //                 this.PG_OptionB.active = true;
          //             } else {
          //                 this.PG_OptionB.active = false;
          //             }
          //             if (this.PG_LabelOptionC.string == this.TopicData[this.TopicIndex].CorrectName) {
          //                 this.PG_OptionC.active = true;
          //             } else {
          //                 this.PG_OptionC.active = false;
          //             }
          //         }
          //     } else {
          //         PlatformApi.instance.showVideoAd(() => {
          //             this.PropNum += 3;
          //             this.UpdatePropUI();
          //             super.DataSet();
          //         }, () => {
          //             this.PropNum += 0;
          //             this.UpdatePropUI();
          //             super.DataSet();
          //         });
          //     }
          // }
          // /**设置按钮 */
          // const FunPGBtnSetting = () => {
          //     this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          //     this.UpdatePanelSetting(true);
          // }
          // /**分享按钮 */
          // const FunPGShare = async () => {
          //     this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          //     // if (this.ShareTime == -1) {
          //     this.ShareTime = this.Resoure_Data.Get_Timestamp();
          //     var e = new Date().getTime();
          //     console.log("当前邀请时间", this.ShareTime, "当前时间", e);
          //     console.log("剩余有效时间", this.ShareTime + 2592e5 - e);
          //     super.DataSet();
          //     // } else {
          //     // }
          //     PlatformApi.instance.shareAppMessage(() => {
          //         this.GetProp(1, "分享成功");
          //         console.log("分享成功");
          //     }, () => {
          //         console.log("分享失败");
          //     });
          // }
          // /**再生广告按钮 */
          // const FunPGResurAd = () => {
          //     this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          //     PlatformApi.instance.showVideoAd(async () => {
          //         console.log("复活成功");
          //         this.IsContinue = true;
          //         Tool_Other.instance.Sort_Random(this.TopicData);
          //         if (this.Resoure_Data.Game_Mode == Game_Mode.Endless) {
          //             this.PropNumUse++;
          //             console.log("复活次数", this.PropNumUse);
          //         }
          //         await this.TopicNext();
          //     }, () => {
          //         console.log("复活失败");
          //         return;
          //     });
          // }
          // /**返回按钮 */
          // const FunBack = async () => {
          //     this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          //     this.PanelGameHide();
          //     this.ViewHide();
          //     switch (this.Resoure_Data.Game_Mode) {
          //         case Game_Mode.Endless:
          //             this.ViewNormal.active = false;
          //             this.ViewMain.active = true;
          //             if (this.TopicIndex >= 1) {//this.TopicIndexMin
          //                 let Index = this.PlaceBarId - 1;
          //                 console.log(`参与盖楼,地区是${this.ConfigRegionDish[Index].City}`);
          //                 let DataRegionalRanking = await this.Resoure_Data.Fetch_Data(this.UrlRegionRanking);
          //                 console.log(DataRegionalRanking.RegionalRanking);
          //                 console.log("修改前的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
          //                 DataRegionalRanking.RegionalRanking[Index].Score += this.TopicIndex;
          //                 console.log("修改后的Score:", DataRegionalRanking.RegionalRanking[Index].Score);
          //                 await this.Resoure_Data.Update_Data(this.UrlRegionRanking, DataRegionalRanking);
          //             }
          //             break;
          //         case Game_Mode.Normal:
          //             this.ViewMain.active = false;
          //             this.ViewNormal.active = true;
          //             break;
          //         default:
          //             break;
          //     }
          // }
          // /**选项按钮 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_OptionA, FunPGOptionA);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_OptionB, FunPGOptionB);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_OptionC, FunPGOptionC);
          // /**提示按钮 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_BtnTip, FunPGBtnTip);
          // /**设置按钮 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_BtnSetting.getChildByName("Icon"), FunPGBtnSetting);
          // /**胜利界面按钮 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelWin.getChildByName("BtnShare"), FunPGShare);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelWin.getChildByName("BtnBack"), FunBack);
          // /**失败界面按钮 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelFail.getChildByName("BtnShare"), FunPGShare);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelFail.getChildByName("BtnResurAd"), FunPGResurAd);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelFail.getChildByName("BtnBack"), FunBack);
          // /**结算面板 */
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelSettle.getChildByName("BtnResurAd"), FunPGResurAd);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelSettle.getChildByName("BtnBack"), FunBack);
          // Tool_Event.instance.On_Event_TOUCH_END(this.PG_PanelSettle.getChildByName("BtnClose"), FunBack);
          // /**设置按钮动画 */
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_OptionA, AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_OptionB, AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_OptionC, AnimSwitch);
          // /**提示按钮 */
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_BtnTip, AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_BtnSetting.getChildByName("Icon"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelFail.getChildByName("BtnShare"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelFail.getChildByName("BtnResurAd"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelFail.getChildByName("BtnBack"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelSettle.getChildByName("BtnResurAd"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelSettle.getChildByName("BtnBack"), AnimSwitch);
          // Tool_Event.instance.Set_Btn_Event_Anim(this.PG_PanelSettle.getChildByName("BtnClose"), AnimSwitch);
        }
        /**注册设置面板 */


        OnPanelSetting(AnimSwitch = false) {
          /**音乐开关按钮 */
          const FunPSMusicSwitch = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Resoure_Data.Music_Switch_Set(!this.Resoure_Data.Music_Switch_Get());
            this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
            this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          };
          /**声音开关按钮 */


          const FunPSSoundSwitch = () => {
            this.Resoure_Data.Sound_Switch_Set(!this.Resoure_Data.Sound_Switch_Get());
            this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
            this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
          };
          /**震动开关按钮 */


          const FunPSVibrateSwitch = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.Resoure_Data.Vibration_Switch_Set(!this.Resoure_Data.Vibration_Switch_Get());
            this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
            this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          };
          /**关闭按钮 */


          const FunPSBtnClose = () => {
            FunPSBtnExit();
          };
          /**放弃挑战 */


          const FunPSBtnExit = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelGameHide();
            this.ViewHide();

            if (this.Resoure_Data.Game_Mode == (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Normal) {
              this.ViewMain.active = false;
              this.ViewNormal.active = true;
            } else {
              this.ViewNormal.active = false;
              this.ViewMain.active = true;
            }

            this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
              error: Error()
            }), Game_Mode) : Game_Mode).Tutorial;
            this.Resoure_Data.Music_Play("Audio/BGMMain");
          };
          /**返回游戏 */


          const FunPSBtnBack = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelSetting.active = false;
          };

          this.PS_MusicSwitch = find("Window/MusicLayout/Switch", this.PanelSetting);
          this.PS_SoundSwitch = find("Window/SoundLayout/Switch", this.PanelSetting);
          this.PS_VibrateSwitch = find("Window/VibrateLayout/Switch", this.PanelSetting);
          this.PS_BtnClose = find("BtnClose", this.PanelSetting);
          this.PS_BtnBack = find("BtnLayout/BtnBack", this.PanelSetting);
          this.PS_BtnExit = find("BtnLayout/BtnExit", this.PanelSetting);
          /**设置按钮事件 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_MusicSwitch, FunPSMusicSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_SoundSwitch, FunPSSoundSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_VibrateSwitch, FunPSVibrateSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnClose, FunPSBtnClose);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnBack, FunPSBtnBack);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnExit, FunPSBtnExit);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnBack, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnExit, AnimSwitch);
        }
        /**注册道具面板 */


        OnPanelProp(AnimSwitch = false) {
          /**返回按钮 */
          const FunBack = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelGameHide();
            this.ViewHide();

            switch (this.Resoure_Data.Game_Mode) {
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Normal:
                this.ViewMain.active = false;
                this.ViewNormal.active = true;
                break;

              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Idiom:
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Film:
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Endless:
              case (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                error: Error()
              }), Game_Mode) : Game_Mode).Tutorial:
                this.ViewNormal.active = false;
                this.ViewMain.active = true;
                break;

              default:
                break;
            }
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PP_BtnClose, FunBack);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PP_BtnOk, FunBack);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PP_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PP_BtnOk, AnimSwitch);
        }
        /**注册地区面板 */


        OnPanelRegionl(AnimSwitch = false) {
          /**关闭按钮 */
          const FunPRBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            /**获取数据 */

            super.DataGet();
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRegionl);
          };
          /**确定按钮 */


          const FunPRBtnOk = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            /**保存数据 */

            super.DataSet();
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRegionl);
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PR_BtnClose, FunPRBtnClose);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PR_BtnOk, FunPRBtnOk);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PR_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PR_BtnOk, AnimSwitch);
        }
        /**注册排行榜面板 */


        OnPanelRank(AnimSwitch = false) {
          /**关闭按钮 */
          const FunPRCBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRank);
          };
          /**好友排行按钮 */


          const FunPRCBtnRankingFriends = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingWorld, color(155, 155, 155, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingFriends, color(255, 255, 255, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingWorld, 0);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingFriends, 255);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Off(this.PRK_RankingWorld, ScrollView);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_On(this.PRK_RankingFriends, ScrollView);
          };
          /**世界排行按钮 */


          const FunPRCRankingWorld = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingFriends, color(155, 155, 155, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Color(this.PRK_BtnRankingWorld, color(255, 255, 255, 255));
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingFriends, 0);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.PRK_RankingWorld, 255);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_Off(this.PRK_RankingFriends, ScrollView);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Component_On(this.PRK_RankingWorld, ScrollView);
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PRK_BtnClose, FunPRCBtnClose);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PRK_BtnRankingFriends, FunPRCBtnRankingFriends);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PRK_BtnRankingWorld, FunPRCRankingWorld);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PRK_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PRK_BtnRankingFriends, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PRK_BtnRankingWorld, AnimSwitch);
        }
        /**注册足迹面板 */


        OnPanelFootPrints(AnimSwitch = false) {
          /**关闭按钮 */
          const FunPFPBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelFootPrints.active = false;
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PFP_BtnClose, FunPFPBtnClose);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PFP_BtnClose, AnimSwitch);
        }
        /**注册侧边栏面板 */


        OnPanelSidebar(AnimSwitch = false) {
          /**确定按钮 */
          const FunPDBtnOk = () => {
            FunPDBtnClose();
          };
          /**关闭按钮 */


          const FunPDBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelSidebar.active = false;
          };
          /**获取按钮 */


          const FunPDBtnGet = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Get) {
              this.SidebarState = (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
                error: Error()
              }), ConfigSidebarState) : ConfigSidebarState).Other;
              super.DataSet();
              /**更新奖励面板 */

              this.UpdatePanelSidebar();
              this.GetProp(1, "获得奖励");
            }

            if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Other) {
              console.log("已领取");
            }
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PD_BtnOk, FunPDBtnOk);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PD_BtnClose, FunPDBtnClose);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PD_BtnGet, FunPDBtnGet);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PD_BtnOk, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PD_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PD_BtnGet, AnimSwitch);
        }
        /**注册邀请面板 */


        OnPanelInvite(AnimSwitch = false) {
          /**关闭按钮 */
          const FunPIBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelInvite.active = false;
          };
          /**邀请按钮 */


          const FunPIBtnInvite = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            console.log("邀请好友");
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {});
          };
          /**获取按钮 */


          const FunPIBtnGet = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            let PropNum = this.InvitedCount - this.ShareRewardCount;
            console.log("领取成功", PropNum);
            this.ShareRewardCount = this.InvitedCount;
            this.GetProp(PropNum * 5);
            /**获取分享礼包 */

            this.GetShareReward();
          };
          /**刷新按钮 */


          const FunPIBtnUpdate = () => {
            /**获取分享礼包 */
            this.GetShareReward();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnClose, FunPIBtnClose);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnInvite, FunPIBtnInvite);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnGet, FunPIBtnGet);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnUpdate, FunPIBtnUpdate);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnInvite, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnGet, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnUpdate, AnimSwitch);
        }
        /**场景加载 */


        async SceneLoad() {
          this.Resoure_Data.Music_Play("Audio/BGMMain");
          return new Promise(async (resolve, reject) => {
            /**加载游戏面板 */
            // await this.LoadPanelGame();

            /**是否开启教程 */
            // let First_Start = this.Resoure_Data.Data_Get("First_Start");
            // if (First_Start) {
            //     this.Resoure_Data.Game_Mode = Game_Mode.Tutorial;
            //     this.PanelGameShow();
            //     this.TopicData = [...this.DishDataOther];
            //     /**打乱顺序 */
            //     Tool_Other.instance.Sort_Random(this.TopicData);
            //     /**初始数据 */
            //     this.TopicCount = this.TopicData.length;
            //     this.TopicIndex = 0;
            //     this.IsHint = false;
            //     this.IsContinue = false;
            //     /**下一个题目 */
            //     console.log("是否开启教程");
            //     await this.TopicNext();
            //     this.Hand.active = true;
            //     this.Hand.getComponent(Animation).play();
            //     this.Hand.position = this.PG_LabelOptionA.string == this.TopicData[this.TopicIndex].CorrectName ? this.PG_OptionA.position : this.PG_OptionB.position;
            // } else {
            //     this.PanelGameHide();
            // }
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.Message, 0);
            /**加载主界面 */

            await this.LoadViewMain();
            /**加载正常模式界面 */

            await this.LoadViewNormal();
            /**加载足迹面板 */

            await this.LoadPanelFootPrints();
            /**加载设置界面 */

            await this.LoadPanelSetting();
            /**刷新场景 */

            this.UpdateScene();
            resolve(); //完成加载
          });
        }
        /**加载主界面 */


        LoadViewMain() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabViewMain = await this.Resoure_Data.Load_Prefab("Prefab/ViewMain");
            this.ViewMain = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabViewMain, this.node, v3(0, 0, 0), "");
            this.ViewMain.active = true;
            /**绑定关键节点 */

            this.VM_Content = find("ScrollView/view/VMContent", this.ViewMain);
            this.GamePlay = find("InterfaceButton/GamePlay", this.ViewMain);
            this.VM_BtnIdiom = find("Page1/Btn_Idiom", this.GamePlay);
            this.VM_BtnFilm = find("Page1/Btn_Film", this.GamePlay);
            this.VM_BtnInfinite = find("Page1/Btn_Infinite", this.GamePlay);
            this.VM_BtnStart = find("Page1/Btn_Start", this.GamePlay);
            this.VM_BtnFindActors = find("Page1/Btn_FindActors", this.GamePlay);
            this.VM_BtnSetting = find("InterfaceButton/Btn_Setting", this.ViewMain);
            this.VM_BtnFlip = find("InterfaceButton/Btn_Flip", this.ViewMain);
            this.VM_BtnRegion = find("InterfaceButton/Btn_Region", this.ViewMain);
            this.VM_BtnSeatTop = find("InterfaceButton/Btn_Seat/Top", this.ViewMain);
            this.VM_BtnSeatCurrent = find("InterfaceButton/Btn_Seat/Current", this.ViewMain);
            this.VM_BtnMore = find("InterfaceButton/Btn_More", this.ViewMain);
            this.VM_BtnRank = find("InterfaceButton/Btn_Rank", this.ViewMain);
            this.VM_FootPrints = find("InterfaceButton/Btn_FootPrints", this.ViewMain);
            this.VM_BtnSidebar = find("InterfaceButton/Btn_Sidebar", this.ViewMain);
            this.VM_BtnInvite = find("InterfaceButton/Btn_Invite", this.ViewMain);
            /**注册主界面 */

            this.OnViewMain(this.AnimSwitch);
            ;
            /**加载主界面场景 */

            this.LoadViewMainScene();
            resolve();
          });
        }
        /**加载主界面场景 */


        LoadViewMainScene() {
          return new Promise(async (resolve, reject) => {
            /**加载地图预制体 */
            // let PrefabPanelMap = await this.Resoure_Data.Load_Prefab("Prefab/PanelMap");
            // this.VM_Map = Tool_UI.instance.Set_Prefab_Node(PrefabPanelMap, this.VM_Content, v3(0, 0, 0), "");

            /**加载地区预制体 */
            // let PrefabPanelRegionRanking = await this.Resoure_Data.Load_Prefab("Prefab/PanelRegionRanking");
            //省份数量
            // for (let i = 0; i < this.NumberOfProvinces; i++) {
            //     let PanelRegionRanking: Node = Tool_UI.instance.Set_Prefab_Node(PrefabPanelRegionRanking, this.VM_Content, v3(0, 0, 0), this.ConfigRegionRanking[Sort[i]].Id + "");
            //     Tool_UI.instance.Set_UIOpacity(PanelRegionRanking, 254);
            //     // await Tool_Animation.instance.Async_Wait(0.01);
            //     let GroupPanel = find("GroupPanel", PanelRegionRanking);
            //     /**赋值数据 */
            //     GroupPanel.getChildByName("LabelRank").getComponent(Label).string = "第" + (i + 1) + "名"
            //     GroupPanel.getChildByName("LabelCount").getComponent(Label).string = this.ConfigRegionRanking[Sort[i]].StarsNumber + "颗星";
            //     GroupPanel.getChildByName("LabelRegion").getComponent(Label).string = this.ConfigRegionRanking[Sort[i]].City;
            //     this.PanelRegionRankingShow(0);
            // }
            let Building = find("Building", this.ViewMain);

            for (let i = 0; i < Building.children.length; i++) {
              for (let j = 0; j < Building.children[i].children.length; j++) {
                tween(Building.children[i].children[j]).repeatForever(tween().delay(2).to(0.25, {
                  scale: v3(1.1, 1.1, 1.1)
                }).to(0.25, {
                  scale: v3(1, 1, 1)
                })).start();
              }
            }

            resolve();
            /**刷新地区排名 */

            await this.UpdateRegionalRanking();
          });
        }
        /**加载正常模式界面 */


        LoadViewNormal() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabViewNormal = await this.Resoure_Data.Load_Prefab("Prefab/ViewNormal");
            this.ViewNormal = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabViewNormal, this.node, v3(0, 0, 0), "");
            this.ViewNormal.active = false; // Tool_UI.instance.Pool_Put(this.ViewNormal);

            /**绑定关键节点 */

            this.VN_Content = find("ScrollView/view/VNContent", this.ViewNormal);
            this.VN_BtnSetting = find("InterfaceButton/BtnSetting", this.ViewNormal);
            /**加载正常模式场景 */

            await this.LoadViewNormalScene();
            resolve();
            /**注册正常模式界面 */

            this.OnViewNormal(this.AnimSwitch);
          });
        }
        /**加载正常模式场景 */


        LoadViewNormalScene() {
          return new Promise(async (resolve, reject) => {
            let Map = find("ScrollView/view/VNContent/Map", this.ViewNormal);
            /**加载地图预制体 */

            let PrefabPanelMap = await this.Resoure_Data.Load_Prefab("Prefab/PanelMap");
            this.VN_Map = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelMap, Map, v3(0, 0, 0), "");
            /**加载地方菜预制体 */

            let PrefabRegionDish = await this.Resoure_Data.Load_Prefab("Prefab/RegionDish");
            /**等待获取数据 */

            let Sort = this.SortRegionDish; //省份数量

            for (let i = 0; i < this.NumberOfProvinces; i++) {
              let RegionDish = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabRegionDish, this.VN_Content, v3(0, 0, 0), this.ConfigRegionDish[Sort[i]].Id + "");
              /**设置按钮事件 */

              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_START(RegionDish, () => {
                this.IsMove = false;
              });
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_MOVE(RegionDish, () => {
                this.IsMove = true;
              });
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(RegionDish, async () => {
                if (this.IsMove) {
                  return;
                }

                const func = async () => {
                  this.Resoure_Data.Game_Mode = (_crd && Game_Mode === void 0 ? (_reportPossibleCrUseOfGame_Mode({
                    error: Error()
                  }), Game_Mode) : Game_Mode).Normal;
                  this.TopicDataId = Number(RegionDish.name);
                  super.GetTopicData();

                  if (!this.TopicData.length) {
                    this.OnMessage("已通关所有题目!");
                    return;
                  }

                  this.ViewNormal.active = false;
                  this.ViewMain.active = false;
                  /**打乱顺序 */

                  (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                    error: Error()
                  }), Tool_Other) : Tool_Other).instance.Sort_Random(this.TopicData);
                  /**初始数据 */

                  this.TopicCount = 10; //this.TopicData.length;

                  this.TopicIndex = 0;
                  this.IsHint = false;
                  this.IsContinue = false;
                  this.LastPlayId = this.ConfigRegionDish[this.TopicDataId].Id - 1;
                  /**刷新场景 */

                  this.UpdateScene();
                  /**保存数据 */

                  super.DataSet();
                  this.PanelGameShow();
                };

                let IsFree = this.ConfigRegionDish[Sort[i]].IsFree;

                if (IsFree) {
                  func();
                } else {
                  (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                    error: Error()
                  }), PlatformApi) : PlatformApi).instance.showVideoAd(() => {
                    func();
                  }, () => {
                    return;
                  });
                }
              });
              /**设置按钮动画 */

              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(RegionDish, this.AnimSwitch);
            }

            (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
              error: Error()
            }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_MOVE(this.VN_Content, () => {
              this.IsMove = true;
            });
            resolve();
          });
        }
        /**加载更多主题界面 */


        LoadPanelMore() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelMore = await this.Resoure_Data.Load_Prefab("Prefab/PanelMore");
            this.PanelMore = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelMore, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelMore.active = false;
            /**绑定关键节点 */

            this.PM_BtnSetting = find("InterfaceButton/BtnSetting", this.PanelMore);
            resolve();
            /**注册更多主题界面 */

            this.OnPanelMore(this.AnimSwitch);
          });
        }
        /**加载游戏面板 */


        LoadPanelGame() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            // let PrefabPanelGame = await this.Resoure_Data.Load_Prefab("Prefab/PanelGame");
            let PrefabPanelGame = await this.Resoure_Data.Load_Prefab("Prefab/PanelDish/PanelDish");
            this.PanelGame = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelGame, this.InterfacePannel, v3(0, 0, 0), "");
            resolve(); // this.PanelGame.active = false;
            // /**绑定关键节点 */
            // this.PG_LabelRegion = find("Title/LabelRegion", this.PanelGame).getComponent(Label);
            // this.PG_PanelPlay = find("PanelPlay", this.PanelGame);
            // this.PG_LabelTarget = find("Layout/LabelTarget", this.PG_PanelPlay).getComponent(Label);
            // this.PG_LabelScore = find("Layout/LabelScore", this.PG_PanelPlay).getComponent(RichText);
            // this.PG_ImgDish = find("ImgDish", this.PG_PanelPlay);
            // this.PG_ImgCorrect = find("ImgCorrect", this.PG_PanelPlay);
            // this.PG_ImgWrong = find("ImgWrong", this.PG_PanelPlay);
            // this.PG_OptionA = find("OptionA", this.PG_PanelPlay);
            // this.PG_LabelOptionA = find("OptionA/Label", this.PG_PanelPlay).getComponent(Label);
            // this.PG_OptionB = find("OptionB", this.PG_PanelPlay);
            // this.PG_LabelOptionB = find("OptionB/Label", this.PG_PanelPlay).getComponent(Label);
            // this.PG_OptionC = find("OptionC", this.PG_PanelPlay);
            // this.PG_LabelOptionC = find("OptionC/Label", this.PG_PanelPlay).getComponent(Label);
            // this.Hand = find("Hand", this.PG_PanelPlay);
            // this.PG_PanelWin = find("PanelWin", this.PanelGame);
            // this.PG_PanelFail = find("PanelFail", this.PanelGame);
            // this.PG_PanelSettle = find("PanelSettle", this.PanelGame);
            // this.PG_BtnTip = find("PanelUI/BtnTip", this.PanelGame);
            // this.PG_BtnSetting = find("PanelUI/BtnSetting", this.PanelGame);
            // /**注册游戏面板 */
            // this.OnPanelGame(this.AnimSwitch);
          });
        }
        /**加载设置面板 */


        LoadPanelSetting() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelSetting = await this.Resoure_Data.Load_Prefab("Prefab/PanelSetting");
            this.PanelSetting = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelSetting, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelSetting.active = false;
            this.PS_MusicSwitch = find("Window/MusicLayout/Switch", this.PanelSetting);
            this.PS_SoundSwitch = find("Window/SoundLayout/Switch", this.PanelSetting);
            this.PS_VibrateSwitch = find("Window/VibrateLayout/Switch", this.PanelSetting);
            this.PS_BtnClose = find("BtnClose", this.PanelSetting);
            this.PS_BtnExit = find("BtnLayout/BtnMain", this.PanelSetting);
            this.PS_BtnBack = find("BtnLayout/BtnContinue", this.PanelSetting);
            /**注册设置面板 */

            this.OnPanelSetting(this.AnimSwitch);
            resolve();
          });
        }
        /**加载道具面板 */


        LoadPanelProp() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelProp = await this.Resoure_Data.Load_Prefab("Prefab/PanelProp");
            this.PanelProp = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelProp, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelProp.active = false;
            /**绑定关键节点 */

            this.PP_LabeTitle = find("Window/Title", this.PanelProp).getComponent(Label);
            this.PP_LabeNumber = find("Window/Icon/Number", this.PanelProp).getComponent(Label);
            this.PP_BtnClose = find("Window/BtnClose", this.PanelProp);
            this.PP_BtnOk = find("Window/BtnOk", this.PanelProp);
            /**注册道具面板 */

            this.OnPanelProp(this.AnimSwitch);
            resolve();
          });
        }
        /**加载地区面板 */


        LoadPanelRegionl() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelRegionl = await this.Resoure_Data.Load_Prefab("Prefab/PanelRegionl");
            this.PanelRegionl = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelRegionl, this.InterfacePannel, v3(0, 0, 0), "");
            this.PanelRegionl.active = true;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRegionl);
            /**绑定关键节点 */

            this.PR_BtnClose = find("Window/BtnClose", this.PanelRegionl);
            this.PR_BtnOk = find("BtnOk", this.PanelRegionl);
            this.RegionlParent = find("Window/Mask/ScrollView/Parent", this.PanelRegionl);
            let PrefabPlaceBar = await this.Resoure_Data.Load_Prefab("Prefab/PlaceBar");
            let Sort = this.SortRegionl; //省份数量

            for (let i = 0; i < this.NumberOfProvinces; i++) {
              let PlaceBar = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPlaceBar, this.RegionlParent, v3(0, 0, 0), this.ConfigRegionDish[Sort[i]].Id + "");
              PlaceBar.getChildByName("Label").getComponent(Label).string = this.ConfigRegionDish[Sort[i]].City;
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_START(PlaceBar, Event => {
                if (this.PR_Regionl == Event.target) {
                  return;
                }
                /**当前地区 */


                this.PR_Regionl = Event.target;
                /**当前地区Id */

                this.PlaceBarId = this.ConfigRegionDish[Sort[i]].Id;
                this.PR_Regionl.getChildByName("ChosenImg").active = true;
                /**上一次地区 */

                if (this.PR_RegionlLast != null && this.PR_RegionlLast != this.PR_Regionl) {
                  this.PR_RegionlLast.getChildByName("ChosenImg").active = false;
                }

                this.PR_RegionlLast = this.PR_Regionl;
              });
            }

            resolve();
            /**注册地区面板 */

            this.OnPanelRegionl(this.AnimSwitch);
          });
        }
        /**加载成语面板 */


        LoadPanelIdiom() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelIdiom = await this.Resoure_Data.Load_Prefab("Prefab/PanelIdiom/PanelIdiom");
            this.PanelIdiom = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelIdiom, this.InterfaceView, v3(0, 0, 0), "");
            resolve();
          });
        }
        /**加载影视面板 */


        LoadPanelFilm() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelFilm = await this.Resoure_Data.Load_Prefab("Prefab/PanelFilm/PanelFilm");
            this.PanelFilm = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelFilm, this.InterfaceView, v3(0, 0, 0), "");
            resolve();
          });
        }
        /**加载找演员面板 */


        LoadPanelFindActor() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelFindActor = await this.Resoure_Data.Load_Prefab("Prefab/PanelFindActor/PanelFindActor");
            this.PanelFindActor = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelFindActor, this.InterfaceView, v3(0, 0, 0), "");
            resolve();
          });
        }
        /**加载排行榜面板 */


        LoadPanelRank() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelRank = await this.Resoure_Data.Load_Prefab("Prefab/PanelRank");
            this.PanelRank = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelRank, this.InterfacePannel, v3(0, 0, 0), "");
            this.PanelRank.active = true;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRank);
            /**绑定关键节点 */

            this.PRK_BtnRankingFriends = find("Window/BtnRankingFriends", this.PanelRank);
            this.PRK_BtnRankingWorld = find("Window/BtnRankingWorld", this.PanelRank);
            this.PRK_BtnClose = find("Window/BtnClose", this.PanelRank);
            this.PRK_RankingFriends = find("Window/ScrollViewF", this.PanelRank);
            this.PRK_RankingWorld = find("Window/ScrollViewW", this.PanelRank);
            resolve();
            /**注册排行榜面板 */

            this.OnPanelRank(this.AnimSwitch);
            /**加载排行榜场景 */

            this.LoadPanelRankScene();
          });
        }
        /**加载排行榜场景 */


        LoadPanelRankScene() {
          return new Promise(async (resolve, reject) => {
            let PrefabItem = await this.Resoure_Data.Load_Prefab("Prefab/Item");
            /**等待获取数据 */
            //好友排行

            const FuncF = async () => {
              let PRK_ContentF = find("view/content", this.PRK_RankingFriends);

              for (let i = 0; i < this.RankNumberF; i++) {
                let NodeItem = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabItem, PRK_ContentF, v3(0, 0, 0), "");
                NodeItem.getChildByName("Rank").getComponent(Label).string = i + 1 + ""; // Tool_UI.instance.Set_SpriteFrame(NodeItem.getChildByName("Icon"), null);

                NodeItem.getChildByName("Name").getComponent(Label).string = "名字" + (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(100, 10000);
                NodeItem.getChildByName("Score").getComponent(Label).string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(100, 10000) + "颗星星";

                if (i > 20) {
                  await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.02);
                }
              }
            }; //世界排行


            const FuncW = async () => {
              let PRK_ContentW = find("view/content", this.PRK_RankingWorld);

              for (let i = 0; i < this.RankNumberW; i++) {
                let NodeItem = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabItem, PRK_ContentW, v3(0, 0, 0), "");
                NodeItem.getChildByName("Rank").getComponent(Label).string = i + 1 + ""; // Tool_UI.instance.Set_SpriteFrame(NodeItem.getChildByName("Icon"), null);

                NodeItem.getChildByName("Name").getComponent(Label).string = "名字" + (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(100, 10000);
                NodeItem.getChildByName("Score").getComponent(Label).string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                  error: Error()
                }), Tool_Other) : Tool_Other).instance.Get_Random_Int(100, 10000) + "颗星星";

                if (i > 20) {
                  await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                    error: Error()
                  }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.02);
                }
              }
            };

            FuncF();
            await FuncW();
            resolve();
          });
        }
        /**加载足迹面板 */


        LoadPanelFootPrints() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelFootPrints = await this.Resoure_Data.Load_Prefab("Prefab/PanelFootPrints");
            this.PanelFootPrints = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelFootPrints, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelFootPrints.active = false;
            /**绑定关键节点 */

            this.PFP_BtnClose = find("Window/BtnClose", this.PanelFootPrints);
            /**注册足迹面板 */

            this.OnPanelFootPrints(this.AnimSwitch);
            resolve();
          });
        }
        /**加载侧边栏面板 */


        LoadPanelSidebar() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelSidebar = await this.Resoure_Data.Load_Prefab("Prefab/PanelSidebar");
            this.PanelSidebar = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelSidebar, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelSidebar.active = false;
            /**绑定关键节点 */

            this.PD_BtnOk = find("Window/BtnLayout/BtnOk", this.PanelSidebar);
            this.PD_BtnClose = find("Window/BtnLayout/BtnClose", this.PanelSidebar);
            this.PD_BtnGet = find("Window/BtnLayout/BtnGet", this.PanelSidebar);
            /**注册侧边栏面板 */

            this.OnPanelSidebar(this.AnimSwitch);
            resolve();
          });
        }
        /**加载邀请面板 */


        LoadPanelInvite() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelInvite = await this.Resoure_Data.Load_Prefab("Prefab/PanelInvite");
            this.PanelInvite = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelInvite, this.InterfaceView, v3(0, 0, 0), "");
            this.PanelInvite.active = false;
            /**绑定关键节点 */

            this.PI_BtnClose = find("Window/BtnLayout/BtnClose", this.PanelInvite);
            this.PI_BtnInvite = find("Window/BtnLayout/BtnInvite", this.PanelInvite);
            this.PI_BtnGet = find("Window/BtnLayout/BtnGet", this.PanelInvite);
            this.PI_BtnUpdate = find("Window/BtnUpdate", this.PanelInvite);
            /**注册侧边栏面板 */

            this.OnPanelInvite(this.AnimSwitch);
            resolve();
          });
        }
        /**下一个题目 */


        async TopicNext() {
          /**初始节点状态 */
          // this.PG_ImgCorrect.active = false;
          // this.PG_ImgWrong.active = false;
          // this.PG_PanelWin.active = false;
          // this.PG_PanelFail.active = false;
          // this.PG_PanelSettle.active = false;
          // this.Hand.active = false;
          // this.PG_PanelPlay.active = true;
          // this.PG_BtnTip.active = true;
          // this.PG_OptionA.active = true;
          // this.PG_OptionB.active = true;
          // this.PG_OptionC.active = true;
          // Tool_UI.instance.Set_Color(this.PG_OptionA);
          // Tool_UI.instance.Set_Color(this.PG_OptionB);
          // Tool_UI.instance.Set_Color(this.PG_OptionC);
          // this.UpdatePropUI();
          // this.PG_PanelPlay.getChildByName("Roll").active = false;
          // /**更新提示 */
          // switch (this.Resoure_Data.Game_Mode) {
          //     case Game_Mode.Endless:
          //         this.PG_LabelRegion.string = "盖楼模式";
          //         /**最高记录 */
          //         this.PG_LabelTarget.string = `历史最高记录 `;
          //         this.PG_LabelScore.string = `第<size=60>${this.TopicIndex + 1}</size><size=50>/</size><size=60>${this.HighestRecordLast}</size>道`;
          //         // this.PG_PanelPlay.getChildByName("Roll").active = true;
          //         break;
          //     case Game_Mode.Normal:
          //         this.PG_LabelRegion.string = `做个好菜·${this.ConfigRegionDish[this.TopicDataId - 1].City}省`;
          //         this.PG_LabelTarget.string = `猜出${this.TopicCount}道美食名称·`;
          //         this.PG_LabelScore.string = `第${(this.TopicIndex + 1)}道`;
          //         break;
          //     case Game_Mode.Tutorial:
          //         this.PG_LabelRegion.string = "猜一猜";
          //         this.PG_LabelTarget.string = `猜出${this.TopicCount}道美食名称·`;
          //         break;
          //     default:
          //         break;
          // }
          // /**图片赋值 */
          // let SpriteFrame = await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Dish/" + this.TopicData[this.TopicIndex].Id);
          // Tool_UI.instance.Set_SpriteFrame(this.PG_ImgDish, SpriteFrame);
          // let Result = [];
          // Result.push(this.TopicData[this.TopicIndex].CorrectName)
          // Result.push(this.TopicData[this.TopicIndex].WrongName)
          // Result.push(this.TopicData[this.TopicIndex].WrongName)
          // console.log(Result);
          // Tool_Other.instance.Sort_Random(Result);
          // this.PG_LabelOptionA.string = Result[0];
          // this.PG_LabelOptionB.string = Result[1];
          // this.PG_LabelOptionC.string = Result[2];
        }
        /**游戏胜利 */


        async GameVictory() {// this.Resoure_Data.Sound_Play("Audio/SoundCorrect");
          // this.PG_ImgCorrect.active = true;
          // this.BlockInputEvents.active = true;
          // this.Hand.active = false;
          // this.DishDataTemp.push(this.TopicData[this.TopicIndex]);
          // console.log(this.DishDataTemp);
          // await Tool_Animation.instance.Async_Wait(0.5);
          // this.BlockInputEvents.active = false;
          // this.TopicIndex++;
          // if (this.TopicIndex == this.TopicCount) {
          //     switch (this.Resoure_Data.Game_Mode) {
          //         case Game_Mode.Endless:
          //             /**最高记录 */
          //             this.HighestRecord = Math.max(this.TopicIndex, this.HighestRecord);
          //             /**无尽星星数 */
          //             this.DishScoreEndless = Math.max(Math.floor(this.TopicIndex / 10), this.DishScoreEndless);
          //         case Game_Mode.Normal:
          //             this.PG_PanelPlay.active = false;
          //             let LineHint = find("Settle/Line2", this.PG_PanelWin);
          //             let LineContinue = find("Settle/Line3", this.PG_PanelWin);
          //             LineHint.getChildByName("Win").active = !this.IsHint;
          //             LineHint.getChildByName("Lose").active = this.IsHint;
          //             LineContinue.getChildByName("Win").active = !this.IsContinue;
          //             LineContinue.getChildByName("Lose").active = this.IsContinue;
          //             this.Resoure_Data.Sound_Play("Audio/SoundWin");
          //             this.PG_PanelWin.active = true;
          //             //星星数
          //             let StarsLevel: number = 1;
          //             StarsLevel += this.IsHint ? 0 : 1;
          //             StarsLevel += this.IsContinue ? 0 : 1;
          //             this.ConfigRegionDish[this.TopicDataId - 1].IsSuccess = true;
          //             this.ConfigRegionDish[this.TopicDataId - 1].StarsLevel = StarsLevel;
          //             //完美通关
          //             if (!this.IsContinue && !this.IsHint) {//&& !this.IsHint
          //                 const KeyId = this.TopicDataId - 1;
          //                 const KeyDataV = `DishData${this.ConfigRegionDish[KeyId].NamePinYin}Victory`;
          //                 this[KeyDataV] = [...this[KeyDataV], ...this.DishDataTemp];
          //                 super.SetDishData();
          //             }
          //             /**保存数据 */
          //             super.DataSet();
          //             /**刷新场景 */
          //             this.UpdateScene();
          //             break;
          //         case Game_Mode.Tutorial:
          //             this.PanelGameHide();
          //             this.ViewNormal.active = false;
          //             this.ViewMain.active = true;
          //             this.Resoure_Data.Data_Set("First_Start", false);
          //             break;
          //         default:
          //             break;
          //     }
          // } else {
          //     switch (this.Resoure_Data.Game_Mode) {
          //         case Game_Mode.Endless:
          //             /**最高记录 */
          //             this.HighestRecord = Math.max(this.TopicIndex, this.HighestRecord);
          //             /**无尽星星数 */
          //             this.DishScoreEndless = Math.max(Math.floor(this.TopicIndex / 10), this.DishScoreEndless);
          //             /**保存数据 */
          //             super.DataSet();
          //             break;
          //         case Game_Mode.Normal:
          //             break;
          //         case Game_Mode.Tutorial:
          //             break;
          //         default:
          //             break;
          //     }
          //     await this.TopicNext();
          // }
        }
        /**游戏失败 */


        async GameFailed() {// this.Resoure_Data.Sound_Play("Audio/SoundWrong");
          // if (this.Resoure_Data.Vibration_Switch_Get()) {
          //     PlatformApi.instance.vibrateShort();
          // }
          // this.PG_ImgWrong.active = true;
          // this.BlockInputEvents.active = true;
          // this.Hand.active = false;
          // await Tool_Animation.instance.Async_Wait(0.5);
          // this.BlockInputEvents.active = false;
          // this.PG_BtnTip.active = false;
          // this.PG_OptionA.active = false;
          // this.PG_OptionB.active = false;
          // this.PG_OptionC.active = false;
          // this.PG_PanelFail.active = true;
          // switch (this.Resoure_Data.Game_Mode) {
          //     case Game_Mode.Endless:
          //         /**最高记录 */
          //         this.HighestRecord = Math.max(this.TopicIndex, this.HighestRecord);
          //         /**无尽星星数 */
          //         this.DishScoreEndless = Math.max(Math.floor(this.TopicIndex / 10), this.DishScoreEndless);
          //         this.PG_PanelSettle.active = true;
          //         this.PG_PanelFail.active = false;
          //         this.PG_PanelSettle.getChildByName("Window").getChildByName("Title").getComponent(Label).string = this.TopicIndexMin - this.TopicIndex <= 0 ? `进入首页房屋,答对题目${this.TopicIndex}` : `还需答对${this.TopicIndexMin - this.TopicIndex}题即可进入首页房屋`;
          //         this.PG_PanelSettle.getChildByName("Window").getChildByName("Number").getComponent(Label).string = this.PropNumUseMax - this.PropNumUse + ""
          //         this.PG_PanelSettle.getChildByName("BtnResurAd").active = this.PropNumUseMax - this.PropNumUse == 0 ? false : true;
          //         this.PG_PanelSettle.getChildByName("BtnBack").active = this.PropNumUseMax - this.PropNumUse == 0 ? true : false;
          //         if (this.PropNumUse == this.PropNumUseMax) {
          //             console.log(`闯关失败,答对题目${this.TopicIndex}`);
          //         }
          //     case Game_Mode.Normal:
          //         /**保存数据 */
          //         super.DataSet();
          //         /**刷新场景 */
          //         this.UpdateScene();
          //         break;
          //     case Game_Mode.Tutorial:
          //         break;
          //     default:
          //         break;
          // }
        }
        /**刷新场景 */


        UpdateScene() {
          console.error("刷新场景");
          /**刷新省份界面 */

          this.StarNumberNormal = 0;

          for (let i = 0; i < this.NumberOfProvinces; i++) {
            let Id = i;
            let RegionDish = find(Id + 1 + "", this.VN_Content);
            /**获取关键节点 */

            let LabelDishName = find("DishName", RegionDish).getComponent(Label);
            let IconFree = find("IconFree", RegionDish);
            let IconAd = find("IconAd", RegionDish);
            let Won = find("Won", RegionDish);
            let LayoutStars = find("LayoutStars", RegionDish);
            let LabelCount = find("Success/Count", RegionDish).getComponent(Label);
            let Last = find("Last", RegionDish);
            /**中文名 */

            LabelDishName.string = this.ConfigRegionDish[Id].City;
            /**是否免费 */

            let IsFree = this.ConfigRegionDish[Id].IsFree;
            /**是否成功 */

            let IsSuccess = this.ConfigRegionDish[Id].IsSuccess;
            /**星星等级 */

            let StarsLevel = Math.min(this.ConfigRegionDish[Id].StarsLevel, 3);
            /**通关人数 */

            let SuccessCount = this.ConfigRegionDish[Id].SuccessCount;
            /**是否上次挑战 */

            let IsPlay = this.ConfigRegionDish[Id].Id == this.LastPlayId ? true : false;
            /**赋值数据 */

            IconFree.active = IsFree;
            IconAd.active = !IsFree;
            Won.active = IsSuccess;
            LayoutStars.active = IsSuccess; // Tool_UI.instance.Hide_Node_Children(LayoutStars);

            if (IsSuccess) {
              for (let i = 0; i < StarsLevel; i++) {
                LayoutStars.children[i].active = true;
                this.StarNumberNormal++;
              }
            }

            LabelCount.string = SuccessCount + "";
            Last.active = IsPlay;
          }
          /**刷新地图 */

          /**获取关键节点 */


          let FootPrintsMap = find("PanelMap/Map", this.PanelFootPrints);
          let Text = find("Text", this.PanelFootPrints);
          let NameSuccess = ""; // let VMMap = find("Map", this.VM_Map);

          let VNMap = find("Map", this.VN_Map); // let VM_MapStarNumber = find("Roll/LayoutCollect/Number", this.VM_Map);

          let VN_MapStarNumber = find("Score/Label", this.VN_Map);
          let StarNumberNormal = find("StarBar/Number", this.VM_BtnStart);
          let DishScoreEndless = find("StarBar/Number", this.VM_BtnInfinite);
          let IdiomScore = find("StarBar/Number", this.VM_BtnIdiom);
          let FilmScore = find("StarBar/Number", this.VM_BtnFilm);
          let FindActorScore = find("StarBar/Number", this.VM_BtnFindActors);
          /**设置地图块颜色 */

          const ColorIsSuccessOn = color(255, 200, 0);
          const ColorIsSuccessOff = color(100, 100, 100);
          /**赋值数据 */

          for (let i = 0; i < this.ConfigRegionDish.length; i++) {
            if (this.ConfigRegionDish[i].IsSuccess) {
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(FootPrintsMap.getChildByName(this.ConfigRegionDish[i].NamePinYin), ColorIsSuccessOn);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(VNMap.getChildByName(this.ConfigRegionDish[i].NamePinYin), ColorIsSuccessOn);
              console.log(NameSuccess);
              NameSuccess += this.ConfigRegionDish[i].City;
              NameSuccess += "省,";
              console.error(this.ConfigRegionDish[i]);
              console.log(NameSuccess);
            } else {
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(FootPrintsMap.getChildByName(this.ConfigRegionDish[i].NamePinYin), ColorIsSuccessOff);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_Color(VNMap.getChildByName(this.ConfigRegionDish[i].NamePinYin), ColorIsSuccessOff);
            }
          }

          NameSuccess = NameSuccess.slice(0, -1) + ".";
          Text.getComponent(Label).string = `目前已点亮省份:\n${NameSuccess}`;
          /**刷新分数 */
          // VM_MapStarNumber.getComponent(Label).string = `x${this.StarNumberNormal}`;

          VN_MapStarNumber.getComponent(Label).string = `已收集 X ${this.StarNumberNormal}`;
          StarNumberNormal.getComponent(Label).string = `X${this.StarNumberNormal}`;
          DishScoreEndless.getComponent(Label).string = `X${this.DishScoreEndless}`;
          IdiomScore.getComponent(Label).string = `X${this.IdiomScore}`;
          FilmScore.getComponent(Label).string = `X${this.FilmScore}`;
          FindActorScore.getComponent(Label).string = `X${this.FindActorScore}`;
        }
        /**刷新地区排名 */


        async UpdateRegionalRanking() {
          console.log("刷新地区排名");
          let DataRegionalRanking = await this.Resoure_Data.Fetch_Data(this.UrlRegionRanking);
          console.log(DataRegionalRanking);
          (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Sort_ByObjectProperty(DataRegionalRanking.RegionalRanking, "Score", true);
          console.log(DataRegionalRanking.RegionalRanking);
          let Name = find("Name", this.ViewMain);

          for (let i = 0; i < DataRegionalRanking.RegionalRanking.length; i++) {
            Name.children[i].getComponent(Label).string = DataRegionalRanking.RegionalRanking[i].City;
          }
        }
        /**刷新侧边栏面板 */


        UpdatePanelSidebar() {
          console.warn(this.SidebarState, this.SidebarState === (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
            error: Error()
          }), ConfigSidebarState) : ConfigSidebarState).Ok);
          this.PD_BtnClose.active = true;

          switch (this.SidebarState) {
            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Ok:
              this.PD_BtnOk.active = false;
              this.PD_BtnGet.active = false;
              break;

            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Get:
              this.PD_BtnOk.active = false;
              this.PD_BtnGet.active = true;
              break;

            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Other:
              this.PD_BtnClose.active = false;
              this.PD_BtnGet.active = false;
              this.PD_BtnOk.active = true;
              break;

            default:
              break;
          }
        }
        /**刷新邀请面板 */


        UpdatePanelInvite() {
          console.log("刷新邀请面板");

          if (this.ShareRewardState == (_crd && ConfigShareState === void 0 ? (_reportPossibleCrUseOfConfigShareState({
            error: Error()
          }), ConfigShareState) : ConfigShareState).Get) {
            this.PI_BtnInvite.active = false;
            this.PI_BtnGet.active = true;
          } else if (this.ShareRewardState == (_crd && ConfigShareState === void 0 ? (_reportPossibleCrUseOfConfigShareState({
            error: Error()
          }), ConfigShareState) : ConfigShareState).Share) {
            this.PI_BtnGet.active = false;
            this.PI_BtnInvite.active = true;
          }
        }
        /**刷新设置面板 */


        UpdatePanelSetting(IsGame = false) {
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Node_Index_Set(this.PanelSetting, -1);
          this.PS_BtnBack.active = IsGame;
          this.PS_BtnExit.active = IsGame;
          this.PS_BtnClose.active = !IsGame;
          this.PanelSetting.active = true;
        }
        /**获取道具 */


        async GetProp(Value = 1, Text = "获得奖励") {
          if (this.PanelProp == null) {
            /**加载道具面板 */
            await this.LoadPanelProp();
          }

          this.PropNum += Value;
          super.DataSet();
          find("Window/Icon/Number", this.PanelProp).getComponent(Label).string = `x${Value}`;
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Node_Index_Set(this.PanelProp, -1);
          this.PanelProp.active = true;
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(this.PanelProp.getChildByName("Window"));
        }
        /**刷新道具UI */


        UpdatePropUI() {// const BtnTipLabel = this.PG_BtnTip.getChildByName("PropNum").getChildByName("Label").getComponent(Label);
          // const BtnTipNull = this.PG_BtnTip.getChildByName("PropNum").getChildByName("PropNumNull");
          // BtnTipLabel.string = `${this.PropNum}`;
          // if (this.PropNum > 0) {
          //     BtnTipNull.active = false;
          // } else {
          //     BtnTipNull.active = true;
          // }
        }
        /**游戏面板隐藏 */


        async PanelGameHide() {
          if (this.PanelGame != null) {
            this.PanelGame.active = false;
          }
        }
        /**游戏面板显示 */


        async PanelGameShow() {
          if (this.PanelGame == null) {
            /**加载成语面板 */
            await this.LoadPanelGame();
          }

          this.PanelGame.active = true;
        }
        /**视图隐藏 */


        ViewHide() {
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Hide_Node_Children(this.InterfaceView);
        }

        /**面板区域排名隐藏 */
        async PanelRegionRankingHide() {
          for (let i = 0; i < this.ShowIngNodes.length; i++) {
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.ShowIngNodes[i], 254);
            let GroupPhoto = find("GroupPhoto", this.ShowIngNodes[i]);
            let GroupFrame = find("GroupFrame", this.ShowIngNodes[i]);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupPhoto, 0);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupFrame, 0);
          } // for (let i = 0; i < this.RegionRankingShowNodes.length; i++) {
          //     Tool_UI.instance.Set_UIOpacity(this.RegionRankingShowNodes[i], 254);
          //     let GroupPhoto = find("GroupPhoto", this.RegionRankingShowNodes[i]);
          //     let GroupFrame = find("GroupFrame", this.RegionRankingShowNodes[i]);
          //     Tool_UI.instance.Set_UIOpacity(GroupPhoto, 0);
          //     Tool_UI.instance.Set_UIOpacity(GroupFrame, 0);
          // }

        }
        /**面板区域排名显示(减少绘制调用) */


        async PanelRegionRankingShow(DelayTime = 0.2) {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Tag(10);
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Function_Id(DelayTime, 10, () => {
            FunRegionRankingShow();
          });

          const FunRegionRankingShow = () => {
            let Height_Visible = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Get_Height_Visible();
            this.RegionRankingShowNodes = [];
            this.RegionRankingHideNodes = [];
            this.ShowIngNodes = [];

            for (let i = 1; i < this.VM_Content.children.length; i++) {
              let Pos = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Get_Distance(this.VM_Content.children[i].worldPosition, this.node.worldPosition);
              /**在摄像机内 */

              if (Pos < Height_Visible) {
                /**如果是隐藏状态 */
                if (this.VM_Content.children[i].getComponent(UIOpacity).opacity == 254) {
                  this.RegionRankingShowNodes.push(this.VM_Content.children[i]);
                }

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.VM_Content.children[i], 255);
                this.ShowIngNodes.push(this.VM_Content.children[i]);
              } else {
                /**如果是显示状态 */
                if (this.VM_Content.children[i].getComponent(UIOpacity).opacity == 255) {
                  this.RegionRankingHideNodes.push(this.VM_Content.children[i]);
                }

                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.VM_Content.children[i], 254);
              }
            } // console.log(this.RegionRankingHideNodes);
            // console.log(this.RegionRankingShowNodes);
            // console.log(this.ShowIngNodes);


            this.PanelRegionRankingAnim();
          };
        }
        /**面板区域排名动画 */


        async PanelRegionRankingAnim() {
          for (let i = 0; i < this.RegionRankingHideNodes.length; i++) {
            let GroupPhoto = find("GroupPhoto", this.RegionRankingHideNodes[i]);
            let GroupFrame = find("GroupFrame", this.RegionRankingHideNodes[i]);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupPhoto, 0);
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupFrame, 0);
          }

          for (let i = 0; i < this.RegionRankingShowNodes.length; i++) {
            let GroupPhoto = find("GroupPhoto", this.RegionRankingShowNodes[i]);
            let GroupFrame = find("GroupFrame", this.RegionRankingShowNodes[i]);

            const AnimHide = async () => {
              for (let i = 0; i < GroupPhoto.children.length; i++) {
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupPhoto.children[i], 0);
                (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                  error: Error()
                }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupFrame.children[i], 0);
              }

              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupPhoto, 255);
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(GroupFrame, 255);
            };
            /**显示头像 */


            const AnimShow = async () => {
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.RegionRankingShowNodes[i], 255);

              for (let i = 0; i < GroupPhoto.children.length; i++) {
                // Tool_UI.instance.Set_SpriteFrame(Group_Photo.children[i],)
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Node(GroupPhoto.children[i], 0.3);
                (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Node(GroupFrame.children[i], 0.3);
                GroupPhoto.children[i].scale = v3(0.2, 0.2, 1);
                GroupFrame.children[i].scale = v3(0.2, 0.2, 1);
                tween(GroupPhoto.children[i]).to(0.25, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();
                tween(GroupFrame.children[i]).to(0.25, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();
                await (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                  error: Error()
                }), Tool_Animation) : Tool_Animation).instance.Async_Wait(0.02);
              }
            };

            await AnimHide();
            AnimShow();
          }
        }
        /**显示消息 */


        OnMessage(Text = "", Time = 2) {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Tween_Stop_Tag(1);
          this.MessageLabel.string = Text;
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Node(this.Message);
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Async_Function_Id(Time, 1, () => {
            this.OffMessage();
          });
        }
        /**隐藏消息 */


        OffMessage() {
          (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
            error: Error()
          }), Tool_Animation) : Tool_Animation).instance.Anim_Hide_Node(this.Message);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Message", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MessageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21841113be7054e9e0850ebe9fe20b5fb6edbe36.js.map