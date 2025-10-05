import React, { useState } from 'react';
import './header.scss';
import SideNav from '../UI/Sidenav/Sidenav';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="menu-icon" onClick={() => setIsNavOpen(true)}>
                    ☰
                </div>
                <button className="center-button">Hirdetsd meg az utad</button>
                <div className="profile-icon">👤</div>
            </header>
            <SideNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        </>
    );
};

export default Header;
