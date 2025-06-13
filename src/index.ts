import './config.ts'

import express from 'express'
import { VercelRequest, VercelResponse } from '@vercel/node';
import 'reflect-metadata'
import { AppDataSource } from './data-source.ts';
import { User } from './entity/User.ts';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript + Vercel + ESM!')
})

app.get('/test', async (req, res) => {
  const users = await AppDataSource.getRepository(User).find();
  res.send(users)
})


AppDataSource.initialize()
.then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

})
.catch(error => console.log(error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res)
}

