import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <div className="conContact">
        <div className="Serving">
          <h1 className="headF">Contact Acme Outdoors</h1>
          <div className="cardsContact">
            <div className="cardContact">
              <div className="contactLogo">📞</div>
              <div className="headContact">Contact Us</div>
              <div className="footContact">
                Just want to say hi? We'd love to hear from you. We love our
                customers and community!{" "}
              </div>
              <div className="btnWrapperContact">
                <button className="btnContact">Send Us A Message</button>
              </div>
            </div>
            <div className="cardContact">
              <div className="contactLogo">📨</div>
              <div className="headContact">Contact Us</div>
              <div className="footContact">
                Just want to say hi? We'd love to hear from you. We love our
                customers and community!{" "}
              </div>
              <div className="btnWrapperContact">
                <button className="btnContact">Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
