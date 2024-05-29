import { useState } from "react";

import DashboardLayout from "../components/DashboardLayout"
import Editor from "../components/Editor";
import uploadImage from "../assets/img/icons/upload.png";


const AddProduct = () => {
    const [addProductTab, setAddProductTab] = useState(1);
    const [discountType, setDiscountType] = useState(3);

    return (
        <DashboardLayout>
            <div className="h-screen overflow-x-auto body-content px-8 py-8 bg-slate-100">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 2xl:col-span-10">
                        <div className="flex justify-between mb-10 items-end flex-wrap">
                            <div className="page-title mb-6 sm:mb-0">
                                <h3 className="mb-0 text-[28px]">Add Product</h3>
                            </div>
                            <div className="mb-2 flex sm:justify-end items-center flex-wrap">
                                <button className="tp-btn px-10 py-2 mr-2 sm:mb-0 mb-2">Publish</button>
                                <button className="tp-btn px-10 py-2 border border-[#dfdfdf] bg-transparent text-black hover:text-black hover:bg-white hover:border-white sm:mb-0 mb-2">Save Draft</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 2xl:col-span-10" x-data="{ addProductTab: 1 }">
                        <div className="mb-3 hidden">
                            <div className="flex items-center bg-white rounded-md px-4 py-3">
                                <button
                                className={`text-base py-1 px-5 rounded-md border-b border-transparent ${addProductTab === 1 ? 'bg-theme text-white' : 'bg-white text-textBody'}`}
                                onClick={() => setAddProductTab(1)}
                                >
                                General
                                </button>
                                <button
                                className={`text-base py-1 px-5 rounded-md ${addProductTab === 2 ? 'bg-theme text-white' : 'text-textBody bg-white'}`}
                                onClick={() => setAddProductTab(2)}
                                >
                                Advanced
                                </button>
                            </div>
                        </div> 
                        <div className="">
                            <div className="">
                                {addProductTab === 1 && (
                                    <div className="grid grid-cols-12 gap-6 mb-6">
                                        <div className="col-span-12 md:col-span-8 lg:col-span-8">
                                            <div className="mb-6 bg-white px-8 py-8 rounded-md">
                                                <h4 className="pb-4 text-[18px]">General</h4>
                                                <div className="mb-5">
                                                <p className="mb-1 text-sm text-black">Product Name <span className="text-red">*</span></p>
                                                <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-base"
                                                    type="text"
                                                    placeholder="Product name"
                                                />
                                                <span className="text-xs">A product name is required and recommended to be unique.</span>
                                                </div>
                                                <div className="mb-5">
                                                <div className="min-h-[200px]" id="editor">
                                                    <Editor/>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="bg-white px-8 py-8 rounded-md mb-6">
                                                <h4 className="pb-2 text-[18px]">Details</h4>
                                                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6">
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Base Price <span className="text-red">*</span></p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-xs"
                                                    type="text"
                                                    placeholder="Product price"
                                                    />
                                                    <span className="text-xs leading-4">Set the base price of product.</span>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">SKU <span className="text-red">*</span></p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-xs"
                                                    type="text"
                                                    placeholder="SKU"
                                                    />
                                                    <span className="text-xs leading-4">Enter the product SKU.</span>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Quantity <span className="text-red">*</span></p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-xs"
                                                    type="text"
                                                    placeholder="Quantity"
                                                    />
                                                    <span className="text-xs leading-4">Enter the product quantity.</span>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">VAT Amount (%)</p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-xs"
                                                    type="text"
                                                    placeholder="VAT"
                                                    />
                                                    <span className="text-xs leading-4">Set the product VAT amount.</span>
                                                </div>
                                                </div>

                                                <div>
                                                <p className="mb-2 text-sm text-black">Discount Type <span className="text-red">*</span></p>
                                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-3 flex-wrap mb-5">
                                                    <div className="tp-checkbox-secondary  mb-4">
                                                    <label
                                                        className={`border border-gray6 px-4 sm:px-10 py-5 rounded-md hover:cursor-pointer ${discountType === 3 ? 'bg-theme text-white' : 'bg-white text-textBody'}`}
                                                        onClick={() => setDiscountType(3)}
                                                    >
                                                        <small className="flex items-center">
                                                        <input id="noDiscount" type="radio" name="priceDiscount" checked={discountType === 3} readOnly />
                                                        <span className="text-xs font-medium">No Discount</span>
                                                        </small>
                                                    </label>
                                                    </div>
                                                    <div className="h-[25px] tp-checkbox-secondary mb-4">
                                                    <label
                                                        className={`border border-gray6 px-4 sm:px-10 py-5 rounded-md hover:cursor-pointer ${discountType === 1 ? 'bg-theme text-white' : 'bg-white text-textBody'}`}
                                                        onClick={() => setDiscountType(1)}
                                                    >
                                                        <small className="flex items-center">
                                                        <input id="percentDiscount" type="radio" name="priceDiscount" checked={discountType === 1} readOnly />
                                                        <span className="text-xs font-medium">Fixed Discount</span>
                                                        </small>
                                                    </label>
                                                    </div>
                                                    <div className="h-[25px] tp-checkbox-secondary mb-4">
                                                    <label
                                                        className={`border border-gray6 px-4 sm:px-10 py-5 rounded-md hover:cursor-pointer ${discountType === 2 ? 'bg-theme text-white' : 'bg-white text-textBody'}`}
                                                        onClick={() => setDiscountType(2)}
                                                    >
                                                        <small className="flex items-center">
                                                        <input id="fixedDiscount" type="radio" name="priceDiscount" checked={discountType === 2} readOnly />
                                                        <span className="text-xs font-medium">Percent Discount</span>
                                                        </small>
                                                    </label>
                                                    </div>
                                                </div>

                                                {discountType === 1 && (
                                                    <div className="mb-5 mx-6">
                                                    <p className="mb-0 text-base text-black">Price <span className="text-red">*</span></p>
                                                    <input
                                                        className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-base"
                                                        type="text"
                                                        placeholder="Price"
                                                    />
                                                    </div>
                                                )}
                                                {discountType === 2 && (
                                                    <div className="mb-5 mx-6">
                                                    <p className="mb-2 text-base text-black">Percent <span className="text-red">*</span></p>
                                                    <input
                                                        className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-base"
                                                        type="text"
                                                        placeholder="Percent"
                                                    />
                                                    </div>
                                                )}
                                                </div>
                                            </div>

                                            <div className="bg-white px-8 py-8 rounded-md mb-6">
                                                <h4 className="text-[18px] mb-2">Shipping</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Width(Inch)</p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-sm"
                                                    type="text"
                                                    placeholder="Width"
                                                    />
                                                    <span className="text-xs">Set the product width.</span>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Height(Inch)</p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-sm"
                                                    type="text"
                                                    placeholder="Height"
                                                    />
                                                    <span className="text-xs">Set the product height.</span>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Weight(KG)</p>
                                                    <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-sm"
                                                    type="text"
                                                    placeholder="Weight"
                                                    />
                                                    <span className="text-xs">Set the product weight.</span>
                                                </div>
                                                </div>
                                                <div className="mb-5">
                                                <p className="mb-1 text-sm text-black">Shipping Cost</p>
                                                <input
                                                    className="input w-full h-[40px] rounded-md border border-gray6 px-6 text-sm"
                                                    type="text"
                                                    placeholder="Cost"
                                                />
                                                <span className="text-xs">Set the product shipping cost.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-4 lg:col-span-4 ">
                                        <div className="bg-white px-8 py-8 rounded-md mb-6">
                                            <p className="mb-2 text-sm text-black">Upload Image</p>
                                            <div className="text-center">
                                                <img className="w-[100px] h-auto mx-auto" src={uploadImage} alt=""/>
                                            </div>
                                            <span className="text-xs text-center w-full inline-block mb-3">Image size must be less than 5Mb</span>
                                            <div className="">
                                                <form action="#">
                                                    <input type="file" id="productImage" className="hidden"/>
                                                    <label for="productImage" className="text-tiny w-full inline-block py-1 px-4 rounded-md border border-gray6 text-center hover:cursor-pointer hover:bg-theme hover:text-white hover:border-theme transition">Upload Image</label>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="bg-white px-8 py-8 rounded-md mb-6">
                                            <p className="mb-5 text-base text-black">Product Details</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                                                <div className="category-select select-bordered">
                                                    <h5 className="text-xs mb-1">Category</h5>
                                                    <select className="text-xs">
                                                        <option value="">Electronics</option>
                                                        <option value="">Fashion</option>
                                                        <option value="">Jewellery</option>
                                                        <option value="">Beauty</option>
                                                        <option value="">Grocery</option>
                                                    </select>
                                                </div>
                                                <div className="sub-category-select select-bordered">
                                                    <h5 className="text-xs mb-1">Sub Category</h5>
                                                    <select className="text-xs">
                                                        <option value="">Electronics</option>
                                                        <option value="">Fashion</option>
                                                        <option value="">Jewellery</option>
                                                        <option value="">Beauty</option>
                                                        <option value="">Grocery</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <p className="mb-2 text-sm text-black">Tags</p>
                                                <input className="input w-full h-[36px] rounded-md border border-gray6 px-6 text-sm" type="text" placeholder="Tags"/>
                                            </div>
                                        </div>
                                        <div className="bg-white px-8 py-8 rounded-md">
                                            <p className="mb-5 text-base text-black">Product Attribute</p>
                                            <div className="">
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Size</p>
                                                    <input className="input w-full h-[36px] rounded-md border border-gray6 px-6 text-sm" type="text" placeholder="Size"/>
                                                </div>
                                                <div className="mb-5">
                                                    <p className="mb-1 text-sm text-black">Color</p>
                                                    <input className="input w-full h-[36px] rounded-md border border-gray6 px-6 text-sm" type="text" placeholder="Hex Code Here"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </DashboardLayout>
    )
}

export default AddProduct;