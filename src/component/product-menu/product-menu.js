import twitter from "../../img/twitter.png";
import youtube from "../../img/youtube.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import "./product-menu.scss"

function ProductMenu() {
    return(
        <div className="product-menu">
            <div className="product-title">
                <div className="title-divider"></div><h2>Our products</h2>
            </div>
            <div className="fruit-list">
                <div className="list-items">
                    <div className="list-divider"></div><p>Pineapple</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Strawberries</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Apples</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Citrus</p>
                </div>
            </div>
            <div className="vegetable-list">
                <div className="list-items">
                    <div className="list-divider"></div><p>Cauliflowers</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Tomatoes</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Eggplants</p>
                </div>
                <div className="list-items">
                    <div className="list-divider"></div><p>Carotts</p>
                </div>
            </div>
            <div className="social-media">
                <div className="sm-items">
                    <img src={twitter} alt="Twitter"/>
                </div>
                <div className="sm-items">
                    <img src={youtube} alt="Youtube"/>
                </div>
                <div className="sm-items">
                    <img src={instagram} alt="Instagram"/>
                </div>
                <div className="sm-items">
                    <img src={facebook} alt="Facebook"/>
                </div>
            </div>

        </div>
    )
}

export default ProductMenu;