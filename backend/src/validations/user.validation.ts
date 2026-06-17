import { z } from "zod";

export const createStoreOwnerSchema = z.object({
  fullName: z
    .string()
    .min(2)
    .max(60),

  email: z.email(),

  password: z
    .string()
    .min(8)
    .max(100),

  address: z
    .string()
    .min(5)
    .max(400),
});

export type CreateStoreOwnerDto =
  z.infer<typeof createStoreOwnerSchema>;