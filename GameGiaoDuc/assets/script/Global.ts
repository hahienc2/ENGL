import { _decorator, Component, loader, Node, Texture2D, AudioClip,SpriteFrame, random} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Global')
export class Global extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}
declare global {
    interface Window { GameGlobal: any; }
}

window.GameGlobal = window.GameGlobal || {
    image : null,
    audio : null,
    loadData (callback){
        loader.loadResDir('img', SpriteFrame, (err, assets, paths) => {
            window.GameGlobal.image = assets;
            console.log("completeimg");
            
            loader.loadResDir('audio', AudioClip, (err, assets, paths) => {
                window.GameGlobal.audio = assets;
                callback(true);
                console.log("completeaudio");
            });
            

        });


    },
    loadDataHocBai (callback){
        loader.loadResDir('hocbai/img', SpriteFrame, (err, assets, paths) => {
            window.GameGlobal.image = assets;
            console.log("completeimg");
            
            loader.loadResDir('hocbai/audio', AudioClip, (err, assets, paths) => {
                window.GameGlobal.audio = assets;
                callback(true);
                console.log("completeaudio");
            });
            

        });


    },
    cauTraLoi : [0,1,2,3],
    chonCauSai(){
        var array= [];
        for (let i = 0; i < window.GameGlobal.image.length; i++) {
            if(this.cauTraLoi[0] != i) array.push(i)
        }
        var ran1 = Math.floor(Math.random() *  array.length)
        var chonCauSai1 = array[ran1];
        array.splice(ran1, 1);

        var ran2 = Math.floor(Math.random() *  array.length)
        var chonCauSai2 = array[ran2];
        array.splice(ran2, 1);

        var ran3 = Math.floor(Math.random() *  array.length)
        var chonCauSai3 = array[ran3];
        array.splice(ran3, 1);

        this.cauTraLoi[1] = chonCauSai1;
        this.cauTraLoi[2] = chonCauSai2;
        this.cauTraLoi[3] = chonCauSai3;
        console.log("danh sach cau tra loi  " + this.cauTraLoi);
        
        return this.cauTraLoi;
    },
    iXepRandomCauTraLoi(){
        //window.GameGlobal.iXepRandomCauTraLoi()
        let ran1 = [0,1,2,3];
        var ranx = [];

        for (let i = 0; i < 4; i++) {
            var ranox  = Math.floor(Math.random() *  ran1.length);
            ranx.push(ran1[ranox]);
            ran1.splice(ranox, 1);

        }
        console.log("sắp xếp "+ranx);
        this.xepRandomCauTraLoi = ranx;
        return ranx;
        
    },
    chonDung :0,
    chonSai:0,
    chongAnNhieuLan: [true,true,true,true],
    TuMoi : false,
    CauTN : 0

};


