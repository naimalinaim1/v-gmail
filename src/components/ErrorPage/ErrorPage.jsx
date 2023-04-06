import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-500">
          Oops! <br />
          Page not found
        </h2>
        <a href="/" className="btn btn-error mt-6">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
