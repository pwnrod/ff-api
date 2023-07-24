import { useAppContext } from '../hooks/useAppContext';
import { useEffect } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import SoundEffectsConfig from '../components/config/SoundEffectsConfig';

const ConfigPage = () => {
    const { setPageName } = useAppContext();
    const animatedStyles = useAnimatedPadding();

    useEffect(() => {
        setPageName('Config');
    }, [setPageName]);

    return (
        <animated.main
            style={animatedStyles}
            className={`max-w-5xl mx-auto relative`}
        >
            <div className='ff-dialog min-h-[20rem] p-12 flex flex-col text-2xl'>
                <SoundEffectsConfig />
            </div>
        </animated.main>
    );
};

export default ConfigPage;
