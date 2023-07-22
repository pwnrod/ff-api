import { useAppContext } from '../hooks/useAppContext';

const StatusBar = () => {
    const { statusText } = useAppContext();
    const isEmptyText = statusText === '';

    return (
        <section className='max-w-5xl mx-auto pr-24 relative'>
            <div className='ff-dialog px-6 py-1'>
                <p className={`text-2xl ${isEmptyText ? 'opacity-0' : ''}`}>
                    {isEmptyText ? 'Waiting to be helpful...' : statusText}
                </p>
            </div>
        </section>
    );
};

export default StatusBar;
