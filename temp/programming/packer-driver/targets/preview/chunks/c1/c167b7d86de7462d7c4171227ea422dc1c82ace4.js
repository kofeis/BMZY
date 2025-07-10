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
          this.InterfacePannel = find("Canvas/InterfacePannel");
          this.InterfaceView = find("Canvas/InterfaceView");
          this.SubContextView = find("Canvas/SubContextView");
          this.SubContextView.active = false;
          this.BlockInputEvents = find("Canvas/BlockInputEvents");
          this.BlockInputEvents.active = false;
          this.GetDishData();
          this.SetDishData();
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

          /**成语题目 */
          this.IdiomData = null;

          /**当前成语 */
          this.IdiomCurrent = "";

          /**第几个字 */
          this.IdiomIndex = 0;

          /**完成数量 */
          this.IdiomCompletedQuantity = 0;

          /**是否移动中 */
          this.IdiomMoveing = false;
        }

        start() {
          /**初始数据 */
          this.DataGet();
          this.DataSet();
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
          console.log(FilmLevel, 6666666);

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
        /**获取菜品数据 */


        GetDishData() {
          //总菜品
          var DishDataAll = this.Resoure_Data.Data_Get("DishDataAll");

          if (DishDataAll == null || DishDataAll == undefined) {
            this.DishDataAll = null;
            this.Resoure_Data.Data_Set("DishDataAll", this.DishDataAll);
            DishDataAll = this.Resoure_Data.Data_Get("DishDataAll");
          }

          this.DishDataAll = DishDataAll;

          if (this.DishDataAll == null) {
            console.log("菜品数据初始化");
            this.DishDataAll = [];
            this.ConfigRegionDish.forEach(Key => {
              var _this$KeyData;

              var KeyId = "DishId" + Key.NamePinYin;
              var KeyData = "DishData" + Key.NamePinYin;
              var KeyDataV = "DishData" + Key.NamePinYin + "Victory";
              this[KeyData] = [];
              this[KeyDataV] = [];
              var Index = 1;

              while (this.GetDishDataId(this[KeyId] * 10000 + Index) != null) {
                this[KeyData].push(this.GetDishDataId(this[KeyId] * 10000 + Index));
                Index++;
              }

              if ((_this$KeyData = this[KeyData]) != null && _this$KeyData.length) {
                this.DishDataAll.push(...this[KeyData]);
              }
            });
            this.SetDishDataOther(); // 教学
          } else {
            console.log("菜品数据已存在");
            this.ConfigRegionDish.forEach(Key => {
              var KeyData = "DishData" + Key.NamePinYin;
              var KeyDataV = "DishData" + Key.NamePinYin + "Victory";
              this[KeyData] = this.Resoure_Data.Data_Get(KeyData);
              this[KeyDataV] = this.Resoure_Data.Data_Get(KeyDataV);
            });
            this.DishDataAll = this.Resoure_Data.Data_Get("DishDataAll");
            this.DishDataOther = this.Resoure_Data.Data_Get("DishDataOther");
          }
        }
        /**设置菜品数据 */


        SetDishData() {
          this.ConfigRegionDish.forEach(Key => {
            var KeyData = "DishData" + Key.NamePinYin;
            var KeyDataV = "DishData" + Key.NamePinYin + "Victory";
            this.Resoure_Data.Data_Set(KeyData, this[KeyData]);
            this.Resoure_Data.Data_Set(KeyDataV, this[KeyDataV]);
          });
          this.Resoure_Data.Data_Set("DishDataAll", this.DishDataAll);
          this.Resoure_Data.Data_Set("DishDataOther", this.DishDataOther);
        }
        /** 设置教学菜品数据 */


        SetDishDataOther() {
          this.DishDataOther = [];
          var Index = 1;

          while (this.GetDishDataId(this.DishIdOther * 10000 + Index) != null) {
            this.DishDataOther.push(this.GetDishDataId(this.DishIdOther * 10000 + Index));
            Index++;
          }
        }
        /**获取题目数据 */


        GetTopicData() {
          this.DishDataTemp = [];
          var KeyId = this.TopicDataId - 1;
          var KeyData = "DishData" + this.ConfigRegionDish[KeyId].NamePinYin;
          var KeyDataV = "DishData" + this.ConfigRegionDish[KeyId].NamePinYin + "Victory";
          this.TopicData = this[KeyData].filter(question => !this[KeyDataV].some(completedQuestion => completedQuestion.Id === question.Id));
          console.warn("菜品池:", this[KeyData]);
          console.warn("已通关:", this[KeyDataV]);
          console.warn("待通关:", this.TopicData);
        }
        /**获取菜品数据 */


        GetDishDataId(Id) {
          var DishData = {
            350001: {
              Id: 350001,
              Level: 0,
              Region: "无",
              CorrectName: "西红柿炒蛋",
              WrongName: "酸辣土豆丝",
              Factor: 1
            },
            350002: {
              Id: 350002,
              Level: 0,
              Region: "无",
              CorrectName: "油酥花生米",
              WrongName: "红烧肉",
              Factor: 1
            },
            350003: {
              Id: 350003,
              Level: 0,
              Region: "无",
              CorrectName: "肉夹馍",
              WrongName: "馒头",
              Factor: 1
            },
            10001: {
              Id: 10001,
              Level: 1,
              Region: "河北",
              CorrectName: "驴肉火烧",
              WrongName: "肉夹馍",
              Factor: 1
            },
            10002: {
              Id: 10002,
              Level: 1,
              Region: "河北",
              CorrectName: "炸签子",
              WrongName: "炸藕合",
              Factor: 1
            },
            10003: {
              Id: 10003,
              Level: 1,
              Region: "河北",
              CorrectName: "御土荷叶鸡",
              WrongName: "烤鸭",
              Factor: 1
            },
            10004: {
              Id: 10004,
              Level: 1,
              Region: "河北",
              CorrectName: "羊肠汤",
              WrongName: "西湖牛肉羹",
              Factor: 1
            },
            10005: {
              Id: 10005,
              Level: 1,
              Region: "河北",
              CorrectName: "鲅鱼蒸饺",
              WrongName: "驴肉火烧",
              Factor: 1
            },
            10006: {
              Id: 10006,
              Level: 1,
              Region: "河北",
              CorrectName: "邯郸烧饼",
              WrongName: "肉夹馍",
              Factor: 1
            },
            10007: {
              Id: 10007,
              Level: 1,
              Region: "河北",
              CorrectName: "金毛狮子鱼",
              WrongName: "烧鸭",
              Factor: 1
            },
            10008: {
              Id: 10008,
              Level: 1,
              Region: "河北",
              CorrectName: "鸡里蹦",
              WrongName: "鱼香肉丝",
              Factor: 1
            },
            10009: {
              Id: 10009,
              Level: 1,
              Region: "河北",
              CorrectName: "马蹄烧饼",
              WrongName: "烤馕",
              Factor: 1
            },
            10010: {
              Id: 10010,
              Level: 1,
              Region: "河北",
              CorrectName: "煎猪血",
              WrongName: "米肠子",
              Factor: 1
            },
            10011: {
              Id: 10011,
              Level: 1,
              Region: "河北",
              CorrectName: "烩南北",
              WrongName: "溜肉段",
              Factor: 2
            },
            10012: {
              Id: 10012,
              Level: 1,
              Region: "河北",
              CorrectName: "锅包肘子",
              WrongName: "铁锅炖",
              Factor: 2
            },
            10013: {
              Id: 10013,
              Level: 1,
              Region: "河北",
              CorrectName: "熘腰花",
              WrongName: "锅包肉",
              Factor: 2
            },
            10014: {
              Id: 10014,
              Level: 1,
              Region: "河北",
              CorrectName: "焖子",
              WrongName: "松花蛋",
              Factor: 2
            },
            10015: {
              Id: 10015,
              Level: 1,
              Region: "河北",
              CorrectName: "小米面炉糕",
              WrongName: "驴肉火烧",
              Factor: 2
            },
            10016: {
              Id: 10016,
              Level: 1,
              Region: "河北",
              CorrectName: "熏肉饼",
              WrongName: "肉夹馍",
              Factor: 2
            },
            10017: {
              Id: 10017,
              Level: 1,
              Region: "河北",
              CorrectName: "炸藕合",
              WrongName: "炸签子",
              Factor: 2
            },
            10018: {
              Id: 10018,
              Level: 1,
              Region: "河北",
              CorrectName: "锅巴菜",
              WrongName: "玉米片",
              Factor: 2
            },
            10019: {
              Id: 10019,
              Level: 1,
              Region: "河北",
              CorrectName: "咸鸭蛋",
              WrongName: "松花蛋",
              Factor: 2
            },
            10020: {
              Id: 10020,
              Level: 1,
              Region: "河北",
              CorrectName: "鸭蛋黄豆角",
              WrongName: "干煸豆角",
              Factor: 2
            },
            10021: {
              Id: 10021,
              Level: 1,
              Region: "河北",
              CorrectName: "棋子烧饼",
              WrongName: "烤冷面",
              Factor: 3
            },
            10022: {
              Id: 10022,
              Level: 1,
              Region: "河北",
              CorrectName: "蜂蜜麻糖",
              WrongName: "银耳汤",
              Factor: 3
            },
            10023: {
              Id: 10023,
              Level: 1,
              Region: "河北",
              CorrectName: "南烧冬笋",
              WrongName: "地三鲜",
              Factor: 3
            },
            10024: {
              Id: 10024,
              Level: 1,
              Region: "河北",
              CorrectName: "西瓜酱",
              WrongName: "豆瓣酱",
              Factor: 3
            },
            10025: {
              Id: 10025,
              Level: 1,
              Region: "河北",
              CorrectName: "牛肉罩饼",
              WrongName: "锅盔",
              Factor: 3
            },
            10026: {
              Id: 10026,
              Level: 1,
              Region: "河北",
              CorrectName: "驴打滚",
              WrongName: "切糕",
              Factor: 3
            },
            10027: {
              Id: 10027,
              Level: 1,
              Region: "河北",
              CorrectName: "打卤饸饹面",
              WrongName: "拉面",
              Factor: 3
            },
            10028: {
              Id: 10028,
              Level: 1,
              Region: "河北",
              CorrectName: "香河肉饼",
              WrongName: "葱花饼",
              Factor: 3
            },
            10029: {
              Id: 10029,
              Level: 1,
              Region: "河北",
              CorrectName: "素冒汤",
              WrongName: "羊肉汤",
              Factor: 3
            },
            10030: {
              Id: 10030,
              Level: 1,
              Region: "河北",
              CorrectName: "炒饼",
              WrongName: "炒面",
              Factor: 3
            },
            20001: {
              Id: 20001,
              Level: 2,
              Region: "山西",
              CorrectName: "刀削面",
              WrongName: "牛肉面",
              Factor: 1
            },
            20002: {
              Id: 20002,
              Level: 2,
              Region: "山西",
              CorrectName: "平遥牛肉",
              WrongName: "椒麻鸡",
              Factor: 1
            },
            20003: {
              Id: 20003,
              Level: 2,
              Region: "山西",
              CorrectName: "寿阳豆腐干",
              WrongName: "麻辣香干",
              Factor: 1
            },
            20004: {
              Id: 20004,
              Level: 2,
              Region: "山西",
              CorrectName: "太谷饼",
              WrongName: "芝麻饼",
              Factor: 2
            },
            20005: {
              Id: 20005,
              Level: 2,
              Region: "山西",
              CorrectName: "过油肉",
              WrongName: "木须肉",
              Factor: 3
            },
            20006: {
              Id: 20006,
              Level: 2,
              Region: "山西",
              CorrectName: "牛肉丸子面",
              WrongName: "酸辣粉",
              Factor: 1
            },
            20007: {
              Id: 20007,
              Level: 2,
              Region: "山西",
              CorrectName: "沾片子",
              WrongName: "煮毛肚",
              Factor: 2
            },
            20008: {
              Id: 20008,
              Level: 2,
              Region: "山西",
              CorrectName: "筱面栲栳栳",
              WrongName: "山西蒸面卷",
              Factor: 3
            },
            20009: {
              Id: 20009,
              Level: 2,
              Region: "山西",
              CorrectName: "炒祺",
              WrongName: "牛肉丸",
              Factor: 2
            },
            20010: {
              Id: 20010,
              Level: 2,
              Region: "山西",
              CorrectName: "浑源凉粉",
              WrongName: "浑源凉面",
              Factor: 2
            },
            20011: {
              Id: 20011,
              Level: 2,
              Region: "山西",
              CorrectName: "头脑",
              WrongName: "南瓜粥",
              Factor: 1
            },
            20012: {
              Id: 20012,
              Level: 2,
              Region: "山西",
              CorrectName: "和子饭",
              WrongName: "小米粥",
              Factor: 2
            },
            20013: {
              Id: 20013,
              Level: 2,
              Region: "山西",
              CorrectName: "炒不烂",
              WrongName: "炒得烂",
              Factor: 3
            },
            20014: {
              Id: 20014,
              Level: 2,
              Region: "山西",
              CorrectName: "碗秃",
              WrongName: "凉拌粉丝",
              Factor: 2
            },
            20015: {
              Id: 20015,
              Level: 2,
              Region: "山西",
              CorrectName: "石头饼",
              WrongName: "雪饼",
              Factor: 1
            },
            20016: {
              Id: 20016,
              Level: 2,
              Region: "山西",
              CorrectName: "定襄蒸肉",
              WrongName: "定襄火腿",
              Factor: 3
            },
            20017: {
              Id: 20017,
              Level: 2,
              Region: "山西",
              CorrectName: "炒恶",
              WrongName: "炒善",
              Factor: 3
            },
            20018: {
              Id: 20018,
              Level: 2,
              Region: "山西",
              CorrectName: "猫耳朵",
              WrongName: "狗耳朵",
              Factor: 2
            },
            20019: {
              Id: 20019,
              Level: 2,
              Region: "山西",
              CorrectName: "抿圪抖",
              WrongName: "炒米条",
              Factor: 2
            },
            20020: {
              Id: 20020,
              Level: 2,
              Region: "山西",
              CorrectName: "糊嘟",
              WrongName: "米糊",
              Factor: 3
            },
            20021: {
              Id: 20021,
              Level: 2,
              Region: "山西",
              CorrectName: "剔尖",
              WrongName: "剔圆",
              Factor: 3
            },
            20022: {
              Id: 20022,
              Level: 2,
              Region: "山西",
              CorrectName: "泡泡油糕",
              WrongName: "糖油粑粑",
              Factor: 2
            },
            20023: {
              Id: 20023,
              Level: 2,
              Region: "山西",
              CorrectName: "羊杂割",
              WrongName: "羊肉粉",
              Factor: 1
            },
            20024: {
              Id: 20024,
              Level: 2,
              Region: "山西",
              CorrectName: "豌豆糕",
              WrongName: "红枣糕",
              Factor: 2
            },
            20025: {
              Id: 20025,
              Level: 2,
              Region: "山西",
              CorrectName: "沙棘开口笑",
              WrongName: "皮蛋瘦肉粥",
              Factor: 1
            },
            20026: {
              Id: 20026,
              Level: 2,
              Region: "山西",
              CorrectName: "饸饹面",
              WrongName: "冒菜",
              Factor: 1
            },
            20027: {
              Id: 20027,
              Level: 2,
              Region: "山西",
              CorrectName: "驴肉甩饼",
              WrongName: "驴肉煎饼",
              Factor: 3
            },
            20028: {
              Id: 20028,
              Level: 2,
              Region: "山西",
              CorrectName: "烧肝",
              WrongName: "炒肝",
              Factor: 3
            },
            20029: {
              Id: 20029,
              Level: 2,
              Region: "山西",
              CorrectName: "闻喜煮饼",
              WrongName: "闻喜麻圆",
              Factor: 3
            },
            20030: {
              Id: 20030,
              Level: 2,
              Region: "山西",
              CorrectName: "合楞子",
              WrongName: "螺蛳粉",
              Factor: 1
            },
            30001: {
              Id: 30001,
              Level: 3,
              Region: "辽宁",
              CorrectName: "小鸡炖蘑菇",
              WrongName: "铁锅炖",
              Factor: 1
            },
            30002: {
              Id: 30002,
              Level: 3,
              Region: "辽宁",
              CorrectName: "猪肉炖粉条",
              WrongName: "小鸡炖蘑菇",
              Factor: 1
            },
            30003: {
              Id: 30003,
              Level: 3,
              Region: "辽宁",
              CorrectName: "锅包肉",
              WrongName: "烧鸽子",
              Factor: 1
            },
            30004: {
              Id: 30004,
              Level: 3,
              Region: "辽宁",
              CorrectName: "葱烧辽参",
              WrongName: "韭菜盒子",
              Factor: 1
            },
            30005: {
              Id: 30005,
              Level: 3,
              Region: "辽宁",
              CorrectName: "炭烧海螺",
              WrongName: "铁岭火勺",
              Factor: 1
            },
            30006: {
              Id: 30006,
              Level: 3,
              Region: "辽宁",
              CorrectName: "雪棉豆沙",
              WrongName: "驴打滚",
              Factor: 1
            },
            30007: {
              Id: 30007,
              Level: 3,
              Region: "辽宁",
              CorrectName: "熘肉段",
              WrongName: "糖醋里脊",
              Factor: 1
            },
            30008: {
              Id: 30008,
              Level: 3,
              Region: "辽宁",
              CorrectName: "丹东草莓",
              WrongName: "冻梨",
              Factor: 1
            },
            30009: {
              Id: 30009,
              Level: 3,
              Region: "辽宁",
              CorrectName: "家炖胖头鱼",
              WrongName: "铁锅炖",
              Factor: 1
            },
            30010: {
              Id: 30010,
              Level: 3,
              Region: "辽宁",
              CorrectName: "豆角烀饼",
              WrongName: "玉米馍馍",
              Factor: 1
            },
            30011: {
              Id: 30011,
              Level: 3,
              Region: "辽宁",
              CorrectName: "土豆豆皮",
              WrongName: "锅盔",
              Factor: 2
            },
            30012: {
              Id: 30012,
              Level: 3,
              Region: "辽宁",
              CorrectName: "海凉粉",
              WrongName: "凉拌大拉皮",
              Factor: 2
            },
            30013: {
              Id: 30013,
              Level: 3,
              Region: "辽宁",
              CorrectName: "韭菜盒子",
              WrongName: "锅贴",
              Factor: 2
            },
            30014: {
              Id: 30014,
              Level: 3,
              Region: "辽宁",
              CorrectName: "炸大枣",
              WrongName: "炸鸡",
              Factor: 2
            },
            30015: {
              Id: 30015,
              Level: 3,
              Region: "辽宁",
              CorrectName: "炸鸡架",
              WrongName: "盐酥鸡",
              Factor: 2
            },
            30016: {
              Id: 30016,
              Level: 3,
              Region: "辽宁",
              CorrectName: "铁岭火勺",
              WrongName: "烤馕",
              Factor: 2
            },
            30017: {
              Id: 30017,
              Level: 3,
              Region: "辽宁",
              CorrectName: "芸豆蚬子面",
              WrongName: "海鲜粉",
              Factor: 2
            },
            30018: {
              Id: 30018,
              Level: 3,
              Region: "辽宁",
              CorrectName: "香煎鲅鱼",
              WrongName: "煎牛肉",
              Factor: 2
            },
            30019: {
              Id: 30019,
              Level: 3,
              Region: "辽宁",
              CorrectName: "白灼海螺",
              WrongName: "炒蚬子",
              Factor: 2
            },
            30020: {
              Id: 30020,
              Level: 3,
              Region: "辽宁",
              CorrectName: "软炸小银鱼",
              WrongName: "糖醋鲤鱼",
              Factor: 2
            },
            30021: {
              Id: 30021,
              Level: 3,
              Region: "辽宁",
              CorrectName: "铁板鱿鱼",
              WrongName: "烤冷面",
              Factor: 3
            },
            30022: {
              Id: 30022,
              Level: 3,
              Region: "辽宁",
              CorrectName: "凉拌海蜇",
              WrongName: "凉拌大拉皮",
              Factor: 3
            },
            30023: {
              Id: 30023,
              Level: 3,
              Region: "辽宁",
              CorrectName: "生卤对虾",
              WrongName: "凉拌海蜇",
              Factor: 3
            },
            30024: {
              Id: 30024,
              Level: 3,
              Region: "辽宁",
              CorrectName: "炒碴条",
              WrongName: "炒米粉",
              Factor: 3
            },
            30025: {
              Id: 30025,
              Level: 3,
              Region: "辽宁",
              CorrectName: "麻辣拌",
              WrongName: "麻辣烫",
              Factor: 3
            },
            30026: {
              Id: 30026,
              Level: 3,
              Region: "辽宁",
              CorrectName: "葱花缸炉",
              WrongName: "缸子肉",
              Factor: 3
            },
            30027: {
              Id: 30027,
              Level: 3,
              Region: "辽宁",
              CorrectName: "泥炉烤肉",
              WrongName: "麻辣烫",
              Factor: 3
            },
            30028: {
              Id: 30028,
              Level: 3,
              Region: "辽宁",
              CorrectName: "粘豆包",
              WrongName: "炸大枣",
              Factor: 3
            },
            30029: {
              Id: 30029,
              Level: 3,
              Region: "辽宁",
              CorrectName: "菜包饭",
              WrongName: "煲仔饭",
              Factor: 3
            },
            30030: {
              Id: 30030,
              Level: 3,
              Region: "辽宁",
              CorrectName: "大拉皮",
              WrongName: "凉皮",
              Factor: 3
            },
            40001: {
              Id: 40001,
              Level: 4,
              Region: "吉林",
              CorrectName: "延吉冷面",
              WrongName: "刀削面",
              Factor: 1
            },
            40002: {
              Id: 40002,
              Level: 4,
              Region: "吉林",
              CorrectName: "烧鸽子",
              WrongName: "烤冷面",
              Factor: 1
            },
            40003: {
              Id: 40003,
              Level: 4,
              Region: "吉林",
              CorrectName: "煎粉",
              WrongName: "烤面筋",
              Factor: 1
            },
            40004: {
              Id: 40004,
              Level: 4,
              Region: "吉林",
              CorrectName: "火勺",
              WrongName: "春饼",
              Factor: 1
            },
            40005: {
              Id: 40005,
              Level: 4,
              Region: "吉林",
              CorrectName: "粘豆包",
              WrongName: "炸糕",
              Factor: 1
            },
            40006: {
              Id: 40006,
              Level: 4,
              Region: "吉林",
              CorrectName: "田鸡油",
              WrongName: "大拉皮",
              Factor: 1
            },
            40007: {
              Id: 40007,
              Level: 4,
              Region: "吉林",
              CorrectName: "雪衣豆沙",
              WrongName: "冻梨",
              Factor: 1
            },
            40008: {
              Id: 40008,
              Level: 4,
              Region: "吉林",
              CorrectName: "翡翠人参鸡",
              WrongName: "溜肉段",
              Factor: 1
            },
            40009: {
              Id: 40009,
              Level: 4,
              Region: "吉林",
              CorrectName: "白肉血肠",
              WrongName: "猪肉炖粉条",
              Factor: 1
            },
            40010: {
              Id: 40010,
              Level: 4,
              Region: "吉林",
              CorrectName: "清蒸白鱼",
              WrongName: "铁锅炖大鹅",
              Factor: 1
            },
            40011: {
              Id: 40011,
              Level: 4,
              Region: "吉林",
              CorrectName: "鹿茸三珍汤",
              WrongName: "铁锅炖",
              Factor: 2
            },
            40012: {
              Id: 40012,
              Level: 4,
              Region: "吉林",
              CorrectName: "长春酱肉",
              WrongName: "大酱骨",
              Factor: 2
            },
            40013: {
              Id: 40013,
              Level: 4,
              Region: "吉林",
              CorrectName: "红扒猪手",
              WrongName: "烤乳猪",
              Factor: 2
            },
            40014: {
              Id: 40014,
              Level: 4,
              Region: "吉林",
              CorrectName: "酸菜白肉火锅",
              WrongName: "小鸡炖蘑菇",
              Factor: 2
            },
            40015: {
              Id: 40015,
              Level: 4,
              Region: "吉林",
              CorrectName: "滑炒松茸山药",
              WrongName: "烤红薯",
              Factor: 2
            },
            40016: {
              Id: 40016,
              Level: 4,
              Region: "吉林",
              CorrectName: "家炖胖头鱼",
              WrongName: "铁锅炖",
              Factor: 2
            },
            40017: {
              Id: 40017,
              Level: 4,
              Region: "吉林",
              CorrectName: "地三鲜",
              WrongName: "拔丝地瓜",
              Factor: 2
            },
            40018: {
              Id: 40018,
              Level: 4,
              Region: "吉林",
              CorrectName: "铁锅炖",
              WrongName: "扁豆焖面",
              Factor: 2
            },
            40019: {
              Id: 40019,
              Level: 4,
              Region: "吉林",
              CorrectName: "拔丝地瓜",
              WrongName: "烤土豆",
              Factor: 2
            },
            40020: {
              Id: 40020,
              Level: 4,
              Region: "吉林",
              CorrectName: "大酱骨",
              WrongName: "红烧排骨",
              Factor: 2
            },
            40021: {
              Id: 40021,
              Level: 4,
              Region: "吉林",
              CorrectName: "锅包肉",
              WrongName: "咕咾肉",
              Factor: 3
            },
            40022: {
              Id: 40022,
              Level: 4,
              Region: "吉林",
              CorrectName: "石锅拌饭",
              WrongName: "菜包饭",
              Factor: 3
            },
            40023: {
              Id: 40023,
              Level: 4,
              Region: "吉林",
              CorrectName: "酸菜粉丝五花肉",
              WrongName: "烤冷面",
              Factor: 3
            },
            40024: {
              Id: 40024,
              Level: 4,
              Region: "吉林",
              CorrectName: "麻辣拌",
              WrongName: "麻辣烫",
              Factor: 3
            },
            40025: {
              Id: 40025,
              Level: 4,
              Region: "吉林",
              CorrectName: "糖醋肉",
              WrongName: "大酱骨",
              Factor: 3
            },
            40026: {
              Id: 40026,
              Level: 4,
              Region: "吉林",
              CorrectName: "米酒",
              WrongName: "豆浆",
              Factor: 3
            },
            40027: {
              Id: 40027,
              Level: 4,
              Region: "吉林",
              CorrectName: "脊骨汤",
              WrongName: "羊肉汤",
              Factor: 3
            },
            40028: {
              Id: 40028,
              Level: 4,
              Region: "吉林",
              CorrectName: "米肠子",
              WrongName: "红肠",
              Factor: 3
            },
            40029: {
              Id: 40029,
              Level: 4,
              Region: "吉林",
              CorrectName: "炸打糕",
              WrongName: "小米糕",
              Factor: 3
            },
            40030: {
              Id: 40030,
              Level: 4,
              Region: "吉林",
              CorrectName: "土豆饺子",
              WrongName: "包子",
              Factor: 3
            },
            50001: {
              Id: 50001,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "大拉皮",
              WrongName: "凉面",
              Factor: 1
            },
            50002: {
              Id: 50002,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "冻梨",
              WrongName: "冻柿子",
              Factor: 1
            },
            50003: {
              Id: 50003,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "冻柿子",
              WrongName: "糖葫芦",
              Factor: 1
            },
            50004: {
              Id: 50004,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "锅包肉",
              WrongName: "大酱骨",
              Factor: 1
            },
            50005: {
              Id: 50005,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "铁锅炖",
              WrongName: "小鸡炖蘑菇",
              Factor: 1
            },
            50006: {
              Id: 50006,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "菜包饭",
              WrongName: "石锅拌饭",
              Factor: 1
            },
            50007: {
              Id: 50007,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "麻辣烫",
              WrongName: "牛肉面",
              Factor: 1
            },
            50008: {
              Id: 50008,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "雪衣豆沙",
              WrongName: "烤面筋",
              Factor: 1
            },
            50009: {
              Id: 50009,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "蘸酱菜",
              WrongName: "冻柿子",
              Factor: 1
            },
            50010: {
              Id: 50010,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "血肠",
              WrongName: "锅包肉",
              Factor: 1
            },
            50011: {
              Id: 50011,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "猪皮冻",
              WrongName: "溜肉段",
              Factor: 2
            },
            50012: {
              Id: 50012,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "黄米切糕",
              WrongName: "糖葫芦",
              Factor: 2
            },
            50013: {
              Id: 50013,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "大酱骨",
              WrongName: "糖醋里脊",
              Factor: 2
            },
            50014: {
              Id: 50014,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "棒碴粥",
              WrongName: "米酒",
              Factor: 2
            },
            50015: {
              Id: 50015,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "杀猪菜",
              WrongName: "地三鲜",
              Factor: 2
            },
            50016: {
              Id: 50016,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "石锅拌饭",
              WrongName: "菜包饭",
              Factor: 2
            },
            50017: {
              Id: 50017,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "水晶肚",
              WrongName: "溜肉段",
              Factor: 2
            },
            50018: {
              Id: 50018,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "烤冷面",
              WrongName: "煎饼",
              Factor: 2
            },
            50019: {
              Id: 50019,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "扒肉条",
              WrongName: "红烧肉",
              Factor: 2
            },
            50020: {
              Id: 50020,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "拔丝地瓜",
              WrongName: "拔丝山药",
              Factor: 2
            },
            50021: {
              Id: 50021,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "春饼",
              WrongName: "烤鸭",
              Factor: 3
            },
            50022: {
              Id: 50022,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "糖炒栗子",
              WrongName: "烤红薯",
              Factor: 3
            },
            50023: {
              Id: 50023,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "大列巴",
              WrongName: "肠粉",
              Factor: 3
            },
            50024: {
              Id: 50024,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "哈尔滨红肠",
              WrongName: "洪昂烧肉",
              Factor: 3
            },
            50025: {
              Id: 50025,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "酸菜粉丝五花肉",
              WrongName: "小鸡炖蘑菇",
              Factor: 3
            },
            50026: {
              Id: 50026,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "干肠",
              WrongName: "米肠子",
              Factor: 3
            },
            50027: {
              Id: 50027,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "豆腐乳",
              WrongName: "臭豆腐",
              Factor: 3
            },
            50028: {
              Id: 50028,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "马迭尔",
              WrongName: "小布丁",
              Factor: 3
            },
            50029: {
              Id: 50029,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "玉米馍馍",
              WrongName: "雪衣豆沙",
              Factor: 3
            },
            50030: {
              Id: 50030,
              Level: 5,
              Region: "黑龙江",
              CorrectName: "松花蛋",
              WrongName: "咸鸭蛋",
              Factor: 3
            },
            60001: {
              Id: 60001,
              Level: 6,
              Region: "江苏",
              CorrectName: "南京盐水鸭",
              WrongName: "鸭血粉丝汤",
              Factor: 1
            },
            60002: {
              Id: 60002,
              Level: 6,
              Region: "江苏",
              CorrectName: "松鼠桂鱼",
              WrongName: "大盘鸡",
              Factor: 1
            },
            60003: {
              Id: 60003,
              Level: 6,
              Region: "江苏",
              CorrectName: "红烧狮子头",
              WrongName: "红烧肉圆",
              Factor: 3
            },
            60004: {
              Id: 60004,
              Level: 6,
              Region: "江苏",
              CorrectName: "霸王别姬",
              WrongName: "烧鸡",
              Factor: 1
            },
            60005: {
              Id: 60005,
              Level: 6,
              Region: "江苏",
              CorrectName: "叫花鸡",
              WrongName: "扬州炒饭",
              Factor: 1
            },
            60006: {
              Id: 60006,
              Level: 6,
              Region: "江苏",
              CorrectName: "扬州炒饭",
              WrongName: "广东炒饭",
              Factor: 1
            },
            60007: {
              Id: 60007,
              Level: 6,
              Region: "江苏",
              CorrectName: "清汤火方",
              WrongName: "清蒸火方",
              Factor: 3
            },
            60008: {
              Id: 60008,
              Level: 6,
              Region: "江苏",
              CorrectName: "煮干丝",
              WrongName: "煮鸡丝",
              Factor: 2
            },
            60009: {
              Id: 60009,
              Level: 6,
              Region: "江苏",
              CorrectName: "鸡包鱼翅",
              WrongName: "鸭包鱼翅",
              Factor: 2
            },
            60010: {
              Id: 60010,
              Level: 6,
              Region: "江苏",
              CorrectName: "水晶肴蹄",
              WrongName: "水晶羊糕",
              Factor: 3
            },
            60011: {
              Id: 60011,
              Level: 6,
              Region: "江苏",
              CorrectName: "鸳鸯鸡",
              WrongName: "大闸蟹",
              Factor: 1
            },
            60012: {
              Id: 60012,
              Level: 6,
              Region: "江苏",
              CorrectName: "南京板鸭",
              WrongName: "南京板栗",
              Factor: 1
            },
            60013: {
              Id: 60013,
              Level: 6,
              Region: "江苏",
              CorrectName: "炖生敲",
              WrongName: "炖黄鳝",
              Factor: 2
            },
            60014: {
              Id: 60014,
              Level: 6,
              Region: "江苏",
              CorrectName: "金陵烤鸭",
              WrongName: "金陵酱鸭",
              Factor: 2
            },
            60015: {
              Id: 60015,
              Level: 6,
              Region: "江苏",
              CorrectName: "彭城鱼丸",
              WrongName: "彭城肉丸",
              Factor: 2
            },
            60016: {
              Id: 60016,
              Level: 6,
              Region: "江苏",
              CorrectName: "羊方藏鱼",
              WrongName: "清蒸鲑鱼",
              Factor: 2
            },
            60017: {
              Id: 60017,
              Level: 6,
              Region: "江苏",
              CorrectName: "金陵丸子",
              WrongName: "面筋塞肉",
              Factor: 3
            },
            60018: {
              Id: 60018,
              Level: 6,
              Region: "江苏",
              CorrectName: "清炖鸡孚",
              WrongName: "清炖肉圆",
              Factor: 3
            },
            60019: {
              Id: 60019,
              Level: 6,
              Region: "江苏",
              CorrectName: "碧螺虾仁",
              WrongName: "龙井虾仁",
              Factor: 3
            },
            60020: {
              Id: 60020,
              Level: 6,
              Region: "江苏",
              CorrectName: "大闸蟹",
              WrongName: "小龙虾",
              Factor: 1
            },
            60021: {
              Id: 60021,
              Level: 6,
              Region: "江苏",
              CorrectName: "母油船鸭",
              WrongName: "母油船鸡",
              Factor: 3
            },
            60022: {
              Id: 60022,
              Level: 6,
              Region: "江苏",
              CorrectName: "莼菜银鱼汤",
              WrongName: "莼菜蛋花汤",
              Factor: 3
            },
            60023: {
              Id: 60023,
              Level: 6,
              Region: "江苏",
              CorrectName: "万三蹄",
              WrongName: "烤鸭",
              Factor: 1
            },
            60024: {
              Id: 60024,
              Level: 6,
              Region: "江苏",
              CorrectName: "响油鳝糊",
              WrongName: "响油鳝丝",
              Factor: 2
            },
            60025: {
              Id: 60025,
              Level: 6,
              Region: "江苏",
              CorrectName: "三套鸭",
              WrongName: "三套鹅",
              Factor: 2
            },
            60026: {
              Id: 60026,
              Level: 6,
              Region: "江苏",
              CorrectName: "无锡肉骨头",
              WrongName: "无锡酱骨头",
              Factor: 2
            },
            60027: {
              Id: 60027,
              Level: 6,
              Region: "江苏",
              CorrectName: "梁溪脆鳝",
              WrongName: "梁溪炸鳝",
              Factor: 2
            },
            60028: {
              Id: 60028,
              Level: 6,
              Region: "江苏",
              CorrectName: "镜箱豆腐",
              WrongName: "红烧豆腐",
              Factor: 3
            },
            60029: {
              Id: 60029,
              Level: 6,
              Region: "江苏",
              CorrectName: "文思豆腐",
              WrongName: "鸡蛋羹",
              Factor: 1
            },
            60030: {
              Id: 60030,
              Level: 6,
              Region: "江苏",
              CorrectName: "乐天鸭子",
              WrongName: "老鸭汤",
              Factor: 3
            },
            70001: {
              Id: 70001,
              Level: 7,
              Region: "浙江",
              CorrectName: "西湖醋鱼",
              WrongName: "糖醋鲤鱼",
              Factor: 1
            },
            70002: {
              Id: 70002,
              Level: 7,
              Region: "浙江",
              CorrectName: "东坡肉",
              WrongName: "红烧肉",
              Factor: 2
            },
            70003: {
              Id: 70003,
              Level: 7,
              Region: "浙江",
              CorrectName: "叫花鸡",
              WrongName: "佛跳墙",
              Factor: 1
            },
            70004: {
              Id: 70004,
              Level: 7,
              Region: "浙江",
              CorrectName: "龙井虾仁",
              WrongName: "碧螺虾仁",
              Factor: 3
            },
            70005: {
              Id: 70005,
              Level: 7,
              Region: "浙江",
              CorrectName: "清汤越鸡",
              WrongName: "清汤越鸽",
              Factor: 2
            },
            70006: {
              Id: 70006,
              Level: 7,
              Region: "浙江",
              CorrectName: "荷叶粉蒸肉",
              WrongName: "荷叶酒糟肉",
              Factor: 2
            },
            70007: {
              Id: 70007,
              Level: 7,
              Region: "浙江",
              CorrectName: "赛蟹羹",
              WrongName: "西湖牛肉羹",
              Factor: 3
            },
            70008: {
              Id: 70008,
              Level: 7,
              Region: "浙江",
              CorrectName: "干炸响铃",
              WrongName: "炸鲜奶",
              Factor: 1
            },
            70009: {
              Id: 70009,
              Level: 7,
              Region: "浙江",
              CorrectName: "冰糖甲鱼",
              WrongName: "红烧甲鱼",
              Factor: 3
            },
            70010: {
              Id: 70010,
              Level: 7,
              Region: "浙江",
              CorrectName: "干菜焖肉",
              WrongName: "红烧肉",
              Factor: 1
            },
            70011: {
              Id: 70011,
              Level: 7,
              Region: "浙江",
              CorrectName: "鱼头豆腐",
              WrongName: "鱼头煲",
              Factor: 2
            },
            70012: {
              Id: 70012,
              Level: 7,
              Region: "浙江",
              CorrectName: "舟山海鲜面",
              WrongName: "牛肉面",
              Factor: 1
            },
            70013: {
              Id: 70013,
              Level: 7,
              Region: "浙江",
              CorrectName: "双味蝤蛑",
              WrongName: "双味螃蟹",
              Factor: 3
            },
            70014: {
              Id: 70014,
              Level: 7,
              Region: "浙江",
              CorrectName: "冰糖排骨",
              WrongName: "红烧排骨",
              Factor: 3
            },
            70015: {
              Id: 70015,
              Level: 7,
              Region: "浙江",
              CorrectName: "桂花糯米藕",
              WrongName: "冰糖糯米藕",
              Factor: 2
            },
            70016: {
              Id: 70016,
              Level: 7,
              Region: "浙江",
              CorrectName: "虾仁豆腐",
              WrongName: "海鲜豆腐",
              Factor: 2
            },
            70017: {
              Id: 70017,
              Level: 7,
              Region: "浙江",
              CorrectName: "嘉兴粽子",
              WrongName: "锅盔",
              Factor: 1
            },
            70018: {
              Id: 70018,
              Level: 7,
              Region: "浙江",
              CorrectName: "杭三鲜",
              WrongName: "海鲜汤",
              Factor: 2
            },
            70019: {
              Id: 70019,
              Level: 7,
              Region: "浙江",
              CorrectName: "蒸双臭",
              WrongName: "臭豆腐",
              Factor: 2
            },
            70020: {
              Id: 70020,
              Level: 7,
              Region: "浙江",
              CorrectName: "葱包烩",
              WrongName: "韭菜盒子",
              Factor: 1
            },
            70021: {
              Id: 70021,
              Level: 7,
              Region: "浙江",
              CorrectName: "拌川",
              WrongName: "拌面",
              Factor: 2
            },
            70022: {
              Id: 70022,
              Level: 7,
              Region: "浙江",
              CorrectName: "糟烩鞭笋",
              WrongName: "竹笋炒肉",
              Factor: 2
            },
            70023: {
              Id: 70023,
              Level: 7,
              Region: "浙江",
              CorrectName: "肉汁萝卜",
              WrongName: "红烧萝卜",
              Factor: 3
            },
            70024: {
              Id: 70024,
              Level: 7,
              Region: "浙江",
              CorrectName: "霉苋菜梗",
              WrongName: "凉拌黄瓜",
              Factor: 1
            },
            70025: {
              Id: 70025,
              Level: 7,
              Region: "浙江",
              CorrectName: "桐乡煲",
              WrongName: "麻辣香锅",
              Factor: 1
            },
            70026: {
              Id: 70026,
              Level: 7,
              Region: "浙江",
              CorrectName: "酥羊大面",
              WrongName: "大肉面",
              Factor: 3
            },
            70027: {
              Id: 70027,
              Level: 7,
              Region: "浙江",
              CorrectName: "文虎酱鸭",
              WrongName: "甜皮鸭",
              Factor: 3
            },
            70028: {
              Id: 70028,
              Level: 7,
              Region: "浙江",
              CorrectName: "金华煲",
              WrongName: "豆腐煲",
              Factor: 1
            },
            70029: {
              Id: 70029,
              Level: 7,
              Region: "浙江",
              CorrectName: "千张包",
              WrongName: "豆腐包肉",
              Factor: 3
            },
            70030: {
              Id: 70030,
              Level: 7,
              Region: "浙江",
              CorrectName: "温州炒粉干",
              WrongName: "温州炒粉丝",
              Factor: 3
            },
            80001: {
              Id: 80001,
              Level: 8,
              Region: "安徽",
              CorrectName: "臭鳜鱼",
              WrongName: "臭臭鱼",
              Factor: 2
            },
            80002: {
              Id: 80002,
              Level: 8,
              Region: "安徽",
              CorrectName: "虎皮毛豆腐",
              WrongName: "红烧毛豆腐",
              Factor: 3
            },
            80003: {
              Id: 80003,
              Level: 8,
              Region: "安徽",
              CorrectName: "一品锅",
              WrongName: "一品鲜",
              Factor: 2
            },
            80004: {
              Id: 80004,
              Level: 8,
              Region: "安徽",
              CorrectName: "两香问政山笋",
              WrongName: "竹笋蒸腊肉",
              Factor: 2
            },
            80005: {
              Id: 80005,
              Level: 8,
              Region: "安徽",
              CorrectName: "金寨吊锅",
              WrongName: "铁锅炖",
              Factor: 1
            },
            80006: {
              Id: 80006,
              Level: 8,
              Region: "安徽",
              CorrectName: "酒香稻草肉",
              WrongName: "东坡肉",
              Factor: 1
            },
            80007: {
              Id: 80007,
              Level: 8,
              Region: "安徽",
              CorrectName: "肥西老母鸡汤",
              WrongName: "清炖母鸡汤",
              Factor: 2
            },
            80008: {
              Id: 80008,
              Level: 8,
              Region: "安徽",
              CorrectName: "火腿烧甲鱼",
              WrongName: "火腿烧鸡",
              Factor: 1
            },
            80009: {
              Id: 80009,
              Level: 8,
              Region: "安徽",
              CorrectName: "清蒸石鸡",
              WrongName: "石锅田鸡",
              Factor: 2
            },
            80010: {
              Id: 80010,
              Level: 8,
              Region: "安徽",
              CorrectName: "刀板香",
              WrongName: "咸肉",
              Factor: 1
            },
            80011: {
              Id: 80011,
              Level: 8,
              Region: "安徽",
              CorrectName: "八公山豆腐",
              WrongName: "红烧豆腐",
              Factor: 2
            },
            80012: {
              Id: 80012,
              Level: 8,
              Region: "安徽",
              CorrectName: "老蚌怀珠",
              WrongName: "烧蚌肉",
              Factor: 1
            },
            80013: {
              Id: 80013,
              Level: 8,
              Region: "安徽",
              CorrectName: "火烘鱼",
              WrongName: "小鱼干",
              Factor: 1
            },
            80014: {
              Id: 80014,
              Level: 8,
              Region: "安徽",
              CorrectName: "李鸿章杂烩",
              WrongName: "一品锅",
              Factor: 1
            },
            80015: {
              Id: 80015,
              Level: 8,
              Region: "安徽",
              CorrectName: "椒盐米鸡",
              WrongName: "上校鸡米花",
              Factor: 3
            },
            80016: {
              Id: 80016,
              Level: 8,
              Region: "安徽",
              CorrectName: "霍山风干羊",
              WrongName: "霍山风干牛",
              Factor: 2
            },
            80017: {
              Id: 80017,
              Level: 8,
              Region: "安徽",
              CorrectName: "霸王别姬",
              WrongName: "炖甲鱼",
              Factor: 2
            },
            80018: {
              Id: 80018,
              Level: 8,
              Region: "安徽",
              CorrectName: "蜜汁红芋",
              WrongName: "蜜汁红薯",
              Factor: 3
            },
            80019: {
              Id: 80019,
              Level: 8,
              Region: "安徽",
              CorrectName: "黄山炖鸽",
              WrongName: "清炖乳鸽",
              Factor: 3
            },
            80020: {
              Id: 80020,
              Level: 8,
              Region: "安徽",
              CorrectName: "清炖马蹄鳖",
              WrongName: "甲鱼汤",
              Factor: 2
            },
            80021: {
              Id: 80021,
              Level: 8,
              Region: "安徽",
              CorrectName: "方腊鱼",
              WrongName: "剁椒鱼",
              Factor: 1
            },
            80022: {
              Id: 80022,
              Level: 8,
              Region: "安徽",
              CorrectName: "中和汤",
              WrongName: "豆腐汤",
              Factor: 2
            },
            80023: {
              Id: 80023,
              Level: 8,
              Region: "安徽",
              CorrectName: "无为板鸭",
              WrongName: "无为酱鸭",
              Factor: 3
            },
            80024: {
              Id: 80024,
              Level: 8,
              Region: "安徽",
              CorrectName: "符离集烧鸡",
              WrongName: "酱香烧鸡",
              Factor: 3
            },
            80025: {
              Id: 80025,
              Level: 8,
              Region: "安徽",
              CorrectName: "鱼咬羊",
              WrongName: "糖醋鲤鱼",
              Factor: 1
            },
            80026: {
              Id: 80026,
              Level: 8,
              Region: "安徽",
              CorrectName: "糖醋鲤鱼",
              WrongName: "板面",
              Factor: 1
            },
            80027: {
              Id: 80027,
              Level: 8,
              Region: "安徽",
              CorrectName: "曹操鸡",
              WrongName: "刘备鸡",
              Factor: 3
            },
            80028: {
              Id: 80028,
              Level: 8,
              Region: "安徽",
              CorrectName: "吴山贡鹅",
              WrongName: "吴山贡鸭",
              Factor: 3
            },
            80029: {
              Id: 80029,
              Level: 8,
              Region: "安徽",
              CorrectName: "腊味拼盘",
              WrongName: "腊味三拼",
              Factor: 3
            },
            80030: {
              Id: 80030,
              Level: 8,
              Region: "安徽",
              CorrectName: "葡萄鱼",
              WrongName: "松鼠桂鱼",
              Factor: 3
            },
            90001: {
              Id: 90001,
              Level: 9,
              Region: "福建",
              CorrectName: "荔枝肉",
              WrongName: "淡漕香螺片",
              Factor: 1
            },
            90002: {
              Id: 90002,
              Level: 9,
              Region: "福建",
              CorrectName: "佛跳墙",
              WrongName: "白斩河田鸡",
              Factor: 1
            },
            90003: {
              Id: 90003,
              Level: 9,
              Region: "福建",
              CorrectName: "香椒皮皮虾",
              WrongName: "椒盐皮皮虾",
              Factor: 2
            },
            90004: {
              Id: 90004,
              Level: 9,
              Region: "福建",
              CorrectName: "姜母鸭",
              WrongName: "姜母鸡",
              Factor: 2
            },
            90005: {
              Id: 90005,
              Level: 9,
              Region: "福建",
              CorrectName: "醉排骨",
              WrongName: "糖醋排骨",
              Factor: 2
            },
            90006: {
              Id: 90006,
              Level: 9,
              Region: "福建",
              CorrectName: "同安封肉",
              WrongName: "同安红烧肉",
              Factor: 3
            },
            90007: {
              Id: 90007,
              Level: 9,
              Region: "福建",
              CorrectName: "淡漕香螺片",
              WrongName: "白斩鸡",
              Factor: 1
            },
            90008: {
              Id: 90008,
              Level: 9,
              Region: "福建",
              CorrectName: "龙身凤尾虾",
              WrongName: "沙茶面",
              Factor: 1
            },
            90009: {
              Id: 90009,
              Level: 9,
              Region: "福建",
              CorrectName: "鸡茸鱼唇",
              WrongName: "金汤鱼肚",
              Factor: 2
            },
            90010: {
              Id: 90010,
              Level: 9,
              Region: "福建",
              CorrectName: "东壁龙珠",
              WrongName: "荔枝肉",
              Factor: 2
            },
            90011: {
              Id: 90011,
              Level: 9,
              Region: "福建",
              CorrectName: "福州鸡汤汆海蚌",
              WrongName: "鸡汤海蚌",
              Factor: 3
            },
            90012: {
              Id: 90012,
              Level: 9,
              Region: "福建",
              CorrectName: "白斩河田鸡",
              WrongName: "竹筒粉蒸肠",
              Factor: 1
            },
            90013: {
              Id: 90013,
              Level: 9,
              Region: "福建",
              CorrectName: "爆炒爽脆",
              WrongName: "爆炒腰花",
              Factor: 2
            },
            90014: {
              Id: 90014,
              Level: 9,
              Region: "福建",
              CorrectName: "红糟肉",
              WrongName: "红烩肉",
              Factor: 3
            },
            90015: {
              Id: 90015,
              Level: 9,
              Region: "福建",
              CorrectName: "扳指干贝",
              WrongName: "黄心皮蛋",
              Factor: 2
            },
            90016: {
              Id: 90016,
              Level: 9,
              Region: "福建",
              CorrectName: "茸汤广肚",
              WrongName: "笋丝鸡汤",
              Factor: 3
            },
            90017: {
              Id: 90017,
              Level: 9,
              Region: "福建",
              CorrectName: "半月沉江",
              WrongName: "龙岩芋子包",
              Factor: 1
            },
            90018: {
              Id: 90018,
              Level: 9,
              Region: "福建",
              CorrectName: "武夷熏鹅",
              WrongName: "武夷熏鸭",
              Factor: 3
            },
            90019: {
              Id: 90019,
              Level: 9,
              Region: "福建",
              CorrectName: "沙茶面",
              WrongName: "和平游浆豆腐",
              Factor: 1
            },
            90020: {
              Id: 90020,
              Level: 9,
              Region: "福建",
              CorrectName: "福州鱼丸",
              WrongName: "福州肉丸",
              Factor: 2
            },
            90021: {
              Id: 90021,
              Level: 9,
              Region: "福建",
              CorrectName: "福鼎肉片",
              WrongName: "福州肉片",
              Factor: 3
            },
            90022: {
              Id: 90022,
              Level: 9,
              Region: "福建",
              CorrectName: "福州肉燕",
              WrongName: "福鼎肉燕",
              Factor: 2
            },
            90023: {
              Id: 90023,
              Level: 9,
              Region: "福建",
              CorrectName: "崇武鱼卷",
              WrongName: "崇武鱼肠",
              Factor: 2
            },
            90024: {
              Id: 90024,
              Level: 9,
              Region: "福建",
              CorrectName: "沙县扁肉",
              WrongName: "沙县馄饨",
              Factor: 3
            },
            90025: {
              Id: 90025,
              Level: 9,
              Region: "福建",
              CorrectName: "平潭咸时",
              WrongName: "糯米糍粑",
              Factor: 3
            },
            90026: {
              Id: 90026,
              Level: 9,
              Region: "福建",
              CorrectName: "龙岩芋子包",
              WrongName: "沙茶面",
              Factor: 1
            },
            90027: {
              Id: 90027,
              Level: 9,
              Region: "福建",
              CorrectName: "漳州面煎粿",
              WrongName: "加沙肉",
              Factor: 3
            },
            90028: {
              Id: 90028,
              Level: 9,
              Region: "福建",
              CorrectName: "和平游浆豆腐",
              WrongName: "建瓯板鸭",
              Factor: 1
            },
            90029: {
              Id: 90029,
              Level: 9,
              Region: "福建",
              CorrectName: "建瓯板鸭",
              WrongName: "沙茶面",
              Factor: 1
            },
            90030: {
              Id: 90030,
              Level: 9,
              Region: "福建",
              CorrectName: "岚谷熏鹅",
              WrongName: "岚谷熏鸭",
              Factor: 3
            },
            100001: {
              Id: 100001,
              Level: 10,
              Region: "江西",
              CorrectName: "藜蒿炒腊肉",
              WrongName: "蒜薹炒腊肉",
              Factor: 2
            },
            100002: {
              Id: 100002,
              Level: 10,
              Region: "江西",
              CorrectName: "竹筒粉蒸肠",
              WrongName: "如意冬笋",
              Factor: 1
            },
            100003: {
              Id: 100003,
              Level: 10,
              Region: "江西",
              CorrectName: "莲花血鸭",
              WrongName: "南昌拌粉",
              Factor: 1
            },
            100004: {
              Id: 100004,
              Level: 10,
              Region: "江西",
              CorrectName: "宁都三杯鸡",
              WrongName: "宁都三杯鸭",
              Factor: 2
            },
            100005: {
              Id: 100005,
              Level: 10,
              Region: "江西",
              CorrectName: "酒糟鱼",
              WrongName: "红烧鱼",
              Factor: 2
            },
            100006: {
              Id: 100006,
              Level: 10,
              Region: "江西",
              CorrectName: "瓦罐煨汤",
              WrongName: "瓦罐鸡汤",
              Factor: 2
            },
            100007: {
              Id: 100007,
              Level: 10,
              Region: "江西",
              CorrectName: "四星望月",
              WrongName: "四月望星",
              Factor: 3
            },
            100008: {
              Id: 100008,
              Level: 10,
              Region: "江西",
              CorrectName: "庐山石鸡",
              WrongName: "庐山石鸭",
              Factor: 2
            },
            100009: {
              Id: 100009,
              Level: 10,
              Region: "江西",
              CorrectName: "余干辣椒炒肉",
              WrongName: "农家小炒肉",
              Factor: 3
            },
            100010: {
              Id: 100010,
              Level: 10,
              Region: "江西",
              CorrectName: "老表土鸡汤",
              WrongName: "老表土鸭汤",
              Factor: 3
            },
            100011: {
              Id: 100011,
              Level: 10,
              Region: "江西",
              CorrectName: "永和豆腐",
              WrongName: "蝴蝶海参",
              Factor: 1
            },
            100012: {
              Id: 100012,
              Level: 10,
              Region: "江西",
              CorrectName: "井岗烟笋",
              WrongName: "糊羹",
              Factor: 1
            },
            100013: {
              Id: 100013,
              Level: 10,
              Region: "江西",
              CorrectName: "鳜鱼煮粉",
              WrongName: "臭鳜鱼",
              Factor: 2
            },
            100014: {
              Id: 100014,
              Level: 10,
              Region: "江西",
              CorrectName: "甲鱼粉皮",
              WrongName: "鳗鱼粉皮",
              Factor: 3
            },
            100015: {
              Id: 100015,
              Level: 10,
              Region: "江西",
              CorrectName: "金汤鲜银鱼",
              WrongName: "银鱼蛋羹",
              Factor: 3
            },
            100016: {
              Id: 100016,
              Level: 10,
              Region: "江西",
              CorrectName: "高岭土煨肉",
              WrongName: "回锅肉",
              Factor: 3
            },
            100017: {
              Id: 100017,
              Level: 10,
              Region: "江西",
              CorrectName: "天燉炒牛肉",
              WrongName: "小炒黄牛肉",
              Factor: 2
            },
            100018: {
              Id: 100018,
              Level: 10,
              Region: "江西",
              CorrectName: "文山鸡丁",
              WrongName: "宫保鸡丁",
              Factor: 3
            },
            100019: {
              Id: 100019,
              Level: 10,
              Region: "江西",
              CorrectName: "海参眉毛丸",
              WrongName: "海参牛肉丸",
              Factor: 2
            },
            100020: {
              Id: 100020,
              Level: 10,
              Region: "江西",
              CorrectName: "红酥肉",
              WrongName: "小酥肉",
              Factor: 2
            },
            100021: {
              Id: 100021,
              Level: 10,
              Region: "江西",
              CorrectName: "如意冬笋",
              WrongName: "向塘烧土鸡",
              Factor: 1
            },
            100022: {
              Id: 100022,
              Level: 10,
              Region: "江西",
              CorrectName: "南昌拌粉",
              WrongName: "蛋炒饭",
              Factor: 1
            },
            100023: {
              Id: 100023,
              Level: 10,
              Region: "江西",
              CorrectName: "豫章酥鸭",
              WrongName: "豫章炒鸡",
              Factor: 3
            },
            100024: {
              Id: 100024,
              Level: 10,
              Region: "江西",
              CorrectName: "向塘烧土鸡",
              WrongName: "糖醋鲤鱼",
              Factor: 1
            },
            100025: {
              Id: 100025,
              Level: 10,
              Region: "江西",
              CorrectName: "八卦豆腐",
              WrongName: "南昌拌粉",
              Factor: 1
            },
            100026: {
              Id: 100026,
              Level: 10,
              Region: "江西",
              CorrectName: "糊羹",
              WrongName: "婺香荷包红鲤",
              Factor: 1
            },
            100027: {
              Id: 100027,
              Level: 10,
              Region: "江西",
              CorrectName: "临川藕丝",
              WrongName: "临川粉丝",
              Factor: 3
            },
            100028: {
              Id: 100028,
              Level: 10,
              Region: "江西",
              CorrectName: "婺香荷包红鲤",
              WrongName: "口味虾",
              Factor: 1
            },
            100029: {
              Id: 100029,
              Level: 10,
              Region: "江西",
              CorrectName: "鄱湖胖头鱼",
              WrongName: "鄱湖鲫鱼",
              Factor: 3
            },
            100030: {
              Id: 100030,
              Level: 10,
              Region: "江西",
              CorrectName: "萍乡烟熏肉",
              WrongName: "萍乡烟熏腊肠",
              Factor: 2
            },
            110001: {
              Id: 110001,
              Level: 11,
              Region: "山东",
              CorrectName: "九转大肠",
              WrongName: "红烧大肠",
              Factor: 2
            },
            110002: {
              Id: 110002,
              Level: 11,
              Region: "山东",
              CorrectName: "糖醋鲤鱼",
              WrongName: "糖醋肘子",
              Factor: 1
            },
            110003: {
              Id: 110003,
              Level: 11,
              Region: "山东",
              CorrectName: "葱烧海参",
              WrongName: "葱烧鱼肚",
              Factor: 2
            },
            110004: {
              Id: 110004,
              Level: 11,
              Region: "山东",
              CorrectName: "汤爆双脆",
              WrongName: "清汤双脆",
              Factor: 2
            },
            110005: {
              Id: 110005,
              Level: 11,
              Region: "山东",
              CorrectName: "乌鱼蛋汤",
              WrongName: "清汤乌鱼",
              Factor: 2
            },
            110006: {
              Id: 110006,
              Level: 11,
              Region: "山东",
              CorrectName: "芙蓉鸡片",
              WrongName: "芙蓉鱼片",
              Factor: 3
            },
            110007: {
              Id: 110007,
              Level: 11,
              Region: "山东",
              CorrectName: "蝴蝶海参",
              WrongName: "鸡蛋羹",
              Factor: 1
            },
            110008: {
              Id: 110008,
              Level: 11,
              Region: "山东",
              CorrectName: "糖醋里脊",
              WrongName: "香酥鸡",
              Factor: 1
            },
            110009: {
              Id: 110009,
              Level: 11,
              Region: "山东",
              CorrectName: "爆炒腰花",
              WrongName: "爆炒猪肝",
              Factor: 1
            },
            110010: {
              Id: 110010,
              Level: 11,
              Region: "山东",
              CorrectName: "德州扒鸡",
              WrongName: "德州猪扒",
              Factor: 1
            },
            110011: {
              Id: 110011,
              Level: 11,
              Region: "山东",
              CorrectName: "油焖大虾",
              WrongName: "糖醋虾",
              Factor: 3
            },
            110012: {
              Id: 110012,
              Level: 11,
              Region: "山东",
              CorrectName: "木须肉",
              WrongName: "木耳炒肉",
              Factor: 3
            },
            110013: {
              Id: 110013,
              Level: 11,
              Region: "山东",
              CorrectName: "一品豆腐",
              WrongName: "红烧豆腐",
              Factor: 2
            },
            110014: {
              Id: 110014,
              Level: 11,
              Region: "山东",
              CorrectName: "红烧大虾",
              WrongName: "油焖大虾",
              Factor: 3
            },
            110015: {
              Id: 110015,
              Level: 11,
              Region: "山东",
              CorrectName: "油爆双脆",
              WrongName: "炒腰片",
              Factor: 2
            },
            110016: {
              Id: 110016,
              Level: 11,
              Region: "山东",
              CorrectName: "四喜丸子",
              WrongName: "红烧肉圆",
              Factor: 2
            },
            110017: {
              Id: 110017,
              Level: 11,
              Region: "山东",
              CorrectName: "虎皮肉",
              WrongName: "酒糟肉",
              Factor: 2
            },
            110018: {
              Id: 110018,
              Level: 11,
              Region: "山东",
              CorrectName: "醋溜白菜",
              WrongName: "红烧辣白菜",
              Factor: 2
            },
            110019: {
              Id: 110019,
              Level: 11,
              Region: "山东",
              CorrectName: "软香老汤",
              WrongName: "海鲜汤",
              Factor: 2
            },
            110020: {
              Id: 110020,
              Level: 11,
              Region: "山东",
              CorrectName: "潍坊肉火烧",
              WrongName: "潍坊烧饼",
              Factor: 3
            },
            110021: {
              Id: 110021,
              Level: 11,
              Region: "山东",
              CorrectName: "煎饼卷大葱",
              WrongName: "鸡蛋灌饼",
              Factor: 1
            },
            110022: {
              Id: 110022,
              Level: 11,
              Region: "山东",
              CorrectName: "利津水煎包",
              WrongName: "小杨生煎",
              Factor: 1
            },
            110023: {
              Id: 110023,
              Level: 11,
              Region: "山东",
              CorrectName: "宫保鸡丁",
              WrongName: "红烧鸡丁",
              Factor: 1
            },
            110024: {
              Id: 110024,
              Level: 11,
              Region: "山东",
              CorrectName: "漕溜鱼片",
              WrongName: "漕溜鸡片",
              Factor: 3
            },
            110025: {
              Id: 110025,
              Level: 11,
              Region: "山东",
              CorrectName: "锅塌豆腐",
              WrongName: "红烧豆腐",
              Factor: 3
            },
            110026: {
              Id: 110026,
              Level: 11,
              Region: "山东",
              CorrectName: "一品锅",
              WrongName: "铁锅炖大鹅",
              Factor: 1
            },
            110027: {
              Id: 110027,
              Level: 11,
              Region: "山东",
              CorrectName: "韭菜炒海肠",
              WrongName: "西红柿炒鸡蛋",
              Factor: 1
            },
            110028: {
              Id: 110028,
              Level: 11,
              Region: "山东",
              CorrectName: "清蒸加吉鱼",
              WrongName: "清蒸鲷鱼",
              Factor: 3
            },
            110029: {
              Id: 110029,
              Level: 11,
              Region: "山东",
              CorrectName: "拔丝苹果",
              WrongName: "拔丝地瓜",
              Factor: 3
            },
            110030: {
              Id: 110030,
              Level: 11,
              Region: "山东",
              CorrectName: "鱼锅片片",
              WrongName: "鱼锅馍馍",
              Factor: 3
            },
            120001: {
              Id: 120001,
              Level: 12,
              Region: "河南",
              CorrectName: "胡辣汤",
              WrongName: "牛肉粉",
              Factor: 1
            },
            120002: {
              Id: 120002,
              Level: 12,
              Region: "河南",
              CorrectName: "道口烧鸡",
              WrongName: "道口烧麦",
              Factor: 1
            },
            120003: {
              Id: 120003,
              Level: 12,
              Region: "河南",
              CorrectName: "固始鹅块",
              WrongName: "固始鸡块",
              Factor: 2
            },
            120004: {
              Id: 120004,
              Level: 12,
              Region: "河南",
              CorrectName: "黄河大鲤鱼",
              WrongName: "黄河钵钵鸡",
              Factor: 1
            },
            120005: {
              Id: 120005,
              Level: 12,
              Region: "河南",
              CorrectName: "南阳条子肉",
              WrongName: "南阳蒸腊肉",
              Factor: 2
            },
            120006: {
              Id: 120006,
              Level: 12,
              Region: "河南",
              CorrectName: "浆面条",
              WrongName: "拉面",
              Factor: 1
            },
            120007: {
              Id: 120007,
              Level: 12,
              Region: "河南",
              CorrectName: "水席",
              WrongName: "火锅",
              Factor: 1
            },
            120008: {
              Id: 120008,
              Level: 12,
              Region: "河南",
              CorrectName: "濮阳裹凉皮",
              WrongName: "濮阳蔬菜饼",
              Factor: 2
            },
            120009: {
              Id: 120009,
              Level: 12,
              Region: "河南",
              CorrectName: "高炉烧饼",
              WrongName: "高炉锅盔",
              Factor: 2
            },
            120010: {
              Id: 120010,
              Level: 12,
              Region: "河南",
              CorrectName: "烩面",
              WrongName: "刀削面",
              Factor: 2
            },
            120011: {
              Id: 120011,
              Level: 12,
              Region: "河南",
              CorrectName: "壮馍",
              WrongName: "壮饼",
              Factor: 3
            },
            120012: {
              Id: 120012,
              Level: 12,
              Region: "河南",
              CorrectName: "油旋馍",
              WrongName: "凹凸饼",
              Factor: 2
            },
            120013: {
              Id: 120013,
              Level: 12,
              Region: "河南",
              CorrectName: "博望锅盔",
              WrongName: "博望烧饼",
              Factor: 3
            },
            120014: {
              Id: 120014,
              Level: 12,
              Region: "河南",
              CorrectName: "羊双肠",
              WrongName: "牛杂汤",
              Factor: 3
            },
            120015: {
              Id: 120015,
              Level: 12,
              Region: "河南",
              CorrectName: "炒凉粉",
              WrongName: "炒土豆",
              Factor: 2
            },
            120016: {
              Id: 120016,
              Level: 12,
              Region: "河南",
              CorrectName: "炸紫酥肉",
              WrongName: "甜烧白",
              Factor: 2
            },
            120017: {
              Id: 120017,
              Level: 12,
              Region: "河南",
              CorrectName: "扒广肚",
              WrongName: "炸腐竹",
              Factor: 1
            },
            120018: {
              Id: 120018,
              Level: 12,
              Region: "河南",
              CorrectName: "炸八块",
              WrongName: "小杨生煎",
              Factor: 1
            },
            120019: {
              Id: 120019,
              Level: 12,
              Region: "河南",
              CorrectName: "葱扒羊肉",
              WrongName: "葱爆牛肉",
              Factor: 3
            },
            120020: {
              Id: 120020,
              Level: 12,
              Region: "河南",
              CorrectName: "花生糕",
              WrongName: "芝麻糕",
              Factor: 1
            },
            120021: {
              Id: 120021,
              Level: 12,
              Region: "河南",
              CorrectName: "桶子鸡",
              WrongName: "白切鸡",
              Factor: 3
            },
            120022: {
              Id: 120022,
              Level: 12,
              Region: "河南",
              CorrectName: "回锅镇肉合",
              WrongName: "肉夹馍",
              Factor: 2
            },
            120023: {
              Id: 120023,
              Level: 12,
              Region: "河南",
              CorrectName: "闹汤驴肉",
              WrongName: "脑汤牛肉",
              Factor: 3
            },
            120024: {
              Id: 120024,
              Level: 12,
              Region: "河南",
              CorrectName: "蒸卤面",
              WrongName: "煮泡面",
              Factor: 1
            },
            120025: {
              Id: 120025,
              Level: 12,
              Region: "河南",
              CorrectName: "塌菜馍",
              WrongName: "韭菜饼",
              Factor: 2
            },
            120026: {
              Id: 120026,
              Level: 12,
              Region: "河南",
              CorrectName: "油炸麻叶子",
              WrongName: "油炸芝麻脆",
              Factor: 3
            },
            120027: {
              Id: 120027,
              Level: 12,
              Region: "河南",
              CorrectName: "蒸菜蟒",
              WrongName: "蒸肉卷",
              Factor: 1
            },
            120028: {
              Id: 120028,
              Level: 12,
              Region: "河南",
              CorrectName: "洛阳燕菜",
              WrongName: "洛阳花菜",
              Factor: 3
            },
            120029: {
              Id: 120029,
              Level: 12,
              Region: "河南",
              CorrectName: "煎扒青鱼头尾",
              WrongName: "红烧青鱼头尾",
              Factor: 3
            },
            120030: {
              Id: 120030,
              Level: 12,
              Region: "河南",
              CorrectName: "萝卜丝饼",
              WrongName: "韭菜饼",
              Factor: 3
            },
            130001: {
              Id: 130001,
              Level: 13,
              Region: "湖北",
              CorrectName: "热干面",
              WrongName: "担担面",
              Factor: 1
            },
            130002: {
              Id: 130002,
              Level: 13,
              Region: "湖北",
              CorrectName: "襄阳牛肉面",
              WrongName: "襄阳胡辣汤",
              Factor: 1
            },
            130003: {
              Id: 130003,
              Level: 13,
              Region: "湖北",
              CorrectName: "武昌鱼",
              WrongName: "文昌鱼",
              Factor: 3
            },
            130004: {
              Id: 130004,
              Level: 13,
              Region: "湖北",
              CorrectName: "排骨藕汤",
              WrongName: "铁锅炖大鹅",
              Factor: 1
            },
            130005: {
              Id: 130005,
              Level: 13,
              Region: "湖北",
              CorrectName: "沔阳三蒸",
              WrongName: "岳阳三蒸",
              Factor: 2
            },
            130006: {
              Id: 130006,
              Level: 13,
              Region: "湖北",
              CorrectName: "红菜薹炒腊肉",
              WrongName: "红菜薹炒腊肠",
              Factor: 2
            },
            130007: {
              Id: 130007,
              Level: 13,
              Region: "湖北",
              CorrectName: "三峡肥鱼",
              WrongName: "咕咾肉",
              Factor: 1
            },
            130008: {
              Id: 130008,
              Level: 13,
              Region: "湖北",
              CorrectName: "荆楚鱼圆",
              WrongName: "荆楚牛肉丸",
              Factor: 2
            },
            130009: {
              Id: 130009,
              Level: 13,
              Region: "湖北",
              CorrectName: "荆州甲鱼",
              WrongName: "荆州炖鱼",
              Factor: 2
            },
            130010: {
              Id: 130010,
              Level: 13,
              Region: "湖北",
              CorrectName: "恩施腊猪蹄",
              WrongName: "排骨藕汤",
              Factor: 1
            },
            130011: {
              Id: 130011,
              Level: 13,
              Region: "湖北",
              CorrectName: "三鲜豆皮",
              WrongName: "三鲜豆腐",
              Factor: 3
            },
            130012: {
              Id: 130012,
              Level: 13,
              Region: "湖北",
              CorrectName: "糍粑鱼",
              WrongName: "酒糟鱼",
              Factor: 3
            },
            130013: {
              Id: 130013,
              Level: 13,
              Region: "湖北",
              CorrectName: "懒豆花",
              WrongName: "懒豆腐",
              Factor: 2
            },
            130014: {
              Id: 130014,
              Level: 13,
              Region: "湖北",
              CorrectName: "湘妃糕",
              WrongName: "湘妃豆腐",
              Factor: 3
            },
            130015: {
              Id: 130015,
              Level: 13,
              Region: "湖北",
              CorrectName: "鸭脖",
              WrongName: "兔头",
              Factor: 1
            },
            130016: {
              Id: 130016,
              Level: 13,
              Region: "湖北",
              CorrectName: "孝感麻糖",
              WrongName: "孝感花生酱",
              Factor: 1
            },
            130017: {
              Id: 130017,
              Level: 13,
              Region: "湖北",
              CorrectName: "油焖小龙虾",
              WrongName: "口味蟹",
              Factor: 1
            },
            130018: {
              Id: 130018,
              Level: 13,
              Region: "湖北",
              CorrectName: "黄陂三合",
              WrongName: "黄陂肉丸",
              Factor: 3
            },
            130019: {
              Id: 130019,
              Level: 13,
              Region: "湖北",
              CorrectName: "油饼包烧麦",
              WrongName: "油饼包馒头",
              Factor: 2
            },
            130020: {
              Id: 130020,
              Level: 13,
              Region: "湖北",
              CorrectName: "公安锅盔",
              WrongName: "公安烧饼",
              Factor: 2
            },
            130021: {
              Id: 130021,
              Level: 13,
              Region: "湖北",
              CorrectName: "糊汤米粉",
              WrongName: "牛肉面",
              Factor: 1
            },
            130022: {
              Id: 130022,
              Level: 13,
              Region: "湖北",
              CorrectName: "干煸藕丝",
              WrongName: "油炸土豆丝",
              Factor: 2
            },
            130023: {
              Id: 130023,
              Level: 13,
              Region: "湖北",
              CorrectName: "棱角米烧肉",
              WrongName: "毛氏红烧肉",
              Factor: 2
            },
            130024: {
              Id: 130024,
              Level: 13,
              Region: "湖北",
              CorrectName: "炮蒸鳝鱼",
              WrongName: "炮蒸鳗鱼",
              Factor: 3
            },
            130025: {
              Id: 130025,
              Level: 13,
              Region: "湖北",
              CorrectName: "百合糕",
              WrongName: "黄米糕",
              Factor: 3
            },
            130026: {
              Id: 130026,
              Level: 13,
              Region: "湖北",
              CorrectName: "藕夹",
              WrongName: "茄盒",
              Factor: 1
            },
            130027: {
              Id: 130027,
              Level: 13,
              Region: "湖北",
              CorrectName: "二回头",
              WrongName: "三回头",
              Factor: 3
            },
            130028: {
              Id: 130028,
              Level: 13,
              Region: "湖北",
              CorrectName: "蟠龙菜",
              WrongName: "刀口圆子",
              Factor: 3
            },
            130029: {
              Id: 130029,
              Level: 13,
              Region: "湖北",
              CorrectName: "洪湖烧鸭",
              WrongName: "洪湖烧鸡",
              Factor: 3
            },
            130030: {
              Id: 130030,
              Level: 13,
              Region: "湖北",
              CorrectName: "汽水肉",
              WrongName: "蒸蛋肉末",
              Factor: 2
            },
            140001: {
              Id: 140001,
              Level: 14,
              Region: "湖南",
              CorrectName: "农家小炒肉",
              WrongName: "热干面",
              Factor: 1
            },
            140002: {
              Id: 140002,
              Level: 14,
              Region: "湖南",
              CorrectName: "小炒黄牛肉",
              WrongName: "宫保鸡丁",
              Factor: 1
            },
            140003: {
              Id: 140003,
              Level: 14,
              Region: "湖南",
              CorrectName: "臭豆腐",
              WrongName: "钵仔糕",
              Factor: 1
            },
            140004: {
              Id: 140004,
              Level: 14,
              Region: "湖南",
              CorrectName: "酱板鸭",
              WrongName: "酱板鸡",
              Factor: 2
            },
            140005: {
              Id: 140005,
              Level: 14,
              Region: "湖南",
              CorrectName: "糖油粑粑",
              WrongName: "糖油麻圆",
              Factor: 3
            },
            140006: {
              Id: 140006,
              Level: 14,
              Region: "湖南",
              CorrectName: "口味蟹",
              WrongName: "咖喱蟹",
              Factor: 2
            },
            140007: {
              Id: 140007,
              Level: 14,
              Region: "湖南",
              CorrectName: "嗦螺",
              WrongName: "海螺",
              Factor: 2
            },
            140008: {
              Id: 140008,
              Level: 14,
              Region: "湖南",
              CorrectName: "腊味合蒸",
              WrongName: "辣椒炒肉",
              Factor: 1
            },
            140009: {
              Id: 140009,
              Level: 14,
              Region: "湖南",
              CorrectName: "剁椒鱼头",
              WrongName: "文昌鸡",
              Factor: 1
            },
            140010: {
              Id: 140010,
              Level: 14,
              Region: "湖南",
              CorrectName: "猪血丸子",
              WrongName: "炒香干",
              Factor: 2
            },
            140011: {
              Id: 140011,
              Level: 14,
              Region: "湖南",
              CorrectName: "东安仔鸡",
              WrongName: "东安烤乳猪",
              Factor: 1
            },
            140012: {
              Id: 140012,
              Level: 14,
              Region: "湖南",
              CorrectName: "麻仁香酥鸭",
              WrongName: "麻仁豆腐干",
              Factor: 3
            },
            140013: {
              Id: 140013,
              Level: 14,
              Region: "湖南",
              CorrectName: "毛氏红烧肉",
              WrongName: "毛氏扣肉",
              Factor: 2
            },
            140014: {
              Id: 140014,
              Level: 14,
              Region: "湖南",
              CorrectName: "常德牛肉粉",
              WrongName: "常德烤鸭",
              Factor: 1
            },
            140015: {
              Id: 140015,
              Level: 14,
              Region: "湖南",
              CorrectName: "永州血鸭",
              WrongName: "永州血鸡",
              Factor: 3
            },
            140016: {
              Id: 140016,
              Level: 14,
              Region: "湖南",
              CorrectName: "臭干子",
              WrongName: "臭豆腐",
              Factor: 2
            },
            140017: {
              Id: 140017,
              Level: 14,
              Region: "湖南",
              CorrectName: "鱼头豆腐煲",
              WrongName: "臭干子",
              Factor: 1
            },
            140018: {
              Id: 140018,
              Level: 14,
              Region: "湖南",
              CorrectName: "口味虾",
              WrongName: "油焖小龙虾",
              Factor: 2
            },
            140019: {
              Id: 140019,
              Level: 14,
              Region: "湖南",
              CorrectName: "烟笋炒腊肉",
              WrongName: "烟笋炒腊肠",
              Factor: 2
            },
            140020: {
              Id: 140020,
              Level: 14,
              Region: "湖南",
              CorrectName: "干锅蛇肉",
              WrongName: "干锅黄鳝",
              Factor: 3
            },
            140021: {
              Id: 140021,
              Level: 14,
              Region: "湖南",
              CorrectName: "香辣鸭",
              WrongName: "香辣鸡",
              Factor: 3
            },
            140022: {
              Id: 140022,
              Level: 14,
              Region: "湖南",
              CorrectName: "豆角炒外婆菜",
              WrongName: "豌豆炒外婆菜",
              Factor: 2
            },
            140023: {
              Id: 140023,
              Level: 14,
              Region: "湖南",
              CorrectName: "土匪猪肝",
              WrongName: "土匪鸡杂",
              Factor: 1
            },
            140024: {
              Id: 140024,
              Level: 14,
              Region: "湖南",
              CorrectName: "农家一碗香",
              WrongName: "辣椒炒蛋",
              Factor: 3
            },
            140025: {
              Id: 140025,
              Level: 14,
              Region: "湖南",
              CorrectName: "擂辣椒皮蛋",
              WrongName: "西红柿鸡蛋",
              Factor: 1
            },
            140026: {
              Id: 140026,
              Level: 14,
              Region: "湖南",
              CorrectName: "香辣小鱼虾",
              WrongName: "香辣小鱼蟹",
              Factor: 2
            },
            140027: {
              Id: 140027,
              Level: 14,
              Region: "湖南",
              CorrectName: "发丝牛百叶",
              WrongName: "发丝笋干",
              Factor: 3
            },
            140028: {
              Id: 140028,
              Level: 14,
              Region: "湖南",
              CorrectName: "糍粑",
              WrongName: "蔬菜饼",
              Factor: 3
            },
            140029: {
              Id: 140029,
              Level: 14,
              Region: "湖南",
              CorrectName: "酸豆角肉末",
              WrongName: "酸豆角炒鸡蛋",
              Factor: 3
            },
            140030: {
              Id: 140030,
              Level: 14,
              Region: "湖南",
              CorrectName: "刮凉粉",
              WrongName: "干拌粉",
              Factor: 3
            },
            150001: {
              Id: 150001,
              Level: 15,
              Region: "广东",
              CorrectName: "钵仔糕",
              WrongName: "小碗粥",
              Factor: 1
            },
            150002: {
              Id: 150002,
              Level: 15,
              Region: "广东",
              CorrectName: "肠粉",
              WrongName: "丝袜奶茶",
              Factor: 1
            },
            150003: {
              Id: 150003,
              Level: 15,
              Region: "广东",
              CorrectName: "豆豉蒸排骨",
              WrongName: "豆豉蒸猪脚",
              Factor: 2
            },
            150004: {
              Id: 150004,
              Level: 15,
              Region: "广东",
              CorrectName: "潮汕牛肉丸",
              WrongName: "淀粉烤肠",
              Factor: 1
            },
            150005: {
              Id: 150005,
              Level: 15,
              Region: "广东",
              CorrectName: "潮汕牛肉火锅",
              WrongName: "酸辣粉",
              Factor: 1
            },
            150006: {
              Id: 150006,
              Level: 15,
              Region: "广东",
              CorrectName: "白切鸡",
              WrongName: "葱油鸡",
              Factor: 3
            },
            150007: {
              Id: 150007,
              Level: 15,
              Region: "广东",
              CorrectName: "艇仔粥",
              WrongName: "海鲜粥",
              Factor: 3
            },
            150008: {
              Id: 150008,
              Level: 15,
              Region: "广东",
              CorrectName: "炒牛河",
              WrongName: "牛肉炒面",
              Factor: 2
            },
            150009: {
              Id: 150009,
              Level: 15,
              Region: "广东",
              CorrectName: "荷香糯米鸡",
              WrongName: "荷香饭包肉",
              Factor: 2
            },
            150010: {
              Id: 150010,
              Level: 15,
              Region: "广东",
              CorrectName: "云吞面",
              WrongName: "饺子面",
              Factor: 2
            },
            150011: {
              Id: 150011,
              Level: 15,
              Region: "广东",
              CorrectName: "叉烧包",
              WrongName: "小馒头",
              Factor: 2
            },
            150012: {
              Id: 150012,
              Level: 15,
              Region: "广东",
              CorrectName: "椒盐濑尿虾",
              WrongName: "糖醋排骨",
              Factor: 1
            },
            150013: {
              Id: 150013,
              Level: 15,
              Region: "广东",
              CorrectName: "牛腩粉",
              WrongName: "牛肉面",
              Factor: 3
            },
            150014: {
              Id: 150014,
              Level: 15,
              Region: "广东",
              CorrectName: "烤乳猪",
              WrongName: "烤乳鸽",
              Factor: 1
            },
            150015: {
              Id: 150015,
              Level: 15,
              Region: "广东",
              CorrectName: "烧鹅",
              WrongName: "烧鸡",
              Factor: 3
            },
            150016: {
              Id: 150016,
              Level: 15,
              Region: "广东",
              CorrectName: "老火靓汤",
              WrongName: "胡辣汤",
              Factor: 2
            },
            150017: {
              Id: 150017,
              Level: 15,
              Region: "广东",
              CorrectName: "盐焗鸡",
              WrongName: "盐水鸭",
              Factor: 3
            },
            150018: {
              Id: 150018,
              Level: 15,
              Region: "广东",
              CorrectName: "东江酿豆腐",
              WrongName: "东江钵钵鸡",
              Factor: 1
            },
            150019: {
              Id: 150019,
              Level: 15,
              Region: "广东",
              CorrectName: "白灼虾",
              WrongName: "蒜泥白肉",
              Factor: 1
            },
            150020: {
              Id: 150020,
              Level: 15,
              Region: "广东",
              CorrectName: "咕噜肉",
              WrongName: "红烧肉",
              Factor: 3
            },
            150021: {
              Id: 150021,
              Level: 15,
              Region: "广东",
              CorrectName: "虾饺",
              WrongName: "烧麦",
              Factor: 1
            },
            150022: {
              Id: 150022,
              Level: 15,
              Region: "广东",
              CorrectName: "皮蛋瘦肉粥",
              WrongName: "青菜瘦肉粥",
              Factor: 2
            },
            150023: {
              Id: 150023,
              Level: 15,
              Region: "广东",
              CorrectName: "双皮奶",
              WrongName: "奶茶",
              Factor: 2
            },
            150024: {
              Id: 150024,
              Level: 15,
              Region: "广东",
              CorrectName: "姜撞奶",
              WrongName: "丝袜奶茶",
              Factor: 3
            },
            150025: {
              Id: 150025,
              Level: 15,
              Region: "广东",
              CorrectName: "石湾豆腐",
              WrongName: "石湾鱼头",
              Factor: 1
            },
            150026: {
              Id: 150026,
              Level: 15,
              Region: "广东",
              CorrectName: "黄埔滑蛋",
              WrongName: "黄埔蒸菜",
              Factor: 3
            },
            150027: {
              Id: 150027,
              Level: 15,
              Region: "广东",
              CorrectName: "叉烧肉",
              WrongName: "炒腊肉",
              Factor: 2
            },
            150028: {
              Id: 150028,
              Level: 15,
              Region: "广东",
              CorrectName: "煲仔饭",
              WrongName: "蛋炒饭",
              Factor: 3
            },
            150029: {
              Id: 150029,
              Level: 15,
              Region: "广东",
              CorrectName: "红烧乳鸽",
              WrongName: "烤鸡",
              Factor: 2
            },
            150030: {
              Id: 150030,
              Level: 15,
              Region: "广东",
              CorrectName: "梅菜扣肉",
              WrongName: "红烧肉",
              Factor: 3
            },
            160001: {
              Id: 160001,
              Level: 16,
              Region: "海南",
              CorrectName: "文昌鸡",
              WrongName: "文昌鸭",
              Factor: 1
            },
            160002: {
              Id: 160002,
              Level: 16,
              Region: "海南",
              CorrectName: "加积鸭",
              WrongName: "温泉鹅",
              Factor: 2
            },
            160003: {
              Id: 160003,
              Level: 16,
              Region: "海南",
              CorrectName: "东山羊",
              WrongName: "干煎大肉片",
              Factor: 1
            },
            160004: {
              Id: 160004,
              Level: 16,
              Region: "海南",
              CorrectName: "和乐蟹",
              WrongName: "大闸蟹",
              Factor: 2
            },
            160005: {
              Id: 160005,
              Level: 16,
              Region: "海南",
              CorrectName: "斋菜煲",
              WrongName: "冬瓜三鲜汤",
              Factor: 1
            },
            160006: {
              Id: 160006,
              Level: 16,
              Region: "海南",
              CorrectName: "临高烤乳猪",
              WrongName: "坨坨肉",
              Factor: 1
            },
            160007: {
              Id: 160007,
              Level: 16,
              Region: "海南",
              CorrectName: "鲜鱼汤",
              WrongName: "鸡汤",
              Factor: 1
            },
            160008: {
              Id: 160008,
              Level: 16,
              Region: "海南",
              CorrectName: "椰子鸡",
              WrongName: "北京烤鸭",
              Factor: 1
            },
            160009: {
              Id: 160009,
              Level: 16,
              Region: "海南",
              CorrectName: "菠萝炒鸭肉",
              WrongName: "菠萝饭",
              Factor: 1
            },
            160010: {
              Id: 160010,
              Level: 16,
              Region: "海南",
              CorrectName: "椰子饭",
              WrongName: "扬州炒饭",
              Factor: 1
            },
            160011: {
              Id: 160011,
              Level: 16,
              Region: "海南",
              CorrectName: "海南腌粉",
              WrongName: "炒河粉",
              Factor: 2
            },
            160012: {
              Id: 160012,
              Level: 16,
              Region: "海南",
              CorrectName: "清凉补",
              WrongName: "芋圆烧仙草",
              Factor: 2
            },
            160013: {
              Id: 160013,
              Level: 16,
              Region: "海南",
              CorrectName: "抱罗粉",
              WrongName: "炒米粉",
              Factor: 2
            },
            160014: {
              Id: 160014,
              Level: 16,
              Region: "海南",
              CorrectName: "海南粉",
              WrongName: "酸辣粉",
              Factor: 2
            },
            160015: {
              Id: 160015,
              Level: 16,
              Region: "海南",
              CorrectName: "黎家竹筒饭",
              WrongName: "蒜香排骨",
              Factor: 1
            },
            160016: {
              Id: 160016,
              Level: 16,
              Region: "海南",
              CorrectName: "鸡屎藤",
              WrongName: "烧仙草",
              Factor: 2
            },
            160017: {
              Id: 160017,
              Level: 16,
              Region: "海南",
              CorrectName: "五指山野菜",
              WrongName: "蒜蓉空心菜",
              Factor: 3
            },
            160018: {
              Id: 160018,
              Level: 16,
              Region: "海南",
              CorrectName: "白莲鹅",
              WrongName: "白斩鸡",
              Factor: 3
            },
            160019: {
              Id: 160019,
              Level: 16,
              Region: "海南",
              CorrectName: "蒜蓉虾",
              WrongName: "油焖大虾",
              Factor: 2
            },
            160020: {
              Id: 160020,
              Level: 16,
              Region: "海南",
              CorrectName: "海南全家福煲",
              WrongName: "海鲜煲",
              Factor: 3
            },
            160021: {
              Id: 160021,
              Level: 16,
              Region: "海南",
              CorrectName: "椰子盅",
              WrongName: "钵仔糕",
              Factor: 1
            },
            160022: {
              Id: 160022,
              Level: 16,
              Region: "海南",
              CorrectName: "藤桥排骨",
              WrongName: "炖排骨",
              Factor: 3
            },
            160023: {
              Id: 160023,
              Level: 16,
              Region: "海南",
              CorrectName: "海南鸡饭",
              WrongName: "鸡块米饭",
              Factor: 2
            },
            160024: {
              Id: 160024,
              Level: 16,
              Region: "海南",
              CorrectName: "温泉鹅",
              WrongName: "香菇鸡汤",
              Factor: 3
            },
            160025: {
              Id: 160025,
              Level: 16,
              Region: "海南",
              CorrectName: "煎堆",
              WrongName: "麻圆",
              Factor: 3
            },
            160026: {
              Id: 160026,
              Level: 16,
              Region: "海南",
              CorrectName: "黎族甜糟",
              WrongName: "涝糟",
              Factor: 3
            },
            160027: {
              Id: 160027,
              Level: 16,
              Region: "海南",
              CorrectName: "八宝饭",
              WrongName: "南瓜八宝饭",
              Factor: 2
            },
            160028: {
              Id: 160028,
              Level: 16,
              Region: "海南",
              CorrectName: "椰叶薏粑",
              WrongName: "叶儿粑",
              Factor: 3
            },
            160029: {
              Id: 160029,
              Level: 16,
              Region: "海南",
              CorrectName: "椰子船",
              WrongName: "香蕉船",
              Factor: 3
            },
            160030: {
              Id: 160030,
              Level: 16,
              Region: "海南",
              CorrectName: "菜包饭",
              WrongName: "紫菜包饭",
              Factor: 3
            },
            170001: {
              Id: 170001,
              Level: 17,
              Region: "四川",
              CorrectName: "干煸四季豆",
              WrongName: "干煸豇豆",
              Factor: 3
            },
            170002: {
              Id: 170002,
              Level: 17,
              Region: "四川",
              CorrectName: "干煸豇豆",
              WrongName: "干煸四季豆",
              Factor: 3
            },
            170003: {
              Id: 170003,
              Level: 17,
              Region: "四川",
              CorrectName: "干锅土豆",
              WrongName: "天蚕土豆",
              Factor: 2
            },
            170004: {
              Id: 170004,
              Level: 17,
              Region: "四川",
              CorrectName: "凉面",
              WrongName: "凉皮",
              Factor: 1
            },
            170005: {
              Id: 170005,
              Level: 17,
              Region: "四川",
              CorrectName: "椒麻鸡",
              WrongName: "手撕鸡",
              Factor: 2
            },
            170006: {
              Id: 170006,
              Level: 17,
              Region: "四川",
              CorrectName: "糖醋排骨",
              WrongName: "粉蒸排骨",
              Factor: 1
            },
            170007: {
              Id: 170007,
              Level: 17,
              Region: "四川",
              CorrectName: "蹄花汤",
              WrongName: "炖猪蹄",
              Factor: 2
            },
            170008: {
              Id: 170008,
              Level: 17,
              Region: "四川",
              CorrectName: "凉粉",
              WrongName: "凉面",
              Factor: 1
            },
            170009: {
              Id: 170009,
              Level: 17,
              Region: "四川",
              CorrectName: "泡菜",
              WrongName: "水煮菜",
              Factor: 1
            },
            170010: {
              Id: 170010,
              Level: 17,
              Region: "四川",
              CorrectName: "担担面",
              WrongName: "杂酱面",
              Factor: 2
            },
            170011: {
              Id: 170011,
              Level: 17,
              Region: "四川",
              CorrectName: "蒜苗回锅肉",
              WrongName: "豆瓣回锅肉",
              Factor: 1
            },
            170012: {
              Id: 170012,
              Level: 17,
              Region: "四川",
              CorrectName: "毛血旺",
              WrongName: "血肠",
              Factor: 1
            },
            170013: {
              Id: 170013,
              Level: 17,
              Region: "四川",
              CorrectName: "红油抄手",
              WrongName: "红油饺子",
              Factor: 2
            },
            170014: {
              Id: 170014,
              Level: 17,
              Region: "四川",
              CorrectName: "红糖糍粑",
              WrongName: "油炸糍粑",
              Factor: 2
            },
            170015: {
              Id: 170015,
              Level: 17,
              Region: "四川",
              CorrectName: "鱼香茄子",
              WrongName: "粉蒸茄子",
              Factor: 2
            },
            170016: {
              Id: 170016,
              Level: 17,
              Region: "四川",
              CorrectName: "水煮鱼",
              WrongName: "水煮肉",
              Factor: 3
            },
            170017: {
              Id: 170017,
              Level: 17,
              Region: "四川",
              CorrectName: "东坡肘子",
              WrongName: "烤猪蹄",
              Factor: 1
            },
            170018: {
              Id: 170018,
              Level: 17,
              Region: "四川",
              CorrectName: "开水白菜",
              WrongName: "上汤娃娃菜",
              Factor: 1
            },
            170019: {
              Id: 170019,
              Level: 17,
              Region: "四川",
              CorrectName: "宫保鸡丁",
              WrongName: "炝炒鸡肉",
              Factor: 1
            },
            170020: {
              Id: 170020,
              Level: 17,
              Region: "四川",
              CorrectName: "口水鸡",
              WrongName: "口水鸭",
              Factor: 3
            },
            170021: {
              Id: 170021,
              Level: 17,
              Region: "四川",
              CorrectName: "酸菜鱼",
              WrongName: "水煮鱼",
              Factor: 2
            },
            170022: {
              Id: 170022,
              Level: 17,
              Region: "四川",
              CorrectName: "麻婆豆腐",
              WrongName: "干锅豆腐",
              Factor: 3
            },
            170023: {
              Id: 170023,
              Level: 17,
              Region: "四川",
              CorrectName: "小炒牛肉",
              WrongName: "麻辣牛肉",
              Factor: 2
            },
            170024: {
              Id: 170024,
              Level: 17,
              Region: "四川",
              CorrectName: "泡椒凤爪",
              WrongName: "蒸凤爪",
              Factor: 3
            },
            170025: {
              Id: 170025,
              Level: 17,
              Region: "四川",
              CorrectName: "耗儿鱼",
              WrongName: "水煮肉片",
              Factor: 2
            },
            170026: {
              Id: 170026,
              Level: 17,
              Region: "四川",
              CorrectName: "水煮肉",
              WrongName: "火锅肥牛",
              Factor: 3
            },
            170027: {
              Id: 170027,
              Level: 17,
              Region: "四川",
              CorrectName: "咸烧白",
              WrongName: "甜烧白",
              Factor: 3
            },
            170028: {
              Id: 170028,
              Level: 17,
              Region: "四川",
              CorrectName: "鱼香肉丝",
              WrongName: "木耳炒肉",
              Factor: 1
            },
            170029: {
              Id: 170029,
              Level: 17,
              Region: "四川",
              CorrectName: "蒜泥白肉",
              WrongName: "凉拌薄肉",
              Factor: 3
            },
            170030: {
              Id: 170030,
              Level: 17,
              Region: "四川",
              CorrectName: "酸辣粉",
              WrongName: "火锅粉",
              Factor: 3
            },
            180001: {
              Id: 180001,
              Level: 18,
              Region: "贵州",
              CorrectName: "干锅茶树菇",
              WrongName: "炒腊肉",
              Factor: 2
            },
            180002: {
              Id: 180002,
              Level: 18,
              Region: "贵州",
              CorrectName: "凉拌折耳根",
              WrongName: "凉拌芹菜",
              Factor: 1
            },
            180003: {
              Id: 180003,
              Level: 18,
              Region: "贵州",
              CorrectName: "凉拌薄荷",
              WrongName: "凉拌红苕尖",
              Factor: 2
            },
            180004: {
              Id: 180004,
              Level: 18,
              Region: "贵州",
              CorrectName: "竹筒饭",
              WrongName: "腊八饭",
              Factor: 2
            },
            180005: {
              Id: 180005,
              Level: 18,
              Region: "贵州",
              CorrectName: "鱼包韭菜",
              WrongName: "腌鱼",
              Factor: 2
            },
            180006: {
              Id: 180006,
              Level: 18,
              Region: "贵州",
              CorrectName: "折耳根炒腊肉",
              WrongName: "韭菜回锅肉",
              Factor: 1
            },
            180007: {
              Id: 180007,
              Level: 18,
              Region: "贵州",
              CorrectName: "茶树菇干锅鸡",
              WrongName: "茶树菇干锅鸭",
              Factor: 3
            },
            180008: {
              Id: 180008,
              Level: 18,
              Region: "贵州",
              CorrectName: "稻草排骨",
              WrongName: "粉蒸排骨",
              Factor: 2
            },
            180009: {
              Id: 180009,
              Level: 18,
              Region: "贵州",
              CorrectName: "凉拌茄子",
              WrongName: "水煮茄子",
              Factor: 1
            },
            180010: {
              Id: 180010,
              Level: 18,
              Region: "贵州",
              CorrectName: "酸汤鱼",
              WrongName: "火锅鱼",
              Factor: 2
            },
            180011: {
              Id: 180011,
              Level: 18,
              Region: "贵州",
              CorrectName: "宫保鸡丁",
              WrongName: "芹菜炒肉",
              Factor: 1
            },
            180012: {
              Id: 180012,
              Level: 18,
              Region: "贵州",
              CorrectName: "干锅鸡",
              WrongName: "干锅土豆",
              Factor: 1
            },
            180013: {
              Id: 180013,
              Level: 18,
              Region: "贵州",
              CorrectName: "炝黄瓜",
              WrongName: "凉拌黄瓜",
              Factor: 3
            },
            180014: {
              Id: 180014,
              Level: 18,
              Region: "贵州",
              CorrectName: "水煮肉片",
              WrongName: "水煮鱼",
              Factor: 1
            },
            180015: {
              Id: 180015,
              Level: 18,
              Region: "贵州",
              CorrectName: "蒜蓉粉丝娃娃菜",
              WrongName: "白菜炖粉条",
              Factor: 2
            },
            180016: {
              Id: 180016,
              Level: 18,
              Region: "贵州",
              CorrectName: "桂花山药",
              WrongName: "桂花凉皮",
              Factor: 3
            },
            180017: {
              Id: 180017,
              Level: 18,
              Region: "贵州",
              CorrectName: "土豆丝饼",
              WrongName: "油炸土豆丝",
              Factor: 1
            },
            180018: {
              Id: 180018,
              Level: 18,
              Region: "贵州",
              CorrectName: "酸汤牛肉",
              WrongName: "水煮牛肉",
              Factor: 2
            },
            180019: {
              Id: 180019,
              Level: 18,
              Region: "贵州",
              CorrectName: "糯米饭",
              WrongName: "腊八饭",
              Factor: 3
            },
            180020: {
              Id: 180020,
              Level: 18,
              Region: "贵州",
              CorrectName: "竹叶黄粑",
              WrongName: "糍粑",
              Factor: 1
            },
            180021: {
              Id: 180021,
              Level: 18,
              Region: "贵州",
              CorrectName: "烤鱼",
              WrongName: "水煮鱼",
              Factor: 1
            },
            180022: {
              Id: 180022,
              Level: 18,
              Region: "贵州",
              CorrectName: "肠旺面",
              WrongName: "毛血旺",
              Factor: 3
            },
            180023: {
              Id: 180023,
              Level: 18,
              Region: "贵州",
              CorrectName: "脆哨",
              WrongName: "干椒牛肉",
              Factor: 3
            },
            180024: {
              Id: 180024,
              Level: 18,
              Region: "贵州",
              CorrectName: "丝娃娃",
              WrongName: "素食拼盘",
              Factor: 1
            },
            180025: {
              Id: 180025,
              Level: 18,
              Region: "贵州",
              CorrectName: "花溪牛肉米线",
              WrongName: "清汤牛肉粉",
              Factor: 3
            },
            180026: {
              Id: 180026,
              Level: 18,
              Region: "贵州",
              CorrectName: "牛瘪火锅",
              WrongName: "水煮牛杂",
              Factor: 3
            },
            180027: {
              Id: 180027,
              Level: 18,
              Region: "贵州",
              CorrectName: "春饼",
              WrongName: "煎饼果子",
              Factor: 2
            },
            180028: {
              Id: 180028,
              Level: 18,
              Region: "贵州",
              CorrectName: "酸汤米线",
              WrongName: "火锅米线",
              Factor: 3
            },
            180029: {
              Id: 180029,
              Level: 18,
              Region: "贵州",
              CorrectName: "香酥鸭",
              WrongName: "香酥鸡",
              Factor: 3
            },
            180030: {
              Id: 180030,
              Level: 18,
              Region: "贵州",
              CorrectName: "洋芋粑粑",
              WrongName: "土豆饼",
              Factor: 2
            },
            190001: {
              Id: 190001,
              Level: 19,
              Region: "云南",
              CorrectName: "红三剁",
              WrongName: "剁椒炒肉",
              Factor: 2
            },
            190002: {
              Id: 190002,
              Level: 19,
              Region: "云南",
              CorrectName: "佛跳墙",
              WrongName: "鲍鱼蒸海参",
              Factor: 2
            },
            190003: {
              Id: 190003,
              Level: 19,
              Region: "云南",
              CorrectName: "汽锅鸡",
              WrongName: "枸杞炖鸡",
              Factor: 3
            },
            190004: {
              Id: 190004,
              Level: 19,
              Region: "云南",
              CorrectName: "大薄片",
              WrongName: "蒜泥白肉",
              Factor: 2
            },
            190005: {
              Id: 190005,
              Level: 19,
              Region: "云南",
              CorrectName: "蚂蚁上树",
              WrongName: "猪肉炖粉条",
              Factor: 1
            },
            190006: {
              Id: 190006,
              Level: 19,
              Region: "云南",
              CorrectName: "黑三剁",
              WrongName: "木耳炒肉",
              Factor: 1
            },
            190007: {
              Id: 190007,
              Level: 19,
              Region: "云南",
              CorrectName: "金钱云腿",
              WrongName: "火锅肥牛",
              Factor: 2
            },
            190008: {
              Id: 190008,
              Level: 19,
              Region: "云南",
              CorrectName: "炒鸡枞菌",
              WrongName: "炒杏鲍菇",
              Factor: 3
            },
            190009: {
              Id: 190009,
              Level: 19,
              Region: "云南",
              CorrectName: "傣味香茅草烤鱼",
              WrongName: "干板鱼",
              Factor: 2
            },
            190010: {
              Id: 190010,
              Level: 19,
              Region: "云南",
              CorrectName: "夹沙乳扇",
              WrongName: "炸米卷",
              Factor: 2
            },
            190011: {
              Id: 190011,
              Level: 19,
              Region: "云南",
              CorrectName: "春卷",
              WrongName: "素什锦",
              Factor: 1
            },
            190012: {
              Id: 190012,
              Level: 19,
              Region: "云南",
              CorrectName: "酸角糕",
              WrongName: "梨糖",
              Factor: 1
            },
            190013: {
              Id: 190013,
              Level: 19,
              Region: "云南",
              CorrectName: "竹筒鸡",
              WrongName: "竹筒鸭",
              Factor: 2
            },
            190014: {
              Id: 190014,
              Level: 19,
              Region: "云南",
              CorrectName: "坛子鸡",
              WrongName: "红烧鸡",
              Factor: 1
            },
            190015: {
              Id: 190015,
              Level: 19,
              Region: "云南",
              CorrectName: "蘸水芥菜",
              WrongName: "水煮青菜",
              Factor: 3
            },
            190016: {
              Id: 190016,
              Level: 19,
              Region: "云南",
              CorrectName: "椒麻鸡",
              WrongName: "手撕鸡",
              Factor: 3
            },
            190017: {
              Id: 190017,
              Level: 19,
              Region: "云南",
              CorrectName: "松茸炖鸡",
              WrongName: "佛跳墙",
              Factor: 2
            },
            190018: {
              Id: 190018,
              Level: 19,
              Region: "云南",
              CorrectName: "过桥米线",
              WrongName: "云南米线",
              Factor: 1
            },
            190019: {
              Id: 190019,
              Level: 19,
              Region: "云南",
              CorrectName: "过桥豆腐",
              WrongName: "水煮豆腐",
              Factor: 1
            },
            190020: {
              Id: 190020,
              Level: 19,
              Region: "云南",
              CorrectName: "黄豆腐",
              WrongName: "黄豆包",
              Factor: 1
            },
            190021: {
              Id: 190021,
              Level: 19,
              Region: "云南",
              CorrectName: "核桃拌木耳",
              WrongName: "凉拌木耳",
              Factor: 1
            },
            190022: {
              Id: 190022,
              Level: 19,
              Region: "云南",
              CorrectName: "翡翠炒饭",
              WrongName: "玉米虾仁蛋炒饭",
              Factor: 2
            },
            190023: {
              Id: 190023,
              Level: 19,
              Region: "云南",
              CorrectName: "薄荷牛肉卷",
              WrongName: "凉拌牛肉",
              Factor: 1
            },
            190024: {
              Id: 190024,
              Level: 19,
              Region: "云南",
              CorrectName: "五香芸豆",
              WrongName: "五香蚕豆",
              Factor: 3
            },
            190025: {
              Id: 190025,
              Level: 19,
              Region: "云南",
              CorrectName: "烤饵块",
              WrongName: "油炸糍粑",
              Factor: 3
            },
            190026: {
              Id: 190026,
              Level: 19,
              Region: "云南",
              CorrectName: "凉拌香椿",
              WrongName: "凉拌韭菜",
              Factor: 3
            },
            190027: {
              Id: 190027,
              Level: 19,
              Region: "云南",
              CorrectName: "鲜花饼",
              WrongName: "豆沙饼",
              Factor: 3
            },
            190028: {
              Id: 190028,
              Level: 19,
              Region: "云南",
              CorrectName: "米浆粑粑",
              WrongName: "玉米粑粑",
              Factor: 3
            },
            190029: {
              Id: 190029,
              Level: 19,
              Region: "云南",
              CorrectName: "菠萝饭",
              WrongName: "黑米饭",
              Factor: 3
            },
            190030: {
              Id: 190030,
              Level: 19,
              Region: "云南",
              CorrectName: "稀豆粉",
              WrongName: "蒸蛋",
              Factor: 2
            },
            200001: {
              Id: 200001,
              Level: 20,
              Region: "陕西",
              CorrectName: "带把肘子",
              WrongName: "红烧猪蹄",
              Factor: 1
            },
            200002: {
              Id: 200002,
              Level: 20,
              Region: "陕西",
              CorrectName: "金钱发菜",
              WrongName: "鸡蛋卷",
              Factor: 1
            },
            200003: {
              Id: 200003,
              Level: 20,
              Region: "陕西",
              CorrectName: "四喜蒸饺",
              WrongName: "四喜烧麦",
              Factor: 2
            },
            200004: {
              Id: 200004,
              Level: 20,
              Region: "陕西",
              CorrectName: "奶汤锅子鱼",
              WrongName: "清蒸鲤鱼",
              Factor: 1
            },
            200005: {
              Id: 200005,
              Level: 20,
              Region: "陕西",
              CorrectName: "煨鱿鱼丝",
              WrongName: "焖豆腐",
              Factor: 3
            },
            200006: {
              Id: 200006,
              Level: 20,
              Region: "陕西",
              CorrectName: "肉丝烧茄子",
              WrongName: "勾芡炒肉丝",
              Factor: 2
            },
            200007: {
              Id: 200007,
              Level: 20,
              Region: "陕西",
              CorrectName: "葫芦头",
              WrongName: "羊肉汤",
              Factor: 3
            },
            200008: {
              Id: 200008,
              Level: 20,
              Region: "陕西",
              CorrectName: "葫芦鸡",
              WrongName: "德州扒鸡",
              Factor: 3
            },
            200009: {
              Id: 200009,
              Level: 20,
              Region: "陕西",
              CorrectName: "鸡米海参",
              WrongName: "蒸茄子",
              Factor: 1
            },
            200010: {
              Id: 200010,
              Level: 20,
              Region: "陕西",
              CorrectName: "温拌腰花",
              WrongName: "凉拌肉丝",
              Factor: 2
            },
            200011: {
              Id: 200011,
              Level: 20,
              Region: "陕西",
              CorrectName: "五彩鸡仁",
              WrongName: "双拼炒肉",
              Factor: 3
            },
            200012: {
              Id: 200012,
              Level: 20,
              Region: "陕西",
              CorrectName: "烧大肠",
              WrongName: "卤肉",
              Factor: 3
            },
            200013: {
              Id: 200013,
              Level: 20,
              Region: "陕西",
              CorrectName: "盆景三皮丝",
              WrongName: "三拼粉丝",
              Factor: 1
            },
            200014: {
              Id: 200014,
              Level: 20,
              Region: "陕西",
              CorrectName: "鱼羊鲜",
              WrongName: "红烧羊排",
              Factor: 3
            },
            200015: {
              Id: 200015,
              Level: 20,
              Region: "陕西",
              CorrectName: "肉夹馍",
              WrongName: "煎饼果子",
              Factor: 1
            },
            200016: {
              Id: 200016,
              Level: 20,
              Region: "陕西",
              CorrectName: "水磨丝",
              WrongName: "泡菜",
              Factor: 1
            },
            200017: {
              Id: 200017,
              Level: 20,
              Region: "陕西",
              CorrectName: "烩菜堡",
              WrongName: "红烧肉",
              Factor: 3
            },
            200018: {
              Id: 200018,
              Level: 20,
              Region: "陕西",
              CorrectName: "大肉锅贴",
              WrongName: "煎饺",
              Factor: 3
            },
            200019: {
              Id: 200019,
              Level: 20,
              Region: "陕西",
              CorrectName: "江米油糕",
              WrongName: "红糖饼",
              Factor: 2
            },
            200020: {
              Id: 200020,
              Level: 20,
              Region: "陕西",
              CorrectName: "乾州锅盔",
              WrongName: "馕",
              Factor: 3
            },
            200021: {
              Id: 200021,
              Level: 20,
              Region: "陕西",
              CorrectName: "豆花泡馍",
              WrongName: "红油麻花",
              Factor: 1
            },
            200022: {
              Id: 200022,
              Level: 20,
              Region: "陕西",
              CorrectName: "胡辣汤",
              WrongName: "八宝粥",
              Factor: 1
            },
            200023: {
              Id: 200023,
              Level: 20,
              Region: "陕西",
              CorrectName: "浆水面",
              WrongName: "清汤面",
              Factor: 1
            },
            200024: {
              Id: 200024,
              Level: 20,
              Region: "陕西",
              CorrectName: "岐山臊子面",
              WrongName: "牛肉面",
              Factor: 2
            },
            200025: {
              Id: 200025,
              Level: 20,
              Region: "陕西",
              CorrectName: "苦荞饸饹面",
              WrongName: "凉面",
              Factor: 3
            },
            200026: {
              Id: 200026,
              Level: 20,
              Region: "陕西",
              CorrectName: "菜豆腐",
              WrongName: "卤水豆腐",
              Factor: 2
            },
            200027: {
              Id: 200027,
              Level: 20,
              Region: "陕西",
              CorrectName: "枣糕馍",
              WrongName: "发糕",
              Factor: 2
            },
            200028: {
              Id: 200028,
              Level: 20,
              Region: "陕西",
              CorrectName: "柿子饼",
              WrongName: "南瓜饼",
              Factor: 2
            },
            200029: {
              Id: 200029,
              Level: 20,
              Region: "陕西",
              CorrectName: "金线油塔",
              WrongName: "龙须酥",
              Factor: 2
            },
            200030: {
              Id: 200030,
              Level: 20,
              Region: "陕西",
              CorrectName: "酸辣百叶",
              WrongName: "蒜泥白肉",
              Factor: 2
            },
            210001: {
              Id: 210001,
              Level: 21,
              Region: "甘肃",
              CorrectName: "雪山驼掌",
              WrongName: "土豆泥叉烧",
              Factor: 1
            },
            210002: {
              Id: 210002,
              Level: 21,
              Region: "甘肃",
              CorrectName: "羊羔肉",
              WrongName: "羊排",
              Factor: 2
            },
            210003: {
              Id: 210003,
              Level: 21,
              Region: "甘肃",
              CorrectName: "驴肉黄面",
              WrongName: "卤肉面",
              Factor: 3
            },
            210004: {
              Id: 210004,
              Level: 21,
              Region: "甘肃",
              CorrectName: "烤肉",
              WrongName: "串烧",
              Factor: 3
            },
            210005: {
              Id: 210005,
              Level: 21,
              Region: "甘肃",
              CorrectName: "牛肉饭",
              WrongName: "汤泡饭",
              Factor: 3
            },
            210006: {
              Id: 210006,
              Level: 21,
              Region: "甘肃",
              CorrectName: "武威三套车",
              WrongName: "卤肉板面",
              Factor: 2
            },
            210007: {
              Id: 210007,
              Level: 21,
              Region: "甘肃",
              CorrectName: "羊肉泡馍",
              WrongName: "羊肉炖粉条",
              Factor: 2
            },
            210008: {
              Id: 210008,
              Level: 21,
              Region: "甘肃",
              CorrectName: "天水呱呱",
              WrongName: "拌肉泥",
              Factor: 2
            },
            210009: {
              Id: 210009,
              Level: 21,
              Region: "甘肃",
              CorrectName: "洋芋搅团",
              WrongName: "凉拌米豆腐",
              Factor: 1
            },
            210010: {
              Id: 210010,
              Level: 21,
              Region: "甘肃",
              CorrectName: "烧鸡",
              WrongName: "烤鸭",
              Factor: 1
            },
            210011: {
              Id: 210011,
              Level: 21,
              Region: "甘肃",
              CorrectName: "羊肉点卷子",
              WrongName: "羊蝎子",
              Factor: 2
            },
            210012: {
              Id: 210012,
              Level: 21,
              Region: "甘肃",
              CorrectName: "白银酸烂肉",
              WrongName: "辣炒米粉",
              Factor: 3
            },
            210013: {
              Id: 210013,
              Level: 21,
              Region: "甘肃",
              CorrectName: "糁饭",
              WrongName: "小米饭",
              Factor: 3
            },
            210014: {
              Id: 210014,
              Level: 21,
              Region: "甘肃",
              CorrectName: "东湾驴肉",
              WrongName: "猪头肉",
              Factor: 1
            },
            210015: {
              Id: 210015,
              Level: 21,
              Region: "甘肃",
              CorrectName: "一窝丝",
              WrongName: "千丝饼",
              Factor: 3
            },
            210016: {
              Id: 210016,
              Level: 21,
              Region: "甘肃",
              CorrectName: "甜醅",
              WrongName: "醪糟",
              Factor: 1
            },
            210017: {
              Id: 210017,
              Level: 21,
              Region: "甘肃",
              CorrectName: "陇上香酥鸡",
              WrongName: "乳鸽",
              Factor: 2
            },
            210018: {
              Id: 210018,
              Level: 21,
              Region: "甘肃",
              CorrectName: "秘制牛掌",
              WrongName: "红烧猪蹄",
              Factor: 3
            },
            210019: {
              Id: 210019,
              Level: 21,
              Region: "甘肃",
              CorrectName: "红焖藏香蕨麻猪",
              WrongName: "辣子鸡",
              Factor: 1
            },
            210020: {
              Id: 210020,
              Level: 21,
              Region: "甘肃",
              CorrectName: "牛肉面",
              WrongName: "拉面",
              Factor: 1
            },
            210021: {
              Id: 210021,
              Level: 21,
              Region: "甘肃",
              CorrectName: "糊锅",
              WrongName: "麻花烩响铃卷",
              Factor: 3
            },
            210022: {
              Id: 210022,
              Level: 21,
              Region: "甘肃",
              CorrectName: "灰豆子",
              WrongName: "红枣红米粥",
              Factor: 2
            },
            210023: {
              Id: 210023,
              Level: 21,
              Region: "甘肃",
              CorrectName: "山丹羊拨拉",
              WrongName: "辣爆猪肝",
              Factor: 2
            },
            210024: {
              Id: 210024,
              Level: 21,
              Region: "甘肃",
              CorrectName: "炒炮",
              WrongName: "猪肉炒面片",
              Factor: 2
            },
            210025: {
              Id: 210025,
              Level: 21,
              Region: "甘肃",
              CorrectName: "炸羊尾",
              WrongName: "榴莲",
              Factor: 1
            },
            210026: {
              Id: 210026,
              Level: 21,
              Region: "甘肃",
              CorrectName: "河沿面片",
              WrongName: "清汤面片",
              Factor: 1
            },
            210027: {
              Id: 210027,
              Level: 21,
              Region: "甘肃",
              CorrectName: "卷子鸡",
              WrongName: "香味红焖鸡",
              Factor: 1
            },
            210028: {
              Id: 210028,
              Level: 21,
              Region: "甘肃",
              CorrectName: "黄焖牛肉",
              WrongName: "生炒牛肉",
              Factor: 2
            },
            210029: {
              Id: 210029,
              Level: 21,
              Region: "甘肃",
              CorrectName: "搓鱼子",
              WrongName: "酸辣莜面",
              Factor: 3
            },
            210030: {
              Id: 210030,
              Level: 21,
              Region: "甘肃",
              CorrectName: "浆水面",
              WrongName: "酸菜面",
              Factor: 3
            },
            220001: {
              Id: 220001,
              Level: 22,
              Region: "青海",
              CorrectName: "三烧",
              WrongName: "爆炒牛蹄筋",
              Factor: 2
            },
            220002: {
              Id: 220002,
              Level: 22,
              Region: "青海",
              CorrectName: "手抓羊",
              WrongName: "清蒸羊排",
              Factor: 2
            },
            220003: {
              Id: 220003,
              Level: 22,
              Region: "青海",
              CorrectName: "酸辣里脊",
              WrongName: "咕咾肉",
              Factor: 3
            },
            220004: {
              Id: 220004,
              Level: 22,
              Region: "青海",
              CorrectName: "烤全羊",
              WrongName: "手抓羊",
              Factor: 3
            },
            220005: {
              Id: 220005,
              Level: 22,
              Region: "青海",
              CorrectName: "发菜蒸蛋",
              WrongName: "奶鱼汤",
              Factor: 1
            },
            220006: {
              Id: 220006,
              Level: 22,
              Region: "青海",
              CorrectName: "土火锅",
              WrongName: "牛杂火锅",
              Factor: 3
            },
            220007: {
              Id: 220007,
              Level: 22,
              Region: "青海",
              CorrectName: "老八盘",
              WrongName: "小碗菜",
              Factor: 3
            },
            220008: {
              Id: 220008,
              Level: 22,
              Region: "青海",
              CorrectName: "清蒸牛蹄筋",
              WrongName: "麻辣牛蹄筋",
              Factor: 3
            },
            220009: {
              Id: 220009,
              Level: 22,
              Region: "青海",
              CorrectName: "熬饭",
              WrongName: "萝卜牛肉汤",
              Factor: 3
            },
            220010: {
              Id: 220010,
              Level: 22,
              Region: "青海",
              CorrectName: "清汤羊肚",
              WrongName: "清汤牛杂",
              Factor: 2
            },
            220011: {
              Id: 220011,
              Level: 22,
              Region: "青海",
              CorrectName: "羊肉面片",
              WrongName: "牛肉刀削面",
              Factor: 2
            },
            220012: {
              Id: 220012,
              Level: 22,
              Region: "青海",
              CorrectName: "干板鱼",
              WrongName: "油炸鲤鱼",
              Factor: 1
            },
            220013: {
              Id: 220013,
              Level: 22,
              Region: "青海",
              CorrectName: "凉拌鹿角菜",
              WrongName: "凉拌茼蒿",
              Factor: 1
            },
            220014: {
              Id: 220014,
              Level: 22,
              Region: "青海",
              CorrectName: "芙蓉丸子",
              WrongName: "地瓜丸子",
              Factor: 2
            },
            220015: {
              Id: 220015,
              Level: 22,
              Region: "青海",
              CorrectName: "雪莲果",
              WrongName: "红薯",
              Factor: 2
            },
            220016: {
              Id: 220016,
              Level: 22,
              Region: "青海",
              CorrectName: "羊肉筏子",
              WrongName: "米肠",
              Factor: 3
            },
            220017: {
              Id: 220017,
              Level: 22,
              Region: "青海",
              CorrectName: "乾坤牛掌",
              WrongName: "红烧牛蹄",
              Factor: 3
            },
            220018: {
              Id: 220018,
              Level: 22,
              Region: "青海",
              CorrectName: "茶道香薰羊排",
              WrongName: "椒盐羊排",
              Factor: 3
            },
            220019: {
              Id: 220019,
              Level: 22,
              Region: "青海",
              CorrectName: "粉汤",
              WrongName: "白菜炖肉",
              Factor: 1
            },
            220020: {
              Id: 220020,
              Level: 22,
              Region: "青海",
              CorrectName: "曲连",
              WrongName: "豆沙包",
              Factor: 1
            },
            220021: {
              Id: 220021,
              Level: 22,
              Region: "青海",
              CorrectName: "麻食",
              WrongName: "通心粉",
              Factor: 1
            },
            220022: {
              Id: 220022,
              Level: 22,
              Region: "青海",
              CorrectName: "麦索儿",
              WrongName: "酥油茶",
              Factor: 1
            },
            220023: {
              Id: 220023,
              Level: 22,
              Region: "青海",
              CorrectName: "砖包城",
              WrongName: "枣糕面包",
              Factor: 2
            },
            220024: {
              Id: 220024,
              Level: 22,
              Region: "青海",
              CorrectName: "油箱",
              WrongName: "炸馒头",
              Factor: 2
            },
            220025: {
              Id: 220025,
              Level: 22,
              Region: "青海",
              CorrectName: "狗浇尿",
              WrongName: "煎饼",
              Factor: 2
            },
            220026: {
              Id: 220026,
              Level: 22,
              Region: "青海",
              CorrectName: "奶皮",
              WrongName: "奶酪",
              Factor: 1
            },
            220027: {
              Id: 220027,
              Level: 22,
              Region: "青海",
              CorrectName: "青稞饼",
              WrongName: "青菜饼",
              Factor: 2
            },
            220028: {
              Id: 220028,
              Level: 22,
              Region: "青海",
              CorrectName: "锅塌",
              WrongName: "鸡蛋卷",
              Factor: 1
            },
            220029: {
              Id: 220029,
              Level: 22,
              Region: "青海",
              CorrectName: "搅团",
              WrongName: "凉皮",
              Factor: 3
            },
            220030: {
              Id: 220030,
              Level: 22,
              Region: "青海",
              CorrectName: "酥合丸",
              WrongName: "油炸地瓜丸",
              Factor: 1
            },
            230001: {
              Id: 230001,
              Level: 23,
              Region: "台湾",
              CorrectName: "菜脯蛋",
              WrongName: "苦瓜烘蛋",
              Factor: 2
            },
            230002: {
              Id: 230002,
              Level: 23,
              Region: "台湾",
              CorrectName: "花生猪脚",
              WrongName: "猪脚饭",
              Factor: 3
            },
            230003: {
              Id: 230003,
              Level: 23,
              Region: "台湾",
              CorrectName: "三杯鸡",
              WrongName: "叫花鸡",
              Factor: 2
            },
            230004: {
              Id: 230004,
              Level: 23,
              Region: "台湾",
              CorrectName: "蚵仔煎",
              WrongName: "海参饭",
              Factor: 1
            },
            230005: {
              Id: 230005,
              Level: 23,
              Region: "台湾",
              CorrectName: "虱目鱼肚粥",
              WrongName: "皮蛋瘦肉粥",
              Factor: 1
            },
            230006: {
              Id: 230006,
              Level: 23,
              Region: "台湾",
              CorrectName: "炒米粉",
              WrongName: "油炸土豆丝",
              Factor: 1
            },
            230007: {
              Id: 230007,
              Level: 23,
              Region: "台湾",
              CorrectName: "大饼包小饼",
              WrongName: "烤红薯",
              Factor: 1
            },
            230008: {
              Id: 230008,
              Level: 23,
              Region: "台湾",
              CorrectName: "万峦猪脚",
              WrongName: "红焖猪脚",
              Factor: 2
            },
            230009: {
              Id: 230009,
              Level: 23,
              Region: "台湾",
              CorrectName: "大肠蚵仔面线",
              WrongName: "过桥米线",
              Factor: 2
            },
            230010: {
              Id: 230010,
              Level: 23,
              Region: "台湾",
              CorrectName: "甜不辣",
              WrongName: "酥肉",
              Factor: 1
            },
            230011: {
              Id: 230011,
              Level: 23,
              Region: "台湾",
              CorrectName: "台南担仔面",
              WrongName: "炒粉",
              Factor: 1
            },
            230012: {
              Id: 230012,
              Level: 23,
              Region: "台湾",
              CorrectName: "润饼",
              WrongName: "春卷",
              Factor: 2
            },
            230013: {
              Id: 230013,
              Level: 23,
              Region: "台湾",
              CorrectName: "烧仙草",
              WrongName: "龟苓膏",
              Factor: 3
            },
            230014: {
              Id: 230014,
              Level: 23,
              Region: "台湾",
              CorrectName: "筒仔米糕",
              WrongName: "八宝粥",
              Factor: 1
            },
            230015: {
              Id: 230015,
              Level: 23,
              Region: "台湾",
              CorrectName: "花枝羹",
              WrongName: "酸汤鱼",
              Factor: 3
            },
            230016: {
              Id: 230016,
              Level: 23,
              Region: "台湾",
              CorrectName: "鱼酥羹",
              WrongName: "肉片汤",
              Factor: 2
            },
            230017: {
              Id: 230017,
              Level: 23,
              Region: "台湾",
              CorrectName: "肉羹",
              WrongName: "滑瘦肉汤",
              Factor: 2
            },
            230018: {
              Id: 230018,
              Level: 23,
              Region: "台湾",
              CorrectName: "猪血糕",
              WrongName: "猪头肉糕",
              Factor: 3
            },
            230019: {
              Id: 230019,
              Level: 23,
              Region: "台湾",
              CorrectName: "东山鸭头",
              WrongName: "卤鸭头",
              Factor: 3
            },
            230020: {
              Id: 230020,
              Level: 23,
              Region: "台湾",
              CorrectName: "肉圆",
              WrongName: "红烧肉",
              Factor: 1
            },
            230021: {
              Id: 230021,
              Level: 23,
              Region: "台湾",
              CorrectName: "卤肉饭",
              WrongName: "红烧肉盖饭",
              Factor: 3
            },
            230022: {
              Id: 230022,
              Level: 23,
              Region: "台湾",
              CorrectName: "波霸奶茶",
              WrongName: "丝袜奶茶",
              Factor: 2
            },
            230023: {
              Id: 230023,
              Level: 23,
              Region: "台湾",
              CorrectName: "布丁豆花",
              WrongName: "双皮奶",
              Factor: 3
            },
            230024: {
              Id: 230024,
              Level: 23,
              Region: "台湾",
              CorrectName: "药炖排骨",
              WrongName: "清炖排骨",
              Factor: 2
            },
            230025: {
              Id: 230025,
              Level: 23,
              Region: "台湾",
              CorrectName: "药炖土虱",
              WrongName: "五味鱼头",
              Factor: 3
            },
            230026: {
              Id: 230026,
              Level: 23,
              Region: "台湾",
              CorrectName: "石榴鸡",
              WrongName: "黄金烧卖",
              Factor: 1
            },
            230027: {
              Id: 230027,
              Level: 23,
              Region: "台湾",
              CorrectName: "江米藕",
              WrongName: "桂花糯米藕",
              Factor: 2
            },
            230028: {
              Id: 230028,
              Level: 23,
              Region: "台湾",
              CorrectName: "金钱干贝",
              WrongName: "白玉干贝",
              Factor: 3
            },
            230029: {
              Id: 230029,
              Level: 23,
              Region: "台湾",
              CorrectName: "油饭",
              WrongName: "蛋炒饭",
              Factor: 1
            },
            230030: {
              Id: 230030,
              Level: 23,
              Region: "台湾",
              CorrectName: "白灼牛肉",
              WrongName: "白灼牛腩",
              Factor: 3
            },
            240001: {
              Id: 240001,
              Level: 24,
              Region: "北京",
              CorrectName: "烤鸭",
              WrongName: "烧鸡",
              Factor: 1
            },
            240002: {
              Id: 240002,
              Level: 24,
              Region: "北京",
              CorrectName: "豆汁",
              WrongName: "豆浆",
              Factor: 1
            },
            240003: {
              Id: 240003,
              Level: 24,
              Region: "北京",
              CorrectName: "焦圈",
              WrongName: "鱿鱼圈",
              Factor: 1
            },
            240004: {
              Id: 240004,
              Level: 24,
              Region: "北京",
              CorrectName: "卤煮",
              WrongName: "豆腐脑",
              Factor: 1
            },
            240005: {
              Id: 240005,
              Level: 24,
              Region: "北京",
              CorrectName: "炸酱面",
              WrongName: "拌米粉",
              Factor: 1
            },
            240006: {
              Id: 240006,
              Level: 24,
              Region: "北京",
              CorrectName: "羊蝎子",
              WrongName: "烤全羊",
              Factor: 1
            },
            240007: {
              Id: 240007,
              Level: 24,
              Region: "北京",
              CorrectName: "驴打滚",
              WrongName: "烤包子",
              Factor: 1
            },
            240008: {
              Id: 240008,
              Level: 24,
              Region: "北京",
              CorrectName: "炸灌肠",
              WrongName: "焦圈",
              Factor: 1
            },
            240009: {
              Id: 240009,
              Level: 24,
              Region: "北京",
              CorrectName: "炒肝",
              WrongName: "打卤面",
              Factor: 1
            },
            240010: {
              Id: 240010,
              Level: 24,
              Region: "北京",
              CorrectName: "麻豆腐",
              WrongName: "北京奶酪",
              Factor: 1
            },
            240011: {
              Id: 240011,
              Level: 24,
              Region: "北京",
              CorrectName: "北京奶酪",
              WrongName: "双皮奶",
              Factor: 2
            },
            240012: {
              Id: 240012,
              Level: 24,
              Region: "北京",
              CorrectName: "京酱肉丝",
              WrongName: "鱼香肉丝",
              Factor: 2
            },
            240013: {
              Id: 240013,
              Level: 24,
              Region: "北京",
              CorrectName: "冰糖葫芦",
              WrongName: "羊肉串",
              Factor: 2
            },
            240014: {
              Id: 240014,
              Level: 24,
              Region: "北京",
              CorrectName: "糖油饼",
              WrongName: "糖醋里脊",
              Factor: 2
            },
            240015: {
              Id: 240015,
              Level: 24,
              Region: "北京",
              CorrectName: "爆肚",
              WrongName: "羊蝎子",
              Factor: 2
            },
            240016: {
              Id: 240016,
              Level: 24,
              Region: "北京",
              CorrectName: "贝勒烤肉",
              WrongName: "大盘鸡",
              Factor: 2
            },
            240017: {
              Id: 240017,
              Level: 24,
              Region: "北京",
              CorrectName: "大懒龙",
              WrongName: "花卷",
              Factor: 2
            },
            240018: {
              Id: 240018,
              Level: 24,
              Region: "北京",
              CorrectName: "铜锅涮肉",
              WrongName: "火锅",
              Factor: 2
            },
            240019: {
              Id: 240019,
              Level: 24,
              Region: "北京",
              CorrectName: "干炸丸子",
              WrongName: "四喜丸子",
              Factor: 2
            },
            240020: {
              Id: 240020,
              Level: 24,
              Region: "北京",
              CorrectName: "八宝粘豆包",
              WrongName: "酱肉包",
              Factor: 2
            },
            240021: {
              Id: 240021,
              Level: 24,
              Region: "北京",
              CorrectName: "红豆卷",
              WrongName: "大懒龙",
              Factor: 3
            },
            240022: {
              Id: 240022,
              Level: 24,
              Region: "北京",
              CorrectName: "麻酱糖花卷",
              WrongName: "馒头",
              Factor: 3
            },
            240023: {
              Id: 240023,
              Level: 24,
              Region: "北京",
              CorrectName: "炸咯吱",
              WrongName: "焦圈",
              Factor: 3
            },
            240024: {
              Id: 240024,
              Level: 24,
              Region: "北京",
              CorrectName: "艾窝窝",
              WrongName: "馒头",
              Factor: 3
            },
            240025: {
              Id: 240025,
              Level: 24,
              Region: "北京",
              CorrectName: "豌豆黄",
              WrongName: "红豆糕",
              Factor: 3
            },
            240026: {
              Id: 240026,
              Level: 24,
              Region: "北京",
              CorrectName: "面茶",
              WrongName: "奶茶",
              Factor: 3
            },
            240027: {
              Id: 240027,
              Level: 24,
              Region: "北京",
              CorrectName: "杏仁茶",
              WrongName: "豆浆",
              Factor: 3
            },
            240028: {
              Id: 240028,
              Level: 24,
              Region: "北京",
              CorrectName: "熘肝尖",
              WrongName: "宫保鸡丁",
              Factor: 3
            },
            240029: {
              Id: 240029,
              Level: 24,
              Region: "北京",
              CorrectName: "门钉肉饼",
              WrongName: "肉夹馍",
              Factor: 3
            },
            240030: {
              Id: 240030,
              Level: 24,
              Region: "北京",
              CorrectName: "老北京打卤面",
              WrongName: "炸酱面",
              Factor: 3
            },
            250001: {
              Id: 250001,
              Level: 25,
              Region: "天津",
              CorrectName: "八珍豆腐",
              WrongName: "蟹黄豆腐",
              Factor: 2
            },
            250002: {
              Id: 250002,
              Level: 25,
              Region: "天津",
              CorrectName: "罾蹦鲤鱼",
              WrongName: "红烧鸡",
              Factor: 1
            },
            250003: {
              Id: 250003,
              Level: 25,
              Region: "天津",
              CorrectName: "锅塌里脊",
              WrongName: "烘蛋",
              Factor: 2
            },
            250004: {
              Id: 250004,
              Level: 25,
              Region: "天津",
              CorrectName: "老爆三",
              WrongName: "蒜泥白肉",
              Factor: 1
            },
            250005: {
              Id: 250005,
              Level: 25,
              Region: "天津",
              CorrectName: "独面筋",
              WrongName: "鱼香茄子",
              Factor: 2
            },
            250006: {
              Id: 250006,
              Level: 25,
              Region: "天津",
              CorrectName: "四喜丸子",
              WrongName: "狮子头",
              Factor: 3
            },
            250007: {
              Id: 250007,
              Level: 25,
              Region: "天津",
              CorrectName: "天津坛子肉",
              WrongName: "梅菜扣肉",
              Factor: 1
            },
            250008: {
              Id: 250008,
              Level: 25,
              Region: "天津",
              CorrectName: "熘鱼片",
              WrongName: "炸鱼干",
              Factor: 1
            },
            250009: {
              Id: 250009,
              Level: 25,
              Region: "天津",
              CorrectName: "煎烹大虾",
              WrongName: "大闸蟹",
              Factor: 1
            },
            250010: {
              Id: 250010,
              Level: 25,
              Region: "天津",
              CorrectName: "素什锦",
              WrongName: "如意香干",
              Factor: 2
            },
            250011: {
              Id: 250011,
              Level: 25,
              Region: "天津",
              CorrectName: "炒青虾仁",
              WrongName: "翡翠虾仁",
              Factor: 2
            },
            250012: {
              Id: 250012,
              Level: 25,
              Region: "天津",
              CorrectName: "高丽银鱼",
              WrongName: "炸鱼干",
              Factor: 3
            },
            250013: {
              Id: 250013,
              Level: 25,
              Region: "天津",
              CorrectName: "罗汉肚",
              WrongName: "醉猪肚",
              Factor: 2
            },
            250014: {
              Id: 250014,
              Level: 25,
              Region: "天津",
              CorrectName: "酸沙紫蟹",
              WrongName: "油焖蟹",
              Factor: 3
            },
            250015: {
              Id: 250015,
              Level: 25,
              Region: "天津",
              CorrectName: "烧三丝",
              WrongName: "干烧茄子",
              Factor: 1
            },
            250016: {
              Id: 250016,
              Level: 25,
              Region: "天津",
              CorrectName: "干炸马口鱼",
              WrongName: "油炸小长条鱼",
              Factor: 2
            },
            250017: {
              Id: 250017,
              Level: 25,
              Region: "天津",
              CorrectName: "酱货拼盘",
              WrongName: "卤货拼盘",
              Factor: 2
            },
            250018: {
              Id: 250018,
              Level: 25,
              Region: "天津",
              CorrectName: "黄焖牛肉",
              WrongName: "炖牛肉",
              Factor: 3
            },
            250019: {
              Id: 250019,
              Level: 25,
              Region: "天津",
              CorrectName: "软溜黄鱼扇",
              WrongName: "黄鱼扇贝汤",
              Factor: 3
            },
            250020: {
              Id: 250020,
              Level: 25,
              Region: "天津",
              CorrectName: "元宝肉",
              WrongName: "红烧肉",
              Factor: 3
            },
            250021: {
              Id: 250021,
              Level: 25,
              Region: "天津",
              CorrectName: "烩鸡丝",
              WrongName: "炒三丝",
              Factor: 2
            },
            250022: {
              Id: 250022,
              Level: 25,
              Region: "天津",
              CorrectName: "扒通天鱼翅",
              WrongName: "火踵鱼翅",
              Factor: 2
            },
            250023: {
              Id: 250023,
              Level: 25,
              Region: "天津",
              CorrectName: "扒肘子",
              WrongName: "肥牛卷",
              Factor: 1
            },
            250024: {
              Id: 250024,
              Level: 25,
              Region: "天津",
              CorrectName: "扒海参",
              WrongName: "鲍汁烧海参",
              Factor: 3
            },
            250025: {
              Id: 250025,
              Level: 25,
              Region: "天津",
              CorrectName: "狗不理包子",
              WrongName: "肉包子",
              Factor: 1
            },
            250026: {
              Id: 250026,
              Level: 25,
              Region: "天津",
              CorrectName: "天津麻花",
              WrongName: "馓子麻花",
              Factor: 3
            },
            250027: {
              Id: 250027,
              Level: 25,
              Region: "天津",
              CorrectName: "锅巴菜",
              WrongName: "猪肉炖粉条",
              Factor: 1
            },
            250028: {
              Id: 250028,
              Level: 25,
              Region: "天津",
              CorrectName: "杨村糕干",
              WrongName: "云片糕",
              Factor: 3
            },
            250029: {
              Id: 250029,
              Level: 25,
              Region: "天津",
              CorrectName: "糖炒栗子",
              WrongName: "糖蘸板栗",
              Factor: 3
            },
            250030: {
              Id: 250030,
              Level: 25,
              Region: "天津",
              CorrectName: "熟梨糕",
              WrongName: "提拉米苏",
              Factor: 1
            },
            260001: {
              Id: 260001,
              Level: 26,
              Region: "上海",
              CorrectName: "腌笃鲜",
              WrongName: "腌肉百叶汤",
              Factor: 1
            },
            260002: {
              Id: 260002,
              Level: 26,
              Region: "上海",
              CorrectName: "扣三丝",
              WrongName: "煮干丝",
              Factor: 2
            },
            260003: {
              Id: 260003,
              Level: 26,
              Region: "上海",
              CorrectName: "上海熏鱼",
              WrongName: "爆鱼",
              Factor: 2
            },
            260004: {
              Id: 260004,
              Level: 26,
              Region: "上海",
              CorrectName: "上海四喜烤麸",
              WrongName: "地三鲜",
              Factor: 1
            },
            260005: {
              Id: 260005,
              Level: 26,
              Region: "上海",
              CorrectName: "炒鳝糊",
              WrongName: "红烧鳝片",
              Factor: 2
            },
            260006: {
              Id: 260006,
              Level: 26,
              Region: "上海",
              CorrectName: "香露葱油鸡",
              WrongName: "白斩鸡",
              Factor: 2
            },
            260007: {
              Id: 260007,
              Level: 26,
              Region: "上海",
              CorrectName: "八宝辣酱",
              WrongName: "宫保鸡丁",
              Factor: 1
            },
            260008: {
              Id: 260008,
              Level: 26,
              Region: "上海",
              CorrectName: "油爆虾",
              WrongName: "元宝虾",
              Factor: 3
            },
            260009: {
              Id: 260009,
              Level: 26,
              Region: "上海",
              CorrectName: "蟹粉捞饭",
              WrongName: "蟹粉拌饭",
              Factor: 3
            },
            260010: {
              Id: 260010,
              Level: 26,
              Region: "上海",
              CorrectName: "上海红烧肉",
              WrongName: "上海东坡肉",
              Factor: 3
            },
            260011: {
              Id: 260011,
              Level: 26,
              Region: "上海",
              CorrectName: "酱爆猪肝",
              WrongName: "炒猪肝",
              Factor: 3
            },
            260012: {
              Id: 260012,
              Level: 26,
              Region: "上海",
              CorrectName: "蟹粉生煎",
              WrongName: "小杨生煎",
              Factor: 2
            },
            260013: {
              Id: 260013,
              Level: 26,
              Region: "上海",
              CorrectName: "水晶虾仁",
              WrongName: "龙井虾仁",
              Factor: 3
            },
            260014: {
              Id: 260014,
              Level: 26,
              Region: "上海",
              CorrectName: "上海小素鸡",
              WrongName: "红烧素鸡",
              Factor: 2
            },
            260015: {
              Id: 260015,
              Level: 26,
              Region: "上海",
              CorrectName: "草头圈子",
              WrongName: "九转大肠",
              Factor: 2
            },
            260016: {
              Id: 260016,
              Level: 26,
              Region: "上海",
              CorrectName: "上海酱鸭",
              WrongName: "红烧鸭",
              Factor: 2
            },
            260017: {
              Id: 260017,
              Level: 26,
              Region: "上海",
              CorrectName: "葱烤鸦片鱼头",
              WrongName: "炸鸡",
              Factor: 1
            },
            260018: {
              Id: 260018,
              Level: 26,
              Region: "上海",
              CorrectName: "葱油拌面",
              WrongName: "葱油炒面",
              Factor: 1
            },
            260019: {
              Id: 260019,
              Level: 26,
              Region: "上海",
              CorrectName: "糖醋小排",
              WrongName: "糖醋排骨",
              Factor: 3
            },
            260020: {
              Id: 260020,
              Level: 26,
              Region: "上海",
              CorrectName: "罗宋汤",
              WrongName: "西红柿蛋花汤",
              Factor: 3
            },
            260021: {
              Id: 260021,
              Level: 26,
              Region: "上海",
              CorrectName: "椒盐排条",
              WrongName: "糖醋排条",
              Factor: 2
            },
            260022: {
              Id: 260022,
              Level: 26,
              Region: "上海",
              CorrectName: "田螺塞肉",
              WrongName: "螺蛳肉",
              Factor: 1
            },
            260023: {
              Id: 260023,
              Level: 26,
              Region: "上海",
              CorrectName: "酒香草头",
              WrongName: "葱油拌面",
              Factor: 1
            },
            260024: {
              Id: 260024,
              Level: 26,
              Region: "上海",
              CorrectName: "南翔小笼包",
              WrongName: "上海小笼包",
              Factor: 3
            },
            260025: {
              Id: 260025,
              Level: 26,
              Region: "上海",
              CorrectName: "红烧蹄膀",
              WrongName: "砂锅漕香鱼头",
              Factor: 1
            },
            260026: {
              Id: 260026,
              Level: 26,
              Region: "上海",
              CorrectName: "红烧鮰鱼",
              WrongName: "红烧带鱼",
              Factor: 2
            },
            260027: {
              Id: 260027,
              Level: 26,
              Region: "上海",
              CorrectName: "砂锅漕香鱼头",
              WrongName: "红烧肉",
              Factor: 1
            },
            260028: {
              Id: 260028,
              Level: 26,
              Region: "上海",
              CorrectName: "素蟹粉",
              WrongName: "西红柿炒鸡蛋",
              Factor: 1
            },
            260029: {
              Id: 260029,
              Level: 26,
              Region: "上海",
              CorrectName: "网油清蒸鲥鱼",
              WrongName: "清蒸白鱼",
              Factor: 3
            },
            260030: {
              Id: 260030,
              Level: 26,
              Region: "上海",
              CorrectName: "松子鲈鱼",
              WrongName: "松子桂鱼",
              Factor: 3
            },
            270001: {
              Id: 270001,
              Level: 27,
              Region: "重庆",
              CorrectName: "粉蒸肉",
              WrongName: "咸烧白",
              Factor: 2
            },
            270002: {
              Id: 270002,
              Level: 27,
              Region: "重庆",
              CorrectName: "甜烧白",
              WrongName: "粉蒸肉",
              Factor: 2
            },
            270003: {
              Id: 270003,
              Level: 27,
              Region: "重庆",
              CorrectName: "烧肥肠",
              WrongName: "豆瓣鲢鱼",
              Factor: 1
            },
            270004: {
              Id: 270004,
              Level: 27,
              Region: "重庆",
              CorrectName: "干烧岩鲤",
              WrongName: "干烧鲢鱼",
              Factor: 3
            },
            270005: {
              Id: 270005,
              Level: 27,
              Region: "重庆",
              CorrectName: "豆瓣鲢鱼",
              WrongName: "红烧肉",
              Factor: 1
            },
            270006: {
              Id: 270006,
              Level: 27,
              Region: "重庆",
              CorrectName: "鸡茸鱼翅",
              WrongName: "杏鲍菇炖粉条",
              Factor: 2
            },
            270007: {
              Id: 270007,
              Level: 27,
              Region: "重庆",
              CorrectName: "酸菜鱿鱼",
              WrongName: "歌乐山辣子鸡",
              Factor: 1
            },
            270008: {
              Id: 270008,
              Level: 27,
              Region: "重庆",
              CorrectName: "毛血旺",
              WrongName: "冒菜",
              Factor: 2
            },
            270009: {
              Id: 270009,
              Level: 27,
              Region: "重庆",
              CorrectName: "清炖牛尾汤",
              WrongName: "乳鸽汤",
              Factor: 1
            },
            270010: {
              Id: 270010,
              Level: 27,
              Region: "重庆",
              CorrectName: "樟茶鸭子",
              WrongName: "樟茶鸽子",
              Factor: 3
            },
            270011: {
              Id: 270011,
              Level: 27,
              Region: "重庆",
              CorrectName: "陈皮兔",
              WrongName: "麻辣兔",
              Factor: 2
            },
            270012: {
              Id: 270012,
              Level: 27,
              Region: "重庆",
              CorrectName: "歌乐山辣子鸡",
              WrongName: "万州烤鱼",
              Factor: 1
            },
            270013: {
              Id: 270013,
              Level: 27,
              Region: "重庆",
              CorrectName: "万州烤鱼",
              WrongName: "干锅",
              Factor: 1
            },
            270014: {
              Id: 270014,
              Level: 27,
              Region: "重庆",
              CorrectName: "小面",
              WrongName: "豌杂面",
              Factor: 2
            },
            270015: {
              Id: 270015,
              Level: 27,
              Region: "重庆",
              CorrectName: "黔江鸡杂",
              WrongName: "万州烤鱼",
              Factor: 1
            },
            270016: {
              Id: 270016,
              Level: 27,
              Region: "重庆",
              CorrectName: "泉水鸡",
              WrongName: "椒麻鸡",
              Factor: 3
            },
            270017: {
              Id: 270017,
              Level: 27,
              Region: "重庆",
              CorrectName: "翠云水煮鱼",
              WrongName: "椒麻鱼",
              Factor: 3
            },
            270018: {
              Id: 270018,
              Level: 27,
              Region: "重庆",
              CorrectName: "干锅",
              WrongName: "红烧肉",
              Factor: 1
            },
            270019: {
              Id: 270019,
              Level: 27,
              Region: "重庆",
              CorrectName: "豆花饭",
              WrongName: "白水豆腐",
              Factor: 2
            },
            270020: {
              Id: 270020,
              Level: 27,
              Region: "重庆",
              CorrectName: "酸萝卜鸭子汤",
              WrongName: "酸萝卜鸡汤",
              Factor: 3
            },
            270021: {
              Id: 270021,
              Level: 27,
              Region: "重庆",
              CorrectName: "串串香",
              WrongName: "烧烤",
              Factor: 3
            },
            270022: {
              Id: 270022,
              Level: 27,
              Region: "重庆",
              CorrectName: "芋儿鸡",
              WrongName: "鸭血粉丝汤",
              Factor: 1
            },
            270023: {
              Id: 270023,
              Level: 27,
              Region: "重庆",
              CorrectName: "酸菜鱼",
              WrongName: "麻辣烫",
              Factor: 1
            },
            270024: {
              Id: 270024,
              Level: 27,
              Region: "重庆",
              CorrectName: "烧鸡公",
              WrongName: "芋儿鸡",
              Factor: 3
            },
            270025: {
              Id: 270025,
              Level: 27,
              Region: "重庆",
              CorrectName: "甜水面",
              WrongName: "杂酱面",
              Factor: 3
            },
            270026: {
              Id: 270026,
              Level: 27,
              Region: "重庆",
              CorrectName: "酥肉汤",
              WrongName: "圆子汤",
              Factor: 3
            },
            270027: {
              Id: 270027,
              Level: 27,
              Region: "重庆",
              CorrectName: "豌杂面",
              WrongName: "小面",
              Factor: 2
            },
            270028: {
              Id: 270028,
              Level: 27,
              Region: "重庆",
              CorrectName: "烤苕皮",
              WrongName: "烤豆皮",
              Factor: 3
            },
            270029: {
              Id: 270029,
              Level: 27,
              Region: "重庆",
              CorrectName: "来凤鱼",
              WrongName: "椒麻鱼",
              Factor: 2
            },
            270030: {
              Id: 270030,
              Level: 27,
              Region: "重庆",
              CorrectName: "口水鸡",
              WrongName: "手撕鸡",
              Factor: 2
            },
            280001: {
              Id: 280001,
              Level: 28,
              Region: "香港",
              CorrectName: "咖喱鱼蛋",
              WrongName: "咖喱鱼块",
              Factor: 2
            },
            280002: {
              Id: 280002,
              Level: 28,
              Region: "香港",
              CorrectName: "鸡蛋仔",
              WrongName: "蛋仔煎",
              Factor: 3
            },
            280003: {
              Id: 280003,
              Level: 28,
              Region: "香港",
              CorrectName: "煎酿三宝",
              WrongName: "煎酿茭笋",
              Factor: 3
            },
            280004: {
              Id: 280004,
              Level: 28,
              Region: "香港",
              CorrectName: "碗仔翅",
              WrongName: "吉祥鱼翅",
              Factor: 2
            },
            280005: {
              Id: 280005,
              Level: 28,
              Region: "香港",
              CorrectName: "菠萝包",
              WrongName: "菠萝油",
              Factor: 3
            },
            280006: {
              Id: 280006,
              Level: 28,
              Region: "香港",
              CorrectName: "清汤腩",
              WrongName: "豌杂面",
              Factor: 1
            },
            280007: {
              Id: 280007,
              Level: 28,
              Region: "香港",
              CorrectName: "糖葱饼",
              WrongName: "潮阳糖饼",
              Factor: 2
            },
            280008: {
              Id: 280008,
              Level: 28,
              Region: "香港",
              CorrectName: "烧腊",
              WrongName: "云吞面",
              Factor: 1
            },
            280009: {
              Id: 280009,
              Level: 28,
              Region: "香港",
              CorrectName: "德发牛肉丸",
              WrongName: "蒸牛丸",
              Factor: 3
            },
            280010: {
              Id: 280010,
              Level: 28,
              Region: "香港",
              CorrectName: "香港云吞面",
              WrongName: "鸡蛋仔",
              Factor: 1
            },
            280011: {
              Id: 280011,
              Level: 28,
              Region: "香港",
              CorrectName: "虾糕",
              WrongName: "避风塘炒蟹",
              Factor: 1
            },
            280012: {
              Id: 280012,
              Level: 28,
              Region: "香港",
              CorrectName: "车仔面",
              WrongName: "绿豆糕",
              Factor: 1
            },
            280013: {
              Id: 280013,
              Level: 28,
              Region: "香港",
              CorrectName: "杨枝甘露",
              WrongName: "橙汁甘露",
              Factor: 3
            },
            280014: {
              Id: 280014,
              Level: 28,
              Region: "香港",
              CorrectName: "港式煲仔饭",
              WrongName: "土豆锅煲饭",
              Factor: 2
            },
            280015: {
              Id: 280015,
              Level: 28,
              Region: "香港",
              CorrectName: "菠萝油",
              WrongName: "菠萝包",
              Factor: 3
            },
            280016: {
              Id: 280016,
              Level: 28,
              Region: "香港",
              CorrectName: "丝袜奶茶",
              WrongName: "波霸奶茶",
              Factor: 2
            },
            280017: {
              Id: 280017,
              Level: 28,
              Region: "香港",
              CorrectName: "港式牛腩面",
              WrongName: "烧腊",
              Factor: 1
            },
            280018: {
              Id: 280018,
              Level: 28,
              Region: "香港",
              CorrectName: "元郎老婆饼",
              WrongName: "咸老公饼",
              Factor: 2
            },
            280019: {
              Id: 280019,
              Level: 28,
              Region: "香港",
              CorrectName: "避风塘炒蟹",
              WrongName: "沙茶面",
              Factor: 1
            },
            280020: {
              Id: 280020,
              Level: 28,
              Region: "香港",
              CorrectName: "烧鹅",
              WrongName: "五杯鹅",
              Factor: 2
            },
            280021: {
              Id: 280021,
              Level: 28,
              Region: "香港",
              CorrectName: "炒蛋多士",
              WrongName: "火腿蛋西多士",
              Factor: 2
            },
            280022: {
              Id: 280022,
              Level: 28,
              Region: "香港",
              CorrectName: "狗仔粉",
              WrongName: "花生糖",
              Factor: 1
            },
            280023: {
              Id: 280023,
              Level: 28,
              Region: "香港",
              CorrectName: "港式滑蛋饭",
              WrongName: "滑蛋茄子饭",
              Factor: 2
            },
            280024: {
              Id: 280024,
              Level: 28,
              Region: "香港",
              CorrectName: "西多士",
              WrongName: "煲仔饭",
              Factor: 1
            },
            280025: {
              Id: 280025,
              Level: 28,
              Region: "香港",
              CorrectName: "猪仔包",
              WrongName: "猪排包",
              Factor: 2
            },
            280026: {
              Id: 280026,
              Level: 28,
              Region: "香港",
              CorrectName: "酸姜皮蛋",
              WrongName: "子姜皮蛋",
              Factor: 3
            },
            280027: {
              Id: 280027,
              Level: 28,
              Region: "香港",
              CorrectName: "鸭掌煲",
              WrongName: "红烧鸭掌",
              Factor: 3
            },
            280028: {
              Id: 280028,
              Level: 28,
              Region: "香港",
              CorrectName: "港式钵仔糕",
              WrongName: "蒸碗仔糕",
              Factor: 3
            },
            280029: {
              Id: 280029,
              Level: 28,
              Region: "香港",
              CorrectName: "豉油皇虾",
              WrongName: "豉油焗虾",
              Factor: 3
            },
            280030: {
              Id: 280030,
              Level: 28,
              Region: "香港",
              CorrectName: "叉烧酥",
              WrongName: "油炸茄子饼",
              Factor: 1
            },
            290001: {
              Id: 290001,
              Level: 29,
              Region: "澳门",
              CorrectName: "白切烧肉",
              WrongName: "蒜泥白肉",
              Factor: 3
            },
            290002: {
              Id: 290002,
              Level: 29,
              Region: "澳门",
              CorrectName: "焗葡国鸡",
              WrongName: "葡国鸡",
              Factor: 3
            },
            290003: {
              Id: 290003,
              Level: 29,
              Region: "澳门",
              CorrectName: "骨香鲳鱼球",
              WrongName: "香酥鱼球",
              Factor: 2
            },
            290004: {
              Id: 290004,
              Level: 29,
              Region: "澳门",
              CorrectName: "干煎大虾碌",
              WrongName: "可颂",
              Factor: 1
            },
            290005: {
              Id: 290005,
              Level: 29,
              Region: "澳门",
              CorrectName: "霸王八宝扒大鸭",
              WrongName: "五谷丰登八宝鸭",
              Factor: 2
            },
            290006: {
              Id: 290006,
              Level: 29,
              Region: "澳门",
              CorrectName: "瓦罐浓汤鸡煲翅",
              WrongName: "鸡浮炖鱼翅",
              Factor: 2
            },
            290007: {
              Id: 290007,
              Level: 29,
              Region: "澳门",
              CorrectName: "清蒸龙脷鱼",
              WrongName: "清汤龙头鱼",
              Factor: 2
            },
            290008: {
              Id: 290008,
              Level: 29,
              Region: "澳门",
              CorrectName: "金钱脆蟹盒",
              WrongName: "油炸茄子饼",
              Factor: 1
            },
            290009: {
              Id: 290009,
              Level: 29,
              Region: "澳门",
              CorrectName: "非洲鸡",
              WrongName: "水煮鱼",
              Factor: 1
            },
            290010: {
              Id: 290010,
              Level: 29,
              Region: "澳门",
              CorrectName: "葡式蛋挞",
              WrongName: "酥皮蛋挞",
              Factor: 3
            },
            290011: {
              Id: 290011,
              Level: 29,
              Region: "澳门",
              CorrectName: "叉烧",
              WrongName: "烧肉",
              Factor: 2
            },
            290012: {
              Id: 290012,
              Level: 29,
              Region: "澳门",
              CorrectName: "煲仔饭",
              WrongName: "椰子鸡",
              Factor: 1
            },
            290013: {
              Id: 290013,
              Level: 29,
              Region: "澳门",
              CorrectName: "双皮奶",
              WrongName: "姜撞奶",
              Factor: 3
            },
            290014: {
              Id: 290014,
              Level: 29,
              Region: "澳门",
              CorrectName: "葡国炭烧肉",
              WrongName: "秘制炭烧肉",
              Factor: 3
            },
            290015: {
              Id: 290015,
              Level: 29,
              Region: "澳门",
              CorrectName: "免治牛肉饭",
              WrongName: "湿炒牛肉饭",
              Factor: 2
            },
            290016: {
              Id: 290016,
              Level: 29,
              Region: "澳门",
              CorrectName: "黑豆炖猪脚",
              WrongName: "黑豆炖肉",
              Factor: 3
            },
            290017: {
              Id: 290017,
              Level: 29,
              Region: "澳门",
              CorrectName: "大盘杂煮",
              WrongName: "佛跳墙",
              Factor: 1
            },
            290018: {
              Id: 290018,
              Level: 29,
              Region: "澳门",
              CorrectName: "葡国鸡",
              WrongName: "焗葡国鸡",
              Factor: 3
            },
            290019: {
              Id: 290019,
              Level: 29,
              Region: "澳门",
              CorrectName: "鱼丸",
              WrongName: "鱼皮肉丸",
              Factor: 2
            },
            290020: {
              Id: 290020,
              Level: 29,
              Region: "澳门",
              CorrectName: "猪扒包",
              WrongName: "猪仔包",
              Factor: 3
            },
            290021: {
              Id: 290021,
              Level: 29,
              Region: "澳门",
              CorrectName: "肉脯",
              WrongName: "肉干",
              Factor: 2
            },
            290022: {
              Id: 290022,
              Level: 29,
              Region: "澳门",
              CorrectName: "海苔肉松卷",
              WrongName: "叉烧包 ",
              Factor: 1
            },
            290023: {
              Id: 290023,
              Level: 29,
              Region: "澳门",
              CorrectName: "杏仁饼",
              WrongName: "杏仁酥饼",
              Factor: 3
            },
            290024: {
              Id: 290024,
              Level: 29,
              Region: "澳门",
              CorrectName: "花生糖",
              WrongName: "肉松面包",
              Factor: 1
            },
            290025: {
              Id: 290025,
              Level: 29,
              Region: "澳门",
              CorrectName: "木糠布甸",
              WrongName: "海苔肉松卷",
              Factor: 1
            },
            290026: {
              Id: 290026,
              Level: 29,
              Region: "澳门",
              CorrectName: "榴莲冰激淋",
              WrongName: "菠萝包",
              Factor: 1
            },
            290027: {
              Id: 290027,
              Level: 29,
              Region: "澳门",
              CorrectName: "水蟹粥",
              WrongName: "澳门大龙虾",
              Factor: 1
            },
            290028: {
              Id: 290028,
              Level: 29,
              Region: "澳门",
              CorrectName: "咖喱牛腩",
              WrongName: "咖喱鸡",
              Factor: 2
            },
            290029: {
              Id: 290029,
              Level: 29,
              Region: "澳门",
              CorrectName: "虾籽捞面",
              WrongName: "家常拌面",
              Factor: 2
            },
            290030: {
              Id: 290030,
              Level: 29,
              Region: "澳门",
              CorrectName: "吊针鸡",
              WrongName: "白斩鸡",
              Factor: 3
            },
            300001: {
              Id: 300001,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "羊肉烧麦",
              WrongName: "灌汤包",
              Factor: 1
            },
            300002: {
              Id: 300002,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "老茶汤",
              WrongName: "冰粉",
              Factor: 1
            },
            300003: {
              Id: 300003,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "碗托",
              WrongName: "凉拌凉粉",
              Factor: 2
            },
            300004: {
              Id: 300004,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "对夹",
              WrongName: "肉夹馍",
              Factor: 2
            },
            300005: {
              Id: 300005,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "手把肉",
              WrongName: "鱼丸粗面",
              Factor: 1
            },
            300006: {
              Id: 300006,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "巴盟烩菜",
              WrongName: "猪肉炖酸菜",
              Factor: 3
            },
            300007: {
              Id: 300007,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "清炖牛肉",
              WrongName: "牛肉汤锅",
              Factor: 3
            },
            300008: {
              Id: 300008,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "羊杂汤",
              WrongName: "牛肉汤",
              Factor: 2
            },
            300009: {
              Id: 300009,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "凉拌苦菜",
              WrongName: "凉拌海带",
              Factor: 3
            },
            300010: {
              Id: 300010,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "凉拌沙葱",
              WrongName: "炒韭菜",
              Factor: 2
            },
            300011: {
              Id: 300011,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "驴肉",
              WrongName: "牛肉",
              Factor: 3
            },
            300012: {
              Id: 300012,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "油锅牛三宝",
              WrongName: "红烧牛肉",
              Factor: 2
            },
            300013: {
              Id: 300013,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "凉拌蹄黄",
              WrongName: "烤羊排",
              Factor: 1
            },
            300014: {
              Id: 300014,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "拔丝奶豆腐",
              WrongName: "沙茶面",
              Factor: 1
            },
            300015: {
              Id: 300015,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "扒驼掌",
              WrongName: "红烧肉",
              Factor: 1
            },
            300016: {
              Id: 300016,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "烤全羊",
              WrongName: "烤乳猪",
              Factor: 2
            },
            300017: {
              Id: 300017,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "卓资山熏鸡",
              WrongName: "卤鸡",
              Factor: 2
            },
            300018: {
              Id: 300018,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "冰煮羊",
              WrongName: "冻牛肉",
              Factor: 3
            },
            300019: {
              Id: 300019,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "咸奶茶",
              WrongName: "糖葫芦",
              Factor: 1
            },
            300020: {
              Id: 300020,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "莜面",
              WrongName: "炒米粉",
              Factor: 1
            },
            300021: {
              Id: 300021,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "荞面饸饹",
              WrongName: "烩荞面",
              Factor: 2
            },
            300022: {
              Id: 300022,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "奶皮子",
              WrongName: "锅包肉",
              Factor: 1
            },
            300023: {
              Id: 300023,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "大炸羊",
              WrongName: "红烧牛背",
              Factor: 2
            },
            300024: {
              Id: 300024,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "羊背子",
              WrongName: "小酥肉",
              Factor: 1
            },
            300025: {
              Id: 300025,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "涮羊肉",
              WrongName: "羊肉汤锅",
              Factor: 3
            },
            300026: {
              Id: 300026,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "清汤羊尾",
              WrongName: "土豆炖排骨",
              Factor: 3
            },
            300027: {
              Id: 300027,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "糖醋驼峰",
              WrongName: "糖醋里脊",
              Factor: 3
            },
            300028: {
              Id: 300028,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "血肠",
              WrongName: "煎猪血",
              Factor: 3
            },
            300029: {
              Id: 300029,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "猪肉勾鸡",
              WrongName: "土豆烧鸡",
              Factor: 2
            },
            300030: {
              Id: 300030,
              Level: 30,
              Region: "内蒙古",
              CorrectName: "肚包肉",
              WrongName: "红油羊肚",
              Factor: 3
            },
            310001: {
              Id: 310001,
              Level: 31,
              Region: "广西",
              CorrectName: "巴马香猪",
              WrongName: "烤乳猪",
              Factor: 3
            },
            310002: {
              Id: 310002,
              Level: 31,
              Region: "广西",
              CorrectName: "米粉",
              WrongName: "螺蛳粉",
              Factor: 2
            },
            310003: {
              Id: 310003,
              Level: 31,
              Region: "广西",
              CorrectName: "柠檬鸭",
              WrongName: "红焖鸭",
              Factor: 3
            },
            310004: {
              Id: 310004,
              Level: 31,
              Region: "广西",
              CorrectName: "螺蛳粉",
              WrongName: "炒米粉",
              Factor: 3
            },
            310005: {
              Id: 310005,
              Level: 31,
              Region: "广西",
              CorrectName: "荔浦芋扣肉",
              WrongName: "梅菜扣肉",
              Factor: 2
            },
            310006: {
              Id: 310006,
              Level: 31,
              Region: "广西",
              CorrectName: "五色糯米饭",
              WrongName: "蛋炒饭",
              Factor: 1
            },
            310007: {
              Id: 310007,
              Level: 31,
              Region: "广西",
              CorrectName: "老友粉",
              WrongName: "油泼面",
              Factor: 1
            },
            310008: {
              Id: 310008,
              Level: 31,
              Region: "广西",
              CorrectName: "荷叶包鸡",
              WrongName: "甜皮鸭",
              Factor: 1
            },
            310009: {
              Id: 310009,
              Level: 31,
              Region: "广西",
              CorrectName: "田螺鸭脚煲",
              WrongName: "砂锅炖鸭掌",
              Factor: 2
            },
            310010: {
              Id: 310010,
              Level: 31,
              Region: "广西",
              CorrectName: "啤酒鱼",
              WrongName: "椒麻鸡",
              Factor: 1
            },
            310011: {
              Id: 310011,
              Level: 31,
              Region: "广西",
              CorrectName: "玉林牛巴",
              WrongName: "熏干牛肉",
              Factor: 2
            },
            310012: {
              Id: 310012,
              Level: 31,
              Region: "广西",
              CorrectName: "横县鱼生",
              WrongName: "火腿",
              Factor: 2
            },
            310013: {
              Id: 310013,
              Level: 31,
              Region: "广西",
              CorrectName: "招牌老友鱼",
              WrongName: "红烧鲤鱼",
              Factor: 2
            },
            310014: {
              Id: 310014,
              Level: 31,
              Region: "广西",
              CorrectName: "卷筒粉",
              WrongName: "肠粉",
              Factor: 3
            },
            310015: {
              Id: 310015,
              Level: 31,
              Region: "广西",
              CorrectName: "马蹄糕",
              WrongName: "皮冻",
              Factor: 2
            },
            310016: {
              Id: 310016,
              Level: 31,
              Region: "广西",
              CorrectName: "银耳糖水",
              WrongName: "银耳莲子羹",
              Factor: 3
            },
            310017: {
              Id: 310017,
              Level: 31,
              Region: "广西",
              CorrectName: "河池糯米鸡",
              WrongName: "纸包鸡",
              Factor: 2
            },
            310018: {
              Id: 310018,
              Level: 31,
              Region: "广西",
              CorrectName: "香糯凉粽",
              WrongName: "荷包饭",
              Factor: 3
            },
            310019: {
              Id: 310019,
              Level: 31,
              Region: "广西",
              CorrectName: "猪脚粉",
              WrongName: "辣子鸡",
              Factor: 1
            },
            310020: {
              Id: 310020,
              Level: 31,
              Region: "广西",
              CorrectName: "恭城油茶",
              WrongName: "炒凉粉",
              Factor: 1
            },
            310021: {
              Id: 310021,
              Level: 31,
              Region: "广西",
              CorrectName: "苗族酸肉",
              WrongName: "腊肉",
              Factor: 3
            },
            310022: {
              Id: 310022,
              Level: 31,
              Region: "广西",
              CorrectName: "芙蓉酥",
              WrongName: "蒸米酥",
              Factor: 3
            },
            310023: {
              Id: 310023,
              Level: 31,
              Region: "广西",
              CorrectName: "水油堆",
              WrongName: "麻圆",
              Factor: 1
            },
            310024: {
              Id: 310024,
              Level: 31,
              Region: "广西",
              CorrectName: "酿豆腐泡",
              WrongName: "酒酿元宵",
              Factor: 1
            },
            310025: {
              Id: 310025,
              Level: 31,
              Region: "广西",
              CorrectName: "蜂巢洋芋角",
              WrongName: "妙脆角",
              Factor: 1
            },
            310026: {
              Id: 310026,
              Level: 31,
              Region: "广西",
              CorrectName: "粉利",
              WrongName: "米豆腐",
              Factor: 2
            },
            310027: {
              Id: 310027,
              Level: 31,
              Region: "广西",
              CorrectName: "虾仔饼",
              WrongName: "海鲜饼",
              Factor: 3
            },
            310028: {
              Id: 310028,
              Level: 31,
              Region: "广西",
              CorrectName: "水米乙",
              WrongName: "米糕",
              Factor: 3
            },
            310029: {
              Id: 310029,
              Level: 31,
              Region: "广西",
              CorrectName: "罗卜糕",
              WrongName: "桂花糕",
              Factor: 1
            },
            310030: {
              Id: 310030,
              Level: 31,
              Region: "广西",
              CorrectName: "田螺汤",
              WrongName: "田螺煲",
              Factor: 2
            },
            320001: {
              Id: 320001,
              Level: 32,
              Region: "西藏",
              CorrectName: "风干牛羊肉",
              WrongName: "猪肉铺",
              Factor: 1
            },
            320002: {
              Id: 320002,
              Level: 32,
              Region: "西藏",
              CorrectName: "酥酪糕",
              WrongName: "年糕",
              Factor: 1
            },
            320003: {
              Id: 320003,
              Level: 32,
              Region: "西藏",
              CorrectName: "酥油茶",
              WrongName: "奶茶",
              Factor: 2
            },
            320004: {
              Id: 320004,
              Level: 32,
              Region: "西藏",
              CorrectName: "糍粑",
              WrongName: "土豆",
              Factor: 1
            },
            320005: {
              Id: 320005,
              Level: 32,
              Region: "西藏",
              CorrectName: "藏式甜茶",
              WrongName: "酥油茶",
              Factor: 3
            },
            320006: {
              Id: 320006,
              Level: 32,
              Region: "西藏",
              CorrectName: "古突",
              WrongName: "羊杂碎",
              Factor: 2
            },
            320007: {
              Id: 320007,
              Level: 32,
              Region: "西藏",
              CorrectName: "青稞面",
              WrongName: "荞麦面",
              Factor: 2
            },
            320008: {
              Id: 320008,
              Level: 32,
              Region: "西藏",
              CorrectName: "馕包子",
              WrongName: "甜甜圈",
              Factor: 2
            },
            320009: {
              Id: 320009,
              Level: 32,
              Region: "西藏",
              CorrectName: "羊肉串",
              WrongName: "牛肉串",
              Factor: 3
            },
            320010: {
              Id: 320010,
              Level: 32,
              Region: "西藏",
              CorrectName: "糌粑",
              WrongName: "糍粑",
              Factor: 3
            },
            320011: {
              Id: 320011,
              Level: 32,
              Region: "西藏",
              CorrectName: "青稞酒",
              WrongName: "白酒",
              Factor: 3
            },
            320012: {
              Id: 320012,
              Level: 32,
              Region: "西藏",
              CorrectName: "藏香猪",
              WrongName: "烤乳猪",
              Factor: 3
            },
            320013: {
              Id: 320013,
              Level: 32,
              Region: "西藏",
              CorrectName: "风干牛肉",
              WrongName: "手撕牛肉",
              Factor: 2
            },
            320014: {
              Id: 320014,
              Level: 32,
              Region: "西藏",
              CorrectName: "藏式酸奶",
              WrongName: "双皮奶",
              Factor: 3
            },
            320015: {
              Id: 320015,
              Level: 32,
              Region: "西藏",
              CorrectName: "虫草炖雪鸡",
              WrongName: "当归炖鸡",
              Factor: 3
            },
            320016: {
              Id: 320016,
              Level: 32,
              Region: "西藏",
              CorrectName: "羊血肠",
              WrongName: "毛血旺",
              Factor: 3
            },
            320017: {
              Id: 320017,
              Level: 32,
              Region: "西藏",
              CorrectName: "奶渣包子",
              WrongName: "小笼包",
              Factor: 1
            },
            320018: {
              Id: 320018,
              Level: 32,
              Region: "西藏",
              CorrectName: "生牛肉酱",
              WrongName: "老干妈豆瓣酱",
              Factor: 2
            },
            320019: {
              Id: 320019,
              Level: 32,
              Region: "西藏",
              CorrectName: "石锅鸡",
              WrongName: "叫花鸡",
              Factor: 1
            },
            320020: {
              Id: 320020,
              Level: 32,
              Region: "西藏",
              CorrectName: "人参果饭",
              WrongName: "扬州炒饭",
              Factor: 1
            },
            320021: {
              Id: 320021,
              Level: 32,
              Region: "西藏",
              CorrectName: "蒸牛舌",
              WrongName: "蒸腰片",
              Factor: 2
            },
            320022: {
              Id: 320022,
              Level: 32,
              Region: "西藏",
              CorrectName: "牦牛拉面",
              WrongName: "豚骨拉面",
              Factor: 1
            },
            320023: {
              Id: 320023,
              Level: 32,
              Region: "西藏",
              CorrectName: "羊肉火锅",
              WrongName: "红烧肉",
              Factor: 2
            },
            320024: {
              Id: 320024,
              Level: 32,
              Region: "西藏",
              CorrectName: "牦牛火锅",
              WrongName: "萝卜炖排骨",
              Factor: 3
            },
            320025: {
              Id: 320025,
              Level: 32,
              Region: "西藏",
              CorrectName: "土豆包子",
              WrongName: "油条",
              Factor: 1
            },
            320026: {
              Id: 320026,
              Level: 32,
              Region: "西藏",
              CorrectName: "朋必",
              WrongName: "豆腐脑",
              Factor: 1
            },
            320027: {
              Id: 320027,
              Level: 32,
              Region: "西藏",
              CorrectName: "麻森",
              WrongName: "烧饼",
              Factor: 1
            },
            320028: {
              Id: 320028,
              Level: 32,
              Region: "西藏",
              CorrectName: "卡塞",
              WrongName: "青稞",
              Factor: 2
            },
            320029: {
              Id: 320029,
              Level: 32,
              Region: "西藏",
              CorrectName: "奶渣",
              WrongName: "奶酪干",
              Factor: 2
            },
            320030: {
              Id: 320030,
              Level: 32,
              Region: "西藏",
              CorrectName: "黑青稞",
              WrongName: "黑米",
              Factor: 3
            },
            330001: {
              Id: 330001,
              Level: 33,
              Region: "宁夏",
              CorrectName: "大蒜烧黄河鲶",
              WrongName: "黄焖鲶鱼",
              Factor: 3
            },
            330002: {
              Id: 330002,
              Level: 33,
              Region: "宁夏",
              CorrectName: "蒸羊羔",
              WrongName: "蒸鱼",
              Factor: 1
            },
            330003: {
              Id: 330003,
              Level: 33,
              Region: "宁夏",
              CorrectName: "烧鲤鱼",
              WrongName: "焖鲤鱼",
              Factor: 3
            },
            330004: {
              Id: 330004,
              Level: 33,
              Region: "宁夏",
              CorrectName: "碾馔儿",
              WrongName: "青麦",
              Factor: 3
            },
            330005: {
              Id: 330005,
              Level: 33,
              Region: "宁夏",
              CorrectName: "手撕土鸡",
              WrongName: "手撕面包",
              Factor: 1
            },
            330006: {
              Id: 330006,
              Level: 33,
              Region: "宁夏",
              CorrectName: "羊肉老搓面",
              WrongName: "羊肉豆腐粉",
              Factor: 3
            },
            330007: {
              Id: 330007,
              Level: 33,
              Region: "宁夏",
              CorrectName: "中卫素杂烩",
              WrongName: "红焖杂烩",
              Factor: 3
            },
            330008: {
              Id: 330008,
              Level: 33,
              Region: "宁夏",
              CorrectName: "玫瑰八宝茶",
              WrongName: "红茶",
              Factor: 1
            },
            330009: {
              Id: 330009,
              Level: 33,
              Region: "宁夏",
              CorrectName: "嵩子面",
              WrongName: "拉面",
              Factor: 2
            },
            330010: {
              Id: 330010,
              Level: 33,
              Region: "宁夏",
              CorrectName: "撒子",
              WrongName: "麻花",
              Factor: 1
            },
            330011: {
              Id: 330011,
              Level: 33,
              Region: "宁夏",
              CorrectName: "吴忠白水鸡",
              WrongName: "烤鸡",
              Factor: 1
            },
            330012: {
              Id: 330012,
              Level: 33,
              Region: "宁夏",
              CorrectName: "炒糊饽",
              WrongName: "炒饼",
              Factor: 2
            },
            330013: {
              Id: 330013,
              Level: 33,
              Region: "宁夏",
              CorrectName: "沙湖大鱼头",
              WrongName: "双椒鱼头",
              Factor: 3
            },
            330014: {
              Id: 330014,
              Level: 33,
              Region: "宁夏",
              CorrectName: "辣糊糊",
              WrongName: "麻辣烫",
              Factor: 3
            },
            330015: {
              Id: 330015,
              Level: 33,
              Region: "宁夏",
              CorrectName: "羊肉臊子面",
              WrongName: "红烧牛肉面",
              Factor: 1
            },
            330016: {
              Id: 330016,
              Level: 33,
              Region: "宁夏",
              CorrectName: "炒烩面",
              WrongName: "方便面",
              Factor: 1
            },
            330017: {
              Id: 330017,
              Level: 33,
              Region: "宁夏",
              CorrectName: "烩小吃",
              WrongName: "豆腐脑",
              Factor: 1
            },
            330018: {
              Id: 330018,
              Level: 33,
              Region: "宁夏",
              CorrectName: "凉拌枸杞芽",
              WrongName: "凉拌芥菜",
              Factor: 3
            },
            330019: {
              Id: 330019,
              Level: 33,
              Region: "宁夏",
              CorrectName: "肉粘饭",
              WrongName: "汤汁拌饭",
              Factor: 3
            },
            330020: {
              Id: 330020,
              Level: 33,
              Region: "宁夏",
              CorrectName: "隆德暖锅",
              WrongName: "铜锅蒸肉",
              Factor: 3
            },
            330021: {
              Id: 330021,
              Level: 33,
              Region: "宁夏",
              CorrectName: "生汆面",
              WrongName: "肉丸拉面",
              Factor: 2
            },
            330022: {
              Id: 330022,
              Level: 33,
              Region: "宁夏",
              CorrectName: "羊排小揪面",
              WrongName: "羊排烩面",
              Factor: 2
            },
            330023: {
              Id: 330023,
              Level: 33,
              Region: "宁夏",
              CorrectName: "燕面揉揉",
              WrongName: "凉拌面筋",
              Factor: 2
            },
            330024: {
              Id: 330024,
              Level: 33,
              Region: "宁夏",
              CorrectName: "手抓羊肉",
              WrongName: "清蒸羊排",
              Factor: 2
            },
            330025: {
              Id: 330025,
              Level: 33,
              Region: "宁夏",
              CorrectName: "烫面油香",
              WrongName: "麻圆",
              Factor: 1
            },
            330026: {
              Id: 330026,
              Level: 33,
              Region: "宁夏",
              CorrectName: "羊肉调和",
              WrongName: "烩米面",
              Factor: 2
            },
            330027: {
              Id: 330027,
              Level: 33,
              Region: "宁夏",
              CorrectName: "爆炒羊羔肉",
              WrongName: "红焖羊肉",
              Factor: 2
            },
            330028: {
              Id: 330028,
              Level: 33,
              Region: "宁夏",
              CorrectName: "驴板肠",
              WrongName: "猪肚",
              Factor: 1
            },
            330029: {
              Id: 330029,
              Level: 33,
              Region: "宁夏",
              CorrectName: "羊肉抓饭",
              WrongName: "羊肉盖饭",
              Factor: 2
            },
            330030: {
              Id: 330030,
              Level: 33,
              Region: "宁夏",
              CorrectName: "酿皮子",
              WrongName: "凉皮",
              Factor: 2
            },
            340001: {
              Id: 340001,
              Level: 34,
              Region: "新疆",
              CorrectName: "新疆大拌菜",
              WrongName: "大盘鸡",
              Factor: 1
            },
            340002: {
              Id: 340002,
              Level: 34,
              Region: "新疆",
              CorrectName: "大盘肚",
              WrongName: "椒麻鸡",
              Factor: 1
            },
            340003: {
              Id: 340003,
              Level: 34,
              Region: "新疆",
              CorrectName: "烤馕",
              WrongName: "烤肉",
              Factor: 1
            },
            340004: {
              Id: 340004,
              Level: 34,
              Region: "新疆",
              CorrectName: "大盘鸡",
              WrongName: "馕坑肉",
              Factor: 1
            },
            340005: {
              Id: 340005,
              Level: 34,
              Region: "新疆",
              CorrectName: "扁豆面旗子",
              WrongName: "过油肉拌面",
              Factor: 1
            },
            340006: {
              Id: 340006,
              Level: 34,
              Region: "新疆",
              CorrectName: "烤包子",
              WrongName: "生煎包",
              Factor: 1
            },
            340007: {
              Id: 340007,
              Level: 34,
              Region: "新疆",
              CorrectName: "切糕",
              WrongName: "糯米糕",
              Factor: 1
            },
            340008: {
              Id: 340008,
              Level: 34,
              Region: "新疆",
              CorrectName: "薄皮包子",
              WrongName: "烤馕",
              Factor: 1
            },
            340009: {
              Id: 340009,
              Level: 34,
              Region: "新疆",
              CorrectName: "丁丁炒面",
              WrongName: "炒米粉",
              Factor: 1
            },
            340010: {
              Id: 340010,
              Level: 34,
              Region: "新疆",
              CorrectName: "二节子炒面",
              WrongName: "石河子凉皮",
              Factor: 1
            },
            340011: {
              Id: 340011,
              Level: 34,
              Region: "新疆",
              CorrectName: "干煸炒面",
              WrongName: "新疆拌米粉",
              Factor: 2
            },
            340012: {
              Id: 340012,
              Level: 34,
              Region: "新疆",
              CorrectName: "新疆炒米粉",
              WrongName: "酸辣粉",
              Factor: 2
            },
            340013: {
              Id: 340013,
              Level: 34,
              Region: "新疆",
              CorrectName: "新疆拌米粉",
              WrongName: "螺蛳粉",
              Factor: 2
            },
            340014: {
              Id: 340014,
              Level: 34,
              Region: "新疆",
              CorrectName: "烤全羊",
              WrongName: "烤鸭",
              Factor: 2
            },
            340015: {
              Id: 340015,
              Level: 34,
              Region: "新疆",
              CorrectName: "烤羊排",
              WrongName: "架子肉",
              Factor: 2
            },
            340016: {
              Id: 340016,
              Level: 34,
              Region: "新疆",
              CorrectName: "胡辣羊蹄",
              WrongName: "烤鸡腿",
              Factor: 2
            },
            340017: {
              Id: 340017,
              Level: 34,
              Region: "新疆",
              CorrectName: "假腰子",
              WrongName: "烤羊肉",
              Factor: 2
            },
            340018: {
              Id: 340018,
              Level: 34,
              Region: "新疆",
              CorrectName: "米肠子",
              WrongName: "面肺子",
              Factor: 2
            },
            340019: {
              Id: 340019,
              Level: 34,
              Region: "新疆",
              CorrectName: "面肺子",
              WrongName: "米肠子",
              Factor: 2
            },
            340020: {
              Id: 340020,
              Level: 34,
              Region: "新疆",
              CorrectName: "缸子肉",
              WrongName: "丸子汤",
              Factor: 2
            },
            340021: {
              Id: 340021,
              Level: 34,
              Region: "新疆",
              CorrectName: "鸽捞面",
              WrongName: "大盘鸡",
              Factor: 3
            },
            340022: {
              Id: 340022,
              Level: 34,
              Region: "新疆",
              CorrectName: "手抓饭",
              WrongName: "烤全羊",
              Factor: 3
            },
            340023: {
              Id: 340023,
              Level: 34,
              Region: "新疆",
              CorrectName: "酸奶粽子",
              WrongName: "冰粉",
              Factor: 3
            },
            340024: {
              Id: 340024,
              Level: 34,
              Region: "新疆",
              CorrectName: "红柳烤肉",
              WrongName: "烤全羊",
              Factor: 3
            },
            340025: {
              Id: 340025,
              Level: 34,
              Region: "新疆",
              CorrectName: "黄面",
              WrongName: "凉皮",
              Factor: 3
            },
            340026: {
              Id: 340026,
              Level: 34,
              Region: "新疆",
              CorrectName: "过油肉拌面",
              WrongName: "丁丁炒面",
              Factor: 3
            },
            340027: {
              Id: 340027,
              Level: 34,
              Region: "新疆",
              CorrectName: "辣皮子拌面",
              WrongName: "炒米粉",
              Factor: 3
            },
            340028: {
              Id: 340028,
              Level: 34,
              Region: "新疆",
              CorrectName: "丸子汤",
              WrongName: "缸子肉",
              Factor: 3
            },
            340029: {
              Id: 340029,
              Level: 34,
              Region: "新疆",
              CorrectName: "油塔子",
              WrongName: "花卷",
              Factor: 3
            },
            340030: {
              Id: 340030,
              Level: 34,
              Region: "新疆",
              CorrectName: "椒麻鸡",
              WrongName: "辣子鸡",
              Factor: 3
            }
          };
          return DishData[Id] || null;
        }

        /**初始化成语题目 */
        InitIdiomData() {
          this.GetIdiomData();
          this.IdiomCurrent = "";
          this.IdiomIndex = 0;
          this.IdiomCompletedQuantity = 0;
          this.IdiomMoveing = false;
        }
        /**检查成语进度 */


        CheckIdiomProgress(Char) {
          // 拼接新字符形成候选字符串
          var Candidate = this.IdiomCurrent + Char; // 检查是否是完整成语

          var isComplete = this.IdiomData.indexOf(Candidate); // 检查是否有成语以这个候选字符串开头

          var isValid = this.IdiomData.some(Idiom => Idiom.startsWith(Candidate));

          if (isValid) {
            this.IdiomIndex++;
          }

          if (isComplete !== -1) {
            // 如果是完整成语，重置当前拼接状态
            this.IdiomCurrent = "";
            this.IdiomCompletedQuantity++;
            return {
              isValid: true,
              isComplete: true
            };
          } else if (isValid) {
            // 如果是有效部分，更新当前拼接状态
            this.IdiomCurrent = Candidate;
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
        /**获取成语数据 */


        GetIdiomData() {
          var IdiomData = [["雨过天晴", "雷霆万钧", "两面三刀", "风花雪月", "天衣无缝"], ["有口无心", "天马行空", "入木三分", "心中有数", "一表人才"], ["百里挑一", "弱不禁风", "三心二意", "回眸一笑", "目中无人"], ["一波三折", "死上八下", "一拍即合", "无中生有", "趁人不备"], ["一目十行", "心口不一", "一手遮天", "举一反三", "表里不一"], ["一心一意", "九牛一毛", "网开一面", "一刀两断", "天各一方"], ["颠三倒四", "羊入虎口", "独当一面", "将心比心", "四脚朝天"], ["才高八斗", "石破天惊", "天方夜谭", "目不识丁", "人仰马翻"], ["引人入胜", "美中不足", "日上三竿", "风平浪静", "开门见山"], ["两袖清风", "天下太平", "心直口快", "遁入空门", "群龙无首"], ["风和日丽", "蒸蒸日上", "见风使舵", "风花雪月", "三姑六婆"], ["大惊失色", "人去楼空", "恩重如山", "不翼而飞", "非分之想"], ["半斤八两", "梁上君子", "胆大包天", "旁门左道", "是非不分"], ["七零八落", "苦中作乐", "平分秋色", "左右开弓", "祸从口出"], ["无与伦比", "走马观花", "地广人稀", "待字闺中", "完美无缺"], ["小鸟依人", "门庭若市", "开卷有益", "高山流水", "半推半就"], ["塞翁失马", "七嘴八舌", "半推半就", "四分五裂", "火上浇油"], ["九牛二虎", "脱口而出", "充耳不闻", "历历在目", "有生之年"], ["七零八落", "马失前蹄", "德高望重", "祸从口出", "东倒西歪"], ["同床一梦", "声东击西", "若影若现", "如影随形", "明枪暗箭"], ["鼠目寸光", "面黄饥瘦", "视财如命", "放虎归山", "顺手牵羊"], ["东张西望", "远走高飞", "闭门思过", "五颜六色", "浪子回头"], ["左思右想", "倾国倾城", "事半功倍", "七情六欲", "一表人才"], ["如坐针毡", "兵临城下", "啼笑皆非", "火烧眉毛", "言外之意"], ["斤斤计较", "里应外合", "每况愈下", "本末倒置", "青红皂白"], ["草木皆兵", "俯首称臣", "身首异处", "晕头转向", "长话短说"], ["金盆洗手", "拨乱反正", "绿林好汉", "异曲同工", "可圈可点"], ["能屈能伸", "扬眉吐气", "重蹈覆辙", "点到为止", "花花公子"], ["猪朋狗友", "十拿九稳", "水乳交融", "万念俱灰", "自圆其说"], ["楚河汉界", "人走茶凉", "白纸黑字", "貌合神离", "粗茶淡饭"], ["枪林弹雨", "瞒上欺下", "苦尽甘来", "弃暗投明", "大打出手"], ["四大皆空", "不可一世", "仰面朝天", "尽心尽力", "生财有道"], ["人神共愤", "大吉大利", "光明正大", "不三不四", "名震天下"], ["居安思危", "自始至终", "捕风抓影", "当断不断", "势不两立"], ["小心翼翼", "闻名天下", "两手空空", "天知地知", "天下闻名"], ["不以为然", "泰然处之", "悔不当初", "可有可无", "自知之明"], ["心急如焚", "怒目而视", "言而有信", "心平气和", "等闲视之"], ["亭亭玉立", "举世闻名", "居高临下", "名震一时", "用武之地"], ["比翼双飞", "天上人间", "大同小异", "面目全非", "名满天下"], ["视死如归", "无事生非", "一往无前", "手足之情", "百无一用"], ["四平八稳", "一目了然", "小惩大戒", "落落大方", "万水千山"], ["一石二鸟", "一本万利", "欢天喜地", "三羊开泰", "始终如一"], ["万里长城", "面如土色", "万无一失", "旁若无人", "一面之交"], ["不近人情", "有气无力", "不明不白", "量力而为", "十面埋伏"], ["默默无闻", "能文能武", "独一无二", "挖空心思", "遥遥相对"], ["惨无人道", "死而复生", "天下为公", "自得其乐", "将门虎子"], ["面红耳赤", "两败俱伤", "吉人天相", "心细如发", "事不过三"], ["不屈不饶", "口是心非", "低三下四", "食古不化", "接二连三"], ["大风大浪", "心如死灰", "无风起浪", "积土成山", "安如泰山"], ["人以群分", "功成名就", "至高无上", "是非分明", "分寸之地"]];

          if (this.IdiomLevel >= IdiomData.length) {
            this.IdiomData = null;
            return;
          }

          this.IdiomData = IdiomData[this.IdiomLevel];
        } // /**影视关卡 */
        // FilmLevels: number = 0;
        // /**当前影视 */
        // FilmCurrent: string = "";
        // /**影视题目 */
        // FilmData: TypeFilmData = null;
        // /**第几个字 */
        // FilmIndex: number = 0;
        // /**完成数量 */
        // FilmCompletedQuantity: number = 0;
        // /**是否移动中 */
        // FilmMoveing: boolean = false;
        // /**初始化影视题目 */
        // InitFilmData() {
        //     this.GetIFilmData();
        //     this.FilmCurrent = "";
        //     this.FilmIndex = 0;
        //     this.FilmCompletedQuantity = 0;
        //     this.FilmMoveing = false;
        // }
        // /**检查影视进度 */
        // CheckFilmProgress(Char: string): { isValid: boolean, isComplete: boolean } {
        //     // 拼接新字符形成候选字符串
        //     const Candidate = this.FilmCurrent + Char;
        //     // 检查是否是完整成语
        //     const isComplete: boolean = Candidate === this.FilmData.Correct;
        //     // 检查是否有成语以这个候选字符串开头
        //     const isValid = this.FilmData.Correct?.startsWith(Candidate) ?? false;
        //     if (isValid) {
        //         this.FilmIndex++;
        //     }
        //     if (isComplete) {
        //         // 如果是完整成语，重置当前拼接状态
        //         this.FilmCurrent = "";
        //         this.FilmCompletedQuantity++;
        //         return { isValid: true, isComplete: true };
        //     } else if (isValid) {
        //         // 如果是有效部分，更新当前拼接状态
        //         this.FilmCurrent = Candidate;
        //         return { isValid: true, isComplete: false };
        //     } else {
        //         // 无效输入，重置当前拼接状态
        //         return { isValid: false, isComplete: false };
        //     }
        // }
        // /**获取影视数据 */
        // GetIFilmData() {
        //     const FilmData: TypeFilmData[] = [
        //         // === 简单===
        //         { Correct: "测试电影名字1", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影aa", Movie: "图片提示(图片的名字)" },
        //         { Correct: "测试电影名字2", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影ss", Movie: "图片提示(图片的名字)" },
        //         { Correct: "测试电影名字3", Wrong: "这段文字是用来凑数的好难编", Hints: "测试电影dd", Movie: "图片提示(图片的名字)" },
        //     ];
        //     if (this.FilmLevels >= FilmData.length) {
        //         this.FilmData = null;
        //         return;
        //     }
        //     this.FilmData = FilmData[this.FilmLevels];
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c167b7d86de7462d7c4171227ea422dc1c82ace4.js.map