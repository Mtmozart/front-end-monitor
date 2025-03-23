import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: 'E-mail é obrigatório' })
    .min(1, {message: "Não pode está vazio."})
    .max(100,{message: "Máximo de caractere inválidos."})
    .email({message: "Email inválido."}),
  password: z.string({ required_error: 'A senha é obrigatória.' }).min(6, {message: "A senha deve ter pelo menos 6 caracteres."}),
});

export type LoginData = z.infer<typeof loginSchema>; 
