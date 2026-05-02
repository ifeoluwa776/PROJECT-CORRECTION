import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  inStock: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-gray-500 uppercase">{product.category}</p>

        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm text-yellow-600">★ {product.rating}</span>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="block mt-4 text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}