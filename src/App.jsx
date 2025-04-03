import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Suspense, lazy } from "react";

// styles
import "./assets/styles.css";

// pages
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/NotFound";
const Blog = lazy(() => import("./components/Blog"));
const Articles = lazy(() => import("./components/Articles"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="articles"
        element={
          <Suspense fallback={<div className="loader" />}>
            <Articles />
          </Suspense>
        }
      />
      <Route path="articles/:slug" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
