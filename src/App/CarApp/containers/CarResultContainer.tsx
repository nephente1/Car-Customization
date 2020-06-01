import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStateContext} from 'AppState/AppState';
import {PriceState} from 'AppState/PriceState';
import {CarIconWrapper, ResultContainer, CarImg, SettedData} from '../CarApp.styles';

export const CarResultContainer = observer(() => {
    const appState = useAppStateContext();
    const [priceState] = React.useState( () => new PriceState(appState.modelState, appState.engineState, appState.gearboxState, appState.colorState) );

    return (
        <ResultContainer>
            <CarImg>
                <CarIconWrapper bgColor={appState.colorState.settedColor} />
            </CarImg>
            <p>Model: <SettedData>{appState.modelState.settedModel}</SettedData></p>
            <p>Engine: <SettedData>{appState.engineState.settedEngine}</SettedData></p>
            <p>Gearbox: <SettedData>{appState.gearboxState.settedGearbox}</SettedData></p>
            <p>Color: <SettedData>{appState.colorState.settedColorName}</SettedData></p>
            <p>Price: <SettedData>${priceState.finalPrice}</SettedData></p>
        </ResultContainer>
    );
});