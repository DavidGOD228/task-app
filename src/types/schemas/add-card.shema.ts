import { z } from "zod";

export const cardSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  priority: z.enum(["High", "Medium", "Low"]),
  status: z.enum(["Not Started", "In Progress", "Completed"]),
  type: z.enum(["Task", "Bug", "Feature"]),
});
