const Explore = () => {
    return (
        <section id='explore'>
            <div className='ff-dialog py-2'>
                <h3 className='text-2xl font-bold text-center sm:text-3xl text-slate-900 dark:text-white'>
                    Explore
                </h3>
            </div>
            <ul className='ff-dialog p-12 list-none mx-auto flex flex-col sm:flex-row gap-8'>
                <li className='ff-dialog w-2/3 flex flex-col items-center'>
                    <div className='bg-white w-full rounded-t-md pt-6'>
                        <img
                            src='../../public/cactuar.png'
                            alt='A cactuar'
                            className='w-1/2 mb-6 max-w-[10rem] mx-auto'
                        />
                    </div>
                    <h4 className='text-3xl'>Games</h4>
                    <p className='sm:block text-xl text-center mt-2 leading-none'>
                        Delve into the Final Fantasy series' compelling
                        narratives and unforgettable characters.
                    </p>
                </li>
                <li className='ff-dialog w-2/3 flex flex-col items-center py-6 px-3'>
                    <img
                        src='../../public/cactuar.png'
                        alt='A cactuar'
                        className='w-1/2 mb-6 max-w-[10rem] mx-auto '
                    />
                    <h4 className='text-3xl'>Characters</h4>
                    <p className='sm:block text-xl text-center mt-2 leading-none'>
                        Meet the Heroes, Villains, and everyone in-between from
                        the Final Fantasy series.
                    </p>
                </li>
                <li className='ff-dialog w-2/3 flex flex-col items-center py-6 px-3'>
                    <img
                        src='../../public/cactuar.png'
                        alt='A cactuar'
                        className='w-1/2 mb-6 max-w-[10rem] mx-auto'
                    />
                    <h4 className='text-3xl'>Monsters</h4>
                    <p className='sm:block text-xl text-center mt-2 leading-none'>
                        Encounter the mythical and dangerous creatures that roam
                        the realms of Final Fantasy.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Explore;
