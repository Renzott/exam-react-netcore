import "./styles.css"
import bell from "../../assets/bell.svg"

const Navbar = () => {
    return (
        <nav className="navbar-container">

            <div className="navbar-profile">
                <div className="bell-notify">
                    <img src={bell} alt="bell" className="navbar-icon" />
                    <span className="bell-number">9+</span>
                </div>
                <div className="vertical-divider" />
                <div className="profile-info">
                    <span className="profile-name">Hola, <b>John Doe</b></span>
                    <span className="profile-role">Administrador</span>
                </div>
                <div className="profile-image">
                    <img src="https://randomuser.me/api/portraits/men/0.jpg" alt="profile" className="profile-picture" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;