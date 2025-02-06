

import MainMenu from './../../stories/Menus/MainMenu/MainMenu'
import BackButton from '../../stories/Buttons/BackButton/BackButton'
import SubscriptionToggle from './../../stories/Toggles/SubscriptionToggle/SubscriptionToggle'

const SubscriptionDeck = () => {
    const plans = [
        {
            title: 'Advanced',
            price: '14.99',
            benefits: [
                'Up to 10 locations',
                'Up to 5 notifications',
                'Third benefit of this plan',
            ],
            isActive: true,
        },
        {
            title: 'Premium',
            price: '29.99',
            benefits: [
                'Up to 20 locations',
                'Up to 10 notifications',
                'Additional premium features',
            ],
            discount: 'Save 20%',
            isActive: false,
        },
    ]

    return (
        <div className='h-screen min-w-screen overflow-y-scroll overflow-x-hidden  pt-[30px] p-[10px] flex flex-col justify-endd items-center bg-[#f3f4f6]'>
            <div className='absolute mx-auto bottom-0 m-0'>
                <MainMenu />
            </div>
            <div className='md:w-[915px] mr-auto md:mr-0 flex mb-[30px]'>
                <BackButton active='withText' label='Previous page' />
            </div>
            <h1 className='md:w-[915px]  mr-auto md:mr-0 text-[24px] text-[#1f2937] font-medium mb-[15px]'>Choose your Plan</h1>

            <SubscriptionToggle plans={plans} />
        </div >
    )
}

export default SubscriptionDeck
