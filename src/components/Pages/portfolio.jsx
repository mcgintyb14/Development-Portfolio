import React from 'react';
import '../../index.css'; // Import your CSS file

function Portfolio() {
  return (
    <section id="Work">
      <h2 id="Work-Header">Work</h2>
      <div className="work-links">
        <a id="work-links1" href="https://github.com/JessicaDubina/exam-builder" target="_blank">
          <div className="card" id="card1">
            <h3>Exam Builder</h3>
            <h4>MERN Stack</h4>
          </div>
        </a>
        <a id="work-links2" href="https://github.com/mcgintyb14/E-commerce-Server" target="_blank">
          <div className="card">
            <h3>E-commerce Back End</h3>
            <h4>Javascript / SQL</h4>
          </div>
        </a>
        <a id="work-links3" href="#" target="_blank">
          <div className="card">
            <h3>Pet Projects</h3>
            <h4>Coming Soon</h4>
          </div>
        </a>
        <a id="work-links4" href="#" target="_blank">
          <div className="card">
            <h3>Placeholder Project 2</h3>
            <h4>Coming Soon</h4>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
