import question from '../apis/questions';

export const getQuestionDetails = (question_id) => async (dispatch)=>{
    try {
        const response = await question.get(`/${question_id}`);
        console.log(response.data);
        dispatch({
            type: 'GET_QUESTION_BY_ID',
            response: response.data,
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'GET_QUESTION_BY_ID',
            error: true,
            response: e.response
        });
    }
}

export const getAllQuestions = () => async (dispatch) => {
    try {
        const response = await question.get('/');
        console.log(response.data);
        dispatch({
            type: 'GET_ALL_QUESTION',
            response: response.data,
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'GET_ALL_QUESTION',
            error: true,
            response: e.response
        });
    }
}

export const setQuestionId = (id) => async (dispatch) => {
    dispatch({
        type: 'SET_QUESTION_ID',
        response: id,
        error: false
    });
}