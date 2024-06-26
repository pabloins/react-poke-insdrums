import React from 'react';
import Providers from './Providers';
import "./index.css";
import AppRoutes from './routes/index';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SearchModal from './components/SearchModal/SearchModal';

const App: React.FC = () => {
    return (
        <Providers >
            <div className='background-gif'>
                <NavigationBar />
                <div className='mt-5 mb-5 w-9/12 mx-auto'>
                    <AppRoutes />
                </div>
                <SearchModal />
            </div>
        </Providers>
    );
}

export default App;