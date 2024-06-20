import React from 'react';

const CategoryForm = ({ formData, setFormData, handleSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="bg-white py-4 rounded-lg mb-12">
      <h3 className="text-xs md:text-lg font-medium text-gray-900 mb-2">Category name</h3>
      <input
        className="w-full md:w-1/2 h-[40px] p-2 mb-6 border rounded-lg"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Category name"
      />
      <h3 className="text-xs md:text-lg font-medium text-gray-900 mb-2">Category Description</h3>
      <input
        className="w-full md:w-1/2 h-[40px] p-2 mb-4 border rounded-lg"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Category description"
      />
      <button
        className="w-full md:w-auto md:mx-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={handleSubmit}
      >
        Add category
      </button>
    </div>
  );
};

export default CategoryForm;
