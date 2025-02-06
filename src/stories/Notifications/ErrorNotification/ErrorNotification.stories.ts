import { Meta, StoryObj } from '@storybook/react';
import ErrorNotification from './ErrorNotification';

const meta: Meta<typeof ErrorNotification> = {
    component: ErrorNotification,
    title: 'Notifications/ErrorNotification',
};

export default meta;

export const Default: StoryObj<typeof ErrorNotification> = {
    args: {
        message: 'The server will be under maintenance from January 1, 2025, to February 1, 2025. Services may be unavailable during this time.',
    },
};

