import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="fCon">
      <div className="footerCon">
        <div className="icon">
          🎢 <span className="iconFont">A C ME</span>
        </div>
        <div>
          <ul className="items">
            <li className="item">
              <a>Twitter</a>
            </li>
            <li className="item">
              <a>Facebook</a>
            </li>
            <li className="item">
              <a>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    <span className="footBot">Mode by Ridwan © 2023 </span>
    </div>
  );
}

export default Footer;
