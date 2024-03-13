import React from 'react';
// import '../../index.css';

function Portfolio() {
  return (
    <section style={{ marginTop: '30px'}} id="Work">
      <h2 id="Work-Header">Work</h2>
      <div className="work-links" style={{ marginBottom: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '75%' }}>
        <a id="work-links1" href="https://github.com/JessicaDubina/exam-builder" target="_blank" style={{ width: '90%', marginBottom: '20px' }}>
          <div className="card" id="card1">
            <h3>Exam Builder</h3>
            <h4>MERN Stack</h4>
          </div>
        </a>
        <a id="work-links2" href="https://github.com/mcgintyb14/E-commerce-Server" target="_blank" style={{ width: '90%', marginBottom: '20px' }}>
          <div className="card" id="card2">
            <h3>E-commerce Back End</h3>
            <h4>Javascript / SQL</h4>
          </div>
        </a>
        <a id="work-links3" href="https://github.com/mcgintyb14/Gnome-Rogues" target="_blank" style={{ width: '90%', marginBottom: '20px' }}>
          <div className="card" id="card3">
            <h3>Gnome Rogues Game</h3>
            <h4> Javascript / SQL </h4>
          </div>
        </a>
        <a id="work-links4" href="https://note-taker-9rv4.onrender.com/" target="_blank" style={{ width: '90%', marginBottom: '20px' }}>
          <div className="card" id="card4">
            <h3> Note Taker App </h3>
            <h4> Express / JS </h4>
          </div>
        </a>
        <a id="work-links5" href="https://mcgintyb14.github.io/Weather-Forecaster1/" target="_blank" style={{ width: '90%', marginBottom: '20px' }}>
          <div className="card" id="card5">
            <h3> Weather Forecaster </h3>
            <h4> API Calls / Javascript </h4>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
