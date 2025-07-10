import { _decorator, assetManager, Component, ImageAsset, Label, Node, Sprite, SpriteFrame, Texture2D } from 'cc';
import { WechatManager } from './WechatManager';
const { ccclass, property } = _decorator;


@ccclass('LoginLayer')
export class LoginLayer extends Component {
  @property(Node) avatar: Node = null;        // 头像
  @property(Label) nameLabel: Label = null;   // 昵称

  protected start(): void {
    WechatManager.instance.initAutoSetting((url) => {
      this.setAvatar(url);
    });
  }

  public clickShareEvent() {
    // WechatManager.instance.showShareMenu();
  }

  //设置头像
  private setAvatar(url): void {
    let spire = this.avatar.getComponent(Sprite);
    assetManager.loadRemote<ImageAsset>(url + "?aaa=aa.jpg", { ext: '.jpg' }, (err, imageAsset) => {
      if (err) {
        return console.error(err.message);
      }

      let sp = new SpriteFrame();
      let texture = new Texture2D();
      texture.image = imageAsset;
      sp.texture = texture
      spire.spriteFrame = sp;
    })
  }
}
