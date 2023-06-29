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