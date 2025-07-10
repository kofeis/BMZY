System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ProgressBar, BaseLayer, constants, layerManager, utilTools, designManager, resManager, _dec, _class, _crd, ccclass, property, LoadingLayer;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../framework/common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../../framework/manager/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../framework/utils/UtilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../framework/manager/DesignManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../framework/manager/ResManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      layerManager = _unresolved_4.layerManager;
    }, function (_unresolved_5) {
      utilTools = _unresolved_5.utilTools;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      resManager = _unresolved_7.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdf4c28g9JLCLFdkHiTCV0P", "LoadingLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingLayer", LoadingLayer = (_dec = ccclass('LoadingLayer'), _dec(_class = class LoadingLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          // 加载进度
          this.progress = 0;
          this.progressBar = void 0;
          // 策划表
          this.designResProgress = 0;
          this.designResPercent = 0.1;
          this.bundleArrProgress = 0;
          this.bundleArrPercent = 0.8;
          // 模拟bundle加载回调
          this.bundleLoadingTime = -1;
          this.bundleLoadingMaxTime = 6;
          // 页面
          this.layerProgress = 0;
          this.layerPercent = 0.1;
        }

        onLoad() {
          super.onLoad();
          this.progressBar = this.getNodeByPath("UI/ProgressBar").getComponent(ProgressBar);
          this.setProgressBar(this.progressBar, this.progress);
          this.setString(this.getNodeByPath("Version"), (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).version); // TODO 初始化SDK
        }

        onEnable() {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).waterfall([(result, cb) => {
            this.loadDesignRes(cb);
          }, (result, cb) => {
            this.loadBundleRes(cb);
          }, (result, cb) => {
            this.loadCommonLayerRes(cb);
          }]);
        }

        loadDesignRes(cb) {
          console.info("loadDesignRes");
          (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).loadAllDesignTables((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.design, "design", percent => {
            this.designResProgress = percent;
          }, () => {
            this.designResProgress = 1;

            if (cb) {
              cb();
            }
          });
        } // 加载bundle资源


        loadBundleRes(cb) {
          console.info("loadBundleRes");
          this.bundleLoadingTime = 0;
          var bundleArr = [(_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.common, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.prefab, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.spine, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.ui];
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadBundleArr(bundleArr, percent => {
            this.bundleArrProgress = percent;
          }, () => {
            this.bundleArrProgress = 1;

            if (cb) {
              cb();
            }
          });
        } // 加载layer资源


        loadCommonLayerRes(cb) {
          console.info("loadCommonLayerRes");
          var arr = [(_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer];
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).loadCommonLayers((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer, arr, percent => {
            this.layerProgress = percent;
          }, () => {
            this.layerProgress = 1;

            if (cb) {
              cb();
            }
          });
        }

        update(dt) {
          if (!this.progressBar) {
            return;
          }

          if (this.bundleLoadingTime >= 0) {
            this.bundleLoadingTime += dt;
            var p = this.bundleLoadingTime / this.bundleLoadingMaxTime;

            if (p > 1) {
              p = 1;
            }

            if (p > this.bundleArrProgress) {
              this.bundleArrProgress = p;
            }

            if (this.bundleArrProgress >= 1) {
              // 去除小数
              this.bundleArrProgress = 1;
            }
          }

          var progress = this.calculateCurrentProcess();

          if (progress > this.progressBar.progress) {
            this.setProgressBar(this.progressBar, progress);
          }

          if (progress >= 1) {
            this.scheduleOnce(() => {
              this.openHomeLayer();
            }, 0.5);
          }
        } // 计算当前加载进度


        calculateCurrentProcess() {
          var progress = this.designResProgress * this.designResPercent + this.bundleArrProgress * this.bundleArrPercent + this.layerProgress * this.layerPercent; // 防止计算过后是0.999999的情况    

          progress = Math.ceil(progress * 10000) / 10000;
          return progress;
        }

        openHomeLayer() {
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c85aa136bfe16167a0ea90244407419f7d48962.js.map