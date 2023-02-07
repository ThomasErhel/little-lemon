/* eslint-disable react-hooks/rules-of-hooks */
import { render, screen } from "@testing-library/react";
import Reservations from "./pages/Reservations";

describe("BookingForm", () => {
  test("renders heading text", () => {
    render(<Reservations />);
    const heading = screen.getByText("Reservations");
    expect(heading).toBeInTheDocument();
  });

  test("renders label text", () => {
    render(<Reservations />);
    const label = screen.getByText("Number of guests");
    expect(label).toBeInTheDocument();
  });
});

describe("BookingForm component", () => {
    it("renders the 'Make Your reservation' button", () => {
      render(<Reservations />);
      const button = screen.getByText("Make Your reservation");
      expect(button).toBeInTheDocument();
    });
  });
