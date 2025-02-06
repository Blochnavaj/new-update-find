import { useState } from "react";
import CircularButton from "../../Buttons/CircularButton/CircularButton";
import left from './../../../assets/purpleLeft.png'
import right from './../../../assets/rightIcon.png'
import cross from './../../../assets/crossIcon.png'

type ImageGalleryProps = {
    images: string[];
};

const ImageGallery = ({ images = [], }: ImageGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleNext = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="m-0 w-screen h-screen fixed top-0 left-0 flex flex-col items-center bg-black/50 z-50">
            {/* Close Button */}
            <div className="ml-auto mr-5 mt-5 relati">

                <CircularButton imgpath={cross} active="cross" />
            </div>

            {/* Image Display & Navigation */}
            <div className="flex items-center justify-between w-full  px-[10px] md:px-[30px]  mb-[15px] md:h-[678px] md:space-x-5 mt-[100px] md:mt-0" >
                <div className="hidden md:block" onClick={handlePrev}>
                    <CircularButton active="left" imgpath={left} />
                </div>


                {/* Main Image */}
                <img
                    src={images[selectedIndex]}
                    alt={`Selected ${selectedIndex + 1}`}
                    className="w-full md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-lg"
                />
                <div className="hidden md:block" onClick={handleNext}>
                    <CircularButton active="right" imgpath={right} />
                </div>

            </div>

            {/* Thumbnail Selection */}
            <div className="md:w-full pl-[10px] md:mt-auto md:flex md:justify-center grid grid-rows-2 grid-cols-10 md:space-x-3 mb-[15px]">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className="relative w-[29px] h-[29px] md:w-[50px] md:h-[50px] overflow-hidden border-2 border-transparent rounded"
                        style={{ borderColor: selectedIndex === index ? 'white' : 'transparent' }}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {selectedIndex !== index && (
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
