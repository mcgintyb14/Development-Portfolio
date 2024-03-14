// ContactMe.jsx

import React, { useState } from 'react';
import '../../index.css';

function ContactMe() {
  const [ name, setName ] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const emailAddress = 'brendan.mcginty14@gmail.com';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '40px', marginTop: '40px'}}>Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '160%', padding: '10px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            placeholder='Enter your name here'
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="subject" style={{ marginRight: '10px' }}>Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: '160%', padding: '10px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            placeholder='Enter the subject of your email here'
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="body" style={{ marginRight: '10px' }}>Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ width: '160%', minHeight: '200px', padding: '10px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            placeholder='Enter the body of your email here'
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Email</button>
      </form>
    </div>
  );
}

export default ContactMe;
