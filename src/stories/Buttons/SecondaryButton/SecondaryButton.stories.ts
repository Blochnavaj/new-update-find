import { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
    component: SecondaryButton,
    title: 'Buttons/SecondaryButton',
};

export default meta;

export const Primary: StoryObj<typeof SecondaryButton> = {
    args: {
    },
};
