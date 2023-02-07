import React, { useReducer } from 'react';
import BookingForm from "../components/BookingForm";

interface AvailableTimesState {
  selectedDate: string;
  times: string[];
}

const initialState: AvailableTimesState = {
  selectedDate: new Date().toISOString().slice(0, 10),
  times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
};

const updateTimes = (state: AvailableTimesState, action: { type: string; date: string }) => {
  switch (action.type) {
    case "updateTimes":
      return {
        ...state,
        selectedDate: action.date,
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      };
    default:
      return state;
  }
};

const initializeTimes = () => initialState;

export default function Reservations() {
  const [state, dispatch] = useReducer(updateTimes, initialState, initializeTimes);
  return (
    <div className="App-reservations">
      <BookingForm availableTimes={state} dispatch={dispatch} />
    </div>
  );
}
