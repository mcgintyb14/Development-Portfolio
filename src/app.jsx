import { Outlet } from "react-router-dom";
import Header from "./components/Header/index"; // Importing the Header component
import Footer from "./components/Footer/index"; // Importing the Footer component

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
