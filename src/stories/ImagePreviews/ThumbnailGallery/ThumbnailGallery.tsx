import { useState } from "react";

type ThumbnailGalleryProps = {
  images: string[];
};

const ThumbnailGallery = ({ images = [] }: ThumbnailGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">

      <div className="rounded-[20px] overflow-hidden relative">
        <img
          src={images[selectedIndex]}
          alt="Selected"
          className="object-cover w-[320px] 2xl:w-[90vw] max-w-[443px] aspect-square"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-[#1f2937] opacity-60 h-[22px] w-auto px-3 py-1 rounded-[20px]">
          {images.map((_, index) => (
            <div
              key={index}
              className={`cursor-pointer w-[8px] h-[8px] rounded-full ${selectedIndex === index ? "bg-white" : "bg-white opacity-50"
                }`}
              onClick={() => setSelectedIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="md:grid grid-cols-5 gap-[5px] hidden">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden relative"
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-[60px] 2xl:w-[18vw] max-w-[81px] aspect-square object-cover"
            />
            {selectedIndex !== index && (
              <div className="bg-black bg-opacity-50 absolute inset-0 z-10"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGallery;
