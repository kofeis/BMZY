System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, AudioClip, director, AudioSource, sys, CCBoolean, SpriteFrame, view, game, Game, assetManager, Texture2D, isValid, Material, JsonAsset, Font, AnimationClip, Tool_Event, Tool_Other, Tool_UI, PlatformApi, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, Game_Mode, Scene_Change_Type, Resoure_Data;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTool_Event(extras) {
    _reporterNs.report("Tool_Event", "./Tool_Event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_Other(extras) {
    _reporterNs.report("Tool_Other", "./Tool_Other", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool_UI(extras) {
    _reporterNs.report("Tool_UI", "./Tool_UI", _context.meta, extras);
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
      CCBoolean = _cc.CCBoolean;
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
    }, function (_unresolved_2) {
      Tool_Event = _unresolved_2.Tool_Event;
    }, function (_unresolved_3) {
      Tool_Other = _unresolved_3.Tool_Other;
    }, function (_unresolved_4) {
      Tool_UI = _unresolved_4.Tool_UI;
    }, function (_unresolved_5) {
      PlatformApi = _unresolved_5.PlatformApi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "480e2eXlplJO5iWD6KYD5B1", "Resoure_Data", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'AudioClip', 'director', 'resources', 'AudioSource', 'sys', 'Label', 'find', 'CCBoolean', 'CCInteger', 'v3', 'Vec3', 'debug', 'PhysicsSystem2D', 'Sprite', 'color', 'LabelOutline', 'log', 'SpriteFrame', 'EPhysics2DDrawFlags', 'v2', 'SpriteAtlas', 'view', 'game', 'Game', 'Vec2', 'assetManager', 'Texture2D', 'isValid', 'macro', 'Material', 'JsonAsset', 'Font', 'AnimationClip', 'AssetManager', 'Constructor', 'ImageAsset', 'Scene', 'UITransform', 'SceneAsset', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**游戏模式 */

      _export("Game_Mode", Game_Mode = /*#__PURE__*/function (Game_Mode) {
        Game_Mode[Game_Mode["Idiom"] = 0] = "Idiom";
        Game_Mode[Game_Mode["Film"] = 1] = "Film";
        Game_Mode[Game_Mode["Normal"] = 2] = "Normal";
        Game_Mode[Game_Mode["Endless"] = 3] = "Endless";
        Game_Mode[Game_Mode["Tutorial"] = 4] = "Tutorial";
        return Game_Mode;
      }({}));
      /**场景改变类型 */


      _export("Scene_Change_Type", Scene_Change_Type = /*#__PURE__*/function (Scene_Change_Type) {
        Scene_Change_Type[Scene_Change_Type["Automatic"] = 0] = "Automatic";
        Scene_Change_Type[Scene_Change_Type["Manual"] = 1] = "Manual";
        Scene_Change_Type[Scene_Change_Type["Finish"] = 2] = "Finish";
        return Scene_Change_Type;
      }({}));

      _export("Resoure_Data", Resoure_Data = (_dec = ccclass('Resoure_Data'), _dec2 = property({
        tooltip: "场景名字_当前"
      }), _dec3 = property({
        tooltip: "场景名字_下个"
      }), _dec4 = property(CCBoolean), _dec(_class = (_class2 = (_class3 = class Resoure_Data extends Component {
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

          /**是否首次启动 */
          this.Is_First_Start = true;

          /**@param {CCBoolean} 是否竖屏*/
          _initializerDefineProperty(this, "Is_Vertical_Screen", _descriptor3, this);

          //--------------------------------------------------------------------------------------------

          /**游戏模式 */
          this.Game_Mode = Game_Mode.Tutorial;
          //--------------------------------------------------------------------------------------------
          this.FrameRate = 0;
          this.LastTime = 0;
          this.FrameRate_Schedule = null;

          this.FrameRate_Schedule = () => {
            const Time_Current = performance.now();
            const Time_Elapsed = (Time_Current - this.LastTime) / 1000;
            const currentFrameRate = this.FrameRate / Time_Elapsed;
            console.debug(`帧率: ${currentFrameRate.toFixed(0)}`);
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
            let Screen_Width = window.innerWidth;
            let Screen_Height = window.innerHeight;
            console.debug(`当前可见区域尺寸: ${Screen_Width} x ${Screen_Height}`); // 浏览器窗口设计分辨率尺寸
            // let Width_Design = view.getDesignResolutionSize().width;
            // let Height_Design = view.getDesignResolutionSize().height;
            // console.debug(`当前设计分辨率: ${Width_Design} x ${Height_Design}`);
            // 可见区域尺寸

            let Visible_Size = view.getVisibleSize();
            let Visible_Width = Visible_Size.width;
            let Visible_Height = Visible_Size.height;
            console.debug(`当前可见分辨率: ${Visible_Width} x ${Visible_Height}`);

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

        async start() {
          (_crd && PlatformApi === void 0 ? (_reportPossibleCrUseOfPlatformApi({
            error: Error()
          }), PlatformApi) : PlatformApi).instance.onLoad();
          this.Is_First_StartUp();
          this.Information_Printing();
          this.Bundles = await this.Load_Bundle("Load"); // this.Music_Play("Audio/BGM1");
          //加载资源
        }
        /**是否首次启动 */


        Is_First_StartUp() {
          let First_Start = this.Data_Get("First_Start");
          console.debug(First_Start);

          if (!(_crd && Tool_Other === void 0 ? (_reportPossibleCrUseOfTool_Other({
            error: Error()
          }), Tool_Other) : Tool_Other).instance.Get_Type_Is_Abnormal(First_Start)) {
            this.Is_First_Start = true;
            First_Start = this.Is_First_Start;
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


        async Fetch_Data(Url) {
          if ((_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.isWechatPlatform()) {
            return this.Fetch_DataWX(Url);
          } else {
            try {
              const Response = await fetch(Url);
              console.log("请求回复:", Response);
              const Data = await Response.json();
              console.debug("获取到的数据:", Data);
              return Data;
            } catch (error) {
              console.error("获取数据失败:", error);
            }
          }
        }
        /**更新数据 (PUT请求) */


        async Update_Data(Url, Data) {
          if ((_crd && Tool_UI === void 0 ? (_reportPossibleCrUseOfTool_UI({
            error: Error()
          }), Tool_UI) : Tool_UI).instance.isWechatPlatform()) {
            return this.Update_DataWX(Url, Data);
          } else {
            try {
              const Response = await fetch(Url, {
                method: 'PUT',
                // 或 'PATCH' 如果API支持部分更新
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
              });

              if (!Response.ok) {
                throw new Error(`HTTP错误! 状态: ${Response.status}`);
              }

              console.debug("更新数据成功");
              return await Response.json();
            } catch (error) {
              console.error("更新请求失败:", error);
              throw error;
            }
          }
        }
        /** 
         * 微信小游戏环境下的数据请求方法
         * @param Url 请求地址
         * @returns 返回解析后的数据
         */


        async Fetch_DataWX(Url) {
          try {
            const res = await new Promise((resolve, reject) => {
              wx.request({
                url: Url,
                method: 'GET',
                success: res => {
                  console.log("请求成功:", res);
                  resolve(res.data); // 微信返回的数据在res.data中
                },
                fail: err => {
                  console.error("请求失败:", err);
                  reject(err);
                }
              });
            });
            console.debug("获取到的数据:", res);
            return res;
          } catch (error) {
            console.error("获取数据失败:", error);
            throw error;
          }
        }
        /** 
         * 微信小游戏环境下的数据更新方法 (PUT请求)
         * @param url 请求地址
         * @param data 要更新的数据
         * @returns 返回更新后的数据
         */


        async Update_DataWX(url, data) {
          try {
            const res = await new Promise((resolve, reject) => {
              wx.request({
                url: url,
                method: 'PUT',
                data: data,
                // 微信会自动序列化对象
                header: {
                  'Content-Type': 'application/json'
                },
                success: res => {
                  // 微信使用statusCode而不是status
                  if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.debug("更新数据成功");
                    resolve(res.data);
                  } else {
                    reject(new Error(`HTTP错误! 状态: ${res.statusCode}`));
                  }
                },
                fail: err => {
                  reject(err);
                }
              });
            });
            return res;
          } catch (error) {
            console.error("更新请求失败:", error);
            throw error;
          }
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
            console.error(`[Storage] 保存 ${Data_Name} 失败:`, e);
          }
        }
        /**
         * 安全读取本地数据
         * @param Data_Name 数据键名
         * @param Default_Value 当数据不存在时的默认值
         */


        Data_Get(Data_Name, Default_Value = null) {
          try {
            let Data_Value;
            const Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null; // 返回数据或默认值

            return Data_Value !== undefined ? Data_Value : Default_Value;
          } catch (e) {
            console.error(`[Storage] 读取 ${Data_Name} 失败:`, e);
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
            let Existing_Data = this.Data_Get(Data_Name); // 根据需要合并或更新数据

            let Updated_Data = { ...Existing_Data,
              ...New_Data
            };
            this.Data_Set(Data_Name, Updated_Data);
          } else {
            console.error(`Data with name ${Data_Name} does not exist.`);
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
          const Keys = this.Data_Get_All_Keys();
          let All_Data = {};
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


        Copy_Deep(Obj, Cache = new WeakMap()) {
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
            const Copied_Map = new Map();
            Cache.set(Obj, Copied_Map);
            Obj.forEach((Value, Key) => {
              Copied_Map.set(Key, this.Copy_Deep(Value, Cache));
            });
            return Copied_Map;
          }

          if (Obj instanceof Set) {
            const Copied_Set = new Set();
            Cache.set(Obj, Copied_Set);
            Obj.forEach(Value => {
              Copied_Set.add(this.Copy_Deep(Value, Cache));
            });
            return Copied_Set;
          }

          if (Array.isArray(Obj)) {
            const Copied_Array = Obj.map(Item => this.Copy_Deep(Item, Cache));
            Cache.set(Obj, Copied_Array);
            return Copied_Array;
          }

          const Copied_Obj = {};
          Cache.set(Obj, Copied_Obj);

          for (const Key in Obj) {
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

          return { ...Obj
          };
        }
        /**震动开关设置 */


        Vibration_Switch_Set(Switch = false) {
          this.Vibration_Switch = Switch;
        }
        /**震动开关获取 */


        Vibration_Switch_Get() {
          return this.Vibration_Switch;
        }
        /**声音开关设置 */


        Sound_Switch_Set(Switch = false) {
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
        }
        /**声音开关获取 */


        Sound_Switch_Get() {
          return this.Sound_Switch;
        }
        /**声音音量设置 */


        Sound_Volume_Set(Volume = 0) {
          this.Sound_Volume = Volume;
          this.Sound_Long_AudioSource.forEach(element => {
            element.volume = this.Sound_Volume;
          });
        }
        /**音乐开关设置 */


        Music_Switch_Set(Switch = false) {
          this.Music_Switch = Switch;

          if (this.Music_Switch) {
            this.Music_AudioSource.volume = this.Music_Volume;
          } else {
            this.Music_AudioSource.volume = 0;
          }
        }
        /**音乐开关获取 */


        Music_Switch_Get() {
          return this.Music_Switch;
        }
        /**音乐音量设置 */


        Music_Volume_Set(Volume = 0) {
          this.Music_Volume = Volume;
          this.Music_AudioSource.volume = this.Music_Volume;
        }
        /**音频开关设置 */


        Audio_Switch_Set(Switch = false) {
          this.Sound_Switch_Set(Switch);
          this.Music_Switch_Set(Switch);
        }
        /**音频声音设置 */


        Audio_Volume_Set(Volume = 0) {
          this.Sound_Volume_Set(Volume);
          this.Music_Volume_Set(Volume);
        }
        /**音效播放 */


        async Sound_Play(Path) {
          let Res = await this.Load_AudioClip(Path);
          if (!isValid(this.node)) return;

          if (this.Sound_Switch) {
            this.Sound_AudioSource.volume = this.Sound_Volume;
          } else {
            this.Sound_AudioSource.volume = 0;
          }

          this.Sound_AudioSource.loop = false;
          this.Sound_AudioSource.playOneShot(Res, this.Sound_Volume);
        }
        /**音乐播放 */


        async Music_Play(Path, Call = () => {}) {
          console.warn(Path);
          let Res = await this.Load_AudioClip(Path);
          if (!isValid(this.node)) return;
          Call && Call();
          this.Music_AudioSource.enabled = true;
          this.Music_AudioSource.stop();
          this.Music_AudioSource.clip = Res;

          if (this.Music_Switch) {
            this.Music_AudioSource.volume = this.Music_Volume;
          } else {
            this.Music_AudioSource.volume = 0;
          }

          this.Music_AudioSource.loop = true;
          this.Music_AudioSource.play();
        }
        /**长音效播放 */


        async Sound_Long_play(Path) {
          if (this.Sound_Long_AudioSource[Path]) {
            this.Sound_Long_AudioSource[Path].enabled = true;
            this.Sound_Long_AudioSource[Path].stop();

            if (this.Sound_Switch) {
              this.Sound_Long_AudioSource[Path].volume = this.Sound_Volume;
            } else {
              this.Sound_Long_AudioSource[Path].volume = 0;
            }

            this.Sound_Long_AudioSource[Path].loop = true;
            this.Sound_Long_AudioSource[Path].play();
            return;
          }

          let Res = await this.Load_AudioClip(Path);
          if (!isValid(this.node)) return; //防止音乐还没加载完 场景就被销毁了

          this.Sound_Long_AudioSource[Path] = new Node(Path).addComponent(AudioSource);
          this.Sound_Long_AudioSource[Path].node.parent = this.node;
          this.Sound_Long_AudioSource[Path].clip = Res;
          this.Sound_Long_AudioSource[Path].enabled = true;
          this.Sound_Long_AudioSource[Path].stop();

          if (this.Sound_Switch) {
            this.Sound_Long_AudioSource[Path].volume = this.Sound_Volume;
          } else {
            this.Sound_Long_AudioSource[Path].volume = 0;
          }

          this.Sound_Long_AudioSource[Path].loop = true;
          this.Sound_Long_AudioSource[Path].play();
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

          for (let i = 0; i < this.Sound_Long_AudioSource.length; i++) {
            this.Sound_Long_AudioSource[i].stop();
          }
        }
        /**加载远程图片资源无后缀名
         * @Path 远程路径
         */


        async Load_Remote_ImageAsset(Path) {
          const Time_Start = Date.now();

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

                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 ImageAsset ${Path} 成功: 总用时长: ${Time_Total} ms`);
                const Texture = new Texture2D();
                Texture.image = Res;
                const Sprite_Frame = new SpriteFrame();
                Sprite_Frame.texture = Texture;
                resolve(Sprite_Frame);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 ImageAsset ${Path} 错误: ${Error}`);
            throw Error;
          }
        }
        /**加载远程图片资源有后缀名
        * @Path 远程/本地路径
        */


        async Load_Remote_ImageAsset_(Path) {
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
          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              assetManager.loadRemote(Path, (Err, Res) => {
                if (Err) {
                  console.error("加载 ImageAsset 失败:", Err);
                  reject(Err);
                  return;
                }

                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 ImageAsset ${Path} 成功: 总用时长: ${Time_Total} ms`);
                const Texture = new Texture2D();
                Texture.image = Res;
                const Sprite_Frame = new SpriteFrame();
                Sprite_Frame.texture = Texture;
                resolve(Sprite_Frame);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 ImageAsset ${Path} 错误: ${Error}`);
            throw Error;
          }
        }
        /**加载远程音频资源
         * @Path 远程路径
         */


        async Load_Remote_audio(Path) {
          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              assetManager.loadRemote(Path, (Err, Res) => {
                if (Err) {
                  console.error("加载 AudioClip 失败:", Err);
                  reject(Err);
                  return;
                }

                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 AudioClip ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(Res);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 AudioClip ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Bundle(Bundle_Name) {
          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              assetManager.loadBundle(Bundle_Name, (Err, Res) => {
                if (Err) {
                  console.error(`加载 Bundle ${Bundle_Name} 失败: ${Err}`);
                  reject(Err);
                  return;
                }

                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Bundle ${Bundle_Name} 成功: 总用时长: ${Time_Total} ms`);
                resolve(Res);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Bundle ${Bundle_Name} 错误: ${Error}`);
            throw Error;
          }
        }
        /**加载文件夹 */


        async Load_Dir(Path, Type) {
          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.loadDir(Path, Type, (finished, total, item) => {
                const onProgress = (finished / total).toFixed(2);
                console.debug(onProgress);
              }, (Err, Res) => {
                if (Err) {
                  console.error("加载 Dir 失败:", Err);
                  reject(Err);
                  return;
                }

                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Dir ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(Res);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Dir ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Scene(Path, Progress_Bar, Value_Label = null) {
          if (this.Bundles == null) {
            this.Bundles = await this.Load_Bundle("Load");
          }

          if (this._Cache_Scene[Path]) {
            console.debug(`Scene ${Path} 资源存在`);
            return this._Cache_Scene[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.loadScene(Path, null, (Finished, Total, Item) => {
                let Schedule = Number((Finished / Total).toFixed(2));
                Progress_Bar.progress = Schedule;
                let Value = Math.floor(Schedule * 100);

                if (Value_Label != null) {
                  Value_Label.string = Value + "%";
                }

                console.debug(`加载 Scene 进度: ${Finished}/${Total} (${Value}%)`);
              }, (Err, Res) => {
                if (Err) {
                  console.error("加载 Scene 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_Scene[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Scene ${Path} 成功: 总用时长: ${Time_Total} ms`);
                this.Scene_Name_Current = Path;
                resolve(this._Cache_Scene[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Scene ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Prefab(Path) {
          if (this.Bundles == null) {
            this.Bundles = await this.Load_Bundle("Load");
          }

          if (this._Cache_Prefab[Path]) {
            console.debug(`Prefab ${Path} 资源存在`);
            return this._Cache_Prefab[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, Prefab, (Err, Res) => {
                if (Err) {
                  console.error(`加载 Prefab ${Path} 失败: ${Err}`);
                  reject(Err);
                  return;
                }

                this._Cache_Prefab[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Prefab ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_Prefab[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Prefab ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_SpriteFrame(Path) {
          Path = Path + "/spriteFrame";

          if (this._Cache_SpriteFrame[Path]) {
            console.debug(`SpriteFrame ${Path} 资源存在`);
            return this._Cache_SpriteFrame[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, SpriteFrame, (Err, Res) => {
                if (Err) {
                  console.error(`加载 SpriteFrame ${Path} 失败: ${Err}`);
                  reject(Err);
                  return;
                }

                this._Cache_SpriteFrame[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 SpriteFrame ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_SpriteFrame[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 SpriteFrame ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Texture(Path) {
          if (this._Cache_Texture2D[Path]) {
            console.debug(`Texture ${Path} 资源存在`);
            return this._Cache_Texture2D[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, Texture2D, (Err, Res) => {
                if (Err) {
                  console.error(`加载 Texture ${Path} 失败: ${Err}`);
                  reject(Err);
                  return;
                }

                this._Cache_Texture2D[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Texture ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_Texture2D[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Texture ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_AudioClip(Path) {
          if (this._Cache_AudioClip[Path]) {
            console.debug(`Audio ${Path} 资源存在`);
            return this._Cache_AudioClip[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, AudioClip, (Err, Res) => {
                if (Err) {
                  console.error("加载 Audio 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_AudioClip[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Audio ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_AudioClip[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Audio ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Material(Path) {
          if (this._Cache_Material[Path]) {
            console.debug(`Material ${Path} 资源存在`);
            return this._Cache_Material[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, Material, (Err, Res) => {
                if (Err) {
                  console.error("加载 Material 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_Material[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Material ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_Material[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Material ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Json(Path) {
          if (this._Cache_Json[Path]) {
            console.debug(`Json ${Path} 资源存在`);
            return this._Cache_Json[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, JsonAsset, (Err, Res) => {
                if (Err) {
                  console.error("加载 Json 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_Json[Path] = Res.json;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Json ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_Json[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Json ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_AnimationClip(Path) {
          if (this._Cache_AnimationClip[Path]) {
            console.debug(`AnimationClip ${Path} 资源存在`);
            return this._Cache_AnimationClip[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, AnimationClip, (Err, Res) => {
                if (Err) {
                  console.error("加载 AnimationClip 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_AnimationClip[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 AnimationClip ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_AnimationClip[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 AnimationClip ${Path} 错误: ${Error}`);
            throw Error;
          }
        }

        async Load_Font(Path) {
          if (this._Cache_Font[Path]) {
            console.debug(`Font ${Path} 资源存在`);
            return this._Cache_Font[Path];
          }

          const Time_Start = Date.now();

          try {
            return new Promise((resolve, reject) => {
              this.Bundles.load(Path, Font, (Err, Res) => {
                if (Err) {
                  console.error("加载 Font 失败:", Err);
                  reject(Err);
                  return;
                }

                this._Cache_Font[Path] = Res;
                const Time_Finish = Date.now();
                const Time_Total = Time_Finish - Time_Start;
                console.debug(`加载 Font ${Path} 成功: 总用时长: ${Time_Total} ms`);
                resolve(this._Cache_Font[Path]);
                return;
              });
            });
          } catch (Error) {
            console.error(`加载 Font ${Path} 错误: ${Error}`);
            throw Error;
          }
        }
        /**释放资源 */


        async Release_Resource(Path) {
          if (this._Cache_Scene[Path]) {
            delete this._Cache_Scene[Path];
            console.debug(`释放 Scene ${Path} 资源`);
          }

          if (this._Cache_Prefab[Path]) {
            delete this._Cache_Prefab[Path];
            console.debug(`释放 Prefab ${Path} 资源`);
          }

          if (this._Cache_SpriteFrame[Path]) {
            delete this._Cache_SpriteFrame[Path];
            console.debug(`释放 SpriteFrame ${Path} 资源`);
          }

          if (this._Cache_Texture2D[Path]) {
            delete this._Cache_Texture2D[Path];
            console.debug(`释放 Texture ${Path} 资源`);
          }

          if (this._Cache_AudioClip[Path]) {
            delete this._Cache_AudioClip[Path];
            console.debug(`释放 Audio ${Path} 资源`);
          }

          if (this._Cache_Material[Path]) {
            delete this._Cache_Material[Path];
            console.debug(`释放 Material ${Path} 资源`);
          }

          if (this._Cache_Json[Path]) {
            delete this._Cache_Json[Path];
            console.debug(`释放 JSON ${Path} 资源`);
          }

          if (this._Cache_AnimationClip[Path]) {
            delete this._Cache_AnimationClip[Path];
            console.debug(`释放 AnimationClip ${Path} 资源`);
          }

          if (this._Cache_Font[Path]) {
            delete this._Cache_Font[Path];
            console.debug(`释放 Font ${Path} 资源`);
          }
        }
        /**释放所有资源 */


        async Release_Resource_All() {
          this._Cache_Scene = {};
          this._Cache_Prefab = {};
          this._Cache_SpriteFrame = {};
          this._Cache_Texture2D = {};
          this._Cache_AudioClip = {};
          this._Cache_Material = {};
          this._Cache_Json = {};
          this._Cache_AnimationClip = {};
          this._Cache_Font = {};
          console.debug(`已释放所有资源`);
        }
        /** 游戏切换全屏模式 */


        Game_Toggle_Fullscreen() {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            console.debug(`进入全屏`);
          } else {
            document.exitFullscreen();
            console.debug(`退出全屏`);
          }
        }
        /** 游戏界面缩放设置 */


        Game_UIScale_Set(scale = 1) {
          document.body.style.transform = `scale(${scale})`;
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
        /**游戏停止 */


        Game_End() {
          game.end();
        }
        /**游戏帧率设置 */


        Game_FrameRate_Set(FrameRate = 59) {
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


        Director_Scheduler_TimeScale_Set(Scale = 1) {
          director.getScheduler().setTimeScale(Scale);
        }
        /**场景调度间隔缩放获取 */


        Director_Scheduler_TimeScale_Get() {
          return director.getScheduler().getTimeScale();
        }
        /**信息打印 */


        Information_Printing() {
          console.debug(`当前平台是否是原生平台${sys.isNative}`);
          console.debug(`当前平台是否是浏览器${sys.isBrowser}`);
          console.debug(`当前运行平台是否是移动端平台${sys.isMobile}`);
          console.debug(`当前平台字节顺序是否是小端序${sys.isLittleEndian}`);
          console.debug(`当前运行平台是否是XR平台${sys.isXR}`);
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
          const date = new Date(year, month - 1, day); // 注意月份从0开始

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
          const Current_Time = {
            Year: this.Get_Current_Year(),
            Month: this.Get_Current_Month(),
            Date: this.Get_Current_Date(),
            Hour: this.Get_Current_Hour(),
            Minute: this.Get_Current_Minute(),
            Second: this.Get_Current_Second(),
            MilliSecond: this.Get_Current_Millisecond(),
            Day: this.Get_Current_Day()
          };
          console.debug(`${Current_Time.Year}年${Current_Time.Month}月${Current_Time.Date}日 / 星期${Current_Time.Day} / ${Current_Time.Hour}时${Current_Time.Minute}分${Current_Time.Second}秒${Current_Time.MilliSecond}`);
          return Current_Time;
        }

      }, _class3.instance = new _class3(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Scene_Name_Current", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "Main";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Scene_Name_Next", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "Game";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Is_Vertical_Screen", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1c31fd068dd9337e4a95c339d9c8a431b1cf85c.js.map