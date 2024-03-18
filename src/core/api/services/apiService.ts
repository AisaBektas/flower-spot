import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClient } from "./httpClient";
import interceptRequest from "../utils/interceptRequest";
import interceptResponse from "../utils/interceptResponse";
import statusChecker from "../utils/statusChecker";

const initializeApiInterceptors = (httpClient: AxiosInstance): void => {
  interceptRequest(httpClient);
  interceptResponse(httpClient);
};

class ApiService {
  private _httpClient = HttpClient.getInstance();

  constructor() {
    initializeApiInterceptors(this._httpClient);
  }

  responseHandler<T = unknown>({ data }: AxiosResponse<T>) {
    return data;
  }

  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return statusChecker(await this._httpClient.get<T>(url, config));
  }

  async post<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return statusChecker(await this._httpClient.post<T>(url, body, config));
  }

  async patch<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return statusChecker(await this._httpClient.patch<T>(url, body, config));
  }

  async put<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return statusChecker(await this._httpClient.put<T>(url, body, config));
  }

  async delete(url: string): Promise<AxiosResponse<null>> {
    return statusChecker(await this._httpClient.delete(url));
  }
}

export const apiService = new ApiService();
