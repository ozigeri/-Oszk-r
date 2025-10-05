import React, { useState } from 'react';
import MultiDropdown from '../UI/MultiDropdown/MultiDropdown';
import DatePicker from '../UI/DatePicker/DatePicker';
import Button from '../UI/Button/Button';
import Slider from '../UI/Slider/Slider';
import './SearchBar.scss';

type SearchFilters = {
    from: string[];
    to: string[];
    dateTime: string;
    maxPrice: number;
    maxSeats: number;
};

type SearchBarProps = {
    onSearch: (filters: SearchFilters) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [from, setFrom] = useState<string[]>([]);
    const [to, setTo] = useState<string[]>([]);
    const [dateTime, setDateTime] = useState<string>('');
    const [showFilters, setShowFilters] = useState(false);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [maxSeats, setMaxSeats] = useState(4);

    const handleSearch = () => {
        onSearch({ from, to, dateTime, maxPrice, maxSeats });
        console.log('Honnan:', from);
        console.log('Hova:', to);
        console.log('Mikor:', dateTime);
        console.log('Max díj:', maxPrice);
        console.log('Max férőhely:', maxSeats);
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <MultiDropdown
                    options={[
                        { value: 'budapest', label: 'Budapest' },
                        { value: 'debrecen', label: 'Debrecen' },
                        { value: 'szeged', label: 'Szeged' },
                        { value: 'gyor', label: 'Győr' },
                    ]}
                    placeholder="Honnan?"
                    defaultSelected={[]}
                    onChange={setFrom}
                    selectAll
                />
                <MultiDropdown
                    options={[
                        { value: 'budapest', label: 'Budapest' },
                        { value: 'debrecen', label: 'Debrecen' },
                        { value: 'szeged', label: 'Szeged' },
                        { value: 'gyor', label: 'Győr' },
                    ]}
                    placeholder="Hova?"
                    defaultSelected={[]}
                    onChange={setTo}
                    selectAll
                />
                <DatePicker
                    label=""
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="search-date"
                />
                <Button variant="primary" onClick={handleSearch} className="search-button">
                    Keresés
                </Button>
                <Button variant="secondary" onClick={() => setShowFilters(!showFilters)} className="filter-toggle-button">
                    További Szűrők
                </Button>
            </div>

            {showFilters && (
                <div className="search-filters">
                    <Slider
                        labelTop="Max út díj (Ft)"
                        min={0}
                        max={10000}
                        step={100}
                        value={maxPrice}
                        onChange={setMaxPrice}
                        tooltip
                        tooltipType="absolute"
                        tooltipUnit=" Ft"
                    />
                    <Slider
                        labelTop="Max férőhely"
                        min={1}
                        max={8}
                        step={1}
                        value={maxSeats}
                        onChange={setMaxSeats}
                        tooltip
                        tooltipType="absolute"
                        tooltipUnit=" fő"
                    />
                </div>
            )}
        </div>
    );
};

export default SearchBar;
