export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const products = [
    {
        id: 1,
        name: 'Hand Cream',
        price: 10,
        description: 'This is a hand cream',
        image: 'assets/products/39453783.png'
    },
    {
        id: 2,
        name: 'Lip Balm',
        price: 5,
        description: 'This is a lip balm',
        image: 'assets/products/40452968.png'
    },
    {
        id: 3,
        name: 'Body Lotion',
        price: 15,
        description: 'This is a body lotion',
        image: 'assets/products/68539721.png'
    },
    {
        id: 4,
        name: 'Shampoo',
        price: 20,
        description: 'This is a shampoo',
        image: 'assets/products/98377477.png'
    },
    {
        id: 5,
        name: 'Conditioner',
        price: 20,
        description: 'This is a conditioner',
        image: 'assets/products/26578049.png'
    },
    {
        id: 6,
        name: 'Soap',
        price: 5,
        description: 'This is a soap',
        image: 'assets/products/72349822.png'
    }
];