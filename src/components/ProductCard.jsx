import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const price = (
    product.fullPrice *
    (1 - product.discountPercent / 100)
  ).toFixed(2);

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`View ${product.title}`}
      >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.src}
            alt={product.alt}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            -{product.discountPercent}%
          </span>
          {product.stock === 0 && (
            <span className="absolute inset-0 grid place-items-center bg-black/40 text-sm font-bold text-white">
              SOLD OUT
            </span>
          )}
        </div>
        <div className="p-4 pb-2">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.productCategory}
          </p>
          <h3 className="min-h-12 font-semibold leading-6 text-gray-900">
            {product.title}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-bold text-red-500">${price}</span>
            <span className="text-sm text-gray-400 line-through">
              ${product.fullPrice.toFixed(2)}
            </span>
          </div>
          <p className="mt-1 text-xs text-amber-500">
            <i className="bi bi-star-fill" /> {product.ratting}{' '}
            <span className="text-gray-400">
              · {product.sold.toLocaleString()} sold
            </span>
          </p>
        </div>
      </Link>
      <button
        type="button"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
        className="m-4 mt-2 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-full bg-black py-2.5 text-sm font-medium text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        <i className="bi bi-bag-plus" />{' '}
        {product.stock === 0 ? 'Out of stock' : 'Add to bag'}
      </button>
    </article>
  );
}
