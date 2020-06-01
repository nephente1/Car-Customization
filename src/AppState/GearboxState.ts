import {observable, action, computed} from 'mobx';

export class GearboxState {
    @observable gearbox: string;
    @observable price: number;

    constructor () {
        this.gearbox = '';
        this.price = 0;
    }

    @action setGearbox(el: string) {
        this.gearbox = el;
    }

    @action setGearboxPrice(price: number) {
        this.price = price;
    }

    @computed get settedGearbox() {
        return this.gearbox;
    }

    @computed get settedGearboxPrice() {
        return this.price;
    }

}