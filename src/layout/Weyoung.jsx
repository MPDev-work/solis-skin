import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';
import { DataCenter } from '../data/DataCenter';
import weyoungLogo from '../assets/weyoungProduct/weyounglogo.jpg';
import BlueTick from '../assets/blue-checkmark-validation-social-media-png.png';
import ProductCard from '../components/ProductCard';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Weyoung() {
  const getWeyoung = DataCenter.filter(
    (weyoung) => weyoung.storeID === 'weyoung',
  );
  const productCount = DataCenter.filter(
    (weyoung) => weyoung.storeID === 'weyoung',
  ).length;

  const storeInformation = {
    id: 'weyoung',
    name: 'weyoung',
    logo: weyoungLogo,
    followerCount: 120304,
    storeVerified: true,
  };
  const storeCategory = [
    { id: 'CT01', category: 'Local brand' },
    { id: 'CT02', category: 'Sun Screen' },
    { id: 'CT03', category: 'Serum' },
    { id: 'CT04', category: 'Make Up' },
    { id: 'CT05', category: 'Glowing' },
    { id: 'CT06', category: 'Female' },
    { id: 'CT07', category: 'Male' },
    { id: 'CT08', category: 'Others' },
  ];
  // formart number
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
  };
  // get store verification
  const storeVerification = (verified) => {
    if (verified === true) {
      return (
        <img
          className="w-10 h-auto aspect-square object-cover rounded-full"
          src={BlueTick}
        />
      );
    } else {
      return;
    }
  };
  // check stock and update
  // const stockStatus = (stock) => {
  //   if (stock > 0) {
  //     return <Available />;
  //   } else if (stock === 0) {
  //     return <OutOfStock />;
  //   } else {
  //     return <NotUpdated />;
  //   }
  // };

  return (
    <Fragment>
      {/* new arrivals section */}
      <section className="w-screen flex flex-col items-center gap-8 px-5 mt-6">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start">
          <div
            id="brand-parent"
            className="w-full flex flex-row justify-between items-start px-2.5 py-2.5 rounded-[26px] shadow-[#f2f2f6]"
          >
            {/* left container */}
            <div className="relative w-full z-50 flex flex-row justify-start items-start">
              <div className="flex flex-row justify-start items-center gap-5">
                <img
                  className="w-[200px] h-auto aspect-square object-cover rounded-2xl"
                  src={storeInformation.logo}
                />
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl font-semibold uppercase tracking-tight ">
                      {storeInformation.name}
                    </p>
                    {/* store verify */}
                    {storeVerification(storeInformation.storeVerified)}
                  </div>
                  <p className="text-sm font-normal tracking-tight leading-5 text-gray-600">
                    Store ID : {storeInformation.id}
                  </p>
                  <p className="text-sm font-medium tracking-tight leading-5 text-green-700">
                    {formatCount(storeInformation.followerCount)} Follower -{' '}
                    {formatCount(productCount)} Products
                  </p>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-xl font-medium leading-5 text-gray-700">
                      Store category 🛒
                    </p>
                    <div className="w-[450px] flex flex-row flex-wrap justify-start items-start gap-2">
                      {storeCategory.map((categorys) => {
                        return (
                          <div
                            key={categorys.id}
                            className="text-[10px] px-2.5 py-0.5 rounded-full  border-1 border-[var(--primary-color)] text-[var(--primary-color)] cursor-pointer"
                          >
                            {categorys.category}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right container */}
            <div className="flex flex-row justify-start items-start gap-2">
              <div className="h-10 px-8 flex justify-center items-center rounded-full bg-[var(--primary-color)] text-white cursor-pointer">
                Follow
              </div>
              <Link
                to="/weyoung"
                className="h-10 px-8 flex justify-center items-center text-nowrap rounded-full bg-[var(--primary-color)] cursor-pointer text-white"
              >
                Visit store
              </Link>
              <div className="h-10 px-4 flex justify-center items-center border-1 border-[var(--primary-color)] rounded-full cursor-pointer">
                <i className="bi bi-heart text-[var(--primary-color)] text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="w-full grid grid-cols-4 gap-5">
          {getWeyoung.slice(0, 4).map((weyoung) => (
            <ProductCard key={weyoung.id} product={weyoung} />
          ))}
        </div>
        <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      </section>
    </Fragment>
  );
}

export default Weyoung;
