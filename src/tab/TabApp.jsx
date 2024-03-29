import React, { useEffect, useState } from "react";
import * as teams from '@microsoft/teams-js';
import Links from '../Links';

export default () => {
    const [context, setContext] = useState({});
    const [token, setToken] = useState(null);

    useEffect(() => {
        teams.app.initialize();
        teams.app.getContext().then((context) => {
            setContext(context);
            const t = teams.authentication.getAuthToken();
            setToken(token);
        });
    }, []);

    return (
        <>
            <h1>TAB:</h1>
            <div>Context</div>
            <div>
                <pre>{JSON.stringify(context, null, 2)}</pre>
            </div>
            <div>
                <pre>{JSON.stringify(token, null, 2)}</pre>
            </div>
            <Links />
        </>
    )
}