import React from "react";
import { Button, FormField, Select, Slider, TextField, Typography } from "rmwc";

export default function BookingForm() {
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState("");
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Date", date, "Time:", time, "Guests:", guests, "Occasion:", occasion);
    };
    return (
        <>
        <Typography use="headline2" tag="h1">
            Reservations
        </Typography>
        <form onSubmit={handleSubmit}>
            <FormField style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <TextField
                    label="date"
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    required
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setDate(event.target.value)}
                />
                <Select
                    label="Choose time"
                    options={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
                    required
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setTime(event.target.value)}
                />
                <label htmlFor="guests">Number of guests</label>
                <Slider
                    value={guests}
                    onChange={(evt: { detail: { value: React.SetStateAction<number>; }; }) => setGuests(evt.detail.value)}
                    onInput={(evt: { detail: { value: React.SetStateAction<number>; }; }) => setGuests(evt.detail.value)}
                    discrete
                    step={1}
                    min={1}
                    max={10}
                    id="guests"
                />
                <Select
                    label="Occasion"
                    options={['Birthday', 'Anniversary']}
                    onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setOccasion(event.target.value)}
                />
                <Button
                    label="Make Your reservation"
                    raised
                    type="submit"
                    style={{ backgroundColor: '#F4CE14', color: '#000000' }}
                />
            </FormField>
        </form>
        </>
    );
}
