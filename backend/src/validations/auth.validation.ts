import { z } from "zod";

export const loginSchema =
  z.object({
    email: z.email(),
    password: z.string().min(8),
  });

export const createAdminSchema =
  z.object({
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

export const createStoreOwnerSchema =
  z.object({
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

export const createUserSchema =
  z.object({
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

export type LoginDto =
  z.infer<
    typeof loginSchema
  >;

export type CreateAdminDto =
  z.infer<
    typeof createAdminSchema
  >;

export type CreateStoreOwnerDto =
  z.infer<
    typeof createStoreOwnerSchema
  >;

export type CreateUserDto =
  z.infer<
    typeof createUserSchema
  >;