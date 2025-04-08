import { readProducts } from '../utils/readProducts.js';

export const countProducts = async () => {
  const data = await readProducts();
  return data.length;
};

console.log(await countProducts());
