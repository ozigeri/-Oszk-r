import API from '@/services/API/API';
import { useState } from 'react';
import toast from 'react-hot-toast';
import TextInput from '../UI/Input/TextInput';

const EmailDemo = () => {
    const [address, setAddress] = useState('');

    const sendTestMail = () => {
        API.post('emailTest', { address: address })
            .then(() => {
                toast.success('Teszt e-mail elküldve.');
            })
            .catch(() => {
                toast.error('Sikertelen.');
            });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                sendTestMail();
            }}
            className="flex flex-col gap-4 mt-2 bg-solid-50 w-96 justify-center items-center p-4 rounded-lg"
        >
            <h1 className="text-xl font-thin">Email teszt</h1>
            <TextInput
                value={address}
                onChange={(e: any) => setAddress(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Teszt email küldése</button>
        </form>
    );
};

export default EmailDemo;
