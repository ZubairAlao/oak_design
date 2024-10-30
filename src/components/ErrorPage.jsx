import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-[36px] font-bold text-red-500">{error.message}</h1>
      <p className="text-[30px]  font-light mb-8 mt-4">
        Oops! 
        {error.statusText}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
