import DashboardLayout from "../components/DashboardLayout"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';


const Orders = () => {
  
    const { orders } = useContext(DataContext)
  
    return (
        <DashboardLayout>
        <div className="overflow-x-auto border rounded-lg px-8 py-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Customer Name</th>
                        <th className="py-2 px-4 border-b">Product Name</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="py-2 px-4 border-b">{order.id}</td>
                            <td className="py-2 px-4 border-b">{order.CustomerName}</td>
                            <td className="py-2 px-4 border-b">{order.ProductName}</td>
                            <td className="py-2 px-4 border-b">{order.quantity}</td>
                            <td className="py-2 px-4 border-b">{order.price}</td>
                            <td className="py-2 px-4 border-b">{order.status}</td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">
                                <div className="flex justify-center space-x-2">
                                    <button
                                    className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-500 text-white rounded-md hover:bg-green-600"
                                    >
                                        <MdOutlineEdit/>
                                    </button>
                                    <button className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-white border border-gray text-slate-600 rounded-md hover:bg-danger hover:border-danger hover:text-white">
                                        <MdOutlineDelete/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </DashboardLayout>
    )
}

export default Orders