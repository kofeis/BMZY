import { _decorator, Component, find, Node, UITransform, v3 } from 'cc';
import { Tool_Event } from '../Tool/Tool_Event';
import { Tool_UI } from '../Tool/Tool_UI';
const { ccclass, property } = _decorator;

@ccclass('Bg')
export class Bg extends Component {


    start() {
        Tool_Event.instance.Event_On("Screen_Update", this.Screen_Change, this);
        this.Screen_Update_Vertical();
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


    Screen_Update_Horizontal() {
        let H_Canvas = find("Canvas").getComponent(UITransform).height
        let H = 1138//this.node.getComponent(UITransform).height
        let M = H_Canvas / H;


        this.node.scale = v3(M, M, 1);
        console.log(this.node.scale);
    }

    Screen_Update_Vertical() {
        let H_Canvas = find("Canvas").getComponent(UITransform).height
        let H = 1138//this.node.getComponent(UITransform).height
        let M = H_Canvas / H;
        this.node.scale = v3(M, M, 1);
        console.log(this.node.scale);

        // /**游戏画布高度 */
        // let Width_Canvas = Tool_UI.instance.Get_Width_Canvas();
        // /**游戏设计高度 */
        // let Width_Design = Tool_UI.instance.Get_Width_Design();
        // let Size = Width_Canvas / Width_Design;
        // this.node.scale = v3(Size, Size, 1);
        // console.log("竖屏游戏背景适配",Size);

    }

    // update(deltaTime: number) {

    //     // let W_Canvas=find("Canvas").getComponent(UITransform).width;
    //     // let W = this.node.getComponent(UITransform).width;
    //     // let M = W_Canvas / W;

    //     let H_Canvas = find("Canvas").getComponent(UITransform).height
    //     let H = 1138//this.node.getComponent(UITransform).height
    //     let M = H_Canvas / H;


    //     this.node.scale = v3(M, M, 1);
    //     console.log(M);

    // }

    onDestroy() {
        console.log("销毁");

        Tool_Event.instance.Event_Off("Screen_Update", this.Screen_Change, this);
    }

}


