import { useState } from "react";
import { Button, FormField, Select, Slider, TextField } from "rmwc";

export default function ReservationForm(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      tel,
      guests,
      date,
      occasion,
      preferences,
      comments,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField style={{ display: 'grid', maxWidth: 'auto', gap: '20px' }}>
        <TextField
          type="text"
          id="firstName"
          label="First Name"
          required
          minLength={2}
          maxLength={50}
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />

        <TextField
          type="text"
          id="lastName"
          label="Last Name"
          minLength={2}
          maxLength={50}
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />

        <TextField
          type="email"
          id="email"
          label="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          type="tel"
          id="phonenum"
          label="Phone Number"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        />

        <label htmlFor="guests">Number of guests</label>
        <Slider
          type="number"
          id="guests"
          label="Number of guests"
          value={guests}
          required
          discrete
          step={1}
          min={1}
          max={10}
          onChange={(e) => setGuests(e.target.value)}
          onInput={(e) => setGuests(e.target.value)}
        />

        <TextField
          type="date"
          id="date"
          label="Date"
          required
          min={new Date().toISOString().slice(0, 10)}
          value={date}
          onChange={handleDateChange}
        />

        <Select
          id="time"
          label="Time"
          required>
          {finalTime}
        </Select>

        <Select
          id="occasion"
          label="Occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </Select>

        <Select
          id="preferences"
          label="Seating preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </Select>

        <TextField
          id="comments"
          textarea
          label="Additional Comments"
          rows={8}
          maxLength={280}
          characterCount
          resizeable
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <Button
          label="Make Your reservation"
          raised
          type="submit"
          style={{ backgroundColor: '#F4CE14', color: '#000000' }}
        />
      </FormField>
    </form>
  );
}
