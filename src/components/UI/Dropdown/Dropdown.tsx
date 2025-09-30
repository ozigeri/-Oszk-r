type DropdownProps = {
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: { value: string; label: string }[];
    disabled?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options = [], disabled = false }) => {
    return (
        <div className={`a-dropdown ${disabled ? 'a-dropdown--disabled' : ''}`}>
            <select onChange={onChange} value={value}>
                {options.map((option, idx: number) => {
                    return (
                        <option key={idx} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Dropdown;
