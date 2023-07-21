import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import CharactersPage from './routes/CharactersPage';
import HomePage from './routes/HomePage';
import GamesPage from './routes/GamesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/characters',
        element: <CharactersPage />,
      },
      {
        path: '/games',
        element: <GamesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
