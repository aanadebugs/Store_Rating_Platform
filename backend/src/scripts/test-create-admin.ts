import { connectDatabase, prismaClient } from "../database/prismaClient";

import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "../services/auth.service";

async function run(): Promise<void> {
  await connectDatabase();

  await prismaClient.user.deleteMany({
    where: {
      email: "admin@example.com",
    },
  });

  const authService = new AuthService(
    new UserRepository()
  );

  const admin = await authService.createAdmin({
    fullName: "Admin User",
    email: "admin@example.com",
    password: "Password@123",
    address: "India",
  });

  console.log(admin);
}

run()
  .catch(console.error)
  .finally(async () => {
    await prismaClient.$disconnect();
  });