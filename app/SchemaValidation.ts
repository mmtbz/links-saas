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
