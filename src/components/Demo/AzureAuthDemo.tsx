import API from '@/services/API/API';
import { loginAzure, logout } from '@/components/Auth/AuthFunctions';
import AuthenticatedContent from '@/components/Auth/AuthenticatedContent';
import NotAuthenticatedContent from '@/components/Auth/NotAuthenticatedContent';

const AzureAuthDemo = () => {
    const testSanctum = () => {
        API.get('sanctum-test')
            .then((response: any) => {
                alert(response.data);
            })
            .catch((response: any) => {
                alert(response.data);
            });
    };

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-4 bg-solid-50 rounded-lg min-w-96">
            <h1 className="text-2xl font-thin">Azure Auth teszt</h1>
            <div className="flex flex-row gap-2">
                <NotAuthenticatedContent>
                    <button onClick={() => loginAzure()}>Login</button>
                </NotAuthenticatedContent>

                <AuthenticatedContent>
                    <>
                        <button onClick={() => logout()}>Logout</button>
                        <button onClick={() => testSanctum()}>Auth Protected API</button>
                    </>
                </AuthenticatedContent>
            </div>
        </div>
    );
};

export default AzureAuthDemo;
