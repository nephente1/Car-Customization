import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useAppStateContext} from 'AppState/AppState';
import{carColors, CarColorsTypes} from '../../mockedDataArray';
import {ColorButton, RowLabel, ButtonsRow} from '../CarApp.styles';

export const ColorButtons = observer(() => {
    const [element, setElementChecked] = React.useState('');
    const appState = useAppStateContext();

    const clickColorHandler = (el: CarColorsTypes): void => {
        setElementChecked(el.name);
        appState.colorState.setColor(el.hex)
        appState.colorState.setColorName(el.name);
        appState.colorState.setColorPrice(el.price);
    }

    const renderColorButtons = () => {
        return carColors.map(el =>
            <ColorButton onClick={() => clickColorHandler(el)} isChecked={element === el.name} bgColor={el.hex}>
                {el.name}
            </ColorButton>
        )};

    return (
        <>
            <RowLabel>color</RowLabel>
            <ButtonsRow>{ renderColorButtons() }</ButtonsRow>
        </>
    );
});