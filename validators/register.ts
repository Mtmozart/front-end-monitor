import { z } from "zod";

export const registerSchema = z.object({
    email: z.string({required_error: 'E-mail é obrigatório' })
        .min(1, { message: "O email é obrigatório." })
        .email("Email inválido."),
    password: z.string({required_error: 'A senha é obrigatória' })
        .min(1, { message: "A senha é obrigatória." })
        .min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string({required_error: 'A confirmação da senha é obrigatória.' })
        .min(1, { message: "A confirmação de senha é obrigatória." })
        .min(6, "A senha deve ter pelo menos 6 caracteres."),
}).refine((d) => d.password === d.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword."]
});

export type RegisterData = z.infer<typeof registerSchema>; 
