import { createContext } from 'react';

export const StatusContext = createContext<string | undefined>(undefined);
export const UpdateStatusContext = createContext<
    React.Dispatch<string> | undefined
>(undefined);
