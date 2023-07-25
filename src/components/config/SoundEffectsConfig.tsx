import { useAppContext } from '../../hooks/useAppContext';

const SoundEffectsConfig = () => {
    const { isSoundOn, setIsSoundOn } = useAppContext();

    const handleToggle = () => {
        setIsSoundOn(!isSoundOn);
    };

    const handleOn = () => {
        setIsSoundOn(true);
    };

    const handleOff = () => {
        setIsSoundOn(false);
    };

    return (
        <div className='flex'>
            <div className='min-w-[15rem]'>
                <button
                    onClick={handleToggle}
                    className='ff-hover-finger relative text-ffLightBlue'
                >
                    Sound effects
                </button>
            </div>
            <p>
                <span
                    className={`ff-hover-finger relative mr-16${!isSoundOn ? ' text-gray-500' : ''
                        }`}
                    onClick={handleOn}
                >
                    On
                </span>
                <span
                    onClick={handleOff}
                    className={`ff-hover-finger relative${isSoundOn ? ' text-gray-500' : ''
                        }`}
                >
                    Off
                </span>
            </p>
        </div>
    );
};

export default SoundEffectsConfig;
