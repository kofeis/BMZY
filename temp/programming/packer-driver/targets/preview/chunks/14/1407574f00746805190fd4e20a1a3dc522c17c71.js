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

          /**数学消消关卡 */
          this.MathMatchLevel = 0;

          /**数学消消分数 */
          this.MathMatchScore = 0;
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
          var PropNum = this.Resoure_Data.Data_Get("PropNum");

          if (PropNum == null || PropNum == undefined) {
            this.PropNum = 0;
            this.Resoure_Data.Data_Set("PropNum", this.PropNum);
            PropNum = this.Resoure_Data.Data_Get("PropNum");
          }

          this.PropNum = PropNum;
          /**数学消消关卡 */

          var MathMatchLevel = this.Resoure_Data.Data_Get("MathMatchLevel");

          if (MathMatchLevel == null || MathMatchLevel == undefined) {
            this.MathMatchLevel = 0;
            this.Resoure_Data.Data_Set("MathMatchLevel", this.MathMatchLevel);
            MathMatchLevel = this.Resoure_Data.Data_Get("MathMatchLevel");
          }

          this.MathMatchLevel = MathMatchLevel;
          /**数学消消分数 */

          var MathMatchScore = this.Resoure_Data.Data_Get("MathMatchScore");

          if (this.MathMatchScore == null || MathMatchScore == undefined) {
            this.MathMatchScore = 0;
            this.Resoure_Data.Data_Set("MathMatchScore", this.MathMatchScore);
            MathMatchScore = this.Resoure_Data.Data_Get("MathMatchScore");
          }

          this.MathMatchScore = MathMatchScore;
        }
        /**保存数据 */


        DataSet() {
          console.log("保存数据");
          /**数学消消 */

          this.Resoure_Data.Data_Set("MathMatchLevel", this.MathMatchLevel);
          this.Resoure_Data.Data_Set("MathMatchScore", this.MathMatchScore);
          this.Resoure_Data.Data_Set("PropNum", this.PropNum);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1407574f00746805190fd4e20a1a3dc522c17c71.js.map