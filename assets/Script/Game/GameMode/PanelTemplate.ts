import { _decorator, Component, find, Node } from 'cc';
import { Game_Script } from '../Game_Script';
import { Resoure_Data } from '../../Tool/Resoure_Data';
const { ccclass, property } = _decorator;

@ccclass('PanelTemplate')
export class PanelTemplate extends Component {

    Resoure_Data: Resoure_Data = null;
    Game_Script: Game_Script = null;
    /**是否初始化 */
    IsInit: boolean = false;

    /**关卡等级 */
    Level: number = null;
    /**分数 */
    Score: number = null;
    /**目标分数 */
    ScoreTarget: number = null;
    /**时间 */
    Time: number = null;
    /**目标时间 */
    TimeTarget: number = null;

    /**胜利面板 */
    PanelVictory: Node = null;
    /**失败面板 */
    PanelFail: Node = null;

    /**设置按钮 */
    BtnSetting: Node = null;
    /**设置面板 */
    PanelSetting: Node = null;

    /**提示面板 */
    PanelTip: Node = null;
    /**提示按钮 */
    BtnTip: Node = null;
    /**关闭提示按钮 */
    BtnTipClose: Node = null;
    /**关闭提示按钮 */
    BtnTipGet: Node = null;


    /**重新开始按钮 */
    BtnRestart: Node = null;

    /**通关按钮 */
    BtnNext: Node = null;
    /**退出按钮 */
    BtnExit: Node = null;

    async onLoad() {
        this.Game_Script = find("Canvas/InterfaceGame").getComponent(Game_Script);
        this.Resoure_Data = this.Game_Script.Resoure_Data;
    }

}


