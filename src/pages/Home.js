import React from "react";
import "../styles/styles.css";
import heroPic from "../assets/images/hero-pic.jpeg";
import info1 from "../assets/images/info1.jpg";
import info2 from "../assets/images/info2.jpg";
import info3 from "../assets/images/info3.jpg";
import info4 from "../assets/images/info4.jpg";

function Home() {
  return (
    <>
      {/* <!-- Header wrapper--> */}
      <div className="wrapper">
        {/* <!-- Header --> */}
        <div className="header-banner">
          <div className="header-logo">VIANOO</div>
          <div className="header-links">
            <a href="#">A propos</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>
        {/* <!-- Hero Content --> */}
        <div className="hero-container">
          <div className="hero-left">
            <h1>This website is awesome</h1>
            <p>
              This website has some subtext that goes here under main title.
              It's a smaller font and the color is lower contrast.
            </p>
            <button className="primary-button">Commander</button>
          </div>
          <div className="hero-right">
            <img src={heroPic} className="hero-pic" alt="hero picture" />
          </div>
        </div>
        {/* <!-- end Hero Content --> */}
      </div>
      {/* <!-- end wrapper --> */}

      {/* <!-- Content--> */}
      <div className="content">
        <h2 className="header-text">
          Guide or Steps of how to place an order?
        </h2>
        <div className="information-container">
          <div className="image-plus-text">
            <img src={info1} alt="info1" />
            <p>This is some subtext under an illustration or image</p>
          </div>
          <div className="image-plus-text">
            <img src={info2} alt="info2" />
            <p>This is some subtext under an illustration or image</p>
          </div>
          <div className="image-plus-text">
            <img src={info3} alt="info3" />
            <p>This is some subtext under an illustration or image</p>
          </div>
          <div className="image-plus-text">
            <img src={info4} alt="info4" />
            <p>This is some subtext under an illustration or image</p>
          </div>
        </div>

        {/* <!-- Quote section --> */}
        <div className="quote-container">
          <div className="quote">
            <p>
              This is an inspiring quote, or a testimonial from a customer.
              Maybe it's just filling up space or maybe people will actually
              read it. Who knows? All I know is that is looks nice.
            </p>
            <h6>-Thor, God of Thunder</h6>
          </div>
        </div>

        {/* <!-- Call to action banner --> */}
        <div className="call-to-action-container">
          <div className="call-to-action-left">
            <h3>Call to action! It's time!</h3>
            <p>
              Sign up for our product by clicking that button right over there.
            </p>
          </div>
          <button className="secondary-button">Sign up</button>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className="footer">
        <p>Copyright &copy; VIANOO 2024</p>
      </div>
    </>
  );
}

export default Home;
