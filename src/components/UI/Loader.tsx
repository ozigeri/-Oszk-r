const Loader: React.FC<{ visible?: boolean }> = ({ visible = false }) => {
    return (
        <div
            style={{
                display: visible ? 'block' : 'none',
            }}
            className="a-activity-indicator"
            aria-live="off"
        >
            <div className="a-activity-indicator__top-box"></div>
            <div className="a-activity-indicator__bottom-box"></div>
        </div>
    );
};

export default Loader;
