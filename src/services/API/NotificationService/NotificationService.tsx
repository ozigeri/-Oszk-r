import Notification from '@/components/UI/Notification/Notification';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';

const containerId = 'notification-service-dom';

type NotificationVariant = 'neutral' | 'success' | 'error' | 'warning';

let reactRoot: Root | null = null;

const getOrCreateRoot = (container: Element) => {
    if (reactRoot) return reactRoot;
    reactRoot = createRoot(container);
    return reactRoot;
};

const NotificationService = {
    show(variant: NotificationVariant, content: React.ReactNode, durationInMs: number = 0) {
        const bannerDOM = document.getElementById(containerId);
        if (!bannerDOM) {
            console.warn('Notification DOM not found');
            return;
        }

        const root = getOrCreateRoot(bannerDOM);

        root.render(
            <Notification variant={variant} banner>
                {content}
            </Notification>
        );

        setTimeout(() => {
            bannerDOM.classList.add('-show');
        }, 10);

        if (durationInMs) {
            setTimeout(() => {
                bannerDOM.classList.remove('-show');
            }, durationInMs);
        }
    },

    hide() {
        const bannerDOM = document.getElementById(containerId);
        if (!bannerDOM) return;

        bannerDOM.classList.remove('-show');

        if (reactRoot) {
            reactRoot.unmount();
            reactRoot = null;
        }
    },

    success(content: React.ReactNode) {
        this.show('success', content);
    },

    error(content: React.ReactNode) {
        this.show('error', content);
    },

    warning(content: React.ReactNode) {
        this.show('warning', content);
    },

    neutral(content: React.ReactNode) {
        this.show('neutral', content);
    },
};

export default NotificationService;
