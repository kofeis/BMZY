System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, Tool_NetWork;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "961fad3PAdHYqvaHcikQfd6", "Tool_NetWork", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Constructor', 'find', 'isValid', 'Node', 'sys', 'UITransform', 'v3', 'Vec3', 'view', 'Widget', 'Prefab', 'instantiate', 'Sprite', 'SpriteFrame', 'Color', 'color', 'UIOpacity', 'Layers', 'Label', 'Texture2D', 'Rect']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tool_NetWork", Tool_NetWork = (_dec = ccclass('Tool_NetWork'), _dec(_class = (_class2 = class Tool_NetWork extends Component {
        constructor() {
          super(...arguments);
          this.UrlRequest = "https://6808403a942707d722ddad99.mockapi.io/Data";
        }

        /**
         * 统一的 HTTP 请求函数
         * @param Options 请求配置选项
         * @returns 响应数据或 null (如果失败)
         */
        HttpRequest(Options, Cache) {
          return _asyncToGenerator(function* () {
            if (Cache === void 0) {
              Cache = "no-cache";
            }

            try {
              // 处理查询参数
              var UrlO = Options.Url;

              if (Options.Params) {
                var queryString = new URLSearchParams(Options.Params).toString();
                UrlO += (UrlO.includes('?') ? '&' : '?') + queryString;
                console.log(UrlO, Options.Method);
              }

              var Response = yield fetch(UrlO, {
                method: Options.Method,
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Cache-Control': 'no-cache'
                },
                body: Options.Method !== 'GET' ? JSON.stringify(Options.Data) : undefined,
                cache: Cache
              });
              var Status = Response.status;
              console.log("请求回复:", Status, Response); // 204 响应没有内容，不需要尝试解析 JSON

              if (Status === 204) {
                console.debug("204 No Content - DELETE 请求成功");
                return null;
              } // 其他成功状态码尝试解析 JSON


              if (Status >= 200 && Status < 300) {
                return yield Response.json();
              } // 错误处理


              switch (Status) {
                case 400:
                  console.debug("400 Bad Request - 请求错误");
                  break;

                case 403:
                  console.debug("403 Forbidden - 无权限");
                  break;

                case 404:
                  console.debug("404 Not Found - 资源不存在");
                  break;

                default:
                  console.debug("\u672A\u5904\u7406\u7684\u72B6\u6001\u7801: " + Status);
              }

              return null;
            } catch (error) {
              console.error("请求失败:", error);
              throw error; // 抛出错误以便调用者处理
            }
          })();
        }
        /**
         * 增添数据
         * @param Url API地址
         * @param Data 数据
         * @returns 单个操作返回直接结果，批量操作返回结果数组
         * @example
         * await Tool_NetWork.instance.Request_Add(`${Tool_NetWork.instance.UrlRequest}`, Data);
         */


        Request_Add(Url, Data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return yield _this.HttpRequest({
              Url: Url,
              Method: "POST",
              Data: Data
            });
          })();
        }
        /**
         * 删除数据
         * @param Url API地址
         * @param Params 查询参数
         * @returns 单个操作返回直接结果，批量操作返回结果数组
         * @example
         * await Tool_NetWork.instance.Request_Delete(`${Tool_NetWork.instance.UrlRequest}`, { Key : Value });
         * await Tool_NetWork.instance.Request_Delete(`${Tool_NetWork.instance.UrlRequest}/${Id}`);
         */


        Request_Delete(Url, Params) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //如果没有Params参数，执行单个删除
            if (!Params || Object.keys(Params).length === 0) {
              return yield _this2.HttpRequest({
                Url: Url,
                Method: "DELETE"
              });
            } //有Params参数，执行批量删除


            try {
              //查询符合条件的数据
              var ItemToDelete = yield _this2.Request_Check(Url, Params);

              if (!Array.isArray(ItemToDelete)) {
                console.debug("API返回数据格式错误:期望数组", ItemToDelete);
                return;
              } //并行执行批量删除


              var DeleteResults = yield Promise.all(ItemToDelete.map(Item => _this2.HttpRequest({
                Url: Url + "/" + Item.id,
                Method: "DELETE"
              }).then(() => ({
                Id: Item.id,
                Success: true
              })).catch(error => {
                console.error("\u5220\u9664 " + Item.id + " \u65F6\u51FA\u9519:", error);
                return {
                  Id: Item.id,
                  Success: false,
                  Error: error.message || error
                };
              })));
              console.debug("批量删除完成，结果:", DeleteResults);
              return DeleteResults;
            } catch (error) {
              console.error("批量删除失败:", error);
            }
          })();
        }
        /**
         * 修改数据
         * @param Url API地址（批量操作时为基础地址）
         * @param Data 要更新的数据内容
         * @param Params 查询参数（存在时执行批量操作）
         * @param Method 更新方法，默认为PUT
         * @returns 单个操作返回直接结果，批量操作返回结果数组
         * @example
         * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}`, Data, { Key: Value });
         * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}/${Id}`, Data);
         */


        Request_Modify(Url, Data, Params, Method) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (Method === void 0) {
              Method = "PUT";
            }

            //如果没有Params参数，执行单个更新
            if (!Params || Object.keys(Params).length === 0) {
              return yield _this3.HttpRequest({
                Url: Url,
                Method: Method,
                Data: Data
              });
            } //有Params参数，执行批量更新


            try {
              //查询符合条件的数据
              var ItemToUpdate = yield _this3.Request_Check(Url, Params);

              if (!Array.isArray(ItemToUpdate)) {
                console.debug("API返回数据格式错误:期望数组", ItemToUpdate);
                return;
              } //并行执行批量更新


              var UpdateResults = yield Promise.all(ItemToUpdate.map(Item => _this3.HttpRequest({
                Url: Url + "/" + Item.id,
                Method: Method,
                Data: Data
              }).then(Result => ({
                Id: Item.id,
                Success: true,
                Data: Result
              })).catch(error => {
                console.error("\u66F4\u65B0 " + Item.id + " \u65F6\u51FA\u9519:", error);
                return {
                  Id: Item.id,
                  Success: false,
                  Error: error.message
                };
              })));
              console.debug("批量更新完成，结果:", UpdateResults);
              return UpdateResults;
            } catch (error) {
              console.error("批量更新失败:", error);
            }
          })();
        }
        /**
        * 查询数据
        * @param Url API地址
        * @param Params 查询参数
        * @example
        * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}`, { Key: Value });
        * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}/${Id}`);
        */


        Request_Check(Url, Params) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return yield _this4.HttpRequest({
              Url: Url,
              Method: "GET",
              Params: Params
            });
          })();
        }

      }, _class2.instance = new _class2(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9487d9259909a153483394f2febb46b561866062.js.map