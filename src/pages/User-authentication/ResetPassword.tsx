import { useState } from 'react'
import headerimg from './../../assets/gfheader.png';
import PasswordInputField from '../../stories/Input-Fields/PasswordInputField/PasswordInputField';
import BasicButton from '../../stories/Buttons/BasicButton/BasicButton';
import info from './../../assets/infoGrey.png';


const ResetPassword = () => {
    const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);

    const handlePasswordMouseEnter = () => setHoveredInfo(true);
    const handlePasswordMouseLeave = () => setHoveredInfo(false);

    return (
        <div className='w-screen min-h-screen bg-[#f3f4f6]'>
            <div className='flex flex-col items-center pt-[55px] w-full '>
                <img className='w-[240px]' src={headerimg} />
                <div className='grid gap-y-[15px] items-center grid-cols-1'>
                    <div className='flex mt-[127px] justify-center'>

                        <h1 className=' text-[#1F2937] text-[16px] font-medium text-center'>Reset Password</h1>
                        <div
                            className='relative top-[70px] left-[88px] md:top-0 md:left-0 z-10 '
                            onMouseEnter={handlePasswordMouseEnter}
                            onMouseLeave={handlePasswordMouseLeave}
                        >
                            <img className='h-[23px] md:h-[10px] mx-[11px]' src={info} alt="Info" />
                            {hoveredInfo && (
                                <div className='infochat larger'>
                                    <ul className='list-disc pl-[20px] pt-[10px]'>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Password length should be 6 chars minimum and 20 chars maximum.</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Include at least one uppercase letter.</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Include at least one lowercase letter.</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Include at least one number.</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Include at least one special character (e.g., !@#$%^&*).</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <PasswordInputField placeholder='New Password' />
                    <PasswordInputField />
                    <div className='h-[108px]'>

                    </div>
                    <BasicButton label='Submit' active='enabled' />

                </div>
            </div>
        </div>

    )
}

export default ResetPassword
