import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { Suspense, lazy } from 'react';

// styles
import './styles/styles.css';

// pages
import RootLayout from './layouts/RootLayout';
import NotFound from './components/NotFound';
import Loader from './components/loader/loader';
const SingleArticle = lazy(() => import('./components/pages/SingleArticle'));
const Articles = lazy(() => import('./components/pages/Articles'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route
        index
        element={
          <Navigate
            to="/articles"
            replace
          />
        }
      />
      <Route
        path="articles"
        element={
          <Suspense fallback={<Loader />}>
            <Articles />
          </Suspense>
        }
      />
      <Route
        path="articles/:slug"
        element={<SingleArticle />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Route>
  ),
  {
    basename: '/react-4.13',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
