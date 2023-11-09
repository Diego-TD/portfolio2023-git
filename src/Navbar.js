import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
