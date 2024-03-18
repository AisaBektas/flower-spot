import { apiService } from "../services/apiService";

class TokenApiService {
  async refreshToken(refreshToken: any): Promise<any> {
    return apiService.responseHandler(
      await apiService.post<any, any>(`/refresh`, {
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        grant_type: import.meta.env.VITE_GRANT_TYPE,
        refresh_token: refreshToken,
      })
    );
  }
}

export const tokenApiService = new TokenApiService();
