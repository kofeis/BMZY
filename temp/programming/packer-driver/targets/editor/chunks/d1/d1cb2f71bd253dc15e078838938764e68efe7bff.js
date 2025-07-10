// import { _decorator, Component, Node, sys } from 'cc';
// import { WxApi } from './Vx/WxApi';
// const { ccclass, property } = _decorator;
// // 定义平台接口
// export interface IPlatform {
//     vibrateShort(): void;
//     onLoad(): void;
//     showShareMenu(): void;
//     loadVideoAd(): void;
//     reLoadVideo(): void;
//     showVideoAd(successCallback: () => void, failCallback?: () => void): void;
//     createInterstitialAd(): void;
//     showInterstitialAd(): void;
//     // showToast(title: string, icon?: string, duration?: number): void;
//     // startRecordVideo(duration?: number): void;
//     // stopRecordVideo(): void;
//     // onShareAppMessage(callback: () => void, showToast?: boolean): void;
//     // onShareAppVideo(callback?: () => void, showToast?: boolean): void;
//     // openAwemeUserProfile(callback?: () => void): void;
//     // isRecordVideo(): boolean;
//     // isPlatform(): boolean;
//     // setFrameRate(frameRate: number): void;
//     // loadRecordVideo(callback?: () => void): void;
//     // reportAnalytics(eventName: string, data?: object): void;
//     // requestSubscribeMessage(callback?: () => void): void;
//     // onShow(callback: (res: any) => void): void;
//     // offShow(callback: (res: any) => void): void;
//     // onHide(callback: () => void): void;
//     // offHide(callback: () => void): void;
//     // getLaunchOptionsSync(): any;
// }
// @ccclass('PlatformApi')
// export class PlatformApi extends Component {
//     public static readonly instance = new PlatformApi();
//     private PlatformCurrent?: IPlatform = null;
//     /**
//      * 初始化平台适配器
//      */
//     public onLoad(): void {
//         if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
//             this.PlatformCurrent = new WxApi();
//         }
//         if (this.PlatformCurrent) {
//             this.PlatformCurrent.onLoad();
//             this.PlatformCurrent.showShareMenu();
//         }
//     }
//     /**
//      * 加载激励视频广告
//      */
//     public loadVideoAd(): void {
//         this.PlatformCurrent?.loadVideoAd();
//     }
//     /**
//      * 重新加载激励视频广告
//      */
//     public reLoadVideo(): void {
//         this.PlatformCurrent?.reLoadVideo();
//     }
//     /**
//      * 显示激励视频广告
//      * @param success 观看完成的回调
//      * @param fail 观看失败的回调
//      */
//     public showVideoAd(success: () => void, fail?: () => void): void {
//         // 浏览器环境或字节跳动预览环境直接回调
//         if (sys.isBrowser || (sys.platform === sys.Platform.BYTEDANCE_MINI_GAME)) {
//             success();
//             return;
//         }
//         // 测试模式直接回调
//         success();
//     }
//     /**
//      * 创建插屏广告
//      */
//     public createInterstitialAd(): void {
//         // if (window.tt) {
//         //     this.PlatformCurrent?.createInterstitialAd();
//         // }
//     }
//     /**
//      * 显示插屏广告
//      */
//     public showInterstitialAd(): void {
//         // if (window.tt) {
//         //     this.PlatformCurrent?.showInterstitialAd();
//         // }
//     }
//     /**
//      * 触发短震动
//      */
//     public vibrateShort(): void {
//         if (this.PlatformCurrent) {
//             this.PlatformCurrent.vibrateShort();
//         }
//     }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36b36V5YZZCfYafx7W5g52+", "PlatformApi", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1cb2f71bd253dc15e078838938764e68efe7bff.js.map