// src/components/NavigationItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ icon, label, active, link }) => {
  return (
    <Link to={link}>
      <div className={`flex items-center p-2 my-1 cursor-pointer ${active ? 'bg-gray-200' : ''}`}>
      <span className="material-icons mr-2">{icon}</span>
      <span className='font-jarkata text-sm'>{label}</span>
    </div>
    </Link>
    
  );
};

export default NavigationItem;
