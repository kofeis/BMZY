System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Collider2D, color, Color, Component, Contact2DType, Graphics, input, Input, macro, Node, NodeEventType, PolygonCollider2D, RigidBody2D, Tween, tween, UIOpacity, UITransform, v2, v3, view, Tool_Other, Tool_Animation, Event_Data, _dec, _class2, _class3, _crd, ccclass, property, Temp_V2, Temp_V3, Tool_Event;

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "./Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Animation(extras) {
    _reporterNs.report("Tool_Animation", "./Tool_Animation", _context.meta, extras);
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
      Collider2D = _cc.Collider2D;
      color = _cc.color;
      Color = _cc.Color;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Graphics = _cc.Graphics;
      input = _cc.input;
      Input = _cc.Input;
      macro = _cc.macro;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      PolygonCollider2D = _cc.PolygonCollider2D;
      RigidBody2D = _cc.RigidBody2D;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Tool_Other = _unresolved_2.Tool_Other;
    }, function (_unresolved_3) {
      Tool_Animation = _unresolved_3.Tool_Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f58aYfMDZDa4/5l03HPOn/", "Tool_Event", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCObject', 'Collider2D', 'color', 'Color', 'Component', 'Contact2DType', 'EventTouch', 'Graphics', 'input', 'Input', 'macro', 'Node', 'NodeEventType', 'PolygonCollider2D', 'RigidBody2D', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec2', 'Vec3', 'view', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);
      Temp_V2 = v2();
      Temp_V3 = v3();
      /**
       * 全局事件监听方法
       * @param Event_Name 事件名
       * @param Args       事件参数
       */

      Event_Data = class Event_Data {
        constructor() {
          this.Event = void 0;
          this.Listener = void 0;
          this.Target = void 0;
        }

      };

      _export("Tool_Event", Tool_Event = (_dec = ccclass('Tool_Event'), _dec(_class2 = (_class3 = class Tool_Event extends Component {
        constructor() {
          super(...arguments);
          this.Events = {};
        }

        /**
        * 事件注册(全局)
        * @param Event_Name 事件名
        * @param listener 处理事件的侦听器函数
        * @param object 侦听函数绑定的作用域对象
        */
        Event_On(Event_Name, listener, Target) {
          if (!Event_Name || !listener) {
            console.debug("\u3010" + Event_Name + "\u3011\u4E8B\u4EF6\u6CE8\u518C\u4E3A\u7A7A");
            return;
          }

          var List = this.Events[Event_Name];

          if (List == null) {
            List = [];
            this.Events[Event_Name] = List;
          }

          var length = List.length;

          for (var i = 0; i < length; i++) {
            var bin = List[i];

            if (bin.Listener == listener && bin.Target == Target) {
              console.debug("\u3010" + Event_Name + "\u3011\u4E8B\u4EF6\u6CE8\u518C\u91CD\u590D");
            }
          }

          var Data = new Event_Data();
          Data.Event = Event_Name;
          Data.Listener = listener;
          Data.Target = Target;
          List.push(Data);
        }
        /**
         * 监听一次事件，事件响应后，该监听自动移除
         * @param Event_Name 事件名
         * @param Listener 事件触发回调
         * @param object 监听函数绑定的作用域对象
         */


        Event_Once(Event_Name, Listener, Target) {
          var _Listener = ($Event, $Args) => {
            this.Event_Off(Event_Name, _Listener, Target);
            _Listener = null;
            Listener.call(Target, $Event, $Args);
          };

          this.Event_On(Event_Name, _Listener, Target);
        }
        /**
         * 事件移除(全局)
         * @param Event_Name 事件名
         * @param listener 事件触发回调
         * @param Target 监听函数绑定的作用域对象
         */


        Event_Off(Event_Name, Listener, Target) {
          var List = this.Events[Event_Name];

          if (!List) {
            console.debug("\u3010" + Event_Name + "\u3011\u4E8B\u4EF6\u4E0D\u5B58\u5728");
            return;
          }

          var Length = List.length;

          for (var i = Length - 1; i >= 0; i--) {
            var Bin = List[i];

            if (Bin.Listener == Listener && Bin.Target == Target) {
              List.splice(i, 1);
              break;
            }
          }

          if (List.length == 0) {
            delete this.Events[Event_Name];
          }
        }
        /**
        * 事件移除(全局)-根据 Target 
        * @param Target 监听函数绑定的作用域对象(一般为节点或脚本)
        */


        Event_Off_Target(Target) {
          for (var _Event_Name in this.Events) {
            if (Object.prototype.hasOwnProperty.call(this.Events, _Event_Name)) {
              var Event_Datas = this.Events[_Event_Name];
              var length = Event_Datas.length;

              for (var i = length - 1; i >= 0; i--) {
                var _Event_Data = Event_Datas[i];

                if (_Event_Data.Target === Target) {
                  Event_Datas.splice(i, 1);
                  break;
                }
              }

              if (Event_Datas.length == 0) {
                delete this.Events[_Event_Name];
              }
            }
          }
        }
        /** 
         * 事件触发(全局)
         * @param Event_Name 事件名
         * @param Args 事件参数
         */


        Event_Dispatch(Event_Name, Args) {
          if (Args === void 0) {
            Args = null;
          }

          var list = this.Events[Event_Name];

          if (list != null) {
            var Temp = list.concat();
            var Length = Temp.length;

            for (var i = 0; i < Length; i++) {
              var Event_Bin = Temp[i];
              Event_Bin.Listener.call(Event_Bin.Target, Event_Name, Args);
            }
          }
        }
        /**注册触摸开始监听 */


        On_Event_TOUCH_START(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.on(NodeEventType.TOUCH_START, Call, Node_Set);
        }
        /**注册触摸结束监听 */


        On_Event_TOUCH_END(Node_Set, Call, Target, UseCapture) {
          if (Call === void 0) {
            Call = Event => {};
          }

          // 如果传入了 Target 则使用它，否则默认用 Node_Set 作为 this 上下文
          var TargetObj = Target !== undefined ? Target : Node_Set; // 如果传入了 UseCapture 则使用它，否则默认 false

          var IsUseCapture = UseCapture !== undefined ? UseCapture : false; // 注册事件监听

          Node_Set.on(NodeEventType.TOUCH_END, Call, TargetObj, IsUseCapture);
        }
        /**注册触摸取消监听 */


        On_Event_TOUCH_CANCEL(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.on(NodeEventType.TOUCH_CANCEL, Call, Node_Set);
        }
        /**注册触摸移动监听 */


        On_Event_TOUCH_MOVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.on(NodeEventType.TOUCH_MOVE, Call, Node_Set);
        }
        /**注销触摸开始监听 */


        Off_Event_TOUCH_START(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.off(NodeEventType.TOUCH_START, Call, Node_Set);
        }
        /**注销触摸结束监听 */


        Off_Event_TOUCH_END(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.off(NodeEventType.TOUCH_END, Call, Node_Set);
        }
        /**注销触摸取消监听 */


        Off_Event_TOUCH_CANCEL(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.off(NodeEventType.TOUCH_CANCEL, Call, Node_Set);
        }
        /**注销触摸移动监听 */


        Off_Event_TOUCH_MOVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = Event => {};
          }

          Node_Set.off(NodeEventType.TOUCH_MOVE, Call, Node_Set);
        }
        /**注销所有触摸监听 */


        Off_Event_TOUCH_All(Node_Set) {
          Node_Set.off(NodeEventType.TOUCH_START);
          Node_Set.off(NodeEventType.TOUCH_END);
          Node_Set.off(NodeEventType.TOUCH_CANCEL);
          Node_Set.off(NodeEventType.TOUCH_MOVE);
        }
        /**监听触摸按住
         * @param Node_Set 监听节点
         * @param Response_Time 响应时长
         * @param Pressing_Call 按住回调
         * @param Pressend_Call 松开回调
         */


        On_Event_TOUCH_Pressing(Node_Set, Response_Time, Pressing_Call, Pressend_Call) {
          if (Pressing_Call === void 0) {
            Pressing_Call = () => {};
          }

          if (Pressend_Call === void 0) {
            Pressend_Call = () => {};
          }

          var Is_Pressing = false;

          var Pressing = () => {
            if (Is_Pressing) {
              this.scheduleOnce(() => {
                if (Is_Pressing) {
                  console.debug("按住", Node_Set.name);
                  Pressing_Call && Pressing_Call();
                  Pressing();
                }
              }, 0.05);
            }
          };

          var Pressend = () => {
            Tween.stopAllByTarget(Start_Obj);
            Pressend_Call && Pressend_Call();
          };

          var Start_Obj = {
            num: 0
          };
          this.On_Event_TOUCH_START(Node_Set, () => {
            Start_Obj = {
              num: 0
            };
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Function_Target(Response_Time, Start_Obj, () => {
              Is_Pressing = true;
              Pressing();
            });
          });
          this.On_Event_TOUCH_END(Node_Set, () => {
            Is_Pressing = false;
            Pressend();
          });
          this.On_Event_TOUCH_CANCEL(Node_Set, () => {
            Is_Pressing = false;
            Pressend();
          });
          this.On_Event_TOUCH_MOVE(Node_Set, Event => {
            // console.log(Event.getUILocation());
            // console.log(Event);
            var Target_Width = Event.target.getComponent(UITransform).width;
            var Target_Height = Event.target.getComponent(UITransform).height;
            var Pos_Touch_World = v3(Event.getUILocation().x, Event.getUILocation().y, Event.getUILocation().z);
            var Pos_Target_World = Event.target.getWorldPosition();

            if (Pos_Touch_World.x < Pos_Target_World.x - Target_Width / 2 || Pos_Touch_World.x > Pos_Target_World.x + Target_Width / 2 || Pos_Touch_World.y < Pos_Target_World.y - Target_Height / 2 || Pos_Touch_World.y > Pos_Target_World.y + Target_Height / 2) {
              if (!Is_Pressing) {
                return;
              }

              Is_Pressing = false;
              Pressend();
            } else {
              if (Is_Pressing) {
                return;
              }

              Is_Pressing = true;
              Pressing();
            }
          });
        }
        /**监听触摸长按
         * @param Node_Set 监听节点
         * @param Response_Time 响应时长
         * @param Press_Long_Call 长按回调
         * @param Press_Short_Call 短按回调
         */


        On_Event_TOUCH_Presslong(Node_Set, Response_Time, Press_Long_Call, Press_Short_Call) {
          if (Press_Long_Call === void 0) {
            Press_Long_Call = () => {};
          }

          if (Press_Short_Call === void 0) {
            Press_Short_Call = () => {};
          }

          var Is_Press_Long = false;
          var Is_Cancel = false;

          var Press_Long = () => {
            console.debug("长按", Node_Set.name);
            Is_Press_Long = true;
            Press_Long_Call && Press_Long_Call();
          };

          var Press_Short = () => {
            if (Is_Cancel) {
              return;
            }

            if (!Is_Press_Long) {
              console.debug("短按", Node_Set.name);
              Tween.stopAllByTarget(Start_Obj);
              Press_Short_Call && Press_Short_Call();
            } else {
              Is_Press_Long = false;
            }
          };

          var Press_Shorteee = Event => {
            if (!Is_Cancel) {
              var Pos_Touch_World = v3(Event.getUILocation().x, Event.getUILocation().y, Event.getUILocation().z);
              var Pos_Target_World = Event.target.getWorldPosition();

              if (Pos_Touch_World.x < Pos_Target_World.x - Target_Width / 2 || Pos_Touch_World.x > Pos_Target_World.x + Target_Width / 2 || Pos_Touch_World.y < Pos_Target_World.y - Target_Height / 2 || Pos_Touch_World.y > Pos_Target_World.y + Target_Height / 2) {
                Tween.stopAllByTarget(Start_Obj);
                Is_Cancel = true;
                this.Off_Event_TOUCH_MOVE(Node_Set, Press_Shorteee);
              }
            }
          };

          var Target_Width = Node_Set.getComponent(UITransform).width;
          var Target_Height = Node_Set.getComponent(UITransform).height;
          var Start_Obj = {
            num: 0
          };
          this.On_Event_TOUCH_START(Node_Set, () => {
            Is_Press_Long = false;
            Is_Cancel = false;
            Start_Obj = {
              num: 0
            };
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Function_Target(Response_Time, Start_Obj, () => {
              Press_Long();
            });
          });
          this.On_Event_TOUCH_END(Node_Set, () => {
            Press_Short();
          });
          this.On_Event_TOUCH_CANCEL(Node_Set, () => {
            Is_Press_Long = false;
          });
          this.On_Event_TOUCH_MOVE(Node_Set, Press_Shorteee); // this.On_Event_TOUCH_MOVE(Node_Set, (Event) => {
          //     if (!Is_Cancel) {
          //         let Pos_Touch_World = v3(Event.getUILocation().x, Event.getUILocation().y, Event.getUILocation().z);
          //         let Pos_Target_World = Event.target.getWorldPosition();
          //         if (Pos_Touch_World.x < Pos_Target_World.x - Target_Width / 2 || Pos_Touch_World.x > Pos_Target_World.x + Target_Width / 2 || Pos_Touch_World.y < Pos_Target_World.y - Target_Height / 2 || Pos_Touch_World.y > Pos_Target_World.y + Target_Height / 2) {
          //             Tween.stopAllByTarget(Start_Obj);
          //             Is_Cancel = true;
          //             this.Off_Btn_TOUCH_START(Node_Set)
          //         }
          //     }
          // });
        }
        /**监听触摸双击
         * @param Node_Set 监听节点
         * @param Touch_Count_All 触摸总次数
         * @param Touch_Interval 触摸间隔
         * @param Double_On_Call 双击回调
         * @param Double_Off_Call 松开回调
         */


        On_Event_TOUCH_Double(Node_Set, Touch_Count_All, Touch_Interval, Double_On_Call, Double_Off_Call) {
          if (Touch_Count_All === void 0) {
            Touch_Count_All = 2;
          }

          if (Touch_Interval === void 0) {
            Touch_Interval = 0.25;
          }

          if (Double_On_Call === void 0) {
            Double_On_Call = () => {};
          }

          if (Double_Off_Call === void 0) {
            Double_Off_Call = () => {};
          }

          var Start_Obj = {
            num: 0
          };
          var Touch_Count = 0;
          this.On_Event_TOUCH_START(Node_Set, () => {
            Tween.stopAllByTarget(Start_Obj);
            Touch_Count++;

            if (Touch_Count == Touch_Count_All) {
              Touch_Count = 0;
              console.debug("双击", Node_Set.name);
              Double_On_Call && Double_On_Call();
            }

            Start_Obj = {
              num: 0
            };
            (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Async_Function_Target(Touch_Interval, Start_Obj, () => {
              Touch_Count = 0;
            });
          });
          this.On_Event_TOUCH_END(Node_Set, Call);
          this.On_Event_TOUCH_CANCEL(Node_Set, Call);

          function Call() {
            Double_Off_Call && Double_Off_Call();
          }
        }
        /**
         * 监听触摸拖动
         * @param Node_Set 监听节点
         * @param Call 回调
         * @param Interactable 可互动
         * let Interactable = true;
         * On_Event_TOUCH_Drag(Node_Set,Call,()=>Interactable);
         */


        On_Event_TOUCH_Drag(Node_Set, Call, Interactable) {
          if (Call === void 0) {
            Call = () => {};
          }

          if (Interactable === void 0) {
            Interactable = () => true;
          }

          // 触摸改变位置
          var Pos_Touch_Change = null; // 触摸开始位置

          var Pos_Touch_Start = null; // 触摸结束位置

          var Pos_Touch_End = null; // 设计分辨率

          var HalfScreenWidth = view.getDesignResolutionSize().width / 2;
          var HalfScreenHeight = view.getDesignResolutionSize().height / 2; // 工具函数：计算触摸位置相对于屏幕中心的位置

          var Get_Touch_Position = Event => {
            return v3(Event.getUILocation().x - HalfScreenWidth, Event.getUILocation().y - HalfScreenHeight, 0);
          };

          this.On_Event_TOUCH_START(Node_Set, Event => {
            // 如果不可交互，直接返回
            if (!Interactable()) {
              return;
            } // 记录起始触摸位置


            Pos_Touch_Start = Node_Set.position.clone();
            Pos_Touch_Change = Get_Touch_Position(Event);
          });
          this.On_Event_TOUCH_MOVE(Node_Set, Event => {
            // 如果不可交互或没有起始位置，直接返回
            if (!Interactable() || !Pos_Touch_Change) {
              return;
            } // 计算当前触摸位置


            var Pos_Touch = Get_Touch_Position(Event);
            var Pos_Target = Node_Set.position.clone().add(Pos_Touch.clone().subtract(Pos_Touch_Change)); // 更新节点位置

            Node_Set.position = Pos_Target; // 更新起始触摸位置

            Pos_Touch_Change = Pos_Touch;
          });
          this.On_Event_TOUCH_END(Node_Set, Event => {
            // 如果不可交互，直接返回
            if (!Interactable()) {
              return;
            }

            Pos_Touch_End = Get_Touch_Position(Event); // 调用回调函数

            Call == null || Call(Event, Pos_Touch_Start, Pos_Touch_End);
          });
        }
        /**监听触摸滑动
         * @param Node_Set 监听节点
         * @param Call 回调
         */


        On_Event_TOUCH_Slide(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Pos_Touch_Start = null;
          var Pos_Touch_Change = null;
          var Return = {
            Angle: null,
            Distance: null
          };
          this.On_Event_TOUCH_START(Node_Set, Event => {
            Pos_Touch_Start = v3(Event.getUILocation().x - view.getDesignResolutionSize().width / 2, Event.getUILocation().y - view.getDesignResolutionSize().height / 2, 0);
          });
          this.On_Event_TOUCH_END(Node_Set, Event => {
            Pos_Touch_Change = v3(Event.getUILocation().x - view.getDesignResolutionSize().width / 2, Event.getUILocation().y - view.getDesignResolutionSize().height / 2, 0);
            Return.Angle = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Angle(Pos_Touch_Start, Pos_Touch_Change);
            Return.Distance = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Distance(Pos_Touch_Start, Pos_Touch_Change);
            Call == null || Call(Return.Angle, Return.Distance);
          });
          this.On_Event_TOUCH_CANCEL(Node_Set, Event => {
            Pos_Touch_Change = v3(Event.getUILocation().x - view.getDesignResolutionSize().width / 2, Event.getUILocation().y - view.getDesignResolutionSize().height / 2, 0);
            Return.Angle = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Angle(Pos_Touch_Start, Pos_Touch_Change);
            Return.Distance = (_crd && Tool_Animation === void 0 ? (_reportPossibleCrUseOfTool_Animation({
              error: Error()
            }), Tool_Animation) : Tool_Animation).instance.Get_Distance(Pos_Touch_Start, Pos_Touch_Change);
            Call == null || Call(Return.Angle, Return.Distance);
          });
        }
        /**监听鼠标按下 */


        On_Event_MOUSE_DOWN(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_DOWN, Call, Node_Set);
        }
        /**监听鼠标松开 */


        On_Event_MOUSE_UP(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_UP, Call, Node_Set);
        }
        /**监听鼠标移动 */


        On_Event_MOUSE_MOVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_MOVE, Call, Node_Set);
        }
        /**监听鼠标滚动 */


        On_Event_MOUSE_WHEEL(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_WHEEL, Call, Node_Set);
        }
        /**监听鼠标进入 */


        On_Event_MOUSE_ENTER(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_ENTER, Call, Node_Set);
        }
        /**监听鼠标移出 */


        On_Event_MOUSE_LEAVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(NodeEventType.MOUSE_LEAVE, Call, Node_Set);
        }
        /**监听键盘按下 */


        On_KEY_DOWN(Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          input.on(Input.EventType.KEY_DOWN, Call(), this);
        }
        /**监听键盘按住 */


        On_KEY_PRESSING(Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          input.on(Input.EventType.KEY_PRESSING, Call(), this);
        }
        /**监听键盘松开 */


        On_KEY_UP(Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          input.on(Input.EventType.KEY_UP, Call(), this);
        }
        /**监听重力感应 */


        On_Sys_DEVICEMOTION(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          Node_Set.on(Input.EventType.DEVICEMOTION, Call, Node_Set);
        }
        /**设置按钮事件
         * @Node_Set 待设置的节点
         * @Target_Node 目标节点
         * @Component 脚本/组件名
         * @Handler  响应事件函数名
         */


        Set_Btn_Event_Add(Node_Set, Target_Node, Scr_Name, Fun_Name, CustomEventData) {
          if (CustomEventData === void 0) {
            CustomEventData = null;
          }

          var Component_Button = Node_Set.getComponent(Button);

          if (Component_Button == null) {
            Component_Button = Node_Set.addComponent(Button);
          }

          var Component_UIOpacity = Node_Set.getComponent(UIOpacity);

          if (Component_UIOpacity == null) {
            Node_Set.addComponent(UIOpacity);
          }

          var Event = new Component.EventHandler();
          Event.target = Target_Node;
          Event.component = Scr_Name;
          Event.handler = Fun_Name;
          Event.customEventData = CustomEventData;
          Component_Button.clickEvents.push(Event);
          console.debug(Component_Button.clickEvents);
        }
        /**设置按钮动画
         * @Anim_Switch 动画开关 
         */


        Set_Btn_Event_Anim(Node_Set, Anim_Switch) {
          if (Anim_Switch === void 0) {
            Anim_Switch = false;
          }

          var Component_Button = Node_Set.getComponent(Button);

          if (Component_Button == null) {
            Component_Button = Node_Set.addComponent(Button);
          }

          var Component_UIOpacity = Node_Set.getComponent(UIOpacity);

          if (Component_UIOpacity == null) {
            Node_Set.addComponent(UIOpacity);
          }

          if (Anim_Switch) {
            Component_Button.transition = 0;
            var Anim_State = false;
            Node_Set.off(NodeEventType.TOUCH_START, () => {
              if (Anim_State) {
                return;
              }

              Anim_State = true;
              Anim_On(Node_Set);
            }, Node_Set);
            this.On_Event_TOUCH_START(Node_Set, () => {
              if (Anim_State) {
                return;
              }

              Anim_State = true;
              Anim_On(Node_Set);
            });
            this.On_Event_TOUCH_END(Node_Set, () => {
              if (!Anim_State) {
                return;
              }

              Anim_State = false;
              Anim_Off(Node_Set);
            });
            this.On_Event_TOUCH_CANCEL(Node_Set, () => {
              if (!Anim_State) {
                return;
              }

              Anim_State = false;
              Anim_Off(Node_Set);
            });
            this.On_Event_TOUCH_MOVE(Node_Set, Event => {
              // console.log(Event.getUILocation());
              // console.log(Event);
              var Target_Width = Event.target.getComponent(UITransform).width;
              var Target_Height = Event.target.getComponent(UITransform).height;
              var Pos_Touch_World = v3(Event.getUILocation().x, Event.getUILocation().y, Event.getUILocation().z);
              var Pos_Target_World = Event.target.getWorldPosition();

              if (Pos_Touch_World.x < Pos_Target_World.x - Target_Width / 2 || Pos_Touch_World.x > Pos_Target_World.x + Target_Width / 2 || Pos_Touch_World.y < Pos_Target_World.y - Target_Height / 2 || Pos_Touch_World.y > Pos_Target_World.y + Target_Height / 2) {
                if (!Anim_State) {
                  return;
                }

                Anim_State = false;
                Anim_Off(Node_Set);
              } else {
                if (Anim_State) {
                  return;
                }

                Anim_State = true;
                Anim_On(Node_Set);
              }
            });
          } else {
            Component_Button.transition = 3;
            Component_Button.zoomScale = 0.975;
            Component_Button.duration = 0.05;
          } // function Anim_On(Node_Set) {
          //     console.debug("按下");
          //     let Time = 0.25;
          //     tween(Node_Set)
          //         .to(Time, { scale: v3(0.8, 0.8, 1) })
          //         .start();
          //     tween(Node_Set.getComponent(UIOpacity))
          //         .to(Time, { opacity: 100 })
          //         .start();
          // }
          // function Anim_Off(Node_Set) {
          //     console.debug("松开");
          //     tween(Node_Set)
          //         .to(0.17, { scale: v3(1.05, 1.05, 1) })
          //         .to(0.08, { scale: v3(1, 1, 1) })
          //         .start();
          //     tween(Node_Set.getComponent(UIOpacity))
          //         .to(0.25, { opacity: 255 })
          //         .start();
          // }


          function Anim_On(Node_Set) {
            console.debug("按下");
            var Time = 0.15;
            tween(Node_Set).to(Time, {
              scale: v3(0.95, 0.95, 1)
            }).start();
            tween(Node_Set.getComponent(UIOpacity)).to(Time, {
              opacity: 200
            }).start();
          }

          function Anim_Off(Node_Set) {
            console.debug("松开");
            tween(Node_Set).to(0.1, {
              scale: v3(1.05, 1.05, 1)
            }).to(0.05, {
              scale: v3(1, 1, 1)
            }).start();
            tween(Node_Set.getComponent(UIOpacity)).to(0.15, {
              opacity: 255
            }).start();
          }
        }
        /**重置按钮组件 */


        Set_Btn_Event_Reset(Node_Set) {
          var Component_Button = Node_Set.getComponent(Button);

          if (Component_Button == null) {
            return;
          }

          Component_Button.resetInEditor();
        }
        /**注册动画监听
        * @Anim 动画组件
        * @EventType 事件类型
        * @Call 回调函数
        */


        On_Anim_Frame_Once(Anim, EventType, Call) {
          Anim.once(EventType, Call, Anim.node);
        }
        /**注册动画监听
         * @Anim 动画组件
         * @EventType 事件类型
         * @Call 回调函数
         */


        On_Anim_Frame(Anim, EventType, Call) {
          Anim.on(EventType, Call, Anim.node);
        }
        /**注销动画监听
         * @Anim 动画组件
         * @EventType 事件类型
         * @Call 回调函数
         */


        Off_Anim_Frame(Anim, EventType, Call) {
          Anim.off(EventType, Call, Anim.node);
        }
        /**碰撞开始前 */


        On_Collider_PRE_SOLVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Component_Collider = Node_Set.getComponent(Collider2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_Collider)) {
            return;
          }

          Component_Collider.enabled = true;
          var Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody2D)) {
            return;
          }

          Node_Set.getComponent(RigidBody2D).enabledContactListener = true;
          Component_Collider.on(Contact2DType.PRE_SOLVE, (Self_Collider, Other_Collider, Contact) => {
            Call(Self_Collider, Other_Collider, Contact);
          }, Node_Set);
        }
        /**碰撞开始 */


        On_Collider_BEGIN_CONTACT(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Component_Collider = Node_Set.getComponent(Collider2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_Collider)) {
            return;
          }

          Component_Collider.enabled = true;
          var Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody2D)) {
            return;
          }

          Component_RigidBody2D.enabledContactListener = true;
          Component_Collider.on(Contact2DType.BEGIN_CONTACT, (Self_Collider, Other_Collider, Contact) => {
            // console.debug(Self_Collider, Other_Collider, Contact);
            Call(Self_Collider, Other_Collider, Contact);
          }, Node_Set);
        }
        /**碰撞结束 */


        On_Collider_END_CONTACT(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Component_Collider = Node_Set.getComponent(Collider2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_Collider)) {
            return;
          }

          Component_Collider.enabled = true;
          var Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody2D)) {
            return;
          }

          Node_Set.getComponent(RigidBody2D).enabledContactListener = true;
          Component_Collider.on(Contact2DType.END_CONTACT, (Self_Collider, Other_Collider, Contact) => {
            // console.debug(Self_Collider, Other_Collider, Contact);
            Call(Self_Collider, Other_Collider, Contact);
          }, Node_Set);
        }
        /**碰撞结束后 */


        On_Collider_POST_SOLVE(Node_Set, Call) {
          if (Call === void 0) {
            Call = () => {};
          }

          var Component_Collider = Node_Set.getComponent(Collider2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_Collider)) {
            return;
          }

          Component_Collider.enabled = true;
          var Component_RigidBody2D = Node_Set.getComponent(RigidBody2D);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(Component_RigidBody2D)) {
            return;
          }

          Node_Set.getComponent(RigidBody2D).enabledContactListener = true;
          Component_Collider.on(Contact2DType.POST_SOLVE, (Self_Collider, Other_Collider, Contact) => {
            Call(Self_Collider, Other_Collider, Contact);
          }, Node_Set);
        }
        /**取消碰撞监听 */


        Off_Collider(Node_Set) {
          var Component_Collider = Node_Set.getComponent(Collider2D);

          if (Component_Collider) {
            Component_Collider.off(Contact2DType.PRE_SOLVE);
            Component_Collider.off(Contact2DType.BEGIN_CONTACT);
            Component_Collider.off(Contact2DType.END_CONTACT);
            Component_Collider.off(Contact2DType.POST_SOLVE);
            Component_Collider.enabled = false;
          }
        }
        /**绘制刚性线
         * @Canvas_Node 绘制的节点
         * @Stroke_Color
         */


        Draw_Line_RigidBody(Canvas_Node, Stroke_Color, Line_Width) {
          if (Stroke_Color === void 0) {
            Stroke_Color = color(100, 255, 133);
          }

          if (Line_Width === void 0) {
            Line_Width = 10;
          }

          macro.ENABLE_MULTI_TOUCH = false;
          var CurGraphics = null;
          var Point_List = []; //前一个斜率

          var PreK = 0;

          var Get_UI_Pos = Pos => {
            var _CurGraphics;

            Temp_V3.set(Pos.x, Pos.y, 0);
            (_CurGraphics = CurGraphics) == null || _CurGraphics.node.getComponent(UITransform).convertToNodeSpaceAR(Temp_V3, Temp_V3);
            Pos.set(Temp_V3.x, Temp_V3.y);
            return Pos;
          };

          var Should_Add_Point = (DiffX, DiffY) => {
            //斜率变化的容忍度
            var K = 0.001;
            var CurK = Math.abs(DiffX) < K ? Number.MAX_SAFE_INTEGER * Math.sign(DiffX) * Math.sign(DiffY) : DiffY / DiffX;

            if (Point_List.length > 1 && Math.abs(CurK - PreK) < K) {
              //去掉重复点
              Point_List.pop();
            } //将 当前点 的 斜率 CurK 赋值 给 前一个点 的 斜率 PreK


            PreK = CurK;
          };

          var On_Touch_Start = Event => {
            Event.getUILocation(Temp_V2);
            Point_List.length = 0;
            var Node_Point = new Node();
            Node_Point.layer = Canvas_Node.layer;
            Canvas_Node.addChild(Node_Point);
            CurGraphics = Node_Point.addComponent(Graphics);
            CurGraphics.strokeColor = Color.WHITE;
            CurGraphics.lineWidth = Line_Width;
            var {
              x,
              y
            } = Get_UI_Pos(Temp_V2);
            CurGraphics.moveTo(x, y);
            Point_List.push({
              x,
              y
            });
          };

          var On_Touch_Move = Event => {
            if (!CurGraphics) return;
            Event.getUILocation(Temp_V2);
            var {
              x,
              y
            } = Get_UI_Pos(Temp_V2);
            var {
              x: preX,
              y: preY
            } = Point_List[Point_List.length - 1];
            var DiffX = x - preX;
            var DiffY = y - preY;

            if (Math.abs(DiffX) + Math.abs(DiffY) >= CurGraphics.lineWidth) {
              Should_Add_Point(DiffX, DiffY);
              Point_List.push({
                x,
                y
              });
              CurGraphics.strokeColor = Stroke_Color;
              CurGraphics.lineTo(x, y);
              CurGraphics.stroke();
            }
          }; //创建碰撞器


          var Create_Colliders = () => {
            if (!CurGraphics || Point_List.length <= 1) {
              //清理引用
              CurGraphics.node.destroy();
              CurGraphics = null;
              return;
            }

            CurGraphics.addComponent(RigidBody2D);

            for (var i = 0; i < Point_List.length - 1; i++) {
              var Pos_Start = Point_List[i];
              var Pos_End = Point_List[i + 1];
              var PolygonCollider = CurGraphics.addComponent(PolygonCollider2D);
              var K = v2(Pos_End.x - Pos_Start.x, Pos_End.y - Pos_Start.y).normalize();
              var Width_Half = CurGraphics.lineWidth / 2;
              var Pos1 = v2(K.y, -K.x).multiplyScalar(Width_Half).add2f(Pos_Start.x, Pos_Start.y);
              var Pos2 = v2(-K.y, K.x).multiplyScalar(Width_Half).add2f(Pos_Start.x, Pos_Start.y);
              var Pos3 = v2(K.y, -K.x).multiplyScalar(Width_Half).add2f(Pos_End.x, Pos_End.y);
              var Pos4 = v2(-K.y, K.x).multiplyScalar(Width_Half).add2f(Pos_End.x, Pos_End.y);
              PolygonCollider.points = [Pos1, Pos2, Pos3, Pos4];
              PolygonCollider.apply();
            }
          };

          var On_Touch_End = () => {
            Create_Colliders();
          };

          this.On_Event_TOUCH_START(Canvas_Node, On_Touch_Start);
          this.On_Event_TOUCH_END(Canvas_Node, On_Touch_End);
          this.On_Event_TOUCH_CANCEL(Canvas_Node, On_Touch_End);
          this.On_Event_TOUCH_MOVE(Canvas_Node, On_Touch_Move);
        }

        Draw_Line(Canvas_Node, Arr_Pos, Stroke_Color, Line_Width) {
          if (Stroke_Color === void 0) {
            Stroke_Color = color(100, 255, 133);
          }

          if (Line_Width === void 0) {
            Line_Width = 10;
          }

          var Component_Graphics = Canvas_Node.getComponent(Graphics);

          if (!Component_Graphics) {
            Component_Graphics = Canvas_Node.addComponent(Graphics);
          }

          Component_Graphics.clear();
          Component_Graphics.strokeColor = Stroke_Color;
          Component_Graphics.lineWidth = Line_Width;

          if (Arr_Pos.length > 0) {
            Component_Graphics.moveTo(Arr_Pos[0].x, Arr_Pos[0].y); // 依次连接后续的点

            for (var i = 1; i < Arr_Pos.length; i++) {
              Component_Graphics.lineTo(Arr_Pos[i].x, Arr_Pos[i].y);
            } // 绘制线条


            Component_Graphics.stroke();
          } else {
            console.debug("Arr_Pos 数组为空，无法绘制线条");
          }
        }

        Clear_Line(Canvas_Node) {
          var Component_Graphics = Canvas_Node.getComponent(Graphics);

          if (!Component_Graphics) {
            Component_Graphics = Canvas_Node.addComponent(Graphics);
          }

          Component_Graphics.clear();
        }

      }, _class3.instance = new _class3(), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4324685848ebde659f8d7c574cf6cb4cf4bd826.js.map