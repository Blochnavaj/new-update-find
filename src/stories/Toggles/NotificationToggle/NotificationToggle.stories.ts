import { Meta, StoryObj } from '@storybook/react';
import NotificationToggle from './NotificationToggle';

const meta: Meta<typeof NotificationToggle> = {
    component: NotificationToggle,
    title: 'Toggles/NotificationToggle',
};

export default meta;

export const Default: StoryObj<typeof NotificationToggle> = {
    args: {
        plans: [
            {
                title: 'Advanced',
                price: '14.99',
                label: 'BWM, Audi, Toyota, Nissan, Tesla, Lada, Hyundai, Haval, Automatic, Color',
                benefits: [
                    'Up to 10 locations',
                    'Up to 5 notifications',
                    'Third benefit of this plan',
                ],
                benefits2: [
                    'Up to 20 locations',
                    'Up to 10 notifications',
                    'Additional premium features',
                ],
                isActive: true,
            },
            {
                title: 'Premium',
                label: 'BWM, Audi, Toyota, Nissan, Tesla, Lada, Hyundai, Haval, Automatic, Color',
                price: '29.99',
                benefits: [
                    'Up to 20 locations',
                    'Up to 10 notifications',
                    'Additional premium features',
                ],
                benefits2: [
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
