import { RiTodoLine } from "react-icons/ri";
import Dashboardlayout from "../components/DashboardLayout"
import Cards from "../components/Cards";
import { TbAntennaBars5, TbUsersGroup } from "react-icons/tb";
import { GrDocumentTime } from "react-icons/gr";
import { Link } from "react-router-dom";
import RecentOrderRow from "../components/RecentOrderRow";
import OrderItem from "../components/MobileOrderItem";


const DashBoard = () => {
    const orders = [
        { id: '#1234', date: 'Jan 12, 2023', customer: 'Jane Smith', amount: '$100', status: 'Delivered' },
        { id: '#1235', date: 'Jan 11, 2023', customer: 'John Doe', amount: '$50', status: 'In transit' },
        { id: '#1236', date: 'Jan 10, 2023', customer: 'Alice Johnson', amount: '$75', status: 'Delivered' },
        { id: '#1237', date: 'Jan 9, 2023', customer: 'Bob Brown', amount: '$200', status: 'In transit' },
        { id: '#1238', date: 'Jan 8, 2023', customer: 'Eva Davis', amount: '$30', status: 'Delivered' },
      ];    
    return (
        <Dashboardlayout>
            <div className="h-screen overflow-x-auto px-8 py-8 bg-white">
                <div className="flex justify-between items-end flex-wrap">
                    <div className="page-title mb-7">
                        <h3 className="mb-1 sm:text-3xl md:text-4xl font-poppins font-medium">Dashboard</h3>
                        <p className="text-xs m-0 font-jarkata">Welcome to your dashboard</p>
                    </div>
                    <div className=" mb-7">
                        <Link to={'/add_product'} >
                            <button className='sm: text-xs h-[40px] w-[120px] rounded-lg bg-myRed text-white px-4 py-2 md:text-sm'>
                                Add Product
                            </button>
                            </Link>
                    </div>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <Cards 
                                    title="356"
                                    subtitle="Orders Received"
                                    percentage={10}
                                    spanColor="bg-success"
                                    icon={RiTodoLine}
                                    svgColor="text-success bg-success/10"
                    />
                    <Cards title={"$5680"} subtitle={"Average daily sales"} percentage={30} icon={TbAntennaBars5} spanColor="bg-purple" svgColor="text-purple bg-purple/10"/>
                    <Cards title={"5.8k"} subtitle={"New Customers since this month"} percentage={13} icon={TbUsersGroup} spanColor="bg-info" svgColor="text-info bg-info/10"/>
                    <Cards title={"580"} subtitle={"Pending Orders"} percentage={10} icon={GrDocumentTime} spanColor="bg-warning" svgColor="text-warning bg-warning/10"/>
                </div>
                {/* table */}
                <div className=" mx-auto mt-12 bg-white shadow-md rounded-lg">
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
            </div>
        </Dashboardlayout>
        
    )
}

export default DashBoard;