import DashboardLayout from "../components/DashboardLayout";
import uploadImage from "../assets/img/icons/upload.png";
import productOne from "../assets/img/product/prodcut-1.jpg";
import productTwo from "../assets/img/product/prodcut-2.jpg";
import productFour from "../assets/img/product/prodcut-4.jpg";
import CategoriesListRow from "../components/CategoriesListRow";

const CategoriesPage = () => {
    const dummyData = [
        {
          id: 1,
          productId: '#479063DR',
          productImage: productOne,
          productCategory: 'Fashion',
          productDescription: 'Lorem ipsum dolor sit amet',
          productSlug: '/fashion',
          productItems: 78,
        },
        {
          id: 2,
          productId: '#479073DR',
          productImage: productTwo,
          productCategory: 'Fashion',
          productDescription: 'Consectetur adipiscing elit',
          productSlug: '/fashion',
          productItems: 45,
        },
        {
          id: 3,
          productId: '#479083DR',
          productImage: productFour,
          productCategory: 'Fashion',
          productDescription: 'Sed do eiusmod tempor incididunt',
          productSlug: '/fashion',
          productItems: 30,
        },
        {
          id: 4,
          productId: '#479093DR',
          productImage: productOne,
          productCategory: 'Fashion',
          productDescription: 'Ut labore et dolore magna aliqua',
          productSlug: '/fashion',
          productItems: 150,
        },
        {
          id: 5,
          productId: '#479103DR',
          productImage: productFour,
          productCategory: 'Fashion',
          productDescription: 'Quis nostrud exercitation ullamco',
          productSlug: '/fashion',
          productItems: 60,
        }
      ];
    


    return (
        <DashboardLayout>
            <div className="h-screen overflow-x-auto body-content px-8 py-8 bg-slate-100">
                <div className="grid grid-cols-12">
                        <div className="col-span-10">
                            <div className="flex justify-between mb-10 items-end">
                                <div className="page-title">
                                    <h3 className="mb-1 text-[28px]">Category</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-4">
                        <div className="mb-6 bg-white px-8 py-8 rounded-md">
                            <div className="mb-6">
                                <p className="mb-2 text-sm text-black">Upload Image</p>
                                <div className="text-center">
                                    <img className="w-[100px] h-auto mx-auto" src={uploadImage} alt=""/>
                                </div>
                                <span className="text-xs text-center w-full inline-block mb-3">Image size must be less than 5Mb</span>
                                <div className="">
                                    <form action="#">
                                        <input type="file" id="productImage" className="hidden"/>
                                        <label for="productImage" className="text-xs w-full inline-block py-1 px-4 rounded-md border border-gray6 text-center hover:cursor-pointer hover:bg-theme hover:text-white hover:border-theme transition">Upload Image</label>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- input --> */}
                            <div className="mb-6">
                                <p className="mb-1 text-sm text-black">Name</p>
                                <input className="input w-full h-[44px] rounded-md border border-gray6 px-6 text-sm" type="text" placeholder="Name"/>
                            </div>
                            {/* <!-- input --> */}
                            <div className="mb-6">
                                <p className="mb-1 text-sm text-black">Slug</p>
                                <input className="input w-full h-[44px] rounded-md border border-gray6 px-6 text-sm" type="text" placeholder="Slug"/>
                            </div>
                            {/* <!-- input --> */}
                            <div className="mb-6">
                                <p className="mb-1 text-sm text-black">Parent</p>
                                <div className="category-add-select select-bordered">
                                    <select>
                                        <option value="">Electronics</option>
                                        <option value="">Fashion</option>
                                        <option value="">Jewellery</option>
                                        <option value="">Grocery</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- input --> */}
                            <div className="mb-6">
                                <p className="mb-1 text-sm text-black">Description</p>
                                <textarea className="input h-[150px] w-full py-3 resize-none" placeholder="Description Here"></textarea>
                            </div>

                            <div className="tp-checkbox flex items-center mb-5">
                                <input id="product-1" type="checkbox"/>
                                <label for="product-1" className="text-xs pt-2">Create As Parent Category</label>
                            </div>

                            <button className="tp-btn px-7 py-2">Add Category</button>
                        </div>
                        </div>
                        <div class="overflow-scroll col-span-12 lg:col-span-8">
                    <table class="pl-4 w-full text-base text-left text-gray-500">
                    <thead class="bg-white">
                                <tr class=" border-b border-gray6 text-xs">
                                    <th scope="col" class=" py-3 text-xs text-text2 uppercase font-semibold w-[3%]">
                                        <div class="tp-checkbox -translate-y-[3px]">
                                            <input id="selectAllProduct" type="checkbox"/>
                                            <label for="selectAllProduct"></label>
                                        </div>
                                    </th>
                                    <th scope="col" class="pr-3 py-3 text-xs text-text2 uppercase font-semibold">
                                        ID
                                    </th>
                                    <th scope="col" class="px-3 py-3 text-xs text-text2 uppercase font-semibold w-[200px] text-end">
                                        NAME
                                    </th>
                                    <th scope="col" class="px-3 py-3 text-xs text-text2 uppercase font-semibold w-[200px] text-end">
                                        DESCRIPTION
                                    </th>
                                    <th scope="col" class="px-2 py-3 text-xs text-text2 uppercase font-semibold w-[200px] text-end">
                                        SLUG
                                    </th>
                                    <th scope="col" class="px-8 py-3 text-xs text-text2 uppercase font-semibold w-[200px] text-end">
                                        ITEMS
                                    </th>
                                    <th scope="col" class="px-9 py-3 text-xs text-text2 uppercase  font-semibold w-[12%] text-end">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {dummyData.map((data) => (
                                <CategoriesListRow
                                    key={data.id}
                                    id={data.id}
                                    productId={data.productId}
                                    productImage={data.productImage}
                                    productCategory={data.productCategory}
                                    productDescription={data.productDescription}
                                    productSlug={data.productSlug}
                                    productItems={data.productItems}
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

export default CategoriesPage;