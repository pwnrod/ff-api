import { useAppContext } from '../hooks/useAppContext';
import { useEffect } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import SoundEffectsConfig from '../components/config/SoundEffectsConfig';
import WindowColorConfig from '../components/config/WindowColorConfig';
import CursorConfig from '../components/config/CursorConfig';

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
                <div className='max-w-4xl mx-auto space-y-1'>
                    <WindowColorConfig />
                    <SoundEffectsConfig />
                    <CursorConfig />
                </div>
            </div>
        </animated.main>
    );
};

export default ConfigPage;
