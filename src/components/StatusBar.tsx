import { useAppContext } from '../hooks/useAppContext';
import { animated, useSpring } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import PageName from './PageName';

const StatusBar = () => {
    const { statusText, isMenuOpen } = useAppContext();
    const isEmptyText = statusText === '';
    const animatedStyles = useAnimatedPadding();
    const springs = useSpring({
        opacity: isMenuOpen ? 0 : 1,
        right: isMenuOpen ? '6rem' : '0rem',
    });

    return (
        <>
            <animated.section
                style={animatedStyles}
                className={`max-w-5xl mx-auto relative`}
            >
                <div className='ff-dialog px-6 py-1'>
                    <p className={`text-2xl ${isEmptyText ? 'opacity-0' : ''}`}>
                        {isEmptyText ? 'Waiting to be helpful...' : statusText}
                    </p>
                </div>
                <PageName
                    style={springs}
                    className='px-6 py-1 absolute right-0 z-20'
                />
            </animated.section>
        </>
    );
};

export default StatusBar;
