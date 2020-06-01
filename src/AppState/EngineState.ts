import {observable, action, computed} from 'mobx';

export class EngineState {
    @observable engine: string;
    @observable price: number;

    constructor () {
        this.engine = '';
        this.price = 0;
    }

    @action setEngine(el: string) {
        this.engine = el;
    }

    @action setEnginePrice(price: number) {
        this.price = price;
    }

    @computed get settedEngine() {
        return this.engine;
    }

    @computed get settedEnginePrice() {
        return this.price;
    }

}