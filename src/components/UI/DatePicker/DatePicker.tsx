import React from 'react';
import './DatePicker.scss';

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
        </div>
    );
};

export default DatePicker;
