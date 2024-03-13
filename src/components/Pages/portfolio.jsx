import React from "react";

function Portfolio() {
  return (
    <section id="Work">
      <h2 id="Work-Header">Work</h2>
      <div class="work-links">
        <a
          id="work-links1"
          href="https://github.com/mcgintyb14/First-Challenge"
          target="_blank"
        >
          <div class="card" id="card1">
            <h3>Coding Study Guide</h3>
            <h4>HTML</h4>
          </div>
        </a>
        <a
          id="work-links2"
          href="https://github.com/mcgintyb14/Password-Generator"
          target="_blank"
        >
          <div class="card">
            <h3>Random Password Generator</h3>
            <h4>HTML+CSS+Javascript</h4>
          </div>
        </a>
        <a id="work-links3" href="#" target="_blank">
          <div class="card">
            <h3>Pet Projects</h3>
            <h4>Coming Soon</h4>
          </div>
        </a>
        <a id="work-links4" href="#" target="_blank">
          <div class="card">
            <h3>Placeholder Project 2</h3>
            <h4>Coming Soon</h4>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
