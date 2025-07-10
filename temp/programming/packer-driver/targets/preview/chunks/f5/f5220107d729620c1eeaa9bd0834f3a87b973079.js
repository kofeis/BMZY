System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, AudioSource, BaseLayer, cocosUtil, layerManager, audioManager, constants, msgcmd, _dec, _class, _crd, ccclass, property, GameLanuch;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "./framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "./framework/utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "./framework/manager/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "./framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "./game/data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "./game/data/MsgCmd", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      layerManager = _unresolved_4.layerManager;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      msgcmd = _unresolved_7.msgcmd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3699ecrTM9OYKQJyaSyab2l", "GameLanuch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameLanuch", GameLanuch = (_dec = ccclass('GameLanuch'), _dec(_class = class GameLanuch extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        onLoad() {
          super.onLoad();
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).init();
          (_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).init();
          super.onLoad();
          var layer = find("Layer", this.node);
          var layerHint = find("LayerHint", this.node);
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).init(layer, layerHint); // 设置音频播放组件

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setMusicAudioSource(this.getNodeByPath("Audio/Music").getComponent(AudioSource));
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setEffectAudioSource(this.getNodeByPath("Audio/Effect").getComponent(AudioSource)); // 添加LoadingLayer脚本

          var loadingName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.LoadingLayer;
          this.getNodeByPath(loadingName).addComponent(loadingName); // let noticeName = constants.layers.NoticeLayer;
          // find(noticeName, layerHint).addComponent(noticeName);
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5220107d729620c1eeaa9bd0834f3a87b973079.js.map