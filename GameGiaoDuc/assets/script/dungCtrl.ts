import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dungCtr')
export class dungCtr extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    DungRoi(param){
        console.log(1);
        this.node.parent.parent.getComponent("gameCtrl").CauTiepTheo();
    }
}


