import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./shop.css";
import ItemShop from "../../components/itemShop/ItemShop";
import Books from "../../components/books/Books";
import Accessories from "../../components/accessories/Accessories";
import Packs from "../../components/packs/Packs";
import Tents from "../../components/tents/Tents";

function Shop() {
  return (
    <div className="headShop">
      <div className="textHeadShop">Shop Our Products</div>
      <div className="shopBanner">
        <div className="bannerItem">
          <div className="headFeatured">
            <button className="featuredButton">Featured Item</button>
          </div>
          <div className="footFeatured">
            <p className="footPrice">
              <h1 className="hFeatured">Camping Tent </h1>$ 200.00 USD
            </p>
          </div>
        </div>
      </div>

      <div className="itemsShop">
        <div className="headCategory">
          <h1 className="headCategoryFont">Shop by Category</h1>
          <div className="category">
            <Link to="/shop/books" className="categoryButton">
              Books
            </Link>
            <Link to="/shop/accessories" className="categoryButton">
              Accessories
            </Link>
            <Link to="/shop/packs" className="categoryButton">
              Packs
            </Link>
            <Link to="/shop/tents" className="categoryButton">
              Tents
            </Link>
          </div>
        </div>
        <ItemShop />
      </div>
    </div>
  );
}
export default Shop;
