import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const githubLink = 'https://github.com/mcgintyb14';
  const linkedinLink = 'https://www.linkedin.com/in/brendan-mcginty-3019b4114/';
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    navigate('/contactme');
  };

  return (
    <footer style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ margin: '0 10px' }}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{ border: '3px solid transparent' }} />
        </a>
      </div>
      <div style={{ margin: '0 10px' }}>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ border: '3px solid transparent' }} />
        </a>
      </div>

      {/* <div style={{ margin: '0 10px', cursor: 'pointer' }} onClick={handleEnvelopeClick}>
      <FontAwesomeIcon icon="fas fa-envelope"/>
      </div> */}
    </footer>
  );
}

export default Footer;
