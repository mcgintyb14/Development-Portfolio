// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// import Nav from './components/Nav/Nav';
import Header from './components/Header/index'; // Importing the Header component
import Footer from './components/Footer/index'; // Importing the Footer component

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header /> {/* Include the Header component here */}
      {/* <Nav /> */}
      <Outlet />
      <Footer /> {/* Include the Footer component here */}
    </>
  );
}

export default App;
