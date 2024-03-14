import React from "react";
import "../../Assets/aboutme.css";
import headshot from "../../../public/headshot.jpg"; // Import the headshot image

function AboutMe() {
  return (
    <div className="about-container" id="bio">
      <h1 className="about-header"> About Me </h1>
      <div className="about-content">
        <img src={headshot} alt="My Headshot" className="about-image" />
        <div className="about-text">
          <p className="about-paragraph">
            My name is Brendan McGinty, and I have spent my career working in
            consulting and finance. In college, I attended the Wharton
            Undergraduate School of Business where I was also a member of the
            Varsity Football team as well. After graduating in 2019, I worked as
            a management consultant for KPMG then transitioned to a role with
            Macquarie Asset Management.
          </p>
          <p className="about-paragraph">
            I have recently graduated from a full time, 3-month coding Bootcamp
            through UC Berkely which allowed me to develop a suite of full stack
            development skills, and this page will be used as a portfolio of my
            work as I continue to develop and hone better skills. Please use
            this page to to browse some of my recent projects in the 'portfolio'
            tab and feel free to reach out to me with either icon links below or
            the 'Contact Me' page!{" "}
          </p>
          <h2 className="about-header">Previous Employment</h2>
          <p className="about-paragraph">
            Before graduating from my Bootcamp, I was recently an Operational
            Risk Executive within the Non-Financial Risk Team within the Public
            Investments business at Macquarie Asset Management, Focusing on
            strategic risk initiatives as well as assurance, incident and issue
            management, and risk framework uplift across the business.
            Previously a senior analyst in the Regulatory Affairs & Aggregate
            Risk (RAAR) Team within RMG at Macquarie.
          </p>
          <p className="about-paragraph">
            I am experienced in business as well as risk advisory; including
            operational risk, financial risk, and extensive RCSA experience. I
            Graduated in May 2019 from Wharton’s Undergraduate School of
            Business with a concentration in Management. Recruited to play
            Varsity Football at the University of Pennsylvania and played for
            two years before suffering an injury and being offered to stay on as
            a Student Coach for the remaining two years. Professional experience
            leading risk management and marketing efforts in large financial,
            pharmaceutical, and consulting firms. Strengths include outstanding
            leadership skills, quickly developing strong client and team
            relationships, excellent communication, and driving superior
            results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
