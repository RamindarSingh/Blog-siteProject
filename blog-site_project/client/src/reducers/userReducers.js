import {FETCH_USERS} from '../actions/types'

const initialState = {
    users: [],
    user:{}
}

export default (state = initialState, action) => {
    switch (action.types){
        case FETCH_USERS:
            return{
                ...state,
                users: action.payload
            }

        default:
            return state;

    }
}