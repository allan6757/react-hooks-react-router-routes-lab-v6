import { createBrowserRouter } from "react-router-dom";

// Import all page components
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // We'll create this next
import NavBar from "./components/NavBar"; // NavBar will be part of the layout

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // This is our root route
    element: (
      // We'll use a root layout to ensure NavBar is on every page
      <div>
        <NavBar />
        {/* Outlet will render the matched child route component here */}
        <div className="p-4"> {/* Add some padding for content below NavBar */}
          <Home /> {/* Home component directly rendered for the root path */}
        </div>
      </div>
    ),
    errorElement: <ErrorPage />, // This element will be rendered if any error occurs in child routes
  },
  {
    path: "/directors",
    element: (
      <div>
        <NavBar />
        <div className="p-4">
          <Directors />
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: (
      <div>
        <NavBar />
        <div className="p-4">
          <Actors />
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id", // Route with a URL parameter for movie ID
    element: (
      <div>
        <NavBar />
        <div className="p-4">
          <Movie />
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;

