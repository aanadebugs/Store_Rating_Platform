import {
  hashPassword,
  verifyPassword,
} from "../utils/password.util";

async function run(): Promise<void> {
  const password = "Password@123";

  const hash = await hashPassword(password);

  console.log(hash);

  const valid = await verifyPassword(
    hash,
    password
  );

  console.log(valid);
}

run();