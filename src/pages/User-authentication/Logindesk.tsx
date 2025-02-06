import { Link } from 'react-router-dom';
import headerimg from './../../assets/gfheader.png';
import SimpleInputField from '../../stories/Input-Fields/SimpleInputField/SimpleInputField';
import PasswordInputField from '../../stories/Input-Fields/PasswordInputField/PasswordInputField';
import BasicButton from '../../stories/Buttons/BasicButton/BasicButton';
import emailicon from './../../assets/emailIcon.png';


const Logindesk = () => {
    return (
        <div className='w-screen min-h-screen bg-[#f3f4f6]'>
            <div className='flex flex-col items-center py-[70px] md:pt-[55px] w-full '>
                <img className='w-[240px]' src={headerimg} />
                <div className='grid gap-y-[15px] items-center grid-cols-1'>
                    <h1 className='mt-[127px] text-[#1F2937] text-[16px] font-medium text-center'>Login</h1>
                    <SimpleInputField active='default' label='Email' imgpath={emailicon} />
                    <PasswordInputField />
                    <h1 className='mt-[15px] mb-[61px] text-[#1F2937] text-[14px] font-normal text-center'>Lost password? <span className='font-bold underline underline-offset-4'><Link to='/passwordrecovery'>Password Recovery</Link></span></h1>
                    <BasicButton label='Sign In' active='enabled' />
                    <h1 className='mt-[15px] text-[#1F2937] text-[14px] font-normal text-center'>Not Registered? <span className='font-bold underline underline-offset-4'><Link to='/registration'>Create Account</Link></span></h1>
                </div>
            </div>
        </div>

    )
}

export default Logindesk
