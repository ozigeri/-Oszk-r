import React from 'react';

type CheckboxProps = {
    label: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    defaultChecked = false,
    disabled = false,
    name,
    onChange,
    className = '',
}) => {
    const checkboxId = `checkbox-${(label || '').replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className={`a-checkbox ${className}`}>
            <input
                type="checkbox"
                id={checkboxId}
                name={name}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
            />
            <label htmlFor={checkboxId}>{label}</label>
        </div>
    );
};

export default Checkbox;
