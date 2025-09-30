import { useSelector } from 'react-redux';
import { User } from '@/types/generals';

const useUser = (): User => {
    const user = useSelector((state: any) => state.user);
    return user;
};

export default useUser;
