import { _decorator, Component, Node, find, EventMouse, v3 } from 'cc';
import { Resoure_Data } from '../Tool/Resoure_Data';
const { ccclass, property } = _decorator;

@ccclass('Resoure_Data_Template')
export class Resoure_Data_Template extends Component {

    Resoure_Data: Resoure_Data = null;

    constructor() {
        super();
    }

    onLoad() {
        this.Resoure_Data = find("Resoure_Data").getComponent(Resoure_Data);
    }

    start() {

    }

    onEnable() {

    }

    onDisable() {

    }

    onDestroy() {

    }

    update(deltaTime: number) {

    }

    lateUpdate(dt: number) {

    }

    /**在编辑器中选择该节点时 */
    onFocusInEditor() {
        console.log(this.node.name);
    }

    /**在编辑器中取消选择该节点时 */
    onLostFocusInEditor() {
        console.log(this.node.name);
    }


}


