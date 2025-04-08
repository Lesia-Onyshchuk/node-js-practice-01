import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = data ? JSON.parse(data) : [];
  return parsedData;
};
