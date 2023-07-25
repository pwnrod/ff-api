import { createContext, useReducer, useState } from 'react';
import windowColorReducer, {
    WindowColorAction,
} from '../reducers/windowColorReducer';
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
    isSoundOn: boolean;
    setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
    isCursorBuster: boolean;
    setIsCursorBuster: React.Dispatch<React.SetStateAction<boolean>>;
    windowColorDispatch: React.Dispatch<WindowColorAction>;
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
    const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
    const [isCursorBuster, setIsCursorBuster] = useState<boolean>(false);
    const initialWindowColorState = {
        topLeftCornerColor: 'var(--top-left-corner)',
        topRightCornerColor: 'var(--top-left-corner)',
        bottomLeftCornerColor: 'var(--top-left-corner)',
        bottomRightCornerColor: 'var(--top-left-corner)',
    };
    const [_, windowColorDispatch] = useReducer(
        windowColorReducer,
        initialWindowColorState,
    );

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
                isSoundOn,
                setIsSoundOn,
                isCursorBuster,
                setIsCursorBuster,
                windowColorDispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
