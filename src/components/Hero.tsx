import { useState } from 'react';
import useStatusText from '../hooks/useStatusText';
import { animated, useSpring } from '@react-spring/web';

const Hero = () => {
    const [isCactuarClicked, setIsCactuarClicked] = useState<boolean>(false);
    const rotationStyles = useSpring({
        transform: isCactuarClicked ? 'rotateY(900deg)' : 'rotateY(0deg)',
        config: { mass: 2, tension: 185, friction: 80 },
    });
    const cactuarStatusTextHandlers = useStatusText(
        'So graceful... send it for a spin.',
    );

    return (
        <section
            id='hero'
            className='ff-dialog flex flex-col-reverse justify-center sm:flex-row p-12 items-center gap-8'
        >
            <article className='sm:w-2/3'>
                <h1 className='max-w-md text-3xl font-bold text-center md:text-4xl sm:text-left'>
                    Embark on a Journey Through{' '}
                    <span className='text-ffLightBlue text-4xl md:text-5xl'>
                        FINAL FANTASY
                    </span>
                </h1>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left leading-none'>
                    Traverse a concise overview of the acclaimed series - a
                    curated selection of games, characters and monsters awaits
                    your discovery.
                </p>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left leading-none'>
                    (The{' '}
                    <a href='www.moogleapi.com' target='_blank'>
                        moogleAPI
                    </a>{' '}
                    doesn't expose a whole lot of data and is no longer
                    maintained. Thankfully there's still enough to have some fun
                    with!)
                </p>
            </article>
            <figure className='ff-hover-finger sm:w-1/3'>
                <animated.img
                    onClick={() => setIsCactuarClicked(!isCactuarClicked)}
                    {...cactuarStatusTextHandlers}
                    style={rotationStyles}
                    className='max-w-[15rem] sm:ml-auto w-full'
                    src='/cactuar.png'
                    alt='A cactuar doing cactuar things'
                />
            </figure>
        </section>
    );
};

export default Hero;
