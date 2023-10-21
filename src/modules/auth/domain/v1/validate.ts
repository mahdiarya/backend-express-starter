import { z } from 'zod';

const signup = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    age: z.number({ required_error: 'Age is required' }),
    contactNo: z.string({ required_error: 'Contact No is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    address: z.string({ required_error: 'Address is required' }),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' })
  }),
});

export const Validate = { signup, login };