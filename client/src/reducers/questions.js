export default (state = {body: {title: "", statement: "", inputFormat: "", outputFormat: ""}, error: false}, action) =>{
    if(action.type === 'GET_QUESTION_BY_ID' && !action.error){
        console.log(action.response);
        return {
            ...state,
            body: {
                title: action.response.title,
                statement: action.response.statement,
                inputFormat: action.response.inputFormat,
                outputFormat: action.response.outputFormat
            }
        }
    }
    else return state;
}