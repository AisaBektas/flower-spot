import { tokenService } from "../../../core/api/services/tokenService";

interface IUseLogout {
  logout: () => void;
}

export const useLogout = (): IUseLogout => {
  const logout = () => {
    tokenService.clear();
  };

  return {
    logout,
  };
};
