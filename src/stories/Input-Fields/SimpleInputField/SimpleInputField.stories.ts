import { Meta, StoryObj } from '@storybook/react';
import SimpleInputField from './SimpleInputField';
import emailIcon from './../../../assets/emailIcon.png'
import invalidemailIcon from './../../../assets/invalidemailIcon.png'

const meta: Meta<typeof SimpleInputField> = {
    component: SimpleInputField,
    title: 'Input Fields/SimpleInputField',
};

export default meta;

export const Default: StoryObj<typeof SimpleInputField> = {
    args: {
        active: 'default',
        imgpath: emailIcon
    },
};

export const Invalid: StoryObj<typeof SimpleInputField> = {
    args: {
        active: 'invalid',
        imgpath: invalidemailIcon
    },
};



