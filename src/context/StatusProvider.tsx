import { useState } from 'react';
import { StatusContext, UpdateStatusContext } from './StatusContexts';

type StatusProviderProps = {
    children: React.ReactNode;
};

export const StatusProvider = ({ children }: StatusProviderProps) => {
    const [statusText, setStatusText] = useState('');

    return (
        <StatusContext.Provider value={statusText}>
            <UpdateStatusContext.Provider value={setStatusText}>
                {children}
            </UpdateStatusContext.Provider>
        </StatusContext.Provider>
    );
};
