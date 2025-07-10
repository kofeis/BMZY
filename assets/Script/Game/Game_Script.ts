import { _decorator, color, Component, find, instantiate, Label, Node, Prefab, Sprite, v3, Animation, game, director, RigidBody2D, isValid, BoxCollider2D, math, v2, UIOpacity, tween, animation, log, Layout, sys, ScrollView, Color, BlockInputEvents, Button, Vec3, RichText } from 'cc';
import { ConfigShareState, ConfigSidebarState, Game_Script_Template } from './Game_Script_Template';
import { Tool_Event } from '../Tool/Tool_Event';
import { Tool_Other } from '../Tool/Tool_Other';
import { Tool_Animation } from '../Tool/Tool_Animation';
import { Tool_UI } from '../Tool/Tool_UI';
import { Tool_Console } from '../Tool/Tool_Console';
import { PlatformApi } from '../Other/SDK/PlatformApi';
import { HttpRequest } from '../Other/SDK/HttpRequest';
import { GravityPlatform } from '../Other/GeSdk/GravityPlatform';
const { ccclass, property } = _decorator;

@ccclass('Game_Script')
export class Game_Script extends Game_Script_Template {

    /**是否提示 */
    IsHint: boolean = false;
    /**是否复活 */
    IsContinue: boolean = false;


    GameTime: number = 0;
    TimerCall: Function = null;



    @property({ type: Node })
    Btn_Setting: Node = null;

    @property({ type: Node })
    Btn_Invite: Node = null;

    @property({ type: Node })
    Btn_Sidebar: Node = null;

    @property({ type: Node })
    Btn_Play: Node = null;



    @property({ type: Node })
    PanelMathMatch: Node = null;

    @property({ type: Node })
    PanelSetting: Node = null;
    /**音乐开关按钮 */
    PS_MusicSwitch: Node = null;
    /**声音开关按钮 */
    PS_SoundSwitch: Node = null;
    /**震动开关按钮 */
    PS_VibrateSwitch: Node = null;
    /**返回游戏 */
    PS_BtnContinue: Node = null;
    /**退出游戏 */
    PS_BtnExit: Node = null;
    /**关闭按钮 */
    PS_BtnClose: Node = null;


    @property({ type: Node })
    PanelInvite: Node = null;
    PI_BtnClose: Node = null;
    PI_BtnInvite: Node = null;
    PI_BtnGet: Node = null;
    PI_BtnUpdate: Node = null;

    @property({ type: Node })
    PanelSidebar: Node = null;
    PSI_BtnClose: Node = null;
    PSI_BtnGet: Node = null;
    PSI_BtnGetEnd: Node = null;
    PSI_BtnOk: Node = null;

    /**主页面板 */
    ViewMain: Node = null;
    GamePlay: Node = null;
    /**数学消消按钮 */
    VM_BtnMathMatch: Node = null;


    //---------------------------------------------------------------------------------------
    /**设置按钮 */
    VM_BtnSetting: Node = null;
    /**设置面板 */
    // PanelSetting: Node = null;





    @property({ type: Node })
    Message: Node = null;
    @property({ type: Label })
    MessageLabel: Label = null;


    @property({ type: Label })
    ScoreLabel1: Label = null;

    @property({ type: Label })
    ScoreLabel2: Label = null;


    /**动画开关 */
    AnimSwitch: boolean = false;

    async onLoad() {
        super.onLoad();
        // PlatformApi.instance.showInterstitialAd();

        this.PanelMathMatch.active = false;
        // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC")
        // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN")
        // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE")
        // await this.Resoure_Data.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU")
    }

    async start() {
        super.start();
        // this.BlockInputEvents.active = true;
        this.OnEvent();
        this.BlockInputEvents.active = false;
        console.log("播放音乐");
        this.Resoure_Data.Music_Play("Audio/BgmGame");
        // console.log(HttpRequest.instance.getOpenId());
        // console.log("-----------getOpenId------------");


        if (window.wx) {
            this.IsNewDay();
            this.IsSharePlayer();
        }
    }


    OnEvent() {
        this.OnMain();
        this.OnPanelSetting();
        this.OnPanelInvite();
        this.OnPanelSidebar();
        this.UpdateScore();
    }


    OnMain() {
        console.log("OnMain");
        const Btn_SettingCall = () => {

            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }

            this.UpdatePanelSetting(false);
        }
        const Btn_InviteCall = async () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.PanelInvite.active = true;
            this.GetShareReward();
            let Window = this.PanelInvite.getChildByName("Window");
            Tool_Animation.instance.Anim_Show_Window(Window);
        }
        const Btn_SidebarCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.UpdatePanelSidebar();
            this.PanelSidebar.active = true;
            let Window = this.PanelSidebar.getChildByName("Window");
            Tool_Animation.instance.Anim_Show_Window(Window);
        }
        const Btn_PlayCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.PanelMathMatch.active = true;
        }
        /**设置按钮事件 */
        Tool_Event.instance.On_Event_TOUCH_END(this.Btn_Setting.getChildByName("Icon"), Btn_SettingCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.Btn_Invite.getChildByName("Icon"), Btn_InviteCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.Btn_Sidebar.getChildByName("Icon"), Btn_SidebarCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.Btn_Play.getChildByName("Icon"), Btn_PlayCall);
        /**设置按钮动画 */
        Tool_Event.instance.Set_Btn_Event_Anim(this.Btn_Setting.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.Btn_Invite.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.Btn_Sidebar.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.Btn_Play.getChildByName("Icon"), this.AnimSwitch);
    }
    /**注册设置面板 */
    OnPanelSetting(AnimSwitch: boolean = false) {
        this.PS_MusicSwitch = find("Window/MusicLayout/Switch", this.PanelSetting);
        this.PS_SoundSwitch = find("Window/SoundLayout/Switch", this.PanelSetting);
        this.PS_VibrateSwitch = find("Window/VibrateLayout/Switch", this.PanelSetting);
        this.PS_BtnClose = find("BtnClose", this.PanelSetting);
        this.PS_BtnExit = find("BtnLayout/BtnExit", this.PanelSetting);
        this.PS_BtnContinue = find("BtnLayout/BtnContinue", this.PanelSetting);

        let First_Start = this.Resoure_Data.Data_Get("First_Start");
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
        const PS_MusicSwitchCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.Resoure_Data.Music_Switch_Set(!this.Resoure_Data.Music_Switch_Get());
            this.PS_MusicSwitch.getChildByName("On").active = this.Resoure_Data.Music_Switch_Get();
            this.PS_MusicSwitch.getChildByName("Off").active = !this.Resoure_Data.Music_Switch_Get();
        }
        /**声音开关按钮 */
        const PS_SoundSwitchCall = () => {
            this.Resoure_Data.Sound_Switch_Set(!this.Resoure_Data.Sound_Switch_Get());
            this.PS_SoundSwitch.getChildByName("On").active = this.Resoure_Data.Sound_Switch_Get();
            this.PS_SoundSwitch.getChildByName("Off").active = !this.Resoure_Data.Sound_Switch_Get();
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
        }
        /**震动开关按钮 */
        const PS_VibrateSwitchCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.Resoure_Data.Vibration_Switch_Set(!this.Resoure_Data.Vibration_Switch_Get());
            this.PS_VibrateSwitch.getChildByName("On").active = this.Resoure_Data.Vibration_Switch_Get();
            this.PS_VibrateSwitch.getChildByName("Off").active = !this.Resoure_Data.Vibration_Switch_Get();
        }
        /**关闭按钮 */
        const PS_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.PanelSetting.active = false;
        }
        /**退出按钮 */
        const PS_BtnExitCall = () => {

            if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
                try {
                    // window.ge.onLevelGiveUp({ "$user_level": this.MathMatchLevel });
                    GravityPlatform.instance.onLevelGiveUp({ "$user_level": this.MathMatchLevel });
                } catch (error) {
                    console.log(error);

                }
            }

            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            Tool_UI.instance.Hide_Node_Children(this.InterfaceView);
            this.PanelMathMatch.active = false;
        }
        /**继续按钮 */
        const PS_BtnContinueCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            PS_BtnCloseCall();
        }
        /**设置按钮事件 */
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_MusicSwitch, PS_MusicSwitchCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_SoundSwitch, PS_SoundSwitchCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_VibrateSwitch, PS_VibrateSwitchCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_BtnClose, PS_BtnCloseCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_BtnContinue, PS_BtnContinueCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PS_BtnExit, PS_BtnExitCall);
        /**设置按钮动画 */
        Tool_Event.instance.Set_Btn_Event_Anim(this.PS_BtnClose, AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PS_BtnContinue, AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PS_BtnExit, AnimSwitch);
    }

    OnPanelInvite() {
        this.PI_BtnClose = find("Window/BtnClose", this.PanelInvite);
        this.PI_BtnInvite = find("BtnInvite", this.PanelInvite);
        this.PI_BtnGet = find("BtnGet", this.PanelInvite);
        this.PI_BtnUpdate = find("BtnUpdate", this.PanelInvite);

        const PI_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.PanelInvite.active = false;
        }
        const PI_BtnInviteCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            PlatformApi.instance.shareAppMessage(() => { });
        }
        const PI_BtnGetCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            let PropNum = this.InvitedCount - this.ShareRewardCount;
            console.log("领取成功", PropNum);
            this.ShareRewardCount = this.InvitedCount;
            this.PropNum += 3;
            super.DataSet();
            this.OnMessage("提示道具+3");
            /**获取分享礼包 */
            this.GetShareReward();
        }
        const PI_BtnUpdateCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.GetShareReward();
        }

        /**设置按钮事件 */
        Tool_Event.instance.On_Event_TOUCH_END(this.PI_BtnClose.getChildByName("Icon"), PI_BtnCloseCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PI_BtnInvite.getChildByName("Icon"), PI_BtnInviteCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PI_BtnGet.getChildByName("Icon"), PI_BtnGetCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PI_BtnUpdate.getChildByName("Icon"), PI_BtnUpdateCall);
        /**设置按钮动画 */
        Tool_Event.instance.Set_Btn_Event_Anim(this.PI_BtnClose.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PI_BtnInvite.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PI_BtnGet.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PI_BtnUpdate.getChildByName("Icon"), this.AnimSwitch);

    }

    OnPanelSidebar() {
        this.PSI_BtnClose = find("Window/BtnClose", this.PanelSidebar);
        this.PSI_BtnGet = find("BtnGet", this.PanelSidebar);
        this.PSI_BtnGetEnd = find("BtnGetEnd", this.PanelSidebar);
        this.PSI_BtnOk = find("BtnOk", this.PanelSidebar);

        const PSI_BtnCloseCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            this.PanelSidebar.active = false;
        }

        const PSI_BtnGetCall = () => {
            this.Resoure_Data.Sound_Play("Audio/BtnClick");
            if (this.Resoure_Data.Vibration_Switch_Get()) {
                PlatformApi.instance.vibrateShort();
            }
            if (this.SidebarState == ConfigSidebarState.Get) {
                this.SidebarState = ConfigSidebarState.Other;
                super.DataSet();
                /**更新奖励面板 */
                this.UpdatePanelSidebar();
                this.PropNum += 1;
                super.DataSet();
                this.OnMessage("提示道具+1");
            } if (this.SidebarState == ConfigSidebarState.Other) {
                console.log("已领取");
            }
        }

        const PSI_BtnGetEndCall = () => {
            // this.Resoure_Data.Sound_Play("Audio/BtnClick");
            // if (this.Resoure_Data.Vibration_Switch_Get()) {
            //     PlatformApi.instance.vibrateShort();
            // }
        }
        const PSI_BtnOkCall = () => {
            PSI_BtnCloseCall();
        }

        /**设置按钮事件 */
        Tool_Event.instance.On_Event_TOUCH_END(this.PSI_BtnClose.getChildByName("Icon"), PSI_BtnCloseCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PSI_BtnGet.getChildByName("Icon"), PSI_BtnGetCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PSI_BtnGetEnd.getChildByName("Icon"), PSI_BtnGetEndCall);
        Tool_Event.instance.On_Event_TOUCH_END(this.PSI_BtnOk.getChildByName("Icon"), PSI_BtnOkCall);
        /**设置按钮动画 */
        Tool_Event.instance.Set_Btn_Event_Anim(this.PSI_BtnClose.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PSI_BtnGet.getChildByName("Icon"), this.AnimSwitch);
        // Tool_Event.instance.Set_Btn_Event_Anim(this.PSI_BtnGetEnd.getChildByName("Icon"), this.AnimSwitch);
        Tool_Event.instance.Set_Btn_Event_Anim(this.PSI_BtnOk.getChildByName("Icon"), this.AnimSwitch);

    }

    /**刷新设置面板 */
    UpdatePanelSetting(IsGame: boolean = false) {
        Tool_UI.instance.Node_Index_Set(this.PanelSetting, -1);
        this.PS_BtnContinue.active = IsGame;
        this.PS_BtnExit.active = IsGame;
        this.PS_BtnClose.active = !IsGame;
        this.PanelSetting.active = true;
    }

    UpdateScore() {

        this.ScoreLabel1.string = this.MathMatchScore + "";
        this.ScoreLabel2.string = this.MathMatchScore + "";

    }

    // Timer(Label: Label, Time: number, Call: Function = () => { }, Str: string = "", CallS: Function = () => { }) {
    //     // this.GameTime = Time;
    //     Label.string = Tool_Other.instance.Seconds_To_Time_String(Time).substring(1) // Time + Str;
    //     this.unschedule(this.TimerCall);

    //     this.TimerCall = () => {
    //         CallS?.();
    //         if (Time > 0) {
    //             Time--;
    //             Label.string = Tool_Other.instance.Seconds_To_Time_String(Time).substring(1)// Time + Str;
    //             if (Time == 0) {
    //                 this.unschedule(this.TimerCall);
    //                 Call?.();
    //             }
    //         } else {
    //             this.unschedule(this.TimerCall);
    //         }
    //     }

    //     // this._Timer_Schedule = () => {
    //     //     this._Time++;
    //     //     this._UpDate_Timer();
    //     // }

    //     this.schedule(this.TimerCall, 1);
    // }

    // TimerStop() {
    //     this.unschedule(this.TimerCall);
    // }


    /**显示消息 */
    OnMessage(Text: string = "", Time: number = 2) {
        Tool_Animation.instance.Tween_Stop_Tag(1);
        this.MessageLabel.string = Text;
        Tool_Animation.instance.Anim_Show_Node(this.Message);
        Tool_Animation.instance.Async_Function_Id(Time, 1, () => {
            this.OffMessage();
        })
    }
    /**隐藏消息 */
    OffMessage() {
        Tool_Animation.instance.Anim_Hide_Node(this.Message);
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
            let LaunchOptionsSync = PlatformApi.instance.getLaunchOptionsSync();
            console.log("获取进入场景", LaunchOptionsSync);
            if (LaunchOptionsSync && LaunchOptionsSync.query.openId && "" != LaunchOptionsSync.query.openId) {

                console.log("从分享链接进入");
                // let TopenIds = [];
                // for (let i = 0; i < 10; i++) {
                //     TopenIds[i] = "openIdTest" + Tool_Other.instance.Get_Random_Int(10000, 99999);

                // }
                // let TopenId = TopenIds[Tool_Other.instance.Get_Random_Int(0, TopenIds.length - 1)];
                // console.log(TopenId);


                HttpRequest.instance.request("zdydc/friend/acceptInvitation", {
                    openId: LaunchOptionsSync.query.openId,//邀请者的openId
                    receiveId: this.openId,//自己的openId this.openId
                }, function (t) {
                    console.log("邀请上报结果", t);
                }, function (e) {
                    console.log("失败信息", e);
                });
            } else {
                console.log("不是从分享链接进入");
            }
        }
    };


    /**获取分享礼包 */
    GetShareReward() {
        var e = new Date().getTime();
        console.log("当前邀请时间", this.ShareTime, "当前时间", e);
        console.log("剩余有效时间", this.ShareTime + 2592e5 - e);
        // if (-1 != $z1PlayerDataMager._p_data._data.share_time && $z1PlayerDataMager._p_data._data.share_time + 2592e5 >= e) {
        HttpRequest.instance.request("zdydc/friend/getInviteCount", {
            openId: this.openIdTest,//this.openId
        }, (e) => {
            console.log("getInviteCount查询结果", e, e.invitedCount, this.ShareRewardCount);//this.shareReward
            this.InvitedCount = e.invitedCount;
            console.log("领取次数", this.ShareRewardCount, "/", this.InvitedCount);
            super.DataSet();
            if (this.ShareRewardCount < this.InvitedCount) {
                console.log("有可领取邀请礼包");
                this.ShareRewardState = ConfigShareState.Get;
            } else {
                console.log("无可领取邀请礼包");
                this.ShareRewardState = ConfigShareState.Share;
            }
            /**刷新邀请面板 */
            this.UpdatePanelInvite();
        }, (e) => {
            console.log("request失败,无可领取邀请礼包");
            this.ShareRewardState = ConfigShareState.Share;
            /**刷新邀请面板 */
            this.UpdatePanelInvite();
        });
    };
    /**刷新邀请面板 */
    UpdatePanelInvite() {
        console.log("刷新邀请面板");
        if (this.ShareRewardState == ConfigShareState.Get) {
            this.PI_BtnInvite.active = false;
            this.PI_BtnGet.active = true;
        } else if (this.ShareRewardState == ConfigShareState.Share) {
            this.PI_BtnGet.active = false;
            this.PI_BtnInvite.active = true;
        }
        this.Btn_Invite.getChildByName("Icon").children[0].active = this.PI_BtnGet.active;
    }
    /**是否是新的一天 */
    IsNewDay() {
        let DateCurrent: number = this.Resoure_Data.Get_Current_Date();
        console.log(DateCurrent, this.DateLast);
        let GetIsNewDay = DateCurrent !== this.DateLast;
        if (GetIsNewDay) {
            this.DateLast = DateCurrent
            this.SidebarSwitch = true;
            super.DataSet();
        }
        console.log("是否是新的一天:", GetIsNewDay);
        console.log("是否可以再次领取奖励:", this.SidebarSwitch);
        if (this.SidebarSwitch) {
            this.SidebarState = ConfigSidebarState.Ok;
            // let LaunchOptionsSync = {
            //     scene: "1089",
            //     query: {
            //         openId: "aduyegwauuia"
            //     }
            // }
            let LaunchOptionsSync = PlatformApi.instance.getLaunchOptionsSync();
            console.log("getLaunchOptionsSync: ", LaunchOptionsSync);
            this.CheckSidebarReward(LaunchOptionsSync.scene);
        }

    }

    /**查看侧边栏奖励 */
    CheckSidebarReward(Scene_Value: string) {
        if (Scene_Value === undefined) {
            console.log("查看侧边栏奖励Scene_Value:", Scene_Value);
            return;
        }
        if (this.SidebarState == ConfigSidebarState.Ok) {
            if ("1089" == Scene_Value || "1271" == Scene_Value || "1273" == Scene_Value) {
                this.SidebarSwitch = false;
                this.SidebarState = ConfigSidebarState.Get;
                super.DataSet();
                console.log("SidebarState:", this.SidebarState);
                this.UpdatePanelSidebar();
            }
        }
    }


    /**刷新侧边栏面板 */
    UpdatePanelSidebar() {
        console.warn(this.SidebarState, this.SidebarState === ConfigSidebarState.Ok);
        console.log("刷新侧边栏面板");
        switch (this.SidebarState) {
            case ConfigSidebarState.Ok:
                this.PSI_BtnGet.active = false;
                this.PSI_BtnGetEnd.active = false;
                this.PSI_BtnOk.active = true;
                break;
            case ConfigSidebarState.Get:
                this.PSI_BtnGet.active = true;
                this.PSI_BtnGetEnd.active = false;
                this.PSI_BtnOk.active = false;
                break;
            case ConfigSidebarState.Other:
                this.PSI_BtnGet.active = false;
                this.PSI_BtnGetEnd.active = true;
                this.PSI_BtnOk.active = false;
                break;
            default:
                break;
        }
        this.Btn_Sidebar.getChildByName("Icon").children[0].active = this.PSI_BtnGet.active;
    }



    SetLevel(a) {
        console.log(a.string);


        if (!Number.isNaN(Number(a.string))) {
            this.MathMatchLevel = Number(a.string);
            super.DataSet()

        }

    }


}

