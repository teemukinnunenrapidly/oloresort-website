import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to the privacy statement'),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to receive newsletters'),
});

// Activity booking schema
export const activityBookingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  activity: z.string().min(1, 'Please select an activity'),
  date: z.string().min(1, 'Please select a date'),
  participants: z.number().min(1, 'At least 1 participant is required'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'You must agree to the terms and conditions'),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type ActivityBookingData = z.infer<typeof activityBookingSchema>;
