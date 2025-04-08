import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  const data = await readProducts();
  data.splice(Math.floor(Math.random() * data.length), 1);
  await writeProducts(data);
};

removeRandomProduct();
