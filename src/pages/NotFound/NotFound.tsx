import BrandTitle from '@/components/BrandTitle/BrandTitle';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <BrandTitle text="Hmm... Az oldal nem található" />
        </div>
    );
};

export default NotFound;
