// src/components/SelectField.jsx
import React from 'react';

const SelectField = ({ label, options, value, onChange, name }) => {
  return (
    <div className="w-full px-2 mb-4">
      <label className="pb-2 block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="h-[36px] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
