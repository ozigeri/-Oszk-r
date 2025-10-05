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

const ListingStack: React.FC = () => {
    const [data, setData] = useState<ListingItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('http://localhost/afpgit/-Oszk-r/API/index.php/carads/1', {
                    headers: {
                        'Authorization': 'Bearer HUNt1',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP hiba: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    if (loading) {
        return <div className="listing-stack-wrapper">Betöltés...</div>;
    }

    if (error) {
        return <div className="listing-stack-wrapper">Hiba történt: {error}</div>;
    }

    return (
        <div className="listing-stack-wrapper">
            <ScrollStack>
                {data.map((item) => (
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
