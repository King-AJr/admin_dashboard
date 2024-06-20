import { useContext } from "react";
import BrandForm from "../components/BrandForm";
import BrandTable from "../components/BrandTable";
import DashboardLayout from "../components/DashboardLayout";
import { DataContext } from '../context/DataProvider';


const Brands = () => {
    const { brands } = useContext(DataContext);
    console.log(brands);
    return (
        <DashboardLayout>
        <div className="h-full  overflow-x-auto  container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-1">Brands</h1>
          <p className="mb-4 text-sm">Add a brand</p>
          <BrandForm/>
          <BrandTable brands={brands} />
        </div>
    </DashboardLayout>
    )
}

export default Brands;