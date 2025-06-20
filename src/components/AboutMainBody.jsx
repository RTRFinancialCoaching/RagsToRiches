import AboutLink from "./AboutLink";

const AboutMainBody = () => {
  return (
    <div>
      <div className="about-background"></div>
      <div className="about-contain">
        <div className="about-main">
          <div className="about-main-top">
            <img src="./Jase.jpg" />
            <div className="about-top-title">
              <div className="about-top-contain">
                <h1>Jason Floyd</h1>
                <p>FOUNDER & COLOSUL NERD</p>
                <div className="about-top-links">
                  <AboutLink
                    imgSrc="./icons/youtube.svg"
                    linkRef="https://www.Youtube.com"
                    title="YouTube"
                  />
                  <AboutLink
                    imgSrc="./icons/tiktok.svg"
                    linkRef="https://www.TikTok.com"
                    title="TikTok"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-prof">
            <div className="about-prof-title">
              <div className="about-hr-left about-connect-hr">
                <hr className="about-hr-top" />
                <hr className="about-hr-bottom" />
              </div>
              <h3>The Certifications</h3>
              <div className="about-connect-hr">
                <hr className="about-hr-top" />
                <hr className="about-hr-bottom" />
              </div>
            </div>
            <div className="about-prof-main">
              <ul className="about-prof-list">
                <li>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, tot
                  </p>
                </li>
                <li>
                  <p>Financial thing.</p>
                </li>
                <li>
                  <p>Financial thing.</p>
                </li>
              </ul>
              <ul className="about-prof-list">
                <li>
                  <p>Financial thing.</p>
                </li>
                <li>
                  <p>Financial thing.</p>
                </li>
                <li>
                  <p>Financial thing.</p>
                </li>
                <li>
                  <p>Financial thing.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainBody;
