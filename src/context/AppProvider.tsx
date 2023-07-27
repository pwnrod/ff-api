import { useState, useReducer } from 'react';
import { AppContext } from './AppContext';
import windowColorReducer from '../reducers/windowColorReducer';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
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
        initialWindowColorState
    );

    return (
        <AppContext.Provider
            value={{
                isMenuOpen,
                setIsMenuOpen,
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
