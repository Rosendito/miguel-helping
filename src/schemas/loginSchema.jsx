import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .email("El correo debe tener un formato válido.")
    .min(6, "El correo debe tener mínimo 6 caracteres.")
    .max(50, "El correo debe tener máximo 50 caracteres.")
    .required("El correo es obligatorio."),
  password: string()
    .min(8, "La contraseña debe tener mínimo 8 caracteres.")
    .max(255, "La contraseña debe tener máximo 255 caracteres")
    .required("La contraseña es obligatoria.")
});

export const loginDefaultValues = {
  email: "",
  password: ""
};