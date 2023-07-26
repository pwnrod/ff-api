import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import Hero from '../components/Hero';

const HomePage = () => {
    const animatedStyles = useAnimatedPadding();

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
