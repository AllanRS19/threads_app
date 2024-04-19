import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(60),
    username: z.string().min(3).max(60),
    bio: z.string().min(3).max(1000),
});