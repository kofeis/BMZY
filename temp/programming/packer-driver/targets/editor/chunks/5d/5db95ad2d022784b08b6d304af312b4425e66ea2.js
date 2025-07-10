System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, resManager, DesignManager, _crd, designManager;

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
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      resManager = _unresolved_2.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09effg/TqNGmKe+70krGiBZ", "DesignManager", undefined);

      __checkObsolete__(['JsonAsset']);

      DesignManager = class DesignManager {
        constructor() {
          // 原始对象 {表名:[记录1]]}
          this.tb2Arr = {};
          // id索引(唯一)对象 {表名:{id:记录}}
          this.tb2Obj = {};
          // type索引(一对多) {表名:{type:[记录]}
          this.tbType2Arr = {};
          // 零散数据表
          this.config = {};
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new DesignManager();
          }

          return this._instance;
        }

        loadAllDesignTables(bundleName, path, onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset(bundleName, path, JsonAsset, percent => {
            if (onProgress) {
              onProgress(percent);
            }
          }, (err, asset) => {
            if (err) {
              return;
            }

            this.tb2Arr = asset.json; // 数据格式化

            for (let tbName in this.tb2Arr) {
              let tbData = this.tb2Arr[tbName];
              this.initTable(tbName, tbData);
            } // 释放资源


            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).releaseAsset(asset);

            if (onComplete) {
              onComplete();
            }
          });
        }

        initTable(tbName, tbData) {
          console.info("init table", tbName);
          this.tb2Obj[tbName] = {};

          for (let i in tbData) {
            let row = tbData[i]; // id索引

            this.tb2Obj[tbName][row.id] = row;

            if (row.hasOwnProperty("type") && row.type != "" && row.type != null) {
              // type索引
              if (!this.tbType2Arr[tbName]) {
                this.tbType2Arr[tbName] = {};
              }

              if (!this.tbType2Arr[tbName][row.type]) {
                this.tbType2Arr[tbName][row.type] = [];
              }

              let tmpArr = this.tbType2Arr[tbName][row.type];
              tmpArr.push(row);
            }

            if (tbName == "config") {
              this.config[row.name] = row.val || row.val2;
            }
          }
        }

        getTable(tableName) {
          return this.tb2Arr[tableName];
        }

        getRowById(tableName, id) {
          return this.tb2Obj[tableName][id];
        }

        getRowsByType(tableName, type) {
          if (this.tbType2Arr[tableName] && this.tbType2Arr[tableName][type]) {
            return this.tbType2Arr[tableName][type];
          }

          return [];
        }

        getLastRow(tableName) {
          let tb = this.getTable(tableName);
          return tb[tb.length - 1];
        }

        getFirstIdByType(type) {
          return type * 10 + 1;
        }

      };
      // 单例
      DesignManager._instance = void 0;

      _export("designManager", designManager = DesignManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5db95ad2d022784b08b6d304af312b4425e66ea2.js.map