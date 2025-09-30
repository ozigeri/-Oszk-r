import React from 'react';

type DatePickerProps = {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
    name = 'date-input',
    value,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    label,
}) => {
    return (
        <div className={`a-date-input relative ${className}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type="date"
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={disabled}
            />
            <button type="button" className="a-date-input__button date-inputs-button-fix" aria-label="open dialog">
            </button>
        </div>
    );
};

export default DatePicker;
