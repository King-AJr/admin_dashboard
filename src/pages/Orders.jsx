import DashboardLayout from "../components/DashboardLayout"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import RecentOrderRow from "../components/RecentOrderRow";
import OrderItem from "../components/MobileOrderItem";


const Orders = () => {
  
    const { orders } = useContext(DataContext)
  
    return (
        <DashboardLayout>
        <div className="h-screen p-8 mx-auto mt-12 bg-white shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold p-4 border-b border-mygrey">Recent orders</h2>
                    
                    {/* Table view for larger screens */}
                    <div className="hidden md:block max-h-[300px] overflow-x-auto py-4 mb-16">
                        <div className="relative border border-mygrey rounded-2xl bg-white">
                        <table className="bg-white w-full text-xs text-left text-black font-jarkata">
                            <thead className="bg-white weight-300">
                            <tr className="border-b text-sm">
                                <th scope="col" className="pl-4 pr-8 py-4 text-sm font-semibold">Order</th>
                                <th scope="col" className="px-3 py-3 text-sm font-semibold">Date</th>
                                <th scope="col" className="px-3 py-3 text-sm font-semibold">Customer</th>
                                <th scope="col" className="px-3 py-3 text-sm font-semibold">Amount</th>
                                <th scope="col" className="px-3 py-3 text-sm font-semibold">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => (
                                <RecentOrderRow key={order.id} order={order} />
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    
                    {/* List view for smaller screens */}
                    <div className="md:hidden mb-16">
                        {orders.map(order => (
                        <OrderItem key={order.id} order={order} />
                        ))}
                    </div>
                </div>
        </DashboardLayout>
    )
}

export default Orders