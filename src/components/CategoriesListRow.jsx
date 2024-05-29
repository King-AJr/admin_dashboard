import React, { useState } from 'react';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';

const CategoriesListRow = ({ id, productId, productImage, productCategory, productDescription, productSlug, productItems }) => {

  return (
    <tr className="bg-white border-b border-gray6 last:border-0 text-start mx-9">
      <td className="pr-3 whitespace-nowrap">
        <div className="tp-checkbox">
          <input id={`product-${id}`} type="checkbox" />
          <label htmlFor={`product-${id}`}></label>
        </div>
      </td>
      <td className="text-xs pr-12 py-3 font-normal text-[#55585B]">
        {productId}
      </td>
      <td className="pr-10 py-5 whitespace-nowrap">
        <a href="bcd" className="flex items-center space-x-5">
          <img className="w-10 h-10 rounded-full" src={productImage} alt={productCategory} />
          <span className="text-xs font-medium text-heading text-hover-primary transition">{productCategory}</span>
        </a>
      </td>
      <td className="text-xs px-9 py-3 font-normal text-[#55585B] text-end">
        {productDescription}
      </td>
      <td className="text-xs px-1 py-3 font-normal text-[#55585B] text-end">
        {productSlug}
      </td>
      <td className="text-xs px-12 py-3 font-normal text-[#55585B] text-end">
        {productItems}
      </td>
      <td className="px-9 py-3 text-end">
        <div className="flex items-center space-x-2">

          <div className="flex items-center justify-end space-x-2">
          <div className="relative" x-data="{ editTooltip: false }">
            <button
              className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <MdOutlineEdit/>
            </button>
          </div>
          <div class="relative" x-data="{ deleteTooltip: false }">
                <button class="flex justify-center items-center w-10 h-10 leading-[33px] text-tiny bg-white border border-gray text-slate-600 rounded-md hover:bg-danger hover:border-danger hover:text-white">
                    <MdOutlineDelete/>
                </button>
            </div>
            </div>  
        </div>
      </td>
    </tr>
  );
};

export default CategoriesListRow;
