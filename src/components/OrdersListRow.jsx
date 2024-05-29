// src/TableRow.js
import React, { useState } from 'react';
import { IoIosPrint } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';

const OrdersListRow = ({ order, id, status, orderId, customerImage, customerName, quantity, price, statusColor, date  }) => {
  const [editTooltip, setEditTooltip] = useState(false);
  const [printTooltip, setPrintTooltip] = useState(false);
  const [viewTooltip, setViewTooltip] = useState(false);

  return (
    <tr className="bg-white border-b border-gray6 last:border-0 text-start mx-9">
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
          <div className="relative">
            <button
              className="w-auto px-3 h-10 leading-10 text-tiny bg-success text-white rounded-md hover:bg-green-600"
              onMouseEnter={() => setEditTooltip(true)}
              onMouseLeave={() => setEditTooltip(false)}
            >
              View Details
            </button>
            {editTooltip && (
              <div className="flex flex-col items-center z-50 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1">
                <span className="relative z-10 p-2 text-xs leading-none font-medium text-white whitespace-no-wrap w-max bg-slate-800 rounded py-1 px-2 inline-block">
                  Details
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="px-12 py-3 text-end">
        <div className="flex items-center justify-end space-x-2">
          <div className="flex items-center justify-center relative">
            <button
              className="w-auto px-5 h-10 leading-10 text-tiny bg-gray text-black rounded-md hover:bg-theme hover:text-white"
              onMouseEnter={() => setPrintTooltip(true)}
              onMouseLeave={() => setPrintTooltip(false)}
            >
                <IoIosPrint size={18}/>
            </button>
            {printTooltip && (
              <div className="flex flex-col items-center z-50 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1">
                <span className="relative z-10 p-2 text-xs leading-none font-medium text-white whitespace-no-wrap w-max bg-slate-800 rounded py-1 px-2 inline-block">
                  Print
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center relative">
    <a
        href="order-details.html"
        className="flex justify-center items-center w-10 h-10 text-tiny bg-gray text-black rounded-md hover:bg-theme hover:text-white"
        onMouseEnter={() => setViewTooltip(true)}
        onMouseLeave={() => setViewTooltip(false)}
    >
        <IoEye/>
    </a>
    {viewTooltip && (
        <div className="flex flex-col items-center z-50 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1">
            <span className="relative z-10 p-2 text-xs leading-none font-medium text-white whitespace-no-wrap w-max bg-slate-800 rounded py-1 px-2 inline-block">
                View
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
    )}
</div>

        </div>
      </td>
    </tr>
  );
};

export default OrdersListRow;
