import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        className="mr-2"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
