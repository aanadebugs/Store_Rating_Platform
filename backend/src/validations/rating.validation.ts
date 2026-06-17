import { z } from "zod";

export const createRatingSchema = z.object({
  storeId: z.uuid(),
  rating: z.number().int().min(1).max(5),
});

export const updateRatingSchema = z.object({
  rating: z.number().int().min(1).max(5),
});

export type CreateRatingDto =
  z.infer<typeof createRatingSchema>;

export type UpdateRatingDto =
  z.infer<typeof updateRatingSchema>;