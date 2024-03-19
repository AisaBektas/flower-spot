import { apiService } from "../services/apiService";

class TokenApiService {
  async refreshToken(refreshToken: any): Promise<any> {
    return apiService.responseHandler(
      await apiService.post<any, any>(`/refresh`, {
        refresh_token: refreshToken,
      })
    );
  }
}

export const tokenApiService = new TokenApiService();
