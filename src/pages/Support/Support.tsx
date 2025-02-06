import MainMenu from '../../stories/Menus/MainMenu/MainMenu'
import BackButton from '../../stories/Buttons/BackButton/BackButton'

import InfoCard from './../../stories/Cards/InfoCard/InfoCard'

import phone from './../../assets/phoneIcon.png'
import email from './../../assets/emailIcon.png'
import BasicAccordion from '../../stories/Accordions/BasicAccordion/BasicAccordion'

const Support = () => {
    const items = [
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
    ]

    return (
        <div className='h-screen overflow-scroll w-full p-[10px] md:p-0 md:pt-[30px] flex flex-col items-center bg-[#f3f4f6]'>
            <div className='absolute mx-auto bottom-0'>
                <MainMenu />
            </div>
            <div className='md:w-[915px] h-screen flex flex-col overflow-scroll noscrollbar pb-[150px]'>

                <div className='md:w-[915px] flex mb-[30px]'>
                    <BackButton active='withText' label='Previous page' />
                </div>
                <h1 className='text-[18px] md:text-[24px] text-[#1f2937] font-medium'>Support Center</h1>
                <h2 className='text-[14px] md:text-[16px] text-[#1f2937] font-medium my-[15px]'>Our contacts</h2>
                <div className='flex flex-col md:flex-row md:justify-between gap-y-2 md:gap-y-0 items-center'>
                    <InfoCard active='Phone'
                        imgpath={phone}
                        clickable='no'
                        header='Phone'
                        credentials='123456789' />
                    <InfoCard active='Email'
                        imgpath={email}
                        clickable='no'
                        header='Email'
                        credentials='davejoe34444@gmail.com' />
                </div>
                <h1 className='text-[16px] text-[#1f2937] font-medium mt-[30px] mb-[15px]'>Frequently Asked Questions (FAQ)</h1>
                <BasicAccordion items={items} />
            </div>


        </div>
    )
}

export default Support
