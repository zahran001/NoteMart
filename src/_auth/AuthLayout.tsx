import WaterDropGrid from '@/_root/pages/WaterDropGrid';
import { Outlet, Navigate } from 'react-router-dom';
const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex min-h-screen">
          {/* Left Section */}
          <section className="flex-1 flex justify-center items-center bg-black">
            <Outlet />
          </section>

          {/* Right Section with Image */}
          <div className="hidden xl:flex flex-1 items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
            <img
              src="/assets/images/book.jpg"
              alt="logo"
              className="max-h-full max-w-lg rounded-lg shadow-xl transform scale-90 hover:scale-100 transition duration-300 ease-in-out"
            />
          </div>

          <div className="hidden xl:flex flex-1 items-center justify-center ">
            <p className="max-h-full max-w-lg rounded-lg shadow-xl ">
               <WaterDropGrid />    
            </p>
          </div>

        </div>
      )}
    </>
  );
};

export default AuthLayout;



