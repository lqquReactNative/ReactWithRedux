import * as Types from '../Actions/ActionTypes';

const initState = {
    count: 0,
}
export default function counter(state = initState, action = {}) {
    switch (action.type) {
        case Types.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case Types.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
}
