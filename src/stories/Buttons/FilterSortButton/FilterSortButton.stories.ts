import { Meta, StoryObj } from '@storybook/react';
import FilterSortButton from './FilterSortButton';
import filterIcon from './../../../assets/filterIcon.png'
import sortIcon from './../../../assets/sortIcon.png'

const meta: Meta<typeof FilterSortButton> = {
    component: FilterSortButton,
    title: 'Buttons/FilterSortButton',
};

export default meta;

export const Filter: StoryObj<typeof FilterSortButton> = {
    args: {
        label: 'Filter',
        active: 'filter',
        imgpath: filterIcon,
    },
};

export const Sort: StoryObj<typeof FilterSortButton> = {
    args: {
        label: 'Sort',
        active: 'sort',
        imgpath: sortIcon,
    },
};
