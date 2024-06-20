import { useState } from "react";
import { InputField } from "./InputField";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import ImageInputField from "./ImageInputField";

const VariationAddForm = ({ formData, setFormData }) => {
  const [variation, setVariation] = useState({
    sku: '',
    images: [],
    price: 0,
    salePrice: 0,
    quantity: 0,
    attributes: [],
  });

  const handleVariationInputChange = (e) => {
    const { name, value } = e.target;
    setVariation((prevVariation) => ({
      ...prevVariation,
      [name]: value,
    }));
  };

  const handleRemoveVariationImage = (index) => {
    setVariation((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleVariationImageUpload = (e) => {
    const variationFiles = Array.from(e.target.files);
    setVariation((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...variationFiles],
    }));
  };

  const handleAttributeSelect = (name, value) => {
    setVariation((prevData) => {
      const existingAttr = prevData.attributes.find(attr => attr.name === name);
      if (existingAttr) {
        return {
          ...prevData,
          attributes: prevData.attributes.map(attr => attr.name === name ? { ...attr, value } : attr),
        };
      } else {
        return {
          ...prevData,
          attributes: [...prevData.attributes, { name, value }],
        };
      }
    });
  };

  const generateSKU = () => {
    const sku = formData.sku + '00' + (formData.variations.length + 1);
    return sku;
  };

  const uploadFiles = (file) => {
    return new Promise((resolve, reject) => {
      const uniqueName = new Date().getTime();
      const storageRef = ref(storage, `product_images/${uniqueName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Upload failed', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch(reject);
        }
      );
    });
  };

  const emptyVariationIntoProduct = async () => {
    const imageUploadPromises = variation.images.map(file => uploadFiles(file));
    const imageUrls = await Promise.all(imageUploadPromises);

    const updatedVariation = {
      ...variation,
      sku: generateSKU(),
      images: imageUrls,
    };

    setFormData((prevData) => ({
      ...prevData,
      variations: [...prevData.variations, updatedVariation],
    }));

    setVariation({
      sku: '',
      images: [],
      price: 0,
      salePrice: 0,
      quantity: 0,
      attributes: [],
    });
  };

  return (
    <div className='bg-white p-4 rounded-lg mb-4'>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Variations</h3>
      <div className="flex flex-wrap -mx-2">
        <InputField label="Variation Price" type="number" value={variation.price} onChange={handleVariationInputChange} name="price" />
        <ImageInputField id="variationImages" handleImageUpload={handleVariationImageUpload} />
        <div className="mt-5 flex flex-wrap gap-4">
          {variation.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="w-[70px] h-auto mx-auto"
                src={URL.createObjectURL(image)}
                alt={`Uploaded ${index}`}
                accept=".jpg,.png,.jpeg"
              />
              <button
                type="button"
                className="text-sm absolute top-0 right-0 text-red-500 hover:underline"
                onClick={() => handleRemoveVariationImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <InputField label="Variation Sale Price" type="number" value={variation.salePrice} onChange={handleVariationInputChange} name="salePrice" />
        <InputField label="Variation Quantity" type="number" value={variation.quantity} onChange={handleVariationInputChange} name="quantity" />
      </div>
      <div className="flex flex-wrap -mx-2">
        {formData.attributes.map((attr, index) => (
          <div key={index} className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">{attr.name}</label>
            <select
              name={attr.name}
              value={variation.attributes.find(a => a.name === attr.name)?.value || ''}
              onChange={(e) => handleAttributeSelect(attr.name, e.target.value)}
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select {attr.name}</option>
              {attr.values.map((value, i) => (
                <option key={i} value={value}>{value}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-5 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        onClick={emptyVariationIntoProduct}
      >
        Add Variation
      </button>
    </div>
  );
};

export default VariationAddForm;
