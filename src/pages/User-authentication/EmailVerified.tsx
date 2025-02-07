import { Link } from 'react-router';
import BasicButton from './../../stories/Buttons/BasicButton/BasicButton';
import headerimg from './../../assets/gfheader.png';

const EmailVerified = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6] flex justify-center items-center flex-col px-4">
      <img className="w-[240px] sm:w-[180px]" src={headerimg} alt="Header" />
      <h1 className="mt-[40px] text-center font-medium text-[20px] md:text-[24px] text-[#1f2937]">
        Thanks for registration!
      </h1>
      <h2 className="max-w-[90%] md:max-w-[678px] text-center font-normal text-[14px] md:text-[18px] text-[#6b7280] mb-[40px] md:mb-[80px]">
        Email successfully verified!
      </h2>
      <Link to="/">
        <BasicButton active="enabled" label="Go to Login" />
      </Link>
    </div>
  );
};

export default EmailVerified;
