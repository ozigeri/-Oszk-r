import React from 'react';
import Button from '../Button/Button';
import NotificationService from '@/services/API/NotificationService/NotificationService';
import './Notification.scss';

type NotificationVariant = 'neutral' | 'success' | 'error' | 'warning';

type NotificationProps = {
    id?: string;
    variant?: NotificationVariant;
    children: React.ReactNode;
    className?: string;
    banner?: boolean;
};

const iconMap: Record<NotificationVariant, string> = {
    neutral: 'alert-neutral',
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
};

const Notification: React.FC<NotificationProps> = ({
    variant = 'neutral',
    children,
    className = '',
    banner = false,
    id,
}) => {
    return (
        <div id={id} className={`a-notification ${banner ? 'notification-banner' : ''} -${variant} ${className}`}>
            <div className="a-notification__content">{children}</div>
            {banner && <Button variant="close" onClick={() => NotificationService.hide()} />}
        </div>
    );
};

export default Notification;
