import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>La Perla</p>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="/Inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="/Mermeladas">Mermeladas Caseras</a>
                    </li>
                    <li>
                        <a href="/FrutosSecos">Frutos Secos</a>
                    </li>
                    <li>
                        <a href="/AromaticasCondimentos">Aromáticas y Condimentos</a>
                    </li>
                    <li>
                        <a href="/Contacto">Contacto</a>
                    </li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    )
}

export default Navbar