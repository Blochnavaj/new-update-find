import { Meta, StoryObj } from '@storybook/react';
import RangeFilter from './RangeFilter';

const meta: Meta<typeof RangeFilter> = {
    component: RangeFilter,
    title: 'Filters/RangeFilter',
    argTypes: {
        min: { control: { type: 'number' }, defaultValue: 0 },
        max: { control: { type: 'number' }, defaultValue: 50000 },
        step: { control: { type: 'number' }, defaultValue: 100 },
        currency: { control: { type: 'text' }, defaultValue: '$' },
    },
};

export default meta;

export const Default: StoryObj<typeof RangeFilter> = {
    args: {
        min: 0,
        max: 50000,
        step: 100,
        currency: '$',
    },
};
