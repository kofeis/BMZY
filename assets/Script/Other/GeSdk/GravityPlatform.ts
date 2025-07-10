import { sys } from "cc";
import GravityAnalyticsAPI from "./gravityengine.mg.cocoscreator.min.js";
// import { Resoure_Data } from "../../Tool/Resoure_Data";
declare global {
    interface Window {
        ge: GravityPlatform;
    }
}
export class GravityPlatform {

    public static readonly instance = new GravityPlatform();

    private geInstance: GravityAnalyticsAPI = null;

    Data_Get(Data_Name: string, Default_Value: any = null): any {
        try {
            let Data_Value;
            const Data_Raw = sys.localStorage.getItem(Data_Name);
            Data_Value = Data_Raw ? JSON.parse(Data_Raw) : null;
            // 返回数据或默认值
            return Data_Value !== undefined ? Data_Value : Default_Value;
        } catch (e) {
            console.error(`[Storage] 读取 ${Data_Name} 失败:`, e);
            return Default_Value;
        }
    }

    Data_Set(Data_Name: string, Data: any): void {
        try {
            sys.localStorage.setItem(Data_Name, JSON.stringify(Data));
        } catch (e) {
            console.error(`[Storage] 保存 ${Data_Name} 失败:`, e);
        }
    }

    // 初始化
    initGeSdk(clientId: string) {
        console.log("初始化initGeSdk");

        let config: any = {
            clientId: clientId,
            name: "ge",
            debugMode: "none", // "debug";
            autoTrack: {
                appLaunch: true,
                appShow: true,
                appHide: true
            },
            accessToken: "Jlfx3rqA6jew02Ywtx7iq8HG1QfmpOCZ", // 微信
        };

        this.geInstance = new GravityAnalyticsAPI(config);
        this.geInstance.setupAndStart();

        if (this.Data_Get("IsGaInitialize") != false) {
            this.geInstance.initialize({
                name: clientId,
                version: 1,
                openid: clientId,
                enable_sync_attribution: false,
            })
            .then((res) => {
                console.log("GravityAnalyticsAPI initialize success", res);
                this.Data_Set("IsGaInitialize", true);
            })
            .catch((err) => {
                console.error("GravityAnalyticsAPI initialize failed", err);
            });
        }
    }

    /**
     * 上报关卡开始事件
     * @param properties { "$user_level": 1 }
     */
    onLevelStart(properties: any) {
        this.geInstance.track("LevelStart", properties);
        console.log("上报关卡开始事件");
    }

    /**
     * 上报通关事件
     * @param properties { "$user_level": 1 }
     */
    onLevelSuccess(properties: any) {
        this.geInstance.track("LevelSuccess", properties);
        console.log("上报通关事件");
    }

    /**
     * 上报关卡失败事件
     * @param properties { "$user_level": 1 }
     */
    onLevelFail(properties: any) {
        this.geInstance.track("LevelFail", properties);
        console.log("上报关卡失败事件");
    }

    /**
     * 上报放弃关卡事件
     * @param properties { "$user_level": 1 }
     */
    onLevelGiveUp(properties: any) {
        this.geInstance.track("LevelGiveUp", properties);
        console.log("上报放弃关卡事件");
    }

    onAdRequest(properties: any) {
    }

    onAdCancel(properties: any) {
    }

    onAdFinish() {
        // 只有微信小游戏需要上报，抖音小游戏引力引擎会自动拉取
        if (sys.platform == sys.Platform.WECHAT_GAME) {
            console.log("微信上报广告结束事件");
            let videoAdId = "adunit-c6a790cad3e75438";
            this.geInstance.adShowEvent("reward", videoAdId, {
                custom_param: "激励视频"
            });
        }
    };
}
