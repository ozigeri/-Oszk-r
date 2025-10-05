import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ListingStack from './components/ListingStack/ListingStack';

const Entrypoint = () => {
    const [filters, setFilters] = useState({
        from: [] as string[],
        to: [] as string[],
        dateTime: '',
        maxPrice: 10000,
        maxSeats: 8,
    });

    return (
        <>
            <SearchBar onSearch={setFilters} />
            <ListingStack filters={filters} />
        </>
    );
};

export default Entrypoint;
