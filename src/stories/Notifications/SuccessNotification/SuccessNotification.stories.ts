import { Meta, StoryObj } from '@storybook/react';
import SuccessNotification from './SuccessNotification';

const meta: Meta<typeof SuccessNotification> = {
    component: SuccessNotification,
    title: 'Notifications/SuccessNotification',
};

export default meta;

export const Default: StoryObj<typeof SuccessNotification> = {
    args: {
        message: 'Update completed successfully!',
    },
};

