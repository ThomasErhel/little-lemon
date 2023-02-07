import React from "react";
import { Typography } from "rmwc";

export default function Confirmation() {
    return (
        <div className="App-confirmation">
        <Typography className="title" use="headline2" tag="h1">
            Confirmed
        </Typography>
        <Typography use="body1" tag="p">
                Thank you for booking a table at Little Lemon!
        <Typography use="body1" tag="p">
                Your reservation is confirmed.
        </Typography>
        <Typography use="body1" tag="p">
                We are looking forward to welcoming you and your guests to our restaurant.
        </Typography>
        <Typography use="body1" tag="p">
                If you need to make any changes to your reservation, please do not hesitate to contact us.
        </Typography>
                Best regards,
                The Little Lemon Team.
            </Typography>
        </div>
    );
}