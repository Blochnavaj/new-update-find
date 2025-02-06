import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerimg from './../../assets/gfheader.png';
import SimpleInputField from '../../stories/Input-Fields/SimpleInputField/SimpleInputField';
import PasswordInputField from '../../stories/Input-Fields/PasswordInputField/PasswordInputField';
import BasicButton from '../../stories/Buttons/BasicButton/BasicButton';
import info from './../../assets/infoGrey.png';
import profile from './../../assets/profileIcon.png'
import email from './../../assets/emailIcon.png'

const RegistrationDesk = () => {
    const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);
    const [hoveredEmailInfo, setHoveredEmailInfo] = useState<boolean>(false);

    const handlePasswordMouseEnter = () => setHoveredInfo(true);
    const handlePasswordMouseLeave = () => setHoveredInfo(false);

    const handleEmailMouseEnter = () => setHoveredEmailInfo(true);
    const handleEmailMouseLeave = () => setHoveredEmailInfo(false);

    return (
        <div className='flex flex-col items-center p-[55px] w-full min-h-screen bg-[#f3f4f6]'>
            <img className='w-[240px]' src={headerimg} />
            <h1 className='mt-[127px] text-[#1F2937] text-[16px] font-medium text-center mb-[15px]'>Registration</h1>
            <div className='flex flex-col items-center w-[914px]'>
                <div className='grid gap-[25px] items-center grid-cols-1 md:grid-cols-2 mb-[80px]'>
                    <div className='flex items-center relative'>
                        <SimpleInputField imgpath={profile} active='default' label='Name' />
                        <div
                            className='absolute right-[22px] md:-right-[28px]'
                            onMouseEnter={handlePasswordMouseEnter}
                            onMouseLeave={handlePasswordMouseLeave}
                        >
                            <img className='h-[23px] md:h-[10px]  top-4 md:mr-3' src={info} alt="Info" />
                            {hoveredInfo && (
                                <div className='infochat'>
                                    <ul className='list-disc pl-[20px] pt-[8px] '>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Must not be empty</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Should only contain alphabetic characters [a-zA-Z]</li>
                                        <li className='text-[14px] text-[#1f2937] font-normal'>Length should be 3 chars minimum and 15 chars maximum</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center relative justify-between'>

                        <PasswordInputField />
                        <div
                            className='absolute right-[22px] md:-right-[28px]'
                            onMouseEnter={handleEmailMouseEnter}
                            onMouseLeave={handleEmailMouseLeave}
                        >
                            <img className='h-[23px] md:h-[10px] mx-[11px]' src={info} alt="Info" />
                            {hoveredEmailInfo && (
                                <div className='infochat larger'>
                                    <ul className='list-disc pl-[20px] pt-[5px]'>
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
                    <div className='flex items-center'>
                        <SimpleInputField active='default' label='Email' imgpath={email} />

                    </div>
                    <div className='flex items-center'>
                        <PasswordInputField />

                    </div>

                </div>

                <BasicButton label='Sign up' active='enabled' />

                <h1 className='mt-[30px] text-[#1F2937] text-[14px] font-normal text-center'>
                    Already have an account? <span className='font-bold underline underline-offset-4'><Link to='/'>Log In</Link></span>
                </h1>
            </div>
        </div>
    );
};

export default RegistrationDesk;
