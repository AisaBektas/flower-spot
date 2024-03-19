import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { HomePage } from "../pages/HomePage";

const queryClient = new QueryClient();

describe("HomePage Component", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
  it('should display the "Loading...', () => {
    const text = screen.getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});
