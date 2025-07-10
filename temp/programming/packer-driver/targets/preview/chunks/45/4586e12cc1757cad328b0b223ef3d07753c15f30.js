System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, find, Label, Node, v3, ScrollView, Game_Script_Template, Tool_Event, Tool_Animation, Tool_UI, PlatformApi, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Game_Script;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGame_Script_Template(extras) {
    _reporterNs.report("Game_Script_Template", "./Game_Script_Template", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "../Tool/Tool_Event", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      Game_Script_Template = _unresolved_2.Game_Script_Template;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }, function (_unresolved_4) {
      Tool_Animation = _unresolved_4.Tool_Animation;
    }, function (_unresolved_5) {
      Tool_UI = _unresolved_5.Tool_UI;
    }, function (_unresolved_6) {
      PlatformApi = _unresolved_6.PlatformApi;
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

          /**设置按钮 */
          this.VM_BtnSetting = null;
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
        }

        onLoad() {
          super.onLoad();
          (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
            error: Error()
          }), PlatformApi) : PlatformApi).instance.showInterstitialAd();
        }

        start() {
          var _superprop_getStart = () => super.start,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getStart().call(_this);

            _this.BlockInputEvents.active = true;
            yield _this.SceneLoad();
            _this.BlockInputEvents.active = false;
            console.log("播放音乐");

            _this.Resoure_Data.Music_Play("Audio/Sound/BgmGame"); // console.log(HttpRequest.instance.getOpenId());
            // console.log("-----------getOpenId------------");

          })();
        }
        /**注册设置面板 */


        OnPanelSetting(AnimSwitch) {
          if (AnimSwitch === void 0) {
            AnimSwitch = false;
          }

          var First_Start = this.Resoure_Data.Data_Get("First_Start");

          if (First_Start) {
            First_Start = false;
            this.Resoure_Data.Data_Set("First_Start", First_Start);
          }

          console.log("初始音乐");
          this.Resoure_Data.Music_Switch_Set(this.Resoure_Data.Music_Switch_Get());
          this.Resoure_Data.Sound_Switch_Set(this.Resoure_Data.Sound_Switch_Get());
          this.Resoure_Data.Vibration_Switch_Set(this.Resoure_Data.Vibration_Switch_Get());
          this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
          this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
          this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
          this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
          this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          console.log("注册设置面板");
          /**音乐开关按钮 */

          var FunPSMusicSwitch = () => {
            this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            this.Resoure_Data.Music_Switch_Set(!this.Resoure_Data.Music_Switch_Get());
            this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
            this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          };
          /**声音开关按钮 */


          var FunPSSoundSwitch = () => {
            this.Resoure_Data.Sound_Switch_Set(!this.Resoure_Data.Sound_Switch_Get());
            this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
            this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
            this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
          };
          /**震动开关按钮 */


          var FunPSVibrateSwitch = () => {
            this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            this.Resoure_Data.Vibration_Switch_Set(!this.Resoure_Data.Vibration_Switch_Get());
            this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
            this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          };
          /**关闭按钮 */


          var FunPSBtnClose = () => {
            FunPSBtnExit();
          };
          /**放弃挑战 */


          var FunPSBtnExit = () => {
            this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            this.PanelGameHide();
            this.ViewHide();
          };
          /**返回游戏 */


          var FunPSBtnBack = () => {
            this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
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


        OnPanelProp(AnimSwitch) {
          if (AnimSwitch === void 0) {
            AnimSwitch = false;
          }

          /**返回按钮 */
          var FunBack = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.PanelGameHide();
            this.ViewHide();
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


        OnPanelRegionl(AnimSwitch) {
          if (AnimSwitch === void 0) {
            AnimSwitch = false;
          }

          /**关闭按钮 */
          var FunPRBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            /**获取数据 */

            super.DataGet();
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRegionl);
          };
          /**确定按钮 */


          var FunPRBtnOk = () => {
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


        OnPanelRank(AnimSwitch) {
          if (AnimSwitch === void 0) {
            AnimSwitch = false;
          }

          /**关闭按钮 */
          var FunPRCBtnClose = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Pool_Put(this.PanelRank);
          };
          /**好友排行按钮 */


          var FunPRCBtnRankingFriends = () => {
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


          var FunPRCRankingWorld = () => {
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
        /**场景加载 */


        SceneLoad() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
                error: Error()
              }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(_this2.Message, 0);
              /**加载设置界面 */

              yield _this2.LoadPanelSetting();
              resolve();
            }));
          })();
        }
        /**加载设置面板 */


        LoadPanelSetting() {
          var _this3 = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            /**加载预制体 */
            var PrefabPanelSetting = yield _this3.Resoure_Data.Load_Prefab("Prefab/PanelSetting");
            _this3.PanelSetting = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelSetting, _this3.InterfaceView, v3(0, 0, 0), "");
            _this3.PanelSetting.active = false;
            _this3.PS_MusicSwitch = find("Window/MusicLayout/Switch", _this3.PanelSetting);
            _this3.PS_SoundSwitch = find("Window/SoundLayout/Switch", _this3.PanelSetting);
            _this3.PS_VibrateSwitch = find("Window/VibrateLayout/Switch", _this3.PanelSetting);
            _this3.PS_BtnClose = find("BtnClose", _this3.PanelSetting);
            _this3.PS_BtnExit = find("BtnLayout/BtnMain", _this3.PanelSetting);
            _this3.PS_BtnBack = find("BtnLayout/BtnContinue", _this3.PanelSetting);
            /**注册设置面板 */

            _this3.OnPanelSetting(_this3.AnimSwitch);

            resolve();
          }));
        }
        /**加载道具面板 */


        LoadPanelProp() {
          var _this4 = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            /**加载预制体 */
            var PrefabPanelProp = yield _this4.Resoure_Data.Load_Prefab("Prefab/PanelProp");
            _this4.PanelProp = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelProp, _this4.InterfaceView, v3(0, 0, 0), "");
            _this4.PanelProp.active = false;
            /**绑定关键节点 */

            _this4.PP_LabeTitle = find("Window/Title", _this4.PanelProp).getComponent(Label);
            _this4.PP_LabeNumber = find("Window/Icon/Number", _this4.PanelProp).getComponent(Label);
            _this4.PP_BtnClose = find("Window/BtnClose", _this4.PanelProp);
            _this4.PP_BtnOk = find("Window/BtnOk", _this4.PanelProp);
            /**注册道具面板 */

            _this4.OnPanelProp(_this4.AnimSwitch);

            resolve();
          }));
        }
        /**加载成语面板 */


        LoadPanelIdiom() {
          var _this5 = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            /**加载预制体 */
            var PrefabPanelIdiom = yield _this5.Resoure_Data.Load_Prefab("Prefab/PanelIdiom/PanelIdiom");
            _this5.PanelIdiom = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelIdiom, _this5.InterfaceView, v3(0, 0, 0), "");
            resolve();
          }));
        }
        /**获取道具 */


        GetProp(Value, Text) {
          var _superprop_getDataSet = () => super.DataSet,
              _this6 = this;

          return _asyncToGenerator(function* () {
            if (Value === void 0) {
              Value = 1;
            }

            if (Text === void 0) {
              Text = "获得奖励";
            }

            if (_this6.PanelProp == null) {
              /**加载道具面板 */
              yield _this6.LoadPanelProp();
            }

            _this6.PropNum += Value;

            _superprop_getDataSet().call(_this6);

            find("Window/Icon/Number", _this6.PanelProp).getComponent(Label).string = "x" + Value;
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Node_Index_Set(_this6.PanelProp, -1);
            _this6.PanelProp.active = true;
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(_this6.PanelProp.getChildByName("Window"));
          })();
        }
        /**游戏面板隐藏 */


        PanelGameHide() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (_this7.PanelGame != null) {
              _this7.PanelGame.active = false;
            }
          })();
        }
        /**视图隐藏 */


        ViewHide() {
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Hide_Node_Children(this.InterfaceView);
        }
        /**显示消息 */


        OnMessage(Text, Time) {
          if (Text === void 0) {
            Text = "";
          }

          if (Time === void 0) {
            Time = 2;
          }

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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MessageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4586e12cc1757cad328b0b223ef3d07753c15f30.js.map