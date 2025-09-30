import React from 'react';

type TimePickerProps = {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
};

const TimePicker: React.FC<TimePickerProps> = ({
    name = 'time-input',
    value,
    defaultValue,
    onChange,
    disabled = false,
    className = '',
    label,
}) => {
    return (
        <div className={`a-time-input ${className} relative`}>
            {label && <label>{label}</label>}
            <input
                type="time"
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={disabled}
            />
            <button type="button" className="a-time-input__button date-inputs-button-fix" aria-label="open dialog">
            </button>
        </div>
    );
};

export default TimePicker;
