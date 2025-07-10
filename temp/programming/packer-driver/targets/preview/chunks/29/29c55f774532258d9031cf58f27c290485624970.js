System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, find, Label, Node, ProgressBar, RichText, ScrollView, sp, Sprite, layerManager, ResLoader, resManager, eventManager, msgcmd, constants, cocosUtil, audioManager, ItemLayer, ScrollViewUtil, tweenUtil, _dec, _class, _crd, ccclass, property, BaseLayer;

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../manager/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetConfig(extras) {
    _reporterNs.report("AssetConfig", "../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgcmd(extras) {
    _reporterNs.report("msgcmd", "../../game/data/MsgCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../game/data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLayer(extras) {
    _reporterNs.report("ItemLayer", "./ItemLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollViewUtil(extras) {
    _reporterNs.report("ScrollViewUtil", "./ScrollViewUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOftweenUtil(extras) {
    _reporterNs.report("tweenUtil", "../utils/TweenUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      RichText = _cc.RichText;
      ScrollView = _cc.ScrollView;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      layerManager = _unresolved_2.layerManager;
    }, function (_unresolved_3) {
      ResLoader = _unresolved_3.ResLoader;
      resManager = _unresolved_3.resManager;
    }, function (_unresolved_4) {
      eventManager = _unresolved_4.eventManager;
    }, function (_unresolved_5) {
      msgcmd = _unresolved_5.msgcmd;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      cocosUtil = _unresolved_7.cocosUtil;
    }, function (_unresolved_8) {
      audioManager = _unresolved_8.audioManager;
    }, function (_unresolved_9) {
      ItemLayer = _unresolved_9.ItemLayer;
    }, function (_unresolved_10) {
      ScrollViewUtil = _unresolved_10.ScrollViewUtil;
    }, function (_unresolved_11) {
      tweenUtil = _unresolved_11.tweenUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b087uKj/xKFaKM/aE3/Oq9", "BaseLayer", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'UITransform', 'EventTouch', 'find', 'Label', 'Node', 'Prefab', 'ProgressBar', 'ResolutionPolicy', 'RichText', 'ScrollView', 'sp', 'Sprite', 'SpriteFrame', 'v3', 'view', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseLayer", BaseLayer = (_dec = ccclass('BaseLayer'), _dec(_class = class BaseLayer extends Component {
        constructor() {
          super(...arguments);
          this.layerName = "DefaultLayer";
          // 展示界面携带的数据和回调
          this.layerData = {};
          this.layerCb = null;
          this.layerId = -1;
          // {路径:节点对象}
          this.pathNodeObj = new Map();
          // 资源管理类
          this.resLoader = new (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
            error: Error()
          }), ResLoader) : ResLoader)();
          // 是否开启内存管理
          this.autoReleaseAsset = false;
          // 特定预加载的资源
          this.preLoadAssetConfigArr = void 0;
          // 监听事件
          this.eventArr = void 0;
          // 控制是否打开秒级的update
          this.openUpdateSecond = false;
          this.updateSecondInterval = void 0;
          // 按钮是否响应点击
          this.openAllBtnInteractive = true;
          // 按钮长按功能开关
          this.openBtnLongPress = false;
          // 多长时间后开始触发
          this.btnLongTrigTime = 0.5;
          this.btnLognTrigTimeCount = 0;
          // 触发次数统计
          this.btnLongTrigCount = 0;
          // 长按按钮节点对象
          this.btnLongNode = null;
          // 控制是否显示banner广告
          this.isShowBannerAd = false;
        }

        onLoad() {
          this.addPathNode(this.node, "");
        }

        onEnable() {
          this.addButtonListener(this.node);
          this.initUI();
          this.refreshRedPoint();

          if (this.openUpdateSecond) {
            if (this.updateSecondInterval) {
              clearInterval(this.updateSecondInterval);
            }

            this.updateSecondInterval = setInterval(() => {
              this.updateSecond();
            }, 1000);
            this.updateSecond();
          }

          if (this.isShowBannerAd) {// adManager.showBannerAd()
          } // eventManager.register(msgcmd.refreshRedPoint, this.refreshRedPoint, this);

        }

        updateSecond() {}

        refreshRedPoint() {}

        initUI() {}

        onDisable() {
          this.removeEventArr(this.eventArr);

          if (this.updateSecondInterval) {
            clearInterval(this.updateSecondInterval);
            this.updateSecondInterval = undefined;
          }

          if (this.isShowBannerAd) {// adManager.hideBannerAd()
          } // eventManager.remove(msgcmd.refreshRedPoint, this.refreshRedPoint, this);

        }

        onDestroy() {
          switch (this.layerName) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.HomeLayer:
              // 这些UI不释放资源
              return;

            default:
              break;
          }

          if (this.autoReleaseAsset) {
            this.resLoader.releaseAllAsset();
          }
        } // /**
        //  * 缩放背景图，达到满屏显示，背景图部分内容超出屏幕也没事
        //  * @param node 背景图节点
        //  */
        // screenAdapterBg(node: Node) {
        //     if (!cocosUtil.isValid(node)) {
        //         return;
        //     }
        //     let widget = node.getComponent(Widget);
        //     if (widget) {
        //         widget.enabled = false;
        //     }
        //     let scale = cocosUtil.getScreenBgAdapterScale();
        //     let scaleX = node.getScale().x;
        //     let scaleY = node.getScale().y;
        //     node.setScale(v3(scaleX * scale, scaleY * scale, 1));
        // }


        addPathNode(node, path) {
          if (node != this.node) {
            this.pathNodeObj.set(path, node);
          }

          if (path) {
            path += "/";
          }

          var chs = node.children;

          for (var i = 0, len = chs.length; i < len; i++) {
            var pNode = chs[i];
            this.addPathNode(pNode, path + pNode.name);
          }
        }

        getNodeByPath(path) {
          var node = this.pathNodeObj.get(path);

          if (node) {
            return node;
          }

          node = find(path, this.node);

          if (node) {
            this.pathNodeObj.set(path, node);
            return node;
          }

          return null;
        }

        addButtonListener(node) {
          if (node.getComponent(Button)) {
            node.on("click", this.preOnButtonClick, this);

            if (this.openBtnLongPress) {
              node.on(Node.EventType.TOUCH_START, this.preOnButtonTouchStart, this);
              node.on(Node.EventType.TOUCH_MOVE, this.preOnButtonTouchMove, this);
              node.on(Node.EventType.TOUCH_END, this.preOnButtonTouchEnd, this);
              node.on(Node.EventType.TOUCH_CANCEL, this.preOnButtonTouchCancel, this);
            }
          }

          if (node.getComponent(ScrollView)) {
            var name = node.name;

            if (name.indexOf("NoUtil") == -1 && !node.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
              error: Error()
            }), ScrollViewUtil) : ScrollViewUtil)) {
              node.addComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
                error: Error()
              }), ScrollViewUtil) : ScrollViewUtil);
            }
          }

          var chs = node.children;

          for (var i = 0, max = chs.length; i < max; i++) {
            var ch = chs[i];
            this.addButtonListener(ch);
          }
        }

        preOnButtonClick(btn) {
          if (!this.openAllBtnInteractive) {
            return;
          }

          if (this.openBtnLongPress && this.btnLongTrigCount > 0) {
            this.btnLongTrigCount = 0;
            return;
          }

          var node = btn.node;
          var name = node.name;
          console.info(this.layerName + " onButtonClick " + name);

          if (name.length >= 2) {
            var first = name.substring(0, 1);
            var remain = name.substring(1, name.length);
            var key = "on" + first.toLocaleUpperCase() + remain + "Click";

            if (this[key]) {
              this[key](node);
            }
          }

          if (!node.hasPlayAudio) {// 如果还没播放按钮音效，就播放通用按钮音效
          }
        }

        preOnButtonLongClick(btnNode) {
          if (!this.openAllBtnInteractive) {
            return;
          }

          var name = btnNode.name;
          console.info(this.layerName + " onButtonLongClick " + name);

          if (this["onButtonLongClick"]) {
            return this["onButtonLongClick"](btnNode, name);
          }

          if (name.length >= 2) {
            var top = name.substring(0, 1);
            var remain = name.substring(1, name.length);
            var key = "onLongClick" + top.toLocaleUpperCase() + remain;

            if (this[key]) {
              return this[key](btnNode);
            }
          }

          return false;
        }

        preOnButtonTouchStart(event) {
          var btnNode = event.target;
          var touch = event.touch;
          this.btnLongNode = btnNode;
          this.btnLognTrigTimeCount = 0;
          this.btnLongTrigCount = 0;
        }

        preOnButtonTouchMove(event) {}

        preOnButtonTouchEnd(event) {
          this.btnLongNode = null;
        }

        preOnButtonTouchCancel(event) {
          this.btnLongNode = null;
        }

        isShowingLayer(layerName) {
          return (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).isShowingLayer(layerName);
        }

        playAudioEffect(name, btnNode, delayTime) {
          if (!delayTime) {
            delayTime = 0;
          }

          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(btnNode)) {
            btnNode.hasPlayAudio = true;
          }

          this.scheduleOnce(() => {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect(name);

            if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(btnNode)) {
              btnNode.hasPlayAudio = undefined;
            }
          }, delayTime);
        }

        openLayer(layerName, data, cb, showCb) {
          console.info("open layer", layerName); // 默认每个弹窗只允许同时显示一个

          if (typeof data == "function") {
            cb = data;
            data = null;
          }

          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).openSingleLayer(layerName, data, cb, (baseLayer, prefab) => {
            if (baseLayer.autoReleaseAsset && baseLayer.resLoader) {
              baseLayer.resLoader.addAsset(prefab);

              if (baseLayer.preLoadAssetConfigArr) {
                baseLayer.preLoadAssetConfigArr.forEach(assetConfig => {
                  if (assetConfig.asset) {
                    baseLayer.resLoader.addAsset(assetConfig.asset);
                  }
                });
              }
            }

            if (showCb) {
              showCb();
            }
          });
        }

        closeLayer(layerId) {
          if (!layerId) {
            layerId = this.layerId;
          }

          if (layerId && layerId != -1) {
            (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
              error: Error()
            }), layerManager) : layerManager).closeLayer(layerId);
            return;
          }

          this.node.destroy();
        }

        addEventArr(arr) {
          this.eventArr = arr;

          for (var i in arr) {
            var val = arr[i];

            if (!val) {
              continue;
            }

            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).register(val, this.preProcessEvent, this);
          }
        }

        removeEventArr(arr) {
          for (var i in arr) {
            var val = arr[i];

            if (!val) {
              continue;
            }

            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).remove(val, this.preProcessEvent, this);
          }
        }

        preProcessEvent(event) {
          var cmd = event.cmd;
          var data = event.data;
          var key = (_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).cmd2KeyObj[cmd] + "EventCb";

          if (this[key]) {
            this[key].call(this, data);
          }

          console.log("event callback function not found", key, cmd, (_crd && msgcmd === void 0 ? (_reportPossibleCrUseOfmsgcmd({
            error: Error()
          }), msgcmd) : msgcmd).cmd2KeyObj);
        } // createNotice(content) {
        //     layerManager.createNotice(content);
        // }


        setProgressBar(progressBar, percent) {
          if (progressBar instanceof Node) {
            progressBar = progressBar.getComponent(ProgressBar);
          }

          if (progressBar) {
            progressBar.progress = percent;
          }
        }

        setNumString(node, num) {
          num = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).formatNum(num);
          this.setString(node, num);
        }

        setItemLayer(node, arr, cb) {
          var itemLayer = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(node, _crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          itemLayer.initUI(this, arr, cb);
        }

        setNumItemLayer(node, num, cb) {
          var arr = [];

          for (var i = 0; i < num; i++) {
            arr.push(i + 1);
          }

          var itemLayer = node.getComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);

          if (!itemLayer) {
            itemLayer = node.addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
              error: Error()
            }), ItemLayer) : ItemLayer);
          }

          itemLayer.initUI(this, arr, (itemUI, item, index) => {
            if (cb) {
              cb(itemUI, item, index);
            }
          });
        } // 屏幕振动


        shakeScreen() {
          (_crd && tweenUtil === void 0 ? (_reportPossibleCrUseOftweenUtil({
            error: Error()
          }), tweenUtil) : tweenUtil).tweenShakeNode((_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).getPopLayerParentNode());
        }

        setString(node, info) {
          if (!node) {
            console.info("setString error: node is null", info);
            return;
          }

          info = info + "";
          var label = node.getComponent(Label);

          if (label) {
            label.string = info;
            return;
          }

          var rich = node.getComponent(RichText);

          if (rich) {
            rich.string = info;
            return;
          }
        } // name可以指定bundle


        setSpriteFrame(node, name, showCb, bundleName1) {
          if (bundleName1 === void 0) {
            bundleName1 = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.ui;
          }

          if (!name) {
            return;
          }

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var sprite = node.getComponent(Sprite);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(sprite)) {
            return;
          }

          sprite.enabled = false;
          node["loadName"] = name;
          var bundleName = bundleName1;
          var d = name.split("_");
          var path = d[0] + "/" + name;
          var arr = name.split("|");

          if (arr.length >= 2) {
            bundleName = arr[0];
            path = arr[1];
          }

          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpriteFrame(bundleName, path, (err, spriteFrame) => {
            if (err) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(node)) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(sprite)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(spriteFrame);
            }

            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;

            if (showCb) {
              showCb();
            }
          });
        } // name为路径参数


        setSpriteFrame2(node, name, showCb, bundleName1) {
          if (bundleName1 === void 0) {
            bundleName1 = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.ui;
          }

          if (!name) {
            return;
          }

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var sprite = node.getComponent(Sprite);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(sprite)) {
            return;
          }

          sprite.enabled = false;
          node["loadName"] = name;
          var bundleName = bundleName1;
          var path = name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpriteFrame(bundleName, path, (err, spriteFrame) => {
            if (err) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(node)) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(sprite)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(spriteFrame);
            }

            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;

            if (showCb) {
              showCb();
            }
          });
        }

        setSpineData(node, name, showCb) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var skeleton = node.getComponent(sp.Skeleton);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(skeleton)) {
            return;
          }

          skeleton.enabled = false;
          node["loadName"] = name;
          var bundleName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.spine;
          var spinePath = name + "/" + name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpineData(bundleName, spinePath, (err, skeletonData) => {
            if (err) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(node)) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(skeleton)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(skeletonData);
            }

            skeleton.enabled = true;
            skeleton.skeletonData = skeletonData;

            if (showCb) {
              showCb(skeleton);
            }
          });
        }

        setSpineData2(node, bundleName, name, showCb) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var skeleton = node.getComponent(sp.Skeleton);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(skeleton)) {
            return;
          }

          skeleton.enabled = false;
          node["loadName"] = name;
          var spinePath = name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpineData(bundleName, spinePath, (err, skeletonData) => {
            if (err) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(node)) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(skeleton)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(skeletonData);
            }

            skeleton.enabled = true;
            skeleton.skeletonData = skeletonData;

            if (showCb) {
              showCb(skeleton);
            }
          });
        }

        scrollViewSetData(scrollViewNode, arr, refreshItemFunc, resetPos, itemTween) {
          if (resetPos === void 0) {
            resetPos = true;
          }

          if (itemTween === void 0) {
            itemTween = false;
          }

          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.setData(arr, (itemUI, item, index) => {
            if (refreshItemFunc) {
              refreshItemFunc(itemUI, item, index);
            }

            this.addButtonListener(itemUI);
          }, resetPos, itemTween);
        }

        scrollViewRefreshList(scrollViewNode) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.refreshList();
        }

        update(dt) {
          if (this.openBtnLongPress && this.btnLongNode) {
            this.btnLognTrigTimeCount += dt;

            if (this.btnLognTrigTimeCount >= this.btnLongTrigTime) {
              var isGoOn = this.preOnButtonLongClick(this.btnLongNode);
              this.btnLongTrigCount++;

              if (!isGoOn) {
                // 默认只会触发一次
                this.btnLongNode = null;
                this.btnLognTrigTimeCount = 0;
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29c55f774532258d9031cf58f27c290485624970.js.map