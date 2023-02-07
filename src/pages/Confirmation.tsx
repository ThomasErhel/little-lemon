import React from "react";
import { Typography } from "rmwc";

export default function Confirmation() {
    return (
        <>
        <Typography className="title" use="headline2" tag="h1">
            Confirmed
        </Typography><Typography use="body1" tag="p">
                Thank you for booking a table at Little Lemon!
                Your reservation is confirmed.
                We are looking forward to welcoming you and your guests to our restaurant.
                If you need to make any changes to your reservation, please do not hesitate to contact us.
                Best regards,
                The Little Lemon Team.
            </Typography>
        </>
    );
}