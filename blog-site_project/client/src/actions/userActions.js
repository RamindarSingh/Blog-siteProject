import axios from 'axios'
import {FETCH_USERS} from './types';

export const fetchUsers = () => dispatch => {

    axios.get('/api/users')
        .then(res => dispatch({
        type: FETCH_USERS,
        payload: res.data
    }))
}