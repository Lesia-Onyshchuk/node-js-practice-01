import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (data) =>
  fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
