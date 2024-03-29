import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/header.css';

function Header() {
  // Define the background image style
  const headerStyle = {
    backgroundImage: `url('/sunset.jpg')`, // Use a relative path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px', // Adjust the height as needed
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
    textAlign: 'center',
    fontSize: '24px',
    boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.1)', // Add box shadow below the header
    position: 'relative', // Make the header position relative
  };

  // Define the style for the list
  const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none', // Remove bullets
    padding: 0, // Remove default padding
    marginTop: '27%', // Remove default margin
    position: 'relative',
  };
  
  // Define the style for the list items
  const listItemStyle = {
    margin: '0 10px', // Add spacing between list items horizontally
    marginRight: '10px', // Add 10px of space between list items horizontally
    backgroundColor: 'white',
    padding: '10px', // Adjust padding as needed
    borderRadius: '5px', // Add border radius for rounded corners
    textDecoration: 'none', // Remove underlines from links
    fontSize: '18px', // Set font size to 18px
    width: '75%', // Reduce width by 25%
    height: '50px', // Set fixed height for all list items
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center the text vertically
  };

  // Define the style for the active link
  const activeLinkStyle = {
    color: 'white', // Change text color for active link
    backgroundColor: '#157885', // Change background color for active link
  };

  // Style for your name
  const nameStyle = {
    position: 'absolute',
    left: '10%', // Position 10% from the left side
    fontSize: '40px', // Set font size to 40px
  };

  return (
    <header style={headerStyle}>
      <div style={nameStyle}>Brendan McGinty</div>
      <nav>
        <ul id='ul-container' style={listStyle}>
          <Link to="/resume" style={{ textDecoration: 'none' }}>
            <li style={listItemStyle} activeStyle={activeLinkStyle}>
              Resume
            </li>
          </Link>
          <Link to="/contactme" style={{ textDecoration: 'none' }}>
            <li style={listItemStyle} activeStyle={activeLinkStyle}>
              Contact Me
            </li>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <li style={listItemStyle} activeStyle={activeLinkStyle}>
              Portfolio
            </li>
          </Link>
          <Link to="/aboutme" style={{ textDecoration: 'none' }}>
            <li style={listItemStyle} activeStyle={activeLinkStyle}>
              About Me
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
