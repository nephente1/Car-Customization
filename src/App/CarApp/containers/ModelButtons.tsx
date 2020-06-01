import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStateContext} from "AppState/AppState";
import {OptionsButton, RowLabel, ButtonsRow} from "../CarApp.styles";
import {carModels, CarElementsTypes} from "App/mockedDataArray";

export const ModelButtons = observer(() => {
    const [element, setElementChecked] = React.useState('');
    const appState = useAppStateContext();

    const clickCarModelHandler = (el: CarElementsTypes): void => {
        setElementChecked(el.type);
        appState.modelState.setModel(el.type);
        appState.modelState.setModelPrice(el.price);
        appState.engineState.setEngine('');
        appState.gearboxState.setGearbox('');
    }

    const renderModels = () => {
        return carModels.map( (el =>
            <OptionsButton key={el.price} onClick={() => clickCarModelHandler(el)} isChecked={element === el.type} isAvailable={true}>
                {el.type}
            </OptionsButton>)
        );
    }

    return (
        <>
            <RowLabel>model</RowLabel>
            <ButtonsRow>{ renderModels() }</ButtonsRow>
        </>
    );
});
