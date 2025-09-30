import './BrandTitle.scss';

const BrandTitle: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="brand-title">
            <div>
                {[0, 1, 2, 3, 4, 5, 6].map((item) => {
                    return <span key={item} className="h-2 w-4"></span>;
                })}
            </div>
            <h1>{text}</h1>
        </div>
    );
};

export default BrandTitle;
