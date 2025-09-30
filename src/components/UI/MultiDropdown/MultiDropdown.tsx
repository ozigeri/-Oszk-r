import { useState, useEffect, useRef } from 'react';
import './MultiDropdown.scss';

type Option = {
    value: string;
    label: string;
};

type MultiDropdownProps = {
    options?: Option[];
    defaultSelected?: string[];
    disabled?: boolean;
    onChange?: (selected: string[]) => void;
    placeholder?: string;
    noResultsText?: string;
    selectAll?: boolean;
    singleSelect?: boolean;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
    options = [],
    defaultSelected = [],
    disabled = false,
    onChange,
    placeholder = 'Select options...',
    noResultsText = 'No results',
    selectAll = false,
    singleSelect = false,
}) => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<string[]>(defaultSelected || []);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleDropdown = () => {
        if (disabled) return;

        setIsOpen((prev) => {
            const next = !prev;
            if (!next) {
                setSearch('');
                setHighlightedIndex(-1);
            } else {
                setHighlightedIndex(0);
            }
            return next;
        });

        if (!isOpen) {
            requestAnimationFrame(() => {
                inputRef.current?.focus();
            });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearch('');
                setHighlightedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        onChange?.(selected);
    }, [selected, onChange]);

    useEffect(() => {
        if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
            itemRefs.current[highlightedIndex]?.scrollIntoView({
                block: 'nearest',
            });
        }
    }, [highlightedIndex]);

    const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));

    const toggleSelection = (value: string) => {
        if (singleSelect) {
            setSelected([value]);
            setIsOpen(false);
            setSearch('');
            setHighlightedIndex(-1);
        } else {
            setSelected((prevSelected) =>
                prevSelected.includes(value) ? prevSelected.filter((v) => v !== value) : [...prevSelected, value]
            );
        }
    };

    const toggleSelectAll = () => {
        if (singleSelect) return;

        const filteredValues = filteredOptions.map((opt) => opt.value);
        const allSelected = filteredValues.every((value) => selected.includes(value));

        if (allSelected) {
            setSelected((prevSelected) => prevSelected.filter((value) => !filteredValues.includes(value)));
        } else {
            setSelected((prevSelected) => [
                ...prevSelected,
                ...filteredValues.filter((value) => !prevSelected.includes(value)),
            ]);
        }
    };

    const displayValue = selected
        .map((val) => options.find((o) => o.value === val)?.label)
        .filter(Boolean)
        .join(', ');

    return (
        <div className="custom-multi-dropdown" ref={dropdownRef}>
            <input
                ref={inputRef}
                onFocus={() => setIsOpen(true)}
                value={isOpen ? search : displayValue || ''}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setHighlightedIndex(0);
                }}
                placeholder={selected.length === 0 ? placeholder : ''}
                readOnly={!isOpen}
                disabled={disabled}
                onKeyDown={(e) => {
                    if (!isOpen) return;

                    switch (e.key) {
                        case 'ArrowDown':
                            e.preventDefault();
                            setHighlightedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
                            break;
                        case 'ArrowUp':
                            e.preventDefault();
                            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
                            break;
                        case 'Enter':
                            e.preventDefault();
                            const selectedOption = filteredOptions[highlightedIndex];
                            if (selectedOption) {
                                toggleSelection(selectedOption.value);
                            }
                            break;
                        case 'Escape':
                            e.preventDefault();
                            setIsOpen(false);
                            setSearch('');
                            setHighlightedIndex(-1);
                            break;
                    }
                }}
            />
            <div className="dropdown-container" style={{ display: isOpen ? 'block' : 'none' }}>
                {!singleSelect && selectAll && (
                    <div
                        onMouseDown={(e) => {
                            e.preventDefault();
                            toggleSelectAll();
                        }}
                        className="dropdown-select-all"
                    >
                        <span>Select all</span>
                    </div>
                )}
                {filteredOptions.length === 0 ? (
                    <div className="dropdown-item">{noResultsText}</div>
                ) : (
                    filteredOptions.map((option, index) => (
                        <div
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`dropdown-item ${highlightedIndex === index ? 'highlighted' : ''}`}
                            key={option.value}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                toggleSelection(option.value);
                            }}
                        >
                            <span>{option.label}</span>
                            {selected.includes(option.value)}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MultiDropdown;
