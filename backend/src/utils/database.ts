import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.resolve(__dirname, '../database/database.db'));

export const db = open({
    filename: path.resolve(__dirname, '../database/database.db'),
    driver: sqlite3.Database,
});
