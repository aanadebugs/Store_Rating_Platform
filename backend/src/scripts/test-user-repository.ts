import { connectDatabase, prismaClient } from "../database/prismaClient";
import { UserRepository } from "../repositories/user.repository";

async function run(): Promise<void> {
  await connectDatabase();

  const userRepository = new UserRepository();

  const existingUser = await userRepository.findByEmail(
    "admin@example.com"
  );

  if (existingUser) {
    console.log("User already exists");
    console.log(existingUser);

    return;
  }

  const createdUser = await userRepository.create({
    fullName: "Admin User",
    email: "admin@example.com",
    passwordHash: "hashed-password",
    address: "India",
    role: "ADMIN",
  });

  console.log("Created User:");
  console.log(createdUser);

  const foundUser = await userRepository.findByEmail(
    "admin@example.com"
  );

  console.log("Found User:");
  console.log(foundUser);
}

run()
  .catch(console.error)
  .finally(async () => {
    await prismaClient.$disconnect();
  });