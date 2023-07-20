import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slateBlue text-white z-10'>
            <section className='max-w-5xl mx-auto p-4 flex justify-between items-center'>
                <div className='flex items-center space-x-6'>
                    <img
                        src='../../public/logo.jpg'
                        alt='a stupid AI generated logo'
                        className='rounded-full w-20'
                    />
                    <h2 className='text-3xl text-white text-center font-medium'>
                        Final Fantasy
                        <br />
                        Encyclopedia
                    </h2>
                </div>
                <div>
                    <button className='text-3xl sm:hidden focus:outline-none'>
                        &#9776;
                    </button>
                </div>
                <nav
                    id='primay-nav'
                    className='hidden sm:block space-x-8 text-white text-xl'
                    aria-label='main'
                >
                    <Link className='hover:opacity-90' to={`games`}>
                        Games
                    </Link>
                    <Link className='hover:opacity-90' to={`characters`}>
                        Characters
                    </Link>
                    <Link className='hover:opacity-90' to={`monsters`}>
                        Monsters
                    </Link>
                </nav>
            </section>
        </header>
    );
};

export default Header;
