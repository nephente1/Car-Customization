export interface CarColorsTypes {
    name: string;
    hex: '#F62F2F' |'#DDD' | '#E7C55B' | '#424240' | '#00bcd4',
    price: number
};

export interface CarElementsTypes {
    type: string,
    price: number
}


export const carModels: Array<CarElementsTypes> = [
    {
        type: 'PRO RS3',
        price: 100,
    },
    {
        type: 'UBER RS2',
        price: 80,
    },
    {
        type: 'STANDARD',
        price: 60,
    },
    {
        type: 'WK',
        price: 40,
    },
];
export const engines: Array<CarElementsTypes> = [
    {
        type: '5.2L 532BHP',
        price: 100
    },
    {
        type: '4.2L 443BHP',
        price: 80
    },
    {
        type: '3.6L 374BHP',
        price: 60
    },
    {
        type: '2.0L 166BHP',
        price: 40
    }
];
export const gearBox: Array<CarElementsTypes> = [
    {
        type: 'manual',
        price: 10
    },
    {
        type: 'automatic',
        price: 20
    }
];

export const carColors: Array<CarColorsTypes> = [
    {
        name: 'Rosso',
        hex: '#F62F2F',
        price: 10
    },
    {
        name: 'Silver',
        hex: '#DDD',
        price: 20
    },
    {
        name: 'Gold',
        hex: '#E7C55B',
        price: 25
    },
    {
        name: 'Black Pearl',
        hex: '#424240',
        price: 20
    },
    {
        name: 'Blue',
        hex: '#00bcd4',
        price: 10
    }
]