import { useAppContext } from '../hooks/useAppContext';
import { useEffect } from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
    const { setPageName } = useAppContext();

    useEffect(() => {
        setPageName('Homepage');
    }, [setPageName]);

    return (
        <main className='max-w-5xl mx-auto pr-24 relative'>
            <Hero />
        </main>
    );
};

export default HomePage;
