import { useNavigate } from 'react-router';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import useUser from '@/hooks/useUser';
import AuthenticatedContent from '../Auth/AuthenticatedContent';
import DotEnv from '@/utils/DotEnv';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();

    const user = useUser();

    return (
        <header className="main-header">
            <div className="o-minimal-header__supergraphic"></div>
            <div className="content">
                <h1 onClick={() => navigate('/')} className="cursor-pointer">
                    {DotEnv.appName}
                </h1>
                <div className="right-side-of-content">
                    <ThemeSelector />
                    <AuthenticatedContent>
                        <div>
                            {user.lastName} {user.firstName}
                        </div>
                    </AuthenticatedContent>
                </div>
            </div>
        </header>
    );
};

export default Header;
