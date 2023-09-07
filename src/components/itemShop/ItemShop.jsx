import React from "react";

function ItemShop() {
  return (
    <div className="itemCardsShop">
      {/* Card */}
      <div className="itemCardShop">
        <img
          className="imgItemPicCardShop"
          src="https://images.unsplash.com/photo-1622260614153-03223fb72052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
          alt=""
        />
        <div className="midItemCard">
          <h2 className="itemNameShop">Green Canvas Pack</h2>
          <p className="itemPriceShop">$ 50.00 USD</p>
          <div className="btnConItemShop">
            <button className="btnItemShop">Detail</button>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="itemCardShop">
        <img
          className="imgItemPicCardShop"
          src="https://images.unsplash.com/photo-1520963959303-a5cc3bdf9260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80"
          alt=""
        />
        <div className="midItemCard">
          <h2 className="itemNameShop">coffee camping kit</h2>
          <p className="itemPriceShop">$ 80.00 USD</p>
          <div className="btnConItemShop">
            <button className="btnItemShop">Detail</button>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="itemCardShop">
        <img
          className="imgItemPicCardShop"
          src="https://images.unsplash.com/photo-1628087235616-4e146afcd061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2188&q=80"
          alt=""
        />
        <div className="midItemCard">
          <h2 className="itemNameShop">White tent</h2>
          <p className="itemPriceShop">$ 200.00 USD</p>
          <div className="btnConItemShop">
            <button className="btnItemShop">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemShop;
