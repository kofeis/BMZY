System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, Sprite, Tween, tween, v3, Vec2, Vec3, Material, UIOpacity, color, isValid, Tool_Other, Tool_UI, _dec, _class, _class2, _crd, ccclass, property, Tool_Animation;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "./Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "./Tool_UI", _context.meta, extras);
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
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Material = _cc.Material;
      UIOpacity = _cc.UIOpacity;
      color = _cc.color;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      Tool_Other = _unresolved_2.Tool_Other;
    }, function (_unresolved_3) {
      Tool_UI = _unresolved_3.Tool_UI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a7fetqC+5I8ZCGBxIXB2YY", "Tool_Animation", undefined);

      __checkObsolete__(['__private', '_decorator', 'AnimationState', 'Component', 'Animation', 'Node', 'sp', 'Sprite', 'Tween', 'tween', 'v3', 'Vec2', 'Vec3', 'Material', 'director', 'Skeleton', 'macro', 'UIOpacity', 'Color', 'color', 'Label', 'instantiate', 'easing', 'Widget', 'isValid', 'TweenEasing']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tool_Animation", Tool_Animation = (_dec = ccclass('Tool_Animation'), _dec(_class = (_class2 = class Tool_Animation extends Component {
        /**异步等待 */
        Async_Wait(Delay_Time) {
          return new Promise((resolve, reject) => {
            if (Delay_Time <= 0) {
              resolve();
            } else {
              this.scheduleOnce(() => {
                resolve();
              }, Delay_Time);
            }
          });
        }
        /**
         * 异步函数 Id 
         * @param Delay_Time 延时时间
         * @param Id 缓动标签
         * @param Call 回调函数
         */


        Async_Function_Id(Delay_Time, Id, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          return new Promise((resolve, reject) => {
            var Obj_Start = {
              num: 0
            };
            var Obj_End = {
              num: 1
            };
            tween(Obj_Start).to(Delay_Time, Obj_End, {
              progress: (start, end, current, ratio) => {
                return ratio;
              }
            }).tag(Id).call(() => {
              Call == null || Call();
              resolve();
            }).start();
            return Obj_Start;
          });
        }
        /**
         *  异步函数 Target
         * @param Delay_Time 延时时间
         * @param Obj_Start 开始对象
         * @param Call 回调函数
         */


        Async_Function_Target(Delay_Time, Obj_Start, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          return new Promise((resolve, reject) => {
            var Obj_End = {
              num: 1
            };
            tween(Obj_Start).to(Delay_Time, Obj_End, {
              progress: (start, end, current, ratio) => {
                return ratio;
              }
            }).call(() => {
              Call == null || Call();
              resolve();
            }).start();
          });
        }
        /**异步函数循环 */


        Async_Function_For(Count, Fun_Start, Fun_End) {
          if (Fun_Start === void 0) {
            Fun_Start = () => {};
          }

          if (Fun_End === void 0) {
            Fun_End = () => {};
          }

          return new Promise((resolve, reject) => {
            for (var i = 0; i < Count; i++) {
              if (i == Count - 1) {
                Fun_End == null || Fun_End(i);
              } else {
                Fun_Start == null || Fun_Start(i);
              }
            }
          });
        }
        /**倒计时开始 */


        Timing(Obj_Timing, Time, Call) {
          if (Time === void 0) {
            Time = 60;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          Obj_Timing.num = 0;
          this.Async_Function_Target(Time, Obj_Timing, () => {
            console.debug("倒计时结束");
            Call == null || Call();
          });
        }
        /**倒计时重置 */


        TimReset(Obj_Timing, Time, Call) {
          if (Time === void 0) {
            Time = 60;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          console.debug("倒计时重置");
          this.Tween_Stop_Target(Obj_Timing);
          this.Timing(Obj_Timing, Time, Call);
        }
        /**倒计时暂停 */


        TimPause(Obj_Timing, Time, Call) {
          if (Time === void 0) {
            Time = 60;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          console.debug("倒计时暂停");
          this.Tween_Pause_Target(Obj_Timing);
        }
        /**倒计时恢复 */


        TimResume(Obj_Timing, Time, Call) {
          if (Time === void 0) {
            Time = 60;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          console.debug("倒计时暂停");
          this.Tween_Resume_Target(Obj_Timing);
        }
        /**倒计时停止 */


        TimStop(Obj_Timing, Time, Call) {
          if (Time === void 0) {
            Time = 60;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          console.debug("倒计时停止");
          this.Tween_Stop_Target(Obj_Timing);
        }
        /**暂停缓动对象 */


        Tween_Pause_Target(Target, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Tween.pauseAllByTarget(Target);
          Call == null || Call();
        }
        /**恢复缓动对象 */


        Tween_Resume_Target(Target, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Tween.resumeAllByTarget(Target);
          Call == null || Call();
        }
        /**停止缓动对象 */


        Tween_Stop_Target(Target, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Tween.stopAllByTarget(Target);
          Call == null || Call();
        }
        /**停止缓动标签 */


        Tween_Stop_Tag(Id, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Tween.stopAllByTag(Id);
          Call == null || Call();
        }
        /**停止所有缓动 */


        Tween_Stop_All() {
          Tween.stopAll();
        }
        /**
         * 数字跳动（基于时间）
         * @param Label Label 组件
         * @param Value_Start 初始值
         * @param Value_Change 改变值
         * @param Time 时间
         * @param Obj_Start 开始对象
         * @param Id ID
         * @param Call 回调
         * @param Lenth 小数位数
         * @param Easing "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";
         */


        Animation_Num_Jump_Time(Component_Label, Value_Start, Value_Change, Time, Obj_Start, Id, Call, Lenth, Easing) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Lenth === void 0) {
            Lenth = 2;
          }

          if (Easing === void 0) {
            Easing = "linear";
          }

          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            easing: Easing,
            progress: (start, end, current, ratio) => {
              Component_Label.string = (Value_Start + ratio * Value_Change).toFixed(Lenth);
              return ratio;
            }
          }).tag(Id).call(() => Call == null ? void 0 : Call()).start();
        }
        /**
         * 数字跳动（基于速度）
         * @param Component_Label Label 组件
         * @param Value_Start 初始值
         * @param Value_Change 改变值
         * @param Speed 变化速度（值/秒）
         * @param Obj_Start 开始对象
         * @param Id ID
         * @param Call 回调
         * @param Length 小数位数
         * @param Easing "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";
         */


        Animation_Num_Jump_Speed(Component_Label, Value_Start, Value_Change, Speed, Obj_Start, Id, Call, Length, Easing) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Length === void 0) {
            Length = 2;
          }

          if (Easing === void 0) {
            Easing = "linear";
          }

          // 计算动画时间（时间 = 变化量 / 速度）
          var Time = Math.abs(Value_Change) / Speed * 1000; // 转为毫秒

          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            easing: Easing,
            progress: (start, end, current, ratio) => {
              Component_Label.string = (Value_Start + ratio * Value_Change).toFixed(Length);
              return ratio;
            }
          }).tag(Id).call(() => {
            Call == null || Call();
          }).start();
        }
        /**获得移动时间 */


        Get_Move_Time(Speed, Start_Pos, Pos_Finish) {
          if (Speed <= 0) {
            return;
          }

          var Dis = this.Get_Distance(Start_Pos, Pos_Finish);
          var Time = Number((Dis / Speed).toFixed(2));
          return Time;
        }
        /**获取两点角度
        *@param Pos_Start 起点坐标
        *@param Pos_Finish 终点坐标
        */


        Get_Angle(Pos_Start, Pos_Finish) {
          var Delta_X = Pos_Finish.x - Pos_Start.x;
          var Delta_Y = Pos_Finish.y - Pos_Start.y;
          var AngleIn_Degrees = Math.atan2(Delta_Y, Delta_X) * (180 / Math.PI);
          return AngleIn_Degrees;
        }
        /**获取两点距离
        *@param Pos_Start 起点坐标
        *@param Pos_Finish 终点坐标
        */


        Get_Distance(Pos_Start, Pos_Finish) {
          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Pos_Start) || !(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Pos_Finish)) {
            console.warn("类型异常");
            return;
          }

          return Number(Vec2.distance(Pos_Start, Pos_Finish).toFixed(2));
        }
        /**
         *根据两点坐标和距离,计算距离开始位置Dis的坐标
         *@param p1 起始点坐标
         *@param p2 目标点坐标
         *@param dis 距离起始点的距离
         *@returns 中间位置坐标
         */


        Get_Distance_Limited(Pos_Start, Pos_Finish, Dis) {
          // 计算两点之间的距离
          var Distance = this.Get_Distance(Pos_Start.clone(), Pos_Finish.clone()); // 如果两点之间的距离小于或等于目标距离,则返回目标点坐标

          if (Distance <= Dis) {
            return Pos_Finish.clone();
          } // 计算方向向量并归一化


          var Direction = Pos_Finish.clone().subtract(Pos_Start.clone()).normalize(); // 计算中间位置坐标

          var Intermediate_Position = Pos_Start.clone().add(Direction.multiplyScalar(Dis));
          return Intermediate_Position;
        }
        /**
         * 位置限制
         * @param {Vec3} Target_Position - 目标坐标
         * @param {Vec3} Min_Position - 最小坐标
         * @param {Vec3} Max_Position - 最大坐标
         * @param {number} Ortho_Height_Multiple - 正交高度倍数
         * @returns {Vec3} - 限制后的目标坐标       
         */


        Position_Restricted(Target_Position, Min_Position, Max_Position, Ortho_Height_Multiple) {
          if (Ortho_Height_Multiple === void 0) {
            Ortho_Height_Multiple = 1;
          }

          /** 设计分辨率 */
          var Design_Width = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Width_Design() * Ortho_Height_Multiple;
          var Design_Height = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Get_Height_Design() * Ortho_Height_Multiple; // 调整最小和最大坐标

          Min_Position = v3(Min_Position.x + Design_Width, Min_Position.y + Design_Height, 0);
          Max_Position = v3(Max_Position.x - Design_Width, Max_Position.y - Design_Height, 0); // 限制坐标的辅助函数

          var clamp = (value, min, max) => Math.max(min, Math.min(value, max)); // 限制目标坐标


          Target_Position.x = clamp(Target_Position.x, Min_Position.x, Max_Position.x);
          Target_Position.y = clamp(Target_Position.y, Min_Position.y, Max_Position.y);
          return Target_Position;
        }
        /**动画_节点_移动_速度
        *@Node 节点
        *@Position 坐标
        *@Speed 速度
        *@Call 回调函数
        *@Easing "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";
        */


        Animation_Node_Move_Speed(Node_Set, Position, Speed, Call, Easing) {
          if (Speed === void 0) {
            Speed = 1000;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Easing === void 0) {
            Easing = "linear";
          }

          if (Speed <= 0) {
            return;
          }

          var Move_Time = this.Get_Move_Time(Speed, Node_Set.position, Position);
          this.Tween_Stop_Target(Node_Set);
          tween(Node_Set).to(Move_Time, {
            position: Position
          }, {
            easing: Easing
          }).call(() => {
            Call == null || Call();
          }).start();
        }
        /**动画_节点_移动_时间
        *@Node 节点
        *@Position 坐标
        *@Time 时间
        *@Call 回调函数
        *@Easing "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";
        */


        Animation_Node_Move_Time(Node_Set, Position, Time, Call, Easing) {
          return _asyncToGenerator(function* () {
            if (Time === void 0) {
              Time = 1;
            }

            if (Call === void 0) {
              Call = () => {};
            }

            if (Easing === void 0) {
              Easing = "linear";
            }

            return new Promise((resolve, reject) => {
              if (Time < 0) {
                return;
              } // this.Tween_Stop_Target(Node_Set);


              tween(Node_Set).to(Time, {
                position: Position
              }, {
                easing: Easing
              }).call(() => {
                Call == null || Call();
                resolve();
              }).start();
            });
          })();
        }
        /**动画_节点_交换_坐标_速度 */


        Animation_Nodes_Swap_Pos_Speed(Node_A, Node_B, Speed, Call, Easing) {
          if (Speed === void 0) {
            Speed = 1000;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Easing === void 0) {
            Easing = "linear";
          }

          if (Speed <= 0) {
            return;
          }

          var Position_A = Node_A.position.clone();
          var Position_B = Node_B.position.clone();
          this.Animation_Node_Move_Speed(Node_A, Position_B, Speed, null, Easing);
          this.Animation_Node_Move_Speed(Node_B, Position_A, Speed, () => {
            Call == null || Call();
          }, Easing);
        }
        /**动画_节点_交换_坐标_时间 */


        Animation_Nodes_Move_Swap_Time(Node_A, Node_B, Time, Call, Easing) {
          if (Time === void 0) {
            Time = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Easing === void 0) {
            Easing = "linear";
          }

          if (Time < 0) {
            return;
          }

          var Position_A = Node_A.position.clone();
          var Position_B = Node_B.position.clone();
          this.Animation_Node_Move_Time(Node_A, Position_B, Time, null, Easing);
          this.Animation_Node_Move_Time(Node_B, Position_A, Time, () => {
            Call == null || Call();
          }, Easing);
        }
        /**动画_节点_移动_贝塞尔_时间
        *@Node 节点
        *@Target_Pos 目标坐标
        *@Id 缓动标签
        *@PointA_Pos 控制点坐标
        *@PointB_Pos 控制点坐标
        *@Time 时间
        *@Call 回调函数
        */


        Animation_Node_Move_Bezier_Time(Node_Set, Target_Pos, Id, PointA_Pos, PointB_Pos, Time, Call) {
          if (Time === void 0) {
            Time = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Time < 0) {
            return;
          } // 定义贝塞尔曲线的控制点

          /**开始坐标 */


          var Pos_Start = Node_Set.position.clone();
          /**控制点1坐标 */

          var Control_Point1 = Pos_Start.clone().add(PointA_Pos); // 控制点1

          /**控制点2坐标 */

          var Control_Point2 = Target_Pos.clone().add(PointB_Pos); // 控制点2

          var End_Position = Target_Pos.clone(); // 创建贝塞尔曲线函数

          var Bezier = t => {
            return Pos_Start.clone().multiplyScalar(Math.pow(1 - t, 3)).add(Control_Point1.clone().multiplyScalar(3 * Math.pow(1 - t, 2) * t)).add(Control_Point2.clone().multiplyScalar(3 * (1 - t) * Math.pow(t, 2))).add(End_Position.clone().multiplyScalar(Math.pow(t, 3)));
          };

          var Obj_Start = {
            num: 0
          };
          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            progress: (start, end, current, ratio) => {
              if (isValid(Node_Set, true)) {
                Node_Set.position = Bezier(ratio);
              } else {
                this.Tween_Stop_Target(Obj_Start);
              }

              return ratio;
            }
          }).tag(Id).call(() => {
            Call == null || Call();
          }).start();
        }
        /**
         * 动画_节点_移动_贝塞尔_速度
         * @Node 节点
         * @Target_Pos 目标坐标
         * @PointA_Pos 控制点坐标
         * @PointB_Pos 控制点坐标
         * @Speed 速度
         * @Call 回调函数
         */


        Animation_Node_Move_Bezier_Speed(Node_Set, Target_Pos, Id, PointA_Pos, PointB_Pos, Speed, Call) {
          if (Speed === void 0) {
            Speed = 520;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          // 获取当前节点位置
          var Pos_Start = Node_Set.position.clone();
          var End_Position = Target_Pos.clone();
          var Time = this.Get_Move_Time(Speed, Pos_Start, End_Position);

          if (Time < 0) {
            return;
          } // 定义贝塞尔曲线的控制点


          var Control_Point1 = Pos_Start.clone().add(PointA_Pos); // 控制点1

          var Control_Point2 = Target_Pos.clone().add(PointB_Pos); // 控制点2
          // 创建贝塞尔曲线函数

          var Bezier = t => {
            return Pos_Start.clone().multiplyScalar(Math.pow(1 - t, 3)).add(Control_Point1.clone().multiplyScalar(3 * Math.pow(1 - t, 2) * t)).add(Control_Point2.clone().multiplyScalar(3 * (1 - t) * Math.pow(t, 2))).add(End_Position.clone().multiplyScalar(Math.pow(t, 3)));
          };

          var Obj_Start = {
            num: 0
          };
          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            progress: (start, end, current, ratio) => {
              if (isValid(Node_Set, true)) {
                Node_Set.position = Bezier(ratio);
              } else {
                this.Tween_Stop_Target(Obj_Start);
              }

              return ratio;
            }
          }).tag(Id).call(() => {
            Call == null || Call();
          }).start();
        }
        /**动画_节点_移动_贝塞尔_时间
        *@Node 节点
        *@Target_Pos 目标坐标
        *@Id 缓动标签
        *@PointA_Pos 控制点坐标
        *@PointB_Pos 控制点坐标
        *@Time 时间
        *@Call 回调函数
        */


        Animation_Node_Move_Bezier_Time1(Node_Set, Target_Pos, Obj_Start, Id, PointA_Pos, PointB_Pos, Time, Call) {
          if (Time === void 0) {
            Time = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Time < 0) {
            return;
          } // 定义贝塞尔曲线的控制点

          /**开始坐标 */


          var Pos_Start = Node_Set.position.clone();
          /**控制点1坐标 */

          var Control_Point1 = Pos_Start.clone().add(PointA_Pos); // 控制点1

          /**控制点2坐标 */

          var Control_Point2 = Target_Pos.clone().add(PointB_Pos); // 控制点2

          var End_Position = Target_Pos.clone(); // 创建贝塞尔曲线函数

          var Bezier = t => {
            return Pos_Start.clone().multiplyScalar(Math.pow(1 - t, 3)).add(Control_Point1.clone().multiplyScalar(3 * Math.pow(1 - t, 2) * t)).add(Control_Point2.clone().multiplyScalar(3 * (1 - t) * Math.pow(t, 2))).add(End_Position.clone().multiplyScalar(Math.pow(t, 3)));
          }; // let Obj_Start = { num: 0 };


          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            progress: (start, end, current, ratio) => {
              if (isValid(Node_Set, true)) {
                Node_Set.position = Bezier(ratio);
              } else {
                this.Tween_Stop_Target(Obj_Start);
              }

              return ratio;
            }
          }).tag(Id).call(() => {
            Call == null || Call();
          }).start();
        }
        /**
         * 动画_节点_移动_抛物线_时间
         * @param Node_Set 节点
         * @param Target_Pos 目标坐标
         * @param Time 时间
         * @param Obj_Start 开始对象 let Obj_Start = { num: 0 };
         * @param Id 缓动标签
         * @param Call 回调函数
         * @returns
         */


        Animation_Node_Move_Parabola_Time(Node_Set, Target_Pos, Time, Obj_Start, Id, Call) {
          if (Time === void 0) {
            Time = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Time < 0) {
            return;
          } // 定义起始坐标和目标坐标


          var Pos_Start = Node_Set.position.clone();
          var End_Position = Target_Pos.clone(); // 计算控制点，形成抛物线

          var Control_Point = new Vec3((Pos_Start.x + End_Position.x) / 2, Math.max(Pos_Start.y, End_Position.y) + Math.abs(Target_Pos.y - Pos_Start.y) * 0.5, // 向上偏移
          0); // 创建贝塞尔曲线函数

          var Bezier = t => {
            return Pos_Start.clone().multiplyScalar(Math.pow(1 - t, 2)).add(Control_Point.clone().multiplyScalar(2 * (1 - t) * t)).add(End_Position.clone().multiplyScalar(Math.pow(t, 2)));
          };

          var Obj_End = {
            num: 1
          };
          tween(Obj_Start).to(Time, Obj_End, {
            progress: (start, end, current, ratio) => {
              if (isValid(Node_Set, true)) {
                Node_Set.position = Bezier(ratio);
              } else {
                this.Tween_Stop_Target(Obj_Start);
              }

              return ratio;
            }
          }).tag(Id).call(() => {
            Call == null || Call();
          }).start();
        }
        /**动画_节点数组_移动_速度
         *@Node 节点
         *@Position 坐标
         *@Time 速度
         *@Call 回调函数
         */


        Animation_Nodes_Move_Speed(Node_Set, Position, Speed, Call) {
          if (Speed === void 0) {
            Speed = 1000;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Speed <= 0) {
            return;
          }

          Node_Set.forEach(element => {
            var Pos = element.position.clone().add(Position);
            this.Animation_Node_Move_Speed(element, Pos, Speed);
          });
        }
        /**动画_节点数组_移动_时间
         *@Node 节点
         *@Position 坐标
         *@Time 速度
         *@Call 回调函数
         */


        Animation_Nodes_Move_Time(Node_Set, Position, Time, Call) {
          if (Time === void 0) {
            Time = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.forEach((element, index) => {
            var Pos = element.position.clone().add(Position);

            if (index === Node_Set.length - 1) {
              this.Animation_Node_Move_Time(element, Pos, Time, Call, "smooth");
            } else {
              this.Animation_Node_Move_Time(element, Pos, Time, null, "smooth");
            }
          });
        }
        /**动画_节点数组_移动_跟随
         * 
         */


        Animation_Node_Move_Follow_Speed(Node_Set, Target_Node, Speed, Call) {
          if (Speed === void 0) {
            Speed = 1000;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          var Next_Pos = this.Get_Distance_Limited(Node_Set.position, Target_Node.position, 25);
          /**修正坐标 */

          if (this.Get_Distance(Next_Pos, Target_Node.position) <= 25) {
            Next_Pos = Target_Node.position.clone();
            this.Animation_Node_Move_Speed(Node_Set, Next_Pos, Speed, Call);
          } else {
            this.Animation_Node_Move_Speed(Node_Set, Next_Pos, Speed, () => {
              this.Animation_Node_Move_Follow_Speed(Node_Set, Target_Node, Speed, Call);
            });
          }
        }
        /**动画_受击效果
         *@pNode 节点
         *@Hit_time 受击时间
         *@Original_Color 初始颜色
         */


        Animation_Hit(Node_Set, Hit_time, Call, Color) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Color === void 0) {
            Color = color(255, 255, 255, 255);
          }

          var Component_Sprite = Node_Set.getComponent(Sprite);

          if (!Component_Sprite) {
            Node_Set.addComponent(Sprite);
            Component_Sprite = Node_Set.getComponent(Sprite);
          }

          var Original_Color = color(Component_Sprite.color.a, Component_Sprite.color.g, Component_Sprite.color.b, Component_Sprite.color.a);
          console.log(Original_Color);
          tween(Component_Sprite).to(Hit_time, {
            color: color(255, 0, 0, 255)
          }).call(() => {
            if (Color == null) {
              Component_Sprite.color = Original_Color;
            } else {
              Component_Sprite.color = Color;
            }

            Call == null || Call();
          }).start();
        }

        Animation_Hit_Opacity(Node_Set, Hit_time, Call, Min_Opacity, Max_Opacity) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Min_Opacity === void 0) {
            Min_Opacity = 155;
          }

          if (Max_Opacity === void 0) {
            Max_Opacity = 255;
          }

          var Component_UIOpacity = Node_Set.getComponent(UIOpacity);

          if (!Component_UIOpacity) {
            Component_UIOpacity = Node_Set.addComponent(UIOpacity);
          }

          Component_UIOpacity.opacity = Max_Opacity;
          tween(Component_UIOpacity).to(Hit_time / 2, {
            opacity: Min_Opacity
          }).to(Hit_time / 2, {
            opacity: Max_Opacity
          }).call(() => {
            Call == null || Call();
          }).start();
        }
        /**
        * 实现节点的死亡效果（缩放 + 透明度 + 爆炸效果）
        * @param Node_Set 目标节点
        * @param Duration 动画总时长
        * @param Call 动画完成后的回调函数
        * @param Min_Scale 最小缩放值（默认 0）
        * @param Max_Scale 最大缩放值（默认 1.5，用于爆炸效果）
        * @param Min_Opacity 最小透明度（默认 0）
        * @param Max_Opacity 最大透明度（默认 255）
        */


        Animation_Death_Effect(Node_Set, Duration, Call, Min_Scale, Max_Scale, Min_Opacity, Max_Opacity) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Min_Scale === void 0) {
            Min_Scale = 0;
          }

          if (Max_Scale === void 0) {
            Max_Scale = 1.5;
          }

          if (Min_Opacity === void 0) {
            Min_Opacity = 0;
          }

          if (Max_Opacity === void 0) {
            Max_Opacity = 255;
          }

          // 获取或添加 UIOpacity 组件
          var Component_UIOpacity = Node_Set.getComponent(UIOpacity);

          if (!Component_UIOpacity) {
            Component_UIOpacity = Node_Set.addComponent(UIOpacity);
          } // 初始状态


          var Initial_Scale = Node_Set.scale.clone();
          var Initial_Opacity = Max_Opacity; // 设置初始透明度

          Component_UIOpacity.opacity = Initial_Opacity; // 缩放 + 透明度 + 爆炸效果

          tween(Node_Set).to(Duration * 0.3, {
            scale: v3(Max_Scale, Max_Scale, 1)
          }) // 爆炸效果：快速放大
          .to(Duration * 0.2, {
            scale: v3(Min_Scale, Min_Scale, 1)
          }) // 缩小到最小
          .parallel( // 并行动画：透明度变化
          tween(Component_UIOpacity).to(Duration * 0.5, {
            opacity: Min_Opacity
          }) // 透明度逐渐降低
          ).call(() => {
            // 恢复初始状态（可选）
            Node_Set.scale = Initial_Scale;
            Component_UIOpacity.opacity = Initial_Opacity;
            console.log(555); // 动画完成后调用回调函数

            Call == null || Call();
          }).start();
        } //Easing "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";

        /**动画显示节点 */


        Anim_Show_Node(Node_Set, Time, Call) {
          if (Time === void 0) {
            Time = 0.5;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          var Component = Node_Set.getComponent(UIOpacity);

          if (!Component) {
            Node_Set.addComponent(UIOpacity);
            Component = Node_Set.getComponent(UIOpacity);
          }

          Component.opacity = 0;
          tween(Component).to(Time, {
            opacity: 255
          }, {
            easing: "smooth"
          }).call(() => {
            Call == null || Call();
          }).start();
        }
        /**动画_隐藏节点 */


        Anim_Hide_Node(Node_Set, Time, Call) {
          if (Time === void 0) {
            Time = 0.5;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          var Component = Node_Set.getComponent(UIOpacity);

          if (!Component) {
            Node_Set.addComponent(UIOpacity);
            Component = Node_Set.getComponent(UIOpacity);
          }

          Component.opacity = 255;
          tween(Component).to(Time, {
            opacity: 0
          }, {
            easing: "smooth"
          }).call(() => {
            Call == null || Call();
          }).start();
        }
        /**动画弹窗 */


        Anim_Show_Window(Node_Set, Time, Call) {
          if (Time === void 0) {
            Time = 0.5;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          var Scale_Current = v3(Node_Set.scale.x, Node_Set.scale.y, Node_Set.scale.z);
          Node_Set.scale = v3(0, 0, 1);
          tween(Node_Set).to(Time, {
            scale: Scale_Current
          }, {
            easing: "backOut"
          }).call(() => {
            Call == null || Call();
          }).start();
        }
        /**播放帧动画 */


        Anim_Frame_Play(Anim, Name, Speed, Call) {
          if (Name === void 0) {
            Name = null;
          }

          if (Speed === void 0) {
            Speed = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          } // if (Name == null || Name == "") {
          //     if (Anim.defaultClip) {
          //         Name = Anim.defaultClip.name;
          //     } else {
          //         console.error("动画缺失");
          //         return;
          //     }
          // }
          // let State: AnimationState = Anim.getState(Name);
          // State.speed = Speed;


          Anim.play(Name);
          Anim.once(Animation.EventType.FINISHED, () => {
            Call == null || Call();
          });
        }
        /**播放帧动画
         * @param Name 动画组件
         * @param Name 动画名字
         * @param Speed 播放速率
         * @param Min_Range 播放范围
         * @param Max_Range 播放范围
         * @param WrapMode 循环方式
         * @param RepeatCount 重复次数
         * @param Delay 延时时间
         * @param Call 回调
         *  Tool_Animation.instance.Anim_Frame_Play( Animation, null, 1, null, null, null, null, null, () => {
         
            })
         */


        Anim_Frame_Play_Plus(Anim, Name, Speed, Min_Range, Max_Range, WrapMode, RepeatCount, Delay, Call) {
          if (Name === void 0) {
            Name = null;
          }

          if (Speed === void 0) {
            Speed = 1;
          }

          if (Min_Range === void 0) {
            Min_Range = null;
          }

          if (Max_Range === void 0) {
            Max_Range = null;
          }

          if (WrapMode === void 0) {
            WrapMode = null;
          }

          if (RepeatCount === void 0) {
            RepeatCount = null;
          }

          if (Delay === void 0) {
            Delay = 0;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          if (Name == null || Name == "") {
            if (Anim.defaultClip) {
              Name = Anim.defaultClip.name;
            } else {
              console.error("动画缺失");
              return;
            }
          }

          var State = Anim.getState(Name);

          if (Speed != null) {
            State.speed = Speed;
          }

          if (WrapMode != null) {
            State.wrapMode = WrapMode;
          }

          if (RepeatCount != null) {
            State.repeatCount = RepeatCount;
          }

          if (Min_Range != null && Max_Range != null && Min_Range <= Max_Range) {
            State.playbackRange = {
              min: Min_Range,
              max: Max_Range
            };
          }

          if (Delay != null) {
            State.delay = Delay;
          }

          Anim.play(Name);
          Anim.once(Animation.EventType.FINISHED, () => {
            Call == null || Call();
          });
        }
        /**切换帧动画 */


        Anim_Frame_CrossFade(Anim, Name, Duration, Call) {
          if (Name === void 0) {
            Name = null;
          }

          if (Duration === void 0) {
            Duration = 0;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          Anim.crossFade(Name, Duration);
          Anim.once(Animation.EventType.FINISHED, () => {
            Call == null || Call();
          });
        }
        /**恢复帧动画 */


        Anim_Frame_Resume(Anim, Name, Speed, Call) {
          if (Name === void 0) {
            Name = null;
          }

          if (Speed === void 0) {
            Speed = 1;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          if (Name == null) {
            if (Anim.defaultClip) {
              Name = Anim.defaultClip.name;
            } else {
              console.error("动画缺失");
              return;
            }
          }

          var State = Anim.getState(Name);
          State.speed = Speed;

          if (State.isPlaying) {
            if (State.isPaused) {
              Anim.resume();
              Anim.once(Animation.EventType.FINISHED, () => {
                Call == null || Call();
              });
            } else {
              this.Anim_Frame_Pause(Anim);
            }
          } else {
            this.Anim_Frame_Play(Anim, Name, Speed, Call);
          }
        }
        /**恢复帧动画 */


        Anim_Frame_Resume_Plus(Anim, Name, Speed, Min_Range, Max_Range, WrapMode, RepeatCount, Delay, Call) {
          if (Name === void 0) {
            Name = null;
          }

          if (Speed === void 0) {
            Speed = 1;
          }

          if (Min_Range === void 0) {
            Min_Range = null;
          }

          if (Max_Range === void 0) {
            Max_Range = null;
          }

          if (WrapMode === void 0) {
            WrapMode = null;
          }

          if (RepeatCount === void 0) {
            RepeatCount = null;
          }

          if (Delay === void 0) {
            Delay = 0;
          }

          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          if (Name == null) {
            if (Anim.defaultClip) {
              Name = Anim.defaultClip.name;
            } else {
              console.error("动画缺失");
              return;
            }
          }

          var State = Anim.getState(Name); // console.log("是否已被暂停或停止:", State.isMotionless);
          // console.log("是否已被暂停:", State.isPaused);
          // console.log(" 是否正在播放状态", State.isPlaying);

          if (WrapMode != null) {
            State.wrapMode = WrapMode;
          }

          if (RepeatCount != null) {
            State.repeatCount = RepeatCount;
          }

          if (Min_Range != null && Max_Range != null && Min_Range <= Max_Range) {
            State.playbackRange = {
              min: Min_Range,
              max: Max_Range
            };
          }

          State.delay = Delay;
          State.speed = Speed;

          if (State.isPlaying) {
            if (State.isPaused) {
              Anim.resume();
              Anim.once(Animation.EventType.FINISHED, () => {
                Call == null || Call();
              });
            } else {
              this.Anim_Frame_Pause(Anim);
            }
          } else {
            this.Anim_Frame_Play_Plus(Anim, Name, Speed, Min_Range, Max_Range, WrapMode, RepeatCount, Delay, Call);
          }
        }
        /**暂停帧动画 */


        Anim_Frame_Pause(Anim, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          Anim.pause();
          Anim.off(Animation.EventType.FINISHED);
          Call == null || Call();
        }
        /**停止帧动画 */


        Anim_Frame_Stop(Anim, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          Anim.stop();
          Anim.off(Animation.EventType.FINISHED);
          Call == null || Call();
        }
        /**帧动画速度修改 */


        Anim_Frame_Speed(Anim, Name, Speed) {
          if (Name === void 0) {
            Name = null;
          }

          if (Speed === void 0) {
            Speed = 1;
          }

          if (Anim == null) {
            console.error("动画缺失");
            return;
          }

          if (Name == null || Name == "") {
            if (Anim.defaultClip) {
              Name = Anim.defaultClip.name;
            } else {
              console.error("动画缺失");
              return;
            }
          }

          var State = Anim.getState(Name);
          State.speed = Speed;
        }
        /**播放骨骼动画 */


        Anim_Skeleton_Play(Skeleton, Skin, Track_Index, Anim_Name, Loop, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Skeleton.setSkin(Skin); //@ts-ignore

          Skeleton._updateSkeletonData();

          Skeleton.setAnimation(Track_Index, Anim_Name, Loop);
          Skeleton.setCompleteListener(() => {
            Skeleton.setCompleteListener(null);
            Call == null || Call();
          });
        }
        /**动画_心跳效果 */


        Animation_Heartbeat(Node_Set) {
          tween(Node_Set).repeatForever(tween().to(0.5, {
            scale: v3(0.8, 0.8, 1)
          }).to(0.3, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.45, {
            scale: v3(0.75, 0.75, 1)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          })).start();
        }
        /**动画_提示效果 */


        Animation_Tip(Node_Set) {
          tween(Node_Set).repeatForever(tween().to(0.3, {
            scale: v3(0.8, 0.8, 1)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).to(0.1, {
            angle: 10
          }).to(0.1, {
            angle: -20
          }).to(0.1, {
            angle: 20
          }).to(0.1, {
            angle: -20
          }).to(0.1, {
            angle: 10
          }).to(0.1, {
            angle: 0
          }).delay(1)).start();
        }

        Anim_On(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Component_UIOpacity = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Component_Get(Node_Set, UIOpacity); // let Time = 0.25;
          // tween(Node_Set)
          //     .to(Time, { scale: v3(0.8, 0.8, 1) })
          //     .start();
          // tween(Component_UIOpacity)
          //     .to(Time, { opacity: 100 })
          //     .call(() => {
          //         Call?.();
          //     })
          //     .start();

          var Time = 0.15;
          tween(Node_Set).to(Time, {
            scale: v3(0.95, 0.95, 1)
          }).start();
          tween(Component_UIOpacity).to(Time, {
            opacity: 200
          }).call(() => {
            Call == null || Call();
          }).start();
        }

        Anim_Off(Node_Set) {
          var Component_UIOpacity = (_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.Component_Get(Node_Set, UIOpacity); // tween(Node_Set)
          //     .to(0.17, { scale: v3(1.05, 1.05, 1) })
          //     .to(0.08, { scale: v3(1, 1, 1) })
          //     .start();
          // tween(Component_UIOpacity)
          //     .to(0.25, { opacity: 255 })
          //     .start();

          tween(Node_Set).to(0.1, {
            scale: v3(1.05, 1.05, 1)
          }).to(0.05, {
            scale: v3(1, 1, 1)
          }).start();
          tween(Component_UIOpacity).to(0.15, {
            opacity: 255
          }).start();
        }
        /**
         * 溶解动画
         * @param Node_Set 溶解节点
         * @param Set_Material 溶解材质 let Set_Material = await this.Resoure_Data.Load_Material("Effect/dissolve");
         * @param Time 时间
         * @param Call 回调
         */


        Anim_Dissolve(Node_Set, Set_Material, Time, Call) {
          return _asyncToGenerator(function* () {
            if (Time === void 0) {
              Time = 1;
            }

            if (Call === void 0) {
              Call = () => {};
            }

            if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
              error: Error()
            }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Set_Material)) {
              return;
            }

            return new Promise(res => {
              var Sp = Node_Set.getComponent(Sprite); // 确保为每个节点创建独立的材质实例

              if (!Sp.customMaterial) {
                Sp.customMaterial = new Material(); // 克隆材质

                Sp.customMaterial.copy(Set_Material);
              } else {
                Sp.customMaterial.copy(Set_Material); // 如果已经存在，重新复制
              }

              Sp.customMaterial.setProperty('dissolveThreshold', 0);
              var Obj_Start = {
                num: 0
              };
              var Obj_End = {
                num: 1
              };
              tween(Obj_Start).to(Time, Obj_End, {
                progress: (start, end, current, ratio) => {
                  var Current_Num = 1 * ratio; //1 * ratio     0.3 + 0.7 * ratio

                  Sp.customMaterial.setProperty('dissolveThreshold', Current_Num);
                  return Current_Num;
                }
              }).call(() => {
                res();
                Call == null || Call();
              }).start();
            });
          })();
        }
        /**
         * 获取距离目标坐标最近的点的索引和距离
         * @param Position_World 世界坐标
         * @param Target_Position_World_Arr 目标世界坐标数组
         * @returns 返回最近点的索引和距离，如果数组为空则返回 null
         */


        Get_Min_Distance_Pos_Arr(Position_World, Target_Position_World_Arr) {
          // 参数校验
          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Position_World) || !(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Target_Position_World_Arr)) {
            console.warn("类型异常");
            return null;
          } // 检查数组是否为空


          if (Target_Position_World_Arr.length === 0) {
            return null;
          } // 初始化最小距离和索引


          var Min_Index = 0;
          var Min_Distance = Number.MAX_VALUE; // 遍历数组，找到距离最小的点

          for (var i = 0; i < Target_Position_World_Arr.length; i++) {
            var Distance = this.Get_Distance(Position_World, Target_Position_World_Arr[i]);

            if (Distance < Min_Distance) {
              Min_Distance = Distance;
              Min_Index = i;
            }
          }

          return {
            Index: Min_Index,
            Distance: Min_Distance
          };
        } // /**
        //  * 获取距离目标坐标最近的点的索引和距离
        //  * @param Position_World 世界坐标
        //  * @param Target_Parent_Node 父节点
        //  * @returns 返回最近子节点的索引和距离，如果没有子节点则返回 null
        //  */
        // Get_Min_Distance_Node(Position_World: Vec3, Target_Parent_Node: Node): { Index: number; Distance: number } | null {
        //     // 参数校验
        //     if (!Tool_Other.instance.Get_Type_Is_Abnormal(Position_World) || !Tool_Other.instance.Get_Type_Is_Abnormal(Target_Parent_Node)) {
        //         console.warn("类型异常");
        //         return null;
        //     }
        //     // 检查子节点数量
        //     const Children = Target_Parent_Node.children;
        //     if (Children.length === 0) {
        //         return null;
        //     }
        //     // 初始化最小距离和索引
        //     let Min_Index = 0;
        //     let Min_Distance = Number.MAX_VALUE;
        //     // 遍历子节点，找到距离最小的节点
        //     for (let i = 0; i < Children.length; i++) {
        //         const Child_Position = Children[i].worldPosition;
        //         const Distance = this.Get_Distance(Position_World, Child_Position);
        //         if (Distance < Min_Distance) {
        //             Min_Distance = Distance;
        //             Min_Index = i;
        //         }
        //     }
        //     return {
        //         Index: Min_Index,
        //         Distance: Min_Distance
        //     };
        // }

        /**
         * 查找距离给定世界坐标最近的子节点
         * @param Position_World - 目标世界坐标(Vec3类型)
         * @param Target_Nodes - 要搜索的父节点或节点数组(Node|Node[])
         * @returns 返回包含最近节点索引和距离的对象，若无有效节点则返回null
         */


        Get_Min_Distance_Node(Position_World, Target_Nodes) {
          // 参数有效性检查
          if (!Position_World || !Target_Nodes) {
            console.warn("参数无效:必须提供Position_World和Target_Nodes");
            return null;
          } // 统一处理为要遍历的节点数组


          var NodesToCheck = [];

          if (Array.isArray(Target_Nodes)) {
            NodesToCheck = Target_Nodes;
          } else if (Target_Nodes.isValid && Target_Nodes.children) {
            NodesToCheck = Target_Nodes.children;
          } else {
            return null;
          } // 检查空数组情况


          if (NodesToCheck.length === 0) {
            return null;
          } // 初始化结果


          var Min_Index = -1;
          var Min_Distance = Number.MAX_VALUE; // 遍历查找最近节点

          for (var i = 0; i < NodesToCheck.length; i++) {
            var _Node = NodesToCheck[i]; // 检查节点有效性

            if (!(_Node != null && _Node.isValid) || !_Node.worldPosition) continue; // 计算距离

            var Child_Position = NodesToCheck[i].worldPosition;
            var Distance = this.Get_Distance(Position_World, Child_Position); // 更新最近节点

            if (Distance < Min_Distance) {
              Min_Index = i;
              Min_Distance = Distance;
            }
          }

          return Min_Index >= 0 ? {
            Index: Min_Index,
            Distance: Min_Distance
          } : null;
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1656cd3ef647d58fcc5a794c142f852a9ca9b35.js.map