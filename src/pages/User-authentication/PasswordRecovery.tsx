import { Link } from 'react-router-dom'
import email from './../../assets/emailIcon.png'

import headerimg from './../../assets/gfheader.png';
import BasicButton from '../../stories/Buttons/BasicButton/BasicButton';
import SimpleInputField from '../../stories/Input-Fields/SimpleInputField/SimpleInputField';

const PasswordRecovery = () => {
    return (
        <div className='min-h-screen w-full p-[55px] flex flex-col items-center bg-[#f3f4f6]'>
            <img className='w-[240px]' src={headerimg} />
            <div>
                <h1 className='mt-[127px] mb-[15px] text-[#1F2937] text-[16px] font-medium text-center'>Password Recovery</h1>
                <SimpleInputField active='email' label='Email' imgpath={email} />

                <div className='flex flex-col items-center mt-[213px]'>
                    <Link to='/recoverydone'> <BasicButton label='Submit' active='enabled' /></Link>
                    <h1 className='mt-[15px] text-[#1F2937] text-[14px] font-normal text-center'>Go back to the <span className='font-bold underline underline-offset-4'><Link to='/'>Login Page</Link></span></h1>
                </div>

            </div>
        </div>
    )
}

export default PasswordRecovery
