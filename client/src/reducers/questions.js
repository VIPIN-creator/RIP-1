export default (state = {currentQuestion : {body: {id: "", title: "", statement: "", inputFormat: "", outputFormat: ""}, fetched: false}, allQues: [], error: false}, action) =>{
    if(action.type === 'GET_QUESTION_BY_ID' && !action.error){
        console.log('GET_Q_ID');
        if (!state.currentQuestion.fetched) {
            return {
                ...state,
                currentQuestion: {
                    body: {
                        id: action.response.id,
                        title: action.response.title,
                        statement: action.response.statement,
                        inputFormat: action.response.inputFormat,
                        outputFormat: action.response.outputFormat
                    },
                    fetched: true
                }
            }
        }
        else {
            return state
        }
    }
    else if(action.type === 'GET_ALL_QUESTION' && !action.error) {
        console.log(action.response.allQues);
        console.log(state);
        return {
            ...state,
            allQues: action.response.allQues
        }
    }
    else if (action.type === 'SET_QUESTION_ID' && !action.error) {
        console.log('SET_S_ID');
        console.log(state);
        return {
            ...state,
            currentQuestion: {
                body: {
                    id: action.response
                },
                fetched: false
            }
        }
    }
    else return state;
}