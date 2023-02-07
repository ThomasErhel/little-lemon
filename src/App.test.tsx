import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./pages/Reservations";
import BookingForm from "./components/BookingForm";

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

describe("Reservation Form HTML validation", () => {
  it("should have required attribute for first name input", () => {
    render(<BookingForm />);
    const firstNameInput = screen.getByLabelText("First Name");
    expect(firstNameInput).toHaveAttribute("required");
    expect(firstNameInput).toHaveAttribute("minLength", "2");
    expect(firstNameInput).toHaveAttribute("maxLength", "50");
  });

  it("should have required attribute for email input", () => {
    render(<BookingForm />);
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("minLength", "4");
    expect(emailInput).toHaveAttribute("maxLength", "200");
  });

  it("should have required attribute for phone number input", () => {
    render(<BookingForm />);
    const phoneInput = screen.getByLabelText("Phone Number");
    expect(phoneInput).toHaveAttribute("required");
    expect(phoneInput).toHaveAttribute("minLength", "10");
    expect(phoneInput).toHaveAttribute("maxLength", "25");
  });

  it("should have required attribute for date input", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().slice(0, 10)
    );
  });

  it("should have required attribute for time select", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText("Time");
    expect(timeSelect).toHaveAttribute("required");
  });

  it("should have required attribute for occasion select", () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });

  it("should have required attribute for guests slider", () => {
    render(<BookingForm />);
    const guestsSlider = screen.getByLabelText("Number of guests");
    expect(guestsSlider).toHaveAttribute("required");
  });
});

describe('JavaScript validation tests', () => {
  test('validates firstName input field', () => {
    const { getByLabelText } = render(<BookingForm />);
    const firstNameInput = getByLabelText('First Name');

    // test for valid input
    fireEvent.change(firstNameInput, { target: { value: 'Thomas' } });
    expect(firstNameInput.value).toBe('Thomas');

    // test for invalid input
    fireEvent.change(firstNameInput, { target: { value: 'T' } });
    expect(firstNameInput.value).toBe('T');
  });

  test('validates lastName input field', () => {
    const { getByLabelText } = render(<BookingForm />);
    const lastNameInput = getByLabelText('Last Name');

    // test for valid input
    fireEvent.change(lastNameInput, { target: { value: 'Erhel' } });
    expect(lastNameInput.value).toBe('Erhel');

    // test for invalid input
    fireEvent.change(lastNameInput, { target: { value: 'E' } });
    expect(lastNameInput.value).toBe('E');
  });

  test('validates email input field', () => {
    const { getByLabelText } = render(<BookingForm />);
    const emailInput = getByLabelText('Email');

    // test for valid input
    fireEvent.change(emailInput, { target: { value: 'thomas.erhel@gmail.com' } });
    expect(emailInput.value).toBe('thomas.erhel@gmail.com');

    // test for invalid input
    fireEvent.change(emailInput, { target: { value: 'thomas.erhel@gmail' } });
    expect(emailInput.value).toBe('thomas.erhel@gmail');
  });

  test('validates tel input field', () => {
    const { getByLabelText } = render(<BookingForm />);
    const telInput = getByLabelText('Phone Number');

    // test for valid input
    fireEvent.change(telInput, { target: { value: '1234567890' } });
    expect(telInput.value).toBe('1234567890');

    // test for invalid input
    fireEvent.change(telInput, { target: { value: '123456789' } });
    expect(telInput.value).toBe('123456789');
  });

  test('validates date input field', () => {
    const { getByLabelText } = render(<BookingForm />);
    const dateInput = getByLabelText('Date');

    // test for valid input
    fireEvent.change(dateInput, { target: { value: '2023-05-05' } });
    expect(dateInput.value).toBe('2023-05-05');

    // test for invalid input
    fireEvent.change(dateInput, { target: { value: '2023-05' } });
    expect(dateInput.value).toBe('2023-05');
*/