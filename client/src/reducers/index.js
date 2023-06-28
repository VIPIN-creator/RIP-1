import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './auth';
import formSubmitErrors from './formSubmitErrors';
import formSubmitSuccess from './formSubmitSuccess';


export default combineReducers({
    auth,
    form: formReducer,
    formSubmitErrors,
    formSubmitSuccess
})