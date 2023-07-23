import { useAppContext } from '../hooks/useAppContext';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';

const StatusBar = () => {
    const { statusText } = useAppContext();
    const isEmptyText = statusText === '';
    const animatedStyles = useAnimatedPadding();

    return (
        <animated.section
            style={animatedStyles}
            className={`max-w-5xl mx-auto relative`}
        >
            <div className='ff-dialog px-6 py-1'>
                <p className={`text-2xl ${isEmptyText ? 'opacity-0' : ''}`}>
                    {isEmptyText ? 'Waiting to be helpful...' : statusText}
                </p>
            </div>
        </animated.section>
    );
};

export default StatusBar;
