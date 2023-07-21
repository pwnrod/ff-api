import { createContext, useState } from 'react';

type AppContextProps = {
    pageName: string;
    setPageName: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [pageName, setPageName] = useState<string>('');

    return (
        <AppContext.Provider value={{ pageName, setPageName }}>
            {children}
        </AppContext.Provider>
    );
};
