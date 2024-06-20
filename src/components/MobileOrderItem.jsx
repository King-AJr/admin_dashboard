// src/components/OrderItem.js
import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div>
          {order.status === 'Delivered' ? (
            <span className="bg-gray-200 p-2 rounded-full">
              📦
            </span>
          ) : (
            <span className="bg-gray-200 p-2 rounded-full">
              🚚
            </span>
          )}
        </div>
        <div>
          <div className="font-semibold">Order #{order.id}</div>
          <div className="text-gray-500">{order.name} - {order.date}</div>
        </div>
      </div>
      <div>
        <span className={`px-3 py-1 rounded-full text-xs ${order.status === 'Delivered' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
          {order.status}
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
