import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center p-4 bg-gray-200">
      <div>
        <h2 className="text-xl font-bold">Diego Torres Durante</h2>
        <p>!-! Fullstack developer</p>
        
        <img
        src={process.env.PUBLIC_URL + '/dtd-formal.png'}
        alt="Your Name"
        className="w-20 h-auto rounded-lg mr-4 border-2 border-white shadow-inner"
        />
        
        <p>diegod@cetys.edu.mx</p>
       
        <div className="flex space-x-2">
          {/* Add social icons or links*/}
          <a href="#" target="_blank" rel="noopener noreferrer">
            {/* Social icon/image */}
          </a>
          {/* Add more social icons*/}
        </div>

        <button className="bg-primary text-white px-2 py-1 mt-2 rounded">
          Download resume
        </button>
      </div>
    </div>
  );
};

export default Card;


