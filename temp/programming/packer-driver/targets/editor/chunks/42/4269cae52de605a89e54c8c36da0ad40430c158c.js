System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, msgcmd, eventManager, resManager, constants, designManager, utilTools, GameModel, _crd, ccclass, property, gameModel;

  function _reportPossibleCrUseOfGameLayer(extras) {
    _reporterNs.report("GameLayer", "../layer/GameLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../framework/manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../framework/manager/DesignManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../framework/utils/UtilTools", _context.meta, extras);
  }

  _export("GameModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      msgcmd = _unresolved_2.msgcmd;
    }, function (_unresolved_3) {
      eventManager = _unresolved_3.eventManager;
    }, function (_unresolved_4) {
      resManager = _unresolved_4.resManager;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      utilTools = _unresolved_7.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "096fex03URNVauAmVBbvpG4", "GameModel", undefined);

      __checkObsolete__(['_decorator', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameModel", GameModel = class GameModel {
        constructor() {
          this.gameLayer = void 0;
          // 六边形Prefab
          this.hexagonPrefabs = {};
          // 当前哪一关
          this.mapId = void 0;
          // 食材列表
          this.mapRecipeItemArr = void 0;
          this.mapFoodRow = void 0;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new GameModel();
          }

          return this._instance;
        }

        setCompoments(gameLayer) {
          this.gameLayer = gameLayer;
        }

        mapLeave(data) {
          console.info("map leave");
          this.mapId = 0;
          this.mapRecipeItemArr = [];
          this.mapFoodRow = null;
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).emit((_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapLeave, data);
        }

        enterMapWithMapId(mapId) {
          this.mapId = mapId;
          this.createRecipeItemArr();
          this.mapFoodRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.food, (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getFirstIdByType(mapId));
          console.log("mapId", this.mapId, "mapRecipeItemArr", this.mapRecipeItemArr, "mapFoodRow", this.mapFoodRow);
          let obj = {};
          obj.mapId = mapId;
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).emit((_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).mapEnter, obj);
        } // 生成食材列表


        createRecipeItemArr() {
          this.mapRecipeItemArr = [];
          let arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.material, this.mapId);

          if (!arr) {
            return;
          }

          arr.forEach(row => {
            let recipeItem = {};
            recipeItem.id = row.id;
            recipeItem.row = row;
            recipeItem.targetClearNum = row.num;
            this.mapRecipeItemArr.push(recipeItem);
          });
        }

        getRecipeItemById(id) {
          let index = this.mapRecipeItemArr.findIndex(e => {
            return e.id == id;
          });
          return index != -1 ? this.mapRecipeItemArr[index] : null;
        } // 进入关卡之前，加载必要的资源


        loadMapRes(progressCb, endCb) {
          this.loadHexagonAndOtherRes(progressCb, endCb);
        } // 统一处理加载进度    


        loadHexagonAndOtherRes(progressCb, endCb) {
          let sum = 2;
          let onePercent = 1 / sum;
          let hexagonPercent = 0;
          let otherPercent = 0;

          let tmpFunc = () => {
            let p = hexagonPercent * onePercent + otherPercent * onePercent;
            progressCb(p);
          };

          let tmpFunc2 = () => {
            if (hexagonPercent + otherPercent == sum) {
              endCb();
            }
          };

          this.loadHexagonRes(percent => {
            hexagonPercent = percent;
            tmpFunc();
          }, () => {
            hexagonPercent = 1;
            tmpFunc2();
          });
          this.loadOtherRes(percent => {
            otherPercent = percent;
            tmpFunc();
          }, () => {
            otherPercent = 1;
            tmpFunc2();
          });
        } // 加载六边形资源


        loadHexagonRes(progressCb, endCb) {
          this.hexagonPrefabs = {};
          let pathArr = [];
          let arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.material, this.mapId);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, row => {
            if (pathArr.indexOf(row.prefab) == -1) {
              pathArr.push(row.prefab);
            }
          });
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.prefab, pathArr, Prefab, progressCb, prefabArr => {
            prefabArr.forEach(prefab => {
              let name = prefab.name;
              this.hexagonPrefabs[name] = prefab;
              console.log("load hexagon prefab", name);
            });
            endCb();
          });
        } // 其他碎片资源


        loadOtherRes(progressCb, endCb) {
          endCb();
        }

        getHexagonPrefab(id) {
          return this.hexagonPrefabs["Hexagon"];
        }

      });

      // 单例
      GameModel._instance = void 0;

      _export("gameModel", gameModel = GameModel.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4269cae52de605a89e54c8c36da0ad40430c158c.js.map