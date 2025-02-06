
import headerimg from './../../assets/gfheader.png';


const RecoveryDone = () => {
    return (
        <div className='w-screen min-h-screen bg-[#f3f4f6] flex justify-center items-center flex-col'>
            <img className='w-[240px]' src={headerimg} />
            <h1 className='mt-[57px] text-center font-medium text-[18px] md:text-[24px] text-[#1f2937]'>Thanks for your request!</h1>
            <h2 className='text-center font-normal text-[14px] md:text-[18px] text-[#6b7280]'>Please check your email for further instructions.</h2>
        </div>

    )
}

export default RecoveryDone
