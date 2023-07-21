import { useEffect, useState, useRef } from 'react';

const MAX_GIL = 99999999;

const Gil = () => {
    const [gil, setGil] = useState(0);
    const victoryFanfareRef = useRef(new Audio('/ff7-fanfare.mp3'));

    useEffect(() => {
        setGil(getRandomGil(20000, 150000));
    }, []);

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
        setGil((prevGil) => {
            const newGil =
                prevGil < MAX_GIL ? getRandomGil(prevGil, MAX_GIL) : prevGil;
            if (newGil === MAX_GIL) {
                void playFanfare();
            }
            return newGil;
        });
    };

    return (
        <div className='flex justify-between items-center'>
            <button className='relative' onClick={handleGilClick}>
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
