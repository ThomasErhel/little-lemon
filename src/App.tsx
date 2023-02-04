import React from 'react';
import './App.css';
import { Button } from "@rmwc/button";
import { Typography } from "@rmwc/typography";

function App() {
  return (
    <div className="App">
      <Typography use="headline4">Little Lemon</Typography>
      <Typography use="subtitle1" tag="p">
        Chicago
      </Typography>
      <Typography use="body1">
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
      </Typography>
      <Button raised icon="calendar_month">
        Reserve a table
      </Button>
    </div>
  );
}

export default App;
