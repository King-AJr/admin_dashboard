import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
    const [sideMenu, setSideMenu] = useState(true);

    const toggleSidebar = () => {
        setSideMenu(prevState => !prevState);
    };

    const handleResize = () => {
        if (window.innerWidth < 1021) {
            setSideMenu(false);
        } else {
            setSideMenu(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar sideMenu={sideMenu} />
            <div className={`flex flex-col transition-all duration-300 ${sideMenu && window.innerWidth >= 1021 ? 'ml-[300px] lg:ml-[250px] xl:ml-[300px]' : 'ml-0'} w-full`}>
                <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />
                <main className="flex-1 p-4 relative overflow-hidden">
                    {sideMenu && window.innerWidth < 1021 && (
                        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
                    )}
                    <div className="absolute inset-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
