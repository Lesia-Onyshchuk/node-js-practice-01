import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const getAllProducts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};

console.log(await getAllProducts());
