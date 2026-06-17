import { connectDatabase, prismaClient } from "../database/prismaClient";

import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";

async function run(): Promise<void> {
  await connectDatabase();

  const userService =
    new UserService(
      new UserRepository()
    );

  const users =
    await userService.getAllUsers();

  console.log(users);

  const count =
    await userService.getUserCount();

  console.log("Total Users:", count);
}

run()
  .catch(console.error)
  .finally(async () => {
    await prismaClient.$disconnect();
  });