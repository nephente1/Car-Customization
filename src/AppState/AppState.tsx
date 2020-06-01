import * as React from 'react';
import { ColorState } from './ColorState';
import { ModelState } from './ModelState';
import { EngineState } from './EngineState';
import { GearboxState } from './GearboxState';

export class AppState {
    readonly colorState: ColorState;
    readonly modelState: ModelState;
    readonly engineState: EngineState;
    readonly gearboxState: GearboxState;

    constructor(){
        this.colorState = new ColorState();
        this.modelState = new ModelState();
        this.engineState = new EngineState();
        this.gearboxState = new GearboxState();
    }

    static createForContext(): AppState {
        return new AppState();
    }
}

const AppContext = React.createContext(AppState.createForContext());
export const Provider = AppContext.Provider;

export const useAppStateContext = (): AppState => {
    return React.useContext(AppContext);
};