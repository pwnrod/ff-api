import { SpringValue } from '@react-spring/web';
import { animated } from '@react-spring/web';
import { useAppContext } from '../../hooks/useAppContext';

type Props = {
    className?: string;
    style?: {
        opacity: SpringValue<number>;
        right: SpringValue<string>;
    };
};

const PageName = ({ className = '', style }: Props) => {
    const { pageName } = useAppContext();

    return (
        <animated.div style={style} className={`ff-dialog ${className}`}>
            <h1 className='text-xl'>{pageName}</h1>
        </animated.div>
    );
};

export const AnimatedPageName = animated(PageName);

export default PageName;
