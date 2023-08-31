import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="topCon">
        <button className="tBTN">Announcement</button>
        <h2 className="th2">How we're responding to COVID-19</h2>
      </div>
      <div className="botCon">
        <div className="icon">🎢 <span className="iconFont">A C ME</span></div>
        <div>
          <ul className="items">
            <li className="item">
              <Link to="/" >Home</Link>
            </li>
            <li className="item">
            <Link to="/about" >About</Link>
            </li>
            <li className="item">
            <Link to="/shop" >Shop</Link>
            </li>
            <li className="item">
            <Link to="/donate" >Donate</Link>
            </li>
            <li className="item">
            <Link to="/contact" >Contact</Link>
            </li>
            <li className="item">
              <div className="cart">
                <a>🛒</a>
                <span className="amount">
                    1
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
