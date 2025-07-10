import { _decorator, CCBoolean, Component, find, Node, sys, UITransform, v3, view } from 'cc';
import { Tool_Event } from '../Tool/Tool_Event';
import { Tool_UI } from '../Tool/Tool_UI';
const { ccclass, property } = _decorator;

@ccclass('Adaptation')
export class Adaptation extends Component {

    start() {
        Tool_Event.instance.Event_On("Screen_Update", this.Screen_Change, this);
    }

    Screen_Change(Event_Name, Screen_Mode) {
        this.scheduleOnce(() => {
            if (Screen_Mode == "Horizontal") {
                this.Screen_Update_Horizontal();
            } else {
                this.Screen_Update_Vertical();
            }
        })
    }

    /**横屏游戏背景适配 */
    Screen_Update_Horizontal() {
        /**游戏画布高度 */
        let Height_Canvas = Tool_UI.instance.Get_Height_Visible();
        /**游戏设计高度 */
        let Height_Design = Tool_UI.instance.Get_Height_Design();
        let Size = Height_Canvas / Height_Design;
        this.node.scale = v3(Size, Size, 1);
        console.debug("横屏游戏背景适配");
        console.debug("%c这是带样式的文本", "color: #00CCFF; font-size: 20px;");
        console.log("%c这是带样式的文本", "color: red; font-size: 20px;");
    }
    /**竖屏游戏背景适配 */
    Screen_Update_Vertical() {
        /**游戏画布高度 */
        let Width_Canvas = Tool_UI.instance.Get_Width_Visible();
        /**游戏设计高度 */
        let Width_Design = Tool_UI.instance.Get_Width_Design();
        let Size = Width_Canvas / Width_Design;
        this.node.scale = v3(Size, Size, 1);
        console.log("竖屏游戏背景适配");
    }

    onDestroy() {
        Tool_Event.instance.Event_Off("Screen_Update", this.Screen_Change, this);
    }

}


