import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      }
    ],
  }
]);
