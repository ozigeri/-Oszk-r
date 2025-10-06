import React from 'react';
import './AuthPanels.scss';

const RegisterPanel: React.FC = () => {
  return (
    <div className="auth-panel">
      <h2>Regisztráció</h2>
      <input type="text" placeholder="Vezetéknév" />
      <input type="text" placeholder="Keresztnév" />
      <input type="text" placeholder="Felhasználónév" />
      <input type="password" placeholder="Jelszó" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Telefonszám" />
      <input type="date" placeholder="Születési dátum" />
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          Elfogadom a szerződési feltételeket.
        </label>
        <label>
          <input type="checkbox" />
          Feliratkozás a hírlevélre.
        </label>
      </div>
      <button className="primary-button">Csatlakozok a csapathoz</button>
    </div>
  );
};

export default RegisterPanel;
