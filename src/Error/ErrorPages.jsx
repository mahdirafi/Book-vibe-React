import React from "react";
import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center space-y-4">
        
        <h1 className="text-8xl font-bold text-error">404</h1>
        
        <h2 className="text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-gray-500">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPages;