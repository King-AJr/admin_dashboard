import React from 'react';
import BrandTableRow from './BrandTableRow';

const BrandTable = ({ brands }) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-left border-collapse">
        <thead className='border'>
          <tr>
            <th className="p-2 text-center">Name</th>
            <th className="p-2 text-center">Logo</th>
            <th className="p-2 text-center">Items count</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <BrandTableRow key={brand.id} brand={brand} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandTable;
