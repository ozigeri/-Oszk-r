import React, { useState } from 'react';
import './header.scss';
import SideNav from '../UI/Sidenav/Sidenav';
import Logo from '../UI/Logo/Logo';
import AdModal from '../AdModal/AdModal';
import AuthModal from '../Login/AuthModal';
import ConfirmLogoutModal from '../Login/ConfirmLogoutModal';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  return (
    <>
      <header className="header">
        <div className="menu-icon" onClick={() => setIsNavOpen(true)}>
          ☰
        </div>

        <div className="center-container">
          <div className="left-group">
            <Logo />
          </div>

          <button className="center-button" onClick={() => setIsAdModalOpen(true)}>
            Hirdetsd meg az utad
          </button>

          <div className="right-group">
            <div className="header-title">
              <h2>!Oszkár</h2>
              <h5>VROOM VROOM</h5>
            </div>
          </div>
        </div>

        <div
          className="profile-icon"
          onClick={() => {
            if (username) {
              setIsLogoutConfirmOpen(true);
            } else {
              setIsAuthModalOpen(true);
            }
          }}
        >
          {username ? `Üdv, ${username}` : 'Bejelentkezés'}
        </div>
      </header>

      <SideNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      {isAdModalOpen && <AdModal onClose={() => setIsAdModalOpen(false)} />}
      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={(name: string) => {
            setUsername(name);
            setIsAuthModalOpen(false);
          }}
        />
      )}
      {isLogoutConfirmOpen && (
        <ConfirmLogoutModal
          username={username!}
          onCancel={() => setIsLogoutConfirmOpen(false)}
          onConfirm={() => {
            setUsername(null);
            setIsLogoutConfirmOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
