import Footer from '../components/Footer';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import { AppProvider } from '../context/AppContext';
import { Outlet } from 'react-router-dom';
import { useStatusMessage } from '../hooks/useStatusMessage';

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

const AppContent = () => {
    useStatusMessage();

    return (
        <div className='px-6'>
            <Header />
            <StatusBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
