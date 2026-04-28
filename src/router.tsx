import { createBrowserRouter } from 'react-router-dom';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'author',
        lazy: async () => {
          const { default: Component } = await import('app/pages/author/author.tsx');
          return { Component };
        }
      }, {
        path: '*',
        lazy: async () => {
          const { default: Component } = await import('app/pages/errorPages/NotFoundPage.tsx');
          return { Component };
        }
      }, {
        index: true,
        lazy: async () => {
          const { default: Component } = await import('app/pages/home/HomePage.tsx');
          return { Component };
        }
      }
    ]
  }
]);

export default router;
