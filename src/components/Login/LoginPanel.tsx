import React, { useState } from 'react';
import './AuthPanels.scss';

type Props = {
  onSwitchToRegister: () => void;
  onLogin: (username: string) => void;
};

const LoginPanel: React.FC<Props> = ({ onSwitchToRegister, onLogin }) => {
  const [inputName, setInputName] = useState('');

  return (
    <div className="auth-panel">
      <h2>Bejelentkezés</h2>
      <input
        type="text"
        placeholder="Felhasználónév"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input type="password" placeholder="Jelszó" />
      <button className="primary-button" onClick={() => onLogin(inputName)}>
        Bejelentkezés
      </button>
      <button className="secondary-button" onClick={onSwitchToRegister}>
        Még nem vagyok tagja a csapatnak, regisztrálok
      </button>
    </div>
  );
};

export default LoginPanel;
