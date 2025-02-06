import { Meta, StoryObj } from '@storybook/react';
import InfoNotification from './InfoNotification';

const meta: Meta<typeof InfoNotification> = {
    component: InfoNotification,
    title: 'Notifications/InfoNotification',
};

export default meta;

export const Default: StoryObj<typeof InfoNotification> = {
    args: {
        message: 'Unable to connect to the server. Please check your connection and try again.',
    },
};

