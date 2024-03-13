import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import App from './app.jsx';
import Resume from './components/Pages/resume.jsx'; // Import your Resume component
import Home from './components/Pages/home.jsx';
import Portfolio from './components/Pages/portfolio.jsx';
import AboutMe from './components/Pages/aboutme.jsx';
import ContactMe from './components/Pages/contactme.jsx';

// Define the main function to export
function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      error: <Error />,
      children: [
        {
          path: '/resume',
          element: <Resume />
        },
        {
          path: '/contactme', 
          element: <ContactMe />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/aboutme',
          element: <AboutMe />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

// Export the Main function as default
export default Main;
