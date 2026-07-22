import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataCenter } from '../data/DataCenter';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/useCart';

const prettify = (value) => value.charAt(0).toUpperCase() + value.slice(1);

function ProductPreviewContent({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.availableSize?.[0]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const price = product.fullPrice * (1 - product.discountPercent / 100);
  const related = DataCenter.filter(
    (item) =>
      item.productCategory === product.productCategory &&
      item.id !== product.id,
  ).slice(0, 4);
  const add = () => {
    addToCart(product, quantity, size);
    setAdded(true);
  };

  return (
    <main className="mx-auto mt-25 max-w-[1440px] px-5 py-10 md:px-8">
      <div className="grid gap-10 border-b border-gray-200 pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
        <section>
          <div className="aspect-square overflow-hidden rounded-[28px] bg-gray-50">
            <img
              className="h-full w-full object-cover mix-blend-multiply"
              src={product.src}
              alt={product.alt}
            />
          </div>
        </section>
        <section className="flex flex-col items-start pt-2">
          <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
            <span className="h-5 w-5 rounded-full bg-red-600" />{' '}
            {product.storeID}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-black md:text-5xl">
            {product.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-amber-500">
            <span className="text-lg tracking-wider">★★★★★</span>
            <span className="text-sm text-gray-400">
              {product.ratting} · {product.sold.toLocaleString()} reviews
            </span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl font-bold text-red-500">
              ${price.toFixed(2)}
            </span>
            <span className="text-xl font-semibold text-gray-400 line-through">
              ${product.fullPrice.toFixed(2)}
            </span>
          </div>
          <p className="mt-4 text-sm text-emerald-600">
            <i className="bi bi-truck mr-2" />
            {product.deliveryStatus
              ? 'Free delivery · Local return'
              : 'Standard delivery available'}
          </p>
          <div className="mt-7 w-full">
            <h2 className="mb-3 font-semibold">Size available</h2>
            <div className="flex flex-wrap gap-2">
              {product.availableSize.map((option) => (
                <button
                  key={option}
                  onClick={() => setSize(option)}
                  className={`rounded-xl px-4 py-2.5 text-sm transition ${size === option ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {option}ml
                </button>
              ))}
            </div>
          </div>
          <div className="mt-7 flex w-full items-center gap-3">
            <div className="flex overflow-hidden rounded-xl bg-gray-100">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="px-4 py-3 text-xl text-gray-500"
              >
                -
              </button>
              <span className="min-w-12 py-3 text-center font-medium">
                {quantity}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() =>
                  setQuantity((value) => Math.min(product.stock, value + 1))
                }
                className="px-4 py-3 text-xl text-gray-500"
              >
                +
              </button>
            </div>
            <button
              disabled={product.stock === 0}
              onClick={add}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-red-500 py-3.5 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <i className="bi bi-bag" />{' '}
              {product.stock === 0
                ? 'Out of stock'
                : added
                  ? 'Added to bag!'
                  : 'Add to bag'}
            </button>
          </div>
          <p className="mt-5 text-sm text-gray-500">
            Category:{' '}
            <span className="font-medium text-gray-800">
              {prettify(product.productCategory)}
            </span>{' '}
            · {product.stock} items in stock
          </p>
        </section>
      </div>
      <section className="pt-12">
        <h2 className="mb-7 text-3xl font-bold md:text-4xl">
          You might also like
        </h2>
        {related.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            More {product.productCategory} products are coming soon.
          </p>
        )}
      </section>
    </main>
  );
}

function ProductPreview() {
  const { id } = useParams();
  const product = DataCenter.find((item) => item.id === id);
  if (!product) {
    return (
      <main className="mx-auto mt-36 max-w-3xl px-5 py-20 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link
          className="mt-5 inline-block text-red-500 underline"
          to="/shopall"
        >
          Return to shop
        </Link>
      </main>
    );
  }

  return <ProductPreviewContent key={product.id} product={product} />;
}

export default ProductPreview;
