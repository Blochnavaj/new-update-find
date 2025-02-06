import { Meta, StoryObj } from '@storybook/react';
import MainMenu from './MainMenu';
import profile from './../../../assets/profile.png';
import notifications from './../../../assets/notifications.png';
import catalog from './../../../assets/catalog.png';
import subscription from './../../../assets/subscription.png';
import support from './../../../assets/support.png';

import pprof from './../../../assets/pprof.png';
import pnotif from './../../../assets/pnotif.png';
import pcatalog from './../../../assets/pcatalog.png';
import psub from './../../../assets/psub.png';
import psupport from './../../../assets/psupport.png';

const meta: Meta<typeof MainMenu> = {
    component: MainMenu,
    title: 'Menus/MainMenu',
};

export default meta;

export const Default: StoryObj<typeof MainMenu> = {
    args: {
        options: [
            {
                label: 'Profile',
                src: profile,
                purple: pprof,
            },
            {
                label: 'Notifications',
                src: notifications,
                purple: pnotif,
            },
            {
                label: 'Catalog',
                src: catalog,
                purple: pcatalog,
            },
            {
                label: 'Subscription',
                src: subscription,
                purple: psub,
            },
            {
                label: 'Support',
                src: support,
                purple: psupport,
            }
        ]
    },
};

