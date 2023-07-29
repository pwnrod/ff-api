import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import StatusBar from '../components/common/StatusBar';
import { useAppContext } from '../hooks/useAppContext';
import { AppProvider } from '../context/AppProvider';
import { Outlet } from 'react-router-dom';
import { StatusProvider } from '../context/StatusProvider';

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

const AppContent = () => {
    const { isCursorBuster } = useAppContext();

    return (
        <div className={`px-6${isCursorBuster ? ' busterSwordCursor' : ''}`}>
            <StatusProvider>
                <Header />
                <StatusBar />
                <Outlet />
                <Footer />
            </StatusProvider>
        </div>
    );
};

export default App;
