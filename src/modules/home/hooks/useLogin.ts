import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { tokenService } from "../../../core/api/services/tokenService";
import { authApiService } from "../services/authApiService";
import { useLoginModal } from "../../../core/hooks/useLoginModal";
import { useLoginSuccessModal } from "../../../core/hooks/useLoginSuccessModal";

export const useLogin = (): any => {
  const loginModal = useLoginModal();
  const loginSuccessModal = useLoginSuccessModal();

  const onToggle = () => {
    loginModal.onClose();
    loginSuccessModal.onOpen();
  };

  return useMutation({
    mutationFn: authApiService.login,
    onSuccess: (data: any) => {
      tokenService.token = data.auth_token;
      onToggle();
    },
    onError: () => {
      toast.error("Registration failed!");
    },
  });
};
