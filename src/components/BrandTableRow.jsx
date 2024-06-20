import React from 'react';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';

const BrandTableRow = ({ brand }) => {

  return (
    <tr className='h-[80px]'>
      <td className="px-2 py-4 border-b text-center">{brand.name}</td>
      <td className="p-2 border-b text-center">
        <img src={brand.logo} alt={brand.name} className="w-10 h-10 rounded-full mx-auto"/>
      </td>
      <td className="p-2 border-b text-center">{brand.count}</td>
      <td className="p-2 border-b text-center">
        <div className="flex justify-center space-x-2">
          <button
           className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-500 text-white rounded-md hover:bg-green-600"
          >
              <MdOutlineEdit/>
          </button>
          <button className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-white border border-gray text-slate-600 rounded-md hover:bg-danger hover:border-danger hover:text-white">
              <MdOutlineDelete/>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BrandTableRow;
