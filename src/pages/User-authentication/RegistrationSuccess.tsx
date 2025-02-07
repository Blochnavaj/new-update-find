import BasicButton from './../../stories/Buttons/BasicButton/BasicButton';
import headerimg from './../../assets/gfheader.png';

const RegistrationSucess = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f3f4f6] flex justify-center items-center flex-col px-4">
      <img className="w-[240px] sm:w-[180px]" src={headerimg} alt="Registration Success" />
      <h1 className="mt-[40px] text-center font-medium text-[24px] sm:text-[20px] text-[#1f2937]">
        Thanks for registration!
      </h1>
      <h2 className="max-w-[678px] w-full text-center font-normal text-[18px] sm:text-[16px] text-[#6b7280] mb-[100px] sm:mb-[60px]">
        Registration successful! Please check your email and click the verification link to complete the process.
      </h2>
      <BasicButton active="enabled" label="Go to Login" />
    </div>
  );
};

export default RegistrationSucess;
