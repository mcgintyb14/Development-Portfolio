import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './app.jsx'; 
import Resume from './components/Pages/resume.jsx';
import Home from './components/Pages/home.jsx';
import Portfolio from './components/Pages/portfolio.jsx';
import AboutMe from './components/Pages/aboutme.jsx';
import ContactMe from './components/Pages/contactme.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use the App component here
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
