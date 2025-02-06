import { Meta, StoryObj } from '@storybook/react';
import SearchInputField from './SearchInputField';

const meta: Meta<typeof SearchInputField> = {
    component: SearchInputField,
    title: 'Input Fields/SearchInputField',
};

export default meta;

export const Default: StoryObj<typeof SearchInputField> = {
    args: {
        active: 'default',
        placeholder: 'What do you want to buy?'
    },
};

export const Invalid: StoryObj<typeof SearchInputField> = {
    args: {
        active: 'invalid',

    },
};



