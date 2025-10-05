import React from 'react';
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

const mockData: ListingItem[] = [
    {
        id: '1',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User01',
    },
    {
        id: '2',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User02',
    },
    {
        id: '3',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User03',
    },
    {
        id: '4',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User01',
    },
    {
        id: '5',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User02',
    },
    {
        id: '6',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User03',
    },
    {
        id: '7',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User01',
    },
    {
        id: '8',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User02',
    },
    {
        id: '9',
        price: 1200,
        seats: 4,
        route: 'Székesfehérvár - Budapest',
        time: '8:00 - 8:30',
        user: 'User03',
    },
];

const ListingStack: React.FC = () => {
    return (
        <div className="listing-stack-wrapper">
            <ScrollStack>
                {mockData.map((item) => (
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
