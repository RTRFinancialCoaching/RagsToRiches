import AboutLink from "./AboutLink";

const AboutMainBody = () => {
  return (
    <div>
      <div className="about-background"></div>
      <div className="about-contain">
        <div className="about-main">
          <div className="about-main-top">
            <img src="/Jase.jpg" />
            <div className="about-top-title">
              <div className="about-top-contain">
                <h1>Jason Floyd</h1>
                <p>FOUNDER & COLOSUL NERD</p>
                <div className="about-top-links">
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
          <div className="about-content">
            <div className="about-content-side">
              <div className="about-content-title">
                <h3>The man the myth the legend</h3>
                <div className="about-connect-hr">
                  <hr className="about-hr-top" />
                  <hr className="about-hr-bottom" />
                </div>
              </div>
              <h4>Why though?</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="about-content-side about-content-border">
              <div className="about-content-title">
                <h3>Tax Evasion</h3>
                <div className="about-connect-hr">
                  <hr className="about-hr-top" />
                  <hr className="about-hr-bottom" />
                </div>
              </div>
              <h4>How To</h4>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque co
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="about-content-pics">
                <img src="/Jase/Jase2.jpg" />
                <img src="/Jase/Jase3.jpg" />
                <img src="/Jase/Jase4.jpg" />
                <img src="/Jase/Jase5.jpg" />
                <img src="/Jase/Jase6.jpg" />
                <img src="/Jase/Jase7.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainBody;
