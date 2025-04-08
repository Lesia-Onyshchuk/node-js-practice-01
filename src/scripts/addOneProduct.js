import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const addOneProduct = async () => {
  const data = await readProducts();
  const newData = createFakeProduct();
  await writeProducts([...data, newData]);
};

addOneProduct();
