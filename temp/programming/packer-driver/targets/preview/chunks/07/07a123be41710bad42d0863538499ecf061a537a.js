System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, constants;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25a1eAcRyxGUIz3zTWIMkG8", "Constants", undefined);

      _export("constants", constants = {
        gameName: "MeiWeiDieDieXiao",
        version: "0.1",
        // 音频资源
        audioNames: {
          btnClick: "btn_click",
          bgMusic: "bgm",
          win: "win",
          fail: "fail",
          selectPile: "select_pile",
          putPile: "put_pile",
          eliminatePile: "eliminate_pile",
          mergePile: "merge_pile",
          pileIn: "pile_in"
        },
        // 道具类型
        itemTypes: {
          // 消除道具
          clear: 1,
          // 移动道具
          move: 2,
          // 刷新道具
          refresh: 3
        },
        bundles: {
          common: "common",
          audio: "audio",
          layer: "layer",
          prefab: "prefab",
          spine: "spine",
          ui: "ui",
          design: "design"
        },
        tableNames: {
          level: "level",
          material: "material",
          food: "food"
        },
        layers: {
          LoadingLayer: "LoadingLayer",
          HomeLayer: "HomeLayer",
          TransLayer: "TransLayer",
          GameLayer: "GameLayer",
          SettingLayer: "SettingLayer",
          PassLayer: "PassLayer",
          LossLayer: "LossLayer",
          GetFoodLayer: "GetFoodLayer",
          FoodListLayer: "FoodListLayer"
        },
        colors: {
          yin: "#666666",
          white: "#ffffff",
          green: "#38ff38",
          blue: "#1096fd",
          purple: "#f153ff"
        },
        cardColors: ["#ffffff", "#b8eefd", "#67d267", "#c4f282", "#faf9a8", "#fdd7c3", "#ff9166", "#e4c1f6", "#96a6ee", "#f686c2", "#eda452", "#6dc3ed", "#fce097", "#b77ddd", "#92bb34", "#ffc484", "#ff9393"]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07a123be41710bad42d0863538499ecf061a537a.js.map