import "./styles.css"
import barsIcon from "../../assets/bars-solid.svg";
import houseIcon from "../../assets/house-solid.svg";
import calendarIcon from "../../assets/calendar-regular.svg";
import gearIcon from "../../assets/gear-solid.svg";
import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-button">
                <img src={barsIcon} alt="menu" className="button-menu" />
            </div>
            <Link to="/" className="dashboard-card">
                <img src={houseIcon} alt="home" className="dashboard-icon" />
                <span>Home</span>
            </Link>
            <Link to="/eventos" className="dashboard-card">
                <img src={calendarIcon} alt="calendar" className="dashboard-icon" />
                <span>Eventos</span>
            </Link>
            <div className="dashboard-card">
                <img src={gearIcon} alt="config" className="dashboard-icon" />
                <span>Config</span>
            </div>
        </div>
    );
}

export default Dashboard;