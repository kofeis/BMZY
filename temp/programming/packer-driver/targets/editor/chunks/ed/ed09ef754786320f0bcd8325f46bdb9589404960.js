System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseLayer, audioManager, constants, msgcmd, gameModel, layerManager, _dec, _class, _crd, ccclass, property, LossLayer;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameModel(extras) {
    _reporterNs.report("gameModel", "../model/GameModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../../framework/manager/LayerManager", _context.meta, extras);
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
      audioManager = _unresolved_3.audioManager;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      msgcmd = _unresolved_5.msgcmd;
    }, function (_unresolved_6) {
      gameModel = _unresolved_6.gameModel;
    }, function (_unresolved_7) {
      layerManager = _unresolved_7.layerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34309tgXgtKXZLNvYwSMgEg", "LossLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LossLayer", LossLayer = (_dec = ccclass('LossLayer'), _dec(_class = class LossLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        onLoad() {
          super.onLoad();
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapLeave]);
        }

        initUI() {}

        onShowRecipeBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          super.closeLayer();
        }

        onBackBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick); // 通知GameLayer返回HomeLayer

          (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
            error: Error()
          }), gameModel) : gameModel).mapLeave({});
        }

        onRestartBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.GameLayer);
          super.closeLayer();
        }

        mapLeaveEventCb() {
          this.closeLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed09ef754786320f0bcd8325f46bdb9589404960.js.map