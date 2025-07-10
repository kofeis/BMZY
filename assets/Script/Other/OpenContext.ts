import { _decorator, Component, Node, SubContextView, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OpenContext')
export class OpenContext extends Component {

    private openContext: any; // 子域对象


    onLoad() {

    }

    start() {


        if (sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.WECHAT_MINI_PROGRAM) {
            // @ts-ignore
            this.openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查

            let testLevel = 5; // 测试数据
            console.error("测试数据");
            this._reportUserLevel(testLevel, () => {
                console.error("测试数据完成");
                this.openContext.postMessage({ type: 'engine', event: 'level' }); // level为自定义key，如果没有特殊需求，建议直接用。否则你的变动比较大，调整wx-sub-project/index.js的对应的key和this._reportUserLevel的key都需要对齐
            });
        }
    }

    update(deltaTime: number) {

    }

    private _reportUserLevel(level: number, listener?: Function, target?: any) {


        // @ts-ignore
        wx.setUserCloudStorage({ //调用微信接口上报关卡等级信息，用于好友圈排行
            KVDataList: [
                { key: 'level', value: `${level}` }
            ],

            success: () => {
                listener?.apply(target);
            },

            fail: (err: any) => {
                console.log('report level error:', err);
            }
        });
    }
}
