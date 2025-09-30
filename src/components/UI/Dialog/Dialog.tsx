import { useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import Button from '../Button/Button';
import './Dialog.scss';

type DialogContextType = {
    close: () => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('Dialog subcomponents must be used within <Dialog>');
    }
    return context;
};

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            if (!dialog.open) dialog.showModal();
        } else {
            if (dialog.open) dialog.close();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClose = () => onClose();
        dialog.addEventListener('close', handleClose);

        return () => {
            dialog.removeEventListener('close', handleClose);
        };
    }, [onClose]);

    // Close dialog on Escape key when open (additional accessibility)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const contextValue = { close: onClose };

    return (
        <DialogContext.Provider value={contextValue}>
            <dialog
                ref={dialogRef}
                className="custom-dialog"
                aria-labelledby="custom-dialog-title"
                role="dialog"
                aria-modal="true"
            >
                {children}
            </dialog>
        </DialogContext.Provider>
    );
};

// Header component with close button
const Header = ({ children }: { children: ReactNode }) => {
    const { close } = useDialog();

    return (
        <div className="custom-dialog__header">
            <span className="custom-dialog__title" id="custom-dialog-title">
                {children}
            </span>
            <Button variant="close" onClick={close}></Button>
        </div>
    );
};

const Body = ({ children }: { children: ReactNode }) => (
    <div className="custom-dialog__content">
        <div className="custom-dialog__body">{children}</div>
    </div>
);

const Footer = ({ children }: { children: ReactNode }) => <div className="custom-dialog__actions">{children}</div>;

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;

export default Dialog;
