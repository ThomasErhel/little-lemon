import React from "react";
import "../index.css";
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem, Tooltip } from "rmwc";


export default function Nav() {
    return (
        <nav>
            <TopAppBar style={{ backgroundColor: '#FFFFFF' }}>
                <TopAppBarRow>
                <TopAppBarSection alignStart>
                    <TopAppBarTitle style={{ color: '#495E57' }}>LITTLE LEMON</TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection alignEnd>
                    <Tooltip content="Home">
                    <TopAppBarActionItem icon="home" style={{ color: '#495E57' }} />
                    </Tooltip>
                    <Tooltip content="About">
                    <TopAppBarActionItem icon="info" style={{ color: '#495E57' }} />
                    </Tooltip>
                    <Tooltip content="Menu">
                    <TopAppBarActionItem icon="restaurant_menu" style={{ color: '#495E57' }} />
                    </Tooltip>
                    <Tooltip content="Reservations">
                    <TopAppBarActionItem icon="calendar_month" style={{ color: '#495E57' }} />
                    </Tooltip>
                    <Tooltip content="Order online">
                    <TopAppBarActionItem icon="shopping_basket" style={{ color: '#495E57' }} />
                    </Tooltip>
                    <Tooltip content="Login">
                    <TopAppBarActionItem icon="login" style={{ color: '#495E57' }} />
                    </Tooltip>
                </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
        </nav>
    );
}