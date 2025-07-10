System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Label, Node, sys, ConfigShareState, ConfigSidebarState, Game_Script_Template, Tool_Event, Tool_Other, Tool_Animation, Tool_UI, PlatformApi, HttpRequest, GravityPlatform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, Game_Script;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfGravityPlatform(extras) {
    _reporterNs.report("GravityPlatform", "../Other/GeSdk/GravityPlatform", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      Label = _cc.Label;
      Node = _cc.Node;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ConfigShareState = _unresolved_2.ConfigShareState;
      ConfigSidebarState = _unresolved_2.ConfigSidebarState;
      Game_Script_Template = _unresolved_2.Game_Script_Template;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }, function (_unresolved_4) {
      Tool_Other = _unresolved_4.Tool_Other;
    }, function (_unresolved_5) {
      Tool_Animation = _unresolved_5.Tool_Animation;
    }, function (_unresolved_6) {
      Tool_UI = _unresolved_6.Tool_UI;
    }, function (_unresolved_7) {
      PlatformApi = _unresolved_7.PlatformApi;
    }, function (_unresolved_8) {
      HttpRequest = _unresolved_8.HttpRequest;
    }, function (_unresolved_9) {
      GravityPlatform = _unresolved_9.GravityPlatform;
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
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Label
      }), _dec(_class = (_class2 = class Game_Script extends (_crd && Game_Script_Template === void 0 ? (_reportPossibleCrUseOfGame_Script_Template({
        error: Error()
      }), Game_Script_Template) : Game_Script_Template) {
        constructor() {
          super(...arguments);

          /**是否提示 */
          this.IsHint = false;

          /**是否复活 */
          this.IsContinue = false;
          this.GameTime = 0;
          this.TimerCall = null;

          _initializerDefineProperty(this, "Btn_Setting", _descriptor, this);

          _initializerDefineProperty(this, "Btn_Invite", _descriptor2, this);

          _initializerDefineProperty(this, "Btn_Sidebar", _descriptor3, this);

          _initializerDefineProperty(this, "Btn_Play", _descriptor4, this);

          _initializerDefineProperty(this, "PanelMathMatch", _descriptor5, this);

          _initializerDefineProperty(this, "PanelSetting", _descriptor6, this);

          /**音乐开关按钮 */
          this.PS_MusicSwitch = null;

          /**声音开关按钮 */
          this.PS_SoundSwitch = null;

          /**震动开关按钮 */
          this.PS_VibrateSwitch = null;

          /**返回游戏 */
          this.PS_BtnContinue = null;

          /**退出游戏 */
          this.PS_BtnExit = null;

          /**关闭按钮 */
          this.PS_BtnClose = null;

          _initializerDefineProperty(this, "PanelInvite", _descriptor7, this);

          this.PI_BtnClose = null;
          this.PI_BtnInvite = null;
          this.PI_BtnGet = null;
          this.PI_BtnUpdate = null;

          _initializerDefineProperty(this, "PanelSidebar", _descriptor8, this);

          this.PSI_BtnClose = null;
          this.PSI_BtnGet = null;
          this.PSI_BtnGetEnd = null;
          this.PSI_BtnOk = null;

          /**主页面板 */
          this.ViewMain = null;
          this.GamePlay = null;

          /**数学消消按钮 */
          this.VM_BtnMathMatch = null;
          //---------------------------------------------------------------------------------------

          /**设置按钮 */
          this.VM_BtnSetting = null;

          /**设置面板 */
          // PanelSetting: Node = null;
          _initializerDefineProperty(this, "Message", _descriptor9, this);

          _initializerDefineProperty(this, "MessageLabel", _descriptor10, this);

          _initializerDefineProperty(this, "ScoreLabel1", _descriptor11, this);

          _initializerDefineProperty(this, "ScoreLabel2", _descriptor12, this);

          /**动画开关 */
          this.AnimSwitch = false;
        }

        onLoad() {
          var _superprop_getOnLoad = () => super.onLoad,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getOnLoad().call(_this); // PlatformApi.instance.showInterstitialAd();


            _this.PanelMathMatch.active = false; // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC")
            // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN")
            // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE")
            // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU")
          })();
        }

        start() {
          var _superprop_getStart = () => super.start,
              _this2 = this;

          return _asyncToGenerator(function* () {
            _superprop_getStart().call(_this2); // this.BlockInputEvents.active = true;


            _this2.OnEvent();

            _this2.BlockInputEvents.active = false;
            console.log("播放音乐");

            _this2.Resoure_Data.Music_Play("Audio/BgmGame"); // console.log(HttpRequest.instance.getOpenId());
            // console.log("-----------getOpenId------------");


            if (window.wx) {
              _this2.IsNewDay();

              _this2.IsSharePlayer();
            }
          })();
        }

        OnEvent() {
          this.OnMain();
          this.OnPanelSetting();
          this.OnPanelInvite();
          this.OnPanelSidebar();
          this.UpdateScore();
        }

        OnMain() {
          var _this3 = this;

          console.log("OnMain");

          var Btn_SettingCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.UpdatePanelSetting(false);
          };

          var Btn_InviteCall = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* () {
              _this3.Resoure_Data.Sound_Play("Audio/BtnClick");

              if (_this3.Resoure_Data.Vibration_Switch_Get()) {
                (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                  error: Error()
                }), PlatformApi) : PlatformApi).instance.vibrateShort();
              }

              _this3.PanelInvite.active = true;

              _this3.GetShareReward();

              var Window = _this3.PanelInvite.getChildByName("Window");

              (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
                error: Error()
              }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(Window);
            });

            return function Btn_InviteCall() {
              return _ref.apply(this, arguments);
            };
          }();

          var Btn_SidebarCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.UpdatePanelSidebar();
            this.PanelSidebar.active = true;
            var Window = this.PanelSidebar.getChildByName("Window");
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Anim_Show_Window(Window);
          };

          var Btn_PlayCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelMathMatch.active = true;
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.Btn_Setting.getChildByName("Icon"), Btn_SettingCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.Btn_Invite.getChildByName("Icon"), Btn_InviteCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.Btn_Sidebar.getChildByName("Icon"), Btn_SidebarCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.Btn_Play.getChildByName("Icon"), Btn_PlayCall);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.Btn_Setting.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.Btn_Invite.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.Btn_Sidebar.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.Btn_Play.getChildByName("Icon"), this.AnimSwitch);
        }
        /**注册设置面板 */


        OnPanelSetting(AnimSwitch) {
          if (AnimSwitch === void 0) {
            AnimSwitch = false;
          }

          this.PS_MusicSwitch = find("Window/MusicLayout/Switch", this.PanelSetting);
          this.PS_SoundSwitch = find("Window/SoundLayout/Switch", this.PanelSetting);
          this.PS_VibrateSwitch = find("Window/VibrateLayout/Switch", this.PanelSetting);
          this.PS_BtnClose = find("BtnClose", this.PanelSetting);
          this.PS_BtnExit = find("BtnLayout/BtnExit", this.PanelSetting);
          this.PS_BtnContinue = find("BtnLayout/BtnContinue", this.PanelSetting);
          var First_Start = this.Resoure_Data.Data_Get("First_Start");

          if (First_Start) {
            First_Start = false;
            this.Resoure_Data.Data_Set("First_Start", First_Start);
          }

          this.Resoure_Data.Music_Switch_Set(this.Resoure_Data.Music_Switch_Get());
          this.Resoure_Data.Sound_Switch_Set(this.Resoure_Data.Sound_Switch_Get());
          this.Resoure_Data.Vibration_Switch_Set(this.Resoure_Data.Vibration_Switch_Get());
          this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
          this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
          this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
          this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
          this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          /**音乐开关按钮 */

          var PS_MusicSwitchCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.Resoure_Data.Music_Switch_Set(!this.Resoure_Data.Music_Switch_Get());
            this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
            this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          };
          /**声音开关按钮 */


          var PS_SoundSwitchCall = () => {
            this.Resoure_Data.Sound_Switch_Set(!this.Resoure_Data.Sound_Switch_Get());
            this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
            this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }
          };
          /**震动开关按钮 */


          var PS_VibrateSwitchCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.Resoure_Data.Vibration_Switch_Set(!this.Resoure_Data.Vibration_Switch_Get());
            this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
            this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          };
          /**关闭按钮 */


          var PS_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelSetting.active = false;
          };
          /**退出按钮 */


          var PS_BtnExitCall = () => {
            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
              try {
                // window.ge.onLevelGiveUp({ "$user_level": this.MathMatchLevel });
                (_crd && GravityPlatform === void 0 ? (_reportPossibleCrUseOfGravityPlatform({
                  error: Error()
                }), GravityPlatform) : GravityPlatform).instance.onLevelGiveUp({
                  "$user_level": this.MathMatchLevel
                });
              } catch (error) {
                console.log(error);
              }
            }

            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Hide_Node_Children(this.InterfaceView);
            this.PanelMathMatch.active = false;
          };
          /**继续按钮 */


          var PS_BtnContinueCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            PS_BtnCloseCall();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_MusicSwitch, PS_MusicSwitchCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_SoundSwitch, PS_SoundSwitchCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_VibrateSwitch, PS_VibrateSwitchCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnClose, PS_BtnCloseCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnContinue, PS_BtnContinueCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PS_BtnExit, PS_BtnExitCall);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnClose, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnContinue, AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PS_BtnExit, AnimSwitch);
        }

        OnPanelInvite() {
          this.PI_BtnClose = find("Window/BtnClose", this.PanelInvite);
          this.PI_BtnInvite = find("BtnInvite", this.PanelInvite);
          this.PI_BtnGet = find("BtnGet", this.PanelInvite);
          this.PI_BtnUpdate = find("BtnUpdate", this.PanelInvite);

          var PI_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelInvite.active = false;
          };

          var PI_BtnInviteCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.shareAppMessage(() => {});
          };

          var PI_BtnGetCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            var PropNum = this.InvitedCount - this.ShareRewardCount;
            console.log("领取成功", PropNum);
            this.ShareRewardCount = this.InvitedCount;
            this.PropNum += 3;
            super.DataSet();
            this.OnMessage("提示道具+3");
            /**获取分享礼包 */

            this.GetShareReward();
          };

          var PI_BtnUpdateCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.GetShareReward();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnClose.getChildByName("Icon"), PI_BtnCloseCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnInvite.getChildByName("Icon"), PI_BtnInviteCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnGet.getChildByName("Icon"), PI_BtnGetCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PI_BtnUpdate.getChildByName("Icon"), PI_BtnUpdateCall);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnClose.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnInvite.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnGet.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PI_BtnUpdate.getChildByName("Icon"), this.AnimSwitch);
        }

        OnPanelSidebar() {
          this.PSI_BtnClose = find("Window/BtnClose", this.PanelSidebar);
          this.PSI_BtnGet = find("BtnGet", this.PanelSidebar);
          this.PSI_BtnGetEnd = find("BtnGetEnd", this.PanelSidebar);
          this.PSI_BtnOk = find("BtnOk", this.PanelSidebar);

          var PSI_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            this.PanelSidebar.active = false;
          };

          var PSI_BtnGetCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");

            if (this.Resoure_Data.Vibration_Switch_Get()) {
              (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
                error: Error()
              }), PlatformApi) : PlatformApi).instance.vibrateShort();
            }

            if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Get) {
              this.SidebarState = (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
                error: Error()
              }), ConfigSidebarState) : ConfigSidebarState).Other;
              super.DataSet();
              /**更新奖励面板 */

              this.UpdatePanelSidebar();
              this.PropNum += 1;
              super.DataSet();
              this.OnMessage("提示道具+1");
            }

            if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Other) {
              console.log("已领取");
            }
          };

          var PSI_BtnGetEndCall = () => {// this.Resoure_Data.Sound_Play("Audio/BtnClick");
            // if (this.Resoure_Data.Vibration_Switch_Get()) {
            //     PlatformApi.instance.vibrateShort();
            // }
          };

          var PSI_BtnOkCall = () => {
            PSI_BtnCloseCall();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PSI_BtnClose.getChildByName("Icon"), PSI_BtnCloseCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PSI_BtnGet.getChildByName("Icon"), PSI_BtnGetCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PSI_BtnGetEnd.getChildByName("Icon"), PSI_BtnGetEndCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.PSI_BtnOk.getChildByName("Icon"), PSI_BtnOkCall);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PSI_BtnClose.getChildByName("Icon"), this.AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PSI_BtnGet.getChildByName("Icon"), this.AnimSwitch); // Tool_Event.instance.Set_Btn_Event_Anim(this.PSI_BtnGetEnd.getChildByName("Icon"), this.AnimSwitch);

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.PSI_BtnOk.getChildByName("Icon"), this.AnimSwitch);
        }
        /**刷新设置面板 */


        UpdatePanelSetting(IsGame) {
          if (IsGame === void 0) {
            IsGame = false;
          }

          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Node_Index_Set(this.PanelSetting, -1);
          this.PS_BtnContinue.active = IsGame;
          this.PS_BtnExit.active = IsGame;
          this.PS_BtnClose.active = !IsGame;
          this.PanelSetting.active = true;
        }

        UpdateScore() {
          this.ScoreLabel1.string = this.MathMatchScore + "";
          this.ScoreLabel2.string = this.MathMatchScore + "";
        }

        Timer(Label, Time, Call, Str, CallS) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Str === void 0) {
            Str = "";
          }

          if (CallS === void 0) {
            CallS = () => {};
          }

          // this.GameTime = Time;
          Label.string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Seconds_To_Time_String(Time).substring(1); // Time + Str;

          this.unschedule(this.TimerCall);

          this.TimerCall = () => {
            CallS == null || CallS();

            if (Time > 0) {
              Time--;
              Label.string = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
                error: Error()
              }), Tool_Other) : Tool_Other).instance.Seconds_To_Time_String(Time).substring(1); // Time + Str;

              if (Time == 0) {
                this.unschedule(this.TimerCall);
                Call == null || Call();
              }
            } else {
              this.unschedule(this.TimerCall);
            }
          }; // this._Timer_Schedule = () => {
          //     this._Time++;
          //     this._UpDate_Timer();
          // }


          this.schedule(this.TimerCall, 1);
        }

        TimerStop() {
          this.unschedule(this.TimerCall);
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
        /**是否从分享链接进入游戏 */


        IsSharePlayer() {
          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            // let LaunchOptionsSync = {
            //     scene: "1089",
            //     query: {
            //         openId: this.openIdTest,
            //     }
            // } 
            var LaunchOptionsSync = (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.getLaunchOptionsSync();
            console.log("获取进入场景", LaunchOptionsSync);

            if (LaunchOptionsSync && LaunchOptionsSync.query.openId && "" != LaunchOptionsSync.query.openId) {
              console.log("从分享链接进入"); // let TopenIds = [];
              // for (let i = 0; i < 10; i++) {
              //     TopenIds[i] = "openIdTest" + Tool_Other.instance.Get_Random_Int(10000, 99999);
              // }
              // let TopenId = TopenIds[Tool_Other.instance.Get_Random_Int(0, TopenIds.length - 1)];
              // console.log(TopenId);

              (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
                error: Error()
              }), HttpRequest) : HttpRequest).instance.request("zdydc/friend/acceptInvitation", {
                openId: LaunchOptionsSync.query.openId,
                //邀请者的openId
                receiveId: this.openId //自己的openId this.openId

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

          this.Btn_Invite.getChildByName("Icon").children[0].active = this.PI_BtnGet.active;
        }
        /**是否是新的一天 */


        IsNewDay() {
          var DateCurrent = this.Resoure_Data.Get_Current_Date();
          console.log(DateCurrent, this.DateLast);
          var GetIsNewDay = DateCurrent !== this.DateLast;

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
            }), ConfigSidebarState) : ConfigSidebarState).Ok; // let LaunchOptionsSync = {
            //     scene: "1089",
            //     query: {
            //         openId: "aduyegwauuia"
            //     }
            // }

            var LaunchOptionsSync = (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.getLaunchOptionsSync();
            console.log("getLaunchOptionsSync: ", LaunchOptionsSync);
            this.CheckSidebarReward(LaunchOptionsSync.scene);
          }
        }
        /**查看侧边栏奖励 */


        CheckSidebarReward(Scene_Value) {
          if (Scene_Value === undefined) {
            console.log("查看侧边栏奖励Scene_Value:", Scene_Value);
            return;
          }

          if (this.SidebarState == (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
            error: Error()
          }), ConfigSidebarState) : ConfigSidebarState).Ok) {
            if ("1089" == Scene_Value || "1271" == Scene_Value || "1273" == Scene_Value) {
              this.SidebarSwitch = false;
              this.SidebarState = (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
                error: Error()
              }), ConfigSidebarState) : ConfigSidebarState).Get;
              super.DataSet();
              console.log("SidebarState:", this.SidebarState);
              this.UpdatePanelSidebar();
            }
          }
        }
        /**刷新侧边栏面板 */


        UpdatePanelSidebar() {
          console.warn(this.SidebarState, this.SidebarState === (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
            error: Error()
          }), ConfigSidebarState) : ConfigSidebarState).Ok);
          console.log("刷新侧边栏面板");

          switch (this.SidebarState) {
            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Ok:
              this.PSI_BtnGet.active = false;
              this.PSI_BtnGetEnd.active = false;
              this.PSI_BtnOk.active = true;
              break;

            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Get:
              this.PSI_BtnGet.active = true;
              this.PSI_BtnGetEnd.active = false;
              this.PSI_BtnOk.active = false;
              break;

            case (_crd && ConfigSidebarState === void 0 ? (_reportPossibleCrUseOfConfigSidebarState({
              error: Error()
            }), ConfigSidebarState) : ConfigSidebarState).Other:
              this.PSI_BtnGet.active = false;
              this.PSI_BtnGetEnd.active = true;
              this.PSI_BtnOk.active = false;
              break;

            default:
              break;
          }

          this.Btn_Sidebar.getChildByName("Icon").children[0].active = this.PSI_BtnGet.active;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Btn_Setting", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Btn_Invite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Btn_Sidebar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Btn_Play", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "PanelMathMatch", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "PanelSetting", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PanelInvite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PanelSidebar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Message", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "MessageLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ScoreLabel1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "ScoreLabel2", [_dec13], {
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
//# sourceMappingURL=2b2e5c39561c991cfeda04c9c60ea186effe710d.js.map