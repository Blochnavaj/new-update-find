import { useState } from 'react';
import { motion } from 'framer-motion';

import DualActionButton from '../../stories/Buttons/DualActionButton/DualActionButton';
import ProductCard from '../../stories/Cards/ProductCard/ProductCard';
import FilterPanel from '../../stories/Filters/FilterPanel/FilterPanel';
import SearchInputField from '../../stories/Input-Fields/SearchInputField/SearchInputField';
import MainMenu from '../../stories/Menus/MainMenu/MainMenu';

import car from './../../assets/carImage.avif';
import BackButton from '../../stories/Buttons/BackButton/BackButton';
import FilterSortButton from '../../stories/Buttons/FilterSortButton/FilterSortButton';

import filtericon from './../../assets/filterIcon.png';
import sorticon from './../../assets/sortIcon.png';
import SortModal from '../../stories/Filters/SortModal/SortModal';
import SavedFilter from '../../stories/Filters/SavedFilter/SavedFilter';

import cross from './../../assets/purpleCross.png';
import emptyFilter from './../../assets/emptyFilters.png'

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

const Catalog = () => {
    const slideUp = {
        hidden: { y: "100%", opacity: 0 },
        visible: { y: "0%", opacity: 1, transition: { type: "spring", stiffness: 100 } },
        exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } }
    };

    const [filters, setFilters] = useState([
        {
            name: 'Saved search 1',
            options: ['BMW', 'Audi', 'Toyota'],
            details: [
                { label: 'Make', value: 'BMW, Audi, Toyota' },
                { label: 'Transmission', value: 'Automatic' },
            ],
            date: '2',
        },
        {
            name: 'Saved search 2',
            options: ['BMW', 'Ford'],
            details: [
                { label: 'Make', value: 'BMW, Ford' },
                { label: 'Transmission', value: 'Manual' },
            ],
            date: '5',
        },
    ]);

    const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'CAD'>('USD');

    const [activePanel, setActivePanel] = useState<string | null>(null);

    return (
        <div className='w-screen relative flex h-screen overflow-scroll overflow-x-hidden'>
            <div className='z-10 md:ml-24  absolute mx-auto w-full bottom-0 m-0 flex justify-center'>
                <MainMenu />
            </div>
            <div className='absolute bottom-0 z-20 md:hidden'>
                <div className='absolute bottom-0 z-20'>
                    {activePanel === 'filters' && (
                        <motion.div
                            className='fixed bottom-0 left-0 right-0 w-full bg-white shadow-xl rounded-t-[20px]'
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div onClick={() => setActivePanel('saved')} className='w-full h-[90px] absolute top-[110px]'></div>
                            <div onClick={() => setActivePanel(null)} className='w-8 h-8 absolute top-[20px] left-[10px]'></div>
                            <FilterPanel />
                        </motion.div>
                    )}

                    {activePanel === 'sort' && (
                        <motion.div
                            className=' bottom-0 left-0 right-0 w-full bg-white shadow-xl rounded-t-[20px]'
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div onClick={() => setActivePanel(null)} className='w-8 h-8 bg-red-400 absolute top-[20px] left-[10px]'></div>
                            <SortModal />
                        </motion.div>
                    )}
                </div>

                {activePanel === 'saved' ? <div className='relative bottom-0 h-[705px] w-full md:w-[473px] flex flex-col p-4 md:h-[900px] bg-white shadow-xl rounded-tr-[20px] rounded-tl-[20px] md:rounded-tl-0 md:rounded-br-[20px]'>
                    <div onClick={() => setActivePanel('filters')} className=' ml-auto mr-[30px] mt-[45px]'>
                        <img className='w-[15px]' src={cross} />
                    </div>
                    <div className='flex flex-col min-w-[370px] w-full'>
                        <h1 className='mt-[50px] text-[24px] text-[#1f2937] font-medium'>Saved Filters</h1>
                        <div className='mt-[35px] h-[400px] noscrollbar overflow-scroll '>
                            <SavedFilter filters={filters} onFiltersUpdate={setFilters} />
                        </div>
                        <div className='absolute bottom-[30px]'>
                            <button className='w-[370px] md:w-[413px] h-[52px] text-white bg-[#893168] rounded-[20px] my-[20px]'>Apply</button>
                        </div>
                    </div>

                </div> : ''}
            </div>
            <div className='w-[473px]  hidden md:block'>

                {((activePanel === 'filters' || activePanel === null) || activePanel === 'sort') ?
                    <div className={activePanel === 'sort' ? 'absolute' : 'relative'}>
                        <div onClick={() => setActivePanel('saved')} className='w-full h-[90px] absolute top-[210px]'></div>
                        <FilterPanel />
                    </div>
                    : ''
                }
                {activePanel === 'sort' ?
                    <div className='absolute w-screen h-screen bg-black/50 z-[100]'>
                        <div onClick={() => setActivePanel('filters')} className='w-8 h-8 cursor-pointer top-8 right-4 absolute z-[9990]'></div>
                        <SortModal />
                    </div> : ''}
                {activePanel === 'saved' ? <div className='relative w-[473px] flex flex-col p-4 h-screen max-h-[900px]'>
                    <div onClick={() => setActivePanel('filters')} className=' ml-auto mr-[30px] mt-[45px]'>
                        <img className='w-[15px] cursor-pointer' src={cross} />
                    </div>
                    <h1 className='mt-[50px] text-[24px] text-[#1f2937] font-medium'>Saved Filters</h1>

                    <div className='mt-[35px] overflow-y-scroll noscrollbar mb-[100px]'>
                        {
                            filters.length === 0 ? <div className='flex flex-col items-center h-12 w-full '>
                                <img className='w-[311px] mt-[50px]' src={emptyFilter} />
                                <h1 className='text-center mt-[20px] text-[14px] md:text-[18px] font-normal text-[#6b7280]'>You do not have any Saved Filters</h1>
                            </div> : <SavedFilter filters={filters} onFiltersUpdate={setFilters} />
                        }


                    </div>
                    <div className='absolute bottom-[30px]'>
                        <button className='w-[413px] h-[52px] text-white bg-[#893168] rounded-[20px] my-[20px]'>Apply</button>
                    </div>
                </div> : ''}

            </div>

            <div className='flex flex-col p-[10px] md:p-[27px] w-full'>
                <div className='flex items-center'>
                    <div className='flex items-center w-full md:w-auto relative'>
                        <div className='md:hidden'>
                            <BackButton active='withoutText' />
                        </div>
                        <SearchInputField active='default' placeholder='What do you want to buy?' />
                    </div>

                    <div className='hidden md:flex ml-[30px] items-center justify-between space-x-4'>
                        <h1
                            className={`font-normal underline-offset-4 text-[16px] cursor-pointer ${selectedCurrency === 'USD' ? 'text-[#893168] font-semibold underline' : 'text-[#6b7280]'
                                }`}
                            onClick={() => setSelectedCurrency('USD')}
                        >
                            USD
                        </h1>
                        <h1
                            className={`font-normal underline-offset-4 text-[16px] cursor-pointer ${selectedCurrency === 'CAD' ? 'text-[#893168] font-semibold underline' : 'text-[#6b7280]'
                                }`}
                            onClick={() => setSelectedCurrency('CAD')}
                        >
                            CAD
                        </h1>
                    </div>
                    <div onClick={() => setActivePanel(activePanel === 'sort' ? null : 'sort')} className='hidden md:block ml-[24px]'>
                        <DualActionButton active='sort' label='Sort' />
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#e5e7eb] my-[10px]'>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center md:hidden w-[160px] justify-between'>
                        <div className='' onClick={() => setActivePanel('filters')}>
                            <FilterSortButton label='Filter'
                                active='filter'
                                imgpath={filtericon} />
                        </div>
                        <div className='' onClick={() => setActivePanel('sort')}>
                            <FilterSortButton label='Sort'
                                active='sort'
                                imgpath={sorticon} />
                        </div>

                    </div>
                    <div className='md:hidden flex ml-[30px] items-center justify-between space-x-4'>
                        <h1
                            className={`font-normal underline-offset-4 text-[16px] cursor-pointer ${selectedCurrency === 'USD' ? 'text-[#893168] font-semibold underline' : 'text-[#6b7280]'
                                }`}
                            onClick={() => setSelectedCurrency('USD')}
                        >
                            USD
                        </h1>
                        <h1
                            className={`font-normal underline-offset-4 text-[16px] cursor-pointer ${selectedCurrency === 'CAD' ? 'text-[#893168] font-semibold underline' : 'text-[#6b7280]'
                                }`}
                            onClick={() => setSelectedCurrency('CAD')}
                        >
                            CAD
                        </h1>
                    </div>

                </div>

                <div className={`grid mt-[30px] grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 noscrollbar overflow-hidden overflow-y-scroll gap-[10px] md:gap-[30px] justify-around`}>
                    {catalogDataList.length === 0 ? (
                        <div className=''>
                            <h1 className='text-[#6b7280] font-normal text-[18px]'>No results found</h1>
                        </div>
                    ) : catalogDataList.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
