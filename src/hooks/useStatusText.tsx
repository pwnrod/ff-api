import { useUpdateStatus } from './useStatus';

const useStatusText = (text: string) => {
    const setStatusText = useUpdateStatus();

    const onMouseEnter = () => setStatusText(text);
    const onMouseLeave = () => setStatusText('');

    return { onMouseEnter, onMouseLeave };
};

export default useStatusText;
