import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import AnimatedPassengerListingStack from '../../components/AnimatedPassangerListingStack/AnimatedPassengerListingStack';

const PassengerAdPage: React.FC = () => {
    return (
        <>
            <main>
                <SearchBar />
                <AnimatedPassengerListingStack />
            </main>
        </>
    );
};

export default PassengerAdPage;
