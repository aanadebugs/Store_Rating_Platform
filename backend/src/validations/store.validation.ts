import { z } from "zod";

export const createStoreSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100),

  email: z.email(),

  address: z
    .string()
    .min(5)
    .max(400),
});

export type CreateStoreDto =
  z.infer<typeof createStoreSchema>;