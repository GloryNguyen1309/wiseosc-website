import { z } from "zod";

// Define the form schema with Zod
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  projectType: z.string({ required_error: "Please select a project type" }),
  source: z.string({ required_error: "Please select how you heard about us" }),
  description: z
    .string()
    .min(10, { message: "Please provide more details about your project" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
