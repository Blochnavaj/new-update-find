import { Meta, StoryObj } from '@storybook/react';
import ImageGallery from './ImageGallery';
import car from './../../../assets/carImage.avif';
import car2 from './../../../assets/car2.jpg';
import car3 from './../../../assets/car3.avif';

const meta: Meta<typeof ImageGallery> = {
    component: ImageGallery,
    title: 'Image Previews/ImageGallery',
};

export default meta;

export const Default: StoryObj<typeof ImageGallery> = {
    args: {
        images: [
            car,
            car2,
            car3,
            car,
            car2,
            car3,
            car,
            car2,
            car3,
            car,
            car2,
            car3,
            car,
            car2,
            car3,
        ]
    },
};

