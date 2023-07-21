import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current?.contains(e.target as Node) &&
                !menuButtonRef.current?.contains(e.target as Node)
            ) {
                setIsMenuExpanded(false);
            }
        };

        const handleEsc = () => {
            setIsMenuExpanded(false);
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [navRef]);

    return (
        <header className='max-w-5xl mx-auto'>
            <section
                id='header'
                className='ff-dialog max-w-4xl mx-auto px-6 py-3 flex justify-between items-center mt-2'
            >
                <div className='flex items-center space-x-6'>
                    <img
                        src='../../public/chocobo.png'
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
                        className='text-xl focus:outline-none relative'
                    >
                        Menu
                    </button>
                </div>
            </section>

            {isMenuExpanded && (
                <nav
                    id='primay-nav'
                    ref={navRef}
                    className='text-white text-xl relative'
                    aria-label='main'
                >
                    <ul className='ff-dialog mt-1 max-w-[10rem] ml-auto absolute right-0 -top-5 px-6 py-3'>
                        <li>
                            <Link
                                tabIndex={-1}
                                className='block relative'
                                to={`games`}
                            >
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link
                                tabIndex={-1}
                                className='block relative'
                                to={`characters`}
                            >
                                Characters
                            </Link>
                        </li>
                        <li>
                            <Link
                                tabIndex={-1}
                                className='block relative'
                                to={`monsters`}
                            >
                                Monsters
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
