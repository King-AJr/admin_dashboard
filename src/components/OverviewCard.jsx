// src/components/OverviewCard.js
import React from 'react';

const OverviewCard = ({ title, value }) => {
  return (
    <div className="h-[70px] w-[150px] bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-gray-600 text-sm">{title}</h2>
      <p className="text-2xl font-bold text-xs">{value}</p>
    </div>
  );
};

export default OverviewCard;
