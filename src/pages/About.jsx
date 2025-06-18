import "../CSS/About.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutLink from "../components/AboutLink";

const About = () => {
  return (
    <div className="about">
      <div className="about-body about-tint">
        <Header pageNum={1} />
        <div className="about-background"></div>
        <div className="about-contain">
          <div className="about-main">
            <div className="about-main-top">
              <img src="./Jase.jpg" />
              <div className="about-top-title">
                <div className="about-top-contain">
                  <h1>Jason Floyd</h1>
                  <p>FOUNDER</p>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
