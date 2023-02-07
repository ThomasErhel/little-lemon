import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../components/Api";
import { Typography } from "rmwc";

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
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
  );
}