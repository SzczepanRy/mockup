import "./Layout.scss"
import { Outlet, Link } from "react-router-dom";
import logo from "../img/logo.png"
import Footer from "../components/Footer";
function Layout() {
    return (
        <div className="layout">
            <nav className="nav">
                <div className="logo">
                    <Link to="/about"><img src={logo} alt="logo" /></Link>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/jobOffers">Job offers</Link>
                    </li>
                    <li>
                        <Link to="/certificates">Certificates</Link>
                    </li>

                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>


    )
};

export default Layout;