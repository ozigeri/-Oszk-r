// Erre redirectel a backend sikeres bejelentkezés után.
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_USER } from '@/store/slices/userSlice';

const LoginSuccess = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initUser = () => {
		const userHash = searchParams.get('hash');
		if (userHash) {
			const user = atob(userHash);
			const parsedUser = JSON.parse(user);

            const accessToken = parsedUser?.access_token;
            const { first_name, last_name, email, role } = parsedUser?.user

            
            if(accessToken && first_name && last_name && email && role) {
                localStorage.setItem('jwt', accessToken);
                localStorage.setItem('firstName', first_name);
                localStorage.setItem('lastName', last_name);
                localStorage.setItem('email', email);
                localStorage.setItem('role', role);
                
                dispatch(SET_USER({
                    email: email,
                    firstName: first_name,
                    lastName: last_name,
                    role: role
                }));
    
                searchParams.delete('hash');
                navigate('/');
            }
            else {
                navigate('/client-failed');
            }
		}
	};

    useEffect(() => {
        initUser()
    }, [])

    return (
        <div>Betöltés...</div>
    )
}

export default LoginSuccess;