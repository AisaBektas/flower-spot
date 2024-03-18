import { AxiosRequestConfig } from "axios";
import { IToken } from "../../interfaces/token.interface";

const appendToken = (
  config: AxiosRequestConfig,
  token: string | null | IToken
): void => {
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
};

export default appendToken;
