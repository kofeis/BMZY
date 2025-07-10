System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, LocalStorageManager, _crd, localStorageManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30afel6oWRPHbjLcOUt6Cbn", "LocalStorageManager", undefined);

      __checkObsolete__(['sys']);

      LocalStorageManager = class LocalStorageManager {
        constructor() {
          this._dataKey = "";
          this._uidKey = "";
          this._openIdKey = "";
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new LocalStorageManager();
          }

          return this._instance;
        }

        setGameName(name) {
          this._dataKey = name + "_gameData";
          this._uidKey = name + "_uid";
          this._openIdKey = name + +"_openId";
        }

        getGameData() {
          let data = sys.localStorage.getItem(this._dataKey);

          if (data) {
            data = JSON.parse(data);
            return data;
          }

          return {};
        }

        setGameData(data) {
          sys.localStorage.setItem(this._dataKey, JSON.stringify(data));
        }

        set uid(uid) {
          sys.localStorage.setItem(this._uidKey, uid + "");
          console.info("save uid:" + uid);
        }

        get uid() {
          return sys.localStorage.getItem(this._uidKey);
        }

        set openId(openId) {
          sys.localStorage.setItem(this._openIdKey, openId + "");
          console.info("save openId：" + openId);
        }

        get openId() {
          return sys.localStorage.getItem(this._openIdKey);
        }

      };
      // 单例
      LocalStorageManager._instance = void 0;

      _export("localStorageManager", localStorageManager = LocalStorageManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=554207f9af5e064f576b63d49362890feb0b51d1.js.map