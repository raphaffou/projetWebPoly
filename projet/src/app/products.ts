import { categories } from './categories';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;  // GOATED : https://app.leonardo.ai/ai-generations
    categories: categories[];
}

export const products = [
    {
        id: 1293817,
        name: 'Hand Cream',
        price: 35,
        description: 'This is a high-quality hand cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/hand_cream.jpg',
        categories: [categories.Hand, categories.Cream]
    },
    {
        id: 20940762,
        name: 'Lip Balm',
        price: 4.39,
        description: 'This is a lip balm that keeps your lips soft and moisturized. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/lip_balm.jpg',
        categories: [categories.Face, categories.Lips, categories.Cream]
    },
    {
        id: 90729312,
        name: 'Body Lotion',
        price: 8.79,
        description: 'This is a body lotion that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/body_lotion.jpg',
        categories: [categories.Body, categories.Oil]
    },
    {
        id: 87985579,
        name: 'Shampoo',
        price: 22.5,
        description: 'This is a shampoo that cleans and nourishes your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/shampoo.jpg',
        categories: [categories.Hairs, categories.Shampoo]
    },
    {
        id: 68249269,
        name: 'Conditioner',
        price: 17.99,
        description: 'This is a conditioner that moisturizes and detangles your hair. It is made with natural ingredients and is suitable for all hair types. Use it daily for best results.',
        image: 'assets/products/conditioner.jpg',
        categories: [categories.Hairs, categories.Conditioner]
    },
    {
        id: 3982974,
        name: 'Soap',
        price: 15,
        description: 'This is a soap that cleans and moisturizes your skin. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/soap.jpg',
        categories: [categories.Body, categories.Soap]
    },
    {
        id: 298937,
        name: 'Face Cream',
        price: 44.99,
        description: 'This is a high-quality face cream that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/face_cream.jpg',
        categories: [categories.Face, categories.Cream]
    },
    {
        id: 128682357,
        name: 'Sunscreen',
        price: 29.99,
        description: 'This is a sunscreen that protects your skin from harmful UV rays. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/sunscreen.jpg',
        categories: [categories.Face, categories.Body]
    },
    {
        id: 457824631,
        name: 'Moisturizer',
        price: 39.99,
        description: 'This is a high-quality moisturizer that keeps your skin soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/moisturizer.jpg',
        categories: [categories.Face, categories.Cream]
    },
    {
        id: 37298374,
        name: 'Exfoliator',
        price: 19.99,
        description: 'This is an exfoliator that removes dead skin cells and leaves your skin feeling soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it weekly for best results.',
        image: 'assets/products/exfoliator.jpg',
        categories: [categories.Face, categories.Body]
    },
    {
        id: 8723479364,
        name: 'Serum',
        price: 49.99,
        description: 'This is a high-quality serum that moisturizes your skin and keeps it soft and smooth. It is made with natural ingredients and is suitable for all skin types. Use it daily for best results.',
        image: 'assets/products/serum.jpg',
        categories: [categories.Face, categories.Oil]
    }

];