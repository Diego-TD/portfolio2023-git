import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-blue-300 to-green-300">
      <Card />
    
      <div className="lg:w-3/4 p-4 flex-1 flex flex-col">
      <Navbar />
        <Home />
        
        {/* Add components for Home, Projects, AboutMe, Contact sections */}
      </div>
    </div>
  );
}

export default App;
