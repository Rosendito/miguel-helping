import { object, string, date, ref } from "yup";
import { getDate, months } from "../utils/formatters";

const { day, month, year } = getDate(new Date());
const m = months.findIndex(item => item === month) ?? 1;
const lastYear = year - 100;
const firstYear = year - 18;

export const registerSchema = object({
  firstName: string()
    .min(1, "El nombre debe tener mínimo un caracter")
    .max(40, "El nombre debe tener máximo 40 caracteres.")
    .required("El nombre es obligatorio."),
  lastName: string()
    .min(1, "El apellido debe tener mínimo un caracter")
    .max(40, "El apellido debe tener máximo 40 caracteres.")
    .required("El apellido es obligatorio."),
  document: string()
    .min(7, "El documento debe tener mínimo 7 caracteres.")
    .max(20, "El documento debe tener máximo 20 caracteres.")
    .required("El documento es obligatorio."),
  phone: string()
    .min(12, "El teléfono debe tener mínimo 12 caracteres.")
    .max(20, "El teléfono debe tener máximo 20 caracteres.")
    .required("El teléfono es obligatorio."),
  birthday: date()
    .max(new Date(firstYear, m, day),
      "La fecha de nacimiento debe ser mayor a 18 años.")
    .min(new Date(lastYear, m, day),
      "La fecha de nacimiento debe ser menor a 100 años.")
    .required("La fecha de nacimiento es obligatoria."),
  email: string()
    .email("El correo debe tener un formato válido.")
    .min(6, "El correo debe tener mínimo 6 caracteres.")
    .max(50, "El correo debe tener máximo 50 caracteres.")
    .required("El correo es obligatorio."),
  password: string()
    .min(8, "La contraseña debe tener mínimo 8 caracteres.")
    .max(255, "La contraseña debe tener máximo 255 caracteres.")
    .required("La contraseña es obligatoria."),
  passwordConfirm: string()
    .min(8, "La confirmación de contraseña debe tener mínimo 8 caracteres.")
    .max(255, "La confirmación de contraseña debe tener máximo 255 caracteres.")
    .required("La confirmación de contraseña es obligatoria.")
    .oneOf([ref("password"), null], "Las contraseñas deben coincidir.")
});

export const registerDefaultValues = {
  firstName: "",
  lastName: "",
  document: "",
  phone: "",
  birthday: new Date(),
  email: "",
  password: "",
  passwordConfirm: ""
};