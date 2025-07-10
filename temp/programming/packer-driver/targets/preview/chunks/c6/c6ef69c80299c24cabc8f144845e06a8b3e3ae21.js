System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventManager, _crd, eventManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43959RhsVFFcIgJ5+P2HQ8P", "EventManager", undefined);

      EventManager = class EventManager {
        constructor() {
          this.actions = {};
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new EventManager();
          }

          return this._instance;
        }

        // 注册监听事件
        register(cmd, cb, sender) {
          var arr = this.actions[cmd];

          if (!arr) {
            arr = [];
            this.actions[cmd] = arr;
          } // 避免重复添加


          for (var i in arr) {
            var _item = arr[i];

            if (_item.sender == sender) {
              return;
            }
          }

          var item = {};
          item.cb = cb;
          item.sender = sender;
          arr.push(item);
        } // 删除监听事件


        remove(cmd, cb, sender) {
          var arr = this.actions[cmd];

          if (!arr) {
            return;
          }

          var tmpArr = [];

          for (var i in arr) {
            var item = arr[i];

            if (item.cb == cb && item.sender == sender) {
              continue;
            }

            tmpArr.push(item);
          }

          this.actions[cmd] = tmpArr;
        }

        removeBySender(sender) {
          for (var ac in this.actions) {
            var arr = this.actions[ac];
            var tmpArr = [];

            for (var i in arr) {
              var item = arr[i];

              if (item.sender == sender) {
                continue;
              }

              tmpArr.push(item);
            }

            this.actions[ac] = tmpArr;
          }
        }

        emit(cmd, data) {
          var arr = this.actions[cmd];

          if (!arr) {
            return;
          }

          try {
            for (var i in arr) {
              var item = arr[i];
              var cb = item.cb;
              var sender = item.sender;
              var info = {
                cmd: cmd,
                data: data
              };
              cb.call(sender, info);
            }
          } catch (err) {
            console.error("eventManager send error: " + err.message, cmd, data, err);
          }
        }

      };
      EventManager._instance = void 0;

      _export("eventManager", eventManager = EventManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6ef69c80299c24cabc8f144845e06a8b3e3ae21.js.map