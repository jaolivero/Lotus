import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';

import { REGISTER_SUCCESS, REGISTER_FAIL
} from '../actions/types';

export const register = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password});

    try {
        const res = await api.post('/users', formData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch(err) {

        const errors = err.response.data.errors;

        if(errors) {
            errors.forEarch(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}