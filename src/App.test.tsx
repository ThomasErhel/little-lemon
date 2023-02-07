import { render, screen } from "@testing-library/react";
import Reservations from "./pages/Reservations";

/*
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

  describe('initializeTimes', () => {
    it('calls fetchAPI and dispatches an action with the returned times', async () => {
      const mockDispatch = jest.fn();
      const mockFetchAPI = jest.fn(() => Promise.resolve(['17:00 PM', '19:00 PM', '21:00 PM']));

      await initializeTimes()(mockDispatch, undefined, { fetchAPI: mockFetchAPI });

      expect(mockFetchAPI).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        type: INITIALIZE_TIMES,
        times: ['17:00 PM', '19:00 PM', '21:00 PM'],
      });
    });
  });

  describe('updateTimes', () => {
    it('calls fetchAPI and dispatches an action with the returned times', async () => {
      const mockDispatch = jest.fn();
      const mockFetchAPI = jest.fn(() => Promise.resolve(['17:00 PM', '19:00 PM', '21:00 PM']));

      await updateTimes('2023-05-05')(mockDispatch, undefined, { fetchAPI: mockFetchAPI });

      expect(mockFetchAPI).toHaveBeenCalledWith('2023-05-05');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UPDATE_TIMES,
        times: ['17:00 PM', '19:00 PM', '21:00 PM'],
      });
    });
  });
*/