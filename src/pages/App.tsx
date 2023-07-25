import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import StatusBar from '../components/common/StatusBar';
import { useAppContext } from '../hooks/useAppContext';
import { AppProvider } from '../context/AppContext';
import { Outlet } from 'react-router-dom';

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
            <Header />
            <StatusBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
