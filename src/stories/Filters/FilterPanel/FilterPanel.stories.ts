import { Meta, StoryObj } from '@storybook/react';
import FilterPanel from './FilterPanel';

const meta: Meta<typeof FilterPanel> = {
    component: FilterPanel,
    title: 'Filters/FilterPanel',
    argTypes: {
        filters: {
            description: 'Array of saved filter data to display in the accordion.',
            control: { type: 'object' },
        },
    },
};

export default meta;

const filtersData = [
    {
        name: 'Saved search 1',
        options: ['BWM', 'Audi', 'Toyota', 'Nissan', 'Tesla', 'Lada'],
        details: [
            { label: 'Make', value: 'BWM, Audi, Toyota, Nissan, Tesla, Lada' },
            { label: 'Transmission', value: 'Automatic' },
            { label: 'Color', value: 'Blue' },
        ],
        date: '2',
    },
    {
        name: 'Saved search 2',
        options: ['BMW', 'Ford', 'Mercedes', 'Volkswagen'],
        details: [
            { label: 'Make', value: 'BMW, Ford, Mercedes, Volkswagen' },
            { label: 'Transmission', value: 'Manual' },
            { label: 'Color', value: 'Black' },
        ],
        date: '5',
    },
];

export const Default: StoryObj<typeof FilterPanel> = {
    args: {
        filters: filtersData,
    },
};
