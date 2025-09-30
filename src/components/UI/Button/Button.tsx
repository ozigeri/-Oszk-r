import React, { ReactNode, MouseEvent } from 'react';

type ButtonType = {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'close';
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit';
    className?: string;
};

const Button: React.FC<ButtonType> = ({
    variant = 'primary',
    children = <></>,
    icon,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}) => {
    const PRIMARY_VARIANT_CLASS = 'a-button--primary';
    const SECONDARY_VARIANT_CLASS = 'a-button--secondary';
    const TERTIARY_VARIANT_CLASS = 'a-button--tertiary';
    const CLOSE_BUTTON_CLASS = 'a-button--integrated -without-label';

    const variantClasses = {
        primary: PRIMARY_VARIANT_CLASS,
        secondary: SECONDARY_VARIANT_CLASS,
        tertiary: TERTIARY_VARIANT_CLASS,
        close: CLOSE_BUTTON_CLASS,
    };

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`a-button ${variantClasses[variant] || PRIMARY_VARIANT_CLASS}  ${!icon ? '-without-icon' : ''} 
                        ${variant == 'close' || !children ? '-without-label' : ''} ${className}
                `}
            aria-label={type}
        >
            {variant != 'close' ? (
                <>
                    {icon && icon}
                    <span className="a-button__label">{children}</span>
                </>
            ) : (
                <i className="a-icon a-button__icon ui-ic-close"></i>
            )}
        </button>
    );
};

export default Button;
