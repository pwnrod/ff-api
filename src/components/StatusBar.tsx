import { useAppContext } from '../hooks/useAppContext';

const StatusBar = () => {
    const { statusText, isMenuOpen } = useAppContext();
    const isEmptyText = statusText === '';

    return (
        <section
            className={`max-w-5xl mx-auto relative${isMenuOpen ? ' pr-24' : ''
                }`}
        >
            <div className='ff-dialog px-6 py-1'>
                <p className={`text-2xl ${isEmptyText ? 'opacity-0' : ''}`}>
                    {isEmptyText ? 'Waiting to be helpful...' : statusText}
                </p>
            </div>
        </section>
    );
};

export default StatusBar;
