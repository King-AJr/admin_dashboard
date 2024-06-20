// src/context/DataProvider.js
import React, { createContext, useState, useEffect } from 'react';
import { getBrandsAndCategories } from '../repository/api';
import { saveToLocalStorage, getFromLocalStorage } from '../repository/localStorageUtils';
import { fetchOrdersFromFirebase } from '../repository/OrderRepository';

// Create a context to hold the brands, categories, and orders data
export const DataContext = createContext();

// Provider component to fetch and provide the data to the rest of the app
export const DataProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let localBrands = getFromLocalStorage('brands');
      let localCategories = getFromLocalStorage('categories');
      let localOrders = getFromLocalStorage('orders');

      if (!localBrands || !localCategories || !localOrders) {
        try {
          const { brands: fetchedBrands, categories: fetchedCategories } = await getBrandsAndCategories();
          const fetchedOrders = await fetchOrdersFromFirebase();

          localBrands = fetchedBrands;
          localCategories = fetchedCategories;
          localOrders = fetchedOrders;

          saveToLocalStorage('brands', localBrands);
          saveToLocalStorage('categories', localCategories);
          saveToLocalStorage('orders', localOrders);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      setBrands(localBrands);
      setCategories(localCategories);
      setOrders(localOrders);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ brands, categories, orders, setOrders }}>
      {children}
    </DataContext.Provider>
  );
};
