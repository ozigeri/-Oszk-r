import { ReactNode } from 'react';
import useUser from '@/hooks/useUser';

type Props = {
	children: ReactNode;
};

const NotAuthenticatedContent = ({ children }: Props) => {
    
    const token = localStorage.getItem("jwt");
    const user = useUser();

    if(!token && !user?.email && !user?.firstName && !user.lastName) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        return <></>
    }
   
}

export default NotAuthenticatedContent