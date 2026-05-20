import Ads2 from '../assets/ads2.jpg';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewArrivals from '../layout/NewArrivals';
import BestSellProduct from '../layout/BestSellProduct';
import Ads1 from '../assets/gradian/gradiancollection.jpg';
// import gatsbybanner from '../assets/gatsby/gatsbybanner.png';
// import phkaproduct from '../assets/Phka/phkaslacollection.jpg';
// import skin1004banner from '../assets/skin1004/skin1004banner.webp';
import ImageSlider from '../components/ImageSlider';
import Reviews from '../components/Reviews';
function indexPage() {
  const categoryAds = [
    { id: 1, category: 'Blush' },
    { id: 2, category: 'Serum' },
    { id: 3, category: 'Cleanser' },
    { id: 4, category: 'Sunscreen' },
    { id: 5, category: 'Toner' },
    { id: 6, category: 'Mask' },
    { id: 7, category: 'Cream' },
    { id: 8, category: 'Leap Stick' },
    { id: 9, category: 'Other' },
  ];
  return (
    <Fragment>
      <ImageSlider />
      {/* brand flex */}
      <div className="w-full whitespace-nowrap flex flex-row justify-start items-center px-[20px] overflow-x-auto overflow-y-hidden no-scrollbar mt-10">
        {categoryAds.map((categorys) => {
          return (
            <Fragment key={categorys.id}>
              <Link
                to="/"
                className="shrink-0 px-[20px] py-[10px] rounded-full text-lg border-1 border-gray-300 text-black font-light  transition duration-300 hover:bg-[#dc3545] hover:border-transparent hover:text-white focus:bg-[#dc3545] focus:text-white focus:border-transparent cursor-pointer"
              >
                {categorys.category}
              </Link>
              <div className="mx-[20px] h-[30px] w-[1px] border-l-1 border-gray-300"></div>
            </Fragment>
          );
        })}
      </div>
      <BestSellProduct />
      {/* new arrivals sect */}
      <NewArrivals />
      {/* <section className="w-screen grid grid-cols-6 gap-3 px-3 mt-16">
        <img
          className="col-span-6 object-cover w-full h-[450px]"
          src={gatsbybanner}
        />

        <img
          className="row-[2] col-[1/4] object-cover w-full h-[450px]"
          src={Ads1}
        />

        <img
          className="row-[2] col-[4/7] object-cover w-full h-[450px]"
          src={phkaproduct}
        />

        <img
          className="col-span-6 object-cover w-full h-[450px]"
          src={skin1004banner}
        />
      </section> */}
      {/* <FooterBar /> */}
      <h1 className="uppercase w-full text-center font-semibold text-5xl mt-12">
        what our customers say about us?
      </h1>
      <Reviews />
    </Fragment>
  );
}

export default indexPage;
