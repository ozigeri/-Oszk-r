import React from 'react';

type TextInputProps = {
    name?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'url' | 'tel' | 'search';
    required?: boolean;
    className?: string;
    label?: string;
};

const TextInput: React.FC<TextInputProps> = ({
    required = false,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
    className = '',
    label,
}) => {
    return (
        <div className={`a-text-field ${className}`}>
            {label && <label>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name || undefined}
                required={required}
            />
        </div>
    );
};

export default TextInput;
