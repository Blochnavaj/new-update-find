import { Meta, StoryObj } from '@storybook/react';
import EditableInputField from './EditableInputField';

const meta: Meta<typeof EditableInputField> = {
    component: EditableInputField,
    title: 'Input Fields/EditableInputField',
};

export default meta;

export const Saved: StoryObj<typeof EditableInputField> = {
    args: {
        initialActive: 'saved',
        label: 'Ivan Ivanov',
        title: 'Name',
    },
};

export const Editable: StoryObj<typeof EditableInputField> = {
    args: {
        initialActive: 'editable',
        label: 'Ivan Ivanov',
        title: 'Name',
    },
};



