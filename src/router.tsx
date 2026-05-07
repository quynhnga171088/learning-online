import { createBrowserRouter } from 'react-router-dom';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import('app/pages/home/HomePage.tsx');
          return { Component };
        }
      }, {
        path: 'featured',
        lazy: async () => {
          const { default: Component } = await import('app/pages/featured/FeaturedPage.tsx');
          return { Component };
        }
      }, {
        path: 'articles',
        lazy: async () => {
          const { default: Component } = await import('app/pages/articles/ArticlesPage.tsx');
          return { Component };
        }
      }, {
        path: 'articles/:id',
        lazy: async () => {
          const { default: Component } = await import('app/pages/article/ArticleDetailPage.tsx');
          return { Component };
        }
      }, {
        path: 'about',
        lazy: async () => {
          const { default: Component } = await import('app/pages/about/AboutPage.tsx');
          return { Component };
        }
      }, {
        path: 'author',
        lazy: async () => {
          const { default: Component } = await import('app/pages/author/author.tsx');
          return { Component };
        }
      }, {
        path: 'test',
        lazy: async () => {
          const { default: Component } = await import('app/pages/test/test.tsx');
          return { Component };
        }
      }, {
        path: 'test/:testId',
        lazy: async () => {
          const { default: Component } = await import('app/pages/test/testDetail.tsx');
          return { Component };
        }
      }, {
        path: '*',
        lazy: async () => {
          const { default: Component } = await import('app/pages/errorPages/NotFoundPage.tsx');
          return { Component };
        }
      }
    ]
  }
]);

export default router;
