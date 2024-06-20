import React from 'react';
import Select from 'react-select';

const SelectField = ({ label, options, value, onChange, name, multiple = false }) => {
  const handleChange = (selectedOptions) => {
    if (multiple) {
      const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
      onChange({
        target: {
          name: name,
          value: values
        }
      });
    } else {
      onChange({
        target: {
          name: name,
          value: selectedOptions ? selectedOptions.value : ''
        }
      });
    }
  };

  return (
    <div className="w-full px-2 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <Select
        id={name}
        name={name}
        options={options}
        value={options.filter(option => value.includes(option.value))}
        onChange={handleChange}
        isMulti={multiple}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};



export default SelectField;