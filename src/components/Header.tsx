import { useState, useRef } from 'react';
import NavBar from './NavBar';
import useStatusText from '../hooks/useStatusText';

const Header = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(true);
    const navRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuButtonVerb = isMenuExpanded ? 'Hide' : 'Show';
    const menuButtonStatusTextHandlers = useStatusText(
        `${menuButtonVerb} the Main Menu`
    );

    return (
        <header className='max-w-5xl mx-auto pr-24 relative'>
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
                        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                        {...menuButtonStatusTextHandlers}
                        className='text-xl focus:outline-none relative'
                    >
                        {isMenuExpanded ? 'Hide Menu' : 'Menu'}
                    </button>
                </div>
            </section>

            {isMenuExpanded && <NavBar navRef={navRef} />}
        </header>
    );
};

export default Header;
