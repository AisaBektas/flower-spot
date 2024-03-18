import { useQuery } from "@tanstack/react-query";
import { flowersApiService } from "../services/flowersApiService";

export const useFlowers = (): any => {
  return useQuery({
    queryKey: ["flowers"],
    queryFn: flowersApiService.getFlowers,
  });
};
