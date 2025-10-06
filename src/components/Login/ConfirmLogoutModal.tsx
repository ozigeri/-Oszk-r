import React from 'react';
import './AuthPanels.scss';

type Props = {
  username: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmLogoutModal: React.FC<Props> = ({ username, onCancel, onConfirm }) => {
  return (
    <div className="auth-overlay" onClick={onCancel}>
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>
        <div className="auth-panel">
          <h2>Kijelentkezés</h2>
          <p>Biztosan kijelentkezel, {username}?</p>
          <div className="ad-modal-actions">
            <button className="primary-button" onClick={onConfirm}>
              Igen, kijelentkezem
            </button>
            <button className="secondary-button" onClick={onCancel}>
              Mégse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
