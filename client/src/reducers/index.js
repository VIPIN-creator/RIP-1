import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './auth';
import code from './code';
import formSubmitErrors from './formSubmitErrors';
import formSubmitSuccess from './formSubmitSuccess';
import questions from './questions';

export default combineReducers({
    auth,
    form: formReducer,
    code,
    formSubmitErrors,
    formSubmitSuccess,
    questions,
})