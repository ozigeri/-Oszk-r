import { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/Layout';
import Entrypoint from './Entrypoint';
import Demo from '@/components/Demo/Demo';
import { Toaster } from 'react-hot-toast';
import LoginSuccess from '@/components/Auth/LoginSuccess';
import LoginScreen from '@/components/Auth/LoginScreen';
import LoginFailedClientSide from '@/components/Auth/LoginFailedClientSide';
import UIWrapperShowcase from './components/UI/UIWrapperShowcase';
import Settings from '@/pages/Settings/Settings';
import { validateToken } from '@/components/Auth/AuthFunctions';
import { useSelector } from 'react-redux';
import NotFound from '@/pages/NotFound/NotFound';
import useUser from './hooks/useUser';
import DotEnv from '@/utils/DotEnv';
import LocationListener from './LocationListener';
import DriverAdPage from './pages/DriverAdPage/DriverAdPage';
import PassengerAdPage from './pages/PassangerAdPage/PassangerAdPage';



function App() {
    const theme = useSelector((state: any) => state.theme);
    const isDarkMode = theme.isDarkMode;
    const user = useUser();
    useEffect(() => {
        try {
            (window as any)?.initFrontendKit();
        } catch (ex) {
            console.error('Failed to initialize frontend kit', ex);
        }

        if (user.firstName && DotEnv.authEnabled) {
            validateToken();
        }
    }, []);

    useEffect(() => {
        const rootElement = document.getElementById('html');
        if (rootElement) {
            rootElement.className = '';
            rootElement.classList.add(isDarkMode ? '-dark-mode' : '-light-mode');
            localStorage.setItem('isDarkMode', isDarkMode);
        }
    }, [isDarkMode]);

    return (
        <>
            <Toaster position="bottom-center" />
            <div id="notification-service-dom"></div>
            <BrowserRouter>
                <LocationListener />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Entrypoint />} />
                        <Route path="/driver" element={<DriverAdPage />} />
                        <Route path="/passenger" element={<PassengerAdPage />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/settings/app" element={<Settings />} />
                        <Route path="/ui-showcase" element={<UIWrapperShowcase />} />

                        {/* Auth routeok */}
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/login-success" element={<LoginSuccess />} />
                        <Route path="/client-failed" element={<LoginFailedClientSide />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
