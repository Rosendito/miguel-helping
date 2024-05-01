import { toast } from "react-toastify";

const useToast = () => {

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    closeOnClick: true,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light"
  };

  const showSuccessToast = (text = "") => {
    toast.success(text, toastOptions);
  };

  const showInfoToast = (text = "") => {
    toast.info(text, toastOptions);
  };

  const showErrorToast = (text = "") => {
    toast.error(text, toastOptions);
  };

  const showWarningToast = (text = "") => {
    toast.warn(text, toastOptions);
  };

  const showToast = (text = "") => {
    toast(text, toastOptions);
  };

  return {
    showSuccessToast,
    showInfoToast,
    showErrorToast,
    showWarningToast,
    showToast
  };

};

export default useToast;