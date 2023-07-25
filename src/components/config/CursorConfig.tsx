import { useAppContext } from '../../hooks/useAppContext';

const CursorConfig = () => {
    const { isCursorBuster, setIsCursorBuster } = useAppContext();

    const handleToggle = () => {
        setIsCursorBuster(!isCursorBuster);
    };

    const handleOn = () => {
        setIsCursorBuster(true);
    };

    const handleOff = () => {
        setIsCursorBuster(false);
    };

    return (
        <div className='flex'>
            <div className='min-w-[15rem]'>
                <button
                    onClick={handleToggle}
                    className='ff-hover-finger relative text-ffLightBlue'
                >
                    Cursor
                </button>
            </div>
            <p>
                <span
                    className={`ff-hover-finger relative ${isCursorBuster ? ' text-gray-500' : ''
                        }`}
                    onClick={handleOff}
                >
                    Standard
                </span>
                <span
                    onClick={handleOn}
                    className={`ff-hover-finger relative ml-16${!isCursorBuster ? ' text-gray-500' : ''
                        }`}
                >
                    Buster
                </span>
            </p>
        </div>
    );
};

export default CursorConfig;
