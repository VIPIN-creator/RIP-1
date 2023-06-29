export default (state = {output: "", error: false}, action) =>{
    if(action.type === 'RUN_CODE'){
        return {
            ...state,
            output: action.output,
            error: action.error
        }
    }
    if(action.type === 'RUN_TEST'){
        return {
            ...state,
            output: action.output,
            error: action.error
        }
    }
    else return state;
}