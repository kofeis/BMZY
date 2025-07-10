import { _decorator, Component, Node, color, Color, CCFloat, Label, LabelOutline, tween, Layout, v3, Font, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Jump_String_Script')
export class Jump_String_Script extends Component {



    @property({type:Prefab})
    Prefab: Prefab = null;

    @property({ tooltip: "需要跳动的字符串" })
    str: String = "";

    @property({ type: CCFloat, tooltip: "字符大小" })
    fontSize: number = 0;

    @property({ type: CCFloat, tooltip: "单个字符跳动时间" })
    aniTime: number = 0;

    @property({ tooltip: "描边颜色" })
    oulineColor: Color = color(255, 255, 255);

    @property({ type: CCFloat, tooltip: "描边宽度" })
    oulineWidth: number = 1;

    @property({ tooltip: "是否打开描边" })
    isOulin: boolean = true;

    @property({ type: Font, tooltip: "单个字符跳动时间" })
    font: Font = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.addComponent(Layout);

        this.node.getComponent(Layout).type = Layout.Type.HORIZONTAL;
        this.node.getComponent(Layout).resizeMode = Layout.ResizeMode.CONTAINER;

        for (let i: number = 0; i < this.str.length; i++) {
            let str = this.str[i];
            let labelNode = instantiate(this.Prefab);

            let label = labelNode.getComponent(Label);
            if (this.isOulin) {
                let labelOutLine = labelNode.addComponent(LabelOutline);
                labelOutLine.color = this.oulineColor
                labelOutLine.width = this.oulineWidth
            }
            label.font = this.font;
            label.lineHeight = this.fontSize;
            label.string = str;
            label.fontSize = this.fontSize;
            this.node.addChild(labelNode);
        }

        this.scheduleOnce(() => {
            this.playStrJump();
            this.schedule(() => {
                this.playStrJump();
            }, this.aniTime * this.str.length / 2 + 0.2);
        })
    }

    playStrJump() {
        let jumpTime = this.aniTime / 2;
        let strIndex = 0;
        let jumpStr = (labelNode: Node) => {
            tween(labelNode)
                .sequence(
                    tween().to(jumpTime, { position: v3(labelNode.position.x, this.fontSize / 2) }),
                    tween().to(jumpTime / 4 * 3, { position: v3(labelNode.position.x, -this.fontSize / 3) }),
                    tween().to(jumpTime / 4, { position: v3(labelNode.position.x, 0) })
                )
                // .repeatForever()
                .start();


            if (strIndex < this.node.children.length - 1) { //未到最后一个字符
                strIndex++;
                this.scheduleOnce(() => {
                    jumpStr(this.node.children[strIndex]);
                }, jumpTime / 2);
            }
        }

        jumpStr(this.node.children[strIndex]);

    }

    // update (dt) {}

}


