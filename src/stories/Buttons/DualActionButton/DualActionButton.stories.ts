import { Meta, StoryObj } from '@storybook/react';
import DualActionButton from './DualActionButton';

const meta: Meta<typeof DualActionButton> = {
    component: DualActionButton,
    title: 'Buttons/DualActionButton',
};

export default meta;

export const SeeListings: StoryObj<typeof DualActionButton> = {
    args: {
        label: 'See Listings',
        active: 'seeListings',
    },
};

export const SaveFilters: StoryObj<typeof DualActionButton> = {
    args: {
        label: 'Save Filters',
        active: 'saveFilters',
    },
};

export const Sort: StoryObj<typeof DualActionButton> = {
    args: {
        label: 'Sort',
        active: 'sort',
    },
};
