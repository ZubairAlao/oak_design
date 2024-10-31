import ErrorPage from './components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import { AnimatePresence } from "framer-motion";

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
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
