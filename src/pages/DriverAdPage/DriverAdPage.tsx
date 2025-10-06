import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import AnimatedListingStack from '../../components/AnimatedListingStack/AnimatedListingStack';

const DriverAdPage: React.FC = () => {
    return (
        <>
            <main>
                <SearchBar />
                <AnimatedListingStack/>
            </main>
        </>
    );
};

export default DriverAdPage;
