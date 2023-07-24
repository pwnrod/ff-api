import { useRef } from 'react';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../../hooks/useAnimatedPadding';
import NavBar from './NavBar';
import useStatusText from '../../hooks/useStatusText';
import { useAppContext } from '../../hooks/useAppContext';

const Header = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const { isMenuOpen, setIsMenuOpen } = useAppContext();
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuButtonVerb = isMenuOpen ? 'Hide' : 'Show';
    const menuButtonStatusTextHandlers = useStatusText(
        `${menuButtonVerb} the Main Menu`,
    );
    const animatedStyles = useAnimatedPadding();

    return (
        <animated.header
            style={animatedStyles}
            className='max-w-5xl mx-auto relative'
        >
            <section
                id='header'
                className='ff-dialog px-6 py-3 flex justify-between items-center mt-2'
            >
                <div className='flex items-center space-x-6'>
                    <img
                        src='/chocobo.png'
                        alt='a stupid AI generated logo'
                        className='rounded-full w-10'
                    />
                    <h2 className='text-2xl text-white text-center font-medium'>
                        Final Fantasy Encyclopedia
                    </h2>
                </div>
                <div>
                    <button
                        ref={menuButtonRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        {...menuButtonStatusTextHandlers}
                        className='ff-hover-finger text-xl focus:outline-none relative'
                    >
                        {isMenuOpen ? 'Hide Menu' : 'Menu'}
                    </button>
                </div>
            </section>

            <NavBar navRef={navRef} isMenuOpen={isMenuOpen} />
        </animated.header>
    );
};

export default Header;
