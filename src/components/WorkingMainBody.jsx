const WorkingMainBody = () => {
  return (
    <div className="working-body">
      <div className="working-back"></div>
      <div className="working-main">
        <div className="working-content">
          <h1>Working Together</h1>
          <p>What to Expect and What It Costs</p>
        </div>
        <div className="working-list">
          <div className="working-hr-div">
            <hr />
            <h3>Getting Started</h3>
            <hr />
          </div>
          <p>
            Before we begin working together, it is important that we make sure
            we would be a good fit for each other. Here is what you can expect
            for free before making a decision:
          </p>
          <div className="working-list-items">
            <div className="working-list-row">
              <div className="working-list-box">
                <h2>Discovery Call</h2>
                <p>
                  We’ll start with a complimentary 60-minute call to learn about
                  who you are, what your goals are, and the ways I could help
                  you in your journey.
                </p>
              </div>
              <h3>Step 1</h3>
            </div>
            <div className="working-list-row">
              <h3 className="working-list-right">Step 2</h3>
              <div className="working-list-box">
                <h2>Follow-Up Email</h2>
                <p>
                  After our call, I will send you an email to summarize what we
                  discussed, along with at least one free piece of personalized
                  advice that you can act on whether or not we end up working
                  together. If I don’t believe I would be the best person to
                  help you, I will make sure to include recommendations of other
                  professionals that may be a better fit for you.
                </p>
              </div>
            </div>
            <div className="working-list-row">
              <div className="working-list-box">
                <h2>We Agree to Work Together</h2>
                <p>
                  I hope to be a valuable resource to you. If you agree that I
                  can add value to your life as a trustworthy money guide, then
                  I would be honored to do so.
                </p>
              </div>
              <h3>Step 3</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingMainBody;
