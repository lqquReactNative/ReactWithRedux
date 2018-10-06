import * as Types from '../Actions/ActionTypes';

export default function counter(count = 0, action = {}) {
    switch (action.type) {
        case Types.INCREMENT:
            return count + 1;
        case Types.DECREMENT:
            return count - 1;
        default:
            return count;
    }
}
