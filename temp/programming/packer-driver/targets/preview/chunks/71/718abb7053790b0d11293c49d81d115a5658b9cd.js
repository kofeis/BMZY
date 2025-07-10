System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Resoure_Data, Tool_Other, _dec, _class, _crd, ccclass, property, ConfigSidebarState, ConfigShareState, Game_Script_Template;

  function _reportPossibleCrUseOfResoure_Data(extras) {
    _reporterNs.report("Resoure_Data", "../Tool/Resoure_Data", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "../Tool/Tool_Other", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Resoure_Data = _unresolved_2.Resoure_Data;
    }, function (_unresolved_3) {
      Tool_Other = _unresolved_3.Tool_Other;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21821zMxalAqrZZFIvG/DVs", "Game_Script_Template", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'find', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'tween', 'Tween', 'UIOpacity', 'v3', 'Animation', 'director', 'Vec3', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**菜数据 */

      /**地区菜配置 */

      /**地区排行配置 */

      /**每日奖励状态配置 */
      _export("ConfigSidebarState", ConfigSidebarState = /*#__PURE__*/function (ConfigSidebarState) {
        ConfigSidebarState[ConfigSidebarState["Ok"] = 0] = "Ok";
        ConfigSidebarState[ConfigSidebarState["Get"] = 1] = "Get";
        ConfigSidebarState[ConfigSidebarState["Other"] = 2] = "Other";
        return ConfigSidebarState;
      }({}));
      /**分享奖励状态配置 */


      _export("ConfigShareState", ConfigShareState = /*#__PURE__*/function (ConfigShareState) {
        ConfigShareState[ConfigShareState["Share"] = 0] = "Share";
        ConfigShareState[ConfigShareState["Get"] = 1] = "Get";
        return ConfigShareState;
      }({}));
      /**影视数据类型 */
      // type TypeFilmData = {
      //     Correct: string;
      //     Wrong: string;
      //     Hints: string,
      //     Movie: string,
      // }


      _export("Game_Script_Template", Game_Script_Template = (_dec = ccclass('Game_Script_Template'), _dec(_class = class Game_Script_Template extends Component {
        onLoad() {
          this.Resoure_Data = find("Resoure_Data").getComponent(_crd && Resoure_Data === void 0 ? (_reportPossibleCrUseOfResoure_Data({
            error: Error()
          }), Resoure_Data) : Resoure_Data);
          /**初始数据 */

          this.DataGet();
          this.DataSet();
          this.InterfacePannel = find("Canvas/InterfacePannel");
          this.InterfaceView = find("Canvas/InterfaceView");
          this.SubContextView = find("Canvas/SubContextView");
          this.SubContextView.active = false;
          this.BlockInputEvents = find("Canvas/BlockInputEvents");
          this.BlockInputEvents.active = false;
        }

        constructor() {
          super();
          this.Resoure_Data = null;
          this.openId = null;
          this.openIdTest = null;

          /**分享奖励次数 */
          this.ShareRewardCount = 0;

          /**邀请人数 */
          this.InvitedCount = 0;

          /**分享奖励状态 */
          this.ShareRewardState = ConfigShareState.Share;

          /**分享时间 */
          this.ShareTime = -1;

          /**上一次日期 */
          this.DateLast = null;

          /**侧边栏开关(true表示可以领取奖励) */
          this.SidebarSwitch = null;

          /**侧边栏状态 */
          this.SidebarState = ConfigSidebarState.Ok;

          /**防触摸节点 */
          this.BlockInputEvents = null;

          /**界面面板 */
          this.InterfacePannel = null;

          /**界面视图 */
          this.InterfaceView = null;

          /**排行榜 */
          this.SubContextView = null;

          /**地区栏Id */
          this.PlaceBarId = null;

          /**题目数据 */
          this.TopicData = null;

          /**题目数据Id */
          this.TopicDataId = null;

          /**题目数量 */
          this.TopicCount = null;

          /**题目索引 */
          this.TopicIndex = null;

          /**最小题目索引(盖楼模式) */
          this.TopicIndexMin = 20;

          /**道具数量 */
          this.PropNum = 0;

          /**道具使用数量 */
          this.PropNumUse = 0;

          /**最大道具使用数量 */
          this.PropNumUseMax = 3;

          /**最高记录 */
          this.HighestRecord = 0;

          /**上一次最高记录 */
          this.HighestRecordLast = 0;

          /**无尽分数 */
          this.DishScoreEndless = 0;

          /**省份星星数 */
          this.StarNumberNormal = 0;

          /**成语关卡 */
          this.IdiomLevel = 0;

          /**成语分数 */
          this.IdiomScore = 0;

          /**影视关卡 */
          this.FilmLevel = 0;

          /**影视分数 */
          this.FilmScore = 0;

          /**找演员关卡 */
          this.FindActorLevel = 0;

          /**找演员分数 */
          this.FindActorScore = 0;

          /**地区顺序 */
          this.SortRegionl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

          /**地区菜顺序 */
          this.SortRegionDish = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

          /**上次挑战Id */
          this.LastPlayId = null;

          /**地区菜配置 */
          this.ConfigRegionDish = [{
            Id: 1,
            City: "河北",
            NamePinYin: "HeBei",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 2,
            City: "山西",
            NamePinYin: "ShanXi",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 3,
            City: "辽宁",
            NamePinYin: "LiaoNing",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 4,
            City: "吉林",
            NamePinYin: "JiLin",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 5,
            City: "黑龙江",
            NamePinYin: "HeiLongJiang",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 6,
            City: "江苏",
            NamePinYin: "JiangSu",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 7,
            City: "浙江",
            NamePinYin: "ZheJiang",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 8,
            City: "安徽",
            NamePinYin: "AnHui",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 9,
            City: "福建",
            NamePinYin: "FuJian",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 10,
            City: "江西",
            NamePinYin: "JiangXi",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 11,
            City: "山东",
            NamePinYin: "ShanDong",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 12,
            City: "河南",
            NamePinYin: "HeNan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 13,
            City: "湖北",
            NamePinYin: "HuBei",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 14,
            City: "湖南",
            NamePinYin: "HuNan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 15,
            City: "广东",
            NamePinYin: "GuangDong",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 16,
            City: "海南",
            NamePinYin: "HaiNan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 17,
            City: "四川",
            NamePinYin: "SiChuan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 18,
            City: "贵州",
            NamePinYin: "GuiZhou",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 19,
            City: "云南",
            NamePinYin: "YunNan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 20,
            City: "陕西",
            NamePinYin: "Shan3Xi",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 21,
            City: "甘肃",
            NamePinYin: "GanSu",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 22,
            City: "青海",
            NamePinYin: "QingHai",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 23,
            City: "台湾",
            NamePinYin: "TaiWan",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 24,
            City: "北京",
            NamePinYin: "BeiJing",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 25,
            City: "天津",
            NamePinYin: "TianJin",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 26,
            City: "上海",
            NamePinYin: "ShangHai",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 27,
            City: "重庆",
            NamePinYin: "ChongQing",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 28,
            City: "香港",
            NamePinYin: "XiangGang",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 29,
            City: "澳门",
            NamePinYin: "AoMen",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 30,
            City: "内蒙古",
            NamePinYin: "NeiMengGu",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 31,
            City: "广西",
            NamePinYin: "GuangXi",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 32,
            City: "西藏",
            NamePinYin: "XiZang",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 33,
            City: "宁夏",
            NamePinYin: "NingXia",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }, {
            Id: 34,
            City: "新疆",
            NamePinYin: "XinJiang",
            IsFree: false,
            IsSuccess: false,
            StarsLevel: 3,
            SuccessCount: 10000
          }];

          /**地区排行顺序 */
          this.SortRegionRanking = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
          this.UrlRegionRanking = "https://6808403a942707d722ddad99.mockapi.io/Data/0";

          /** 地区排行配置 */
          this.ConfigRegionRanking = [{
            Id: 1,
            City: "河北",
            StarsNumber: 10000
          }, {
            Id: 2,
            City: "山西",
            StarsNumber: 10000
          }, {
            Id: 3,
            City: "辽宁",
            StarsNumber: 10000
          }, {
            Id: 4,
            City: "吉林",
            StarsNumber: 10000
          }, {
            Id: 5,
            City: "黑龙江",
            StarsNumber: 10000
          }, {
            Id: 6,
            City: "江苏",
            StarsNumber: 10000
          }, {
            Id: 7,
            City: "浙江",
            StarsNumber: 10000
          }, {
            Id: 8,
            City: "安徽",
            StarsNumber: 10000
          }, {
            Id: 9,
            City: "福建",
            StarsNumber: 10000
          }, {
            Id: 10,
            City: "江西",
            StarsNumber: 10000
          }, {
            Id: 11,
            City: "山东",
            StarsNumber: 10000
          }, {
            Id: 12,
            City: "河南",
            StarsNumber: 10000
          }, {
            Id: 13,
            City: "湖北",
            StarsNumber: 10000
          }, {
            Id: 14,
            City: "湖南",
            StarsNumber: 10000
          }, {
            Id: 15,
            City: "广东",
            StarsNumber: 10000
          }, {
            Id: 16,
            City: "海南",
            StarsNumber: 10000
          }, {
            Id: 17,
            City: "四川",
            StarsNumber: 10000
          }, {
            Id: 18,
            City: "贵州",
            StarsNumber: 10000
          }, {
            Id: 19,
            City: "云南",
            StarsNumber: 10000
          }, {
            Id: 20,
            City: "陕西",
            StarsNumber: 10000
          }, {
            Id: 21,
            City: "甘肃",
            StarsNumber: 10000
          }, {
            Id: 22,
            City: "青海",
            StarsNumber: 10000
          }, {
            Id: 23,
            City: "台湾",
            StarsNumber: 10000
          }, {
            Id: 24,
            City: "北京",
            StarsNumber: 10000
          }, {
            Id: 25,
            City: "天津",
            StarsNumber: 10000
          }, {
            Id: 26,
            City: "上海",
            StarsNumber: 10000
          }, {
            Id: 27,
            City: "重庆",
            StarsNumber: 10000
          }, {
            Id: 28,
            City: "香港",
            StarsNumber: 10000
          }, {
            Id: 29,
            City: "澳门",
            StarsNumber: 10000
          }, {
            Id: 30,
            City: "内蒙古",
            StarsNumber: 10000
          }, {
            Id: 31,
            City: "广西",
            StarsNumber: 10000
          }, {
            Id: 32,
            City: "西藏",
            StarsNumber: 10000
          }, {
            Id: 33,
            City: "宁夏",
            StarsNumber: 10000
          }, {
            Id: 34,
            City: "新疆",
            StarsNumber: 10000
          }];
          // ========== 各省菜品数据 ==========

          /** 河北菜品数据胜利 */
          this.DishDataHeBeiVictory = null;

          /** 河北菜品数据 */
          this.DishDataHeBei = null;

          /** 河北菜品Id */
          this.DishIdHeBei = 1;

          /** 山西菜品数据胜利 */
          this.DishDataShanXiVictory = null;

          /** 山西菜品数据 */
          this.DishDataShanXi = null;

          /** 山西菜品Id */
          this.DishIdShanXi = 2;

          /** 辽宁菜品数据胜利 */
          this.DishDataLiaoNingVictory = null;

          /** 辽宁菜品数据 */
          this.DishDataLiaoNing = null;

          /** 辽宁菜品Id */
          this.DishIdLiaoNing = 3;

          /** 吉林菜品数据胜利 */
          this.DishDataJiLinVictory = null;

          /** 吉林菜品数据 */
          this.DishDataJiLin = null;

          /** 吉林菜品Id */
          this.DishIdJiLin = 4;

          /** 黑龙江菜品数据胜利 */
          this.DishDataHeiLongJiangVictory = null;

          /** 黑龙江菜品数据 */
          this.DishDataHeiLongJiang = null;

          /** 黑龙江菜品Id */
          this.DishIdHeiLongJiang = 5;

          /** 江苏菜品数据胜利 */
          this.DishDataJiangSuVictory = null;

          /** 江苏菜品数据 */
          this.DishDataJiangSu = null;

          /** 江苏菜品Id */
          this.DishIdJiangSu = 6;

          /** 浙江菜品数据胜利 */
          this.DishDataZheJiangVictory = null;

          /** 浙江菜品数据 */
          this.DishDataZheJiang = null;

          /** 浙江菜品Id */
          this.DishIdZheJiang = 7;

          /** 安徽菜品数据胜利 */
          this.DishDataAnHuiVictory = null;

          /** 安徽菜品数据 */
          this.DishDataAnHui = null;

          /** 安徽菜品Id */
          this.DishIdAnHui = 8;

          /** 福建菜品数据胜利 */
          this.DishDataFuJianVictory = null;

          /** 福建菜品数据 */
          this.DishDataFuJian = null;

          /** 福建菜品Id */
          this.DishIdFuJian = 9;

          /** 江西菜品数据胜利 */
          this.DishDataJiangXiVictory = null;

          /** 江西菜品数据 */
          this.DishDataJiangXi = null;

          /** 江西菜品Id */
          this.DishIdJiangXi = 10;

          /** 山东菜品数据胜利 */
          this.DishDataShanDongVictory = null;

          /** 山东菜品数据 */
          this.DishDataShanDong = null;

          /** 山东菜品Id */
          this.DishIdShanDong = 11;

          /** 河南菜品数据胜利 */
          this.DishDataHeNanVictory = null;

          /** 河南菜品数据 */
          this.DishDataHeNan = null;

          /** 河南菜品Id */
          this.DishIdHeNan = 12;

          /** 湖北菜品数据胜利 */
          this.DishDataHuBeiVictory = null;

          /** 湖北菜品数据 */
          this.DishDataHuBei = null;

          /** 湖北菜品Id */
          this.DishIdHuBei = 13;

          /** 湖南菜品数据胜利 */
          this.DishDataHuNanVictory = null;

          /** 湖南菜品数据 */
          this.DishDataHuNan = null;

          /** 湖南菜品Id */
          this.DishIdHuNan = 14;

          /** 广东菜品数据胜利 */
          this.DishDataGuangDongVictory = null;

          /** 广东菜品数据 */
          this.DishDataGuangDong = null;

          /** 广东菜品Id */
          this.DishIdGuangDong = 15;

          /** 海南菜品数据胜利 */
          this.DishDataHaiNanVictory = null;

          /** 海南菜品数据 */
          this.DishDataHaiNan = null;

          /** 海南菜品Id */
          this.DishIdHaiNan = 16;

          /** 四川菜品数据胜利 */
          this.DishDataSiChuanVictory = null;

          /** 四川菜品数据 */
          this.DishDataSiChuan = null;

          /** 四川菜品Id */
          this.DishIdSiChuan = 17;

          /** 贵州菜品数据胜利 */
          this.DishDataGuiZhouVictory = null;

          /** 贵州菜品数据 */
          this.DishDataGuiZhou = null;

          /** 贵州菜品Id */
          this.DishIdGuiZhou = 18;

          /** 云南菜品数据胜利 */
          this.DishDataYunNanVictory = null;

          /** 云南菜品数据 */
          this.DishDataYunNan = null;

          /** 云南菜品Id */
          this.DishIdYunNan = 19;

          /** 陕西菜品数据胜利 */
          this.DishDataShan3XiVictory = null;

          /** 陕西菜品数据 */
          this.DishDataShan3Xi = null;

          /** 陕西菜品Id */
          this.DishIdShan3Xi = 20;

          /** 甘肃菜品数据胜利 */
          this.DishDataGanSuVictory = null;

          /** 甘肃菜品数据 */
          this.DishDataGanSu = null;

          /** 甘肃菜品Id */
          this.DishIdGanSu = 21;

          /** 青海菜品数据胜利 */
          this.DishDataQingHaiVictory = null;

          /** 青海菜品数据 */
          this.DishDataQingHai = null;

          /** 青海菜品Id */
          this.DishIdQingHai = 22;

          /** 台湾菜品数据胜利 */
          this.DishDataTaiWanVictory = null;

          /** 台湾菜品数据 */
          this.DishDataTaiWan = null;

          /** 台湾菜品Id */
          this.DishIdTaiWan = 23;

          /** 北京菜品数据胜利 */
          this.DishDataBeiJingVictory = null;

          /** 北京菜品数据 */
          this.DishDataBeiJing = null;

          /** 北京菜品Id */
          this.DishIdBeiJing = 24;

          /** 天津菜品数据胜利 */
          this.DishDataTianJinVictory = null;

          /** 天津菜品数据 */
          this.DishDataTianJin = null;

          /** 天津菜品Id */
          this.DishIdTianJin = 25;

          /** 上海菜品数据胜利 */
          this.DishDataShangHaiVictory = null;

          /** 上海菜品数据 */
          this.DishDataShangHai = null;

          /** 上海菜品Id */
          this.DishIdShangHai = 26;

          /** 重庆菜品数据胜利 */
          this.DishDataChongQingVictory = null;

          /** 重庆菜品数据 */
          this.DishDataChongQing = null;

          /** 重庆菜品Id */
          this.DishIdChongQing = 27;

          /** 香港菜品数据胜利 */
          this.DishDataXiangGangVictory = null;

          /** 香港菜品数据 */
          this.DishDataXiangGang = null;

          /** 香港菜品Id */
          this.DishIdXiangGang = 28;

          /** 澳门菜品数据胜利 */
          this.DishDataAoMenVictory = null;

          /** 澳门菜品数据 */
          this.DishDataAoMen = null;

          /** 澳门菜品Id */
          this.DishIdAoMen = 29;

          /** 内蒙古菜品数据胜利 */
          this.DishDataNeiMengGuVictory = null;

          /** 内蒙古菜品数据 */
          this.DishDataNeiMengGu = null;

          /** 内蒙古菜品Id */
          this.DishIdNeiMengGu = 30;

          /** 广西菜品数据胜利 */
          this.DishDataGuangXiVictory = null;

          /** 广西菜品数据 */
          this.DishDataGuangXi = null;

          /** 广西菜品Id */
          this.DishIdGuangXi = 31;

          /** 西藏菜品数据胜利 */
          this.DishDataXiZangVictory = null;

          /** 西藏菜品数据 */
          this.DishDataXiZang = null;

          /** 西藏菜品Id */
          this.DishIdXiZang = 32;

          /** 宁夏菜品数据胜利 */
          this.DishDataNingXiaVictory = null;

          /** 宁夏菜品数据 */
          this.DishDataNingXia = null;

          /** 宁夏菜品Id */
          this.DishIdNingXia = 33;

          /** 新疆菜品数据胜利 */
          this.DishDataXinJiangVictory = null;

          /** 新疆菜品数据 */
          this.DishDataXinJiang = null;

          /** 新疆菜品Id */
          this.DishIdXinJiang = 34;

          /**教学菜品数据 */
          this.DishDataOther = null;

          /**教学菜品Id */
          this.DishIdOther = 35;

          /**所有菜品数据 */
          this.DishDataAll = null;

          /**临时菜品数据 */
          this.DishDataTemp = null;
        }

        start() {
          var openIdTest = this.Resoure_Data.Data_Get("openIdTest");

          if (openIdTest == null || openIdTest == undefined) {
            this.openIdTest = "openIdTest" + (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Random_Int(10000, 99999);
            this.Resoure_Data.Data_Set("openIdTest", this.openIdTest);
            openIdTest = this.Resoure_Data.Data_Get("openIdTest");
          }

          this.openIdTest = openIdTest;
        }
        /**获取数据 */


        DataGet() {
          console.log("获取数据");
          /**服务端数据------------------------------------------------------------------------------- */

          /**openId */

          var openId = this.Resoure_Data.Data_Get("openId");

          if (openId == null || openId == undefined) {
            this.openId = "";
            this.Resoure_Data.Data_Set("openId", this.openId);
            openId = this.Resoure_Data.Data_Get("openId");
          }

          this.openId = openId;
          /**分享奖励次数 */

          var ShareRewardCount = this.Resoure_Data.Data_Get("ShareRewardCount");

          if (ShareRewardCount == null || ShareRewardCount == undefined) {
            this.ShareRewardCount = 0;
            this.Resoure_Data.Data_Set("ShareRewardCount", this.ShareRewardCount);
            ShareRewardCount = this.Resoure_Data.Data_Get("ShareRewardCount");
          }

          this.ShareRewardCount = ShareRewardCount;
          /**邀请人数 */

          var InvitedCount = this.Resoure_Data.Data_Get("InvitedCount");

          if (InvitedCount == null || InvitedCount == undefined) {
            this.InvitedCount = 0;
            this.Resoure_Data.Data_Set("InvitedCount", this.InvitedCount);
            InvitedCount = this.Resoure_Data.Data_Get("InvitedCount");
          }

          this.InvitedCount = InvitedCount;
          /**分享时间 */

          var ShareTime = this.Resoure_Data.Data_Get("ShareTime");

          if (ShareTime == null || ShareTime == undefined) {
            this.ShareTime = -1;
            this.Resoure_Data.Data_Set("ShareTime", this.ShareTime);
            ShareTime = this.Resoure_Data.Data_Get("ShareTime");
          }

          this.ShareTime = ShareTime;
          /**上一次日期 */

          var DateLast = this.Resoure_Data.Data_Get("DateLast");

          if (DateLast == null || DateLast == undefined) {
            this.DateLast = -1;
            this.Resoure_Data.Data_Set("DateLast", this.DateLast);
            DateLast = this.Resoure_Data.Data_Get("DateLast");
          }

          this.DateLast = DateLast;
          /**客户端数据------------------------------------------------------------------------------- */

          /**侧边栏开关 */

          var SidebarSwitch = this.Resoure_Data.Data_Get("SidebarSwitch");

          if (SidebarSwitch == null || SidebarSwitch == undefined) {
            this.SidebarSwitch = true;
            this.Resoure_Data.Data_Set("SidebarSwitch", this.SidebarSwitch);
            SidebarSwitch = this.Resoure_Data.Data_Get("SidebarSwitch");
          }

          this.SidebarSwitch = SidebarSwitch;
          /**侧边栏状态 */

          var SidebarState = this.Resoure_Data.Data_Get("SidebarState");

          if (SidebarState == null || SidebarState == undefined) {
            this.SidebarState = ConfigSidebarState.Ok;
            this.Resoure_Data.Data_Set("SidebarState", this.SidebarState);
            SidebarState = this.Resoure_Data.Data_Get("SidebarState");
          }

          this.SidebarState = SidebarState;
          /**地区栏Id */

          var PlaceBarId = this.Resoure_Data.Data_Get("PlaceBarId");

          if (PlaceBarId == null || PlaceBarId == undefined) {
            this.PlaceBarId = (_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Random_Int(1, 34);
            this.Resoure_Data.Data_Set("PlaceBarId", this.PlaceBarId);
            PlaceBarId = this.Resoure_Data.Data_Get("PlaceBarId");
          }

          this.PlaceBarId = PlaceBarId;
          /**道具数量 */

          var PropNum = this.Resoure_Data.Data_Get("PropNum");

          if (PropNum == null || PropNum == undefined) {
            this.PropNum = 0;
            this.Resoure_Data.Data_Set("PropNum", this.PropNum);
            PropNum = this.Resoure_Data.Data_Get("PropNum");
          }

          this.PropNum = PropNum;
          /**最高记录 */

          var HighestRecord = this.Resoure_Data.Data_Get("HighestRecord");

          if (HighestRecord == null || HighestRecord == undefined) {
            this.HighestRecord = 0;
            this.Resoure_Data.Data_Set("HighestRecord", this.HighestRecord);
            HighestRecord = this.Resoure_Data.Data_Get("HighestRecord");
          }

          this.HighestRecord = HighestRecord;
          /**无尽星星数 */

          var DishScoreEndless = this.Resoure_Data.Data_Get("DishScoreEndless");

          if (DishScoreEndless == null || DishScoreEndless == undefined) {
            this.DishScoreEndless = 0;
            this.Resoure_Data.Data_Set("DishScoreEndless", this.DishScoreEndless);
            DishScoreEndless = this.Resoure_Data.Data_Get("DishScoreEndless");
          }

          this.DishScoreEndless = DishScoreEndless;
          /**上次挑战Id */

          var LastPlayId = this.Resoure_Data.Data_Get("LastPlayId");

          if (LastPlayId == null || LastPlayId == undefined) {
            this.LastPlayId = null;
            this.Resoure_Data.Data_Set("LastPlayId", this.LastPlayId);
            LastPlayId = this.Resoure_Data.Data_Get("LastPlayId");
          }

          this.LastPlayId = LastPlayId;
          /**地区菜配置 */

          var ConfigRegionDish = this.Resoure_Data.Data_Get("ConfigRegionDish");

          if (ConfigRegionDish == null || ConfigRegionDish == undefined) {
            this.Resoure_Data.Data_Set("ConfigRegionDish", this.ConfigRegionDish);
            ConfigRegionDish = this.ConfigRegionDish;
          }

          this.ConfigRegionDish = ConfigRegionDish;
          /**地区排行配置 */

          var ConfigRegionRanking = this.Resoure_Data.Data_Get("ConfigRegionRanking");

          if (ConfigRegionRanking == null || ConfigRegionRanking == undefined) {
            this.Resoure_Data.Data_Set("ConfigRegionRanking", this.ConfigRegionRanking);
            ConfigRegionRanking = this.Resoure_Data.Data_Get("ConfigRegionRanking");
          }

          this.ConfigRegionRanking = ConfigRegionRanking;
          /**成语关卡 */

          var IdiomLevel = this.Resoure_Data.Data_Get("IdiomLevel");

          if (IdiomLevel == null || IdiomLevel == undefined) {
            this.IdiomLevel = 0;
            this.Resoure_Data.Data_Set("IdiomLevel", this.IdiomLevel);
            IdiomLevel = this.Resoure_Data.Data_Get("IdiomLevel");
          }

          this.IdiomLevel = IdiomLevel;
          /**成语分数 */

          var IdiomScore = this.Resoure_Data.Data_Get("IdiomScore");

          if (this.FilmScore == null || IdiomScore == undefined) {
            this.IdiomScore = 0;
            this.Resoure_Data.Data_Set("IdiomScore", this.IdiomScore);
            IdiomScore = this.Resoure_Data.Data_Get("IdiomScore");
          }

          this.IdiomScore = IdiomScore;
          /**影视关卡 */

          var FilmLevel = this.Resoure_Data.Data_Get("FilmLevel");

          if (FilmLevel == null || FilmLevel == undefined) {
            this.FilmLevel = 0;
            this.Resoure_Data.Data_Set("FilmLevel", this.FilmLevel);
            FilmLevel = this.Resoure_Data.Data_Get("FilmLevel");
          }

          this.FilmLevel = FilmLevel;
          /**影视分数 */

          var FilmScore = this.Resoure_Data.Data_Get("FilmScore");

          if (this.FilmScore == null || FilmScore == undefined) {
            this.FilmScore = 0;
            this.Resoure_Data.Data_Set("FilmScore", this.FilmScore);
            FilmScore = this.Resoure_Data.Data_Get("FilmScore");
          }

          this.FilmScore = FilmScore;
          /**找演员关卡 */

          var FindActorLevel = this.Resoure_Data.Data_Get("FindActorLevel");

          if (FindActorLevel == null || FindActorLevel == undefined) {
            this.FindActorLevel = 0;
            this.Resoure_Data.Data_Set("FindActorLevel", this.FindActorLevel);
            FindActorLevel = this.Resoure_Data.Data_Get("FindActorLevel");
          }

          this.FindActorLevel = FindActorLevel;
          /**找演员分数 */

          var FindActorScore = this.Resoure_Data.Data_Get("FindActorScore");

          if (this.FindActorScore == null || FindActorScore == undefined) {
            this.FindActorScore = 0;
            this.Resoure_Data.Data_Set("FindActorScore", this.FindActorScore);
            FindActorScore = this.Resoure_Data.Data_Get("FindActorScore");
          }

          this.FindActorScore = FindActorScore;
        }
        /**保存数据 */


        DataSet() {
          console.log("保存数据");
          /**服务端数据------------------------------------------------------------------------------- */

          this.Resoure_Data.Data_Set("openId", this.openId);
          this.Resoure_Data.Data_Set("ShareRewardCount", this.ShareRewardCount);
          this.Resoure_Data.Data_Set("InvitedCount", this.InvitedCount);
          this.Resoure_Data.Data_Set("DateLast", this.DateLast);
          this.Resoure_Data.Data_Set("ShareTime", this.ShareTime);
          /**客户端数据------------------------------------------------------------------------------- */

          this.Resoure_Data.Data_Set("SidebarSwitch", this.SidebarSwitch);
          this.Resoure_Data.Data_Set("SidebarState", this.SidebarState);
          this.Resoure_Data.Data_Set("PlaceBarId", this.PlaceBarId);
          this.Resoure_Data.Data_Set("PropNum", this.PropNum);
          this.Resoure_Data.Data_Set("HighestRecord", this.HighestRecord);
          this.Resoure_Data.Data_Set("DishScoreEndless", this.DishScoreEndless);
          this.Resoure_Data.Data_Set("LastPlayId", this.LastPlayId);
          this.Resoure_Data.Data_Set("ConfigRegionDish", this.ConfigRegionDish);
          this.Resoure_Data.Data_Set("ConfigRegionRanking", this.ConfigRegionRanking);
          /**成语 */

          this.Resoure_Data.Data_Set("IdiomLevel", this.IdiomLevel);
          this.Resoure_Data.Data_Set("IdiomScore", this.IdiomScore);
          /**影视 */

          this.Resoure_Data.Data_Set("FilmLevel", this.FilmLevel);
          this.Resoure_Data.Data_Set("FilmScore", this.FilmScore);
          /**找演员 */

          this.Resoure_Data.Data_Set("FindActorLevel", this.FindActorLevel);
          this.Resoure_Data.Data_Set("FindActorScore", this.FindActorScore);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=718abb7053790b0d11293c49d81d115a5658b9cd.js.map