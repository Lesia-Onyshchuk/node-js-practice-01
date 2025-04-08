import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const data = await readProducts();
  const newData = Array(number).fill(0).map(createFakeProduct);
  await writeProducts([...data, ...newData]);
};

generateProducts(3);
