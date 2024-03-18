import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { authApiService } from "../services/authApiService";
import { useRegisterModal } from "../../../core/hooks/useRegisterModal";
import { useRegisterSuccessModal } from "../../../core/hooks/useRegisterSuccessModal";

export const useRegister = (): any => {
  const registerModal = useRegisterModal();
  const registerSuccessModal = useRegisterSuccessModal();

  const onToggle = () => {
    registerModal.onClose();
    registerSuccessModal.onOpen();
  };

  return useMutation({
    mutationFn: authApiService.register,
    onSuccess: () => {
      onToggle();
    },
    onError: () => {
      toast.error("Registration failed!");
    },
  });
};
