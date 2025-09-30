import React from 'react';

type ToggleProps = {
    leftLabel?: string;
    rightLabel?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    id?: string;
};

const Toggle = ({ leftLabel, rightLabel, checked, onChange }: ToggleProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    return (
        <div className="a-toggle">
            <label>
                <input type="checkbox" role="switch" checked={checked} onChange={handleChange} />
                {leftLabel && <span className="a-toggle__label a-toggle__label--left">{leftLabel}</span>}
                <div className="a-toggle__trigger"></div>
                {rightLabel && <span className="a-toggle__label a-toggle__label--right">{rightLabel}</span>}
            </label>
        </div>
    );
};

export default Toggle;
