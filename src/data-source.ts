import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    synchronize: true,
    logging: true,
    entities: [User]
})
