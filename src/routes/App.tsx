import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppProvider } from '../context/AppContext';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <AppProvider>
            <div className='px-6'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </AppProvider>
    );
};

export default App;
