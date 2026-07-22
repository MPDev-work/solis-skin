import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const price = (
    product.fullPrice *
    (1 - product.discountPercent / 100)
  ).toFixed(2);

  // check delivery status
  const getDeliveryStatus = (deliveryStatus) => {
    if (deliveryStatus === true) {
      return (
        <p className="text-[10px] text-amber-300 px-1 bg-green-700 rounded-tr-sm">
          Free <span className="text-white">Delivery</span>
        </p>
      );
    } else {
      return;
    }
  };

  return (
    <div className="relative flex flex-col gap-1 group">
      <Link
        to={`/product/${product.id}`}
        aria-label={`View ${product.title}`}
        className="block"
      >
        {/* Image */}
        <div className="relative w-full aspect-square flex justify-center items-center overflow-hidden">
          <img
            src={product.src}
            alt={product.alt}
            className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Delivery Status */}
          {product.deliveryStatus && (
            <div className="absolute left-0 bottom-0">
              {getDeliveryStatus(product.deliveryStatus)}
            </div>
          )}

          {/* Sold Out */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <span className="text-white text-sm font-bold">SOLD OUT</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="h-full pl-2.5 pt-2.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            {product.productCategory}
          </p>

          <h1 className="text-lg font-medium truncate">{product.title}</h1>

          {/* Rating + Sold */}
          <div className="flex items-center">
            <div className="text-[14px] flex items-center gap-0.5">
              {product.ratting}
              <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
            </div>

            <i className="bi bi-dot text-gray-600/70"></i>

            <p className="text-[12px] text-gray-600/70">
              {product.sold.toLocaleString()} sold
            </p>
          </div>

          {/* Price */}
          <div className="flex gap-3">
            <p className="text-2xl text-red-500 font-medium">${price}</p>

            <p className="text-[14px] line-through text-gray-500">
              ${product.fullPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>

      {/* Discount Badge */}
      <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
        <span className="text-white text-sm">-{product.discountPercent}%</span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
        className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
      ${
        product.stock === 0
          ? 'bg-gray-400 cursor-not-allowed text-white'
          : 'text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white active:bg-red-300'
      }`}
      >
        <i className="bi bi-bag-plus text-lg"></i>
      </button>

      {/* Heart */}
      <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-red-400/20 flex justify-center items-center">
        <i className="bi bi-heart text-lg text-[var(--primary-color)]"></i>
      </div>
    </div>
  );
}
