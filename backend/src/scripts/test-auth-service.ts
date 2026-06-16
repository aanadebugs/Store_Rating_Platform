import { connectDatabase } from "../database/prismaClient";

import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "../services/auth.service";

async function run(): Promise<void> {
  await connectDatabase();

  const authService =
    new AuthService(
      new UserRepository()
    );

  const token =
    await authService.login({
      email: "admin@example.com",
      password: "Password@123",
    });

  console.log(token);
}

run().catch(console.error);