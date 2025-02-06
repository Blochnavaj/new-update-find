import preloaderbg from './../../assets/preloaderbg.png';
import preloaderbgmob from './../../assets/preloaderbgmob.png';
import preloaderfg from './../../assets/preloaderfg.png';

const Preloader = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-[#893168]">
            <img className='absolute hidden md:flex md:h-[110%]' src={preloaderbg} />
            <img className='absolute md:hidden h-[110%]' src={preloaderbgmob} />
            <img className='w-[248px] md:w-[443px] animate-spin' src={preloaderfg} />
        </div>
    );
};

export default Preloader;
