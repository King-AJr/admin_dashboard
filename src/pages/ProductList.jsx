import DashboardLayout from "../components/DashboardLayout";
import ProductListRow from "../components/ProductListRow";
import productOne from "../assets/img/product/prodcut-1.jpg";
import productTwo from "../assets/img/product/prodcut-2.jpg";
import productFour from "../assets/img/product/prodcut-4.jpg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


const ProductList = () => {
    const products = [
        {
          id: 2,
          productName: "Gigabyte Gaming Monitor 4K",
          productImage: productOne,
          productId: "#JK-10A",
          quantity: 20,
          price: "$599.00",
          rating: 4,
          status: { text: "Disabled", color: "text-danger", bg: "bg-danger/10" }
        },
        {
          id: 3,
          productName: "Logitech G502 Hero Mouse",
          productImage: productTwo,
          productId: "#LG-502",
          quantity: 15,
          price: "$1199.59",
          rating: 4,
          status: { text: "Disabled", color: "text-warning", bg: "bg-warning/10" }
        },
        {
          id: 4,
          productName: "Galaxy S22 Ultra Gray",
          productImage: productFour,
          productId: "#GL-S22",
          quantity: 25,
          price: "$1800.00",
          rating: 5,
          status: { text: "Active", color: "text-success", bg: "bg-success/10" }
        }
      ];
      
  return (
    <DashboardLayout>
        <div className="h-screen overflow-x-auto body-content px-8 py-8 bg-slate-100">
        <div className="flex justify-between mb-10">
                    <div className="page-title">
                        <h3 className="mb-0 text-[28px]">Products</h3>
                    </div>
                </div>
                <div className="bg-white rounded-t-md rounded-b-md shadow-xs py-4">
                <div className="tp-search-box flex items-center justify-between px-8 py-8">
                        <div className="search-input relative">
                            <input className="input h-[30px] w-full pl-14" type="text" placeholder="Search by product name"/>
                            <button className="absolute top-1/2 left-5 translate-y-[-50%] hover:text-theme">
                                <IoSearch/>
                            </button>
                        </div>
                        <div className="flex justify-end space-x-6">
                            <div className="search-select mr-3 flex items-center space-x-3 ">
                                <span className="text-xs inline-block leading-none -translate-y-[2px]">Status : </span>
                                <select className="text-xs mb-1">
                                    <option>Active</option>
                                    <option>In Active</option>
                                    <option>Scheduled</option>
                                    <option>Low Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                            <div className=" mb-7 flex justify-center items-center">
                             <Link to={'/add_product'} >
                                <button className='h-10 w-18 text-xs md:h-[40px] md:w-[100px] rounded-lg bg-myRed text-white px-2 py-1 md:text-xs'>
                                    Add Product
                                </button>
                             </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto mx-8 mb-12">
                    <table className="w-full text-base text-left  text-gray-500">
                    <thead className="bg-white">
                                <tr className="text-xs border-b border-gray6 text-tiny">
                                    <th scope="col" className=" py-3 text-tiny text-text2 uppercase font-semibold w-[3%]">
                                        <div className="tp-checkbox -translate-y-[3px]">
                                            <input id="selectAllProduct" type="checkbox"/>
                                            <label for="selectAllProduct"></label>
                                        </div>
                                    </th>
                                    <th scope="col" className="pr-8 py-3 text-tiny text-text2 uppercase font-semibold">
                                        Product 
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-[170px] text-end">
                                        SKU
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-[170px] text-end">
                                        QTY
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-[170px] text-end">
                                        Price
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-[170px] text-end">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-tiny text-text2 uppercase font-semibold w-[170px] text-end">
                                        Status
                                    </th>
                                    <th scope="col" className="px-9 py-3 text-tiny text-text2 uppercase  font-semibold w-[12%] text-end">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
        {products.map(product => (
          <ProductListRow
            key={product.id}
            id={product.id}
            productName={product.productName}
            productImage={product.productImage}
            productId={product.productId}
            quantity={product.quantity}
            price={product.price}
            rating={product.rating}
            status={product.status}
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

export default ProductList;