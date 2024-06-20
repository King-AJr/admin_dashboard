import React, { useState, useContext } from 'react';
import { InputField, TitleInputField } from '../components/InputField';
import SelectField from '../components/SelectField';
import DashboardLayout from '../components/DashboardLayout';
import Editor from '../components/Editor';
import ProductAttributeForm from '../components/ProductAttributeForm';
import VariationAddForm from '../components/VariationAddForm';
import ImageInputField from '../components/ImageInputField';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { DataContext } from '../context/DataProvider';

const AddProductForm = () => {
  const { brands, categories } = useContext(DataContext);

  const [formData, setFormData] = useState({
    id: '',
    stock: '',
    sku: '',
    price: '',
    title: '',
    description: '',
    salePrice: '',
    images: [],
    brandName: '',
    productType: '',
    categories: [], // Changed from categoryName to categories
    attributes: [],
    variations: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'categories') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleDescriptionChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleFormImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const thumbnailPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(thumbnailPromises).then((thumbnails) => {
      setFormData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...thumbnails],
      }));
    });
  };

  const uploadFiles = (file) => {
    return new Promise((resolve, reject) => {
      const uniqueName = new Date().getTime();
      const storageRef = ref(storage, `products/${uniqueName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
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

  const generateSKU = (title, brandName, categories, attributes) => {
    const titleAbbr = title.split(' ').map(word => word[0]).join('').toUpperCase();
    const brandAbbr = brandName.split(' ').map(word => word[0]).join('').toUpperCase();
    const categoriesAbbr = categories.map(category => category.split(' ').map(word => word[0]).join('').toUpperCase()).join('');
    const attributesAbbr = attributes.map(attr => attr.name[0] + attr.values[0][0]).join('').toUpperCase();

    return `${titleAbbr}${brandAbbr}${categoriesAbbr}${attributesAbbr}`.slice(0, 6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let uploadedImageUrls = [];

      if (formData.images.length > 0) {
        uploadedImageUrls = await Promise.all(formData.images.map(async (image) => {
          const response = await fetch(image);
          const blob = await response.blob();
          return await uploadFiles(blob);
        }));
      }

      const sku = generateSKU(formData.title, formData.brandName, formData.categories, formData.attributes);

      const productData = {
        stock: formData.stock,
        sku: sku,
        price: formData.price,
        title: formData.title,
        description: formData.description,
        salePrice: formData.salePrice,
        images: uploadedImageUrls,
        brandName: formData.brandName,
        productType: formData.productType,
        categories: formData.categories,
        attributes: formData.attributes,
        variations: formData.variations
      };

      await addDoc(collection(db, 'products'), productData);

      console.log('Product added successfully.');

      setFormData({
        id: '',
        stock: '',
        sku: '',
        price: '',
        title: '',
        description: '',
        salePrice: '',
        images: [],
        brandName: '',
        productType: '',
        categories: [],
        attributes: [],
        variations: []
      });
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit} className="h-full overflow-x-auto mx-auto p-8 bg-red-50">
        <div className='bg-white p-4 rounded-lg mb-4'>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Product Information</h3>
          <div className='w-full'>
            <TitleInputField label="Title" value={formData.title} onChange={handleChange} name="title" />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full min-h-[500px]" id="editor">
              <Editor
                name='description'
                description={formData.description}
                handleInputChange={handleDescriptionChange}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-2">
            <InputField label="Stock" value={formData.stock} onChange={handleChange} name="stock" />
            <InputField label="Price" type="number" value={formData.price} onChange={handleChange} name="price" />
          </div>
          <div className="flex flex-wrap -mx-2">
            <SelectField
              label="Brand Name"
              options={brands.map(brand => ({ value: brand.name, label: brand.name }))}
              value={formData.brandName}
              onChange={handleChange}
              name="brandName"
            />
            <SelectField
              label="Category Names"
              options={categories.map(category => ({ value: category.name, label: category.name }))}
              value={formData.categories}
              onChange={handleChange}
              name="categories"
              multiple // Add this attribute to enable multiple selections
            />
          </div>
          <ProductAttributeForm formData={formData} setFormData={setFormData} />
        </div>
        <div className='bg-white p-4 rounded-lg mb-4'>
          <div className="flex flex-wrap -mx-2">
            <SelectField
              label="Product Type"
              options={[
                { value: '', label: 'Select a type' },
                { value: 'simple', label: 'Simple' },
                { value: 'variable', label: 'Variable' }
              ]}
              value={formData.productType}
              onChange={handleChange}
              name="productType"
            />
          </div>

          {formData.productType === 'variable' ? (
            <>
              {formData.variations.map((variation, index) => (
                <div key={variation.sku}>
                  <h2>Variation SKU: {variation.sku}</h2><br />
                </div>
              ))}
              <VariationAddForm formData={formData} setFormData={setFormData} />
            </>
          ) : (
            <>
              <div className="flex flex-wrap -mx-2">
                <InputField label="Sale Price" type="number" value={formData.salePrice} onChange={handleChange} name="salePrice" />
                <ImageInputField handleImageUpload={handleFormImageUpload} id='productimages' />
                <div className="mt-5 flex flex-wrap gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        className="w-[70px] h-auto mx-auto"
                        src={image}
                        alt={`Uploaded ${index}`}
                        accept=".jpg,.png,.jpeg"
                      />
                      <button
                        type="button"
                        className="text-sm absolute top-0 right-0 text-red-500 hover:underline"
                        onClick={() => handleRemoveImage(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex space-x-2 justify-center p-5">
          <button type="submit" className="h-[50px] bg-red-500 text-white px-4 py-2 rounded-md">Save and Publish</button>
        </div>
      </form>
    </DashboardLayout>
  );
}

export default AddProductForm;
