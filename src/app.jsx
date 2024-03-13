// App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Layout from './components/Layout/layout'; // Importing the Layout component

const App = () => {
  return (
    <React.StrictMode>
      <Layout>
        <Main />
      </Layout>
    </React.StrictMode>
  );
};

export default App;
