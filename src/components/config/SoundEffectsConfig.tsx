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
        <div className='flex justify-center'>
            <button
                onClick={handleToggle}
                className='ff-hover-finger relative text-ffLightBlue'
            >
                Sound effects
            </button>
            <p className='ml-32'>
                <span
                    className={`ff-hover-finger relative ${!isSoundOn ? ' text-gray-500' : ''
                        }`}
                    onClick={handleOn}
                >
                    On
                </span>
                <span
                    onClick={handleOff}
                    className={`ff-hover-finger relative ml-16${isSoundOn ? ' text-gray-500' : ''
                        }`}
                >
                    Off
                </span>
            </p>
        </div>
    );
};

export default SoundEffectsConfig;
