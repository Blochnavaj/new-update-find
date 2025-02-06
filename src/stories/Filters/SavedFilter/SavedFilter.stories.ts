import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SavedFilter from './SavedFilter';

const meta: Meta<typeof SavedFilter> = {
    component: SavedFilter,
    title: 'Filters/SavedFilter',
    argTypes: {
        filters: {
            description: 'Array of saved filter data to display in the accordion.',
            control: { type: 'object' },
        },
    },
};

export default meta;

const [filters, setFilters] = useState([
    {
        name: 'Saved search 1',
        options: ['BMW', 'Audi', 'Toyota'],
        details: [
            { label: 'Make', value: 'BMW, Audi, Toyota' },
            { label: 'Transmission', value: 'Automatic' },
        ],
        date: '2',
    },
    {
        name: 'Saved search 2',
        options: ['BMW', 'Ford'],
        details: [
            { label: 'Make', value: 'BMW, Ford' },
            { label: 'Transmission', value: 'Manual' },
        ],
        date: '5',
    },
]);

export const Default: StoryObj<typeof SavedFilter> = {
    args: {
        filters: filters,
        onFiltersUpdate: setFilters,
    },
};
