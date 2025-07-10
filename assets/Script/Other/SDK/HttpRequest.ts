import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HttpRequest')
export class HttpRequest extends Component {
    public static readonly instance = new HttpRequest();

    /**
     * 获取微信OpenID
     * @param callback 获取成功后的回调函数
     */
    getOpenId(callback?: (data?: any) => void): void {
        // 检查是否在微信/头条环境
        if (window.wx) {
            // 调用微信登录接口
            wx.login({
                success: (res: { code: string }) => {
                    console.log("微信登录成功，获取到code:", res.code);
                    // 准备请求参数
                    const params = {
                        code: res.code,  // 微信临时登录凭证
                    };
                    // 向服务器发送请求
                    this.request(
                        "zdydc/user/login",  //zdydc/user/login 登录接口路径 https://yx.megoo.top/wochengyuteniu/user/getWxOpenId
                        params,
                        (response: any) => {
                            if (response.openId) {
                                console.log("成功获取openid:", response);
                            } else {
                                console.log("获取openid失败:", response);
                            }
                            // 执行回调
                            callback?.(response);
                        },
                        (error: any) => {
                            console.error("登录接口调用失败:", error);
                            callback?.(null);
                        }
                    );
                },
                fail: (err: any) => {
                    console.error("微信登录失败:", err);
                    callback?.(null);
                }
            });
        } else {
            // 非微信环境直接执行回调
            if (callback && !sys.isNative) {
                callback();
            }
        }
    }

    /**
     * 通用HTTP请求方法
     * @param endpoint API端点路径
     * @param data 请求数据
     * @param successCallback 成功回调
     * @param errorCallback 失败回调
     * @param isAbsoluteUrl 是否使用绝对URL
     * @param method HTTP方法，默认POST
     */
    request(
        endpoint: string,
        data: any,
        successCallback: (response: any) => void,
        errorCallback: (error: any) => void,
        isAbsoluteUrl: boolean = false,
        method: string = "POST"
    ): void {
        // 构造完整URL
        let url = "https://yx.megoo.top/" + endpoint;
        console.log("请求URL:", url, "请求数据:", data);

        // 如果已经是绝对URL，则直接使用
        if (isAbsoluteUrl) {
            url = endpoint;
        }

        // 序列化请求数据
        const requestData = JSON.stringify(data);
        const xhr = new XMLHttpRequest();

        // 状态变更回调
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {  // 请求完成
                if (xhr.status === 200) {  // 成功响应
                    let response = null;
                    if (xhr.responseText !== "") {
                        try {
                            // 解析响应数据
                            response = JSON.parse(xhr.responseText);
                        } catch (e) {
                            console.error("响应数据解析失败:", e);
                        }
                    }
                    successCallback?.(response);
                } else {
                    // 构造错误对象
                    const error = {
                        url: url,
                        readyState: xhr.readyState,
                        status: xhr.status,
                        data: requestData
                    };
                    errorCallback?.(error);
                }
            }
        };

        // 初始化请求
        xhr.open(method, url, true);
        // 设置请求头（非GET请求）
        if (method.toUpperCase() !== "GET") {
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            xhr.send(requestData);
        } else {
            xhr.send();
        }
    }

    getplayerData(t) {
        this.request("ot/gqsxz/savedata", {
            openId: t
        }, function (t) {
            console.log("-----------getplayerData:", t);
            if (0 == t.errno) {
                t.data;
            } else {
                console.log("-----------获取用户数据:", t);
            }
        }, function (t) {
            console.log("getplayerData 调用失败", t);
        });
    };

}


