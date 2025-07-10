System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, find, BaseLayer, audioManager, constants, msgcmd, gameModel, layerManager, _dec, _class, _crd, ccclass, property, SettingLayer;

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
      Node = _cc.Node;
      find = _cc.find;
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

      _cclegacy._RF.push({}, "f81d3dsg0FKT6v4Eurw+HJ/", "SettingLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingLayer", SettingLayer = (_dec = ccclass('SettingLayer'), _dec(_class = class SettingLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          // 音乐
          this._musicNode = void 0;
          // 音效
          this._effectNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this._musicNode = this.getNodeByPath("UI/Music");
          this._effectNode = this.getNodeByPath("UI/Effect");

          this._musicNode.on(Node.EventType.TOUCH_END, this.switchMusicState, this);

          this._effectNode.on(Node.EventType.TOUCH_END, this.switchEffectState, this);
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapLeave]);
        }

        initUI() {
          let musicVol = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getMusiceVolume();
          find("ON", this._musicNode).active = musicVol > 0;
          find("OFF", this._musicNode).active = musicVol == 0;
          let effectVol = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getEffectVolume();
          find("ON", this._effectNode).active = effectVol > 0;
          find("OFF", this._effectNode).active = effectVol == 0;
          this.getNodeByPath("UI/BackBtn").active = this.layerData.isOpenFromMap;
          this.getNodeByPath("UI/RestartBtn").active = this.layerData.isOpenFromMap;
        }

        switchMusicState() {
          let musicVol = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getMusiceVolume();
          let onState = musicVol > 0;
          find("ON", this._musicNode).active = !onState;
          find("OFF", this._musicNode).active = onState;
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setMusicVolume(onState ? 0 : 1);
        }

        switchEffectState() {
          let effectVol = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getEffectVolume();
          let onState = effectVol > 0;
          find("ON", this._effectNode).active = !onState;
          find("OFF", this._effectNode).active = onState;
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setMusicVolume(onState ? 0 : 1);
        } // 重新开始


        onRestartBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
          super.closeLayer();
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.GameLayer);
        } // 返回主页


        onBackBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);

          if (!this.layerData.isOpenFromMap) {
            super.closeLayer();
          } else {
            // 通知GameLayer返回HomeLayer
            (_crd && gameModel === void 0 ? (_reportPossibleCrUseOfgameModel({
              error: Error()
            }), gameModel) : gameModel).mapLeave({});
          }
        }

        onCloseBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.btnClick);
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
//# sourceMappingURL=12fd57ffa16a6982a7d43183c10402899c3884e9.js.map