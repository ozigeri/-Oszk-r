import React, { useEffect, useState } from 'react';
import ScrollStack, { ScrollStackItem } from '../UI/ScrollStack/ScrollStack';
import Button from '../UI/Button/Button';
import './ListingStack.scss';

type ListingItem = {
    id: string;
    price: number;
    seats: number;
    route: string;
    time: string;
    user: string;
};

type ApiCarAd = {
    id: number;
    userid: number;
    from: string;
    to: string;
    spaces: number;
    price: number;
    timestamp: string;
    emberekSzama: number;
};

type ListingStackProps = {
    filters: {
        from: string[];
        to: string[];
        dateTime: string;
        maxPrice: number;
        maxSeats: number;
    };
};

const ListingStack: React.FC<ListingStackProps> = ({ filters }) => {
    const [data, setData] = useState<ListingItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('http://localhost/%21Oszk%C3%A1r/client/API/index.php/carads', {
                    headers: {
                        Authorization: 'Bearer HUNt1',
                        'Content-Type': 'application/json',
                        Active: 'true',
                    },
                });

                if (!response.ok) throw new Error(`HTTP hiba: ${response.status}`);

                const result: ApiCarAd[] = await response.json();

                const formatted: ListingItem[] = result.map((item) => ({
                    id: item.id.toString(),
                    price: item.price,
                    seats: item.spaces,
                    route: `${item.from} → ${item.to}`,
                    time: new Date(item.timestamp).toLocaleString(),
                    user: `Felhasználó ${item.userid}`,
                }));

                setData(formatted);
            } catch (err: any) {
                setError(err.message);
                console.log(err);
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
        const priceMatch = item.price <= filters.maxPrice;
        const seatsMatch = item.seats <= filters.maxSeats;
        const dateMatch = !filters.dateTime || new Date(item.time) >= new Date(filters.dateTime);

        return fromMatch && toMatch && priceMatch && seatsMatch && dateMatch;
    });

    if (loading) return <div className="listing-stack-wrapper">Betöltés...</div>;
    if (error) return <div className="listing-stack-wrapper">Hiba történt: {error}</div>;

    return (
        <div className="listing-stack-wrapper">
            <ScrollStack>
                {filteredData.map((item) => (
                    <ScrollStackItem key={item.id}>
                        <div className="listing-card">
                            <div className="listing-col listing-details">
                                <div>{item.price} Ft</div>
                                <div>{item.seats} fő</div>
                                <div>{item.user}</div>
                            </div>

                            <div className="listing-col listing-route">
                                <div>{item.route}</div>
                                <div>{item.time}</div>
                            </div>

                            <div className="listing-col listing-action">
                                <Button variant="primary" className="listing-button">
                                    Jelentkezés
                                </Button>
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
    );
};

export default ListingStack;
