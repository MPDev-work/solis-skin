import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Fragment>
      <section className="w-screen h-max flex flex-row justify-between items-center px-5">
        {/* left */}
        <div className="w-[calc(100vw/2)]w-[calc(100vw/2)] flex flex-col justify-center items-center gap-2.5"></div>
        {/* right */}
        <div className="w-[calc(100vw/2)] flex flex-col justify-center items-start gap-2.5">
          <form
            action="#"
            className="w-full h-max flex flex-col justify-center items-start gap-2.5"
          >
            <label htmlFor="email">.Email</label>
            <input
              className="w-[80%] h-[50px] py-2.5 bg-[#f2f2f6] rounded-full px-3 text-base border-0 outline-0 transition duration-200 hover:outline-1 hover:outline-gray-500 focus:outline-1 focus:outline-gray-500"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="password">.Password</label>
            <input
              className="w-[80%] h-[50px] py-2.5 bg-[#f2f2f6] rounded-full px-3 text-base border-0 outline-0 transition duration-200 hover:outline-1 hover:outline-gray-500 focus:outline-1 focus:outline-gray-500"
              id="password"
              type="password"
              placeholder="Password"
            />
          </form>

          <div className="relative w-[80%] flex flex-row justify-center items-center mt-2.5">
            <hr className="w-full border-1 border-gray-500 outline-0" />
            <p className="absolute bg-white px-2">or</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Login;
