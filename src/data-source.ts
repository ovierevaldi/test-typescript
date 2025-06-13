import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entity/*.ts'], // use .ts in dev
});
