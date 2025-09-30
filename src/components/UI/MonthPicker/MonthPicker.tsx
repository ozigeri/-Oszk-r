import React from 'react';

type MonthPickerProps = {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
};

const MonthPicker: React.FC<MonthPickerProps> = ({
    name = 'month-input',
    value,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    label,
}) => {
    return (
        <div className={`a-month-input ${className}`}>
            {label && <label>{label}</label>}
            <input
                type="month"
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={disabled}
            />
            <button
                style={{
                    zIndex: 1,
                    display: 'flex',
                    position: 'absolute',
                    right: '0',
                    cursor: 'pointer',
                }}
                type="button"
                className="a-month-input__button"
                aria-label="open dialog"
            >
            </button>
        </div>
    );
};

export default MonthPicker;
