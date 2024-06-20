// src/TableRow.js
import React, { useState } from 'react';
import { IoIosPrint } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';

const OrdersListRow = ({ order, id, status, orderId, customerImage, customerName, quantity, price, statusColor, date  }) => {
  const [editTooltip, setEditTooltip] = useState(false);

  return (
    <tr className="bg-white border-b last:border-0 text-start mx-9">
      <td className="pr-3 whitespace-nowrap">
        <div className="tp-checkbox">
          <input id={`product-${id}`} type="checkbox" />
          <label htmlFor={`product-${id}`}></label>
        </div>
      </td>
      <td className="text-xs px-5 py-3 font-normal text-[#55585B]">{orderId}</td>
      <td className="pr-16 py-5 whitespace-nowrap">
        <a href="ABC" className="flex items-center space-x-5 text-hover-primary text-heading">
          <img className="w-[50px] h-[50px] rounded-full" src={customerImage} alt={customerName} />
          <span className="text-xs font-medium">{customerName}</span>
        </a>
      </td>
      <td className="text-xs px-10 py-3 font-normal text-[#55585B] text-end">{quantity}</td>
      <td className="text-xs px-9 py-3 font-normal text-[#55585B] text-end">{price}</td>
      <td className="text-xs px-5 py-3 text-end">
        <span className={`text-xs px-3 py-1 rounded-md leading-none font-medium text-end bg-${statusColor}/10 text-${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="text-xs px-5 py-3 font-normal text-[#55585B] text-end">{date}</td>
      <td className="px-9 py-3 text-end">
        <div className="flex items-center justify-end space-x-2">
          <div className="relative bg-green-500 border rounded-lg">
            <button
              className="w-auto px-3 h-10 text-xs  text-black rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </td>
      <td className="px-12 py-3 text-end">
        <div className="flex items-center justify-end space-x-2">
          <div className="flex items-center justify-center relative">
            <button
              className="w-auto px-5 h-10 leading-10 text-sm bg-gray text-black rounded-md"
            >
                <IoIosPrint size={18}/>
            </button>
          </div>
          <div className="flex justify-center items-center relative">
    <a
        href="order-details.html"
        className="flex justify-center items-center w-10 h-10 text-sm bg-gray text-black rounded-md"
    >
        <IoEye/>
    </a>
</div>

        </div>
      </td>
    </tr>
  );
};

export default OrdersListRow;
