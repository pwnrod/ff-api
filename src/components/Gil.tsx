import { useEffect, useState, useRef } from 'react';
import useStatusText from '../hooks/useStatusText';

const MAX_GIL = 99999999;

const Gil = () => {
    const [gil, setGil] = useState(0);
    const victoryFanfareRef = useRef(new Audio('/ff7-fanfare.mp3'));
    const statusTextHandlers = useStatusText('Max it out!');

    useEffect(() => {
        setGil(getRandomGil(20000, 150000));
    }, []);

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
                className='relative'
                onClick={handleGilClick}
            >
                Gil
            </button>
            <span>{gil}</span>
        </div>
    );
};

const getRandomGil = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default Gil;
