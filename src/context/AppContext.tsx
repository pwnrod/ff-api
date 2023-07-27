import { createContext } from 'react';
import { WindowColorAction } from '../reducers/windowColorReducer';

type AppContextProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSoundOn: boolean;
    setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
    isCursorBuster: boolean;
    setIsCursorBuster: React.Dispatch<React.SetStateAction<boolean>>;
    windowColorDispatch: React.Dispatch<WindowColorAction>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);
