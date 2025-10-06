import React, { useState } from 'react';
import DatePicker from '../UI/DatePicker/DatePicker';
import './AdModal.scss';

type Props = {
    onClose: () => void;
};

const AdModal: React.FC<Props> = ({ onClose }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [spaces, setSpaces] = useState(1);
    const [price, setPrice] = useState('');
    const [dateTime, setDateTime] = useState('');

    const handleSubmit = () => {
        const payload = { from, to, spaces, price, date: dateTime };
        console.log('Hirdetés beküldve:', payload);
        onClose();
    };

    return (
        <div className="ad-modal-overlay" onClick={onClose}>
            <div className="ad-modal" onClick={(e) => e.stopPropagation()}>
                <h3>Új hirdetés feladása</h3>
                <div className="ad-form">
                    <div className="form-group">
                        <label>Honnan</label>
                        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Hova</label>
                        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Helyek száma</label>
                        <input type="number" value={spaces} onChange={(e) => setSpaces(+e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Ár (Ft)</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Mikor</label>
                        <div className="custom-datetime-picker">
                            <DatePicker value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="ad-modal-actions">
                    <button onClick={handleSubmit}>Hirdetés beküldése</button>
                    <button onClick={onClose}>Mégse</button>
                </div>
            </div>
        </div>
    );
};

export default AdModal;
