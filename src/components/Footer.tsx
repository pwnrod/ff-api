import { useAppContext } from '../hooks/useAppContext';
import { animated } from '@react-spring/web';
import useFadeTransition from '../hooks/useFadeTransition';
import PageName from './PageName';
import Gil from './Gil';
import Time from './Time';

const Footer = () => {
    const { isMenuOpen } = useAppContext();
    const transitions = useFadeTransition(isMenuOpen);

    return transitions(
        (style, item) =>
            item && (
                <footer className='max-w-5xl mx-auto text-xl pr-24 relative'>
                    <animated.section
                        style={style}
                        className='absolute -top-24 right-0 flex flex-col items-end'
                    >
                        <div className='ff-dialog p-2'>
                            <Time />
                            <Gil />
                        </div>
                        <PageName className='p-2 min-w-[14rem]' />
                    </animated.section>
                </footer>
            )
    );
};

export default Footer;
