import { Meta, StoryObj } from '@storybook/react';
import BasicAccordion from './BasicAccordion';

const meta: Meta<typeof BasicAccordion> = {
    component: BasicAccordion,
    title: 'Accordions/BasicAccordion',
};

export default meta;

export const Default: StoryObj<typeof BasicAccordion> = {
    args: {
        items: [
            {
                question: 'How can I save my search?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                question: 'What are the available features?',
                answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
            {
                question: 'How to contact support?',
                answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
    },
};
