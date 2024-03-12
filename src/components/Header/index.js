import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define the background image style
  const headerStyle = {
    backgroundImage: '../../public/cover-photo.jpg`}', // Adjust the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
    textAlign: 'center',
    fontSize: '24px',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
