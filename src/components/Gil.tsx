import { useEffect, useState } from 'react';

const Gil = () => {
    const [gil, setGil] = useState(0);

    useEffect(() => {
        setGil(getRandomGil(100000, 1000000));
    }, []);

    return (
        <div className='flex justify-between items-center'>
            <p>Gil</p>
            <span>{gil}</span>
        </div>
    );
};

const getRandomGil = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default Gil;
