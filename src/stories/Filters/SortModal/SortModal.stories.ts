import { Meta, StoryObj } from '@storybook/react';
import SortModal from './SortModal';

const meta: Meta<typeof SortModal> = {
    component: SortModal,
    title: 'Filters/SortModal',
    argTypes: {
        options: {
            description: 'Array of filter options to display in the checklist.',
        },
        sorting: {
            description: 'Array of sorting options',
        },
    },
};

export default meta;

export const Default: StoryObj<typeof SortModal> = {
    args: {
    },
};
