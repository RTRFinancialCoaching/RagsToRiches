import "../CSS/Services.css";

const Services = () => {
  return (
    <div className="body-services">
      <div className="services-back"></div>
      <h1>What’s included when we work together?</h1>
      <p>Click each service to learn more</p>
      <div className="services-container">
        <div className="services-grid">
          <div className="services-li">
            <a href="/Services/0">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Retirement Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/1">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Tax Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/2">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Investment Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/3">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Insurance Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/4">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Legacy Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/5">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Employee Benefits</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/6">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Financial Therapy</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/7">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Life Transition Planning</h3>
            </a>
          </div>
          <div className="services-li">
            <a href="/Services/8">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Business Planning</h3>
            </a>
          </div>
          <div></div>
          <div className="services-li">
            <a href="/Services/9">
              <div className="services-li-img">
                <img src="/icons/business-bag.svg" />
              </div>
              <h3>Other Topics</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
