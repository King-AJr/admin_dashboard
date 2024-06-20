import React, { useState, useContext } from 'react';
import CategoryTable from '../components/CategoryTable';
import DashboardLayout from '../components/DashboardLayout';
import CategoryForm from '../components/CategoryForm';
import { addDoc, collection } from "firebase/firestore"; 
import {db} from '../firebase';
import { DataContext } from '../context/DataProvider';

const Categories = () => {
  const { categories } = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  

  const handleSubmit = async() => {
    try {
      await addDoc(collection(db, 'categories'), {
          name: formData.name,
          description: formData.description,
      });

      setFormData({ name: '', description: '' });

    } catch (error) {
      console.error('Error adding Category', error);
    }
  };

  return (
    <DashboardLayout>
        <div className="h-full  overflow-x-auto  container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-1">Categories</h1>
          <p className="mb-4 text-sm">Create a category to organize your products</p>
          <CategoryForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
          <CategoryTable categories={categories} />
        </div>
    </DashboardLayout>
  );
};

export default Categories;
