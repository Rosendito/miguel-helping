import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updatePasswordSchema } from "../../schemas/updatePasswordSchema"; // Asumiendo que defines el esquema de validación aquí
import StyledInput from "../StyledInput";
import StyledButton from "../StyledButton";
import Panel from "../Panel";
import useLoading from "../../hooks/useLoading";
import useToast from "../../hooks/useToast";
import { changePassword } from "../../features/user/userSlice";

const UpdatePasswordForm = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showErrorToast, showSuccessToast } = useToast();

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      new_password: ""
    }
  });

  const onSubmit = async (values) => {
    startLoading();
    try {
      await dispatch(changePassword(values));
      showSuccessToast("Contraseña actualizada con éxito");
      reset(); // Reinicia los valores del formulario
    } catch (error) {
      showErrorToast(`Error al actualizar la contraseña: ${error}`);
      console.error("Error al actualizar la contraseña:", error);
    } finally {
      stopLoading();
    }
  };

  return (
    <Panel className="w-80 h-auto" title="Actualizar Contraseña">
        <form onSubmit={handleSubmit(onSubmit)}>
          {["password", "new_password"].map((field, index) => (
            <Controller
              key={field}
              name={field}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  id={field}
                  placeholder={`Ingrese ${field.replace('_', ' ')}`}
                  type="password"
                  error={Boolean(errors[field])}
                  helperText={errors[field]?.message}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  rootClass="my-10"
                />
              )}
            />
          ))}
          <StyledButton
            type="submit"
            label="Actualizar"
            disabled={isLoading}
            className={isLoading ? "bg-[#cccccc] border-[#cccccc] hover:text-[#4e4e4e] text-[#4e4e4e]" : "bg-[#49beb7] border-[#49beb7] text-white hover:bg-[#24837c]"}
          />
        </form>
      </Panel>
  );
};

export default UpdatePasswordForm;