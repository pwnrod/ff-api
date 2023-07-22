import { useAppContext } from './useAppContext';

const useStatusText = (text: string) => {
    const { setStatusText } = useAppContext();

    const onMouseEnter = () => setStatusText(text);
    const onMouseLeave = () => setStatusText('');

    return { onMouseEnter, onMouseLeave };
};

export default useStatusText;
