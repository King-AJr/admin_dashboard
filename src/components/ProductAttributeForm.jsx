import { useState } from "react";
import { InputField } from "./InputField";

const ProductAttributeForm = ({ formData, setFormData }) => {
  const [attributeData, setAttributeData] = useState({
    name: '',
    value: '',
    values: [],
  });

  const handleAttributeChange = (e) => {
    const { name, value } = e.target;
    setAttributeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAttributeValue = (e) => {
    e.preventDefault();
    if (attributeData.value) {
      setAttributeData((prevData) => ({
        ...prevData,
        values: [...prevData.values, attributeData.value],
        value: '',
      }));
    }
  };

  const handleAddAttribute = () => {
    setFormData((prevData) => ({
      ...prevData,
      attributes: [
        ...prevData.attributes,
        { name: attributeData.name, values: attributeData.values },
      ],
    }));
    setAttributeData({ name: '', value: '', values: [] });
  };

  const handleRemoveAttributeValue = (index) => {
    setAttributeData((prevData) => ({
      ...prevData,
      values: prevData.values.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className='bg-white p-4 rounded-lg mb-4'>
      {formData.attributes.map((attribute, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span>{attribute.name}: {attribute.values.join(', ')}</span>
        </div>
      ))}
      <h3 className="text-lg font-medium text-gray-900 mb-4">Product Attributes</h3>
      <div className="flex flex-wrap -mx-2">
        <InputField label="Attribute Name" value={attributeData.name} onChange={handleAttributeChange} name="name" />
        <InputField label="Attribute Value" value={attributeData.value} onChange={handleAttributeChange} name="value" />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleAddAttributeValue}
        >
          Add Attribute Value
        </button>
        <div>
          {attributeData.values.map((val, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span>{val}</span>
              <button
                type="button"
                className="text-red-500 hover:underline"
                onClick={() => handleRemoveAttributeValue(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          onClick={handleAddAttribute}
        >
          Add Attribute
        </button>
      </div>
    </div>
  );
};

export default ProductAttributeForm;
