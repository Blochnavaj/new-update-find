import { Meta, StoryObj } from '@storybook/react';
import InfoToggle from './InfoToggle';

const meta: Meta<typeof InfoToggle> = {
    component: InfoToggle,
    title: 'Toggles/InfoToggle',
};

export default meta;

export const Default: StoryObj<typeof InfoToggle> = {
    args: {
        plans: [
            {
                title: 'Price',
                price: '10',
                benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
                discount: '10% off',
            },
            {
                title: 'Price by Year Range(2016 - 2018)',
                price: '20',
                benefits: ['Benefit A', 'Benefit B', 'Benefit C'],
            },
        ],
    },
};
