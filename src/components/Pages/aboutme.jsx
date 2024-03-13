import React from "react";
import "../../index.css";
import headshot from "../../../public/headshot.jpg"; // Import the headshot image

function AboutMe() {
  return (
    <div
      style={{ width: "80%", margin: "auto", position: "relative" }}
      id="bio"
    >
      <h1 style={{ textAlign: "center" }}> About Me </h1>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src={headshot}
          alt="My Profile"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "55%",
            marginRight: "50px",
          }}
        />
        <div>
          <p style={{ marginBottom: "50px" }}>
            My name is Brendan McGinty, and I have spent my career working in
            consulting and finance. In college, I attended the Wharton
            Undergraduate School of Business where I was also a member of the
            Varsity Football team as well. After graduating in 2019, I worked as
            a management consultant for KPMG then transitioned to a role with
            Macquarie Asset Management.
          </p>
          <p>
            I have recently started a full time, 3-month coding Bootcamp through
            UC Berkely to develop a suite of full stack development skills, and
            this page will be used as a portfolio of my work as I continue to
            develop and hone better skills.{" "}
          </p>
          <h2 style={{ textAlign: "center", marginBottom: "5vh", marginTop: "5vh" }}>
            Work Bio
          </h2>
          <p>
            Executive in the Non-Financial Risk Team within the Public
            Investments business at Macquarie Asset Management. Focusing on
            strategic risk initiatives as well as assurance, incident and issue
            management, and risk framework uplift across the business.
            Previously a senior analyst in the Regulatory Affairs & Aggregate
            Risk (RAAR) Team within RMG at Macquarie. Experienced in business
            and risk advisory, including operational risk, financial risk, and
            extensive RCSA experience. Graduated in May 2019 from Wharton’s
            Undergraduate School of Business with a concentration in Management.
            Recruited to play Varsity Football at the University of Pennsylvania
            and played for two years before suffering an injury and being
            offered to stay on as a Student Coach for the remaining two years.
            Professional experience leading risk management and marketing
            efforts in large financial, pharmaceutical, and consulting firms.
            Strengths include outstanding leadership skills, quickly developing
            strong client and team relationships, excellent communication, and
            driving superior results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
