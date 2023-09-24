import { _decorator, AudioClip, Component, Label, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('motCauTN_Ctrl')

export class motCauTN_Ctrl extends Component {
    textName: string = 'hello';
    @property(AudioClip)
    public clip: AudioClip = null!

    start() {

    }

    update(deltaTime: number) {
        
    }

    showCauTN(res){
        this.node.getChildByName("mango").getComponent(Sprite).spriteFrame = res.image;
        this.node.getChildByName("Node").getComponent(Label).string = res.image._name;
        this.textName = res.image._name;
    }

    playOneShot() {
        var idAu = this.getIdAudio()
        this.clip = window.GameGlobal.audio[idAu];
       // console.log(this.clip);
        if(this.clip !== undefined) this.clip.play();

    }
    getIdAudio() {
        if (window.GameGlobal.audio != null) {
            var nameCaudung = this.textName;
            for (let i = 0; i < window.GameGlobal.audio.length; i++) {
                if (window.GameGlobal.audio[i]._name === nameCaudung) return i;
            }
        }
    }
}


