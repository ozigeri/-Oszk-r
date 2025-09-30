import BrandTitle from '@/components/BrandTitle/BrandTitle';
import AuthenticatedContent from '../../components/Auth/AuthenticatedContent';
import './Settings.scss';

const Settings = () => {
    return (
        <AuthenticatedContent>
            <div className="settings-container">
                <BrandTitle text="Settings" />
            </div>
        </AuthenticatedContent>
    );
};

export default Settings;
