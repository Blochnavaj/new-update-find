import { Meta, StoryObj } from '@storybook/react';
import BackButton from './BackButton';

const meta: Meta<typeof BackButton> = {
    component: BackButton,
    title: 'Buttons/BackButton',
};

export default meta;

export const WithText: StoryObj<typeof BackButton> = {
    args: {
        label: '(Previous Page)',
        active: 'withText',
    },
};

export const WithoutText: StoryObj<typeof BackButton> = {
    args: {
        active: 'withText',
    },
};