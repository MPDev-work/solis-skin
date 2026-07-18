import { Link, useLocation } from 'react-router-dom';
import Login from '../page/Login';
import { useCart } from '../context/useCart';

function Navbar() {
  const location = useLocation();
  const { count } = useCart();

  const navLinkClass = (path) =>
    `font-medium text-base transition duration-200 
     ${location.pathname === path ? 'text-black' : 'text-gray-500'} 
     hover:text-black`;

  return (
    <nav
      id="nav-shadow"
      className="fixed z-[999] inset-x-0 top-0 h-[100px] flex flex-col justify-between bg-white/80 backdrop-blur-[50px] px-[20px]"
    >
      <div className="flex flex-row justify-between items-center pt-[6px]">
        <a href="#" className="poppins uppercase font-semibold text-4xl">
          solis
          <span className="text-gray-400 pl-2">Skin</span>
        </a>
        <form className="relative flex w-[400px] h-[50px] justify-center items-center">
          <button
            type="submit"
            className="bi bi-search text-white absolute right-1.5 cursor-pointer bg-[#dc3545] rounded-full h-[80%] px-5"
          ></button>
          <input
            className="w-full h-full text-[16px] pl-4 pr-17 text-black border-1 border-gray-200 outline-0 rounded-full transition duration-300 hover:border-[#dc3545] focus:border-[#dc3545] "
            type="text"
            placeholder="Search"
            name="search"
          />
        </form>
        <div className="relative h-[40px] flex justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-5 mr-5">
            <Link
              to="/loginPage"
              className="h-10 px-5 border-1 border-black text-base flex justify-center items-center transition duration-200 hover:bg-black hover:text-white hover:border-transparent"
            >
              Login
            </Link>
            <Link
              to="/registerPage"
              className="h-10 px-4 border-1 border-black text-base flex justify-center items-center transition duration-200 hover:bg-black hover:text-white hover:border-transparent"
            >
              Register
            </Link>
          </div>
          <Link
            to="/notification"
            className="bi bi-bell h-full w-auto text-[32px] pl-6 border-l-2 border-gray-300 flex justify-center items-center"
          ></Link>
          <Link
            to="/bag"
            className="relative bi bi-bag h-full w-auto text-[32px] pl-6 flex justify-center items-center"
          >
            {count > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-red-500 px-1 text-[11px] font-sans text-white">{count}</span>}
          </Link>
        </div>
      </div>
      <ul className="flex flex-row items-center gap-6 pb-[5px]">
        <Link className={navLinkClass('/')} to="/">
          Home
        </Link>
        <Link className={navLinkClass('/shopAll')} to="/shopAll">
          Shop All
        </Link>
        <Link className={navLinkClass('/category')} to="/category">
          Category
        </Link>
        <Link className={navLinkClass('/brand')} to="/brand">
          Brand
        </Link>
        <Link className={navLinkClass('/freeDelivery')} to="/freeDelivery">
          Free delivery
        </Link>
        <Link className={navLinkClass('/explore')} to="/explore">
          Explore
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
