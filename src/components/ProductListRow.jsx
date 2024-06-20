

import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const ProductListRow = ({ id, productName, productImage, productId, quantity, price, rating, status }) => {
  return (
    <tr className="bg-white border-b border-gray6 last:border-0 text-start mx-9">
        <td  className="pr-3  whitespace-nowrap">
            <div className="tp-checkbox">
                <input id={`product-${id}`} type="checkbox" />
          <label htmlFor={`product-${id}`}></label>
             </div>
        </td>
        <td className="pr-8 py-5 whitespace-nowrap">
        <a href="sb" className="flex items-center space-x-5">
          <img className="w-16 h-16 rounded-md" src={productImage} alt={productName} />
          <span className="text-xs font-medium text-heading text-hover-primary transition">{productName}</span>
        </a>
      </td>
      <td className="pl-8 text-xs px-3 py-3 font-normal text-gray-600 text-end">{productId}</td>
      <td className= "text-xs px-3 py-3 font-normal text-gray-600 text-end">{quantity}</td>
      <td className="text-xs px-3 py-3 font-normal text-gray-600 text-end">{price}</td>
      <td className="text-xs px-3 py-3 font-normal text-heading text-end">
        <div className="flex justify-end items-center space-x-1 text-tiny">
          <span className="text-yellow-500 flex items-center space-x-1">
            {[...Array(rating)].map((_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
          </span>
        </div>
      </td>
      <td className="px-3 py-3 text-end">
        <span className={`text-xs text-${status.color} px-3 py-1 rounded-md leading-none ${status.bg} font-medium`}>{status.text}</span>
      </td>
      <td className="px-9 py-3 text-end">
        <div className="flex items-center justify-end space-x-2">
          <div className="relative" x-data="{ editTooltip: false }">
            <button
              className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <MdOutlineEdit/>
            </button>
          </div>
          <div className="relative" x-data="{ deleteTooltip: false }">
                <button className="flex justify-center items-center w-10 h-10 leading-[33px] text-tiny bg-white border border-gray text-slate-600 rounded-md hover:bg-danger hover:border-danger hover:text-white">
                    <MdOutlineDelete/>
                </button>
            </div>
            </div>  
        </td>




    </tr>);
  }

  export default ProductListRow;