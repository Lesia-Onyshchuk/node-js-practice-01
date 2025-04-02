import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  const newData = Array(number).fill(0).map(createFakeProduct);
  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...parsedData, ...newData], null, 2),
    'utf-8',
  );
};

generateProducts(3);
