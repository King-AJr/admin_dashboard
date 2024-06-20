// src/components/OrderScheduler.js
import { useEffect, useContext } from 'react';
import { fetchOrdersFromFirebase } from '../repository/OrderRepository';
import { DataContext } from '../context/DataProvider';
import { saveToLocalStorage } from '../repository/localStorageUtils';

const OrderScheduler = () => {
  const { setOrders } = useContext(DataContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await fetchOrdersFromFirebase();
        setOrders(orders);
        saveToLocalStorage('orders', orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    // Fetch orders immediately and then every 3 hours
    fetchOrders();
    const intervalId = setInterval(fetchOrders, 3 * 60 * 60 * 1000); // 3 hours in milliseconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [setOrders]);

  return null;
};

export default OrderScheduler;
