import { Meta, StoryObj } from '@storybook/react';
import CircularButton from './CircularButton';
import left from './../../../assets/purpleLeft.png'
import right from './../../../assets/rightIcon.png'
import cross from './../../../assets/crossIcon.png'

const meta: Meta<typeof CircularButton> = {
    component: CircularButton,
    title: 'Buttons/CircularButton',
};

export default meta;

export const Left: StoryObj<typeof CircularButton> = {
    args: {
        imgpath: left,
        active: 'left',
    },
};

export const Right: StoryObj<typeof CircularButton> = {
    args: {
        imgpath: right,
        active: 'right',
    },
};

export const Cross: StoryObj<typeof CircularButton> = {
    args: {
        imgpath: cross,
        active: 'cross',
    },
};