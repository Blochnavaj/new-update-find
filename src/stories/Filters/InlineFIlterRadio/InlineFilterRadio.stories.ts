import { Meta, StoryObj } from '@storybook/react';
import InlineFilterRadio from './InlineFilterRadio';

const meta: Meta<typeof InlineFilterRadio> = {
    component: InlineFilterRadio,
    title: 'Filters/InlineFilterRadio',
    argTypes: {
        label: { description: 'Label for the filter group', control: 'text' },
        options: {
            description: 'Array of filter options to display as radio buttons.',
        },
    },
};

export default meta;

const defaultOptions = ['BMW', 'Audi'];

export const Default: StoryObj<typeof InlineFilterRadio> = {
    args: {
        label: 'Vehicle Type',
        options: defaultOptions,
    },
};
