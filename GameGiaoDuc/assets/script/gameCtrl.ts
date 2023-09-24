import { _decorator, Component, loader, Node, Texture2D, AudioClip, SpriteFrame, find, instantiate, Sprite, AudioSource, Animation, Vec3, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameCtrl')
export class gameCtrl extends Component {
    @property(AudioClip)
    public clip: AudioClip = null!

    @property(AudioClip)
    public cliptrue: AudioClip = null!
    @property(AudioClip)
    public clipfall: AudioClip = null!

    @property(AudioSource)
    public audioSource: AudioSource = null!

    private _targetPos0: Vec3 = new Vec3(-160, 380);
    private _targetPos1: Vec3 = new Vec3(160, 380);
    private _targetPos2: Vec3 = new Vec3(-160, -260);
    private _targetPos3: Vec3 = new Vec3(160, -260);




    start() {
        this.LoadBaiHocTaiLop();

    }
    LoadBaiTongHop(){
        var self = this;
        window.GameGlobal.cauTraLoi= [0,1,2,3];
        find("Canvas/loading").active =true;
        window.GameGlobal.loadData(function (res) {
            self.HienThiCauHoi();
             find("Canvas/loading").active =false;

        });
    }
    LoadBaiHocTaiLop(){
        var self = this;
        window.GameGlobal.cauTraLoi= [0,1,2,3];
        find("Canvas/loading").active =true;
        window.GameGlobal.loadDataHocBai(function (res) {
            self.HienThiCauHoi();
             find("Canvas/loading").active =false;

        });
    }

    CauTiepTheo() {
        if (window.GameGlobal.cauTraLoi[0] + 1 < window.GameGlobal.image.length) window.GameGlobal.cauTraLoi[0] += 1;
        else window.GameGlobal.cauTraLoi[0] = 0;
        this.HienThiCauHoi();
        this.showKetQua();
    }
    showKetQua() {
        var _getNodedung = find("Canvas/hud/Node001/dung/Label");
        var _getNodesai = find("Canvas/hud/Node001/sai/Label");
        _getNodedung.getComponent(Label).string = window.GameGlobal.chonDung;
        _getNodesai.getComponent(Label).string = window.GameGlobal.chonSai;


    }
    HienThiCauHoi() {
        window.GameGlobal.chongAnNhieuLan = [true, true, true, true]
        window.GameGlobal.iXepRandomCauTraLoi(); // vị trí xếp random các câu trả lời
        var iXepRandomCauTraLoi = window.GameGlobal.xepRandomCauTraLoi;
        window.GameGlobal.cauTraLoi[0]; // câu trả lời đúng
        window.GameGlobal.chonCauSai(); // random câu trả lời sai
        // var _getNode = find("Canvas/Node");
        //   _getNode.children[0].getChildByName("mango").getComponent(Sprite).spriteFrame = window.GameGlobal.image[iXepRandomCauTraLoi[0]];

        var _getNode = find("Canvas/Node");
        let iz = 1;
        for (let i = 0; i < 4; i++) {
            var imgData;
            if (iXepRandomCauTraLoi[i] == 0) {
                imgData = window.GameGlobal.cauTraLoi[0];
            } else {
                imgData = window.GameGlobal.cauTraLoi[iz];
                iz++;
            }
            _getNode.children[i].getChildByName("mango").getComponent(Sprite).spriteFrame = window.GameGlobal.image[imgData];
            _getNode.children[i].getChildByName("Node").getComponent(Label).string = window.GameGlobal.image[imgData]._name;
        }

        this.playOneShot();
    }





    update(deltaTime: number) {

    }

    clickNode1() {
        console.log(1);
        if (window.GameGlobal.chongAnNhieuLan[0]) {
            window.GameGlobal.chongAnNhieuLan[0] = false;
            var dung;
            if (window.GameGlobal.xepRandomCauTraLoi[0] == 0) {
                dung = find("Canvas/Node/dung");
                this.audioDung();
                window.GameGlobal.chonDung += 1;
            }
            else {
                dung = find("Canvas/Node/sai");

                this.audioSai();
                window.GameGlobal.chonSai += 1;
            }
            dung.setPosition(this._targetPos0);
            dung.getComponent(Animation).play();

            this.showKetQua();
        }else{
            if (window.GameGlobal.xepRandomCauTraLoi[0] != 0) {
                find("Canvas/Node/sai").setPosition(this._targetPos0);
                find("Canvas/Node/sai").getComponent(Animation).play();
            }
            
        }
    }

    clickNode2() {
        if (window.GameGlobal.chongAnNhieuLan[1]) {
            window.GameGlobal.chongAnNhieuLan[1] = false;

            var dung;
            if (window.GameGlobal.xepRandomCauTraLoi[1] == 0) {
                this.audioDung();
                dung = find("Canvas/Node/dung");
                window.GameGlobal.chonDung += 1;
            }
            else {
                this.audioSai();
                dung = find("Canvas/Node/sai");
                window.GameGlobal.chonSai += 1;
            }
            dung.setPosition(this._targetPos1);
            dung.getComponent(Animation).play();
            this.showKetQua();
        }else{
            if (window.GameGlobal.xepRandomCauTraLoi[1] != 0) {
                find("Canvas/Node/sai").setPosition(this._targetPos1);
                find("Canvas/Node/sai").getComponent(Animation).play();
            }
        }
    }

    clickNode3() {
        if (window.GameGlobal.chongAnNhieuLan[2]) {
            window.GameGlobal.chongAnNhieuLan[2] = false;

            var dung;
            if (window.GameGlobal.xepRandomCauTraLoi[2] == 0) {
                this.audioDung();
                dung = find("Canvas/Node/dung");
                window.GameGlobal.chonDung += 1;
            }
            else {
                this.audioSai();
                dung = find("Canvas/Node/sai");
                window.GameGlobal.chonSai += 1;
            }
            dung.setPosition(this._targetPos2)
            dung.getComponent(Animation).play();
            this.showKetQua();
        }else{
            if (window.GameGlobal.xepRandomCauTraLoi[2] != 0) {
                find("Canvas/Node/sai").setPosition(this._targetPos2);
                find("Canvas/Node/sai").getComponent(Animation).play();
            }
        }
    }

    clickNode4() {
        if (window.GameGlobal.chongAnNhieuLan[3]) {
            window.GameGlobal.chongAnNhieuLan[3] = false;

            var dung;
            if (window.GameGlobal.xepRandomCauTraLoi[3] == 0) {
                this.audioDung();
                dung = find("Canvas/Node/dung");
                window.GameGlobal.chonDung += 1;

            }
            else {
                this.audioSai();
                dung = find("Canvas/Node/sai");
                window.GameGlobal.chonSai += 1;

            }
            dung.setPosition(this._targetPos3)
            dung.getComponent(Animation).play();
            this.showKetQua();
        }else{
            if (window.GameGlobal.xepRandomCauTraLoi[3] != 0) {
                find("Canvas/Node/sai").setPosition(this._targetPos3);
                find("Canvas/Node/sai").getComponent(Animation).play();


            }
        }

    }
    clickAudio() {
        // console.log(4);
        this.playOneShot();


    }
    playOneShot() {
        var idAu = this.getIdAudio()
        this.clip = window.GameGlobal.audio[idAu];
       // console.log(this.clip);
        if(this.clip !== undefined) this.clip.play();

    }
    getIdAudio() {
        if (window.GameGlobal.audio != null) {
            var nameCaudung = window.GameGlobal.image[window.GameGlobal.cauTraLoi[0]]._name;
            for (let i = 0; i < window.GameGlobal.audio.length; i++) {
                if (window.GameGlobal.audio[i]._name === nameCaudung) return i;
            }
        }
    }

    audioDung() {
        this.cliptrue.play();

    }

    audioSai() {
        this.clipfall.play();

    }
    ClickHocTuMoiButton(){
        window.GameGlobal.TuMoi = true;
        this.ChuyenSangGDHocTuMoi();
       // this.HienThiCauHoiTN();
    }

    CauTNTiepTheo() {
        if (window.GameGlobal.cauTraLoi[0] + 1 < window.GameGlobal.image.length) window.GameGlobal.cauTraLoi[0] += 1;
        else window.GameGlobal.cauTraLoi[0] = 0;
        this.HienThiCauHoiTN();
    }

    HienThiCauHoiTN(){
        var _getNode = find("Canvas/HocTuMoi");
        _getNode.getChildByName("mango").getComponent(Sprite).spriteFrame = window.GameGlobal.image[window.GameGlobal.CauTN];
        _getNode.getChildByName("Node").getComponent(Label).string = window.GameGlobal.image[window.GameGlobal.CauTN]._name;

    }

    ChuyenSangGDHocTuMoi(){
        find("Canvas/Node").active =false;
        find("Canvas/hud").active =false;
        find("Canvas/HocTuMoi").active =true;

    }
    ChuyenSangGDTracNghiem(){
        find("Canvas/Node").active =true;
        find("Canvas/hud").active =true;
        find("Canvas/HocTuMoi").active =false;

    }
}


