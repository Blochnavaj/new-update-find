import { Meta, StoryObj } from '@storybook/react';
import SearchableCheckboxFilter from './SearchableCheckboxFilter';

const meta: Meta<typeof SearchableCheckboxFilter> = {
    component: SearchableCheckboxFilter,
    title: 'Filters/SearchableCheckboxFilter',
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

export const Default: StoryObj<typeof SearchableCheckboxFilter> = {
    args: {
        options: defaultOptions, // Pass the defaultOptions array
    },
};
