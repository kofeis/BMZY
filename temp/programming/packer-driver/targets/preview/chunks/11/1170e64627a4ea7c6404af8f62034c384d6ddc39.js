System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, AudioClip, director, AudioSource, sys, v3, SpriteFrame, view, game, Game, assetManager, Texture2D, isValid, Material, JsonAsset, Font, AnimationClip, UITransform, Tool_Event, Tool_Other, PlatformApi, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, Scene_Change_Type, ScreenMode, Resoure_Data;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "./Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "./Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformApi(extras) {
    _reporterNs.report("PlatformApi", "../Other/SDK/PlatformApi", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      AudioClip = _cc.AudioClip;
      director = _cc.director;
      AudioSource = _cc.AudioSource;
      sys = _cc.sys;
      v3 = _cc.v3;
      SpriteFrame = _cc.SpriteFrame;
      view = _cc.view;
      game = _cc.game;
      Game = _cc.Game;
      assetManager = _cc.assetManager;
      Texture2D = _cc.Texture2D;
      isValid = _cc.isValid;
      Material = _cc.Material;
      JsonAsset = _cc.JsonAsset;
      Font = _cc.Font;
      AnimationClip = _cc.AnimationClip;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Tool_Event = _unresolved_2.Tool_Event;
    }, function (_unresolved_3) {
      Tool_Other = _unresolved_3.Tool_Other;
    }, function (_unresolved_4) {
      PlatformApi = _unresolved_4.PlatformApi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "480e2eXlplJO5iWD6KYD5B1", "Resoure_Data", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'AudioClip', 'director', 'resources', 'AudioSource', 'sys', 'Label', 'find', 'CCBoolean', 'CCInteger', 'v3', 'Vec3', 'debug', 'PhysicsSystem2D', 'Sprite', 'color', 'LabelOutline', 'log', 'SpriteFrame', 'EPhysics2DDrawFlags', 'v2', 'SpriteAtlas', 'view', 'game', 'Game', 'Vec2', 'assetManager', 'Texture2D', 'isValid', 'macro', 'Material', 'JsonAsset', 'Font', 'AnimationClip', 'AssetManager', 'Constructor', 'ImageAsset', 'Scene', 'UITransform', 'SceneAsset', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**场景改变类型 */

      _export("Scene_Change_Type", Scene_Change_Type = /*#__PURE__*/function (Scene_Change_Type) {
        Scene_Change_Type[Scene_Change_Type["Automatic"] = 0] = "Automatic";
        Scene_Change_Type[Scene_Change_Type["Manual"] = 1] = "Manual";
        Scene_Change_Type[Scene_Change_Type["Finish"] = 2] = "Finish";
        return Scene_Change_Type;
      }({}));
      /**屏幕模式 */


      _export("ScreenMode", ScreenMode = /*#__PURE__*/function (ScreenMode) {
        ScreenMode[ScreenMode["Horizontal"] = 0] = "Horizontal";
        ScreenMode[ScreenMode["Vertical"] = 1] = "Vertical";
        return ScreenMode;
      }({}));
      /**游戏数据 */


      _export("Resoure_Data", Resoure_Data = (_dec = ccclass('Resoure_Data'), _dec2 = property({
        tooltip: "场景名字_当前"
      }), _dec3 = property({
        tooltip: "场景名字_下个"
      }), _dec(_class = (_class2 = (_class3 = class Resoure_Data extends Component {
        constructor() {
          super();
          //--------------------------------------------------------------------------------------------

          /**缓存 Bundles */
          this.Bundles = null;

          /**缓存 Scene */
          this._Cache_Scene = {};

          /**缓存 Prefab */
          this._Cache_Prefab = {};

          /**缓存 SpriteFrame */
          this._Cache_SpriteFrame = {};

          /**缓存 Texture2D */
          this._Cache_Texture2D = {};

          /**缓存 AudioClip */
          this._Cache_AudioClip = {};

          /**缓存 Material */
          this._Cache_Material = {};

          /**缓存 Json */
          this._Cache_Json = {};

          /**缓存 AnimationClip */
          this._Cache_AnimationClip = {};

          /**缓存 Font */
          this._Cache_Font = {};
          //--------------------------------------------------------------------------------------------
          this.Url = "https://6808403a942707d722ddad99.mockapi.io/Data";
          this.Game_Data = {
            Account: "None",
            Password: "666666",

            /**游戏版本 */
            Game_Versions: "0.0.1",
            Game_Mode: "Default",

            /**是否首次启动 */
            Is_FirstStartUp: true,

            /**是否新的一天 */
            Is_NewDay: true,

            /**登录时间 */
            Login_Time: 0,

            /**登录天数 */
            Login_Days: 0,

            /**连续登录天数 */
            Login_ConsecutiveDays: 0,

            /**总共游戏时长 */
            GameTime_Total: 0,

            /**今日游戏时长 */
            GameTime_Today: 0,

            /**存档槽 */
            Save_Slot: 0,

            /**存档时间 */
            Save_Time: 0,

            /**存档数据 */
            Save_Data: [{
              关卡进度: 0,
              关卡分数: [],
              关卡时间: [],
              关卡星级: []
            }]
          };
          //--------------------------------------------------------------------------------------------

          /**震动开关 */
          this.Vibration_Switch = true;

          /**声音开关 */
          this.Sound_Switch = true;

          /**声音音量 */
          this.Sound_Volume = 1;

          /**声音音频组件 */
          this.Sound_AudioSource = null;

          /**音乐开关 */
          this.Music_Switch = true;

          /**音乐音量 */
          this.Music_Volume = 1;

          /**音乐音频组件 */
          this.Music_AudioSource = null;

          /**长音效音频组件(可以手动停止的音效) */
          this.Sound_Long_AudioSource = [];

          //--------------------------------------------------------------------------------------------

          /**场景名字_当前 */
          _initializerDefineProperty(this, "Scene_Name_Current", _descriptor, this);

          /**场景名字_下个 */
          _initializerDefineProperty(this, "Scene_Name_Next", _descriptor2, this);

          //--------------------------------------------------------------------------------------------
          this.FrameRate = 0;
          this.LastTime = 0;
          this.FrameRate_Schedule = null;

          this.FrameRate_Schedule = () => {
            var Time_Current = performance.now();
            var Time_Elapsed = (Time_Current - this.LastTime) / 1000;
            var FrameRate = this.FrameRate / Time_Elapsed;
            console.debug("\u5E27\u7387: " + FrameRate.toFixed(0));
            this.FrameRate = 0;
            this.LastTime = Time_Current;
          };
        }
        /**查看帧率 */


        Check_FrameRate() {
          this.unschedule(this.FrameRate_Schedule);
          this.FrameRate = 0;
          this.LastTime = performance.now();
          this.schedule(this.FrameRate_Schedule, 1);
        }

        update(Dt) {
          this.FrameRate++;
        }

        onEnable() {
          console.debug("组件被启用");
        }

        onDisable() {
          console.debug("组件被禁用或节点变为无效");
        }

        onDestroy() {
          console.debug("组件被销毁");
        }

        onLoad() {
          console.log("onLoad");
          this.Director_AddPersistRootNode(this.node);
          this.Game_FrameRate_Set(120);
          this.Director_Scheduler_TimeScale_Set(1); // this.Check_FrameRate();
          // 启用物理系统
          // PhysicsSystem2D.instance.enable = true;
          // PhysicsSystem2D.instance.debugDrawFlags =
          //   EPhysics2DDrawFlags.Shape
          // | EPhysics2DDrawFlags.Joint
          // | EPhysics2DDrawFlags.Aabb
          // | EPhysics2DDrawFlags.Pair
          // | EPhysics2DDrawFlags.CenterOfMass
          // 监听浏览器窗口大小变化事件

          window.addEventListener('resize', Event => {
            Screen_Update();
          }); // 监听浏览器横屏竖屏变化事件

          window.addEventListener("orientationchange", Event => {
            console.debug(Event);
            Screen_Update();
          }); // 更新屏幕尺寸

          function Screen_Update() {
            // 浏览器窗口可见区域尺寸
            var Screen_Width = window.innerWidth;
            var Screen_Height = window.innerHeight;
            console.debug("\u5F53\u524D\u53EF\u89C1\u533A\u57DF\u5C3A\u5BF8: " + Screen_Width + " x " + Screen_Height); // 浏览器窗口设计分辨率尺寸
            // let Width_Design = view.getDesignResolutionSize().width;
            // let Height_Design = view.getDesignResolutionSize().height;
            // console.debug(`当前设计分辨率: ${Width_Design} x ${Height_Design}`);
            // 可见区域尺寸

            var Visible_Size = view.getVisibleSize();
            var Visible_Width = Visible_Size.width;
            var Visible_Height = Visible_Size.height;
            console.debug("\u5F53\u524D\u53EF\u89C1\u5206\u8FA8\u7387: " + Visible_Width + " x " + Visible_Height);

            if (Visible_Width >= Visible_Height) {
              console.error('当前为横屏');
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.Event_Dispatch("Screen_Update", "Horizontal");
            } else {
              console.error('当前为竖屏');
              (_crd && Tool_Event === void 0 ? (_reportPossibleCrUseOfTool_Event({
                error: Error()
              }), Tool_Event) : Tool_Event).instance.Event_Dispatch("Screen_Update", "Vertical");
            }
          }

          game.on(Game.EVENT_HIDE, () => {
            // 游戏窗口被隐藏时的处理逻辑
            console.debug('Game window is hidden', "游戏窗口被隐藏时的处理逻辑");
          });
          game.on(Game.EVENT_SHOW, () => {
            // 游戏窗口被显示时的处理逻辑
            console.debug('Game window is shown', "游戏窗口被显示时的处理逻辑");
          });
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              // 屏幕解锁时的处理逻辑
              console.debug('Screen is unlocked', "屏幕解锁时的处理逻辑");
            } else {
              // 屏幕锁定时的处理逻辑
              console.debug('Screen is locked', "屏幕锁定时的处理逻辑");
            }
          });
          this.Music_AudioSource = new Node("Music").addComponent(AudioSource);
          this.Sound_AudioSource = new Node("Sound").addComponent(AudioSource);
          this.Music_AudioSource.node.parent = this.node;
          this.Sound_AudioSource.node.parent = this.node;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
              error: Error()
            }), PlatformApi) : PlatformApi).instance.onLoad();

            _this.Save_Get();

            _this.Is_First_StartUp();

            _this.Information_Printing();

            _this.Bundles = yield _this.Load_Bundle("Load"); // this.Music_Play("Audio/BGM1");
            //加载资源
            // await this.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxC")
            // await this.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxN")
            // await this.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxE")
            // await this.Load_SpriteFrame("SpriteFrame/Panel/PanelMathMatch/BoxU")
            // await this.Load_Json("Json/mathmatch");
            // await this.Load_Prefab("Prefab/PanelMathMatch/Icon");
          })();
        }
        /**是否首次启动 */


        Is_First_StartUp() {
          var First_Start = this.Data_Get("First_Start");
          console.debug(First_Start);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(First_Start)) {
            this.Game_Data.Is_FirstStartUp = true;
            First_Start = this.Game_Data.Is_FirstStartUp;
            this.Data_Set("First_Start", First_Start);
          }

          if (First_Start) {
            console.debug("第一次开始"); // First_Start = false;
            // this.Data_Set("First_Start", First_Start);
          } else {
            console.debug("不是第一次开始");
          }
        }
        /**请求数据 */


        Fetch_Data(Url) {
          return _asyncToGenerator(function* () {
            try {
              var Response = yield fetch(Url, {
                cache: 'no-cache',
                // 或 'reload'
                method: 'GET',
                headers: {
                  'Cache-Control': 'no-cache'
                }
              });
              var Status = Response.status;
              console.log("请求回复:", Status, Response);

              switch (Status) {
                case 200:
                  var Data = yield Response.json();
                  console.debug("200 OK	请求成功 GET/PUT 请求成功");
                  return Data;

                case 400:
                  console.debug("400 Bad Request  请求错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden    无权限");
                  return null;

                case 404:
                  console.debug("404 Not Found    资源不存在");
                  return null;

                default:
                  break;
              }
            } catch (error) {
              console.error("获取数据失败:", error);
            }
          })();
        }
        /**
         * 向 MockAPI 提交数据（POST 请求）
         * @param Url API 地址
         * @param Data 要提交的数据
         */


        Post_Data(Url, Data) {
          return _asyncToGenerator(function* () {
            try {
              var Response = yield fetch(Url, {
                method: 'POST',
                // 指定为 POST 请求
                headers: {
                  'Content-Type': 'application/json' // 声明 JSON 格式

                },
                body: JSON.stringify(Data) // 将对象转为 JSON 字符串

              });
              var Status = Response.status;
              console.log("请求回复:", Status, Response);

              switch (Status) {
                case 201:
                  var _Data = yield Response.json();

                  console.debug("201 Created	资源创建成功 POST 请求成功(新增数据)");
                  return _Data;

                case 400:
                  console.debug("400 Bad Request  请求错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden    无权限");
                  return null;

                case 404:
                  console.debug("404 Not Found    资源不存在");
                  return null;

                default:
                  break;
              }
            } catch (error) {
              console.error("提交数据失败:", error);
              throw error; // 抛出错误以便外部捕获
            }
          })();
        }
        /**
         * 更新数据（PUT请求）
         * @param Url - 要更新的资源API地址
         * @param Data - 要更新的数据对象
         * @returns 更新后的数据 或 null (如果失败)
         */


        Update_Data(Url, Data) {
          return _asyncToGenerator(function* () {
            try {
              var Response = yield fetch(Url, {
                method: 'PUT',
                // 或 'PATCH' 如果API支持部分更新
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
              });
              var Status = Response.status;
              console.log("请求回复:", Status, Response);

              switch (Status) {
                case 200:
                  var _Data2 = yield Response.json();

                  console.debug("200 OK	请求成功 GET/PUT 请求成功");
                  return _Data2;

                case 400:
                  console.debug("400 Bad Request  请求错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden    无权限");
                  return null;

                case 404:
                  console.debug("404 Not Found    资源不存在");
                  return null;

                default:
                  break;
              }
            } catch (error) {
              console.error("更新请求失败:", error);
              throw error;
            }
          })();
        }
        /**
         * 批量更新符合条件的数据
         * @param Url - 资源基础地址
         * @param Params - 查询条件对象
         * @param UpdateData - 要更新的数据内容
         * @returns 返回每个更新操作的结果数组
         * @throws 当查询或更新过程中出现错误时抛出
         * @example
         * await this.Resoure_Data.Update_Data_All(this.Resoure_Data.Url , {Key:"Value"},Data);
         */


        Update_Data_All(Url, Params, UpdateData) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              // 1. 构建查询字符串并获取待更新数据
              var QueryString = new URLSearchParams(Params).toString();
              var Response = yield fetch(Url + "?" + QueryString, {
                method: 'GET',
                headers: {
                  'Cache-Control': 'no-cache',
                  'Content-Type': 'application/json'
                }
              });
              var Status = Response.status;
              console.log("查询请求响应:", Status, Response);

              switch (Status) {
                case 200:
                  var ItemsToUpdate = yield Response.json();

                  if (!Array.isArray(ItemsToUpdate)) {
                    throw new Error("API返回数据格式错误：期望数组");
                  } // 2. 并行执行批量更新


                  var UpdateResults = yield Promise.all(ItemsToUpdate.map(item => _this2.Update_Data(Url + "/" + item.id, UpdateData)));
                  console.debug("批量更新完成，结果:", UpdateResults);
                  return UpdateResults;

                case 400:
                  console.debug("400 Bad Request - 查询参数错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden - 无查询权限");
                  return null;

                case 404:
                  console.debug("404 Not Found - 查询资源不存在");
                  return null;

                default:
                  console.debug("\u672A\u5904\u7406\u7684\u67E5\u8BE2\u72B6\u6001\u7801: " + Status);
                  return null;
              }
            } catch (error) {
              console.error("批量更新流程失败:", error);
              throw error;
            }
          })();
        }
        /**
         * 删除数据 (DELETE 请求)
         * @param Url 要删除的资源API地址
         */


        Delete_Data(Url) {
          return _asyncToGenerator(function* () {
            try {
              var Response = yield fetch(Url, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              var Status = Response.status;
              console.log("请求回复:", Status, Response);

              switch (Status) {
                case 204:
                  var Data = yield Response.json();
                  console.debug("204 No Content	成功但无返回内容	DELETE 请求成功");
                  return Data;

                case 400:
                  console.debug("400 Bad Request  请求错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden    无权限");
                  return null;

                case 404:
                  console.debug("404 Not Found    资源不存在");
                  return null;

                default:
                  break;
              }
            } catch (error) {
              console.error("删除请求失败:", error);
              throw error; // 抛出错误以便外部处理
            }
          })();
        }
        /**
         * 删除符合条件的数据
         * @param Url 请求地址
         * @param Params 查询条件
         * @example
         * await this.Resoure_Data.Delete_Data_All(this.Resoure_Data.Url , {Key:"Value"});
         */


        Delete_Data_All(Url, Params) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            try {
              // 查询符合条件的数据
              var QueryString = new URLSearchParams(Params).toString();
              var Response = yield fetch(Url + "?" + QueryString, {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                  'Cache-Control': 'no-cache'
                }
              });
              var Status = Response.status;
              console.log("查询请求回复:", Status, Response);

              switch (Status) {
                case 200:
                  var ItemsToDelete = yield Response.json();

                  if (!Array.isArray(ItemsToDelete)) {
                    throw new Error("查询结果不是数组");
                  } // 批量删除


                  var DeleteResults = yield Promise.all(ItemsToDelete.map(item => _this3.Delete_Data(Url + "/" + item.id).then(() => ({
                    id: item.id,
                    success: true
                  })).catch(error => {
                    console.error("\u5220\u9664 " + item.id + " \u65F6\u51FA\u9519:", error);
                    return {
                      id: item.id,
                      success: false,
                      error
                    };
                  })));
                  console.debug("批量删除结果:", DeleteResults);
                  return DeleteResults;

                case 400:
                  console.debug("400 Bad Request  查询请求错误");
                  return null;

                case 403:
                  console.debug("403 Forbidden    无查询权限");
                  return null;

                case 404:
                  console.debug("404 Not Found    查询资源不存在");
                  return null;

                default:
                  console.debug("\u672A\u5904\u7406\u7684\u72B6\u6001\u7801: " + Status);
                  return null;
              }
            } catch (error) {
              console.error("批量删除失败:", error);
              throw error;
            }
          })();
        }
        /**存档设置 */


        Save_Set() {
          this.Data_Set("Game_Data", this.Game_Data);
        }
        /**存档获取 */


        Save_Get() {
          var Game_Data = this.Data_Get("Game_Data");

          if (Game_Data == null || Game_Data == undefined) {
            this.Save_Set();
            Game_Data = this.Data_Get("Game_Data");
          }

          this.Game_Data = Game_Data;
          return this.Game_Data;
        }
        /**
        *数据保存本地
        *@Data_Name 待保存数据的名字
        *@Data_Name 待保存的数据
        */
        // Data_Set(Data_Name: string, Data: any) {
        //     sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
        // }

        /**
         *读取本地数据
         *@Data_Name 待读取数据的名字
         */
        // Data_Get(Data_Name: string) {
        //     let Data = sys.localStorage.getItem(Data_Name);
        //     return JSON.parse(Data);
        // }

        /**
         * 安全保存数据到本地
         * @param Data_Name 数据键名
         * @param Data 要保存的数据（会自动JSON序列化）
         */


        Data_Set(Data_Name, Data) {
          try {
            sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
          } catch (e) {
            console.error("[Storage] \u4FDD\u5B58 " + Data_Name + " \u5931\u8D25:", e);
          }
        }
        /**
         * 安全读取本地数据
         * @param Data_Name 数据键名
         * @param Default_Value 当数据不存在时的默认值
         */


        Data_Get(Data_Name, Default_Value) {
          if (Default_Value === void 0) {
            Default_Value = null;
          }

          try {
            var Data_Value;
            var Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null; // 返回数据或默认值

            return Data_Value !== undefined ? Data_Value : Default_Value;
          } catch (e) {
            console.error("[Storage] \u8BFB\u53D6 " + Data_Name + " \u5931\u8D25:", e);
            return Default_Value;
          }
        }
        /**
         * @param Data_Name 待删除数据的名字
         */


        Data_Delete(Data_Name) {
          sys.localStorage.removeItem(Data_Name);
        }
        /**
         * @param Data_Name 待检查数据的名字
         * @returns 是否存在该数据
         */


        Data_Is_Exist(Data_Name) {
          return sys.localStorage.getItem(Data_Name) !== null;
        }
        /**
         * @param Data_Name 待更新数据的名字
         * @param New_Data 新的数据
         */


        Data_Update(Data_Name, New_Data) {
          if (this.Data_Is_Exist(Data_Name)) {
            var Existing_Data = this.Data_Get(Data_Name); // 根据需要合并或更新数据

            var Updated_Data = _extends({}, Existing_Data, New_Data);

            this.Data_Set(Data_Name, Updated_Data);
          } else {
            console.error("Data with name " + Data_Name + " does not exist.");
          }
        }
        /**
         * 获取所有本地存储数据的键
         * @returns 所有键的数组
         */


        Data_Get_All_Keys() {
          return Object.keys(sys.localStorage);
        }
        /**
         * 获取所有本地存储的数据
         * @returns 所有数据的对象
         */


        Data_Get_All() {
          var Keys = this.Data_Get_All_Keys();
          var All_Data = {};
          Keys.forEach(Key => {
            All_Data[Key] = this.Data_Get(Key);
          });
          return All_Data;
        }
        /**
         * 清空所有本地存储数据
         */


        Clear_All_Data() {
          sys.localStorage.clear();
        }
        /**
         * 深拷贝
         * @param Obj 需要拷贝的对象
         * @param Cache 缓存已拷贝的对象（用于处理循环引用）
         * @returns 拷贝后的对象
         */


        Copy_Deep(Obj, Cache) {
          if (Cache === void 0) {
            Cache = new WeakMap();
          }

          if (typeof Obj !== 'object' || Obj === null) {
            return Obj;
          }

          if (Cache.has(Obj)) {
            return Cache.get(Obj);
          }

          if (Obj instanceof Date) {
            return new Date(Obj);
          }

          if (Obj instanceof RegExp) {
            return new RegExp(Obj);
          }

          if (Obj instanceof Map) {
            var Copied_Map = new Map();
            Cache.set(Obj, Copied_Map);
            Obj.forEach((Value, Key) => {
              Copied_Map.set(Key, this.Copy_Deep(Value, Cache));
            });
            return Copied_Map;
          }

          if (Obj instanceof Set) {
            var Copied_Set = new Set();
            Cache.set(Obj, Copied_Set);
            Obj.forEach(Value => {
              Copied_Set.add(this.Copy_Deep(Value, Cache));
            });
            return Copied_Set;
          }

          if (Array.isArray(Obj)) {
            var Copied_Array = Obj.map(Item => this.Copy_Deep(Item, Cache));
            Cache.set(Obj, Copied_Array);
            return Copied_Array;
          }

          var Copied_Obj = {};
          Cache.set(Obj, Copied_Obj);

          for (var Key in Obj) {
            if (Object.prototype.hasOwnProperty.call(Obj, Key)) {
              Copied_Obj[Key] = this.Copy_Deep(Obj[Key], Cache);
            }
          }

          return Copied_Obj;
        }
        /**
         * 浅拷贝
         * @param Obj 需要拷贝的对象
         * @returns 拷贝后的对象
         */


        Copy_Shallow(Obj) {
          if (typeof Obj !== 'object' || Obj === null) {
            return Obj;
          }

          if (Array.isArray(Obj)) {
            return Obj.slice();
          }

          return _extends({}, Obj);
        }
        /**震动开关设置 */


        Vibration_Switch_Set(Switch) {
          if (Switch === void 0) {
            Switch = false;
          }

          this.Vibration_Switch = Switch;
          this.Data_Set("Vibration_Switch", this.Vibration_Switch);
        }
        /**震动开关获取 */


        Vibration_Switch_Get() {
          this.Vibration_Switch = this.Data_Get("Vibration_Switch");

          if (this.Vibration_Switch === null || this.Vibration_Switch === undefined) {
            this.Vibration_Switch = true;
          }

          return this.Vibration_Switch;
        }
        /**声音开关设置 */


        Sound_Switch_Set(Switch) {
          if (Switch === void 0) {
            Switch = false;
          }

          this.Sound_Switch = Switch;

          if (this.Sound_Switch) {
            this.Sound_Long_AudioSource.forEach(element => {
              element.volume = this.Sound_Volume;
            });
          } else {
            this.Sound_Long_AudioSource.forEach(element => {
              element.volume = 0;
            });
          }

          this.Data_Set("Sound_Switch", this.Sound_Switch);
        }
        /**声音开关获取 */


        Sound_Switch_Get() {
          this.Sound_Switch = this.Data_Get("Sound_Switch");

          if (this.Sound_Switch === null || this.Sound_Switch === undefined) {
            this.Sound_Switch = true;
          }

          return this.Sound_Switch;
        }
        /**声音音量设置 */


        Sound_Volume_Set(Volume) {
          if (Volume === void 0) {
            Volume = 0;
          }

          this.Sound_Volume = Volume;
          this.Sound_Long_AudioSource.forEach(element => {
            element.volume = this.Sound_Volume;
          });
        }
        /**音乐开关设置 */


        Music_Switch_Set(Switch) {
          if (Switch === void 0) {
            Switch = false;
          }

          this.Music_Switch = Switch;

          if (this.Music_Switch) {
            this.Music_AudioSource.volume = this.Music_Volume;
          } else {
            this.Music_AudioSource.volume = 0;
          }

          this.Data_Set("Music_Switch", this.Music_Switch);
        }
        /**音乐开关获取 */


        Music_Switch_Get() {
          this.Music_Switch = this.Data_Get("Music_Switch");

          if (this.Music_Switch === null || this.Music_Switch === undefined) {
            this.Music_Switch = true;
          }

          return this.Music_Switch;
        }
        /**音乐音量设置 */


        Music_Volume_Set(Volume) {
          if (Volume === void 0) {
            Volume = 0;
          }

          this.Music_Volume = Volume;
          this.Music_AudioSource.volume = this.Music_Volume;
        }
        /**音频开关设置 */


        Audio_Switch_Set(Switch) {
          if (Switch === void 0) {
            Switch = false;
          }

          this.Sound_Switch_Set(Switch);
          this.Music_Switch_Set(Switch);
        }
        /**音频声音设置 */


        Audio_Volume_Set(Volume) {
          if (Volume === void 0) {
            Volume = 0;
          }

          this.Sound_Volume_Set(Volume);
          this.Music_Volume_Set(Volume);
        }
        /**音效播放 */


        Sound_Play(Path) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var Res = yield _this4.Load_AudioClip(Path);
            if (!isValid(_this4.node)) return;

            if (_this4.Sound_Switch) {
              _this4.Sound_AudioSource.volume = _this4.Sound_Volume;
            } else {
              _this4.Sound_AudioSource.volume = 0;
            }

            _this4.Sound_AudioSource.loop = false;

            _this4.Sound_AudioSource.playOneShot(Res, _this4.Sound_Volume);
          })();
        }
        /**音乐播放 */


        Music_Play(Path, Call) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (Call === void 0) {
              Call = () => {};
            }

            console.warn(Path);
            var Res = yield _this5.Load_AudioClip(Path);
            if (!isValid(_this5.node)) return;
            Call && Call();
            _this5.Music_AudioSource.enabled = true;

            _this5.Music_AudioSource.stop();

            _this5.Music_AudioSource.clip = Res;

            if (_this5.Music_Switch) {
              _this5.Music_AudioSource.volume = _this5.Music_Volume;
            } else {
              _this5.Music_AudioSource.volume = 0;
            }

            _this5.Music_AudioSource.loop = true;

            _this5.Music_AudioSource.play();
          })();
        }
        /**长音效播放 */


        Sound_Long_play(Path) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (_this6.Sound_Long_AudioSource[Path]) {
              _this6.Sound_Long_AudioSource[Path].enabled = true;

              _this6.Sound_Long_AudioSource[Path].stop();

              if (_this6.Sound_Switch) {
                _this6.Sound_Long_AudioSource[Path].volume = _this6.Sound_Volume;
              } else {
                _this6.Sound_Long_AudioSource[Path].volume = 0;
              }

              _this6.Sound_Long_AudioSource[Path].loop = true;

              _this6.Sound_Long_AudioSource[Path].play();

              return;
            }

            var Res = yield _this6.Load_AudioClip(Path);
            if (!isValid(_this6.node)) return; //防止音乐还没加载完 场景就被销毁了

            _this6.Sound_Long_AudioSource[Path] = new Node(Path).addComponent(AudioSource);
            _this6.Sound_Long_AudioSource[Path].node.parent = _this6.node;
            _this6.Sound_Long_AudioSource[Path].clip = Res;
            _this6.Sound_Long_AudioSource[Path].enabled = true;

            _this6.Sound_Long_AudioSource[Path].stop();

            if (_this6.Sound_Switch) {
              _this6.Sound_Long_AudioSource[Path].volume = _this6.Sound_Volume;
            } else {
              _this6.Sound_Long_AudioSource[Path].volume = 0;
            }

            _this6.Sound_Long_AudioSource[Path].loop = true;

            _this6.Sound_Long_AudioSource[Path].play();
          })();
        }
        /**音乐暂停 */


        Music_Pause() {
          this.Music_AudioSource.pause();
        }
        /**音乐恢复 */


        Music_Resume() {
          this.Music_AudioSource.play();
        }
        /**音乐停止 */


        Music_Stop() {
          this.Music_AudioSource.stop();
        }
        /**长音效暂停 */


        Sound_Long_Pause(Path) {
          if (this.Sound_Long_AudioSource[Path]) this.Sound_Long_AudioSource[Path].pause();
        }
        /**长音效恢复 */


        Sound_Long_Resume(Path) {
          if (this.Sound_Long_AudioSource[Path]) this.Sound_Long_AudioSource[Path].play();
        }
        /**长音效停止 */


        Sound_Long_Stop(Path) {
          if (this.Sound_Long_AudioSource[Path]) this.Sound_Long_AudioSource[Path].stop();
        }
        /**长音效停止所有 */


        Sound_Long_Stop_All() {
          if (this.Sound_AudioSource) this.Sound_AudioSource.stop();

          for (var i = 0; i < this.Sound_Long_AudioSource.length; i++) {
            this.Sound_Long_AudioSource[i].stop();
          }
        }
        /**加载远程图片资源无后缀名
         * @Path 远程路径
         */


        Load_Remote_ImageAsset(Path) {
          return _asyncToGenerator(function* () {
            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                assetManager.loadRemote(Path, {
                  ext: '.png'
                }, (Err, Res) => {
                  if (Err) {
                    console.error("加载 ImageAsset 失败:", Err);
                    reject(Err);
                    return;
                  }

                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D ImageAsset " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  var Texture = new Texture2D();
                  Texture.image = Res;
                  var Sprite_Frame = new SpriteFrame();
                  Sprite_Frame.texture = Texture;
                  resolve(Sprite_Frame);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D ImageAsset " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }
        /**加载远程图片资源有后缀名
        * @Path 远程/本地路径
        */


        Load_Remote_ImageAsset_(Path) {
          return _asyncToGenerator(function* () {
            // try {
            //     return new Promise((resolve, reject) => {
            //         assetManager.loadRemote<ImageAsset>(Path, (err, imageAsset) => {
            //             if (err) {
            //                 console.error('加载远程图片失败:', err);
            //                 return;
            //             }
            //             // 创建纹理
            //             const texture = new Texture2D();
            //             texture.image = imageAsset;
            //             // 创建精灵帧
            //             const spriteFrame = new SpriteFrame();
            //             spriteFrame.texture = texture;
            //             resolve(spriteFrame);
            //         });
            //     });
            // } catch (Error) {
            //     console.error(`加载 ImageAsset ${Path} 错误: ${Error}`);
            //     throw Error;
            // }
            // return
            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                assetManager.loadRemote(Path, (Err, Res) => {
                  if (Err) {
                    console.error("加载 ImageAsset 失败:", Err);
                    reject(Err);
                    return;
                  }

                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D ImageAsset " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  var Texture = new Texture2D();
                  Texture.image = Res;
                  var Sprite_Frame = new SpriteFrame();
                  Sprite_Frame.texture = Texture;
                  resolve(Sprite_Frame);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D ImageAsset " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }
        /**加载远程音频资源
         * @Path 远程路径
         */


        Load_Remote_audio(Path) {
          return _asyncToGenerator(function* () {
            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                assetManager.loadRemote(Path, (Err, Res) => {
                  if (Err) {
                    console.error("加载 AudioClip 失败:", Err);
                    reject(Err);
                    return;
                  }

                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D AudioClip " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(Res);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D AudioClip " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Bundle(Bundle_Name) {
          return _asyncToGenerator(function* () {
            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                assetManager.loadBundle(Bundle_Name, (Err, Res) => {
                  if (Err) {
                    console.error("\u52A0\u8F7D Bundle " + Bundle_Name + " \u5931\u8D25: " + Err);
                    reject(Err);
                    return;
                  }

                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Bundle " + Bundle_Name + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(Res);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Bundle " + Bundle_Name + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }
        /**加载文件夹 */


        Load_Dir(Path, Type) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this7.Bundles.loadDir(Path, Type, (finished, total, item) => {
                  var onProgress = (finished / total).toFixed(2);
                  console.debug(onProgress);
                }, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Dir 失败:", Err);
                    reject(Err);
                    return;
                  }

                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Dir " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(Res);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Dir " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Scene(Path, Progress_Mask, Progress_Bar, Value_Label, Mode) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            if (Mode === void 0) {
              Mode = ScreenMode.Horizontal;
            }

            if (_this8.Bundles == null) {
              _this8.Bundles = yield _this8.Load_Bundle("Load");
            }

            if (_this8._Cache_Scene[Path]) {
              console.debug("Scene " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this8._Cache_Scene[Path];
            }

            var Time_Start = Date.now();

            try {
              if (Progress_Mask && Progress_Bar) {
                var W_PM = Progress_Mask.getComponent(UITransform).width;
                var H_PM = Progress_Mask.getComponent(UITransform).height;
                var W_PB = Progress_Bar.getComponent(UITransform).width;
                var H_PB = Progress_Bar.getComponent(UITransform).height;

                if (Mode == ScreenMode.Horizontal) {
                  Progress_Mask.position = v3(Math.floor(-W_PM * 1), 0, 0);
                  Progress_Bar.position = v3(Math.floor(W_PB * 1), 0, 0);
                } else {
                  Progress_Mask.position = v3(0, Math.floor(-H_PM * 1), 0);
                  Progress_Bar.position = v3(0, Math.floor(H_PB * 1), 0);
                }

                Progress_Mask.position = v3(Math.floor(-W_PM), Math.floor(-H_PM), 0);
                Progress_Bar.position = v3(Math.floor(-W_PB), Math.floor(H_PB), 0);
              }

              return new Promise((resolve, reject) => {
                _this8.Bundles.loadScene(Path, null, (Finished, Total, Item) => {
                  var Schedule = Number((Finished / Total).toFixed(2));

                  if (Progress_Mask && Progress_Bar) {
                    var _W_PM = Progress_Mask.getComponent(UITransform).width;
                    var _H_PM = Progress_Mask.getComponent(UITransform).height;
                    var _W_PB = Progress_Bar.getComponent(UITransform).width;
                    var _H_PB = Progress_Bar.getComponent(UITransform).height;

                    if (Mode == ScreenMode.Horizontal) {
                      Progress_Mask.position = v3(Math.floor(-_W_PM * (1 - Schedule)), 0, 0);
                      Progress_Bar.position = v3(Math.floor(_W_PB * (1 - Schedule)), 0, 0);
                    } else {
                      Progress_Mask.position = v3(0, Math.floor(-_H_PM * (1 - Schedule)), 0);
                      Progress_Bar.position = v3(0, Math.floor(_H_PB * (1 - Schedule)), 0);
                    }

                    var Value = Math.floor(Schedule * 100);

                    if (Value_Label) {
                      Value_Label.string = Value + "%";
                    }
                  } // console.debug(`加载 Scene 进度: ${Finished}/${Total} (${Value}%)`);

                }, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Scene 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this8._Cache_Scene[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Scene " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  _this8.Scene_Name_Current = Path;
                  resolve(_this8._Cache_Scene[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Scene " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Prefab(Path) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (_this9.Bundles == null) {
              _this9.Bundles = yield _this9.Load_Bundle("Load");
            }

            if (_this9._Cache_Prefab[Path]) {
              console.debug("Prefab " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this9._Cache_Prefab[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this9.Bundles.load(Path, Prefab, (Err, Res) => {
                  if (Err) {
                    console.error("\u52A0\u8F7D Prefab " + Path + " \u5931\u8D25: " + Err);
                    reject(Err);
                    return;
                  }

                  _this9._Cache_Prefab[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Prefab " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this9._Cache_Prefab[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Prefab " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_SpriteFrame(Path) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            Path = Path + "/spriteFrame";

            if (_this10._Cache_SpriteFrame[Path]) {
              // console.debug(`SpriteFrame ${Path} 资源存在`);
              return _this10._Cache_SpriteFrame[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this10.Bundles.load(Path, SpriteFrame, (Err, Res) => {
                  if (Err) {
                    console.error("\u52A0\u8F7D SpriteFrame " + Path + " \u5931\u8D25: " + Err);
                    reject(Err);
                    return;
                  }

                  _this10._Cache_SpriteFrame[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D SpriteFrame " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this10._Cache_SpriteFrame[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D SpriteFrame " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Texture(Path) {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            if (_this11._Cache_Texture2D[Path]) {
              console.debug("Texture " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this11._Cache_Texture2D[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this11.Bundles.load(Path, Texture2D, (Err, Res) => {
                  if (Err) {
                    console.error("\u52A0\u8F7D Texture " + Path + " \u5931\u8D25: " + Err);
                    reject(Err);
                    return;
                  }

                  _this11._Cache_Texture2D[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Texture " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this11._Cache_Texture2D[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Texture " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_AudioClip(Path) {
          var _this12 = this;

          return _asyncToGenerator(function* () {
            if (_this12._Cache_AudioClip[Path]) {
              console.debug("Audio " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this12._Cache_AudioClip[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this12.Bundles.load(Path, AudioClip, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Audio 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this12._Cache_AudioClip[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Audio " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this12._Cache_AudioClip[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Audio " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Material(Path) {
          var _this13 = this;

          return _asyncToGenerator(function* () {
            if (_this13._Cache_Material[Path]) {
              console.debug("Material " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this13._Cache_Material[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this13.Bundles.load(Path, Material, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Material 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this13._Cache_Material[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Material " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this13._Cache_Material[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Material " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Json(Path) {
          var _this14 = this;

          return _asyncToGenerator(function* () {
            if (_this14._Cache_Json[Path]) {
              console.debug("Json " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this14._Cache_Json[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this14.Bundles.load(Path, JsonAsset, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Json 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this14._Cache_Json[Path] = Res.json;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Json " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this14._Cache_Json[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Json " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_AnimationClip(Path) {
          var _this15 = this;

          return _asyncToGenerator(function* () {
            if (_this15._Cache_AnimationClip[Path]) {
              console.debug("AnimationClip " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this15._Cache_AnimationClip[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this15.Bundles.load(Path, AnimationClip, (Err, Res) => {
                  if (Err) {
                    console.error("加载 AnimationClip 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this15._Cache_AnimationClip[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D AnimationClip " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this15._Cache_AnimationClip[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D AnimationClip " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }

        Load_Font(Path) {
          var _this16 = this;

          return _asyncToGenerator(function* () {
            if (_this16._Cache_Font[Path]) {
              console.debug("Font " + Path + " \u8D44\u6E90\u5B58\u5728");
              return _this16._Cache_Font[Path];
            }

            var Time_Start = Date.now();

            try {
              return new Promise((resolve, reject) => {
                _this16.Bundles.load(Path, Font, (Err, Res) => {
                  if (Err) {
                    console.error("加载 Font 失败:", Err);
                    reject(Err);
                    return;
                  }

                  _this16._Cache_Font[Path] = Res;
                  var Time_Finish = Date.now();
                  var Time_Total = Time_Finish - Time_Start;
                  console.debug("\u52A0\u8F7D Font " + Path + " \u6210\u529F: \u603B\u7528\u65F6\u957F: " + Time_Total + " ms");
                  resolve(_this16._Cache_Font[Path]);
                  return;
                });
              });
            } catch (Error) {
              console.error("\u52A0\u8F7D Font " + Path + " \u9519\u8BEF: " + Error);
              throw Error;
            }
          })();
        }
        /**释放资源 */


        Release_Resource(Path) {
          var _this17 = this;

          return _asyncToGenerator(function* () {
            if (_this17._Cache_Scene[Path]) {
              delete _this17._Cache_Scene[Path];
              console.debug("\u91CA\u653E Scene " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_Prefab[Path]) {
              delete _this17._Cache_Prefab[Path];
              console.debug("\u91CA\u653E Prefab " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_SpriteFrame[Path]) {
              delete _this17._Cache_SpriteFrame[Path];
              console.debug("\u91CA\u653E SpriteFrame " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_Texture2D[Path]) {
              delete _this17._Cache_Texture2D[Path];
              console.debug("\u91CA\u653E Texture " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_AudioClip[Path]) {
              delete _this17._Cache_AudioClip[Path];
              console.debug("\u91CA\u653E Audio " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_Material[Path]) {
              delete _this17._Cache_Material[Path];
              console.debug("\u91CA\u653E Material " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_Json[Path]) {
              delete _this17._Cache_Json[Path];
              console.debug("\u91CA\u653E JSON " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_AnimationClip[Path]) {
              delete _this17._Cache_AnimationClip[Path];
              console.debug("\u91CA\u653E AnimationClip " + Path + " \u8D44\u6E90");
            }

            if (_this17._Cache_Font[Path]) {
              delete _this17._Cache_Font[Path];
              console.debug("\u91CA\u653E Font " + Path + " \u8D44\u6E90");
            }
          })();
        }
        /**释放所有资源 */


        Release_Resource_All() {
          var _this18 = this;

          return _asyncToGenerator(function* () {
            _this18._Cache_Scene = {};
            _this18._Cache_Prefab = {};
            _this18._Cache_SpriteFrame = {};
            _this18._Cache_Texture2D = {};
            _this18._Cache_AudioClip = {};
            _this18._Cache_Material = {};
            _this18._Cache_Json = {};
            _this18._Cache_AnimationClip = {};
            _this18._Cache_Font = {};
            console.debug("\u5DF2\u91CA\u653E\u6240\u6709\u8D44\u6E90");
          })();
        }
        /** 游戏切换全屏模式 */


        Game_Toggle_Fullscreen() {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            console.debug("\u8FDB\u5165\u5168\u5C4F");
          } else {
            document.exitFullscreen();
            console.debug("\u9000\u51FA\u5168\u5C4F");
          }
        }
        /** 游戏界面缩放设置 */


        Game_UIScale_Set(scale) {
          if (scale === void 0) {
            scale = 1;
          }

          document.body.style.transform = "scale(" + scale + ")";
        }
        /**游戏重启$ */


        Game_Restart() {
          game.restart();
        }
        /**游戏恢复 */


        Game_Resume() {
          game.resume();
        }
        /**游戏暂停 */


        Game_Pause() {
          game.pause();
        }
        /**游戏结束 */


        Game_End() {
          game.end();
        }
        /**游戏帧率设置 */


        Game_FrameRate_Set(FrameRate) {
          if (FrameRate === void 0) {
            FrameRate = 59;
          }

          game.frameRate = FrameRate;
        }
        /**场景运行$ */


        Director_Run(SceneAsset) {
          director.runSceneImmediate(SceneAsset);
        }
        /**场景恢复$ */


        Director_Resume() {
          director.resume();
        }
        /**场景暂停$ */


        Director_Pause() {
          director.pause();
        }
        /**场景停止 */


        Director_End() {// director.end();
        }
        /**注册常驻根节点 */


        Director_AddPersistRootNode(Node_Set) {
          director.addPersistRootNode(Node_Set);
        }
        /**注销常驻根节点 */


        Director_RemovePersistRootNode(Node_Set) {
          director.removePersistRootNode(Node_Set);
        }
        /**场景调度间隔缩放设置 */


        Director_Scheduler_TimeScale_Set(Scale) {
          if (Scale === void 0) {
            Scale = 1;
          }

          director.getScheduler().setTimeScale(Scale);
        }
        /**场景调度间隔缩放获取 */


        Director_Scheduler_TimeScale_Get() {
          return director.getScheduler().getTimeScale();
        }
        /**信息打印 */


        Information_Printing() {
          console.debug("\u5F53\u524D\u5E73\u53F0\u662F\u5426\u662F\u539F\u751F\u5E73\u53F0" + sys.isNative);
          console.debug("\u5F53\u524D\u5E73\u53F0\u662F\u5426\u662F\u6D4F\u89C8\u5668" + sys.isBrowser);
          console.debug("\u5F53\u524D\u8FD0\u884C\u5E73\u53F0\u662F\u5426\u662F\u79FB\u52A8\u7AEF\u5E73\u53F0" + sys.isMobile);
          console.debug("\u5F53\u524D\u5E73\u53F0\u5B57\u8282\u987A\u5E8F\u662F\u5426\u662F\u5C0F\u7AEF\u5E8F" + sys.isLittleEndian);
          console.debug("\u5F53\u524D\u8FD0\u884C\u5E73\u53F0\u662F\u5426\u662FXR\u5E73\u53F0" + sys.isXR);
          this.Get_Current_Full_Time();
        }
        /**获取当前时间戳 */


        Get_Timestamp() {
          return Date.now();
        }
        /** 获取当前时间的 Unix 时间戳（秒） */


        Get_Unix_Timestamp() {
          return Math.floor(Date.now() / 1000); // 返回自1970年1月1日以来的秒数
        }
        /** 获取指定日期的时间戳 */


        Get_Timestamp_From_Date(year, month, day) {
          var date = new Date(year, month - 1, day); // 注意月份从0开始

          return date.getTime(); // 返回指定日期的时间戳
        }
        /** 获取两个时间戳之间的差值（毫秒） */


        Get_Time_Difference(Start_Timestamp, Fnish_Timestamp) {
          return Fnish_Timestamp - Start_Timestamp; // 返回时间差
        }
        /** 获取当前年份 */


        Get_Current_Year() {
          return new Date().getFullYear(); // 返回当前年份
        }
        /** 获取当前月份 */


        Get_Current_Month() {
          return new Date().getMonth() + 1; // 返回当前月份
        }
        /** 获取当前日期 */


        Get_Current_Date() {
          return new Date().getDate();
        }
        /** 获取当前小时 */


        Get_Current_Hour() {
          return new Date().getHours();
        }
        /** 获取当前分钟 */


        Get_Current_Minute() {
          return new Date().getMinutes();
        }
        /** 获取当前秒 */


        Get_Current_Second() {
          return new Date().getSeconds();
        }
        /** 获取当前毫秒 */


        Get_Current_Millisecond() {
          return new Date().getMilliseconds();
        }
        /** 获取当前星期（0-6，0表示星期天） */


        Get_Current_Day() {
          if (new Date().getDay() == 0) return 7;
          return new Date().getDay();
        }
        /** 获取完整的当前时间（包括年月日时分秒毫秒） */


        Get_Current_Full_Time() {
          var Current_Time = {
            Year: this.Get_Current_Year(),
            Month: this.Get_Current_Month(),
            Date: this.Get_Current_Date(),
            Hour: this.Get_Current_Hour(),
            Minute: this.Get_Current_Minute(),
            Second: this.Get_Current_Second(),
            MilliSecond: this.Get_Current_Millisecond(),
            Day: this.Get_Current_Day()
          };
          console.debug(Current_Time.Year + "\u5E74" + Current_Time.Month + "\u6708" + Current_Time.Date + "\u65E5 / \u661F\u671F" + Current_Time.Day + " / " + Current_Time.Hour + "\u65F6" + Current_Time.Minute + "\u5206" + Current_Time.Second + "\u79D2" + Current_Time.MilliSecond);
          return Current_Time;
        }

      }, _class3.instance = new _class3(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Scene_Name_Current", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Scene_Name_Next", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1170e64627a4ea7c6404af8f62034c384d6ddc39.js.map