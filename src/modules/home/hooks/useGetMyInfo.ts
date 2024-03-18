import { useQuery } from "@tanstack/react-query";
import { authApiService } from "../services/authApiService";

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn: authApiService.getMyInfo,
    enabled: false,
  });
};
