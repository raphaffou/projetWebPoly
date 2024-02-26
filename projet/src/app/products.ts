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
        description: 'This is a high-quality hand cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/39453783.png'
    },
    {
        id: 2,
        name: 'Lip Balm',
        price: 5,
        description: 'This is a lip balm that keeps your lips soft and moisturized. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/40452968.png'
    },
    {
        id: 3,
        name: 'Body Lotion',
        price: 15,
        description: 'This is a body lotion that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/68539721.png'
    },
    {
        id: 4,
        name: 'Shampoo',
        price: 20,
        description: 'This is a shampoo that cleans and nourishes your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/98377477.png'
    },
    {
        id: 5,
        name: 'Conditioner',
        price: 20,
        description: 'This is a conditioner that moisturizes and detangles your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/26578049.png'
    },
    {
        id: 6,
        name: 'Soap',
        price: 5,
        description: 'This is a soap that cleans and moisturizes your skin. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/72349822.png'
    }
];