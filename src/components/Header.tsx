import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-6 py-4 bg-gray-700 flex justify-between items-center mb-8'>
            <div className='flex items-center space-x-6'>
                <img
                    src='../../public/logo.jpg'
                    alt='a stupid AI generated logo'
                    className='rounded-full w-20'
                />
                <p className='text-3xl text-white text-center'>
                    Final Fantasy
                    <br />
                    Encyclopedia
                </p>
            </div>
            <nav id='primay-nav' className='text-white text-xl'>
                <ul className='flex space-x-6'>
                    <li>
                        <Link to={`games`}>Games</Link>
                    </li>
                    <li>
                        <Link to={`characters`}>Characters</Link>
                    </li>
                    <li>
                        <Link to={`monsters`}>Monsters</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
