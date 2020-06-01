import * as React from 'react';
import {observer} from 'mobx-react-lite';
import{engines, CarElementsTypes} from '../../mockedDataArray';
import {OptionsButton, RowLabel, ButtonsRow} from '../CarApp.styles';
import {useAppStateContext} from 'AppState/AppState';

export const EngineButtons = observer(() => {
    const [element, setElementChecked] = React.useState('');
    const appState = useAppStateContext();

    const isAvailable = (settedModel: string, settedEngine: string) => {
        if (settedModel === 'WK' && settedEngine === '2.0L 166BHP'){
            return true;
        }
        if (settedModel === 'STANDARD' && settedEngine ==='3.6L 374BHP' ||
            settedModel === 'STANDARD' && settedEngine === '2.0L 166BHP') {
             return true;
        }
        if (settedModel === 'UBER RS2' && settedEngine ==='4.2L 443BHP' ||
            settedModel === 'UBER RS2' && settedEngine ==='3.6L 374BHP' ||
            settedModel === 'UBER RS2' && settedEngine === '2.0L 166BHP') {
            return true;
        }
        if (settedModel === 'PRO RS3' && settedEngine ==='5.2L 532BHP' ||
            settedModel === 'PRO RS3' && settedEngine ==='4.2L 443BHP' ||
            settedModel === 'PRO RS3' && settedEngine ==='3.6L 374BHP' ||
            settedModel === 'PRO RS3' && settedEngine === '2.0L 166BHP') {
            return true;
        }
        return false;

    }

    const clickCarEngineHandler = (el: CarElementsTypes): void => {
        setElementChecked(el.type);
        appState.engineState.setEngine(el.type);
        appState.engineState.setEnginePrice(el.price);
    }

    const isChecked = (type: string) => {
        return element === type && isAvailable(appState.modelState.settedModel, type) && appState.engineState.settedEngine !== '';
    }

    const renderEngines = () => {
        return engines.map(el =>
            <OptionsButton
                onClick={() => clickCarEngineHandler(el)}
                isChecked={isChecked(el.type)}
                isAvailable={isAvailable(appState.modelState.settedModel, el.type)}>
                {el.type}
            </OptionsButton>
        );
    }

    return (
        <>
            <RowLabel>engine</RowLabel>
            <ButtonsRow>{ renderEngines() }</ButtonsRow>
        </>
    );
});
