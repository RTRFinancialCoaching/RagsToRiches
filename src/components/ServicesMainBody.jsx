import React, { useEffect, useState } from "react";
import ServiceLink from "./ServiceLink";

const ServicesMainBody = () => {
  return (
    <div>
      <div className="services-page-back"></div>
      <div className="services-contain">
        <h1>
          What’s included <br /> when we work together?
        </h1>
        <div className="services-main">
          <ul id="services-ul">
            <ServiceLink
              id="0"
              imgSrc="/icons/business-bag.svg"
              h2="Retirement Planning"
            >
              <h4>Pre-Retirement Planning:</h4>
              <ul className="services-ul">
                <li>
                  <p>Craft a unique plan based on your values and life goals</p>
                </li>
                <li>
                  <p>
                    Optimize the journey so you aren’t sacrificing happiness
                    along the way
                  </p>
                </li>
                <li>
                  <p>
                    Retirement savings analysis and projected balance at
                    retirement
                  </p>
                </li>
                <li>
                  <p>
                    Identify potential employer-sponsored retirement savings
                    accounts for small business owners
                  </p>
                </li>
                <li>
                  <p>
                    Cost of living comparison when transitioning to retirement
                  </p>
                </li>
                <li>
                  <p>Roth conversion strategies*</p>
                </li>
                <li>
                  <p>Exit planning for small business owners</p>
                </li>
              </ul>
              <h4>In-Retirement Planning:</h4>
              <ul className="services-ul">
                <li>
                  <p>
                    Social Security claiming strategies (including spousal,
                    survivor, and divorced spouse benefits)
                  </p>
                </li>
                <li>
                  <p>
                    Summarize spending capabilities from risk-free sources
                    (Social Security, pensions, annuities, etc.) and from
                    invested assets (retirement accounts, other investments,
                    rental income, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    Tax-efficient investing and withdrawal sequencing (from
                    Traditional, Roth, and Taxable accounts)*
                  </p>
                </li>
                <li>
                  <p>
                    Analyze Medicare options and sources of health care after
                    retirement but before age 65
                  </p>
                </li>
                <li>
                  <p>Medicare IRMAA surcharge minimization</p>
                </li>
                <li>
                  <p>
                    Utilize qualified charitable distributions from IRAs
                    beginning at age 70.5 to efficiently give to charities
                  </p>
                </li>
                <li>
                  <p>
                    Minimize the chance of outliving your assets while spending
                    comfortably throughout your life
                  </p>
                </li>
                <li>
                  <p>
                    Contingency planning for market downturns in retirement*
                  </p>
                </li>
                <li>
                  <p>Inflation protection strategies</p>
                </li>
                <li>
                  <p>Widow financial transition planning</p>
                </li>
                <li>
                  <p>
                    Constantly monitor changes to taxes and Social Security so
                    you don’t have to
                  </p>
                </li>
              </ul>
              <h4> Financial Independence / Retire Early (FIRE) Planning:</h4>
              <ul className="services-ul">
                <li>
                  <p>
                    Build a post-work spending plan that is sustainable for the
                    rest of your life
                  </p>
                </li>
                <li>
                  <p>Construct Roth conversion ladders*</p>
                </li>
                <li>
                  <p>Tax bracket management to minimize tax payments</p>
                </li>
                <li>
                  <p>
                    Identify years with low taxable income to take advantage of
                    0% long-term capital gains or Roth conversions
                  </p>
                </li>
                <li>
                  <p>
                    Healthcare planning and understanding the ACA subsidy cliff
                  </p>
                </li>
                <li>
                  <p>
                    Maximizing HSA funds pre-retirement and optimizing HSA usage
                    in retirement
                  </p>
                </li>
                <li>
                  <p>
                    Maintaining a sense of purpose and fulfillment in retirement
                  </p>
                </li>
              </ul>
              <p>
                *Portfolio-specific advice is offered at no extra cost through
                our partnered investment advisory firm
              </p>
            </ServiceLink>
            <ServiceLink
              id="1"
              imgSrc="/icons/business-bag.svg"
              h2="Tax Planning"
            >
              <ul className="services-ul">
                <li>
                  <p>
                    Review your annual tax returns for accuracy and to identify
                    opportunities for future tax savings
                  </p>
                </li>
                <li>
                  <p>
                    Work directly with your tax preparer to identify and act on
                    optimal tax strategies
                  </p>
                </li>
                <li>
                  <p>
                    Analyze your tax situation before the end of each year to
                    take advantage of planning opportunities including Roth
                    conversions or tax loss harvesting*
                  </p>
                </li>
                <li>
                  <p>Optimize HSA contributions and distributions</p>
                </li>
                <li>
                  <p>
                    Calculate annual RMDs (Required Minimum Distributions) and
                    assist with distributions
                  </p>
                </li>
                <li>
                  <p>
                    How to give to charities in the most tax-efficient ways
                    (DAFs, bunching, trusts, etc.)
                  </p>
                </li>
              </ul>
              <p>
                *Portfolio-specific advice is offered at no extra cost through
                our partnered investment advisory firm
              </p>
            </ServiceLink>
            <ServiceLink
              id="2"
              imgSrc="/icons/business-bag.svg"
              h2="Investment Planning"
            >
              <h4>
                At no extra cost, you will receive the following services
                through our partnered investment advisory firm:
              </h4>
              <ul className="services-ul">
                <li>
                  <p>Short-, Medium-, and long-term goal analysis</p>
                </li>
                <li>
                  <p>Risk tolerance analysis</p>
                </li>
                <li>
                  <p>Investment and market volatility education</p>
                </li>
                <li>
                  <p>Liquidity needs analysis for goals</p>
                </li>
                <li>
                  <p>Asset allocation strategies</p>
                </li>
                <li>
                  <p>Semi-annual rebalancing</p>
                </li>
                <li>
                  <p>ESG / Values-based investing</p>
                </li>
                <li>
                  <p>Identify tax loss harvesting opportunities</p>
                </li>
                <li>
                  <p>Capital gains management</p>
                </li>
                <li>
                  <p>Retirement savings analysis</p>
                </li>
                <li>
                  <p>
                    Roth conversions, backdoor Roth contributions, and Mega
                    backdoor Roth contributions
                  </p>
                </li>
                <li>
                  <p>RMD planning</p>
                </li>
                <li>
                  <p>Manage sequence of returns risk</p>
                </li>
                <li>
                  <p>Sustainable withdrawal rate analysis</p>
                </li>
                <li>
                  <p>Monte Carlo simulations</p>
                </li>
                <li>
                  <p>
                    Emergency fund optimization and high-yield savings
                    strategies
                  </p>
                </li>
                <li>
                  <p>
                    Prevent common investing mistakes including education about
                    behavioral finance heuristics
                  </p>
                </li>
                <li>
                  <p>Beneficiary designation analysis and strategies</p>
                </li>
                <li>
                  <p>
                    Properly handle inherited IRA distributions and optimize
                    withdrawals for taxes
                  </p>
                </li>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="3"
              imgSrc="/icons/business-bag.svg"
              h2="Insurance Planning"
            >
              <h4>
                I offer objective observations of insurance policies without
                trying to sell you anything. I will organize all policies into
                one document to easily assess coverage needs and gaps.
              </h4>
              <h4>Health insurance</h4>
              <ul className="services-ul">
                <li>
                  <p>Open enrollment optimization</p>
                </li>
                <li>
                  <p>
                    Analyze policy for total projected annual medical costs
                    including both premiums & out-of-pocket costs
                  </p>
                </li>
                <li>
                  <p>HSA analysis and optimization</p>
                </li>
                <li>
                  <p>Medicare planning</p>
                </li>
              </ul>
              <h4>Life insurance</h4>
              <ul className="services-ul">
                <li>
                  <p>Conduct a life insurance needs analysis</p>
                </li>
                <li>
                  <p>Review existing policies for adequacy and efficiency</p>
                </li>
                <li>
                  <p>
                    Review beneficiaries and ownership structure of policies
                  </p>
                </li>
                <li>
                  <p>
                    Identify potential needs for Irrevocable Life Insurance
                    Trusts (ILITs)
                  </p>
                </li>
                <li>
                  <p>
                    Provide a reminder to renew or replace expiring policies
                  </p>
                </li>
              </ul>
              <h4>Disability insurance</h4>
              <ul className="services-ul">
                <li>
                  <p>
                    Short- and long-term policy reviews for adequacy, tax
                    efficiency
                  </p>
                </li>
                <li>
                  <p>
                    Explanation of benefits in existing policies (any-occupation
                    vs own-occupation, elimination period, benefit period)
                  </p>
                </li>
              </ul>
              <h4>Long-Term Care insurance</h4>
              <ul className="services-ul">
                <li>
                  <p>
                    Cost analysis of nursing homes, assisted living, retirement
                    communities, and in-home care options
                  </p>
                </li>
                <li>
                  <p>
                    Pros and cons of funding a long-term care event through
                    long-term care insurance, self-insuring, purchasing a hybrid
                    life insurance policy, or using Medicaid
                  </p>
                </li>
              </ul>
              <h4>Property & Casualty insurance (home, auto, and umbrella)</h4>
              <ul className="services-ul">
                <li>
                  <p>Review policies to:</p>
                </li>
                <ul className="services-ul">
                  <li>
                    <p>Find ways to lower premiums</p>
                  </li>
                  <li>
                    <p>Assess appropriate deductible levels</p>
                  </li>
                  <li>
                    <p>Ensure adequate coverage amounts</p>
                  </li>
                  <li>
                    <p>Remove unnecessary additional features</p>
                  </li>
                  <li>
                    <p>
                      Obtain additional asset protection with umbrella coverage
                    </p>
                  </li>
                </ul>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="4"
              imgSrc="/icons/business-bag.svg"
              h2="Legacy Planning"
            >
              <ul className="services-ul">
                <li>
                  <p>
                    Review existing estate planning documents (wills, trusts,
                    powers of attorney, advance medical directives, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    Perform a beneficiary analysis and identify any conflicts
                    between what is written in a will, trust, titling of an
                    asset, or beneficiary designation
                  </p>
                </li>
                <li>
                  <p>
                    Create a clear map of what each beneficiary is projected to
                    receive from your estate
                  </p>
                </li>
                <li>
                  <p>Plan for guardianship of minor children</p>
                </li>
                <li>
                  <p>
                    Work with you to identify gaps between the current estate
                    planning structure and what is intended
                  </p>
                </li>
                <li>
                  <p>
                    Work with your estate attorney to make any changes necessary
                  </p>
                </li>
                <li>
                  <p>
                    Assist in the creation of an estate plan for digital matters
                    (password strategies, utilizing cloud storage, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    Teach tax-efficient methods of gifting during life and at
                    death
                  </p>
                </li>
                <li>
                  <p>Estate tax minimization strategies</p>
                </li>
                <li>
                  <p>
                    Minimize the probate process by utilizing account titling
                    options and revocable living trusts
                  </p>
                </li>
                <li>
                  <p>
                    Irrevocable Life Insurance Trust (ILIT) consideration to
                    exempt life insurance from estate taxes
                  </p>
                </li>
                <li>
                  <p>Business succession planning for small business owners</p>
                </li>
                <li>
                  <p>
                    Create an ethical will to pass on cherished memories and
                    stories to your loved ones
                  </p>
                </li>
                <li>
                  <p>
                    Ensure both spouses have a basic understanding of family
                    finances in case something happens to the other spouse
                  </p>
                </li>
                <li>
                  <p>
                    Have appropriate conversations with adult children and other
                    heirs to ensure a smooth and healthy transition of
                    inheritances
                  </p>
                </li>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="5"
              imgSrc="/icons/business-bag.svg"
              h2="Employee Benefit Planning"
            >
              <ul className="services-ul">
                <li>
                  <p>Optimize retirement plan contributions</p>
                </li>
                <li>
                  <p>Analyze Traditional versus Roth contributions*</p>
                </li>
                <li>
                  <p>
                    Asset allocation recommendations within the retirement plan*
                  </p>
                </li>
                <li>
                  <p>Review restricted stock units and their vesting dates</p>
                </li>
                <li>
                  <p>
                    Review incentive stock options / non-qualified stock options
                    and when the options are exercisable
                  </p>
                </li>
                <li>
                  <p>Plan for optimal taxation of stock compensation</p>
                </li>
                <li>
                  <p>
                    Optimize choice of health insurance policy in the open
                    enrollment period
                  </p>
                </li>
                <li>
                  <p>HSA or FSA optimization</p>
                </li>
                <li>
                  <p>
                    List of group insurance benefits (life, disability,
                    accidental death and dismemberment, etc.) available
                  </p>
                </li>
                <li>
                  <p>Review deferred compensation plan options and benefits</p>
                </li>
                <li>
                  <p>Review of vacation and sick day policies</p>
                </li>
                <li>
                  <p>
                    List of other benefits (childcare, tuition assistance,
                    adoption assistance, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    Paycheck analysis to understand how much is being paid in
                    taxes and for other benefits
                  </p>
                </li>
                <li>
                  <p>
                    Recommended adjustments to tax withholding from pay, if
                    needed
                  </p>
                </li>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="6"
              imgSrc="/icons/business-bag.svg"
              h2="Financial Therapy"
            >
              <h4>I can teach you to:</h4>
              <ul className="services-ul">
                <li>
                  <p>
                    Recognize common cognitive biases around money / investing
                    and how to avoid making easy mistakes
                  </p>
                </li>
                <li>
                  <p>Gain control of overspending habits</p>
                </li>
                <li>
                  <p>
                    Develop a positive and empowered money mindset by
                    accomplishing real goals
                  </p>
                </li>
                <li>
                  <p>
                    Navigate money discussions between partners or other family
                    members to reduce financial conflicts
                  </p>
                </li>
                <li>
                  <p>
                    Align financial goals between partners or family members
                  </p>
                </li>
                <li>
                  <p>Set financial boundaries with family and friends</p>
                </li>
                <li>
                  <p>
                    Manage fear, anxiety, avoidance, overwhelm, or
                    procrastination around money
                  </p>
                </li>
                <li>
                  <p>
                    Achieve a better work-life balance and know when to possibly
                    consider a career shift
                  </p>
                </li>
                <li>
                  <p>
                    Create a mindful budget that is easy to follow and stick to
                  </p>
                </li>
                <li>
                  <p>Develop good financial habits and beliefs in children</p>
                </li>
                <li>
                  <p>Explore the emotional implications of inheritances</p>
                </li>
                <li>
                  <p>
                    Identify subconscious beliefs about money, including where
                    those beliefs came from and whether or not you would like to
                    change those beliefs going forward
                  </p>
                </li>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="7"
              imgSrc="/icons/business-bag.svg"
              h2="Life Transition Planning"
            >
              <h4>
                When life changes, important financial decisions must be made. I
                can be an objective thought partner for the following life
                events and more:
              </h4>
              <ul className="services-ul">
                <li>
                  <p>Newlyweds (for you or your children / grandchildren)</p>
                </li>
                <li>
                  <p>Home purchase / moving</p>
                </li>
                <li>
                  <p>Inheritance (receiving and giving)</p>
                </li>
                <li>
                  <p>Major career change</p>
                </li>
                <li>
                  <p>
                    Financial windfall (win the lottery, receive a professional
                    sports contract / entertainment contract, insurance
                    settlement, etc.)
                  </p>
                </li>
                <li>
                  <p>Retirement</p>
                </li>
                <li>
                  <p>Divorce</p>
                </li>
                <li>
                  <p>Death of a spouse</p>
                </li>
                <li>
                  <p>Major health change</p>
                </li>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="8"
              imgSrc="/icons/business-bag.svg"
              h2="Small Business Planning for Content Creators"
            >
              <ul className="services-ul">
                <li>
                  <p>
                    Review business structure (Sole Proprietor vs LLC vs S-Corp
                    vs C-Corp) and explain the tax implications of each
                  </p>
                </li>
                <li>
                  <p>Establish sufficient cash reserves for your business</p>
                </li>
                <li>
                  <p>Plan for future growth and reinvestment opportunities</p>
                </li>
                <li>
                  <p>
                    Create a map of ways to increase your time spent on things
                    you enjoy in your business and delegate the rest to others,
                    which leads to higher job satisfaction, higher quality work,
                    and more scalability in your business
                  </p>
                </li>
                <li>
                  <p>
                    Work with your accountant to maximize appropriate tax
                    deductions and credits
                  </p>
                </li>
                <li>
                  <p>
                    Assess appropriate employer-sponsored retirement accounts
                    for your business and maximize either Roth or Traditional
                    contributions
                  </p>
                </li>
                <li>
                  <p>
                    Align business goals with personal goals (work life balance,
                    retire early, etc.)
                  </p>
                </li>
                <li>
                  <p>
                    Review insurance needs (health, disability, business
                    liability, etc.) and assess available options
                  </p>
                </li>
                <li>
                  <p>
                    Explore opportunities for passive revenue streams from
                    content and licensing
                  </p>
                </li>
                <li>
                  <p>Create an exit plan to eventually sell the business</p>
                </li>
                <li>
                  <p>Review and optimize pricing on goods and services</p>
                </li>

                <h4>I will teach you how to:</h4>
                <ul className="services-ul">
                  <li>
                    <p>Efficiently track business revenue and expenses</p>
                  </li>
                  <li>
                    <p>Create a budget for the business</p>
                  </li>
                  <li>
                    <p>Estimate and pay quarterly taxes</p>
                  </li>
                  <li>
                    <p>
                      Keep business finances separate from personal finances
                    </p>
                  </li>
                  <li>
                    <p>Negotiate better deals on contracts</p>
                  </li>
                </ul>
              </ul>
            </ServiceLink>
            <ServiceLink
              id="9"
              imgSrc="/icons/business-bag.svg"
              h2="Other Financial Planning Topics"
            >
              <ul className="services-ul">
                <li>
                  <p>Budgeting</p>
                </li>
                <li>
                  <p>Debt Management</p>
                </li>
                <li>
                  <p>College Planning</p>
                </li>
                <li>
                  <p>Charitable Giving</p>
                </li>
                <li>
                  <p>Home Purchases and Sales</p>
                </li>
              </ul>
            </ServiceLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesMainBody;
