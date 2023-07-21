import { useAppContext } from '../hooks/useAppContext';
import Gil from './Gil';
import Time from './Time';

const Footer = () => {
    const { pageName } = useAppContext();

    return (
        <footer className='max-w-5xl mx-auto text-xl pr-24 relative'>
            <section className='absolute -top-24 right-0 flex flex-col items-end'>
                <div className='ff-dialog p-2'>
                    <Time />
                    <Gil />
                </div>
                <div className='ff-dialog p-2 min-w-[14rem]'>
                    <h1>{pageName}</h1>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
