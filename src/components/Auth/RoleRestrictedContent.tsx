import useUser from '@/hooks/useUser';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
    roleNeeded: number;
};

const RoleRestrictedContent = ({ children, roleNeeded }: Props) => {
    
    const token = localStorage.getItem("jwt");
    const user = useUser();

    if(token && Number(user?.role) >= roleNeeded && user?.email && user?.firstName && user?.lastName){
        return (
            <>
                {children}
            </>
        )
    }
    else{
        return <></>
    }
   
}

export default RoleRestrictedContent