import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-bg-white p-4 text-white">
      <ul className="flex space-x-4 text-primary">
        <li>Home</li>
        <li>Projects</li>
        <li>About-me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
