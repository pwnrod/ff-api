import { useAppContext } from '../../hooks/useAppContext';
import '../../assets/css/WindowColor.css';

const WindowColorConfig = () => {
    return (
        <div className='flex items-center'>
            <div className='min-w-[15rem]'>
                <button className='ff-hover-finger relative text-ffLightBlue'>
                    Window color
                </button>
            </div>
            <div className='window-gradient grid grid-cols-2 grid-rows-2'>
                <button className='py-3 px-6 relative ff-hover-finger'></button>
                <button className='py-3 px-6 relative ff-hover-finger'></button>
                <button className='py-3 px-6 relative ff-hover-finger'></button>
                <button className='py-3 px-6 relative ff-hover-finger'></button>
            </div>
        </div>
    );
};

export default WindowColorConfig;
