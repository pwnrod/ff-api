import { useEffect, useState } from 'react';

const Time = () => {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    useEffect(() => {
        const update = () => {
            const date = new Date();
            setHour(padNumber(date.getHours()));
            setMinute(padNumber(date.getMinutes()));
            setSecond(padNumber(date.getSeconds()));
        };

        update();

        const interval = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-between items-center space-x-3'>
            <p>Time</p>
            <div className='text-bold w-20 text-right'>
                <span>{hour}</span>:<span>{minute}</span>:<span>{second}</span>
            </div>
        </div>
    );
};

const padNumber = (num: number) => {
    return num.toString().padStart(2, '0');
};

export default Time;
