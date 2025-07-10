import { _decorator, Animation, Button, CCString, Component, EventHandler, find, Node, Tween, v3, Vec3 } from 'cc';
import { Tool_Event } from '../Tool/Tool_Event';

const { ccclass, property } = _decorator;

@ccclass('Click_Events')
export class Click_Events {
    @property({ type: [EventHandler] })
    Event_Handler: EventHandler[] = [];
    @property
    public Anim_Switch: boolean = true;
}

@ccclass('Btn_Script')
export class Btn_Script extends Component {

    @property({ type: Click_Events })
    Events_TOUCH_START: Click_Events = new Click_Events;

    @property({ type: Click_Events })
    Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    // @property({ type: Click_Events })
    // Click_Events: Click_Events = new Click_Events;

    onLoad() {

    }
    start() {
        console.log(this.Click_Events.Event_Handler.length);

        for (let i = 0; i < this.Click_Events.Event_Handler.length; i++) {
            let Event = this.Click_Events.Event_Handler[i];
            let Target_Node = Event.target;
            let Scr_Name = Event._componentName;
            let Fun_Name = Event.handler;
            let Custom_EventData = Event.customEventData;
            console.log(Target_Node, Scr_Name, Fun_Name)
            Tool_Event.instance.Set_Btn_Event_Add(this.node, Target_Node, Scr_Name, Fun_Name, Custom_EventData);
        }
        if (this.Click_Events.Anim_Switch) {
            Tool_Event.instance.Set_Btn_Event_Anim(this.node, this.Click_Events.Anim_Switch);
        }
        return;
        Tool_Event.instance.On_Event_TOUCH_START(this.node, (Event) => {
            this.On_Touch_Start(Event);
        })
        Tool_Event.instance.On_Event_TOUCH_END(this.node, (Event) => {
            this.On_Touch_End(Event);
        })
        Tool_Event.instance.On_Event_TOUCH_CANCEL(this.node, (Event) => {
            this.On_Touch_Cancel(Event);
        })
        Tool_Event.instance.On_Event_TOUCH_MOVE(this.node, (Event) => {
            this.On_Touch_Move(Event);
        })
        Tool_Event.instance.On_Event_TOUCH_Pressing(this.node, 0.25, () => {
            this.On_Touch_Pressing();
        }, () => {

        });
        Tool_Event.instance.On_Event_TOUCH_Presslong(this.node, 0.25, () => {
            this.On_Touch_Presslong();
        }, () => {
        });
        Tool_Event.instance.On_Event_TOUCH_Double(this.node, 2, 0.25, () => {
            this.On_Touch_Double();
        });

    }

    On_Touch_Start(Event) {
        console.error("aaaaaaaaaaaaaaaaa");

    }

    On_Touch_End(Event) {

    }

    On_Touch_Cancel(Event) {
        this.On_Touch_End(Event);
    }

    On_Touch_Move(Event) {

    }

    On_Touch_Pressing() {

    }
    On_Touch_Presslong() {

    }

    On_Touch_Double() {

    }


}


