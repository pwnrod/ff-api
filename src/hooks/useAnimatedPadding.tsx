import { useSpring } from '@react-spring/web';
import { useAppContext } from './useAppContext';

const useAnimatedPadding = () => {
    const { isMenuOpen } = useAppContext();

    const springs = useSpring({
        paddingRight: isMenuOpen ? '6rem' : '0rem',
    });

    return springs;
};

export default useAnimatedPadding;
