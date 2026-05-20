import { Link } from 'react-router-dom';
import Login from './Login';

function RegisterPage() {
  return (
    <section className="bg-[#f2f2f6] w-screen min-h-screen overflow-x-hidden scroll-smooth pb-12">
      <nav className="fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between px-5 bg-white">
        <Link to="/" className="text-black no-underline">
          <i className="bi bi-arrow-bar-left"></i> Back to home page
        </Link>

        <a href="register.html">
          <h1 className="uppercase text-[40px] font-bold tracking-[-2px] cursor-pointer">
            solis <span className="text-[#d3d3d6] ml-2">skin</span>
          </h1>
        </a>

        <h3 className="text-[20px] font-medium">Sign up to SOLIS SKIN</h3>
      </nav>

      <section className="flex flex-col items-center justify-center mt-[100px] gap-5">
        <div className="flex flex-col items-center gap-2.5 p-5 bg-white rounded-[45px]">
          <h3 className="text-[24px] mb-1">Customer information</h3>

          <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>

          <div className="flex w-[600px] gap-5">
            <div className="flex flex-col w-1/2 gap-2.5">
              <label className="w-full text-left">.First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
              />
            </div>

            <div className="flex flex-col w-1/2 gap-2.5">
              <label className="w-full text-left">.Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2.5">
            <label className="w-full text-left">.Phone number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />

            <label className="w-full text-left">.Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />

            <label className="w-full text-left">.Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />

            <label className="w-full text-left">.Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5 p-5 bg-white rounded-[45px]">
          <h3 className="text-[24px] mb-1">Customer Address</h3>

          <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>

          <div className="flex flex-col items-center gap-2.5">
            <label className="w-full text-left">.Current Address</label>
            <input
              type="text"
              placeholder="street, apt, suit, floor, city, country"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />

            <label className="w-full text-left">.Phone number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="w-[600px] h-[50px] bg-[#f2f2f6] text-[16px] rounded-full px-4 outline-transparent focus:outline-1 focus:outline-black"
            />
          </div>
        </div>

        <button className="w-[640px] h-[50px] bg-black text-white text-[20px] rounded-full cursor-pointer">
          <i className="bi bi-person-fill"></i> Create Account
        </button>

        <div className="relative w-[640px] h-[20px] mt-5">
          <div className="w-full h-[1px] bg-gray-300 opacity-50"></div>

          <p className="absolute left-1/2 -translate-x-1/2 bottom-1/2 px-2 bg-[#f2f2f6] text-[18px]">
            or
          </p>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <div className="relative w-[640px] h-[50px] bg-white rounded-full flex items-center justify-center text-[20px] cursor-pointer">
            <i className="bi bi-google absolute left-2.5 text-[30px] flex justify-center items-center"></i>
            <p>Login with Google</p>
          </div>
          <div className="relative w-[640px] h-[50px] bg-white rounded-full flex items-center justify-center text-[20px] cursor-pointer">
            <i className="bi bi-facebook absolute left-2.5 text-[30px] flex justify-center items-center"></i>
            <p>Login with Facebook</p>
          </div>
        </div>

        <h3 className="text-[20px]">
          Have an Account?
          <Link to="/loginPage" className="underline font-semibold">
            Login
          </Link>
        </h3>
      </section>
    </section>
  );
}
export default RegisterPage;
