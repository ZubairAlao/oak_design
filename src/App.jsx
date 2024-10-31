import ErrorPage from './components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import { AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
]);

function App() {

  return (
    <AnimatePresence mode="wait">
      <Helmet>
        <title>The Oak Holdings</title>
        <meta name="description" content="The Oak Holdings is a consortium specializing in Venture Capital, Real Estate, Asset Management, and Financial Services. Your partner in building a robust future." />
        <meta name="keywords" content="oak holdings, oak home, oak capital" />
      </Helmet>
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
