import { Meta, StoryObj } from '@storybook/react';
import InlineFilterCheckboxes from './InlineFilterCheckboxes';

const meta: Meta<typeof InlineFilterCheckboxes> = {
    component: InlineFilterCheckboxes,
    title: 'Filters/InlineFilterCheckboxes',
    argTypes: {
        label: {
            description: 'Label for the filter group.',
        },
        options: {
            description: 'Array of filter options to display in the checklist.'
        },
    },
};

export default meta;

const defaultOptions = ['BMW', 'Audi'];

export const Default: StoryObj<typeof InlineFilterCheckboxes> = {
    args: {
        label: 'Vehicle Type',
        options: defaultOptions,
    },
};
