import { useEffect, useState } from "react";
import ServicesContainer from "./ServicesContainer";

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
            <div className="working-list-bar"></div>
            <div className="working-list-row">
              <h3>Step 1</h3>
              <div className="working-list-box">
                <h2>Discovery Call</h2>
                <p>
                  We’ll start with a complimentary 60-minute call to learn about
                  who you are, what your goals are, and the ways I could help
                  you in your journey.
                </p>
              </div>
            </div>
            <div className="working-list-row">
              <h3>Step 2</h3>
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
              <h3>Step 3</h3>
              <div className="working-list-box">
                <h2>We Agree to Work Together</h2>
                <p>
                  I hope to be a valuable resource to you. If you agree that I
                  can add value to your life as a trustworthy money guide, then
                  I would be honored to do so.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="working-list working-services">
          <div className="working-hr-div">
            <hr />
            <h3>What’s Included in the Process?</h3>
            <hr />
          </div>
          <p>
            New relationships begin with a three-month process where we take a
            comprehensive look at each area of your financial life at a
            <strong> flat fee of $5,100</strong> per household. The reason I
            insist on doing a comprehensive financial plan for each of my
            clients is because I know about so many ways to optimize your
            finances which would otherwise be ignored if we worked on a more
            limited engagement.
          </p>
          <h4>Click each service to learn more</h4>
          <ServicesContainer />
        </div>
        <div className="working-list">
          <div className="working-hr-div">
            <hr />
            <h3>Data Gathering</h3>
            <hr />
          </div>
          <p>
            The first step is gathering and organizing every piece of your
            financial life. I will send you a questionnaire to help me get a
            sense of who you are and where you’re at financially. During this
            time, we also outline each of your financial pain points that you
            would like to address.
          </p>
          <div className="working-list-items">
            <div className="working-list-bar" style={{ left: "26%" }}></div>
            <div className="working-list-row">
              <h3>Meeting #1:</h3>
              <div className="working-list-box">
                <h2>Discovery Call</h2>
                <p>
                  Addressing Your Concerns Everyone has a reason for seeking out
                  financial coaching, and we will make sure these issues get
                  solved before moving on to anything else. We will discuss the
                  recommendations to make sure they are a good fit and follow up
                  on the progress in future meetings.
                </p>
              </div>
            </div>
            <div className="working-list-row">
              <h3>Meeting #2:</h3>
              <div className="working-list-box">
                <h2>Describe Your Ideal Life</h2>
                <p>
                  As a financial coach, it is ultimately my job to make sure you
                  are living your best life. Now that we have addressed your
                  immediate concerns, what else would you change about your
                  situation? Would you work less hours? Retire sooner? Spend
                  more time traveling? Start a business? Own a giraffe? Each
                  story is different and we will make a plan that you will be
                  excited to pursue.
                </p>
              </div>
            </div>
            <div className="working-list-row">
              <h3>Meeting #3:</h3>
              <div className="working-list-box">
                <h2>Presentation of the Plan</h2>
                <p>
                  Here’s where the magic happens. I will compile a comprehensive
                  guide to each area of your financial life with my top
                  recommendations for each area. During this meeting, I will
                  teach you why each of these areas are important and ensure
                  that you have a comfortable level of understanding as to why
                  you should implement these strategies. We will also work
                  together both during and after the meeting to customize the
                  plan even further to your needs. I may be a financial expert,
                  but you are the expert in your own life, and together we will
                  make the best plan possible for your needs.
                </p>
              </div>
            </div>
            <div className="working-list-row">
              <h3>Follow-Up : </h3>
              <div className="working-list-box">
                <h2>Follow-Up As Needed</h2>
                <p>
                  After the initial 3-month period, we will continue to follow
                  up over the course of the next 2 months to ensure that your
                  plan is off to a good start. During this time, we will
                  communicate over email and we can schedule as many 30-minute
                  calls as you would like (within reason) to address your
                  questions. I will also send you nudges to ensure that the
                  action items are either being accomplished or modified to make
                  them more beneficial.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="working-list">
          <div className="working-hr-div">
            <hr />
            <h3>Ongoing Engagements</h3>
            <hr />
          </div>
          <p>
            Clients who complete a comprehensive planning engagement may choose
            to continue to enlist me as their guide. Pricing is calculated based
            on the complexity of needs, with a
            <strong> minimum fee of $7,200 per year</strong>, billed quarterly.
            Each year, there are 3 meetings offered in the Spring, Summer, and
            Fall where we revisit the various areas of your financial plan and
            make updates as needed. Additional meetings can be added to address
            areas of financial therapy, transition planning, or business
            planning, as needed.Unlimited communication by email or scheduled
            calls is also included.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingMainBody;
