import React from 'react';

function Resume() {
  return (
      <div>
        <h2>Resume</h2>
        <iframe
          title="Resume"
          src="/resume2024.pdf"
          width="100%"
          height="600px"
          style={{ border: '1px solid #ddd' }}
        ></iframe>
      </div>
  );
}

export default Resume;
