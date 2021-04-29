import logoRabbit from "../../img/logoRabbit.png";
import cart from "../../img/panier.png";
import search from "../../img/search.png";
import hamburger from "../../img/hamburger.png";
import "./navbar.scss"

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <img src={logoRabbit} alt="Logo"/>
            </div>
            <div className="nav-middle">
                <div className="nav-cart">
                    <img src={cart} alt="Panier"/>
                </div>
                <div className="nav-divider">
                </div>
                <div className="nav-burger">
                    <img src={hamburger} alt="Menu"/>
                </div>
                <div className="nav-divider">
                </div>
                <div className="nav-search">
                    <img src={search} alt="Recherche"/>
                </div>
            </div>
            <div className="nav-text">
                <p><span className="orga-text">orga</span>bits</p>
            </div>
        </div>
    );
}

export default Navbar;
