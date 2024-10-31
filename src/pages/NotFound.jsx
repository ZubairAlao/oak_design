import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen container text-center">
      <h1 className=" mt-[60px] text-3xl font-bold">404: Oops! This page doesn't exist.</h1>
      <p className="text-gray-500 mt-2 text-lg">You will be redirected to the home page shortly.</p>
    </div>
  );
};

export default NotFound;
