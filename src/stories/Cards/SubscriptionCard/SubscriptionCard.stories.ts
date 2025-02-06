import { Meta, StoryObj } from '@storybook/react';
import SubscriptionCard from './SubscriptionCard';

const meta: Meta<typeof SubscriptionCard> = {
    component: SubscriptionCard,
    title: 'Cards/SubscriptionCard',
};

export default meta;

export const Free: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'Free',
        subscription: 'Free Plan',
    },
};

export const Advanced: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'Advanced',
        subscription: 'Advanced',
        expiry: '07/07/2025',
    },
};

export const Premium: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'Premium',
        subscription: 'Premium',
        expiry: '07/07/2025',
    },
};

