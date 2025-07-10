System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, Input, input, instantiate, isValid, Node, Quat, sys, tween, UIOpacity, UIRenderer, UITransform, v3, Vec3, view, utilTools, _crd, cocosUtil;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "./UtilTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      Input = _cc.Input;
      input = _cc.input;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      Node = _cc.Node;
      Quat = _cc.Quat;
      sys = _cc.sys;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UIRenderer = _cc.UIRenderer;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a05fcSICwxJKIh8H/cmPrA6", "CocosUtil", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'Input', 'input', 'instantiate', 'isValid', 'Node', 'Quat', 'sys', 'tween', 'Tween', 'UIOpacity', 'UIRenderer', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      Object.defineProperty(Node.prototype, "opacity", {
        // 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为false。
        configurable: true,
        // 表示能否通过for in循环访问属性，默认值为false
        enumerable: true,

        // 3.writable：表示能否修改属性的值。默认值为false。
        // 4.value：包含这个属性的数据值。默认值为undefined。
        get() {
          let op = cocosUtil.addComponentOnce(this, UIOpacity);
          return op.opacity;
        },

        set(p) {
          let op = cocosUtil.addComponentOnce(this, UIOpacity);
          op.opacity = p;
        }

      });

      _export("cocosUtil", cocosUtil = {
        /**
         * 以node为中心的圆环区域内的随机点
         * @param minRadius 最小半径
         * @param maxRadius 最大半径
         * @param isWorld 是否转为世界坐标，默认：是node坐标系下
         */
        getAroundPos(node, minRadius, maxRadius, isWorld = false) {
          let radius = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRandomFloat(minRadius, maxRadius, true);
          let radian = Math.random() * Math.PI * 2;
          let pos = v3(radius, 0, 0);
          Vec3.rotateZ(pos, pos, Vec3.ZERO, radian);
          pos = node.getPosition().add(pos);

          if (isWorld) {
            pos = cocosUtil.convertToWorldSpaceWithPos(node, pos);
          }

          return pos;
        },

        /**
         * 以node为中心的矩形环区域内的随机点
         * @param node 参考节点
         * @param minWidth 最小宽度
         * @param minHeight 最小高度
         * @param maxWidth 最大宽度
         * @param maxHeight 最大高度
         * @param isWorld 是否转为世界坐标，默认：是node坐标系下
         */
        getRectPos(node, minWidth, minHeight, maxWidth, maxHeight, isWorld = false) {
          if (!maxWidth) {
            maxWidth = minWidth + 10;
          }

          if (!maxHeight) {
            maxHeight = minHeight + 10;
          } // 分割成4个矩形


          let arr = []; // 上

          let r1 = {};
          r1.x = -maxWidth * 0.5;
          r1.y = minHeight * 0.5;
          r1.width = maxWidth;
          r1.height = (maxHeight - minHeight) * 0.5;
          r1.weight = r1.width * r1.height;
          arr.push(r1); // 下

          let r2 = {};
          r2.x = r1.x;
          r2.y = -maxHeight * 0.5;
          r2.width = r1.width;
          r2.height = r1.height;
          r2.weight = r1.weight;
          arr.push(r2); // 左

          let r3 = {};
          r3.x = -maxWidth * 0.5;
          r3.y = -minHeight * 0.5;
          r3.width = (maxWidth - minWidth) * 0.5;
          r3.height = minHeight;
          r3.weight = r3.width * r3.height;
          arr.push(r3); // 右

          let r4 = {};
          r4.x = minWidth * 0.5;
          r4.y = r3.y;
          r4.width = r3.width;
          r4.height = r3.height;
          r4.weight = r3.weight;
          arr.push(r4);
          let r = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRowByWeight(arr);
          let x = r.x + Math.random() * r.width;
          let y = r.y + Math.random() * r.height;
          let pos = v3(x, y);
          pos = node.getPosition().add(pos);

          if (isWorld) {
            pos = cocosUtil.convertToWorldSpaceWithPos(node, pos);
          }

          return pos;
        },

        /**
         * 得到与x轴正方向的夹角，取值范围：0~360度
         * @param pos 
         */
        vec2XAngle(pos) {
          let rad = Math.atan2(pos.y, pos.x);

          if (rad < 0) {
            rad += Math.PI * 2;
          }

          let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).radianToAngle(rad);
          return angle;
        },

        vec3CopyVal(outVec3, srcVec3) {
          outVec3.x = srcVec3.x;
          outVec3.y = srcVec3.y;
          outVec3.z = srcVec3.z;
          return outVec3;
        },

        schedule(com, cb, interval, repeatNum, delayTime = 0, isAtOnce = false) {
          com.schedule(cb, interval, repeatNum, delayTime);

          if (isAtOnce) {
            cb();
          }
        },

        addComponentOnce(item, name) {
          let comp = item.getComponent(name);

          if (!comp) {
            comp = item.addComponent(name);
          }

          return comp;
        },

        /**
         * 以direction为中间方向，angle为间隔角度，获取num数量的，长度为radius的向量
         * @param direction 基准方向
         * @param angle 角度值
         * @param num 个数，包括基准向量
         * @param radius 向量长度
         */
        getSectorDirectionArr(direction, angle, num, radius = 1) {
          direction = direction.clone().normalize().multiplyScalar(radius);

          if (num <= 1) {
            return [direction];
          }

          let da = Math.floor(num / 2);
          let radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(angle);
          let topArr = [];
          let downArr = [];

          for (let i = da; i >= 1; i--) {
            let dir1 = new Vec3(0, 0, 0);
            let dr = radian * i;
            Vec3.rotateZ(dir1, direction, Vec3.ZERO, dr);
            topArr.push(dir1);
            let dir2 = new Vec3(0, 0, 0);
            dr = -radian * (da + 1 - i);
            Vec3.rotateZ(dir2, direction, Vec3.ZERO, dr);
            downArr.push(dir2);
          }

          topArr.push(direction);
          let arr = topArr.concat(downArr);
          return arr;
        },

        /**
         * 获取num个围成方向为圆圈的，长度为radius的向量
         * @param pos 圆心点
         * @param num 个数
         * @param radius 向量长度
         */
        getCircleDirectionArr(num, radius = 1) {
          let r = Math.PI * 2 / num;
          let p2 = v3(radius, 0, 0);
          let arr = []; // 随机起始角度

          let startRadian = Math.random() * Math.PI * 2;

          for (let i = 0; i < num; i++) {
            let radian = startRadian + r * i;
            let direction = v3(0, 0, 0);
            direction = Vec3.rotateZ(direction, p2.clone(), Vec3.ZERO, radian);
            arr.push(direction);
          }

          return arr;
        },

        isInScreenVisible(node) {
          if (!node || !node.parent) {
            return false;
          }

          let orignPos = view.getVisibleOrigin();
          let pos = cocosUtil.convertToWorldSpace(node.parent, node.getPosition());
          let height = view.getVisibleSize().height;
          let width = view.getVisibleSize().width;
          let tf = node.getComponent(UITransform); // 考虑锚点

          if (pos.x + (1 - tf.anchorX) * tf.width > orignPos.x && pos.x - tf.anchorX * tf.width < width + orignPos.x && pos.y + (1 - tf.anchorY) * tf.height > orignPos.y && pos.y - tf.anchorY * tf.height < height + orignPos.y) {
            return true;
          }

          return false;
        },

        instantiate(node) {
          return instantiate(node);
        },

        /**
         * 异步等待一段时间后，才会往下执行，不会造成阻塞
         * @param com 组件基类
         * @param time 等待时间，单位：秒
         */
        waitTimeAsync(com, time) {
          return new Promise(resolve => {
            if (typeof com == "number") {
              setTimeout(() => {
                // @ts-ignore
                resolve();
              }, com * 1000);
            } else {
              com.scheduleOnce(() => {
                // @ts-ignore
                resolve();
              }, time);
            }
          });
        },

        getScreenMidWorldPos() {
          let size = view.getVisibleSize();
          let pos = v3(size.width * 0.5, size.height * 0.5, 0);
          return pos;
        },

        nodeChangeParent(node, parent) {
          if (!this.isValid(node) || !this.isValid(parent)) {
            return;
          }

          let pos = cocosUtil.convertToWorldSpace(parent, node.getPosition());
          node.parent = parent;
          pos = cocosUtil.convertToNodeSpace(node, pos);
          node.setPosition(pos);
        },

        /**
         * 判断节点或者组件是否可用
         * @param node 节点对象 
         */
        isValid(node) {
          if (!node || !isValid(node)) {
            return false;
          }

          return true;
        },

        isAndroid() {
          return sys.platform === sys.Platform.ANDROID;
        },

        isDesktopBrowser() {
          return sys.platform === sys.Platform.DESKTOP_BROWSER;
        },

        isIos() {
          return sys.platform === sys.Platform.IOS;
        },

        isWechatGame() {
          return sys.platform === sys.Platform.WECHAT_GAME;
        },

        addKeyDownListener(cb, sender) {
          input.on(Input.EventType.KEY_DOWN, cb, sender);
        },

        init() {
          // 设计分辨率
          this.designSize = view.getDesignResolutionSize(); // 实际屏幕分辨率

          this.frameSize = view.getFrameSize(); // 实际屏幕安全区域，{x: 0, y: 0, width: 766.6256157635468, height: 1660}
          // 是以左下角为原点，以设计分辨率为单位的，并且是遵循高度为适配原则后的尺寸

          this.safeAreaRect = sys.getSafeAreaRect(); // 计算出顶部刘海屏高度

          this.safeAreaMarginTop = this.designSize.height - this.safeAreaRect.height;

          if (this.safeAreaMarginTop < 0) {
            this.safeAreaMarginTop = 0;
          }

          this.intiScreenAdapterWidthScale();
          this.initScreenBgAdapterWidthScale();
        },

        // UI适配，以高度为适配原则，按照满宽度显示计算，如果宽度不够显示，要乘以这个缩放比例
        intiScreenAdapterWidthScale() {
          let fh = this.frameSize.height;
          let fw = this.frameSize.width;
          let scale = fh / this.designSize.height;
          let adapterWidth = this.designSize.width * scale;
          let retScale = 1;

          if (adapterWidth > fw) {
            // 屏幕不够显示，有些交互UI会丢失，要进行缩小
            retScale = fw / adapterWidth;
          } // if (this.safeAreaMarginTop > 0) {
          //     // cocos内部以高度为适配策略，但是如果有刘海屏，要额外再缩放一点
          //     let subScale = this.safeAreaMarginTop / this.designSize.height;
          //     retScale -= subScale;
          // }


          this.screenAdapterScale = retScale;
        },

        getScreenAdapterScale() {
          if (!this.screenAdapterScale) {
            this.screenAdapterScale = 1;
          }

          return this.screenAdapterScale;
        },

        // 背景图适配，跟上面的UI适配，刚好相反，超出的屏幕不管，屏幕没显示满，要放大
        initScreenBgAdapterWidthScale() {
          let fh = this.frameSize.height;
          let fw = this.frameSize.width;
          let scale = fh / this.designSize.height;
          let adapterWidth = this.designSize.width * scale;
          let retScale = 1;

          if (adapterWidth < fw) {
            // 屏幕没显示满，会有黑边，要进行放大
            retScale = fw / adapterWidth;
          }

          this.screenBgAdapterScale = retScale;
        },

        getScreenBgAdapterScale() {
          if (!this.screenBgAdapterScale) {
            this.screenBgAdapterScale = 1;
          }

          return this.screenBgAdapterScale;
        },

        /**
         * 将node坐标转换为世界坐标
         * @param node 
         * @param isCenter 是否强制是node的中心点坐标
         */
        convertToWorldSpace(node, pos) {
          let transform = node.getComponent(UITransform);
          return transform.convertToWorldSpaceAR(pos);
        },

        convertToWorldSpaceWithPos(node, pos) {
          let transform = node.getComponent(UITransform);
          pos = transform.convertToWorldSpaceAR(pos);
          return pos;
        },

        /**
         * 获得以node父节点锚点位置为原点的坐标系下的坐标
         * @param node 注意，是同坐标系下的节点
         * @param pos 世界坐标
         */
        convertToNodeSpace(node, pos) {
          let transform = node.getComponent(UITransform);
          return transform.convertToNodeSpaceAR(pos);
        },

        /**
         * 设置渲染节点的颜色叠加
         * @param node 节点
         * @param color 颜色
         * @param isRecursion 是否递归子节点也设置 
         */
        setRenderableColor(node, color, isRecursion) {
          let renderable = node.getComponent(UIRenderer);

          if (renderable && renderable.color) {
            let temp = null;

            if (typeof color == "string") {
              temp = new Color(color);
            } else {
              temp = color;
            }

            renderable.color = temp;
          }

          if (isRecursion) {
            for (let ch of node.children) {
              this.setRenderableColor(ch, color, isRecursion);
            }
          }
        },

        getRenderableColor(node) {
          let renderable = node.getComponent(UIRenderer);

          if (renderable && renderable.color) {
            return renderable.color.clone();
          }

          return null;
        },

        /**
         * 根据十六进制颜色值，获得color对象
         * @param hex "#333333"
         */
        getColorByHEX(hex) {
          let color = new Color(hex); // Color.fromHEX(color, hex);

          return color;
        },

        /**
         * 设置按钮可用状态
         * @param node 按钮对象
         * @param enabled 是否可点击
         */
        setButtonEnabled(node, enabled) {
          let btn = node.getComponent(Button);

          if (btn) {
            btn.enabled = enabled;
          }
        },

        getQuatByAngleZ(angle) {
          let quat = new Quat();
          Quat.fromEuler(quat, 0, 0, angle);
          return quat;
        },

        formatNum(num) {
          if (num < 10000) {
            return num;
          }

          if (num < 1000000) {
            num = Math.floor(num / 1000 * 100);
            return (num / 100).toFixed(2) + "K";
          }

          num = Math.floor(num / 1000000 * 100);
          return (num / 100).toFixed(2) + "M";
        },

        formatNumString(num) {
          if (num < 1000) {
            return num;
          }

          if (num < 10000) {
            num = Math.floor(num / 1000 * 10);
            return (num / 10).toFixed(1) + "K";
          }

          if (num < 10000000) {
            num = Math.floor(num / 10000 * 10);
            return (num / 10).toFixed(1) + "w";
          }

          num = Math.floor(num / 1000000 * 100);
          return (num / 100).toFixed(2) + "M";
        },

        setNodePositionX(node, x) {
          let pos = node.getPosition();
          pos.x = x;
          node.setPosition(pos);
        },

        setNodePositionY(node, y) {
          let pos = node.getPosition();
          pos.y = y;
          node.setPosition(pos);
        },

        /**
         * 绘制一条曲线路径
         * @param  {Object} node canvas渲染上下文
         * @param  {Array<number>} start 起点
         * @param  {Array<number>} end 终点
         * @param  {number} curveness 曲度(0-1)
         * @param  {number} percent 绘制百分比(0-100)
         */
        drawCurvePath(node, start, end, curveness, percent, delay = 0) {
          var cp = [(start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness, (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness]; // node.position = v3(start[0], start[1], 0);

          let tweenArr = [];
          tweenArr.push(tween(node).delay(delay));
          let curx = start[0];
          let cury = start[1];

          for (var t = 0; t <= percent / 100; t += 0.01) {
            var x = this.quadraticBezier(start[0], cp[0], end[0], t);
            var y = this.quadraticBezier(start[1], cp[1], end[1], t);
            let time = (Math.abs(x - curx) + Math.abs(y - cury)) / 1500;
            tweenArr.push(tween(node).to(time, {
              position: v3(x, y, 0)
            }));
            curx = x;
            cury = y;
          }

          let time = (Math.abs(end[0] - curx) + Math.abs(end[1] - cury)) / 1500;
          tweenArr.push(tween(node).to(time, {
            position: v3(end[0], end[1], 0)
          }));
          tween(node).sequence(...tweenArr).start();
        },

        quadraticBezier(p0, p1, p2, t) {
          var k = 1 - t;
          return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2; // 这个方程就是二次贝赛尔曲线方程
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db26a72d4774cde36b4a9904ebc86690e2421911.js.map