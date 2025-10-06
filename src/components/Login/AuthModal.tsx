import React, { useState } from 'react';
import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';
import './AuthPanels.scss';

type Props = {
  onClose: () => void;
  onLogin: (username: string) => void;
};

const AuthModal: React.FC<Props> = ({ onClose, onLogin }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>
        {showRegister ? (
          <RegisterPanel />
        ) : (
          <LoginPanel
            onSwitchToRegister={() => setShowRegister(true)}
            onLogin={onLogin}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
