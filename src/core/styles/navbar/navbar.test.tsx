import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "../../const/testUtils";
import { Navbar } from "./Navbar";

describe("Navbar Component", () => {
  it("should display login button ", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("should toggle mobile menu icon and close icon visibility when mobile menu button is clicked", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const mobileMenuButton = screen.getByTestId("mobile-menu-toggle");
    const menuIcon = screen.getByAltText(/menu icon/i);
    const closeIcon = screen.getByAltText(/close icon/i);

    fireEvent.click(mobileMenuButton);

    expect(closeIcon).toHaveClass("block");
    expect(menuIcon).toHaveClass("hidden");

    fireEvent.click(mobileMenuButton);

    expect(menuIcon).toHaveClass("block");
    expect(closeIcon).toHaveClass("hidden");
  });
});
