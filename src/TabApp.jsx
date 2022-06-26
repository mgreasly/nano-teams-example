import React from "react";
import * as teams from '@microsoft/teams-js';
import Links from './Links';

export default () => {
    console.log("initialise...");
    teams.app.initialize();
    var data = teams.app.getContext();

    return (
        <>
            <h1>TAB:</h1>
            <div>Context</div>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <Links />
        </>
    )
}