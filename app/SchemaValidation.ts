import { z } from "zod";

export const userSchema = z.object({
  role: z
    .enum(["JOB_SEEKER", "EMPLOYEE", "ADMIN", "TESTER", "NONE"])
    .optional(),
  userProfileId: z.number().optional(),
});

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]).optional(),
  assignedToUserId: z
    .string()
    .min(1, "assignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});

export const profileSchema = z.object({
  userId: z.string().min(1, "UserId is required.").max(255).optional(),
  professionalTitle: z
    .string()
    .min(1, "Professional Title is required.")
    .max(255)
    .optional(),
  about: z.string().min(1, "About is required.").max(65353).optional(),
  displayName: z
    .string()
    .min(1, "Display name is required.")
    .max(255)
    .optional(),
  country: z.string().min(1, "Country is required.").max(255).optional(),
  timezone: z.string().min(1, "Timezone is required.").max(255).optional(),
  city: z.string().min(1, "City is required.").max(255).optional(),
});
