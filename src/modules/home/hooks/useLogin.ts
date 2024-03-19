import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { tokenService } from "../../../core/api/services/tokenService";
import { authApiService } from "../services/authApiService";
import { useLoginModal } from "../../../core/hooks/useLoginModal";
import { useLoginSuccessModal } from "../../../core/hooks/useLoginSuccessModal";
import { useCallback } from "react";

export const useLogin = (): any => {
  const loginModal = useLoginModal();
  const loginSuccessModal = useLoginSuccessModal();

  const onToggle = useCallback(() => {
    loginModal.onClose();
    loginSuccessModal.onOpen();
  }, [loginSuccessModal, loginModal]);

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
