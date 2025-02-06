import { Meta, StoryObj } from '@storybook/react';
import SubscriptionToggle from './SubscriptionToggle';

const meta: Meta<typeof SubscriptionToggle> = {
    component: SubscriptionToggle,
    title: 'Toggles/SubscriptionToggle',
};

export default meta;

export const Default: StoryObj<typeof SubscriptionToggle> = {
    args: {
        plans: [
            {
                title: 'Advanced',
                price: '14.99',
                benefits: [
                    'Up to 10 locations',
                    'Up to 5 notifications',
                    'Third benefit of this plan',
                ],
                isActive: true,
            },
            {
                title: 'Premium',
                price: '29.99',
                benefits: [
                    'Up to 20 locations',
                    'Up to 10 notifications',
                    'Additional premium features',
                ],
                discount: 'Save 20%',
                isActive: false,
            },
        ],
    },
};
