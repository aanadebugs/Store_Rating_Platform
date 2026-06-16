import {
  createAdminSchema,
} from "../validations/auth.validation";

const result =
  createAdminSchema.safeParse({
    fullName: "Admin User",
    email: "admin@example.com",
    password: "Password@123",
    address: "India",
  });

console.log(result.success);
