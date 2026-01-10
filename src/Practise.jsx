import React, { useReducer } from 'react';

const ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout',
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return { isLoggedIn: true };
        case ACTIONS.LOGOUT:
            return { isLoggedIn: false };
        default:
            return state;
    }
};

const Practise = () => {
    const [state, dispatch] = useReducer(reducer, { isLoggedIn: false });

    return (
        <div>
            <h2>{state.isLoggedIn ? "Welcome, User!" : "Please log in."}</h2>
            <button onClick={() => dispatch({ type: ACTIONS.LOGIN })}>Login</button>
            <button onClick={() => dispatch({ type: ACTIONS.LOGOUT })}>Logout</button>
        </div>
    );
};

export default Practise;

