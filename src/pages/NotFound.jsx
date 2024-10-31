import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen container">
      <h1 className=" mt-[60px] text-4xl font-bold">404</h1>
      <p className="text-gray-500 mt-2 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="border border-[#AF885A] text-[#AF885A] px-3 py-2 lg:px-12 lg:py-4 text-[1rem] hidden md:block
          transition-all duration-300 ease-in-out
          bg-transparent hover:bg-[#AF885A] hover:text-[#F5F5F5]
          hover:shadow-lg hover:scale-100
          active:translate-y-[2px] active:shadow-none cursor-pointer mt-5"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
