import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { CreatePetPage } from './pages/pets/create.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PetsListPage } from './pages/pets/list.jsx';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pets/create',
    element: <CreatePetPage />,
  },
  {
    path: '/pets/list',
    element: <PetsListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
