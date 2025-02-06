import { Meta, StoryObj } from '@storybook/react';
import SearchableRadioFilter from './SearchableRadioFilter';

const meta: Meta<typeof SearchableRadioFilter> = {
    component: SearchableRadioFilter,
    title: 'Filters/SearchableRadioFilter',
    argTypes: {
        options: {
            description: 'Array of filter options to display in the checklist.',
        },
    },
};

export default meta;

const defaultOptions = [
    'BWM',
    'Audi',
    'Toyota',
    'Nissan',
    'Tesla',
    'Lada',
    'Ford',
    'Mercedes',
    'Volkswagen',
];

export const Default: StoryObj<typeof SearchableRadioFilter> = {
    args: {
        options: defaultOptions, // Pass the defaultOptions array
    },
};
