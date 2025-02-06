import { Meta, StoryObj } from '@storybook/react';
import ThumbnailGallery from './ThumbnailGallery';
import car from './../../../assets/carImage.avif';
import car2 from './../../../assets/car2.jpg';
import car3 from './../../../assets/car3.avif';

const meta: Meta<typeof ThumbnailGallery> = {
    component: ThumbnailGallery,
    title: 'Image Previews/ThumbnailGallery',
};

export default meta;

export const Default: StoryObj<typeof ThumbnailGallery> = {
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

