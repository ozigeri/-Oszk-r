import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationListener = () => {
    const location = useLocation();

    useEffect(() => {
        try {
            (window as any)?.initFrontendKit();
        } catch (ex) {
            console.error('Failed to initialize frontend kit', ex);
        }

    }, [location]);

    return null;
};

export default LocationListener;