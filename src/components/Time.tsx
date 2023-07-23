import { useEffect, useState } from 'react';
import useStatusText from '../hooks/useStatusText';
import { useAppContext } from '../hooks/useAppContext';

const Time = () => {
    const { setStatusText } = useAppContext();
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [isClockMaxed, setIsClockMaxed] = useState(false);
    const easterEggMessage = "What's this?";
    const clockMaxedMessage = 'Did it break?';
    const statusText = !isClockMaxed ? easterEggMessage : clockMaxedMessage;
    const statusTextHandlers = useStatusText(statusText);

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

    const handleTimeClick = () => {
        setIsClockMaxed(!isClockMaxed);
        const statusText = isClockMaxed ? easterEggMessage : clockMaxedMessage;
        setStatusText(statusText);
    };

    const hourDisplay = isClockMaxed ? '99' : hour;
    const minuteDisplay = isClockMaxed ? '59' : minute;
    const secondDisplay = isClockMaxed ? '59' : second;

    return (
        <div className='flex justify-between items-center space-x-3'>
            <button
                {...statusTextHandlers}
                className='relative'
                onClick={handleTimeClick}
            >
                Time
            </button>
            <div className='text-bold w-20 text-right'>
                <span>{hourDisplay}</span>:<span>{minuteDisplay}</span>:
                <span>{secondDisplay}</span>
            </div>
        </div>
    );
};

const padNumber = (num: number) => {
    return num.toString().padStart(2, '0');
};

export default Time;
