import {setAlert} from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const INITIAL_STORE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function( state = INITIAL_STORE, action) {
    const {type, payload} = action;

    switch(type) {
        case REGISTER_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        }
        case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
        token: null,
        isAuthenticated: false,
        loading: false
    };
    default: 
    return state;
    }
}