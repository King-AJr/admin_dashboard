import React from 'react';
import CategoryTableRow from './CategoryTableRow';

const CategoryTable = ({ categories }) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-left border-collapse">
        <thead className='border'>
          <tr>
            <th className="p-2 text-center">Name</th>
            <th className="p-2 text-center">Items count</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryTableRow key={category.id} category={category} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
