import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const removeRandomProduct = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  parsedData.splice(Math.floor(Math.random() * parsedData.length), 1);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};

removeRandomProduct();
