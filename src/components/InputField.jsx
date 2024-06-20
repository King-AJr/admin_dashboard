// src/components/InputField.jsx
import React from 'react';

export const InputField = ({ label, type = "text", value, onChange, name }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="pb-2 block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="px-2 h-[36px] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
      />
    </div>
  );
};


export const TitleInputField = ({ label, type = "text", value, onChange, name }) => {
    return (
      <div className="w-full px-2 mb-4">
        <label className="pb-2 block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className="px-2 h-[36px] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        />
      </div>
    );
  };


