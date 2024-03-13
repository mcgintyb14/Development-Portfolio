import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Define the background image style
  const headerStyle = {
    backgroundImage: `url('/beach-quotes-1559667853.jpg')`, // Use a relative path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px', // Adjust the height as needed
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
    backgroundColor: 'white',
    listStyleType: 'none', // Remove bullets
    padding: 0, // Remove default padding
    marginTop: '40%', // Remove default margin
    height: '100%',
  };

  // Define the style for the list items
  const listItemStyle = {
    margin: '0 10px', // Add spacing between list items
    backgroundColor: 'white',
    padding: '10px', // Adjust padding as needed
    borderRadius: '5px', // Add border radius for rounded corners
  };

  // Define the style for the active link
  const activeLinkStyle = {
    color: 'white', // Change text color for active link
    backgroundColor: '#157885', // Change background color for active link
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <Link to="/resume" style={{ color: 'black' }} activeStyle={activeLinkStyle}>
              Resume
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/contactme" style={{ color: 'black' }} activeStyle={activeLinkStyle}>
              Contact Me
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/portfolio" style={{ color: 'black' }} activeStyle={activeLinkStyle}>
              Portfolio
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/aboutme" style={{ color: 'black' }} activeStyle={activeLinkStyle}>
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
