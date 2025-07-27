import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import "./index.css"; // Your global CSS (assuming it's still named index.css)
import router from "./routes"; // Import the router configuration
import { RouterProvider } from "react-router-dom"; // Import RouterProvider

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Create a React root and render the application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Provide the router to the entire application */}
    <RouterProvider router={router} />
  </React.StrictMode>
);