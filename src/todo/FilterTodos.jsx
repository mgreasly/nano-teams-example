import React from "react";
import { connect } from "redux-zero/react";
import { actions, mapToProps } from "./store";

export default connect(mapToProps, actions)(({ status, setStatus }) => (
    <div>
        <span>Show:</span>
        <button disabled={status === 'all'} onClick={() => setStatus('all')}>All</button>
        <button disabled={status === 'active'} onClick={() => setStatus('active')}>Active</button>
        <button disabled={status === 'completed'} onClick={() => setStatus('completed')}>Completed</button>
    </div>
));
