import styled from '@emotion/styled';
import {CarIcon} from '../../assets/CarIcon';

interface ButtonPropsType {
    bgColor?: string;
    isChecked: any;
    isAvailable?: boolean | undefined;
};

export const OptionsButton = styled('div')<ButtonPropsType>`
    display: inline-block;
    cursor:  ${props => props.isAvailable ? 'pointer' : 'not-allowed'};
    pointer-events: ${props => props.isAvailable ? 'auto' : 'none'};
    opacity: ${props => props.isAvailable ? '1' : '0.3'};

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
    padding: 16px 24px;
    color: #fff;
`;

export const CarImg = styled('div')`
    background: #fff;
    padding: 0 20px;
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

export const  SettedData = styled('span')`
    font-weight: bold;
    color: black;
`;