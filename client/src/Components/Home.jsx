import React from 'react';
import img from '../Assets/System-DMS.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md text-center">
        <Link to="/users">
          <div className="">
            <h2 className="text-2xl font-bold text-blue"> View All Users</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;


