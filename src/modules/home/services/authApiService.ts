import { apiService } from "../../../core/api/services/apiService";
import { tokenService } from "../../../core/api/services/tokenService";

class AuthApiService {
  async register(data: any): Promise<any> {
    const registerResponse: any = apiService.responseHandler(
      await apiService.post<any>("v1/users/register", data)
    );

    return registerResponse;
  }

  async login(credentials: any): Promise<any> {
    const loginResponse: any = apiService.responseHandler(
      await apiService.post<any>("v1/users/login", credentials)
    );
    return loginResponse;
  }

  async getMyInfo(data: any): Promise<any> {
    const myInfoResponse: any =
      tokenService.token &&
      apiService.responseHandler(
        await apiService.get<any>("v1/users/me", data)
      );

    return myInfoResponse;
  }
}

export const authApiService = new AuthApiService();
