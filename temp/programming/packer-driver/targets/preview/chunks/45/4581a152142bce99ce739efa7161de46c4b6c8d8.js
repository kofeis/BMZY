System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Game_Script, _dec, _class, _crd, ccclass, property, PanelTemplate;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGame_Script(extras) {
    _reporterNs.report("Game_Script", "../Game_Script", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResoure_Data(extras) {
    _reporterNs.report("Resoure_Data", "../../Tool/Resoure_Data", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Game_Script = _unresolved_2.Game_Script;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4013e4S9w5GV7NEA2KiPics", "PanelTemplate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelTemplate", PanelTemplate = (_dec = ccclass('PanelTemplate'), _dec(_class = class PanelTemplate extends Component {
        constructor() {
          super(...arguments);
          this.Resoure_Data = null;
          this.Game_Script = null;

          /**是否初始化 */
          this.IsInit = false;

          /**关卡等级 */
          this.Level = null;

          /**分数 */
          this.Score = null;

          /**目标分数 */
          this.ScoreTarget = null;

          /**时间 */
          this.Time = null;

          /**目标时间 */
          this.TimeTarget = null;

          /**胜利面板 */
          this.PanelVictory = null;

          /**失败面板 */
          this.PanelFail = null;

          /**设置按钮 */
          this.BtnSetting = null;

          /**设置面板 */
          this.PanelSetting = null;

          /**提示面板 */
          this.PanelTip = null;

          /**提示按钮 */
          this.BtnTip = null;

          /**关闭提示按钮 */
          this.BtnTipClose = null;

          /**通关按钮 */
          this.BtnNext = null;
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.Game_Script = find("Canvas/InterfaceGame").getComponent(_crd && Game_Script === void 0 ? (_reportPossibleCrUseOfGame_Script({
              error: Error()
            }), Game_Script) : Game_Script);
            _this.Resoure_Data = _this.Game_Script.Resoure_Data;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4581a152142bce99ce739efa7161de46c4b6c8d8.js.map