import { Link } from "react-router-dom";
import { Card, CardActionButton, CardActions, CardMedia, CardPrimaryAction, Typography } from "rmwc";

export default function Hero() {
    return (
        <div className='App-hero'>
            <Card style={{ width: 'auto', backgroundColor: '#495E57' }}>
                <CardPrimaryAction>
                    <CardMedia
                        sixteenByNine
                        style={{
                            backgroundImage: 'url(icons_assets/restauranfood.jpg)',
                            height: '406px',
                        }}
                    />
                    <div style={{ padding: '0 1rem 1rem 1rem', color: '#F4CE14' }}>
                        <Typography use="headline6" tag="h2">
                            Little Lemon
                        </Typography>
                        <Typography
                            use="subtitle2"
                            tag="h3"
                            style={{ marginTop: '-1rem', color: '#EDEFEE' }}
                        >
                            Chicago
                        </Typography>
                        <Typography
                            use="body1"
                            tag="div"
                            style={{ color: '#FFFFFF' }}
                        >
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Typography>
                    </div>
                </CardPrimaryAction>
                <CardActions>
                        <CardActionButton aria-label="On Click" raised icon="calendar_month" tag={Link} to="/reservations" style={{ color: '#000000', backgroundColor: '#F4CE14' }}>Reserve a table</CardActionButton>
                </CardActions>
            </Card>
        </div>
    );
}