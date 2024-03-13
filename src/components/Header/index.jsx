import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define the background image style
  const headerStyle = {
    backgroundImage: `url('/beach-quotes-1559667853.jpg')`, // Use a relative path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
    textAlign: 'center',
    fontSize: '24px',
  };

  // Define the style for the list
  const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyleType: 'none', // Remove bullets
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
  };

  // Define the style for the list items
  const listItemStyle = {
    margin: '0 10px', // Add spacing between list items
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <Link to="/resume" style={{ color: 'white' }}>Resume</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/contactme" style={{ color: 'white' }}>Contact Me</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/portfolio" style={{ color: 'white' }}>Portfolio</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/aboutme" style={{ color: 'white' }}>About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
