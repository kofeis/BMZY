import { _decorator, Component, Node, sys } from 'cc';
import { WxApi } from './WxApi';

const { ccclass, property } = _decorator;

// 定义平台接口
export interface IPlatform {
    vibrateShort(): void;

    onLoad(): void;
    showToast(title: string, icon?: string, duration?: number): void;
    startRecordVideo(duration?: number): void;
    stopRecordVideo(): void;
    showVideoAd(successCallback: () => void, failCallback?: () => void): void;
    showInterstitialAd(): void;
    loadVideoAd(res: any): void;
    reLoadVideo(): void;
    showShareMenu(): void;
    shareAppMessage(successCallback: () => void, failCallback?: () => void): void;
    onShareAppVideo(callback?: () => void, showToast?: boolean): void;

    openAwemeUserProfile(callback?: () => void): void;

    isRecordVideo(): boolean;

    createInterstitialAd(): void;
    requestSubscribeMessage(callback?: () => void): void;

    isPlatform(): boolean;
    setFrameRate(frameRate: number): void;
    loadRecordVideo(callback?: () => void): void;
    reportAnalytics(eventName: string, data?: object): void;

    onShow(callback: (res: any) => void): void;
    offShow(callback: (res: any) => void): void;
    onHide(callback: () => void): void;
    offHide(callback: () => void): void;
    getLaunchOptionsSync(): any;

    shareMessageToFriend(res?: any);
}



@ccclass('PlatformApi')
export class PlatformApi extends Component {

    public static readonly instance = new PlatformApi();

    PlatformCurrent?: IPlatform = null;
    /**
     * 初始化平台适配器
     */
    onLoad(): void {
        console.log("平台", sys.platform);
        if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            console.info("初始化", sys.platform);
            this.PlatformCurrent = new WxApi();
        }
        if (this.PlatformCurrent) {
            this.PlatformCurrent.onLoad();
            this.PlatformCurrent.showShareMenu();
        }
    }

    showToast(title: string, icon: string | "success" | "loading" | "none" = "none", duration: number = 2000): void {
        this.PlatformCurrent?.showToast(title, icon, duration);
    }

    startRecordVideo(t) {
        undefined === t && (t = 90);
        this.PlatformCurrent?.startRecordVideo(t);
    }

    stopRecordVideo() {
        this.PlatformCurrent?.stopRecordVideo();
    }

    /**
     * 显示激励广告
     * @param success 观看完成的回调
     * @param fail 观看失败的回调
     */
    showVideoAd(success: () => void, fail?: () => void): void {
        if (this.PlatformCurrent) {
            this.PlatformCurrent?.showVideoAd(success, fail);
        } else {
            success();
        }
    }

    /**
     * 加载激励广告
     */
    loadVideoAd(adUnitId: string): void {
        console.log("加载激励视频");
        this.PlatformCurrent?.loadVideoAd(adUnitId);
    }

    /**
     * 重新加载激励广告
     */
    reLoadVideo(): void {
        this.PlatformCurrent?.reLoadVideo();
    }


    createInterstitialAd() {
        this.PlatformCurrent?.createInterstitialAd();
    };

    /**
     * 显示插屏广告
     */
    showInterstitialAd(): void {
        if (this.PlatformCurrent) {
            this.PlatformCurrent?.showInterstitialAd();
        }
    };

    showShareMenu() {
        this.PlatformCurrent?.showShareMenu();
    }

    shareAppMessage = function (successCallback: () => void, failCallback?: () => void) {
        if (this.PlatformCurrent) {
            this.PlatformCurrent?.shareAppMessage(successCallback, failCallback);
        } else {
            successCallback();
        }
    };

    onShareAppVideo(t, e) {
        undefined === e && (e = true);
        if (sys.isBrowser) {
            t && t();
        } else {
            this.PlatformCurrent?.onShareAppVideo(t, e);
        }
    };
    openAwemeUserProfile(t) {
        if (sys.isBrowser) {
            t && t();
        } else {
            this.PlatformCurrent?.openAwemeUserProfile(t);
        }
    };
    isRecordVideo() {
        return !!this.PlatformCurrent && (this.PlatformCurrent.isRecordVideo(), true);
    };
    isPlatform() {
        if (this.PlatformCurrent) {
            return this.PlatformCurrent.isPlatform();
        }
    };
    setFrameRate(t) {
        this.PlatformCurrent?.setFrameRate(t);
    };
    loadRecordVideo(t) {
        this.PlatformCurrent?.loadRecordVideo(t);
    };
    reportAnalytics(t, e) {
        undefined === e && (e = {});
        this.PlatformCurrent?.reportAnalytics(t, e);
    };

    requestSubscribeMessage(t) {
        this.PlatformCurrent?.requestSubscribeMessage(t);
    }
    onShow(t) {
        this.PlatformCurrent?.onShow(t);
    }
    offShow(t) {
        this.PlatformCurrent?.offShow(t);
    }
    onHide(t) {
        this.PlatformCurrent?.onHide(t);
    }
    offHide(t) {
        this.PlatformCurrent?.offHide(t);
    }
    getLaunchOptionsSync() {
        return this.PlatformCurrent?.getLaunchOptionsSync();
    }
    vibrateShort() {
        this.PlatformCurrent?.vibrateShort();
    }

    shareMessageToFriend() {
        this.PlatformCurrent?.shareMessageToFriend();
    }
}


