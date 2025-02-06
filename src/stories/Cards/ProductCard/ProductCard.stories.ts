import { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import car from './../../../assets/carImage.avif'

const meta: Meta<typeof ProductCard> = {
    component: ProductCard,
    title: 'Cards/ProductCard',
};

export default meta;

export const Green: StoryObj<typeof ProductCard> = {
    args: {
        active: 'green',
        imgpath: car,
        price: '$18900',
        discount: '-10%',
        model: '2021 - BMW 3 Series',
        kilometers: '8917 km'
    },
};

export const Grey: StoryObj<typeof ProductCard> = {
    args: {
        active: 'grey',
        imgpath: car,
        price: '$18900',
        discount: '-10%',
        model: '2021 - BMW 3 Series',
        kilometers: '8917 km'
    },
};

