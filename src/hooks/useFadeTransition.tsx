import { useTransition } from '@react-spring/web';

const useFadeTransition = (isMenuOpen: boolean) => {
    return useTransition(isMenuOpen, {
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
        keys: null,
    });
};

export default useFadeTransition;
