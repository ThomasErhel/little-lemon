import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../components/Api";
import { Typography } from "rmwc";
import { BrowserRouter } from "react-router-dom";

export default function BookingPage() {
  function updateTimes(date: any) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className="App-reservations">
        <Typography className="title" use="headline2" tag="h1">
            Reservations
        </Typography>
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </BrowserRouter>
    </div>
  );
}