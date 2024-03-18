import { apiService } from "../../../core/api/services/apiService";

class FlowersApiService {
  async getFlowers(): Promise<any> {
    const flowersResponse: any = apiService.responseHandler(
      await apiService.get<any>("v1/flowers")
    );

    return flowersResponse;
  }
}

export const flowersApiService = new FlowersApiService();
