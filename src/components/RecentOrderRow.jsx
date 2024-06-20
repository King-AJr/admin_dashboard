// src/components/RecentOrderRow.js
import React from 'react';

const RecentOrderRow = ({ order }) => {
  return (
    <tr className="border-b h-16">
      <td className=" p-4">{order.id}</td>
      <td className="p-2">{order.date}</td>
      <td className="p-2">{order.CustomerName}</td>
      <td className="p-2">${order.price}</td>
      
      <td className="p-4">
        <div className='h-8 bg-mygrey rounded-full flex justify-center items-center p-1 text-xs'>
          {order.status}
        </div>
      </td>
    </tr>
  );
};

export default RecentOrderRow;
