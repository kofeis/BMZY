System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, msgcmd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aa7co8iE1B/JZtc0AE/FdJ", "MsgCmd", undefined);

      _export("msgcmd", msgcmd = {
        refreshAssets: 101,
        saveDataBefore: 102,
        saveDataAfter: 103,
        mapEnter: 104,
        mapLeave: 105,
        cmd2KeyObj: {},
        init: () => {
          for (var key in msgcmd) {
            var ac = msgcmd[key];

            if (typeof ac != 'number') {
              continue;
            }

            msgcmd.cmd2KeyObj[ac] = key;
          }

          console.info(msgcmd.cmd2KeyObj);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b084bc36940cf3710789333d6c8cd486bee49a3.js.map