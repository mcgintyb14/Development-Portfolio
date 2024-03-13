import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main'; // Importing the default export from main.jsx

const App = () => {
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
};

export default App; // Exporting App as default
