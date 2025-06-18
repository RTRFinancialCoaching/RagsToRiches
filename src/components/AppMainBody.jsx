import React from "react";
import GridBox from "./GridBox.jsx";

const AppMainBody = () => {
  return (
    <div className="main-body">
      <div className="app-content">
        <h1>
          From Financial Success <br /> To Lasting Security
        </h1>
        <p>
          Helping first-generation success stories navigate wealth with clarity,
          confidence, and purpose
        </p>
      </div>
      <div className="app-white">
        <h2> What I Do: </h2>
        <div className="app-white-hr">
          <div className="two-hr hr-left">
            <hr className="hr-top" />
            <hr className="hr-bottom" />
          </div>
          <h3> FINANCIAL COACHING FOR THE SELF-MADE</h3>
          <div className="two-hr">
            <hr className="hr-top" />
            <hr className="hr-bottom" />
          </div>
        </div>
        <div className="app-white-grid">
          <div className="app-white-row">
            <GridBox
              icon="/icons/business-bag.svg"
              h3="Helping You with Your Present Concerns"
              p="You wouldn’t be seeking out a financial advisor if you didn’t have something specific on your mind. We’ll address anything you want to before I let you know of anything else I would optimize about your situation."
            />
            <GridBox
              icon="/icons/business-chart-mag.svg"
              h3="Setting Values-Based Goals"
              classVar="border-left border-right"
              p="After you feel comfortable with your current situation, we’ll identify your life goals and craft a plan for you to accomplish them. By the end of this process you will have a road map that you can be excited about."
            />
            <GridBox
              icon="/icons/business-chart.svg"
              h3="Optimizing Your Finances"
              p="Would you like to lower your tax bill? Have you ever wondered if there would be a benefit in switching health insurance plans in open enrollment? Do you need some extra motivation to finally draft a will? We will address all of these and more."
            />
          </div>
          <div className="app-white-row">
            <GridBox
              icon="/icons/business-color.svg"
              h3="Guiding You Through Your Most Important Life Decisions"
              classVar="border-top"
              p="Most people wait until they are close to retirement before talking to a financial advisor even though the most financially consequential decisions (buying a house, starting a family, what to do with an inheritance, etc.) happen earlier in life. I’ll be with you to ensure you make all of the right moves."
            />
            <GridBox
              icon="/icons/business-employee.svg"
              h3="Teaching Shame-Free Money Skills"
              classVar="border-left border-right border-top"
              p="You may feel like you are missing fundamental knowledge that you should have been taught growing up. It’s not your fault that you weren’t given learning opportunities in the past. From budgeting to investing principles, I will educate you on everything you need to know, judgment-free."
            />
            <GridBox
              icon="/icons/business-finance.svg"
              h3="Recognizing the Emotional Side of Finance"
              classVar="border-top"
              p="It is impossible to separate emotions from financial decisions, which is why so many of us are bad with money. Understanding why you act the way you do and why you believe the things you do about money is the first step in improving your relationship with money."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMainBody;
