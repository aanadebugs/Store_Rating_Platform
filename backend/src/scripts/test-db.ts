import { connectDatabase, prismaClient } from "../database/prismaClient";

async function run(): Promise<void> {
  await connectDatabase();

  const users = await prismaClient.user.findMany();

  console.log(users);
}

run()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });