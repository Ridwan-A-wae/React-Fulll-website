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
            <p className="pNeed">Acme Outdoors is an outdoor and adventure</p>
            <p className="pNeed">shop located in the Boathouse District in</p>
            <p className="pNeed">Oklahoma City.</p>
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
              <p className="pNeed">As an outdoor shop, we’ve taken precautionary</p>
              <p className="pNeed">measures to ensure the safety of all our</p>
              <p className="pNeed">customers and team members.</p>
            </div>
            <div className="btnHow">
              <button className="readOur">Read Our Statement</button>
            </div>
          </div>
        </div>
        <div className="conOpen">
          <div className="Support">
            <div className="lOpen">
              <p className="shopOpen">SHOP PRODUCTS</p>
              <h2 className="openDate">Open 24/7/365.</h2>
            </div>
          </div>
          <div className="wrapOpenCard">
            <div className="cardsOpen">
              <img
                className="openImage"
                src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <div className="conOCard">
                <div className="oCard">White Tent</div>
                <div className="price">$ 200.00 USD</div>
              </div>
              <div className="btnviewAll">
                <button className="details">Details</button>
              </div>
            </div>
            <div className="cardsOpen">
              <img
                className="openImage"
                src="https://images.unsplash.com/photo-1623177623442-979c1e42c255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <div className="conOCard">
                <div className="oCard">Table</div>
                <div className="price">$ 400.00 USD</div>
              </div>
              <div className="btnviewAll">
                <button className="details">Details</button>
              </div>{" "}
            </div>
            <div className="cardsOpen">
              <img
                className="openImage"
                src="https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80"
              />
              <div className="conOCard">
                <div className="oCard">Chair</div>
                <div className="price">$ 150.00 USD</div>
              </div>
              <div className="btnviewAll">
                <button className="details">Details</button>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="btnviewAll">
          <button className="viewAll">View All Products</button>
        </div>
        <div className="conShop">
          <img
            className="local"
            src="https://images.unsplash.com/photo-1456315138460-858d1089ddba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="infoLocal">
            <div className="hLocal">Shop Local.</div>
            <div className="pLocal">
              We know that during COVID-19, a lot of folks around the city and
              state are feeling uneasy about the future - we’re not sure what
              the future holds either.
              <br />
              <br />
              That said: we know that we love making sure you have the gear you
              need for your adventures, and we’re going to keep doing that -
              with our team - until the city tells us we can’t.
              <br />
              <br />
              But as long as folks like yourself support small businesses around
              the city, then we’ll be here — every day, making sure your orders
              arrive on time.
              <br />
              <br />
              ------
              <br />
              <br />
              <div className="nameLocal">
                Jane & John Doe
                <br />
                Acme Outdoors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
