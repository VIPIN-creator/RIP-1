export default (state={},action)=>{
    if(action.type === 'SIGN_UP' && action.error){
        return {
            ...state,
            signupErrMsg: action.response
        }
    }
    if(action.type === 'DELETE_USER')
    {   
        if(action.response.error.status){
            return {...state,
                delErrMsg: action.response.error.message
            }
        }
        else{
            return {...state,
                delErrMsg: null
            }
        }
        
    }
    if(action.type === 'EDIT_USER'){
        if(action.response.error.status)
        {
            return {...state,
                editErrMsg: action.response.error.message
            }
        }
        else if(!action.response.error.status)
        {
            return {...state,
                editErrMsg: null
            }
        }
    }
    if(action.type === 'EDIT_PASSWORD'){
        if(action.response.error.status)
        {
            return {...state,
                passErrMsg: action.response.error.message
            }
        }
        else if(!action.response.error.status)
        {
            return {...state,
                passErrMsg: null
            }
        }
    }
    if(action.type === 'LOG_IN' && action.response.error.status){
        return {
            ...state,
            loginErrMsg: action.response.error.message
        }
    }
    if(action.type === 'CLEAR_FORM_ERR'){
        return{}
    }
    return state;
}