import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    title: 'Buttons/IconButton',
};

export default meta;

export const Primary: StoryObj<typeof IconButton> = {
    args: {
    },
};
