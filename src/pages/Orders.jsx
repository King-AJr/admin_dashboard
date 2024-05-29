import DashboardLayout from "../components/DashboardLayout"

import OrdersListRow from "../components/OrdersListRow";
import customerOne from "../assets/img/users/user-4.jpg";
import customerTwo from "../assets/img/users/user-5.jpg";
import customerThree from "../assets/img/users/user-6.jpg";
import customerFour from "../assets/img/users/user-7.jpg";


const Orders = () => {
    // src/data.js
const dummyData = [
    {
      id: 1,
      orderId: '#479063DR',
      customerImage: customerFour,
      customerName: 'William Watson',
      quantity: 2,
      price: '$171.00',
      status: 'Delivered',
      statusColor: 'success',
      date: '16 Jan, 2023',
    },
    {
      id: 2,
      orderId: '#479064DR',
      customerImage: customerTwo,
      customerName: 'Emma Johnson',
      quantity: 1,
      price: '$99.00',
      status: 'Pending',
      statusColor: 'warning',
      date: '17 Jan, 2023',
    },
    {
      id: 3,
      orderId: '#479065DR',
      customerImage: customerThree,
      customerName: 'Liam Smith',
      quantity: 3,
      price: '$210.00',
      status: 'Shipped',
      statusColor: 'info',
      date: '18 Jan, 2023',
    },
    {
      id: 4,
      orderId: '#479066DR',
      customerImage: customerFour,
      customerName: 'Olivia Brown',
      quantity: 5,
      price: '$300.00',
      status: 'Cancelled',
      statusColor: 'danger',
      date: '19 Jan, 2023',
    },
  ];
  
  
    return (
        <DashboardLayout>
            <div className="h-screen overflow-x-auto body-content px-8 py-8 bg-slate-100">
                <div className="flex justify-between items-end flex-wrap">
                    <div className="page-title mb-7">
                        <h3 className="mb-0 text-4xl">Orders</h3>
                    </div>
                </div>
                {/* <!-- table --> */}
                <div className="bg-white rounded-t-md rounded-b-md shadow-xs py-4">
                <div className="tp-search-box flex items-center justify-between px-8 py-8 flex-wrap">
                        <div className="search-input relative">
                            <input className="input h-[40px] w-full pl-14" type="text" placeholder="Search by order id"/>
                            <button className="absolute top-1/2 left-5 translate-y-[-50%] hover:text-theme">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18.9999 19L14.6499 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-end space-x-6">
                            <div className="search-select mr-3 flex items-center space-x-3 ">
                                <span className="text-xs inline-block leading-none -translate-y-[2px]">Status : </span>
                                <select className="text-xs pb-1">
                                    <option>Delivered</option>
                                    <option>Pending</option>
                                    <option>Refunded</option>
                                    <option>Denied</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto  mx-8">
                        <table class="w-[1500px] md:w-full text-base text-left text-gray-500">
                            
                            <thead class="bg-white">
                                <tr class="border-b border-gray6 text-xs">
                                    <th scope="col" class=" py-3 text-xs text-text2 uppercase font-semibold w-[3%]">
                                        <div class="tp-checkbox -translate-y-[3px]">
                                            <input id="selectAllProduct" type="checkbox"/>
                                            <label for="selectAllProduct"></label>
                                        </div>
                                    </th>
                                    <th scope="col" class="pr-8 py-3 text-xs text-text2 uppercase font-semibold w-[170px]">
                                        Order ID 
                                    </th>
                                    <th scope="col" class="px-12 py-3 text-xs text-text2 uppercase font-semibold">
                                        Customer
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-xs text-text2 uppercase font-semibold w-[170px] text-end">
                                        QTY
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-xs text-text2 uppercase font-semibold w-[170px] text-end">
                                        Total
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-xs text-text2 uppercase font-semibold w-[170px] text-end">
                                        Status
                                    </th>
                                    <th scope="col" class="px-5 py-3 text-xs text-text2 uppercase font-semibold w-[170px] text-end">
                                        Date
                                    </th>
                                    <th scope="col" class="px-12 py-3 text-xs text-text2 uppercase  font-semibold w-[14%] text-end">
                                        Action
                                    </th>
                                    <th scope="col" class="px-12 py-3 text-xs text-text2 uppercase  font-semibold w-[4%] text-end">
                                        Invoice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {dummyData.map((data) => (
                                <OrdersListRow
                                key={data.id}
                                    id={data.id}
                                    orderId={data.orderId}
                                    customerImage={data.customerImage}
                                    customerName={data.customerName}
                                    quantity={data.quantity}
                                    price={data.price}
                                    status={data.status}
                                    statusColor={data.statusColor}
                                    date ={data.date}
                                />
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
            </div>

        </DashboardLayout>
    )
}

export default Orders