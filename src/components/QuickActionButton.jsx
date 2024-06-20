// src/components/QuickActionButton.js
import React from 'react';

const QuickActionButton = ({ label, action }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
      <span>{label}</span>
      <button className="bg-red-500 text-white py-1 px-4 rounded">{action}</button>
    </div>
  );
};

export default QuickActionButton;
