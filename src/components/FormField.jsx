// components/FormField.js
import React from 'react';

const FormField = ({ label, type, name, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default FormField;
