import React from "react";
import NavBar from "../components/NavBar"; // Import NavBar to display it on the error page

function ErrorPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {/* Display the NavBar on the error page */}
            <NavBar />
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                    Oops! Looks like something went wrong.
                </h1>
                <p className="text-lg text-gray-700">
                    The page you are looking for does not exist or an unexpected error occurred.
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;
