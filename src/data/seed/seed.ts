/* eslint-disable @typescript-eslint/no-explicit-any */
import { envs } from '../../config';
import { CategoryModel, MongoDatabase, TaskModel, UserModel } from '../mongo';

import { seedData } from './seed-data';

(async () => {
  await MongoDatabase.connect({
    dbName: envs.DB_NAME,
    mongoUri: envs.URI_MONGO
  });

  await main();

  await MongoDatabase.disconnect();
})();

const randomBetween0AndX = (x: number) => {
  return Math.floor(Math.random() * x);
};

async function main() {
  // 0. Borrar todo!
  await Promise.all([UserModel.deleteMany(), CategoryModel.deleteMany(), TaskModel.deleteMany()]);

  // 1. Crear usuarios
  const users = await UserModel.insertMany(seedData.users);

  // 2. Crear categorias
  const categories = await CategoryModel.insertMany(
    seedData.categories.map((category) => {
      return {
        ...category,
        user: users[0]._id
      };
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const task = await TaskModel.insertMany(
    seedData.task.map((task: any) => {
      return {
        ...task,
        user: users[randomBetween0AndX(seedData.users.length - 1)]._id,
        category: categories[randomBetween0AndX(seedData.categories.length - 1)]._id
      };
    })
  );

  console.log('SEEDED');
}
