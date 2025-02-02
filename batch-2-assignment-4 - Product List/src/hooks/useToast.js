// dependencies
import { toast } from "react-toastify";

const useToast = () => {
  const position = "bottom-right";
  const showSuccess = (message, options = {}) => {
    toast.success(message, { position, ...options });
  };

  const showError = (message, options = {}) => {
    toast.error(message, { position, ...options });
  };

  const showInfo = (message, options = {}) => {
    toast.info(message, { position, ...options });
  };

  const showWarning = (message, options = {}) => {
    toast.warn(message, { position, ...options });
  };

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
};

export default useToast;
