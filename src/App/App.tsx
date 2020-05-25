import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {AppBody} from './App.styles';
import{carModels, engines, gearBox, carColors} from './mockedDataArray';
import styled from '@emotion/styled';
import {CarIcon} from './assets/CarIcon';

interface ButtonPropsType {
    bgColor?: string;
    isChecked: any;
};

export const OptionsButton = styled('div')<ButtonPropsType>`
    display: inline-block;
    cursor: pointer;
    color: ${props => props.isChecked ? '#cbcbcb' : '#343434'};
    background: ${props => props.isChecked ? '#343434' : '#cbcbcb'};
    font-size: 12px;
    padding: 8px 16px;
    border: none;
    margin-right: 10px;
    &:last-of-type {
        margin-right: 0;
    }
`;

export const ColorButton = styled('div')<ButtonPropsType>`
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    background: ${props => props.bgColor};
    width: 60px;
    height: 60px;
    border: ${props => props.isChecked ? '1px solid black' : 'none'};
    margin: 0 10px 0 0;
    text-align: center;
`;

export const ConfigContainer = styled('div')`
    display: flex;
    justify-content: space-around;
    padding: 60px 100px;
    height: auto;
    flex: 1 1 100%;
`;

export const ButtonsRow = styled('div')`
    display: flex;
    margin: 0 0 10px 0;
`;

export const RowLabel = styled('p')`
    color: #343434;
    text-transform: uppercase;
    margin: 0 0 4px 0;
`;

export const ResultContainer = styled('div')`
    background: #9e9e9e;
    padding: 16px;
`;

export const CarImg = styled('div')`
    background: #fff;
    padding: 0 12px;
`;

export const Column = styled('div')`

`;

interface CarIconPropsType {
    bgColor: string;
}

export const CarIconWrapper = styled(CarIcon)<CarIconPropsType>`
    height: 140px;
    width: 140px;
    fill: ${props => props.bgColor ? props.bgColor : '#fff' };
`;

export const App = observer(() => {
    const [element, setElementChecked] = React.useState('');
    const [color, setColor] = React.useState('');

    const renderModels = () => {
        return carModels.map(el => <OptionsButton onClick={() => setElementChecked(el)} isChecked={element === el}>{el}</OptionsButton>);
    }
    const renderEngines = () => {
        return engines.map(el => <OptionsButton onClick={() => setElementChecked(el)} isChecked={element === el}>{el}</OptionsButton>);
    }
    const renderGearbox = () => {
        return gearBox.map(el => <OptionsButton onClick={() => setElementChecked(el)} isChecked={element === el}>{el}</OptionsButton>);
    }

    const renderColorButtons = () => {
        return carColors.map(el =>
            <ColorButton onClick={() => {setElementChecked(el.name), setColor(el.hex) }} isChecked={element === el.name} bgColor={el.hex}>
                {el.name}
            </ColorButton>

        )};
console.log('element', element)
    return (
        <AppBody>
            <ConfigContainer>
                <Column>
                    <RowLabel>model</RowLabel>
                    <ButtonsRow>{ renderModels() }</ButtonsRow>
                    <RowLabel>engine</RowLabel>
                    <ButtonsRow>{ renderEngines() }</ButtonsRow>
                    <RowLabel>gearbox</RowLabel>
                    <ButtonsRow>{ renderGearbox() }</ButtonsRow>
                    <RowLabel>color</RowLabel>
                    <ButtonsRow>{ renderColorButtons() }</ButtonsRow>
                </Column>
                <Column>
                    <ResultContainer>
                        <CarImg>
                            <CarIconWrapper bgColor={color} />
                        </CarImg>

                    </ResultContainer>
                </Column>
            </ConfigContainer>

        </AppBody>
    );
});