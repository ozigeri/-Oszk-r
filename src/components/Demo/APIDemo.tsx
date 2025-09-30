import API from '@/services/API/API';
import { AxiosResponse } from 'axios';

const APIDemo = () => {
    const get = () => {
        API.get('teszt', {
            ez: 'lesz',
            a: 'payload',
        })
            .then((response: AxiosResponse) => {
                alert('Sikeres API hívás: ' + response.data);
            })
            .catch(() => {
                alert('Sikertelen API hívás. Beállítottad a .env -be az API URLjét?');
            });
    };

    const post = () => {
        API.post('teszt_post', {
            ez: 'lesz',
            a: 'payload',
        })
            .then((response: AxiosResponse) => {
                alert('Sikeres API hívás: ' + response.data);
            })
            .catch(() => {
                alert('Sikertelen API hívás. Beállítottad a .env -be az API URLjét?');
            });
    };

    const getExternal = () => {
        API.getExternal('https://fake-json-api.mock.beeceptor.com/users')
            .then((response: AxiosResponse) => {
                alert('Sikeres API hívás: ' + response.data);
            })
            .catch(() => {
                alert('Sikertelen API hívás.');
            });
    };

    return (
        <div className="flex flex-col gap-2 mt-2 bg-solid-50 w-96 justify-center items-center p-2 rounded">
            <h1 className="text-2xl font-thin">API Teszt</h1>
            <div>
                <button onClick={() => get()}>GET</button>
                <button onClick={() => post()}>POST</button>
                <button onClick={() => getExternal()}>GET External</button>
            </div>
        </div>
    );
};

export default APIDemo;
