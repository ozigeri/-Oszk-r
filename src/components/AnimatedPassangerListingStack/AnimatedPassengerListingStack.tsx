import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AnimatedList from '../UI/AnimatedList/AnimatedList';
import './AnimatedPassengerListingStack.scss';

type ListingItem = {
    id: string;
    route: string;
    date: string;
    user: string;
    count: number;
};

type ApiPassengerAd = {
    id: number;
    userid: number;
    from: string;
    to: string;
    date: string;
    countofpeople: number;
};

const AnimatedPassengerListingStack: React.FC = () => {
    const filters = useSelector((state: RootState) => state.search);
    const [data, setData] = useState<ListingItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchListings = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://localhost/-Oszk-r/API/index.php/peopleads', {
                    headers: {
                        Authorization: 'Bearer HUNt1',
                        'Content-Type': 'application/json',
                        Active: 'true',
                    },
                });

                if (!response.ok) throw new Error(`HTTP hiba: ${response.status}`);
                const result: ApiPassengerAd[] = await response.json();

                const formatted = result.map((item) => ({
                    id: item.id.toString(),
                    route: `${item.from} → ${item.to}`,
                    date: new Date(item.date).toLocaleDateString(),
                    user: `Felhasználó ${item.userid}`,
                    count: item.countofpeople,
                }));

                setData(formatted);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    const filteredData = data.filter((item) => {
        const fromMatch =
            filters.from.length === 0 || filters.from.some((f) => item.route.toLowerCase().includes(f.toLowerCase()));
        const toMatch =
            filters.to.length === 0 || filters.to.some((t) => item.route.toLowerCase().includes(t.toLowerCase()));
        const seatsMatch = item.count <= filters.maxSeats;
        const dateMatch = !filters.dateTime || new Date(item.date) >= new Date(filters.dateTime);
        return fromMatch && toMatch && seatsMatch && dateMatch;
    });

    if (loading) return <div className="listing-stack-wrapper">Betöltés...</div>;
    if (error) return <div className="listing-stack-wrapper">Hiba történt: {error}</div>;

    return (
        <div className="listing-stack-wrapper">
            <AnimatedList
                items={filteredData}
                className="animated-list-container"
                renderItem={(item) => (
                    <div className="listing-card">
                        <div className="listing-col">{item.user}</div>
                        <div className="listing-col">{item.date}</div>
                        <div className="listing-col">{item.route}</div>
                        <div className="listing-col">{item.count} fő</div>
                    </div>
                )}
            />
        </div>
    );
};

export default AnimatedPassengerListingStack;
