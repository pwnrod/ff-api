import { Link } from 'react-router-dom';
import { animated } from '@react-spring/web';
import useFadeTransition from '../../hooks/useFadeTransition';
import useStatusText from '../../hooks/useStatusText';

type Props = {
    navRef: React.MutableRefObject<HTMLDivElement | null>;
    isMenuOpen: boolean;
};

const NavBar = ({ navRef, isMenuOpen }: Props) => {
    const homeStatusTextHandlers = useStatusText('Go to the Homepage');
    const gamesStatusTextHandlers = useStatusText('Go to the Games Page');
    const charactersStatusTextHandlers = useStatusText(
        'Go to the Characters Page'
    );
    const monstersStatusTextHandlers = useStatusText('Go to the Monsters Page');
    const configStatusTextHandlers = useStatusText('Go to the Config Page');
    const transitions = useFadeTransition(isMenuOpen);

    return transitions(
        (style, item) =>
            item && (
                <animated.nav
                    id='primay-nav'
                    ref={navRef}
                    style={style}
                    className='text-white text-xl absolute right-0 top-11 z-20'
                    aria-label='main'
                >
                    <ul className='ff-dialog mt-1 max-w-[10rem] px-6 py-3'>
                        <li>
                            <Link
                                {...homeStatusTextHandlers}
                                className='ff-hover-finger block relative'
                                to={`/`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                {...gamesStatusTextHandlers}
                                className='ff-hover-finger block relative'
                                to={`games`}
                            >
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link
                                {...charactersStatusTextHandlers}
                                className='ff-hover-finger block relative'
                                to={`characters`}
                            >
                                Characters
                            </Link>
                        </li>
                        <li>
                            <Link
                                {...monstersStatusTextHandlers}
                                className='ff-hover-finger block relative'
                                to={`monsters`}
                            >
                                Monsters
                            </Link>
                        </li>
                        <li>
                            <Link
                                {...configStatusTextHandlers}
                                className='ff-hover-finger block relative'
                                to={`config`}
                            >
                                Config
                            </Link>
                        </li>
                    </ul>
                </animated.nav>
            )
    );
};

export default NavBar;
