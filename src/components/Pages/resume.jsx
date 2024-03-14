import React from 'react';
import '../../index.css';

function Resume() {
  return (
    <div className='resume-page'>
      <h2 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '80px'}}>Resume</h2>
      <div className="iframe-container"  style={{display: 'flex', justifyContent: 'center', height: '100vh', marginBottom: '200px'}}>
        <iframe
          title="Resume"
          src="/resume2024.pdf"
          style={{ border: '1px solid #ddd', width: '75%' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
