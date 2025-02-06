import { Meta, StoryObj } from '@storybook/react';
import InfoCard from './InfoCard';
import phone from './../../../assets/phoneIcon.png';
import email from './../../../assets/emailIcon.png';
import notifications from './../../../assets/purpleNotifications.png';
import support from './../../../assets/questionIcon.png';

const meta: Meta<typeof InfoCard> = {
    component: InfoCard,
    title: 'Cards/InfoCard',
};

export default meta;

export const Phone: StoryObj<typeof InfoCard> = {
    args: {
        active: 'Phone',
        imgpath: phone,
        clickable: 'no',
        header: 'Phone',
        credentials: '123456789'
    },
};

export const Email: StoryObj<typeof InfoCard> = {
    args: {
        active: 'Email',
        imgpath: email,
        clickable: 'no',
        header: 'Email',
        credentials: '123456789'
    },
};

export const Notifications: StoryObj<typeof InfoCard> = {
    args: {
        active: 'Notifications',
        imgpath: notifications,
        clickable: 'yes',
        header: 'Notifications',
    },
};

export const Support: StoryObj<typeof InfoCard> = {
    args: {
        active: 'support',
        imgpath: support,
        clickable: 'yes',
        header: 'Help & Support',
    },
};

