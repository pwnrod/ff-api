const Hero = () => {
    return (
        <section
            id='hero'
            className='ff-dialog flex flex-col-reverse justify-center sm:flex-row p-12 items-center gap-8'
        >
            <article className='sm:w-2/3'>
                <h1 className='max-w-md text-3xl font-bold text-center md:text-4xl sm:text-left'>
                    Embark on a Journey Through{' '}
                    <span className='text-cornflowerBlue text-4xl md:text-5xl'>
                        FINAL FANTASY
                    </span>
                </h1>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left leading-none'>
                    Traverse a concise overview of the acclaimed series - a
                    curated selection of games, characters and monsters awaits
                    your discovery.
                </p>
            </article>
            <figure className='sm:w-1/3'>
                <img
                    className='max-w-[15rem] sm:ml-auto w-full'
                    src='/cactuar.png'
                    alt='A cactuar doing cactuar things'
                />
            </figure>
        </section>
    );
};

export default Hero;
