import { readProducts } from '../utils/readProducts.js';

export const getAllProducts = async () => readProducts();

console.log(await getAllProducts());
