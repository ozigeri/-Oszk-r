import React from 'react';
import './DateTimePicker.scss';

type DateTimePickerProps = {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
    name = 'datetime-input',
    value,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    label,
}) => {
    return (
        <div className={`a-datetime-input ${className} relative`}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type="datetime-local"
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default DateTimePicker;
