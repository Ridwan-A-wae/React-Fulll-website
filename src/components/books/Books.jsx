import React from "react";
import { Link } from 'react-router-dom'

function Books() {
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
        <div className="itemCardsShop">
          {/* Card */}
          <div className="itemCardShop">
            <img
              className="imgItemPicCardShop"
              src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
              alt=""
            />
            <div className="midItemCard">
              <h2 className="itemNameShop">Books 1</h2>
              <p className="itemPriceShop">$ 10.00 USD</p>
              <div className="btnConItemShop">
                <button className="btnItemShop">Detail</button>
              </div>
            </div>
          </div>
          <div className="itemCardShop">
            <img
              className="imgItemPicCardShop"
              src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
              alt=""
            />
            <div className="midItemCard">
              <h2 className="itemNameShop">Books 2</h2>
              <p className="itemPriceShop">$ 10.00 USD</p>
              <div className="btnConItemShop">
                <button className="btnItemShop">Detail</button>
              </div>
            </div>
          </div>
          <div className="itemCardShop">
            <img
              className="imgItemPicCardShop"
              src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
              alt=""
            />
            <div className="midItemCard">
              <h2 className="itemNameShop">Books </h2>
              <p className="itemPriceShop">$ 10.00 USD</p>
              <div className="btnConItemShop">
                <button className="btnItemShop">Detail</button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Books;
      


