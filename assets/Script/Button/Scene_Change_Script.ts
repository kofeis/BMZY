import { _decorator, Component, v3, tween, Prefab, Input, director, find, Animation, game, CCBoolean, CCInteger, Node, UITransform, Tween, Label, ProgressBar, Enum, log, NodeEventType } from 'cc';


import { Resoure_Data, Scene_Change_Type, ScreenMode, } from '../Tool/Resoure_Data';
import { Tool_Event } from '../Tool/Tool_Event';


const { ccclass, property } = _decorator;

@ccclass('Script_Scene_Change')
export default class Script_Scene_Change extends Component {

    Resoure_Data: Resoure_Data = null;

    @property({ tooltip: "路径" })
    Path: string = "";

    /**屏幕模式 */
    @property({ type: Enum(ScreenMode), tooltip: "横屏 竖屏" })
    ScreenMode: ScreenMode = ScreenMode.Horizontal;

    /**场景改变类型 */
    @property({ type: Enum(Scene_Change_Type), tooltip: "自动跳转 手动跳转 结束游戏" })
    Scene_Change_Type: Scene_Change_Type = Scene_Change_Type.Automatic;

    /**进度遮罩 */
    @property({ type: Node, tooltip: "进度遮罩" })
    Progress_Mask: Node = null;

    /**进度条 */
    @property({ type: Node, tooltip: "进度条" })
    Progress_Bar: Node = null;

    /**进度值 */
    @property({ type: Label, tooltip: "进度值" })
    Value: Label = null;



    async onLoad() {
        this.Resoure_Data = find("Resoure_Data").getComponent(Resoure_Data);
    }

    start() {
        if (this.Scene_Change_Type == Scene_Change_Type.Automatic) {
            this.Scene_Jump_Automatic();
        } else {
            Tool_Event.instance.On_Event_TOUCH_END(this.node, this.Scene_Jump_Manual, this);
        }
    }

    /**自动跳转 */
    async Scene_Jump_Automatic() {
        this.Resoure_Data.Scene_Name_Next = this.Path;
        let SceneGame = await this.Resoure_Data.Load_Scene(this.Resoure_Data.Scene_Name_Next, this.Progress_Mask, this.Progress_Bar, this.Value, this.ScreenMode);
        this.Resoure_Data.Director_Run(SceneGame);

    }

    /**手动跳转 */
    async Scene_Jump_Manual() {
        if (this.Scene_Change_Type == Scene_Change_Type.Finish) {
            this.Resoure_Data.Game_End();
        } else if (this.Scene_Change_Type == Scene_Change_Type.Manual) {
            this.Resoure_Data.Scene_Name_Next = this.Path;
            let SceneGame = await this.Resoure_Data.Load_Scene(this.Resoure_Data.Scene_Name_Next);
            this.Resoure_Data.Director_Run(SceneGame);
            return;

        }
    }


}

