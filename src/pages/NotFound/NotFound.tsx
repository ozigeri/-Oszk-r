import BrandTitle from '@/components/BrandTitle/BrandTitle';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <BrandTitle text="Hmm... looks like this page doesn't exist." />
        </div>
    );
};

export default NotFound;
