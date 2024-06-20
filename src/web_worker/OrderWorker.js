import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import * as Comlink from 'comlink';

const fetchOrders = async () => {
    try {
        const ordersCollection = collection(db, "orders");
        const ordersQuerySnapshot = await getDocs(ordersCollection);
        const orders = ordersQuerySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log('Orders fetched:', orders);
        return orders;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

const scheduleOrderFetch = async (callback) => {
    callback(await fetchOrders()); // Initial fetch
    setInterval(async () => {
        callback(await fetchOrders());
    }, 10800000); // Every 3 hours
};

Comlink.expose({ scheduleOrderFetch });
