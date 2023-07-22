import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(true);
    const navRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const menuButtonVerb = isMenuExpanded ? 'Hide' : 'Show';

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
                        data-message={`${menuButtonVerb} the Main Menu`}
                        className='text-xl focus:outline-none relative'
                    >
                        {isMenuExpanded ? 'Hide Menu' : 'Menu'}
                    </button>
                </div>
            </section>

            {isMenuExpanded && (
                <nav
                    id='primay-nav'
                    ref={navRef}
                    className='text-white text-xl absolute right-0 top-11 z-20'
                    aria-label='main'
                >
                    <ul className='ff-dialog mt-1 max-w-[10rem] px-6 py-3'>
                        <li>
                            <Link
                                data-message='Go to the Homepage'
                                className='block relative'
                                to={`/`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-message='Go to the Games Page'
                                className='block relative'
                                to={`games`}
                            >
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-message='Go to the Characters Page'
                                className='block relative'
                                to={`characters`}
                            >
                                Characters
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-message='Go to the Monsters Page'
                                className='block relative'
                                to={`monsters`}
                            >
                                Monsters
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-message='Go to the About Page'
                                className='block relative'
                                to={`about`}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
