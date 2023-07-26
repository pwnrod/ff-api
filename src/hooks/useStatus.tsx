import { useContext } from 'react';
import { StatusContext, UpdateStatusContext } from '../context/StatusContexts';

const useStatus = () => {
    const context = useContext(StatusContext);
    if (context === undefined) {
        throw new Error('useStatus must be used within a StatusProvider');
    }
    return context;
};

const useUpdateStatus = () => {
    const context = useContext(UpdateStatusContext);
    if (context === undefined) {
        throw new Error('useUpdateStatus must be used within a StatusProvider');
    }
    return context;
};

export { useStatus, useUpdateStatus };
