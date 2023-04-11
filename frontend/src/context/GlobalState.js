import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    eventbrite: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    // actions
    function addEvent(event) {
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        });
    }


    function deleteEvent(id) {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        });
    }

   
    return (<GlobalContext.Provider value={{
        eventbrite: state.eventbrite,
        addEvent,
        deleteEvent

       
    }}>
    {children}
    </GlobalContext.Provider>);
}