import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">La Perla</Link>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/category/Mermeladas caseras">Mermeladas Caseras</Link>
                    </li>
                    <li>
                        <Link to="/category/Frutos secos">Frutos Secos</Link>
                    </li>
                    <li>
                        <Link to="/category/Aromáticas">Aromáticas</Link>
                    </li>
                    <li>
                        <Link to="/category/Condimentos">Condimentos</Link>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default Navbar;
