System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, game, js, sys, msgcmd, audioManager, eventManager, designManager, constants, UserData, _crd;

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../framework/manager/DesignManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/Constants", _context.meta, extras);
  }

  _export("UserData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      game = _cc.game;
      js = _cc.js;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      msgcmd = _unresolved_2.msgcmd;
    }, function (_unresolved_3) {
      audioManager = _unresolved_3.audioManager;
    }, function (_unresolved_4) {
      eventManager = _unresolved_4.eventManager;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ea1c7cZv1HP6UqQbSRN2QV", "UserData", undefined);

      __checkObsolete__(['Game', 'game', 'js', 'sys']);

      _export("UserData", UserData = class UserData {
        constructor() {
          this.$localKey = "UserData";
          this.$playerData = {};
          // 当前解锁到哪关
          this.$openLevel = 1;
          // 消除道具数量
          this.$skillClearNum = 0;
          // 换位道具数量
          this.$skillMoveNum = 0;
          // 重发道具数量
          this.$skillRefreshNum = 0;
        }

        static getInstance() {
          if (this._instance == null) {
            this._instance = new UserData();

            this._instance.onInit();
          }

          return this._instance;
        }

        onInit() {
          this.getLocalData();
          this.initEvent();
          this.setBaseConfig();
        }

        getLocalData() {
          let obj = sys.localStorage.getItem(this.$localKey);

          if (obj) {
            console.log("加载本地数据", obj);
            js.mixin(this, JSON.parse(obj));
          } else {
            console.log("本地数据为空");
            this.setConfig();
          }
        }

        setBaseConfig() {}

        setConfig() {}

        set playerData(data) {
          this.$playerData = data;
        }

        get playerData() {
          return this.$playerData;
        }

        set openLevel(level) {
          this.$openLevel = level;
        }

        get openLevel() {
          return this.$openLevel;
        }

        addSkillClear() {
          this.$skillClearNum += 1;
        }

        useSkillClear() {
          this.$skillClearNum -= 1;
        }

        addSkillMove() {
          this.$skillMoveNum += 1;
        }

        useSkillRefresh() {
          this.$skillRefreshNum -= 1;
        } // 保存关卡完成情况的数据


        setLevelData(data) {
          // let row = designManager.getRowById(constants.tableNames.map, data.Level);
          // if (row.type != constants.mapTypes.main) {
          //     return;
          // }
          // let index = data.Level - 1
          // if (index < 0) {
          //     index = 0
          // }
          // if (this.$levelData[index] == null) {
          //     this.$levelData[index] = data
          // } else {
          //     if (data.Score > this.$levelData[index].Score) {
          //         this.$levelData[index].Score = data.Score
          //     }
          // }
          // // 通关后设置解锁下一关
          // if (data.IsWin) {
          //     if (this.$openLevel <= data.Level) {
          //         let nextId = this.$openLevel + 1;
          //         if (designManager.getRowById(constants.tableNames.map, nextId)) {
          //             this.$openLevel++
          //             this.$curMap = this.$openLevel
          //         }
          //     }
          // }
          let nextId = this.$openLevel + 1;

          if ((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableNames.food, nextId)) {
            console.log("update openLevel", this.$openLevel);
            this.$openLevel++;
          }
        } // 注冊事件


        initEvent() {
          game.on(Game.EVENT_HIDE, () => {
            // @ts-ignore
            if (this.resetAccount) {
              return;
            }

            this.saveData();
          });
          game.on(Game.EVENT_SHOW, () => {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).gameOnShow();
          });
        }

        saveData() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).emit((_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).saveDataBefore);
          let obj = js.createMap(true);
          ;

          for (let key in this) {
            if (key.indexOf('$') != -1) {
              obj[key] = this[key];
            }
          }

          sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).emit((_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).saveDataAfter);
        } // 清除账号数据（测试使用）


        clearAccountData() {
          sys.localStorage.removeItem(this.$localKey); // 重新加载一次

          this.onInit();
        }

      });

      // 单例
      UserData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd285c4af2d5beab3cad2db785d4ec4ec878fd38.js.map