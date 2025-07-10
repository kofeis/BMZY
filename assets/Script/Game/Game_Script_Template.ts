import { _decorator, assetManager, Button, Component, find, instantiate, Label, Node, Prefab, Sprite, tween, Tween, UIOpacity, v3, Animation, director, Vec3, log } from 'cc';

import { Resoure_Data } from '../Tool/Resoure_Data';
import { Tool_Other } from '../Tool/Tool_Other';

const { ccclass, property } = _decorator;

/**菜数据 */
export interface DataDish {
    Factor: number;
    Id: number;
    Level: number;
    Region: string;
    /**正确名字 */
    CorrectName: string;
    /**错误名字 */
    WrongName: string;
}
/**地区菜配置 */
export interface ConfigRegionDish {
    Id: number;
    /**中文名 */
    City: string;
    /**拼音名 */
    NamePinYin: string;
    /**是否限免 */
    IsFree: boolean,
    /**是否成功 */
    IsSuccess: boolean,
    /**星星等级 */
    StarsLevel: number,
    /**通关人数 */
    SuccessCount: number,
}
/**地区排行配置 */
export interface ConfigRegionRanking {
    Id: number,
    /**中文名 */
    City: string;
    /**星星数量 */
    StarsNumber: number,
    /**排行名次 */
    Ranking?: number,
}
/**每日奖励状态配置 */
export enum ConfigSidebarState {
    /**知道了 */
    Ok,
    /**待领取 */
    Get,
    /**已领取 */
    Other,
}
/**分享奖励状态配置 */
export enum ConfigShareState {
    /**邀请 */
    Share,
    /**领取 */
    Get,
}

/**影视数据类型 */
// type TypeFilmData = {
//     Correct: string;
//     Wrong: string;
//     Hints: string,
//     Movie: string,
// }

@ccclass('Game_Script_Template')
export class Game_Script_Template extends Component {

    Resoure_Data: Resoure_Data = null;

    openId: string = null;

    openIdTest: string = null;

    /**分享奖励次数 */
    ShareRewardCount: number = 0;
    /**邀请人数 */
    InvitedCount: number = 0;

    /**分享奖励状态 */
    ShareRewardState: ConfigShareState = ConfigShareState.Share;

    /**分享时间 */
    ShareTime: number = -1;
    /**上一次日期 */
    DateLast: number = null;


    /**侧边栏开关(true表示可以领取奖励) */
    SidebarSwitch: boolean = null;
    /**侧边栏状态 */
    SidebarState: ConfigSidebarState = ConfigSidebarState.Ok;

    /**防触摸节点 */
    BlockInputEvents: Node = null;
    /**界面面板 */
    InterfacePannel: Node = null;
    /**界面视图 */
    InterfaceView: Node = null;

    /**排行榜 */
    SubContextView: Node = null;

    /**地区栏Id */
    PlaceBarId: number = null;

    /**题目数据 */
    TopicData: DataDish[] = null;
    /**题目数据Id */
    TopicDataId: number = null;
    /**题目数量 */
    TopicCount: number = null;
    /**题目索引 */
    TopicIndex: number = null;
    /**最小题目索引(盖楼模式) */
    TopicIndexMin: number = 20;

    /**道具数量 */
    PropNum: number = 0;
    /**道具使用数量 */
    PropNumUse: number = 0;
    /**最大道具使用数量 */
    PropNumUseMax: number = 3;

    /**最高记录 */
    HighestRecord: number = 0;
    /**上一次最高记录 */
    HighestRecordLast: number = 0;



    /**数学消消关卡 */
    MathMatchLevel: number = 0;
    /**数学消消分数 */
    MathMatchScore: number = 0;



    onLoad() {
        this.Resoure_Data = find("Resoure_Data").getComponent(Resoure_Data);
        this.InterfacePannel = find("Canvas/InterfacePannel");
        this.InterfaceView = find("Canvas/InterfaceView");
        this.SubContextView = find("Canvas/SubContextView");
        this.SubContextView.active = false;
        this.BlockInputEvents = find("Canvas/BlockInputEvents");
        this.BlockInputEvents.active = false;
    }

    constructor() {
        super();
    }

    start() {
        /**初始数据 */
        this.DataGet();
        this.DataSet();

        let openIdTest = this.Resoure_Data.Data_Get("openIdTest");
        if (openIdTest == null || openIdTest == undefined) {
            this.openIdTest = "openIdTest" + Tool_Other.instance.Get_Random_Int(10000, 99999);
            this.Resoure_Data.Data_Set("openIdTest", this.openIdTest);
            openIdTest = this.Resoure_Data.Data_Get("openIdTest");
        }
        this.openIdTest = openIdTest;

    }
    /**获取数据 */
    DataGet() {

        let PropNum = this.Resoure_Data.Data_Get("PropNum");
        if (PropNum == null || PropNum == undefined) {
            this.PropNum = 0;
            this.Resoure_Data.Data_Set("PropNum", this.PropNum);
            PropNum = this.Resoure_Data.Data_Get("PropNum");
        }
        this.PropNum = PropNum;

        /**数学消消关卡 */
        let MathMatchLevel = this.Resoure_Data.Data_Get("MathMatchLevel");
        if (MathMatchLevel == null || MathMatchLevel == undefined) {
            this.MathMatchLevel = 0;
            this.Resoure_Data.Data_Set("MathMatchLevel", this.MathMatchLevel);
            MathMatchLevel = this.Resoure_Data.Data_Get("MathMatchLevel");
        }
        this.MathMatchLevel = MathMatchLevel;
        /**数学消消分数 */
        let MathMatchScore = this.Resoure_Data.Data_Get("MathMatchScore");
        if (this.MathMatchScore == null || MathMatchScore == undefined) {
            this.MathMatchScore = 0;
            this.Resoure_Data.Data_Set("MathMatchScore", this.MathMatchScore);
            MathMatchScore = this.Resoure_Data.Data_Get("MathMatchScore");
        }
        this.MathMatchScore = MathMatchScore;



        let DateLast = this.Resoure_Data.Data_Get("DateLast");
        if (DateLast == null || DateLast == undefined) {
            this.DateLast = 0;
            this.Resoure_Data.Data_Set("DateLast", this.DateLast);
            DateLast = this.Resoure_Data.Data_Get("DateLast");
        }
        this.DateLast = DateLast;


    }
    /**保存数据 */
    DataSet() {
        console.log("保存数据");
        /**数学消消 */
        this.Resoure_Data.Data_Set("MathMatchLevel", this.MathMatchLevel);
        this.Resoure_Data.Data_Set("MathMatchScore", this.MathMatchScore);

        this.Resoure_Data.Data_Set("PropNum", this.PropNum);
        this.Resoure_Data.Data_Set("DateLast", this.DateLast);

    }



}


