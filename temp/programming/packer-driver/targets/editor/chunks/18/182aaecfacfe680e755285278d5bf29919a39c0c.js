System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Label, Node, v3, Game_Script_Template, Tool_Event, Tool_Animation, Tool_UI, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Game_Script;

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
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Game_Script_Template = _unresolved_2.Game_Script_Template;
    }, function (_unresolved_3) {
      Tool_Event = _unresolved_3.Tool_Event;
    }, function (_unresolved_4) {
      Tool_Animation = _unresolved_4.Tool_Animation;
    }, function (_unresolved_5) {
      Tool_UI = _unresolved_5.Tool_UI;
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
        constructor(...args) {
          super(...args);

          /**是否提示 */
          this.IsHint = false;

          /**是否复活 */
          this.IsContinue = false;
          this.GameTime = 0;
          this.TimerCall = null;

          /**主页面板 */
          this.ViewMain = null;
          this.GamePlay = null;

          /**数学消消按钮 */
          this.VM_BtnMathMatch = null;
          //---------------------------------------------------------------------------------------

          /**设置按钮 */
          this.VM_BtnSetting = null;

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

          /**找演员面板 */
          this.PanelMathMatch = null;

          _initializerDefineProperty(this, "Message", _descriptor, this);

          _initializerDefineProperty(this, "MessageLabel", _descriptor2, this);

          /**动画开关 */
          this.AnimSwitch = false;
        }

        onLoad() {
          super.onLoad(); // PlatformApi.instance.showInterstitialAd();
        }

        async start() {
          super.start();
          this.BlockInputEvents.active = true;
          await this.SceneLoad();
          this.BlockInputEvents.active = false;
          console.log("播放音乐"); // this.Resoure_Data.Music_Play("Audio/Sound/BgmGame");
          // console.log(HttpRequest.instance.getOpenId());
          // console.log("-----------getOpenId------------");
        }
        /**场景加载 */


        async SceneLoad() {
          return new Promise(async (resolve, reject) => {
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_UIOpacity(this.Message, 0);
            /**加载主界面 */

            await this.LoadViewMain();
            /**加载设置界面 */

            await this.LoadPanelSetting();
            resolve();
          });
        }

        OnViewMain(AnimSwitch = false) {
          /**数学消消按钮 */
          const BtnMathMatchCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");

            if (this.PanelMathMatch == null) {
              /**加载面板 */
              await this.LoadPanelMathMatch();
            }

            this.PanelMathMatch.active = true; // this.FilmNext();
          };
          /**设置按钮 */


          const FunVMBtnSetting = () => {
            this.Resoure_Data.Sound_Play("Audio/SoundBtn");
            this.UpdatePanelSetting();
          };
          /**设置按钮事件 */


          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnMathMatch.getChildByName("Icon"), BtnMathMatchCall);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.On_Event_TOUCH_END(this.VM_BtnSetting.getChildByName("Icon"), FunVMBtnSetting);
          /**设置按钮动画 */

          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnMathMatch.getChildByName("Icon"), AnimSwitch);
          (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
            error: Error()
          }), Tool_Event) : Tool_Event).instance.Set_Btn_Event_Anim(this.VM_BtnSetting.getChildByName("Icon"), AnimSwitch);
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

            this.GamePlay = find("InterfaceButton/GamePlay", this.ViewMain);
            this.VM_BtnSetting = find("InterfaceButton/Btn_Setting", this.ViewMain);
            this.VM_BtnMathMatch = find("Page1/Btn_MathMatch", this.GamePlay);
            /**注册主界面 */

            this.OnViewMain(this.AnimSwitch);
            ;
            resolve();
          });
        }
        /**注册设置面板 */


        OnPanelSetting(AnimSwitch = false) {
          let First_Start = this.Resoure_Data.Data_Get("First_Start");

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

          const FunPSMusicSwitch = () => {
            // this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            this.Resoure_Data.Music_Switch_Set(!this.Resoure_Data.Music_Switch_Get());
            this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
            this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
          };
          /**声音开关按钮 */


          const FunPSSoundSwitch = () => {
            this.Resoure_Data.Sound_Switch_Set(!this.Resoure_Data.Sound_Switch_Get());
            this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
            this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get(); // this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
          };
          /**震动开关按钮 */


          const FunPSVibrateSwitch = () => {
            // this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            this.Resoure_Data.Vibration_Switch_Set(!this.Resoure_Data.Vibration_Switch_Get());
            this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
            this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
          };
          /**关闭按钮 */


          const FunPSBtnClose = () => {
            FunPSBtnBack();
          };
          /**放弃挑战 */


          const FunPSBtnExit = () => {
            // this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
            (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Hide_Node_Children(this.InterfaceView);
          };
          /**返回游戏 */


          const FunPSBtnBack = () => {
            // this.Resoure_Data.Sound_Play("Audio/Sound/Btn");
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
        /**加载成语面板 */


        LoadPanelMathMatch() {
          return new Promise(async (resolve, reject) => {
            /**加载预制体 */
            let PrefabPanelMathMatch = await this.Resoure_Data.Load_Prefab("Prefab/PanelMathMatch/PanelMathMatch");
            this.PanelMathMatch = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
              error: Error()
            }), Tool_UI) : Tool_UI).instance.Set_Prefab_Node(PrefabPanelMathMatch, this.InterfaceView, v3(0, 0, 0), "");
            resolve();
          });
        }
        /**刷新设置面板 */


        UpdatePanelSetting(IsGame = false) {
          (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Node_Index_Set(this.PanelSetting, -1);
          this.PS_BtnBack.active = IsGame;
          this.PS_BtnExit.active = IsGame; // this.PS_BtnClose.active = !IsGame;

          this.PanelSetting.active = true;
        }

        Timer(Label, Time, Call = () => {}, Str = "") {
          this.GameTime = Time;
          Label.string = Time + Str;
          this.unschedule(this.TimerCall);

          this.TimerCall = () => {
            if (this.GameTime > 0) {
              this.GameTime--;
              Label.string = this.GameTime + Str;

              if (this.GameTime == 0) {
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
//# sourceMappingURL=182aaecfacfe680e755285278d5bf29919a39c0c.js.map