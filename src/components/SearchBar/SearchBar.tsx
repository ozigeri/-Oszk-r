import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../store/slices/searchSlice';
import MultiDropdown from '../UI/MultiDropdown/MultiDropdown';
import DatePicker from '../UI/DatePicker/DatePicker';
import Button from '../UI/Button/Button';
import Slider from '../UI/Slider/Slider';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const [from, setFrom] = useState<string[]>([]);
    const [to, setTo] = useState<string[]>([]);
    const [dateTime, setDateTime] = useState<string>('');
    const [showFilters, setShowFilters] = useState(false);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [maxSeats, setMaxSeats] = useState(4);

    const handleSearch = () => {
        dispatch(updateFilters({ from, to, dateTime, maxPrice, maxSeats }));
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <MultiDropdown
                    options={[
                        { value: 'budapest', label: 'Budapest' },
                        { value: 'szeged', label: 'Szeged' },
                        { value: 'gyor', label: 'Győr' },
                        { value: 'debrecen', label: 'Debrecen' },
                        { value: 'miskolc', label: 'Miskolc' },
                    ]}
                    placeholder="Honnan?"
                    defaultSelected={[]}
                    onChange={setFrom}
                    selectAll
                />
                <MultiDropdown
                    options={[
                        { value: 'debrecen', label: 'Debrecen' },
                        { value: 'budapest', label: 'Budapest' },
                        { value: 'pecs', label: 'Szeged' },
                        { value: 'nyiregyhaza', label: 'Nyíregyháza' },
                    ]}
                    placeholder="Hova?"
                    defaultSelected={[]}
                    onChange={setTo}
                    selectAll
                />
                <DatePicker value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                <Button variant="primary" onClick={handleSearch} className="search-button">
                    Keresés
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => setShowFilters(!showFilters)}
                    className="filter-toggle-button"
                >
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
