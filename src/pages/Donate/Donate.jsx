import React from "react";
import "./donate.css";

function Donate() {
  return (
    <div className="bigConDo">
      {" "}
      <div className="conDo">
        <div className="DonateCon">
          <div className="infoCondo">
            <h1 className="headDo">Here at Acme Outdoors</h1>
            <h1 className="secondHeadDo">every dollar counts</h1>
            <p className="pNeedDo">Acme Outdoors is more than just a company, we're a community of people who care for one</p>
            <p className="pNeedDo">another and for our city. During this time, due to shelter in place orders, only a select few of our</p>
            <p className="pNeedDo">staff are able to work. Any donations you make to Acme will help make sure our employees are</p>
            <p className="pNeedDo">cared for and can stay safe in these uncertain times.</p>
          </div>
        </div>
      </div>

      <div className="donateButtonCon">
        <div className="childDonateButton">
          <button className="buttonConDo">Donte $100</button>
          <button className="buttonConDo">Donte $50</button>
          <button className="buttonConDo">Donte $25</button>
          <button className="buttonConDo">Donte $15</button>
          <button className="buttonConDo">Donte $5</button>
         
        </div>
      </div>
    </div>
  );
}

export default Donate;
