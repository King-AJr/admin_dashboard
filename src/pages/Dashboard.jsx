import { RiTodoLine } from "react-icons/ri";
import Dashboardlayout from "../components/DashboardLayout"
import Cards from "../components/Cards";
import { TbAntennaBars5, TbUsersGroup } from "react-icons/tb";
import { GrDocumentTime } from "react-icons/gr";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";


const DashBoard = () => {
    const rows = [
        { item: 'Apple MacBook Pro 17"', productId: '#XY-25G', price: '$2999.00', status: { text: 'Active', bg: 'bg-success/10', color: 'text-success' }, action: <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-tiny font-medium py-2 px-4 rounded-md">View</button> },
        { item: 'Gigabyte Gaming Monitor 4K', productId: '#JK-10A', price: '$599.00', status: { text: 'Disabled', bg: 'bg-danger/10', color: 'text-danger' }, action: <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-tiny font-medium py-2 px-4 rounded-md">View</button> },
        { item: 'Logitech G502 Hero Mouse', productId: '#LG-502', price: '$1199.59', status: { text: 'Disabled', bg: 'bg-warning/10', color: 'text-warning' }, action: <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-tiny font-medium py-2 px-4 rounded-md">View</button> },
        { item: 'Galaxy S22 Ultra Gray', productId: '#GL-S22', price: '$1800.00', status: { text: 'Active', bg: 'bg-success/10', color: 'text-success' }, action: <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-tiny font-medium py-2 px-4 rounded-md">View</button> },
        { item: 'Galaxy S22 Ultra Gray', productId: '#GL-S22', price: '$1800.00', status: { text: 'Active', bg: 'bg-success/10', color: 'text-success' }, action: <button className="bg-info/10 text-info hover:bg-info hover:text-white inline-block text-center leading-5 text-tiny font-medium py-2 px-4 rounded-md">View</button> },
    ];
    return (
        <Dashboardlayout>
            <div className="h-screen overflow-x-auto body-content px-8 py-8 bg-slate-100">
                <div className="flex justify-between items-end flex-wrap">
                    <div className="page-title mb-7">
                        <h3 className="mb-0 text-4xl">Dashboard</h3>
                        <p className="text-textBody m-0">Welcome to your dashboard</p>
                    </div>
                    <div className=" mb-7">
                        <Link to={'/add_product'} className="tp-btn px-5 py-2">Add Product</Link>
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
                <div className="max-h-[300px] overflow-x-auto md:overflow-visible">
                <div className="w-[700px] lg:w-full">
                    <table className="w-full text-base text-left text-gray-500">
                        <thead className="bg-white">
                            <tr className="border-b border-gray6 text-tiny">
                                <th scope="col" className="pl-4 pr-8 py-3 text-tiny text-text2 uppercase font-semibold">Item</th>
                                <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold">Product ID</th>
                                <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold">Price</th>
                                <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold">Status</th>
                                <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-14">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <TableRow key={index} {...row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </Dashboardlayout>
        
    )
}

export default DashBoard;