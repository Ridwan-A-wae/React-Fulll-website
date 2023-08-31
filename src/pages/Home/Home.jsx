import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="conServing">
          <div className="Serving">
            <h1 className="headF">Serving you</h1>
            <h1 className="headF">since 1989.</h1>
            <p>Acme Outdoors is an outdoor and adventure</p>
            <p>shop located in the Boathouse District in</p>
            <p>Oklahoma City.</p>
            <div className="btnser">
              <button className="shopMerch">Shop Merch</button>
            </div>
          </div>
        </div>
        <div className="conSupport">
          <div className="Support">
            <div className="lSup">
              <p className="ways">WAYS TO SUPPORT</p>
              <h2 className="Sup">Support Acme Outdoors.</h2>
            </div>
            <span className="covidInfo">
              <span className="has">
                COVID-19 has forced us to close our retail space, but we need
              </span>
              <br />
              <span className="has">
                support from patrons like yourself now more than ever. Below,
                we’ve
              </span>
              <br />
              <span className="has">
                listed the best ways to help us through this season.
              </span>
            </span>
          </div>
          <div className="cards">
            <div className="wrapCard">
              <div className="card">
                <div className="tCard">01</div>
                <div className="mCard">
                  <div className="mcT">SHOP</div>PRODUCTS
                </div>
                <div className="icon1"></div>
              </div>
              <div className="fCard">
                Our full product line is still available online here on our
                site! Getting outside and hiking is still something you can do.
                Get your gear now!
              </div>
            </div>
            <div className="wrapCard">
              <div className="card">
                <div className="tCard">02</div>
                <div className="mCard">DONATE</div>
                <div className="icon2"></div>
              </div>
              <div className="fCard">
                Since we've changed the way we operate to online only, and to
                ensure your safety, not all our staff is working. Donate to keep
                them afloat.
              </div>
            </div>
            <div className="wrapCard">
              <div className="card">
                <div className="tCard">03</div>
                <div className="mCard">
                  <div className="mcT">BUY</div>GIFT CARDS
                </div>
                <div className="icon3"></div>
              </div>
              <div className="fCard">
                Have all the outdoor gear you need for now? Buy a gift card and
                use it later or share it with friends and family.
              </div>
            </div>
          </div>
        </div>
        <div className="conHow">
          <div className="How">
            <h1 className="howF">How we're keeping you</h1>
            <h1 className="howF">safe during COVID-19</h1>
            <div className="pHow">
              <p>As an outdoor shop, we’ve taken precautionary</p>
              <p>measures to ensure the safety of all our</p>
              <p>customers and team members.</p>
            </div>
            <div className="btnHow">
              <button className="readOur">Read Our Statement</button>
            </div>
          </div>
        </div>
        <div className="conOpen"></div>
        <div className="conShop"></div>
      </div>
    </div>
  );
}

export default Home;
