import { SpringValue } from '@react-spring/web';
import { animated } from '@react-spring/web';
import { useLocation } from 'react-router-dom';

type Props = {
    className?: string;
    style?: {
        opacity: SpringValue<number>;
        right: SpringValue<string>;
    };
};

const PageName = ({ className = '', style }: Props) => {
    const location = useLocation();
    let pageName;
    switch (location.pathname) {
        case '/':
            pageName = 'Home';
            break;
        case '/games':
            pageName = 'Games';
            break;
        case '/characters':
            pageName = 'Characters';
            break;
        case '/monsters':
            pageName = 'Monsters';
            break;
        case '/config':
            pageName = 'Config';
            break;
        default:
            pageName = 'Not Found';
    }

    return (
        <animated.div style={style} className={`ff-dialog ${className}`}>
            <h1 className='text-xl'>{pageName}</h1>
        </animated.div>
    );
};

export const AnimatedPageName = animated(PageName);

export default PageName;
