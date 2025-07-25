import { z } from 'zod';

export const createDealerContactZodSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name must be less than 50 characters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name must be less than 50 characters'),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    description: z
      .string()
      .min(1, 'Description is required')
      .max(500, 'Description must be less than 500 characters'),
    carId: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, 'Invalid car ID format')
      .min(1, 'Car ID is required'),
  }),
});
