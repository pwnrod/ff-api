import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

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

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [navRef]);

    return (
        <header className='px-6'>
            <section
                id='header'
                className='ff-dialog max-w-5xl mx-auto flex justify-between items-center mt-2'
            >
                <div className='flex items-center space-x-6'>
                    <img
                        src='../../public/logo.jpg'
                        alt='a stupid AI generated logo'
                        className='rounded-full w-20'
                    />
                    <h2 className='text-3xl text-white text-center font-medium'>
                        Final Fantasy
                        <br />
                        Encyclopedia
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
                    className='text-white text-xl max-w-5xl mx-auto relative'
                    aria-label='main'
                >
                    <ul className='ff-dialog mt-1 max-w-[10rem] ml-auto absolute right-0 px-12'>
                        <li>
                            <Link className='block relative' to={`games`}>
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link className='block relative' to={`characters`}>
                                Characters
                            </Link>
                        </li>
                        <li>
                            <Link className='block relative' to={`monsters`}>
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
