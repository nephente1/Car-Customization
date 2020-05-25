export interface CarColorsTypes {
    name: string;
    hex: '#F62F2F' |'#DDD' | '#E7C55B' | '#424240' | '#00bcd4'
};


export const carModels = ['PRO RS3','UBER RS2', 'STANDARD','WK'];
export const engines = ['5.2L 532BHP', '4.2L 443BHP', '3.6L 374BHP', '2.0L 166BHP'];
export const gearBox = ['Manual', 'Automatic'];
export const carColors: Array<CarColorsTypes> = [
    {
        name: 'Rosso',
        hex: '#F62F2F',
    },
    {
        name: 'Silver',
        hex: '#DDD',
    },
    {
        name: 'Gold',
        hex: '#E7C55B',
    },
    {
        name: 'Black Pearl',
        hex: '#424240',
    },
    {
        name: 'Blue',
        hex: '#00bcd4',
    }
]