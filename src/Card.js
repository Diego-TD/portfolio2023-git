import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center p-4 bg-gray-200">
      <img
        src="../public/dtd-formal.png"
        alt="Your Name"
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">Diego Torres Durante</h2>
        <p>Software Engineer</p>
        <p>Email: your.email@example.com</p>
        <p>Location: Your City, Country</p>
        <div className="flex space-x-2">
          {/* Add social icons or links*/}
          <a href="#" target="_blank" rel="noopener noreferrer">
            {/* Social icon/image */}
          </a>
          {/* Add more social icons*/}
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 mt-2 rounded">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Card;


