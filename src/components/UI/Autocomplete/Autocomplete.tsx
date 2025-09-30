import { useState, useRef, useEffect } from 'react';
import './Autocomplete.scss';

type AutocompleteProps = {
    dictionary: string[];
    value: string;
    setValue: (val: string) => void;
    placeholder?: string;
    showAutocompleteListInitially?: boolean;
    isLoading?: boolean; // NEW prop
};

const Autocomplete: React.FC<AutocompleteProps> = ({
    dictionary,
    value,
    setValue,
    placeholder = 'Type to autocomplete...',
    showAutocompleteListInitially = true,
    isLoading = false, // NEW default
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState(value);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

    const filteredOptions = dictionary.filter((word) =>
        word.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (val: string) => {
        setValue(val);
        setSearch(val);
        setIsOpen(false);
        setHighlightedIndex(-1);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
            itemRefs.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
        }
    }, [highlightedIndex]);

    useEffect(() => {
        setSearch(value);
    }, [value]);

    const shouldShowDropdown =
        isOpen && (showAutocompleteListInitially || search.trim().length > 0);

    return (
        <div className="custom-autocomplete" ref={containerRef}>
            <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                    setValue(e.target.value);
                    setSearch(e.target.value);
                    setIsOpen(true);
                    setHighlightedIndex(0);
                }}
                onFocus={() => {
                    if (showAutocompleteListInitially) {
                        setIsOpen(true);
                        setHighlightedIndex(0);
                    } else {
                        setIsOpen(false);
                    }
                }}
                onKeyDown={(e) => {
                    if (isLoading) return; // Disable key nav during loading

                    switch (e.key) {
                        case 'ArrowDown':
                            e.preventDefault();
                            if (!shouldShowDropdown && showAutocompleteListInitially) {
                                setIsOpen(true);
                                setHighlightedIndex(0);
                                break;
                            }
                            setHighlightedIndex((prev) =>
                                Math.min(prev + 1, filteredOptions.length - 1)
                            );
                            break;
                        case 'ArrowUp':
                            e.preventDefault();
                            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
                            break;
                        case 'Enter':
                            e.preventDefault();
                            if (filteredOptions[highlightedIndex]) {
                                handleSelect(filteredOptions[highlightedIndex]);
                            }
                            break;
                        case 'Escape':
                            e.preventDefault();
                            setIsOpen(false);
                            break;
                    }
                }}
                placeholder={placeholder}
            />
            {shouldShowDropdown && (
                <div className="autocomplete-dropdown">
                    {isLoading ? (
                        <div className="dropdown-item loading">Loading...</div>
                    ) : filteredOptions.length === 0 ? (
                        <div className="dropdown-item">No results</div>
                    ) : (
                        filteredOptions.map((word, index) => {
                            const matchIndex = word.toLowerCase().indexOf(search.toLowerCase());
                            const before = word.slice(0, matchIndex);
                            const match = word.slice(matchIndex, matchIndex + search.length);
                            const after = word.slice(matchIndex + search.length);

                            return (
                                <div
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    key={word}
                                    className={`dropdown-item ${highlightedIndex === index ? 'highlighted' : ''}`}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        handleSelect(word);
                                    }}
                                >
                                    <span>
                                        {before}
                                        <strong>{match}</strong>
                                        {after}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
};

export default Autocomplete;
