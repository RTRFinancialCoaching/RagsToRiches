import React from "react";

const Footer = () => {
  return (
    <div className="body-footer">
      <div className="body-footer-main">
        <h1>Lets Talk</h1>
        <p>
          Sed varius, tellus nec pharetra lobortis, metus ante placerat nunc,
          fermentum lobortis tortor nisl vitae dolor. Sed efficitur diam a ipsum
          tempus vulputate.
        </p>
        <div className="footer-main-container">
          <div className="footer-bar"></div>
          <div className="footer-container">
            <div className="footer-links">
              <div className="footer-connect">
                <div className="footer-connect-top">
                  <h3>Connect:</h3>
                  <div className="footer-connect-hr">
                    <hr className="footer-top" />
                    <hr className="footer-bottom" />
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="https://www.tiktok.com">
                      <img src="/icons/tiktok.svg" /> <h4>Tiktok</h4>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="/icons/youtube.svg" /> <h4>Youtube</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-links">
              <div className="contact-container">
                <div className="footer-connect-top">
                  <h3>Contact Info:</h3>
                  <div className="contact-link-hr">
                    <hr className="footer-top" />
                    <hr className="footer-bottom" />
                  </div>
                </div>
                <a>
                  <h4>Jason@RagsToRichesFC.com</h4>
                </a>
                <div className="footer-connect-top">
                  <h3>Not Sure:</h3>
                  <div className="contact-link-hr">
                    <hr className="footer-top" />
                    <hr className="footer-bottom" />
                  </div>
                </div>
                <p>
                  Sed varius, tellus nec pharetra lobortis, metus ante placerat
                  nunc, fermentum lobortis tortor nisl vitae dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
