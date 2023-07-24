import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import MonstersPage from './pages/MonstersPage';
import ConfigPage from './pages/ConfigPage';

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
      {
        path: '/monsters',
        element: <MonstersPage />,
      },
      {
        path: '/config',
        element: <ConfigPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
