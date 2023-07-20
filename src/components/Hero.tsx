const Hero = () => {
    return (
        <section
            id='hero'
            className='flex flex-col-reverse justify-center sm:flex-row p-6 md:py-32 items-center gap-8 mb-12'
        >
            <article className='sm:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl sm:text-left text-slate-900 dark:text-white'>
                    Embark on a Journey Through{' '}
                    <span className='text-cornflowerBlue'>Final Fantasy</span>
                </h1>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
                    Explore a concise overview of the acclaimed series - a
                    curated selection of characters, monsters, and games awaits
                    your discovery.
                </p>
            </article>
            <figure className='sm:w-1/2'>
                <img
                    className='max-w-[15rem] md:max-w-xs sm:ml-auto'
                    src='../../public/cactuar.png'
                    alt='A cactuar doing cactuar things'
                />
            </figure>
        </section>
    );
};

export default Hero;
