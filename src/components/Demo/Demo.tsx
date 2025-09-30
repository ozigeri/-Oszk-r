import BrandTitle from '../BrandTitle/BrandTitle';
import APIDemo from './APIDemo';
import ReduxDemo from './ReduxDemo';
import AzureAuthDemo from './AzureAuthDemo';
import EmailDemo from './EmailDemo';

const Demo = () => {
    return (
        <>
            <BrandTitle text="Demo oldal" />
            <div className="flex flex-col gap-12 justify-center items-center">
                <ReduxDemo />
                <APIDemo />
                <AzureAuthDemo />
                <EmailDemo />
            </div>
        </>
    );
};

export default Demo;
