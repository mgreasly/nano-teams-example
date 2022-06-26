import React, { useState } from "react";
import * as teams from '@microsoft/teams-js';
import Links from './Links';

export default () => {
    console.log("initialise...");
    const [context, setContext] = useState({});
    teams.app.initialize();
    teams.app.getContext().then((context) => {
        console.log("context... ");
        console.log(context);
        setContext(context);
    });

    return (
        <>
            <h1>TAB:</h1>
            <div>Context</div>
            <div>
                <pre>{JSON.stringify(context, null, 2)}</pre>
            </div>
            <Links />
        </>
    )
}