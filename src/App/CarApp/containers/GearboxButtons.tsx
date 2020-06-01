import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStateContext} from 'AppState/AppState';
import{gearBox, CarElementsTypes} from '../../mockedDataArray';
import {OptionsButton, RowLabel, ButtonsRow} from '../CarApp.styles';

export const GearboxButtons = observer(() => {
    const [element, setElementChecked] = React.useState('');
    const appState = useAppStateContext();

    const isAvailable = (settedModel: string, settedGearbox: string) => {
        if (settedModel === 'WK' && settedGearbox === 'manual'){
            return true;
        }
        if (settedModel === 'STANDARD' && settedGearbox === 'manual') {
             return true;
        }
        if (settedModel === 'UBER RS2' && settedGearbox === 'manual' ||
            settedModel === 'UBER RS2' && settedGearbox === 'automatic') {
            return true;
        }
        if (settedModel === 'PRO RS3' && settedGearbox === 'automatic') {
            return true;
        }
        return false;

    }

    const clickCarGearboxHandler = (el: CarElementsTypes): void => {
        setElementChecked(el.type);
        appState.gearboxState.setGearbox(el.type);
        appState.gearboxState.setGearboxPrice(el.price);
    }

    const isChecked = (type: string) => {
        return element === type && isAvailable(appState.modelState.settedModel, type) && appState.gearboxState.settedGearbox !== '';
    }

    const renderGearbox = () => {
        return gearBox.map(el =>
            <OptionsButton onClick={() => clickCarGearboxHandler(el)} isChecked={isChecked(el.type)} isAvailable={isAvailable(appState.modelState.settedModel, el.type)}>
                {el.type}
            </OptionsButton>
        );
    }

    return (
        <>
            <RowLabel>gearbox</RowLabel>
            <ButtonsRow>{ renderGearbox() }</ButtonsRow>
        </>

    );
});
