import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <main className='max-w-5xl mx-auto'>
            <Hero />
            <hr className='mx-auto bg-black dark:bg-white w-1/2' />
            <section id='explore' className='p-6 my-12'>
                <h3 className='text-4xl font-bold text-center sm:text-3xl mb-6 text-slate-900 dark:text-white'>
                    Explore
                </h3>
                <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'>
                    <li className='w-2/3 sm:width-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-950 py-6 px-2 rounded-3xl shadow-xl'>
                        <img
                            src='../../public/cactuar.png'
                            alt='A cactuar'
                            className='w-1/2 mb-6 max-w-[10rem] mx-auto'
                        />
                        <h4 className='text-2xl text-center text-slate-900 dark:text-white'>
                            Games
                        </h4>
                        <p className='hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                            Delve into the Final Fantasy series' compelling
                            narratives and unforgettable characters.
                        </p>
                    </li>
                    <li className='w-2/3 sm:width-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-950 py-6 px-2 rounded-3xl shadow-xl'>
                        <img
                            src='../../public/cactuar.png'
                            alt='A cactuar'
                            className='w-1/2 mb-6 max-w-[10rem] mx-auto'
                        />
                        <h4 className='text-2xl text-center text-slate-900 dark:text-white'>
                            Characters
                        </h4>
                        <p className='hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                            Meet the Heroes, Villains, and everyone in-between
                            from the Final Fantasy series.
                        </p>
                    </li>
                    <li className='w-2/3 sm:width-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-950 py-6 px-2 rounded-3xl shadow-xl'>
                        <img
                            src='../../public/cactuar.png'
                            alt='A cactuar'
                            className='w-1/2 mb-6 max-w-[10rem] mx-auto'
                        />
                        <h4 className='text-2xl text-center text-slate-900 dark:text-white'>
                            Monsters
                        </h4>
                        <p className='hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                            Encounter the mythical and dangerous creatures that
                            roam the realms of Final Fantasy.
                        </p>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default HomePage;
