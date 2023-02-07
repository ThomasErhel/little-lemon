import React from "react";
import "../index.css";
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem, Tooltip } from "rmwc";
import { Link, Outlet } from 'react-router-dom';

export default function Nav() {
    return (
        <>
        <nav>
            <TopAppBar style={{ backgroundColor: '#FFFFFF' }}>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarTitle style={{ color: '#495E57' }}>LITTLE LEMON</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection alignEnd>
                        <Tooltip content="Home">
                            <TopAppBarActionItem aria-label="On Click" icon="home" tag={Link} to="/" style={{ color: '#495E57' }} />
                        </Tooltip>
                        <Tooltip content="About">
                            <TopAppBarActionItem aria-label="On Click" icon="info" tag={Link} to="/about" style={{ color: '#495E57' }} />
                        </Tooltip>
                        <Tooltip content="Menu">
                            <TopAppBarActionItem aria-label="On Click" icon="restaurant_menu" tag={Link} to="/menu" style={{ color: '#495E57' }} />
                        </Tooltip>
                        <Tooltip content="Reservations">
                            <TopAppBarActionItem aria-label="On Click" icon="calendar_month" tag={Link} to="/reservations" style={{ color: '#495E57' }} />
                        </Tooltip>
                        <Tooltip content="Order online">
                            <TopAppBarActionItem aria-label="On Click" icon="shopping_basket" tag={Link} to="/order" style={{ color: '#495E57' }} />
                        </Tooltip>
                        <Tooltip content="Login">
                            <TopAppBarActionItem aria-label="On Click" icon="login" tag={Link} to="/login" style={{ color: '#495E57' }} />
                        </Tooltip>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
        </nav>
            <Outlet />
        </>
    );
}