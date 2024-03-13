import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Resume from './Pages/resume'; // Import your Resume component
import Header from './Header/index'
import Footer from './Footer/index'; // Import your Footer component
import Home from './Pages/home';
import Portfolio from './Pages/portfolio';
import AboutMe from './Pages/aboutme';
import ContactMe from './Pages/contactme';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Import the icon for the footer

export default function App() { // Change the function name to App
  const icons = [faThumbsUp];

  return (
    <Router>
      <div>
          <Header/>
        <main>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/contactme' element={<ContactMe />} />
          </Routes>
        </main>
        <Footer icons={icons} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
