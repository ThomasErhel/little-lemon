import React from "react";
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem, Tooltip } from "rmwc";


export default function Nav() {
    return (
        <nav>
            <TopAppBar>
                <TopAppBarRow>
                <TopAppBarSection alignStart>
                    <TopAppBarTitle>LITTLE LEMON</TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection alignEnd>
                    <Tooltip content="Home">
                    <TopAppBarActionItem icon="home" />
                    </Tooltip>
                    <Tooltip content="About">
                    <TopAppBarActionItem icon="info" />
                    </Tooltip>
                    <Tooltip content="Menu">
                    <TopAppBarActionItem icon="restaurant_menu" />
                    </Tooltip>
                    <Tooltip content="Reservations">
                    <TopAppBarActionItem icon="table_restaurant" />
                    </Tooltip>
                    <Tooltip content="Order online">
                    <TopAppBarActionItem icon="shopping_basket" />
                    </Tooltip>
                    <Tooltip content="Login">
                    <TopAppBarActionItem icon="login" />
                    </Tooltip>
                </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
        </nav>
    );
}