import {observable, action, computed} from 'mobx';

export class ModelState {
    @observable model: string;
    @observable price: number;

    constructor () {
        this.model = '';
        this.price = 0;
    }

    @action setModel(el: string) {
        this.model = el;
    }

    @action setModelPrice(price: number) {
        this.price = price;
    }

    @computed get settedModel() {
        return this.model;
    }

    @computed get settedModelPrice() {
        return this.price;
    }
}