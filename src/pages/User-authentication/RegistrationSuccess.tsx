import BasicButton from './../../stories/Buttons/BasicButton/BasicButton';
import headerimg from './../../assets/gfheader.png';


const RegistrationSucess = () => {
    return (
        <div className='w-screen min-h-screen bg-[#f3f4f6] flex justify-center items-center flex-col'>
            <img className='w-[240px]' src={headerimg} />
            <h1 className='mt-[57px] text-center font-medium text-[24px] text-[#1f2937]'>Thanks for registration!</h1>
            <h2 className='w-[678px] text-center font-normal text-[18px] text-[#6b7280] mb-[163px]'>Registration successful! Please check your email and click the verification link to complete the process.</h2>
            <BasicButton active='enabled' label='Go to Login' />
        </div>

    )
}

export default RegistrationSucess
