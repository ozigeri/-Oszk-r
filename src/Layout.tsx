import { Outlet } from "react-router";
import Header from "@/components/Header/Header";

const Layout = () => {
    const layoutSettings = {
        sideNavWidth: "3rem",
        headerHeight: "57px"
    }
    return (
        <>
            <Header />
            <div 
                style={{ 
                        marginTop:  layoutSettings.headerHeight
                }}
            >
                <Outlet />
            </div>
        </>
    );
}

export default Layout;