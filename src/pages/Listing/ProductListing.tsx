import { useState } from 'react'
import { Link } from 'react-router';
import MainMenu from '../../stories/Menus/MainMenu/MainMenu'
import ThumbnailGallery from '../../stories/ImagePreviews/ThumbnailGallery/ThumbnailGallery'
import car from './../../assets/carImage.avif';
import car2 from './../../assets/car2.jpg';
import car3 from './../../assets/car3.avif';
import BackButton from '../../stories/Buttons/BackButton/BackButton';
import info from './../../assets/infoGrey.png'
import InfoToggle from '../../stories/Toggles/InfoToggle/InfoToggle';

import ProductCard from '../../stories/Cards/ProductCard/ProductCard';
import AIChatInputField from '../../stories/Input-Fields/AIChatInputField/AIChatInputField';
import ImageGallery from '../../stories/ImagePreviews/ImageGallery/ImageGallery';

const plans = [
  {
    title: 'Price',
    price: '10',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    discount: '10% off',
  },
  {
    title: 'Price by Year Range(2016 - 2018)',
    price: '20',
    benefits: ['Benefit A', 'Benefit B', 'Benefit C'],
  },
];

const catalogDataList = [
  {
    active: 'green',
    imgpath: car,
    price: '$18900',
    discount: '-10%',
    model: '2021 - BMW 3 Series',
    kilometers: '8917 km',
  },
  {
    active: 'grey',
    imgpath: car,
    price: '$25000',
    discount: '-15%',
    model: '2020 - Audi A4',
    kilometers: '12000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$30000',
    discount: '-5%',
    model: '2022 - Tesla Model 3',
    kilometers: '5000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$22000',
    discount: '-12%',
    model: '2019 - Mercedes C Class',
    kilometers: '15000 km',
  },
  {
    active: 'grey',
    imgpath: car,
    price: '$25000',
    discount: '-15%',
    model: '2020 - Audi A4',
    kilometers: '12000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$30000',
    discount: '-5%',
    model: '2022 - Tesla Model 3',
    kilometers: '5000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$22000',
    discount: '-12%',
    model: '2019 - Mercedes C Class',
    kilometers: '15000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$25000',
    discount: '-15%',
    model: '2020 - Audi A4',
    kilometers: '12000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$30000',
    discount: '-5%',
    model: '2022 - Tesla Model 3',
    kilometers: '5000 km',
  },
  {
    active: 'grey',
    imgpath: car,
    price: '$22000',
    discount: '-12%',
    model: '2019 - Mercedes C Class',
    kilometers: '15000 km',
  },
  {
    active: 'green',
    imgpath: car,
    price: '$25000',
    discount: '-15%',
    model: '2020 - Audi A4',
    kilometers: '12000 km',
  },
  {
    active: 'grey',
    imgpath: car,
    price: '$30000',
    discount: '-5%',
    model: '2022 - Tesla Model 3',
    kilometers: '5000 km',
  },
  {
    active: 'grey',
    imgpath: car,
    price: '$22000',
    discount: '-12%',
    model: '2019 - Mercedes C Class',
    kilometers: '15000 km',
  },
];

const ProductListing = () => {
  const images = [
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

  const questions = [
    `What's a fair price for this model?`,
    `Is it worth paying for an extended warranty?`,
    `How do I evaluate the car's condition?`
  ]

  const chats = [
    {
      user: 'You',
      message: 'What\'s a fair price for this model?'
    },
    { user: 'Great Find AI', message: 'I\'m not sure, but I can help you find out.' },
  ]

  const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);

  const handleMouseEnter = () => setHoveredInfo(true);
  const handleMouseLeave = () => setHoveredInfo(false);

  const [galleryActive, setGalleryActive] = useState<boolean>(false);


  return (
    <div className='bg-[#f3f4f6] w-screen relative flex flex-col md:flex-row items-start h-screen overflow-scroll p-[10px] md:p-[10px] xl:p-[43px] xl:pr-0'>
      {galleryActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50"
          onClick={() => setGalleryActive(false)}
        >
          <div onClick={() => setGalleryActive(false)} className='absolute  z-[100] w-[50px] h-[50px] top-4 right-[20px]'></div>

          <div className="relative p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>

            <ImageGallery images={images} />
          </div>
        </div>
      )
      }

      <div className='fixed mx-auto w-full bottom-0 m-0 flex justify-center z-[9999]'>
        <MainMenu />
      </div>
      <div className='relative hidden md:block'>
        <div className='w-full h-[443px]  absolute z-40' onClick={() => setGalleryActive(true)}></div>

        <ThumbnailGallery images={images} />
      </div>
      {galleryActive && (<div onClick={() => setGalleryActive(false)} className='w-[50px] h-[50px]  right-[20px] top-[65px] z-50 absolute'></div>)}
      <div className='hidden 2xl:flex items-center ml-[30px]'>
        <Link to={'/catalog'}>
          <BackButton active='withoutText' />
        </Link>
        <Link to={'/catalog'}>
          <h1 className='text-[16px] font-medium text-[#1f2937]'>Catalog</h1>
        </Link>
      </div>
      <div className='md:ml-[35px] w-[370px] md:w-[678px]  lg:mr-[10px] 2xl:mt-[63px] xl:ml-[45px] 2xl:ml-[35px]'>
        <div className='flex 2xl:hidden items-center justify-start relative mb-[15px]'>
          <BackButton active='withoutText' />
          <h1 className='text-[16px] absolute left-4 font-medium text-[#1f2937]'>Catalog</h1>
        </div>
        <div className='mt-4 md:hidden' onClick={() => setGalleryActive(true)}>
          <ThumbnailGallery images={images} />
        </div>

        <h1 className='font-semibold text-[16px] md:text-[24px] text-[#1f2937] mt-[15px] md:mt-0'>2017 - BMW i3 I01 Hatchback</h1>
        <h1 className='text-[16px] md:text-[24px] font-normal text-[#1f2937]'>$18,900 <span className='line-through text-[#6b7280] text-[16px] md:text-[24px] '>$20,900</span></h1>
        <div className='flex items-center mt-[15px] justify-between '>
          <div>
            <h1 className='text-[14px] md:text-[16px] font-normal text-[#6b7280]'>Listed 11 Jul 21:45</h1>
            <h1 className='text-[14px] md:text-[16px] font-normal text-[#6b7280]'>Langley TWP, BC</h1>
          </div>
          <div className='text-end'>
            <h1 className='text-[14px] md:text-[16px] font-normal text-[#6b7280]'>Updated</h1>
            <h1 className='text-[14px] md:text-[16px] font-semibold text-[#6b7280]'>11 Jul 21:45</h1>
          </div>
        </div>

        <div className='bg-white px-[20px] md:px-[28px] rounded-[20px] h-[63px] flex items-center justify-between mt-[30px]'>
          <div
            className='relative flex items-center bg-white'

          >
            <h1 className='text-[14px] md:text-[18px] font-semibold text-[#1f2937]'>AI Weighted Price</h1>
            <img className='h-[23px] md:h-[10px] mx-[11px]' src={info} alt="Info" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} />
            {hoveredInfo && (
              <div className='infochat'>
                <p className='text-[14px] text-[#1f2937]font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt recusandae, odit vitae id mollitia laudantium ducimus facilis quia porro quae eligendi odit vitae id mollitia laudantium ducimus facilis quia porro quae eligendi</p>
              </div>
            )}
          </div>
          <div className='flex items-center'>
            <h1 className='text-[16px] md:text-[24px] font-normal text-[#1f2937]'>$2,000</h1>
            <h1 className='h-[26px] w-[54px] ml-[10px] text-[16px] font-medium text-white bg-[#5bb87d] rounded-[10px] flex justify-center items-center'>+20%</h1>
          </div>
        </div>

        <div className='mt-[15px]'>
          <InfoToggle plans={plans} />
        </div>

        <div className='w-[370px] md:w-[678px] border-[1px] border-[#e5e7eb] mt-[30px]'></div>

        <h1 className='mt-[30px] text-[18px] font-semibold text-[#1f2937]'>Description</h1>
        <p className='mt-2 text-[16px] font-normal text-[#1f2937]'>Loaded with tech features including navigation and heated seats. Comes with extra sets of tires. Minor repair may be needed on the rear defrost. Overall, a high-tech electric hatchback in excellent condition.</p>

        <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-3 mt-[30px] gap-y-[20px] gap-x-[31px] w-full'>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Make</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Ford</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Title</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Clean</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Title</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Clean</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Model</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>i3</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Fuel</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Electric</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Fuel</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Electric</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Trim</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>I01 Hatchback</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Transmission</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Automatic</h1>
          </div>
          <div className='h-[41px] w-[205px] flex flex-col justify-between'>
            <h1 className='text-[16px] font-normal text-[#6b7280]'>Transmission</h1>
            <h1 className='text-[16px] font-normal text-[#1f2937]'>Automatic</h1>
          </div>

        </div>

        <div className='w-[370px] md:w-[678px] border-[1px] border-[#e5e7eb] mt-[30px]'></div>

        <h1 className='mt-[30px] font-semibold text-[16px] font-[#6b7280]'>Smart Vehicle Review</h1>

        <p className='mt-[15px] text-[#1f2937] text-[16px] font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptas quod placeat accusamus a blanditiis in pariatur tenetur cumque corrupti sit perspiciatis obcaecati porro repellendus qui veritatis vel itaque recusandae officia, mollitia quas animi quibusdam, ipsa possimus. Rem doloribus reiciendis autem explicabo, facilis magnam, adipisci odit repudiandae aperiam iste dolor?</p>

        <div className='flex items-center mt-[35px]'>
          <div className='w-1/2'>
            <h1 className='font-semibold text-[18px]'>Pros:</h1>
            <ul className='mt-[15px] list-disc pl-[15px]'>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
            </ul>
          </div>
          <div className='w-1/2'>
            <h1 className='font-semibold text-[18px]'>Cons:</h1>
            <ul className='mt-[15px] list-disc pl-[15px]'>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
              <li className='border-0 list-disc my-[5px] font-normal text-[16px] text-[#1f2937]'> Loaded with tech features including navigation and heated seats. </li>
            </ul>
          </div>
        </  div>

        <div className='w-[370px] md:w-[678px] border-[1px] border-[#e5e7eb] mt-[30px]'></div>

        <h1 className='text-[18px] font-semibold mt-[35px]'>AI Assistant</h1>
        <div className='mt-[15px]'>
          <AIChatInputField chats={chats} questions={questions} />
        </div>


      </div>
      <div className='ml-auto 3xl:w-[442px] mb-[90px] xl:mr-[43px] w-screen md:w-auto
       mt-[15px] md:mt-0'>
        <h1 className='text-[16px] font-semibold md:font-medium text-[#1f2937]'>Similar Ads</h1>
        <div className='grid gap-[10px] grid-flow-col md:grid-flow-row md:gap-[30px] mt-[15px] overflow-x-scroll md:overflow-hidden 3xl:grid-cols-2 noscrollbar'>

          {catalogDataList.map((item, index) => (
            <ProductCard key={index} ad="yes" {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductListing;
