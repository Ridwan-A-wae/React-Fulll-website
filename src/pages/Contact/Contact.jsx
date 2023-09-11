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
      <div className="conContactForm">
        <div className="contacts">
          <div className="contactUs">
            <div className="hContactUs">Contact Us</div>
            <div className="outDoors">Acme Outdoors</div>
            <div className="outDoors">123 Rainy Street</div>
            <div className="outDoors">Oklahoma City, OK 73129</div>
            <br />
            <br />
            <div className="general">General Inquiries: (405) 555-5555</div>
            <div className="general">Customer Support: (405) 555-5556</div>
          </div>
        </div>
        <div className="contactFormSend">
          <div className="hContactUs">Contact Form</div>
          <div className="outDoors">
            Send us a message and we'll get back to you as soon as we can!
          </div>
          <br />
          <div className="labelInput">Name</div>
          <input
            type="text"
            placeholder="Enter your name"
            className="enterInput"
          />
          <br />
          <div className="labelInput">Email Address</div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="enterInput"
          />
          <br />
          <div className="labelInput">Your Message</div>
          <input
            type="text"
            placeholder="Enter your message"
            className="enterInput"
          />
          <button className="contactFormBtn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
