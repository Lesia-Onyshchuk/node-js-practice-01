import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const clearProducts = () => fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');

clearProducts();
