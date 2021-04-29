import "./vegetable.scss"
import fruit from  "../../img/little-pineapple.png"
import ProductMenu from "../../component/product-menu/product-menu";
import {Link} from "react-router-dom";

function Vegetable() {
    return(
        <div className="container-vegetables">
            <ProductMenu />
            <div className="main-title">
                <h1>Our fruits <br/>& vegetables are <span className="title-color">organic.</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <button className="main-btn">Discover &#9656;</button>
            </div>
            <div className="main-pagination">
                <div className="pagination">
                    <p>2 <span className="size-pagination">/<span className="color-pagination"> 2</span></span></p>
                </div>
                <div className="next-page">
                    <div className="next-page-text">
                        <p><span className="text-color">New</span>Vegetables</p>
                    </div>
                    <img src={fruit} alt="fruit" />
                    <Link to="/fruits">
                    <div className="next-page-btn">
                        <p>&#9656;</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Vegetable;