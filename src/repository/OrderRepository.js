// src/repository/orderRepository.js
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Function to fetch orders from Firestore
export const fetchOrdersFromFirebase = async () => {
  try {
    const ordersCollection = collection(db, 'orders');
    const ordersQuerySnapshot = await getDocs(ordersCollection);

    const orders = ordersQuerySnapshot.docs.map(doc => {
      const data = doc.data();
      const dateObj = data.date.toDate();
      const formattedDate = `${dateObj.toDateString()} ${dateObj.toLocaleTimeString()}`; // Extract day and time

      return {
        id: doc.id,
        ...data,
        date: formattedDate,
      };
    });

    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};
