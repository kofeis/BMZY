import { _decorator, Component, Node, find, EditBox, log, sp } from 'cc';
import { Tool_NetWork } from '../Tool/Tool_NetWork';
import { Tool_UI } from '../Tool/Tool_UI';
import { Resoure_Data_Template } from './Resoure_Data_Template';
import { Tool_Animation } from '../Tool/Tool_Animation';
const { ccclass, property } = _decorator;

@ccclass('Login')
export class Login extends Resoure_Data_Template {

    onLoad() {
        super.onLoad();
    }

    start() {

    }

    /**游客登录 */
    async Btn_Visitors() {
        let Save = this.Resoure_Data.Save_Get();
        Save.Account = "Visitors";
        Save.Password = "666666";
        this.Resoure_Data.Save_Set();


        await Tool_NetWork.instance.Request_Add(`${Tool_NetWork.instance.UrlRequest}`, Save);

        // Save.Password = "223";
        // console.log(a, 55555);


        let a = await Tool_NetWork.instance.Request_Check(`${Tool_NetWork.instance.UrlRequest}/${1}`);
        console.log(a);

        // Tool_NetWork.instance.Request_Modify(Tool_NetWork.instance.UrlRequest, Save, { Account: Save.Account });




    }

    /**注册登录 */
    async Btn_Login() {


        let Account = Tool_UI.instance.Component_Get(find("Canvas/Layer/Window/Account"), EditBox).string;
        let Password = Tool_UI.instance.Component_Get(find("Canvas/Layer/Window/Password"), EditBox).string;


        let Save = this.Resoure_Data.Save_Get();

        Save.Account = Account;
        Save.Password = Password;
        this.Resoure_Data.Save_Set();


        // Tool_NetWork.instance.Request_Delete(Tool_NetWork.instance.UrlRequest+"/1");

        // Tool_NetWork.instance.Request_Delete(`${Tool_NetWork.instance.UrlRequest}/${2}`);
        Tool_NetWork.instance.Request_Delete(`${Tool_NetWork.instance.UrlRequest}`, { Account: "None" });
    }


    p() {
        Tool_Animation.instance.Anim_Skeleton_Play(this.node.getChildByName("Node").getComponent(sp.Skeleton), "advanced", 1, "success_B", false);
    }

}


