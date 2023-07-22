import { useAppContext } from '../hooks/useAppContext';

const StatusBar = () => {
    const { statusMessage } = useAppContext();
    const isEmptyMessage = statusMessage === '';

    return (
        <section className='max-w-5xl mx-auto pr-24 relative'>
            <div className='ff-dialog px-6 py-1'>
                <p className={`text-2xl ${isEmptyMessage ? 'opacity-0' : ''}`}>
                    {isEmptyMessage
                        ? 'Waiting to be helpful...'
                        : statusMessage}
                </p>
            </div>
        </section>
    );
};

export default StatusBar;
