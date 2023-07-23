import { useAppContext } from '../hooks/useAppContext';
import { useEffect } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import Hero from '../components/Hero';

const HomePage = () => {
    const { setPageName } = useAppContext();
    const animatedStyles = useAnimatedPadding();

    useEffect(() => {
        setPageName('Homepage');
    }, [setPageName]);

    return (
        <animated.main
            style={animatedStyles}
            className={`max-w-5xl mx-auto relative`}
        >
            <Hero />
        </animated.main>
    );
};

export default HomePage;
