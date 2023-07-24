import { useEffect, useRef } from 'react';
import useStatusText from '../hooks/useStatusText';
import { useAppContext } from '../hooks/useAppContext';
import { getRandomGil } from '../utils/utils';

const MAX_GIL = 99999999;

const Gil = () => {
    const victoryFanfareRef = useRef(new Audio('/ff7-fanfare.mp3'));
    const statusTextHandlers = useStatusText('Max it out!');
    const { gil, setGil } = useAppContext();

    useEffect(() => {
        if (gil === MAX_GIL) {
            void playFanfare();
        }
    }, [gil]);

    const playFanfare = async () => {
        const fanfare = victoryFanfareRef.current;
        fanfare.volume = 0.4;
        fanfare.pause();
        fanfare.currentTime = 0;

        try {
            await fanfare.play();
        } catch (error) {
            console.error('Failed to play the secret music... bummer: ', error);
        }
    };

    const handleGilClick = () => {
        setGil(getRandomGil(gil, MAX_GIL));
    };

    return (
        <div className='flex justify-between items-center'>
            <button
                {...statusTextHandlers}
                className='ff-hover-finger relative'
                onClick={handleGilClick}
            >
                Gil
            </button>
            <span>{gil}</span>
        </div>
    );
};

export default Gil;
