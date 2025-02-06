import { Meta, StoryObj } from '@storybook/react';
import BasicButton from './BasicButton';

const meta: Meta<typeof BasicButton> = {
    component: BasicButton,
    title: 'Buttons/BasicButton',
};

export default meta;

export const Enabled: StoryObj<typeof BasicButton> = {
    args: {
        label: 'Sign in',
        active: 'enabled',
    },
};

export const Disabled: StoryObj<typeof BasicButton> = {
    args: {
        label: 'Apply',
        active: 'disabled',
    },
};
