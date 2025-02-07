import { Link } from 'react-router'
import SubscriptionCard from './../../stories/Cards/SubscriptionCard/SubscriptionCard'
import MainMenu from './../../stories/Menus/MainMenu/MainMenu'
import InfoCard from './../../stories/Cards/InfoCard/InfoCard'
import EditableInputField from '../../stories/Input-Fields/EditableInputField/EditableInputField'

import notifications from './../../assets/purpleNotifications.png';
import support from './../../assets/questionIcon.png';

const ProfilePage = () => {
    return (
        <div className='h-screen min-w-screen overflow-y-scroll overflow-x-hidden p-[10px] pt-[30px] flex flex-col justify-endd items-center bg-[#f3f4f6]'>
            <div className='absolute mx-auto bottom-0 m-0'>
                <MainMenu />
            </div>
            <div className=''>
                <h1 className='text-[16px] font-medium text-[#1f2937] mb-[15px]'>Subscription</h1>
                <div className='relative'>
                    <Link to="/subscription">
                        <div className='z-50 absolute right-[150px] top-1/3 h-[52px] w-[190px] '>
                        </div>
                        <SubscriptionCard active='Free' subscription='Free Plan' />
                    </Link>
                </div>
            </div>

            <div className='w-[915px] mt-[30px]'>
                <h1 className='text-[16px] font-medium text-[#1f2937] mb-[15px]'>Profile</h1>
                <div className='flex flex-col md:flex-row items-center w-full justify-between space-y-3'>
                    <EditableInputField title='Name' initialActive='saved' label='Ivan Ivanov' />
                    <EditableInputField title='Email' initialActive='saved' label='ivanivanov@gmail.com' />
                </div>
            </div>
            <div className='w-[915px] mt-[30px]'>
                <h1 className='text-[16px] font-medium text-[#1f2937] mb-[15px]'>More</h1>
                <div className='flex flex-col md:flex-row items-center w-full justify-between  space-y-3'>
                    <Link to='/notifications'>
                        <InfoCard active='Notifications'
                            imgpath={notifications}
                            clickable='yes'
                            header='Notifications' />
                    </Link>
                    <Link to='/support'>
                        <InfoCard active='Support'
                            imgpath={support}
                            clickable='yes'
                            header='Support' />
                    </Link>
                </div>
            </div>
            <h1 className='underline cursor-pointer underline-offset-4 text-[#893168] font-bold text-[16px] md:w-[915px]  ml-auto md:ml-0 text-end mt-[64px]'>Log out</h1>
        </div >
    )
}

export default ProfilePage
