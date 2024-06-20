import React, { useState, useEffect, useContext } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../firebase';
import ImageInputField from './ImageInputField';
import { updateLocalStorage, getFromLocalStorage } from '../repository/localStorageUtils';
import { DataContext } from '../context/DataProvider';

const BrandForm = () => {
  const [formData, setFormData] = useState({
    name: '',
  });
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState('');

  const {setBrands} = useContext(DataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display the image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileURL(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  const uploadFiles = () => {
    return new Promise((resolve, reject) => {
      const uniqueName = new Date().getTime();
      const storageRef = ref(storage, `brand_logos/${uniqueName}`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected.');
      return;
    }
    try {
      const downloadURL = await uploadFiles();
      console.log('File successfully uploaded. URL:', downloadURL);
      const brandInfo = await addDoc(collection(db, 'brands'), {
        name: formData.name,
        logo: downloadURL,
      });

      updateLocalStorage('brands', {
        name: formData.name,
        logo: downloadURL,
        id: brandInfo.id,
        count: 0,
      });

      const storedBrands = getFromLocalStorage('brands');
    if (storedBrands) {
      // Update state with brands from local storage
      setBrands(storedBrands);
    }

      console.log('Brand added successfully.');

      // Clear the form after submission
      setFormData({ name: '' });
      removeFile();
    } catch (error) {
      console.error('Error adding brand', error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      // Reload the page when localStorage changes
      window.location.reload();
    };

    // Listen for changes to localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Clean up the event listener
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white py-4 rounded-lg mb-12">
      <h3 className="text-xs md:text-lg font-medium text-gray-900 mb-2">Brand name</h3>
      <input
        className="w-full md:w-1/2 h-[40px] p-2 mb-6 border rounded-lg"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Brand name"
      />
      <ImageInputField handleImageUpload={handleFileChange} disabled={file !== null} id="brandImage" />
      <button
        className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={handleSubmit}
        disabled={!file}
      >
        Add Brand
      </button>
      {file && (
        <div className="mt-4">
          <div className="relative">
            <img
              className="w-[70px] h-auto mx-auto"
              src={fileURL}
              alt="Uploaded"
              accept=".jpg,.png,.jpeg"
            />
            <button
              type="button"
              className="text-sm absolute top-0 right-0 text-red-500 hover:underline"
              onClick={removeFile}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandForm;
