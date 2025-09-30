import React from 'react';
import './Badge.scss';

type BadgeType = {
    variant?: 'success' | 'warning' | 'error' | 'blue' | 'purple';
    children?: React.ReactNode;
    text?: string;
};

const Badge: React.FC<BadgeType> = ({ variant = 'blue', children = null, text = '' }) => {
    return (
        <div className="badge-icon-example">
            {children}
            <div className={`a-badge -${variant}`} role="status" aria-live="off" data-count="4">
                {text}
            </div>
        </div>
    );
};

export default Badge;
