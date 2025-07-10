// import { _decorator, Component, Node, sys } from 'cc';
// const { ccclass, property } = _decorator;
// @ccclass('WxApi')
// export class WxApi extends Component {
//     private InterstitialAd: any;
//     private CustomAd: any[] = [];
//     private customadIndex: number = 0;
//     private customadTop: boolean = true;
//     private customadBottom: boolean = false;
//     private setTimer: number = -1;
//     private isNewUser: boolean = false;
//     private times: number = 0;
//     private videoAd: any;
//     private videoPath?: string;
//     private callback?: () => void;
//     private close_callback?: () => void;
//     constructor() {
//         super();
//     }
//     requestSubscribeMessage() {
//     }
//     onHide() { }
//     offHide() { }
//     vibrateShort() { }
//     onShareAppVideo() { }
//     openAwemeUserProfile() {
//     }
//     reportAnalytics() { }
//     createInterstitialAd() { }
//     showInterstitialAd() { }
//     /**
//    * 初始化微信平台
//    */
//     onLoad(): void {
//         console.log("微信平台初始化");
//         this.loadVideoAd();
//         // 监听游戏显示事件
//         wx.onShow((res: { scene: number }) => {
//             console.log("wx.onShow:", res.scene);
//         });
//     }
//     /**显示分享菜单 */
//     showShareMenu(): void {
//         const shareUrls = ["https://example.com/share1.jpg", "https://example.com/share2.jpg"]; // 替换为实际分享图片URL
//         const randomIndex = Math.floor(Math.random() * shareUrls.length);
//         wx.showShareMenu({
//             title: "试过了，这款小游戏真的好玩！",
//             desc: "试过了，这款小游戏真的好玩！",
//             imageUrl: shareUrls[randomIndex],
//             success() {
//                 console.log("showShareMenu 调用成功");
//             },
//             fail(err: any) {
//                 console.log("showShareMenu 调用失败", err.errMsg);
//             },
//             complete() {
//                 console.log("showShareMenu 调用完成");
//             }
//         });
//         wx.onShareAppMessage(() => {
//             return {
//                 title: "试过了，这款小游戏真的好玩！",
//                 imageUrl: shareUrls[randomIndex],
//                 query: "openId=123456" // 替换为实际openId
//             };
//         });
//     }
//     /**
//      * 显示Toast提示
//      * @param title 提示内容
//      * @param icon 图标类型，默认"none"
//      * @param duration 显示时长(毫秒)，默认2000
//      */
//     showToast(title: string, icon: string = "none", duration: number = 2000): void {
//         wx.showToast({
//             title,
//             icon,
//             duration,
//         });
//     }
//     /**加载激励视频广告 */
//     loadVideoAd(): void {
//         this.videoAd = wx.createRewardedVideoAd({
//             adUnitId: "adunit-8f22a6474a97b725"
//         });
//         // 广告关闭回调
//         this.videoAd.onClose((res: { isEnded: boolean }) => {
//             if (res.isEnded) {
//                 this.callback && this.callback(); // 完整观看回调
//             } else {
//                 this.close_callback && this.close_callback(); // 中途关闭回调
//             }
//             this.callback = null;
//             this.close_callback = null;
//         });
//         // 广告错误回调
//         this.videoAd.onError((err: any) => {
//             console.log("onError" + err);
//             this.showToast("视频加载错误", "fail");
//         });
//     }
//     /**
//      * 显示激励视频广告
//      * @param callback 观看完成的回调
//      * @param close_callback 中途关闭的回调
//      */
//     showVideoAd(callback: () => void, close_callback?: () => void): void {
//         this.callback = callback;
//         this.close_callback = close_callback;
//         this.videoAd.show().then(() => {
//             console.log("video success");
//         }).catch(() => {
//             console.error("video fail");
//             this.reLoadVideo();
//         });
//     }
//     /**
//      * 重新加载激励视频广告
//      */
//     reLoadVideo(): void {
//         this.videoAd.load().then(() => {
//             this.videoAd.show();
//             console.log("video success");
//         }).catch(() => {
//             this.showToast("视频显示失败, 稍后重试", "fail");
//             console.error("video fail");
//         });
//     }
//     /**
//      * 分享小程序消息
//      * @param callback 分享成功回调
//      * @param showToast 分享失败时是否显示Toast，默认true
//      */
//     onShareAppMessage(callback?: () => void, showToast: boolean = true): void {
//         const shareUrls = ["https://example.com/share1.jpg", "https://example.com/share2.jpg"]; // 替换为实际分享图片URL
//         const randomIndex = Math.floor(Math.random() * shareUrls.length);
//         wx.shareAppMessage({
//             title: "试过了，这款小游戏真的好玩！",
//             imageUrl: shareUrls[randomIndex],
//             query: "openId=123456", // 替换为实际openId
//             success() {
//                 console.log("分享视频成功");
//                 callback && callback();
//             },
//             fail() {
//                 showToast && this.showToast("需要分享游戏给好友才能获得奖励哟！");
//             }
//         });
//     }
//     /**
//      * 显示自定义广告
//      * @param showTop 是否显示顶部广告
//      * @param showBottom 是否显示底部广告
//      */
//     showCustomAd(showTop: boolean, showBottom: boolean): void {
//         clearInterval(this.setTimer);
//         this.setTimer = window.setInterval(this.updateCustomAd.bind(this), 10000);
//         this.customadBottom = showBottom;
//         this.customadTop = showTop;
//         this.showCustomAdSelf(showTop, showBottom);
//     }
//     /**
//      * 更新自定义广告
//      */
//     private updateCustomAd(): void {
//         this.hideCustomAd(true, true);
//         this.customadIndex += 4;
//         if (this.customadIndex >= this.CustomAd.length) {
//             this.customadIndex = 0;
//         }
//         this.showCustomAdSelf(this.customadTop, this.customadBottom);
//     }
//     /**
//      * 实际显示自定义广告
//      * @param showTop 是否显示顶部广告
//      * @param showBottom 是否显示底部广告
//      */
//     private showCustomAdSelf(showTop: boolean, showBottom: boolean): void {
//         if (showTop) {
//             this.CustomAd[this.customadIndex]?.isShow() || this.CustomAd[this.customadIndex]?.show();
//             this.CustomAd[this.customadIndex + 1]?.isShow() || this.CustomAd[this.customadIndex + 1]?.show();
//         }
//         if (showBottom) {
//             this.CustomAd[this.customadIndex + 2]?.isShow() || this.CustomAd[this.customadIndex + 2]?.show();
//             this.CustomAd[this.customadIndex + 3]?.isShow() || this.CustomAd[this.customadIndex + 3]?.show();
//         }
//     }
//     /**
//      * 隐藏自定义广告
//      * @param hideTop 是否隐藏顶部广告
//      * @param hideBottom 是否隐藏底部广告
//      */
//     hideCustomAd(hideTop: boolean, hideBottom: boolean): void {
//         for (let i = 0; i < this.CustomAd.length; i++) {
//             const position = i % 4;
//             if (hideTop && position < 2 && this.CustomAd[i]?.isShow()) {
//                 this.CustomAd[i].hide();
//             }
//             if (hideBottom && position >= 2 && this.CustomAd[i]?.isShow()) {
//                 this.CustomAd[i].hide();
//             }
//         }
//     }
//     // 其他微信API封装方法...
//     /**
//      * 监听游戏显示事件
//      * @param callback 回调函数
//      */
//     onShow(callback: (res: any) => void): void {
//         wx.onShow(callback);
//     }
//     /**
//      * 取消监听游戏显示事件
//      * @param callback 回调函数
//      */
//     offShow(callback: (res: any) => void): void {
//         wx.offShow(callback);
//     }
//     /**
//      * 获取启动参数
//      * @returns 启动参数
//      */
//     getLaunchOptionsSync(): any {
//         return wx.getLaunchOptionsSync();
//     }
//     /**
//      * 微信震动功能封装
//      * @param Type 震动强度类型，可选值为 'heavy' | 'medium' | 'light'，默认为'medium'
//      * @param Callbacks 可选的回调函数配置
//      * @param Callbacks.success 震动成功的回调函数
//      * @param Callbacks.fail 震动失败的回调函数
//      * @param Callbacks.complete 震动完成的回调函数（无论成功失败都会执行）
//      */
//     VibrateShort(
//         Type: 'heavy' | 'medium' | 'light' = 'medium',
//         Callbacks?: {
//             success?: () => void,
//             fail?: (err: { errMsg: string }) => void,
//             complete?: () => void
//         }
//     ): void {
//         wx.vibrateShort({ Type, ...Callbacks });
//     }
// }
// // export default WxApi;
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b83d3iFWoRCO7z/SKqvDF3f", "WxApi", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf5f8481c534aea6ec74c2313186df4759e5d4cc.js.map