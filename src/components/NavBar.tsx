import { Link } from 'react-router-dom';
import useStatusText from '../hooks/useStatusText';

type Props = {
    navRef: React.MutableRefObject<HTMLDivElement | null>;
};

const NavBar = ({ navRef }: Props) => {
    const homeStatusTextHandlers = useStatusText('Go to the Homepage');
    const gamesStatusTextHandlers = useStatusText('Go to the Games Page');
    const charactersStatusTextHandlers = useStatusText(
        'Go to the Characters Page'
    );
    const monstersStatusTextHandlers = useStatusText('Go to the Monsters Page');
    const aboutStatusTextHandlers = useStatusText('Go to the About Page');

    return (
        <nav
            id='primay-nav'
            ref={navRef}
            className='text-white text-xl absolute right-0 top-11 z-20'
            aria-label='main'
        >
            <ul className='ff-dialog mt-1 max-w-[10rem] px-6 py-3'>
                <li>
                    <Link
                        {...homeStatusTextHandlers}
                        className='block relative'
                        to={`/`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        {...gamesStatusTextHandlers}
                        className='block relative'
                        to={`games`}
                    >
                        Games
                    </Link>
                </li>
                <li>
                    <Link
                        {...charactersStatusTextHandlers}
                        className='block relative'
                        to={`characters`}
                    >
                        Characters
                    </Link>
                </li>
                <li>
                    <Link
                        {...monstersStatusTextHandlers}
                        className='block relative'
                        to={`monsters`}
                    >
                        Monsters
                    </Link>
                </li>
                <li>
                    <Link
                        {...aboutStatusTextHandlers}
                        className='block relative'
                        to={`about`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
