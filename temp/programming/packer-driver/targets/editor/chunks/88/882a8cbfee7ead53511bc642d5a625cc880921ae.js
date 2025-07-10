System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseLayer, constants, audioManager, gameModel, msgcmd, UserData, designManager, tweenUtil, _dec, _class, _crd, ccclass, property, HomeLayer;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameModel(extras) {
    _reporterNs.report("gameModel", "../model/GameModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../framework/manager/DesignManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftweenUtil(extras) {
    _reporterNs.report("tweenUtil", "../../framework/utils/TweenUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      gameModel = _unresolved_5.gameModel;
    }, function (_unresolved_6) {
      msgcmd = _unresolved_6.msgcmd;
    }, function (_unresolved_7) {
      UserData = _unresolved_7.UserData;
    }, function (_unresolved_8) {
      designManager = _unresolved_8.designManager;
    }, function (_unresolved_9) {
      tweenUtil = _unresolved_9.tweenUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cf33USkt5JmIy4HyZdWicH", "HomeLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeLayer", HomeLayer = (_dec = ccclass('HomeLayer'), _dec(_class = class HomeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this._mapIcon = void 0;
        }

        onLoad() {
          super.onLoad();
          this._mapIcon = this.getNodeByPath("UI/Region/Icon");
        }

        onEnable() {
          super.onEnable();
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playMusic((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.bgMusic);
          super.addEventArr([(_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapEnter]);
        }

        initUI() {
          this.initMapLevel();
        }

        initMapLevel() {
          // let mapData = designManager.getTable(constants.tableNames.map);
          // let curMapId = RoleData.getInstance().getCurMap();
          // let openLevel = RoleData.getInstance().openLevel;
          (_crd && tweenUtil === void 0 ? (_reportPossibleCrUseOftweenUtil({
            error: Error()
          }), tweenUtil) : tweenUtil).tweenUpDown(this._mapIcon, 15);
        }

        onSettingBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SettingLayer);
        }

        onStartBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          let lastRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getLastRow((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.food);

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().openLevel > lastRow.type) {
            // TODO 处理通关情形
            console.log("通关");
            return;
          }

          (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).enterMapWithMapId((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().openLevel);
        }

        mapEnterEventCb(data) {
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TransLayer);
          (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).loadMapRes(percent => {// TODO 刷新加载进度
          }, () => {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.GameLayer, data, null, () => {
              this.closeLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.TransLayer);
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=882a8cbfee7ead53511bc642d5a625cc880921ae.js.map