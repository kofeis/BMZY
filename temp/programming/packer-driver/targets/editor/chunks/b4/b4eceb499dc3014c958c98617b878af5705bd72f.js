System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, cocosUtil, resManager, LayerManager, _crd, layerManager;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../common/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "./ResManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      resManager = _unresolved_3.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "930dedB+vNNlqChPz2Wctv6", "LayerManager", undefined);

      __checkObsolete__(['find', 'Node', 'Prefab']);

      LayerManager = class LayerManager {
        constructor() {
          this.layer = void 0;
          this.layerHint = void 0;
          // 正在打开中的弹窗
          this.openingLayerMap = new Map();
          // 已经打开的弹窗
          this.openedLayerMap = new Map();
          // 弹窗名称->弹窗id数组
          this.layerNameIdArrMap = new Map();
          this.layerId = 0;
          // 缓存prefab
          this.layerPrefabs = {};
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new LayerManager();
          }

          return this._instance;
        }

        init(layer, layerHint) {
          this.layer = layer;
          this.layerHint = layerHint;
          this.openingLayerMap = new Map();
          this.openedLayerMap = new Map();
          this.layerNameIdArrMap = new Map();
          this.layerId = 0;
        }

        loadCommonLayers(bundleName, layerArr, onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr(bundleName, layerArr, Prefab, onProgress, prefabArr => {
            for (let prefab of prefabArr) {
              prefab.addRef();
            }

            if (onComplete) {
              onComplete(prefabArr);
            }
          });
        }

        getPopLayerParentNode() {
          return this.layer;
        } // 显示一条提示信息
        // createNotice(content: any) {
        //     let noticeLayer = find(constants.layers.NoticeLayer, this.layerHint);
        //     if (noticeLayer) {
        //         noticeLayer.getComponent(constants.layers.NoticeLayer)["createNotice"](content);
        //     }
        // }


        addLayerNameId(name, id) {
          let arr = this.layerNameIdArrMap.get(name);

          if (!arr) {
            arr = [];
            this.layerNameIdArrMap.set(name, arr);
          }

          arr.push(id);
        }

        removeLayerNameId(name, id) {
          let arr = this.layerNameIdArrMap.get(name);

          if (arr && arr.length > 0) {
            let index = arr.indexOf(id);

            if (index != -1) {
              arr.splice(index, 1);
            }
          }
        }

        openSingleLayer(layerName, obj, cb, openSuccessCb) {
          if (!obj) {
            obj = {};
          }

          let idArr = this.layerNameIdArrMap.get(layerName);

          if (!idArr || idArr.length <= 0) {
            this.openLayer(layerName, obj, cb, openSuccessCb);
            return;
          }

          let id = idArr[0];
          let layer = this.openedLayerMap.get(id);

          if (layer) {
            // 已显示，刷新数据
            layer.layerData = obj;
            layer.layerCb = cb;
            layer.onLoad();
            layer.onEnable();

            if (openSuccessCb) {
              openSuccessCb(layer);
            }

            return;
          }

          let layerParams = this.openingLayerMap.get(id);

          if (layerParams) {
            // 正准备显示，更新数据
            layerParams.layerName = layerName;
            layerParams.obj = obj;
            layerParams.cb = cb;
            layerParams.openSuccessCb = openSuccessCb;
          }
        }

        openLayer(layerName, obj, cb, openSuccessCb) {
          if (!obj) {
            obj = {};
          }

          this.layerId++;
          let layerId = this.layerId;
          let layerParams = {};
          layerParams.layerName = layerName;
          layerParams.obj = obj;
          layerParams.cb = cb;
          layerParams.openSuccessCb = openSuccessCb;
          this.openingLayerMap.set(layerId, layerParams);
          this.addLayerNameId(layerName, layerId); // let bundleName = constants.bundles.layer;

          let bundleName = "layer";
          let layerPath = layerName;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset(bundleName, layerPath, Prefab, null, (err, prefab) => {
            if (err) {
              console.error("LayerManager.openLayer error:" + err.message, layerName, err);
              return;
            }

            layerParams = this.openingLayerMap.get(layerId);

            if (!layerParams) {
              // 在打开之前，就已经被关闭了
              return;
            }

            let node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(prefab);
            let com = node.getComponent(layerName) || node.addComponent(layerName); // 加载每个layer特定需要的资源

            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAssetConfigArr(com.preLoadAssetConfigArr, false, null, () => {
              com.layerData = layerParams.obj;
              com.layerCb = layerParams.cb;
              com.layerName = layerParams.layerName;
              com.layerId = layerId;
              this.openingLayerMap.delete(layerId);
              this.openedLayerMap.set(layerId, com); // 添加到节点上后，会马上触发onLoad和onEnable回调，而start方法是在首次执行update之前被调用

              node.parent = this.layer;

              if (layerParams.openSuccessCb) {
                layerParams.openSuccessCb(com, prefab);
              }
            });
          });
        }

        closeLayer(layerId) {
          if (typeof layerId == "string") {
            let idArr = this.layerNameIdArrMap.get(layerId);

            if (!idArr || idArr.length <= 0) {
              return;
            }

            layerId = idArr[idArr.length - 1];
          }

          let layer = this.openedLayerMap.get(layerId);

          if (layer) {
            layer.node.destroy();
            this.openedLayerMap.delete(layerId);
            this.removeLayerNameId(layer.layerName, layerId);
          }

          let layerParams = this.openingLayerMap.get(layerId);

          if (layerParams) {
            this.openingLayerMap.delete(layerId);
            this.removeLayerNameId(layerParams.layerName, layerId);
          }
        }

        isShowingLayer(layerName) {
          let idArr = this.layerNameIdArrMap.get(layerName);

          if (!idArr || idArr.length <= 0) {
            return false;
          }

          return true;
        }

      };
      // 单例
      LayerManager._instance = void 0;

      _export("layerManager", layerManager = LayerManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4eceb499dc3014c958c98617b878af5705bd72f.js.map