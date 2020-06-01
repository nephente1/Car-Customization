import {computed} from 'mobx';
import { ModelState } from './ModelState';
import { EngineState } from './EngineState';
import { GearboxState } from './GearboxState';
import { ColorState } from './ColorState';

export class PriceState {

    constructor(readonly modelState: ModelState, readonly engineState: EngineState, readonly gearboxState: GearboxState, readonly colorState: ColorState) {}

    @computed get finalPrice() {
        const modelPrice = this.modelState.settedModelPrice;
        const enginePrice = this.engineState.settedEnginePrice;
        const gearboxPrice = this.gearboxState.settedGearboxPrice;
        const colorPrice = this.colorState.settedColorPrice;
        const engine = this.engineState.settedEngine;
        const gearbox = this.gearboxState.settedGearbox;
        let out;
        if(modelPrice !== 0 && enginePrice !== 0 && engine !== '' && gearboxPrice !== 0 && gearbox !== '' && colorPrice !== 0) {
            out = modelPrice + enginePrice + gearboxPrice + colorPrice;
        }

        return out;
    }

}