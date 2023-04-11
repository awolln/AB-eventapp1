export default (state, action) => {
    switch(action.type) {

        case 'DELETE_EVENT':
            return {
                ...state,
                eventbrite: state.eventbrite.filter(event => event.id !== action.payload)
            }
        case 'ADD_EVENT':
            return {
                ...state,
                eventbrite: [action.payload, ...state.eventbrite]
            }

       
        default:
            return state;
    }
}