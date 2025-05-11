import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../proverbs.json');

export const readProverbs = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeProverbs = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};