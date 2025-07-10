System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _crd, ccclass, property, OpenContext;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56fd2WGEPtFAr77rpqTSR1W", "OpenContext", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SubContextView', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OpenContext", OpenContext = (_dec = ccclass('OpenContext'), _dec(_class = class OpenContext extends Component {
        constructor(...args) {
          super(...args);
          this.openContext = void 0;
        }

        // 子域对象
        onLoad() {}

        start() {
          if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            // @ts-ignore
            this.openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查

            let testLevel = 5; // 测试数据

            console.error("测试数据");

            this._reportUserLevel(testLevel, () => {
              console.error("测试数据完成");
              this.openContext.postMessage({
                type: 'engine',
                event: 'level'
              }); // level为自定义key，如果没有特殊需求，建议直接用。否则你的变动比较大，调整wx-sub-project/index.js的对应的key和this._reportUserLevel的key都需要对齐
            });
          }
        }

        update(deltaTime) {}

        _reportUserLevel(level, listener, target) {
          // @ts-ignore
          wx.setUserCloudStorage({
            //调用微信接口上报关卡等级信息，用于好友圈排行
            KVDataList: [{
              key: 'level',
              value: `${level}`
            }],
            success: () => {
              listener == null || listener.apply(target);
            },
            fail: err => {
              console.log('report level error:', err);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39c0e5394b1fbda85cad74365d2f4e1f8cf82c41.js.map