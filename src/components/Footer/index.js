import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Footer({ icons }) {
  function getIconObject(iconName) {
    const iconMapping = {
      github: faGithub,
      linkedin: faLinkedin,
      twitter: faTwitter,
      thumbsUp: faThumbsUp, // Add thumbsUp mapping
      // Add more mappings as needed
    };

    return iconMapping[iconName] || faGithub; // Default to GitHub icon if not found
  }

  return (
    <footer>
      {icons.map((icon, index) => (
        <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={getIconObject(icon.name)} /> {/* Use getIconObject */}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
