import "../CSS/Action.css";

const Action = () => {
  return (
    <div className="action-body">
      <div className="action-back"></div>
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
      </div>
    </div>
  );
};

export default Action;
