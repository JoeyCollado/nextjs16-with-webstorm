'use cache';

import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function CachedProductCard({
  productId,
}: {
  productId: string;
}) {
  cacheLife("hours"); // cache for an hour

  const product = await fetch(
    `https://api.example.com/products/${productId}`
  ).then((res) => res.json());

  return (
    <div className="p-4 bg-white shadow-xl rounded-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
}
