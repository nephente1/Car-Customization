import {observable, action, computed} from 'mobx';

export class ColorState {
    @observable color: string;
    @observable colorName: string;
    @observable price: number;

    constructor () {
        this.color = '';
        this.colorName = '',
        this.price = 0;
    }

    @action setColor(col: string) {
        this.color = col;
    }

    @action setColorPrice(price: number) {
        this.price = price;
    }

    @action setColorName(colName: string) {
        this.colorName = colName;
    }

    @computed get settedColor() {
        return this.color;
    }

    @computed get settedColorName() {
        return this.colorName;
    }

    @computed get settedColorPrice() {
        return this.price;
    }

}