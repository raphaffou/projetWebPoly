export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string; // oil, cream, face, hand --> categories ?
}

export const products = [
    {
        id: 1,
        name: 'Hand Cream',
        price: 10,
        description: 'This is a high-quality hand cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/39453783.png',
        category: 'hand'
    },
    {
        id: 2,
        name: 'Lip Balm',
        price: 5,
        description: 'This is a lip balm that keeps your lips soft and moisturized. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/40452968.png',
        category: 'face'
    },
    {
        id: 3,
        name: 'Body Lotion',
        price: 15,
        description: 'This is a body lotion that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/68539721.png',
        category: 'oil'
    },
    {
        id: 4,
        name: 'Shampoo',
        price: 20,
        description: 'This is a shampoo that cleans and nourishes your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/98377477.png',
        category: 'oil'
    },
    {
        id: 5,
        name: 'Conditioner',
        price: 20,
        description: 'This is a conditioner that moisturizes and detangles your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/26578049.png',
        category: 'oil'
    },
    {
        id: 6,
        name: 'Soap',
        price: 5,
        description: 'This is a soap that cleans and moisturizes your skin. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/72349822.png',
        category: 'oil'
    }
];