import React from 'react';
import './OptionBar.scss';

type Option = {
    value: string;
    label?: string;
    icon?: string;
};

type OptionBarProps = {
    name: string;
    options: Option[];
    selected: string;
    onChange: (value: string) => void;
    variant?: 'label' | 'with-icon';
};

const OptionBar: React.FC<OptionBarProps> = ({ name, options, selected, onChange, variant = 'label' }) => {
    return (
        <ul className="a-option-bar">
            {options.map((option, index) => {
                const id = `${name}-${index}`;
                const isSelected = selected === option.value;

                return (
                    <li className="a-option-bar__item" key={option.value}>
                        <input
                            type="radio"
                            id={id}
                            name={name}
                            checked={isSelected}
                            onChange={() => onChange(option.value)}
                        />
                        <label className="a-option-bar__option" htmlFor={id}>
                            {variant === 'with-icon' && option.icon}

                            <span className="a-option-bar__label">{option.label}</span>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default OptionBar;
