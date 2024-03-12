import React from 'react';

function Resume() {
  return (
    <div>
      <div>
        <h2>About Me</h2>
        <p>
          Insert your short biography here. You can write a brief description
          about yourself, your skills, experiences, and anything else you'd
          like to highlight.
        </p>
      </div>
      <div>
        <h2>Resume</h2>
        <iframe
          title="Resume"
          src={`${process.env.PUBLIC_URL}/resume2024.pdf`}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ddd' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
