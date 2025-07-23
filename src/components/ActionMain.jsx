import AboutLink from "./AboutLink";

const ActionMain = () => {
  return (
    <div className="action-main">
      <h1>Interested in Learning More?</h1>
      <div className="action-hr-div">
        <div className="action-hr action-hr-left">
          <hr className="action-hr-top" />
        </div>
        <h3>
          Schedule a free 30-minute call with me. No sales pitch, just a real
          conversation about where you are, where you would like to go, and a
          demonstration of the ways I could help you on your journey.
        </h3>
        <div className="action-hr">
          <hr className="action-hr-top" />
        </div>
      </div>

      <button>Get Started Today</button>

      <div className="action-links">
        <h2>Connect:</h2>
        <div className="about-top-links">
          <AboutLink
            imgSrc="/icons/email.svg"
            linkRef="https://www.Gmail.com"
            title="Email Jason"
          />
          <AboutLink
            imgSrc="/icons/linkedin.svg"
            linkRef="https://www.LinkedIn.com"
            title="LinkedIn"
          />
          <AboutLink
            imgSrc="/icons/youtube.svg"
            linkRef="https://www.Youtube.com"
            title="YouTube"
          />
          <AboutLink
            imgSrc="/icons/tiktok.svg"
            linkRef="https://www.TikTok.com"
            title="TikTok"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionMain;
