// App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main'; // Importing the default export from main.jsx

// Assuming you have configured your router in main.jsx
import router from './main'; 

const App = () => {
  const routerInstance = createBrowserRouter(router);

  return (
    <React.StrictMode>
      <RouterProvider router={routerInstance}>
        <Main />
      </RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
