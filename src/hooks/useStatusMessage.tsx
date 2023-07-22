import { useEffect } from 'react';
import { useAppContext } from './useAppContext';

export const useStatusMessage = () => {
    const { setStatusMessage } = useAppContext();

    useEffect(() => {
        const handleMouseOver = (event: MouseEvent) => {
            const el = event.target as HTMLElement;
            let message = el.getAttribute('data-message');
            if (message) {
                if (message.length > 80) {
                    message = message.slice(0, 80) + '...';
                }
                setStatusMessage(message);
            }
        };

        const handleMouseOut = () => {
            setStatusMessage('');
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [setStatusMessage]);
};
