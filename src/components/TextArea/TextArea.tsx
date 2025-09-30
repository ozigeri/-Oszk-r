import React from 'react';

type TextAreaProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ label, placeholder, value, onChange }: TextAreaProps) => {
    return (
        <div className="a-text-area">
            {label && <label>{label}</label>}
            <textarea placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default TextArea;
