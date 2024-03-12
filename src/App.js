import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Resume from '../src/components/Pages/resume'; // Import your Resume component
import Header from './components/Header'
import Footer from './components/Footer'; // Import your Footer component
import Home from './components/Pages/home'
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
          </Routes>
        </main>
        <Footer icons={icons} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));