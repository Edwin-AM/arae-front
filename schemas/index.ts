import { z } from "zod";

export const signinSchema = z.object({
  username: z.string()
             .min(2, "El nombre de usuario debe contener al menos 2 carácteres longitud")
             .max(50, "El nombre de usuario debe contener como máximo 50 carácteres longitud"),
  password:  z.string()
             .min(8, "La contraseña debe contener al menos 8 carácteres de longitud")
             .max(16, "La contraseña debe contener como máximo 16 carácteres longitud"),
})
