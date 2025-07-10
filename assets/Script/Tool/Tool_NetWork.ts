import { _decorator, Component, Constructor, find, isValid, Node, sys, UITransform, v3, Vec3, view, Widget, Prefab, instantiate, Sprite, SpriteFrame, Color, color, UIOpacity, Layers, Label, Texture2D, Rect } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tool_NetWork')
export class Tool_NetWork extends Component {

    public static readonly instance = new Tool_NetWork();


    UrlRequest: string = "https://6808403a942707d722ddad99.mockapi.io/Data";

    /**
     * 统一的 HTTP 请求函数
     * @param Options 请求配置选项
     * @returns 响应数据或 null (如果失败)
     */
    async HttpRequest(Options: {
        Url: string;
        Method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        Data?: any;
        Params?: Record<string, string>;
    }, Cache: RequestCache = "no-cache"): Promise<any> {
        try {
            // 处理查询参数
            let UrlO = Options.Url;
            if (Options.Params) {
                const queryString = new URLSearchParams(Options.Params).toString();
                UrlO += (UrlO.includes('?') ? '&' : '?') + queryString;
                console.log(UrlO, Options.Method);
            }
            const Response = await fetch(UrlO, {
                method: Options.Method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache',
                },
                body: Options.Method !== 'GET' ? JSON.stringify(Options.Data) : undefined,
                cache: Cache,
            });
            const Status = Response.status;
            console.log("请求回复:", Status, Response);
            // 204 响应没有内容，不需要尝试解析 JSON
            if (Status === 204) {
                console.debug("204 No Content - DELETE 请求成功");
                return null;
            }
            // 其他成功状态码尝试解析 JSON
            if (Status >= 200 && Status < 300) {
                return await Response.json();
            }
            // 错误处理
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
                    console.debug(`未处理的状态码: ${Status}`);
            }
            return null;
        } catch (error) {
            console.error("请求失败:", error);
            throw error; // 抛出错误以便调用者处理
        }
    }


    /**
     * 增添数据
     * @param Url API地址
     * @param Data 数据
     * @returns 单个操作返回直接结果，批量操作返回结果数组
     * @example
     * await Tool_NetWork.instance.Request_Add(`${Tool_NetWork.instance.UrlRequest}`, Data);
     */
    async Request_Add(Url: string, Data: any) {
        return await this.HttpRequest({
            Url: Url,
            Method: "POST",
            Data: Data,
        });
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
    async Request_Delete(
        Url: string,
        Params?: Record<string, string>
    ): Promise<any | Array<{ id: string | number; success: boolean; error?: any }>> {
        //如果没有Params参数，执行单个删除
        if (!Params || Object.keys(Params).length === 0) {
            return await this.HttpRequest({
                Url: Url,
                Method: "DELETE"
            });
        }
        //有Params参数，执行批量删除
        try {
            //查询符合条件的数据
            const ItemToDelete = await this.Request_Check(Url, Params);
            if (!Array.isArray(ItemToDelete)) {
                console.debug("API返回数据格式错误:期望数组", ItemToDelete);
                return;
            }
            //并行执行批量删除
            const DeleteResults = await Promise.all(
                ItemToDelete.map(Item =>
                    this.HttpRequest({
                        Url: `${Url}/${Item.id}`,
                        Method: "DELETE"
                    })
                        .then(() => ({
                            Id: Item.id,
                            Success: true,
                        }))
                        .catch(error => {
                            console.error(`删除 ${Item.id} 时出错:`, error);
                            return {
                                Id: Item.id,
                                Success: false,
                                Error: error.message || error
                            };
                        })
                )
            );
            console.debug("批量删除完成，结果:", DeleteResults);
            return DeleteResults;
        } catch (error) {
            console.error("批量删除失败:", error);
        }
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
    async Request_Modify(
        Url: string,
        Data: any,
        Params?: Record<string, string>,
        Method: "PUT" | "PATCH" = "PUT"
    ): Promise<any | Array<{ id: string | number; success: boolean; data?: any; error?: string }>> {
        //如果没有Params参数，执行单个更新
        if (!Params || Object.keys(Params).length === 0) {
            return await this.HttpRequest({
                Url: Url,
                Method: Method,
                Data: Data
            });
        }
        //有Params参数，执行批量更新
        try {
            //查询符合条件的数据
            const ItemToUpdate = await this.Request_Check(Url, Params);
            if (!Array.isArray(ItemToUpdate)) {
                console.debug("API返回数据格式错误:期望数组", ItemToUpdate);
                return;
            }
            //并行执行批量更新
            const UpdateResults = await Promise.all(
                ItemToUpdate.map(Item =>
                    this.HttpRequest({
                        Url: `${Url}/${Item.id}`,
                        Method: Method,
                        Data: Data,
                    }).then(Result => ({
                        Id: Item.id,
                        Success: true,
                        Data: Result,
                    })).catch(error => {
                        console.error(`更新 ${Item.id} 时出错:`, error);
                        return {
                            Id: Item.id,
                            Success: false,
                            Error: error.message
                        };
                    })
                )
            );
            console.debug("批量更新完成，结果:", UpdateResults);
            return UpdateResults;
        } catch (error) {
            console.error("批量更新失败:", error);
        }
    }

     /**
     * 查询数据
     * @param Url API地址
     * @param Params 查询参数
     * @example
     * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}`, { Key: Value });
     * await Tool_NetWork.instance.Request_Modify(`${Tool_NetWork.instance.UrlRequest}/${Id}`);
     */
    async Request_Check(Url: string, Params?: Record<string, string>) {
        return await this.HttpRequest({
            Url: Url,
            Method: "GET",
            Params: Params,
        });
    }

}


