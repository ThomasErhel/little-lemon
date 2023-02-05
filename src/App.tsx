import React from 'react';
import './App.css';
import { Button } from "@rmwc/button";
import { Typography } from "@rmwc/typography";
import Nav from "./components/Nav";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Card, CardActionButton, CardActionButtons, CardActionIcon, CardActionIcons, CardActions, CardMedia, CardPrimaryAction, Grid, GridCell } from 'rmwc';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='App-hero'>
        <Card style={{ width: 'auto' }}>
          <CardPrimaryAction>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: 'url(icons_assets/restauranfood.jpg)',
                height: '406px',
              }}
            />
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography use="headline6" tag="h2">
                Little Lemon
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
                style={{ marginTop: '-1rem' }}
              >
                Chicago
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
              >
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton raised icon="calendar_month">Reserve a table</CardActionButton>
            </CardActionButtons>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
