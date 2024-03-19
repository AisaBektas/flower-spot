import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { apiService } from "../../../core/api/services/apiService";
import LoginModal from "../../../core/styles/navbar/LoginModal";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const LOGIN_CREDENTIALS = {
  email: "bektasaisa@gmail.com",
  password: "123456",
};

export const loginRequest = async (requestData: any) => {
  return await apiService.post("v1/users/login", requestData);
};

describe("testing a login funcionality", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginModal />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  it("should get access_token:", async () => {
    const { status } = await loginRequest(LOGIN_CREDENTIALS);

    expect(status).toBe(200);
  });
});
