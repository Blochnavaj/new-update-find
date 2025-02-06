import { Meta, StoryObj } from '@storybook/react';
import PasswordInputField from './PasswordInputField';

const meta: Meta<typeof PasswordInputField> = {
    component: PasswordInputField,
    title: 'Input Fields/PasswordInputField',
};

export default meta;

export const Default: StoryObj<typeof PasswordInputField> = {
    args: {
    },
};

