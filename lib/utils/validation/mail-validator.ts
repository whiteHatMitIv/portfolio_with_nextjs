import { z } from 'zod'

const mailFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
})

export default mailFormSchema