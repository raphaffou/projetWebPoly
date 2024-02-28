import { categories } from './categories';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;  // GOATED : https://app.leonardo.ai/ai-generations
    category: categories[];
}

export const products = [
    {
        id: 1,
        name: 'Hand Cream',
        price: 35,
        description: 'This is a high-quality hand cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/hand_cream.jpg',
        category: [categories.Hand, categories.Cream]
    },
    {
        id: 2,
        name: 'Lip Balm',
        price: 4.39,
        description: 'This is a lip balm that keeps your lips soft and moisturized. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/lip_balm.jpg',
        category: [categories.Face, categories.Lips, categories.Cream]
    },
    {
        id: 3,
        name: 'Body Lotion',
        price: 8.79,
        description: 'This is a body lotion that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/body_lotion.jpg',
        category: [categories.Body, categories.Oil]
    },
    {
        id: 4,
        name: 'Shampoo',
        price: 22.5,
        description: 'This is a shampoo that cleans and nourishes your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/shampoo.jpg',
        category: [categories.Hairs, categories.Shampoo]
    },
    {
        id: 5,
        name: 'Conditioner',
        price: 17.99,
        description: 'This is a conditioner that moisturizes and detangles your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/conditioner.jpg',
        category: [categories.Hairs, categories.Conditioner]
    },
    {
        id: 6,
        name: 'Soap',
        price: 15,
        description: 'This is a soap that cleans and moisturizes your skin. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/soap.jpg',
        category: [categories.Body, categories.Soap]
    },
    {
        id: 7,
        name: 'Face Cream',
        price: 44.99,
        description: 'This is a high-quality face cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/face_cream.jpg',
        category: [categories.Face, categories.Cream]
    }
];