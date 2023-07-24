import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import StatusBar from '../components/common/StatusBar';
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
