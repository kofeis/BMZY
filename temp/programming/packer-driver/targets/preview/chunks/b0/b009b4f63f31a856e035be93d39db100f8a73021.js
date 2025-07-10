System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Quat, tween, Tween, UIOpacity, v3, view, cocosUtil, _crd, tweenUtil;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "./CocosUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "734d94xSstLyJsxIuboDZH+", "TweenUtil", undefined);

      __checkObsolete__(['Button', 'Color', 'Component', 'Input', 'input', 'instantiate', 'isValid', 'Node', 'Quat', 'sys', 'tween', 'Tween', 'UIOpacity', 'UIRenderer', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      _export("tweenUtil", tweenUtil = {
        tweenScaleOut(node, time, endCb) {
          tween(node).to(time, {
            scale: v3(0, 0, 0)
          }).call(() => {
            endCb();
          }).start();
        },

        // 受击缩放特效
        tweenHitScale(node, time, endCb) {
          if (time === void 0) {
            time = 0.1;
          }

          Tween.stopAllByTarget(node);
          var scale = node.getScale();
          tween(node).to(time, {
            scale: v3(scale.x * 0.95, scale.y * 1.1, 1)
          }).to(time * 2, {
            scale: v3(scale.x, scale.y * 0.9, 1)
          }).to(time * 2, {
            scale: v3(scale.x * 0.95, scale.y * 1.1, 1)
          }).to(time, {
            scale: v3(scale.x, scale.y, 1)
          }).call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        tweenScaleShake(node, endCb) {
          var angle = 10;
          var quat1 = new Quat();
          Quat.fromEuler(quat1, 0, 0, angle);
          var quat2 = new Quat();
          Quat.fromEuler(quat2, 0, 0, -angle);
          var quat3 = new Quat();
          Quat.fromEuler(quat3, 0, 0, 0);
          tween(node).to(0.3, {
            scale: v3(1.3, 1.3, 1)
          }).to(0.2, {
            rotation: quat1
          }).to(0.4, {
            rotation: quat2
          }).to(0.2, {
            rotation: quat3
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }).call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 快速呼吸效果
        tweenBubbling(node) {
          Tween.stopAllByTarget(node);
          node.setScale(v3(0.4, 0.4, 1));
          tween(node).to(0.5, {
            scale: v3(1, 1, 1)
          }).to(0.5, {
            scale: v3(0.4, 0.4, 1)
          }).union().repeatForever().start();
        },

        getScreenMidWorldPos() {
          var size = view.getVisibleSize();
          var pos = v3(size.width * 0.5, size.height * 0.5, 0);
          return pos;
        },

        tweenUIShow(node) {
          Tween.stopAllByTarget(node);
          var scale = node.getScale();
          node.setScale(v3(0.5, 0.5, 1));
          tween(node).to(0.1, {
            scale: scale
          }).start();
        },

        // 软弹簧效果
        tweenBounceAction(node) {
          Tween.stopAllByTarget(node);
          var scaleX = node.getScale().x;
          var scaleY = node.getScale().y;
          tween(node).to(0.15, {
            scale: v3(scaleX * 0.4, scaleY * 1.2, 1)
          }, {
            easing: 'bounceInOut'
          }).to(0.15, {
            scale: v3(scaleX * 1.4, scaleY * 0.8, 1)
          }, {
            easing: 'bounceInOut'
          }).to(0.2, {
            scale: v3(scaleX, scaleY, 1)
          }, {
            easing: 'smooth'
          }).delay(0.7).union().repeatForever().start();
        },

        // 节点抖动
        tweenShakeNode(node) {
          var time = 0.1;
          tween(node).to(time, {
            position: v3(5, -5)
          }).to(time, {
            position: v3(-5, 5)
          }).to(time, {
            position: v3(5, 5)
          }).to(time, {
            position: v3(-5, -5)
          }).to(time, {
            position: v3(0, 0)
          }).start();
        },

        // 往下掉落的效果
        tweenFallDown(node, endCb) {
          node.setScale(0.5, 0.5, 1);
          var pos = node.getPosition();
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).setNodePositionY(node, pos.y + 100);
          tween(node).to(0.3, {
            position: pos
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }).call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 显现后，往上移动并慢慢隐去
        tweenTopFadeOut(node, endCb) {
          var uiOpacity = node.getComponent(UIOpacity);

          if (!uiOpacity) {
            uiOpacity = node.addComponent(UIOpacity);
          }

          uiOpacity.opacity = 255;
          node.setScale(1, 1, 1);
          tween(node).to(0.05, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).by(0.5, {
            position: v3(0, 40)
          }).by(1, {
            position: v3(0, 0)
          }, {
            onUpdate(target, ratio) {
              uiOpacity.opacity = (1 - ratio) * 255;
            }

          }).union().call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 放大再缩小的一个效果
        tweenScaleEffect(node, time, endCb) {
          if (!time) {
            time = 0.2;
          }

          node.setScale(1, 1, 1);
          tween(node).to(time, {
            scale: v3(1.5, 1.5, 1)
          }).to(time, {
            scale: v3(1, 1, 1)
          }).call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 边旋转，边飞向目标位置
        tweenFlyToPos(node, pos, endCb) {
          return _asyncToGenerator(function* () {
            Tween.stopAllByTarget(node);
            return new Promise((resolve, reject) => {
              var time = 0.5;
              var angle = 360;
              var quat = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getQuatByAngleZ(angle);
              var t1 = tween(node).to(time, {
                position: pos
              });
              var t2 = tween(node).by(time, {
                rotation: quat
              }, {
                easing: "quadOut",

                onUpdate(target, ratio) {
                  node.setRotation((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).getQuatByAngleZ(angle * ratio));
                }

              });
              tween(node).parallel(t1, t2).call(() => {
                node.setRotation((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).getQuatByAngleZ(0)); // @ts-ignore

                resolve();

                if (endCb) {
                  endCb();
                }
              }).start();
            });
          })();
        },

        // 往右上方做类似抛物线运动
        tweenTopRightPao(node, callbck) {
          var dx1 = 40;
          var dx2 = 40;
          var dy1 = 100;
          var dy2 = -80;
          dx1 += Math.random() * 20;
          node.setScale(v3(1, 1, 1));
          tween(node).by(0.3, {
            position: v3(dx1, dy1)
          }, {
            easing: "quadOut",
            onUpdate: (target, ratio) => {
              var ds = 0.5 * ratio;
              node.setScale(v3(1 + ds, 1 + ds, 1));
            }
          }).by(0.3, {
            position: v3(dx2, dy2)
          }, {
            easing: "quadIn",
            onUpdate: (target, ratio) => {
              var ds = 0.5 * ratio;
              node.setScale(v3(1.5 - ds, 1.5 - ds, 1));
            }
          }).union().call(() => {
            if (callbck) {
              callbck();
            }
          }).start();
        },

        // 从小到放大
        tweenScaleIn(node, time, endCb) {
          if (!time) {
            time = 0.2;
          }

          node.setScale(0, 0, 1);
          tween(node).to(time, {
            scale: v3(1, 1, 1)
          }).call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 从小到放大，再恢复到原始大小
        tweenScaleIn2(node, time, endCb) {
          if (!time) {
            time = 0.2;
          }

          node.setScale(0, 0, 1);
          tween(node).to(time, {
            scale: v3(1.3, 1.3, 1)
          }).to(time / 2, {
            scale: v3(1, 1, 1)
          }).union().call(() => {
            if (endCb) {
              endCb();
            }
          }).start();
        },

        // 闪烁动画
        tweenBlink(node, time, cb) {
          if (!time) {
            time = 0.5;
          }

          var uiOpacity = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(node, UIOpacity);
          uiOpacity.opacity = 255;
          tween(uiOpacity).to(time, {
            opacity: 80
          }).to(time, {
            opacity: 255
          }).call(() => {
            if (cb) {
              cb();
            }
          }).union().repeatForever().start();
        },

        // 循环旋转动画
        tweenRotate(node, time) {
          if (!time) {
            time = 2;
          }

          var angle = 360;
          var quat = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getQuatByAngleZ(angle);
          tween(node).by(time, {
            rotation: quat
          }, {
            easing: "linear",
            onUpdate: (target, ratio) => {
              var da = angle * ratio;
              target.setRotation((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getQuatByAngleZ(da));
            }
          }).repeatForever().start();
        },

        // 上下漂浮
        tweenUpDown(node, dy, time) {
          if (!dy) {
            dy = 6;
          }

          if (!time) {
            time = 1.5;
          }

          var pos1 = node.getPosition();
          pos1.y += dy;
          var pos2 = node.getPosition();
          tween(node).to(time, {
            position: pos1
          }).to(time, {
            position: pos2
          }).union().repeatForever().start();
        },

        // 淡入动画
        tweenFadeIn(node, time, cb) {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (!time) {
                time = 1;
              }

              var uiOpacity = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).addComponentOnce(node, UIOpacity);
              uiOpacity.opacity = 0;
              tween(uiOpacity).to(time, {
                opacity: 255
              }).call(() => {
                // @ts-ignore
                resolve();

                if (cb) {
                  cb();
                }
              }).start();
            });
          })();
        },

        // 淡出动画
        tweenFadeOut(node, time, cb) {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (!time) {
                time = 1.5;
              }

              var uiOpacity = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).addComponentOnce(node, UIOpacity);
              uiOpacity.opacity = 255;
              tween(uiOpacity).to(time, {
                opacity: 0
              }).call(() => {
                // @ts-ignore
                resolve();

                if (cb) {
                  cb();
                }
              }).start();
            });
          })();
        },

        /**
         * 放大缩小呼吸效果
         * @param node 节点
         * @param time 缩放时长，单位：秒
         * @param scale 缩放大小
         */
        tweenBreath(node, time, scale) {
          if (!time) {
            time = 0.4;
          }

          if (!scale) {
            scale = 1.2;
          }

          tween(node).to(time, {
            scale: v3(scale, scale, 1)
          }).to(time, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        },

        /**
         * 间接性晃动效果
         * @param node 节点
         * @param time 时长，单位：秒
         * @param rotation 旋转角度，单位：度数
         * @param delayTime 中间暂停时长，单位：秒
         * @param isRepeat 是否循环播放，默认：是
         */
        tweenShake(node, time, rotation, delayTime, isRepeat) {
          Tween.stopAllByTarget(node);

          if (!time) {
            time = 0.2;
          }

          if (!rotation) {
            rotation = 6;
          }

          if (delayTime == undefined) {
            delayTime = time * 5;
          }

          var quat1 = new Quat();
          Quat.fromEuler(quat1, 0, 0, rotation);
          var quat2 = new Quat();
          Quat.fromEuler(quat2, 0, 0, -rotation);
          var quat3 = new Quat();
          Quat.fromEuler(quat3, 0, 0, 0);
          var tweenRet = tween(node).to(time, {
            rotation: quat1
          }).to(time * 2, {
            rotation: quat2
          }).to(time, {
            rotation: quat3
          });

          if (isRepeat == undefined) {
            tweenRet.delay(delayTime).union().repeatForever().start();
          } else {
            tweenRet.start();
          }
        },

        /**
         * 绘制一条曲线路径
         * @param  {Object} node canvas渲染上下文
         * @param  {Array<number>} start 起点
         * @param  {Array<number>} end 终点
         * @param  {number} curveness 曲度(0-1)
         * @param  {number} percent 绘制百分比(0-100)
         */
        drawCurvePath(node, start, end, curveness, percent, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          var cp = [(start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness, (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness]; // node.position = v3(start[0], start[1], 0);

          var tweenArr = [];
          tweenArr.push(tween(node).delay(delay));
          var curx = start[0];
          var cury = start[1];

          for (var t = 0; t <= percent / 100; t += 0.01) {
            var x = this.quadraticBezier(start[0], cp[0], end[0], t);
            var y = this.quadraticBezier(start[1], cp[1], end[1], t);

            var _time = (Math.abs(x - curx) + Math.abs(y - cury)) / 1500;

            tweenArr.push(tween(node).to(_time, {
              position: v3(x, y, 0)
            }));
            curx = x;
            cury = y;
          }

          var time = (Math.abs(end[0] - curx) + Math.abs(end[1] - cury)) / 1500;
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
//# sourceMappingURL=b009b4f63f31a856e035be93d39db100f8a73021.js.map