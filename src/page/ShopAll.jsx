import { DataCenter } from '../data/DataCenter';
import ProductCard from '../components/ProductCard';

function ShopAll() {
  const products = DataCenter.filter((item) => item.stock > 0 || item.stock === null);
  return (
    <main className="mx-auto mt-25 max-w-[1440px] px-5 py-10 md:px-8">
      <div className="mb-8"><p className="text-sm uppercase tracking-[0.2em] text-red-500">Solis Skin</p><h1 className="mt-2 text-4xl font-bold">Shop all products</h1><p className="mt-2 text-gray-500">Select a product to view details and choose your size.</p></div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </main>
  );
}

export default ShopAll;
