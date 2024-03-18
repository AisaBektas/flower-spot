import axios, { AxiosInstance } from "axios";
import appendToken from "./appendToken";
import { tokenApiService } from "../services/tokenApiService";
import { IToken } from "../../interfaces/token.interface";
import { clearLocalStorage } from ".";
import { tokenService } from "../services/tokenService";

const interceptResponse = (httpClient: AxiosInstance): void => {
  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        if (error.message === "Network Error") {
          console.error("Network error - server is probably down");
          throw error;
        } else {
          console.error("Unknown error", error);
          throw error;
        }
      } else {
        const userRefreshToken = tokenService.token?.refresh_token;

        switch (error.response.status) {
          case 401: // Unauthorized
            if (userRefreshToken) {
              return tokenApiService
                .refreshToken(userRefreshToken)
                .then((token) => {
                  tokenService.token = token;
                  return token;
                })
                .then((token: IToken) => {
                  appendToken(error.config, token.access_token);

                  return axios.request(error.config);
                })
                .catch(() => {
                  clearLocalStorage();
                });
            } else {
              clearLocalStorage();
            }
            break;
        }
      }
      return error.response;
    }
  );
};
export default interceptResponse;
