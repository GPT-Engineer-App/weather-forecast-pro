import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to Weather Forecast App</h1>
        <p className="text-center">
          Get the latest weather updates for your location.
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/about" className="mr-4 text-blue-500">About</Link>
          <Link to="/contact" className="text-blue-500">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;