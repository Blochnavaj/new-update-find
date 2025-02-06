

import searchbg from './../../assets/searchbg.png'

import MainMenu from '../../stories/Menus/MainMenu/MainMenu'
import BackButton from '../../stories/Buttons/BackButton/BackButton'
import NotificationToggle from './../../stories/Toggles/NotificationToggle/NotificationToggle'
import { Link } from 'react-router'

const Notifications = () => {
    const plans = [
        {
            title: 'Advanced',
            price: '14.99',
            label: 'BWM, Audi, Toyota, Nissan, Tesla, Lada, Hyundai, Haval, Automatic, Color',
            benefits: [
                'Up to 10 locations',
                'Up to 5 notifications',
                'Third benefit of this plan',
            ],
            benefits2: [
                'Up to 20 locations',
                'Up to 10 notifications',
                'Additional premium features',
            ],
            isActive: true,
        },
        {
            title: 'Premium',
            label: 'BWM, Audi, Toyota, Nissan, Tesla, Lada, Hyundai, Haval, Automatic, Color',
            price: '29.99',
            benefits: [
                'Up to 20 locations',
                'Up to 10 notifications',
                'Additional premium features',
            ],
            benefits2: [
                'Up to 20 locations',
                'Up to 10 notifications',
                'Additional premium features',
            ],
            discount: 'Save 20%',
            isActive: false,
        },
    ];

    return (
        <div className='h-screen w-full p-[10px] pt-[30px] flex flex-col items-center bg-[#f3f4f6]'>
            <div className='absolute mx-auto bottom-0'>
                <MainMenu />
            </div>
            <div className='md:w-[915px] mr-auto md:mr-0 mb-[30px]'>
                <Link to={'/catalog'}>
                    <BackButton active='withText' label='Previous page' />
                </Link>
            </div>
            <h1 className='md:w-[915px] text-[18px] mr-auto md:mr-0 md:text-[24px] text-[#1f2937] font-medium mb-[15px]'>Notifications</h1>
            <div className='md:w-[915px] w-full overflow-scroll noscrollbar pb-[100px]'>
                {plans.length > 0 ? <NotificationToggle plans={plans} />
                    : <div className='mt-[170px] flex flex-col items-center'>
                        <img className='w-[436px]' src={searchbg} />
                        <h1 className='mt-[22px] text-center text-[#6b7280] font-normal text-[18px]'>You don’t have any saved filters to set notifications on</h1>
                    </div>}
            </div>

        </div >
    )
}

export default Notifications
