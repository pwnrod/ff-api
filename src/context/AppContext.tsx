import { createContext, useState } from 'react';
import { getRandomGil } from '../utils/utils';

type AppContextProps = {
    pageName: string;
    setPageName: React.Dispatch<React.SetStateAction<string>>;
    statusText: string;
    setStatusText: React.Dispatch<React.SetStateAction<string>>;
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    gil: number;
    setGil: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [pageName, setPageName] = useState<string>('');
    const [statusText, setStatusText] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    const [gil, setGil] = useState(() => getRandomGil(20000, 150000));

    return (
        <AppContext.Provider
            value={{
                pageName,
                setPageName,
                statusText,
                setStatusText,
                isMenuOpen,
                setIsMenuOpen,
                gil,
                setGil,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
