import { MdAttachEmail, MdDashboard } from "react-icons/md";
import NavigationItem from "./NavigationItem";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { PiPackageDuotone } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { useLocation } from "react-router-dom"; // Import useLocation

const SideBar = ({ sideMenu, setSideMenu }) => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Get the current path

  return (
    <div
      className={`w-[300px] lg:w-[250px] xl:w-[300px] border-r border-gray overflow-y-scroll sidebar-scrollbar fixed left-0 top-0 h-full bg-white z-50 transition-transform duration-300 ${sideMenu ? '' : 'hide'}`}
    >
      <div className="flex items-center mb-4">
        <div className="w-full flex justify-between items-center py-4 px-2">
          <h1 className="text-xl font-bold">E-commerce</h1>
          <button onClick={() => setSideMenu(!sideMenu)}>
            <GiHamburgerMenu className="mr-2" />
          </button>
        </div>
      </div>
      <div>
        <NavigationItem
          icon={<MdDashboard />}
          label="Dashboard"
          link="/"
          active={currentPath === '/'}
        />
        <NavigationItem
          icon={<GiShoppingCart />}
          label="Orders"
          link="/orders"
          active={currentPath === '/orders'}
        />
        <NavigationItem
          icon={<PiPackageDuotone />}
          label="Products"
          link="/products"
          active={currentPath === '/products'}
        />
         <NavigationItem
          icon={<BiCategory />}
          label="Categories"
          link="/categories"
          active={currentPath === '/categories'}
        />
        <NavigationItem
          icon={<FaUsers />}
          label="Brands"
          link="/brands"
          active={currentPath === '/brands'}
        />
        <NavigationItem
          icon={<MdAttachEmail />}
          label="Marketing"
          link="/marketing"
          active={currentPath === '/marketing'}
        />
      </div>
    </div>
  );
};

export default SideBar;
