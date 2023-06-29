import question from '../apis/questions';

export const getQuestionDetails = (question_id) => async (dispatch)=>{
    try {
        const token= JSON.parse(localStorage.getItem('userData')).token;
        const response = await question.get(`/${question_id}`, { headers:{'Authorization' : `Bearer ${token}`} });
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

export const postQuestionDetails = (q) => async (dispatch)=>{
    try {
        const token= JSON.parse(localStorage.getItem('userData')).token;
        const response = await question.post("/", q, { headers:{'Authorization' : `Bearer ${token}`} });
        console.log(response.data);
        dispatch({
            type: 'POST_QUESTION',
            error: false
        });
    }
    catch(e){
        console.log(e);
        dispatch({
            type: 'POST_QUESTION',
            error: true,
        });
    }
}