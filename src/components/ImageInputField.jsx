import React from 'react';

const ImageInputField = ({ handleImageUpload, disabled, id }) => {
  return (
    <div className={`w-full flex justify-center items-center sm:w-1/2 px-2 mb-4 text-white rounded-lg ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-red-600'}`}>
      <label
        htmlFor={id}
        className={`text-tiny w-full inline-block py-1 px-4 rounded-md text-center transition ${disabled ? 'opacity-50' : 'hover:cursor-pointer hover:bg-theme hover:text-white hover:border-theme'}`}
      >
        Upload Image
      </label>
      <input
        type="file"
        id={id}
        className="hidden"
        onChange={handleImageUpload}
        disabled={disabled}
      />
    </div>
  );
};

export default ImageInputField;
