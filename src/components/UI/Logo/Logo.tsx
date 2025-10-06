import React from 'react';
import './logo.scss';

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img
                src="./Logo.png"
                alt="Oszkár Logo"
                className="logo-image"
            />
        </div>
    );
};

export default Logo;
