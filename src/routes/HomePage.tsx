import { useAppContext } from '../hooks/useAppContext';
import { useEffect } from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
    const { setPageName, isMenuOpen } = useAppContext();

    useEffect(() => {
        setPageName('Homepage');
    }, [setPageName]);

    return (
        <main
            className={`max-w-5xl mx-auto relative${isMenuOpen ? ' pr-24' : ''
                }`}
        >
            <Hero />
        </main>
    );
};

export default HomePage;
