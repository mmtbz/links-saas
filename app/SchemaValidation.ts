import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]),
});

export const patchUserSchema = z.object({
  country: z.string().min(1, "Country is required.").max(255).optional(),
  timezone: z.string().min(1, "Timezone is required.").max(255).optional(),
  displayName: z
    .string()
    .min(1, "Description is required.")
    .max(255)
    .optional(),
  about: z
    .string()
    .min(1, "User About is required.")
    .max(255)
    .optional()
    .nullable(),
});

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]),
});

export const createProfileSchema = z.object({
  userId: z.string().min(1, "UserId is required.").max(255),
  professionalTitle: z
    .string()
    .min(1, "Professional Title is required.")
    .max(255),
  about: z.string().min(1, "About is required.").max(255),
  displayName: z.string().min(1, "Display name is required.").max(255),
  country: z.string().min(1, "Country is required.").max(255),
  timezone: z.string().min(1, "Timezone is required.").max(255),
  city: z.string().min(1, "City is required.").max(255),
});
