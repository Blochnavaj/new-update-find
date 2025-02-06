import BasicButton from './../../stories/Buttons/BasicButton/BasicButton';
import headerimg from './../../assets/gfheader.png';
import { Link } from 'react-router';


const PasswordUpdated = () => {
    return (
        <div className='w-screen min-h-screen bg-[#f3f4f6] flex justify-center items-center flex-col'>
            <img className='w-[240px]' src={headerimg} />
            <h1 className='mt-[57px] text-center font-medium text-[24px] text-[#1f2937]'>Password updated</h1>
            <h2 className='w-[678px] text-center font-normal text-[18px] text-[#6b7280] mb-[163px]'>You can login with the new password now.</h2>
            <Link to='/'>
                <BasicButton active='enabled' label='Go to Login' />
            </Link>

        </div>

    )
}

export default PasswordUpdated
