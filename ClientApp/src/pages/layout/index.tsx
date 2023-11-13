import { ReactNode } from 'react';
import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';
import "./styles.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>  
            <Navbar />
            <div className="layout-content">
                <div className="dashboard">
                    <Dashboard />
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;