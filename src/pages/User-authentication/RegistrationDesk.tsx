import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerimg from './../../assets/gfheader.png';
import SimpleInputField from '../../stories/Input-Fields/SimpleInputField/SimpleInputField';
import PasswordInputField from '../../stories/Input-Fields/PasswordInputField/PasswordInputField';
import BasicButton from '../../stories/Buttons/BasicButton/BasicButton';
import info from './../../assets/infoGrey.png';
import profile from './../../assets/profileIcon.png';
import email from './../../assets/emailIcon.png';

const RegistrationDesk = () => {
    const [activeInfo, setActiveInfo] = useState<string | null>(null);
  
    const handleInfoToggle = (infoType: string) => {
      setActiveInfo(activeInfo === infoType ? null : infoType);
    };
  

  return (
    <div className='flex flex-col items-center p-4 md:p-[55px] w-full max-w-full min-h-screen bg-[#f3f4f6]'>
      <img className='w-52 md:w-[240px]' src={headerimg} alt='Header' />
      <h1 className='mt-10 md:mt-[127px] text-[#1F2937] text-base md:text-[16px] font-medium text-center mb-4 md:mb-[15px]'>
        Registration
      </h1>

      <div className='flex flex-col items-center w-full max-w-[914px]'>
        <div className='grid gap-4 md:gap-[25px] items-center grid-cols-1 md:grid-cols-2 mb-10 md:mb-[80px] w-full'>
          {/* Name Input */}
          <div className='flex items-center relative'>
            <SimpleInputField imgpath={profile} active='default' label='Name' />
            <div
              className='absolute right-[-28px] md:right-[-36px]'
              onClick={() => handleInfoToggle('name')}
            >
              <img className='h-[18px] md:h-[10px] mr-6' src={info} alt='Info' />
              {activeInfo ==='name'&& (
                <div className='infochat'>
                  <ul className='list-disc pl-5 pt-2'>
                    <li className='text-sm text-[#1f2937]'>Must not be empty</li>
                    <li className='text-sm text-[#1f2937]'>Should only contain alphabetic characters [a-zA-Z]</li>
                    <li className='text-sm text-[#1f2937]'>Length should be 3 chars minimum and 15 chars maximum</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className='flex items-center relative justify-between'>
            <PasswordInputField />
            <div
              className='absolute right-[-28px] md:right-[-36px]'
              onClick={() => handleInfoToggle('password')}
            >
              <img className='h-[18px] md:h-[10px] mr-6' src={info} alt='Info' />
              {activeInfo === 'password' && (
                <div className='infochat larger'>
                  <ul className='list-disc pl-5 pt-2'>
                    <li className='text-sm text-[#1f2937]'>Password length should be 6 chars minimum and 20 chars maximum.</li>
                    <li className='text-sm text-[#1f2937]'>Include at least one uppercase letter.</li>
                    <li className='text-sm text-[#1f2937]'>Include at least one lowercase letter.</li>
                    <li className='text-sm text-[#1f2937]'>Include at least one number.</li>
                    <li className='text-sm text-[#1f2937]'>Include at least one special character (e.g., !@#$%^&*).</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className='flex items-center'>
            <SimpleInputField active='default' label='Email' imgpath={email} />
          </div>

          {/* Confirm Password */}
          <div className='flex items-center'>
            <PasswordInputField />
          </div>
        </div>

        <BasicButton label='Sign up' active='enabled' />

        <h1 className='mt-8 md:mt-[30px] text-[#1F2937] text-sm md:text-[14px] font-normal text-center'>
          Already have an account?{' '}
          <span className='font-bold underline underline-offset-4'>
            <Link to='/'>Log In</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default RegistrationDesk;
